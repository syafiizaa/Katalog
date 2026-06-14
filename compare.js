// ============================================================
// COMPARE.JS — Pembanding data katalog vs database kasir (MySQL)
// ------------------------------------------------------------
// Membaca dump .sql kasir di browser, membandingkan dengan
// products.js berdasarkan (nama produk + varian). TANPA server.
// ============================================================

// Skema tabel POS (sesuaikan di sini bila struktur kasir berubah)
const SCHEMA = {
    productTable:      'barang',
    productId:         'id',
    productName:       'nama',
    productCategoryId: 'kategori_id',
    variantTable:      'barang_varian',
    variantFk:         'barang_id',
    variantName:       'nama_varian',
    categoryTable:     'kategori',
    categoryId:        'id',
    categoryName:      'nama'
};

// localStorage key milik Panel Admin (untuk kirim produk ke draft-nya)
const ADMIN_DRAFT_KEY = 'adminProductsDraft';
const ADMIN_DIRTY_KEY = 'adminProductsDirty';

// Ambang kemiripan nama untuk dianggap "mungkin sama" (0–1)
const FUZZY_THRESHOLD = 0.84;

// State
let catalogUnits = [];   // { nama, varian }
let catalogNameSet = new Set();
let catalogNameList = []; // nama produk unik di katalog (untuk pencocokan mirip)
let posCategoryByName = {}; // norm(nama POS) -> nama kategori (untuk auto-isi kategori)
let missingGroups = [];   // ada di kasir, tidak di katalog
let onlyCatGroups = [];   // ada di katalog, tidak di kasir

// ============================================================
// SQL PARSER (sudah diuji ke data nyata)
// ============================================================
function tableColumns(sql, table) {
    const m = 'CREATE TABLE `' + table + '` (';
    const at = sql.indexOf(m);
    if (at === -1) return [];
    const lines = sql.slice(at + m.length).split('\n');
    const cols = [];
    for (const line of lines) {
        const t = line.trim();
        if (t.startsWith(')')) break;
        if (/^(PRIMARY KEY|UNIQUE KEY|KEY|CONSTRAINT|FULLTEXT|SPATIAL|INDEX|UNIQUE)\b/i.test(t)) continue;
        const c = t.match(/^`([^`]+)`/);
        if (c) cols.push(c[1]);
    }
    return cols;
}

function readTuple(s, i) {
    const fields = [];
    const ws = c => c === ' ' || c === '\n' || c === '\r' || c === '\t';
    while (true) {
        while (ws(s[i])) i++;
        let val;
        if (s[i] === "'") {
            i++; let str = '';
            while (i < s.length) {
                const c = s[i];
                if (c === '\\') { str += s[i + 1]; i += 2; continue; }
                if (c === "'") { if (s[i + 1] === "'") { str += "'"; i += 2; continue; } i++; break; }
                str += c; i++;
            }
            val = str;
        } else {
            let t = '';
            while (i < s.length && s[i] !== ',' && s[i] !== ')') { t += s[i]; i++; }
            t = t.trim();
            val = (t.toUpperCase() === 'NULL') ? null : t;
        }
        fields.push(val);
        while (ws(s[i])) i++;
        if (s[i] === ',') { i++; continue; }
        if (s[i] === ')') { i++; break; }
        if (i >= s.length) break;
    }
    return { fields, next: i };
}

function tableRows(sql, table) {
    const createCols = tableColumns(sql, table);
    const marker = 'INSERT INTO `' + table + '`';
    const rows = [];
    let idx = 0;
    while (true) {
        const at = sql.indexOf(marker, idx);
        if (at === -1) break;
        const valuesPos = sql.indexOf('VALUES', at);
        if (valuesPos === -1) { idx = at + marker.length; continue; }

        // Kolom: pakai daftar eksplisit di INSERT bila ada, jika tidak pakai CREATE TABLE
        const between = sql.slice(at + marker.length, valuesPos);
        const listMatch = between.match(/\(([^)]*`[^)]*)\)/);
        const cols = listMatch
            ? Array.from(listMatch[1].matchAll(/`([^`]+)`/g), x => x[1])
            : createCols;

        // Cari ';' penutup di luar string
        let i = valuesPos + 'VALUES'.length, inStr = false;
        while (i < sql.length) {
            const c = sql[i];
            if (inStr) {
                if (c === '\\') { i += 2; continue; }
                if (c === "'") { if (sql[i + 1] === "'") { i += 2; continue; } inStr = false; i++; continue; }
                i++; continue;
            } else {
                if (c === "'") { inStr = true; i++; continue; }
                if (c === ';') break;
                i++;
            }
        }
        const body = sql.slice(valuesPos + 'VALUES'.length, i);

        let k = 0;
        while (k < body.length) {
            while (k < body.length && body[k] !== '(') k++;
            if (k >= body.length) break;
            k++;
            const { fields, next } = readTuple(body, k);
            const obj = {};
            cols.forEach((c, ci) => obj[c] = fields[ci]);
            rows.push(obj);
            k = next;
        }
        idx = i + 1;
    }
    return rows;
}

// ============================================================
// COMPARE LOGIC
// ============================================================
const norm = s => (s == null ? '' : String(s)).trim().toLowerCase().replace(/\s+/g, ' ');
const unitKey = (n, v) => norm(n) + ' ||| ' + norm(v);

// ---- Kemiripan nama (untuk deteksi "mungkin sama / beda penulisan") ----
function levenshtein(a, b) {
    const m = a.length, n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
        const cur = [i];
        for (let j = 1; j <= n; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
        }
        prev = cur;
    }
    return prev[n];
}

function strSim(a, b) {
    if (!a.length && !b.length) return 1;
    return 1 - levenshtein(a, b) / Math.max(a.length, b.length);
}

// Apakah `short` adalah awalan kata dari `long` (mis. "shinzui" -> "shinzui 100ml")
function wordPrefix(short, long) {
    return short.length >= 3 && long.startsWith(short) &&
        (long.length === short.length || long[short.length] === ' ');
}

// Cari kandidat paling mirip di `candidates` (array nama mentah). Null jika di bawah ambang.
function bestMatch(name, candidates) {
    const a = norm(name);
    let best = null;
    for (const cand of candidates) {
        const b = norm(cand);
        if (b === a) continue;
        let score = strSim(a, b);
        const [s, l] = a.length <= b.length ? [a, b] : [b, a];
        if (wordPrefix(s, l)) score = Math.max(score, 0.9);
        if (!best || score > best.score) best = { name: cand, score };
    }
    return (best && best.score >= FUZZY_THRESHOLD) ? best : null;
}

function buildCatalog() {
    const data = (typeof productsData !== 'undefined') ? productsData : [];
    catalogUnits = data.map(r => ({ nama: (r.nama || '').trim(), varian: r.varian || null }));
    catalogNameSet = new Set(catalogUnits.map(u => norm(u.nama)));
    catalogNameList = Array.from(new Set(catalogUnits.map(u => u.nama)));
}

function buildPosUnits(sql) {
    const barang = tableRows(sql, SCHEMA.productTable);
    const varian = tableRows(sql, SCHEMA.variantTable);
    if (barang.length === 0) return null; // tabel tidak ditemukan

    // Peta kategori id -> nama (untuk auto-isi kategori saat kirim ke admin)
    const catById = {};
    tableRows(sql, SCHEMA.categoryTable).forEach(c => {
        catById[c[SCHEMA.categoryId]] = c[SCHEMA.categoryName];
    });

    const vmap = {};
    varian.forEach(v => {
        const fk = v[SCHEMA.variantFk];
        const name = v[SCHEMA.variantName];
        if (fk == null || !name) return;
        (vmap[fk] = vmap[fk] || []).push(String(name).trim());
    });

    posCategoryByName = {};
    const units = [];
    barang.forEach(b => {
        const nama = (b[SCHEMA.productName] || '').trim();
        if (!nama) return;
        posCategoryByName[norm(nama)] = catById[b[SCHEMA.productCategoryId]] || '';
        const vs = vmap[b[SCHEMA.productId]] || [];
        if (vs.length === 0) units.push({ nama, varian: null });
        else vs.forEach(v => units.push({ nama, varian: v }));
    });
    return units;
}

// Kelompokkan baris datar products.js menjadi model admin {nama, kategori, gambar, variants}
function groupCatalogFromFlat(flat) {
    const map = new Map();
    flat.forEach(item => {
        const nama = (item.nama || '').trim();
        if (!nama) return;
        if (!map.has(nama)) map.set(nama, { nama, kategori: (item.kategori || '').trim(), gambar: item.gambar || null, variants: [] });
        const g = map.get(nama);
        if (item.gambar && !g.gambar) g.gambar = item.gambar;
        if (item.varian) g.variants.push(String(item.varian).trim());
    });
    return Array.from(map.values());
}

// Kelompokkan unit per nama produk -> { nama, variants:[], hasNoVariantUnit }
function groupByName(units) {
    const map = new Map();
    units.forEach(u => {
        if (!map.has(u.nama)) map.set(u.nama, { nama: u.nama, variants: [], hasNoVariantUnit: false });
        const g = map.get(u.nama);
        if (u.varian) g.variants.push(u.varian);
        else g.hasNoVariantUnit = true;
    });
    return Array.from(map.values()).sort((a, b) => a.nama.localeCompare(b.nama));
}

function compare(sql) {
    const posUnits = buildPosUnits(sql);
    if (posUnits === null) {
        showToast(`Tabel "${SCHEMA.productTable}" tidak ditemukan di file. Pastikan ini dump database kasir.`);
        return false;
    }

    const catKeys = new Set(catalogUnits.map(u => unitKey(u.nama, u.varian)));
    const posKeys = new Set(posUnits.map(u => unitKey(u.nama, u.varian)));
    const posNameSet = new Set(posUnits.map(u => norm(u.nama)));
    const posNameList = Array.from(new Set(posUnits.map(u => u.nama)));

    const missing = posUnits.filter(u => !catKeys.has(unitKey(u.nama, u.varian)));
    const onlyCat = catalogUnits.filter(u => !posKeys.has(unitKey(u.nama, u.varian)));

    // Untuk tiap nama yang "baru", cari kandidat mirip di data satunya (beda penulisan)
    missingGroups = groupByName(missing).map((g, i) => {
        const isNewProduct = !catalogNameSet.has(norm(g.nama));
        const maybe = isNewProduct ? bestMatch(g.nama, catalogNameList) : null;
        return {
            ...g,
            isNewProduct,
            maybe,
            kategori: posCategoryByName[norm(g.nama)] || '',
            selected: !(isNewProduct && maybe),  // "mungkin sama" tidak dicentang otomatis
            added: false,
            _id: i
        };
    });
    onlyCatGroups = groupByName(onlyCat).map(g => {
        const isNewProduct = !posNameSet.has(norm(g.nama));
        return { ...g, isNewProduct, maybe: isNewProduct ? bestMatch(g.nama, posNameList) : null };
    });

    // Summary
    document.getElementById('sumPos').textContent = posUnits.length;
    document.getElementById('sumCat').textContent = catalogUnits.length;
    document.getElementById('sumMissing').textContent = missing.length;
    document.getElementById('sumOnlyCat').textContent = onlyCat.length;
    document.getElementById('missingCount').textContent = missingGroups.length;
    document.getElementById('onlyCatCount').textContent = onlyCatGroups.length;

    document.getElementById('resultsArea').hidden = false;
    renderResults();
    return true;
}

// ============================================================
// RENDER
// ============================================================
function rowHtml(g, kind) {
    let tag, suggestion = '';
    if (!g.isNewProduct) {
        tag = `<span class="tag new-variant">Varian baru</span>`;
    } else if (g.maybe) {
        tag = `<span class="tag maybe-same">Mungkin sama</span>`;
        const where = kind === 'missing' ? 'di katalog' : 'di kasir';
        const pct = Math.round(g.maybe.score * 100);
        suggestion = `<div class="cmp-suggest">≈ mirip ${where}: <strong>${escapeHtml(g.maybe.name)}</strong> <span class="sim">${pct}%</span></div>`;
    } else {
        tag = `<span class="tag new-product">${kind === 'missing' ? 'Produk baru' : 'Tak ada di kasir'}</span>`;
    }

    let variantsHtml;
    if (g.variants.length) {
        variantsHtml = g.variants.map(v => `<span class="cmp-variant-chip">${escapeHtml(v)}</span>`).join('');
        if (g.hasNoVariantUnit) variantsHtml += `<span class="cmp-variant-chip none">tanpa varian</span>`;
    } else {
        variantsHtml = `<span class="cmp-variant-chip none">tanpa varian</span>`;
    }

    const checkbox = (kind === 'missing')
        ? `<label class="cmp-pick"><input type="checkbox" class="cmp-check" data-mg="${g._id}" ${g.selected ? 'checked' : ''} ${g.added ? 'disabled' : ''}></label>`
        : '';
    const addedBadge = (kind === 'missing' && g.added) ? `<span class="tag added">✓ ditambahkan</span>` : '';

    return `
        <div class="cmp-row${g.added ? ' is-added' : ''}">
            ${checkbox}
            <div class="cmp-row-main">
                <div class="cmp-row-name">${escapeHtml(g.nama)} ${tag} ${addedBadge}</div>
                <div class="cmp-variants">${variantsHtml}</div>
                ${suggestion}
            </div>
        </div>`;
}

function renderResults() {
    const q = norm(document.getElementById('searchInput').value);
    const hideMaybe = document.getElementById('hideMaybe').checked;
    const filt = groups => q ? groups.filter(g => norm(g.nama).includes(q)) : groups;

    let missing = filt(missingGroups);
    if (hideMaybe) missing = missing.filter(g => !(g.isNewProduct && g.maybe));
    const onlyCat = filt(onlyCatGroups);

    // Rincian jenis (dari seluruh data, bukan hasil filter)
    const cNew = missingGroups.filter(g => g.isNewProduct && !g.maybe).length;
    const cMaybe = missingGroups.filter(g => g.isNewProduct && g.maybe).length;
    const cVar = missingGroups.filter(g => !g.isNewProduct).length;
    document.getElementById('missingBreakdown').innerHTML =
        `<strong>${cNew}</strong> produk baru · <strong>${cMaybe}</strong> mungkin sama · <strong>${cVar}</strong> varian baru`;

    const missingList = document.getElementById('missingList');
    const missingEmpty = document.getElementById('missingEmpty');
    missingList.innerHTML = missing.map(g => rowHtml(g, 'missing')).join('');
    missingEmpty.hidden = missingGroups.length !== 0 || q !== '';
    missingList.hidden = missing.length === 0;

    document.getElementById('onlyCatList').innerHTML = onlyCat.map(g => rowHtml(g, 'onlycat')).join('');

    updateSelectionUI();
}

// ============================================================
// KIRIM PRODUK TERPILIH KE DRAFT PANEL ADMIN
// ============================================================
function updateSelectionUI() {
    const btn = document.getElementById('addToAdminBtn');
    if (!btn) return;
    const n = missingGroups.filter(g => g.selected && !g.added).length;
    btn.textContent = n > 0 ? `Tambahkan ${n} ke Admin` : 'Tambahkan ke Admin';
    btn.disabled = n === 0;
}

function addSelectedToAdmin() {
    const selected = missingGroups.filter(g => g.selected && !g.added);
    if (selected.length === 0) { showToast('Belum ada produk yang dicentang.'); return; }

    // Sumber: draft admin kalau ada (agar tidak menimpa kerja admin yang belum diekspor),
    // kalau tidak ada, mulai dari products.js
    let base = null;
    const draft = localStorage.getItem(ADMIN_DRAFT_KEY);
    if (draft) { try { base = JSON.parse(draft); } catch (e) { base = null; } }
    if (!base) base = groupCatalogFromFlat(typeof productsData !== 'undefined' ? productsData : []);

    const byName = new Map(base.map(p => [norm(p.nama), p]));
    let addedProducts = 0, addedVariants = 0;

    selected.forEach(g => {
        const key = norm(g.nama);
        if (byName.has(key)) {
            // Produk sudah ada -> tambah varian yang belum ada
            const p = byName.get(key);
            p.variants = p.variants || [];
            const have = new Set(p.variants.map(v => norm(v)));
            g.variants.forEach(v => {
                if (!have.has(norm(v))) { p.variants.push(v); have.add(norm(v)); addedVariants++; }
            });
        } else {
            // Produk baru
            base.push({ nama: g.nama, kategori: g.kategori || '', gambar: null, variants: g.variants.slice() });
            byName.set(key, base[base.length - 1]);
            addedProducts++;
        }
        g.added = true;
        g.selected = false;
    });

    localStorage.setItem(ADMIN_DRAFT_KEY, JSON.stringify(base));
    localStorage.setItem(ADMIN_DIRTY_KEY, '1');

    renderResults();
    showToast(`${addedProducts} produk + ${addedVariants} varian dikirim ke draft Admin. Buka Panel Admin untuk lengkapi foto & ekspor.`);
}

// ============================================================
// FILE HANDLING
// ============================================================
function handleFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        const ok = compare(e.target.result);
        if (ok) {
            document.getElementById('dropzoneSub').textContent =
                `File kasir: ${file.name} — selesai dibandingkan.`;
            document.getElementById('resultsArea').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    reader.onerror = () => showToast('Gagal membaca file.');
    reader.readAsText(file);
}

function copyMissing() {
    if (missingGroups.length === 0) { showToast('Tidak ada yang perlu disalin.'); return; }
    const lines = missingGroups.map(g => {
        let line;
        if (g.variants.length) {
            const vs = g.variants.slice();
            if (g.hasNoVariantUnit) vs.push('(tanpa varian)');
            line = `${g.nama}: ${vs.join(', ')}`;
        } else {
            line = `${g.nama} (tanpa varian)`;
        }
        if (g.isNewProduct && g.maybe) line += `  [mungkin sama: ${g.maybe.name}]`;
        return line;
    });
    const text = lines.join('\n');
    navigator.clipboard.writeText(text)
        .then(() => showToast(`${missingGroups.length} produk disalin ke clipboard.`))
        .catch(() => showToast('Gagal menyalin.'));
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    buildCatalog();
    document.getElementById('dropzoneSub').textContent =
        `Katalog: ${catalogUnits.length} unit (nama+varian) dimuat. Pilih file .sql kasir.`;

    const fileInput = document.getElementById('fileInput');
    const dropzone = document.getElementById('dropzone');

    document.getElementById('pickBtn').addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', e => { handleFile(e.target.files[0]); e.target.value = ''; });

    ['dragenter', 'dragover'].forEach(ev => dropzone.addEventListener(ev, e => {
        e.preventDefault(); dropzone.classList.add('dragover');
    }));
    ['dragleave', 'drop'].forEach(ev => dropzone.addEventListener(ev, e => {
        e.preventDefault(); dropzone.classList.remove('dragover');
    }));
    dropzone.addEventListener('drop', e => {
        if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
    });

    document.getElementById('searchInput').addEventListener('input', renderResults);
    document.getElementById('hideMaybe').addEventListener('change', renderResults);
    document.getElementById('copyMissingBtn').addEventListener('click', copyMissing);

    // Pilih & kirim ke admin
    document.getElementById('missingList').addEventListener('change', (e) => {
        const cb = e.target.closest('.cmp-check');
        if (!cb) return;
        const g = missingGroups[+cb.dataset.mg];
        if (g) g.selected = cb.checked;
        updateSelectionUI();
    });
    document.getElementById('selectAllBtn').addEventListener('click', () => {
        missingGroups.forEach(g => { if (!g.added) g.selected = true; });
        renderResults();
    });
    document.getElementById('clearSelBtn').addEventListener('click', () => {
        missingGroups.forEach(g => { g.selected = false; });
        renderResults();
    });
    document.getElementById('addToAdminBtn').addEventListener('click', addSelectedToAdmin);

    const toggle = document.getElementById('onlyCatToggle');
    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        document.getElementById('onlyCatList').hidden = expanded;
    });

    // Tombol kembali ke atas
    const backBtn = document.getElementById('backToTop');
    if (backBtn) {
        window.addEventListener('scroll', () => {
            backBtn.classList.toggle('visible', window.scrollY > 400);
        });
        backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
});

// ============================================================
// UTIL
// ============================================================
let toastTimer;
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text == null ? '' : text;
    return div.innerHTML;
}
