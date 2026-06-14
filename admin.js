// ============================================================
// ADMIN.JS — Panel pengelola produk katalog
// ------------------------------------------------------------
// Mengelola produk di browser, lalu mengekspor file products.js
// yang siap di-upload ulang ke Netlify. TANPA database/server.
// ============================================================

const CONFIG = {
    DRAFT_KEY: 'adminProductsDraft',  // draf produk tersimpan di localStorage
    DIRTY_KEY: 'adminProductsDirty'   // penanda ada perubahan belum diunduh
};
// Catatan: tidak ada gerbang kata sandi — panel ini tidak bisa mengubah
// katalog yang live. Perubahan baru tampil setelah products.js di-upload
// ulang ke Netlify (butuh akses akun Netlify).

// ============================================================
// ICONS
// ============================================================
const ICONS = {
    placeholder: `<svg class="img-placeholder" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2.5"/><circle cx="8.5" cy="9" r="1.6"/><path d="m21 16-4.5-4.5L5 21"/></svg>`,
    edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
    trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 .9 12.1a1 1 0 0 0 1 .9h6.2a1 1 0 0 0 1-.9L17 7"/></svg>`
};

// ============================================================
// STATE
// ============================================================
let products = [];        // bentuk dikelompokkan: { nama, kategori, gambar, variants: [] }
let editingIndex = null;  // null = produk baru
let pendingDeleteIndex = null;
let isDirty = false;
let filterNoImage = false; // true = tampilkan hanya produk tanpa foto
let filterBroken = false;  // true = tampilkan hanya produk dengan link foto rusak
let brokenNames = new Set(); // nama produk yang link fotonya gagal dimuat
let imagesChecked = false;   // sudah pernah dicek di sesi ini?
let checking = false;        // sedang mengecek?

// Produk dianggap punya foto bila kolom gambar terisi (bukan kosong)
function hasImage(p) {
    return !!(p.gambar && String(p.gambar).trim());
}

// ============================================================
// HELPERS: group <-> flat
// ============================================================
// Data file (products.js) berbentuk datar: 1 baris = 1 varian.
// Untuk panel admin kita kelompokkan per nama produk.
function groupFromFlat(flat) {
    const map = new Map();
    flat.forEach(item => {
        const nama = (item.nama || '').trim();
        if (!nama) return;
        if (!map.has(nama)) {
            map.set(nama, {
                nama: nama,
                kategori: (item.kategori || '').trim(),
                gambar: item.gambar || null,
                variants: []
            });
        }
        const g = map.get(nama);
        if (item.gambar && !g.gambar) g.gambar = item.gambar;
        if (item.varian) g.variants.push(String(item.varian).trim());
    });
    return Array.from(map.values());
}

function flattenToRows(groups) {
    const rows = [];
    groups.slice()
        .sort((a, b) => a.nama.localeCompare(b.nama))
        .forEach(g => {
            const nama = g.nama.trim();
            const kategori = g.kategori.trim();
            const gambar = g.gambar ? g.gambar.trim() : null;
            const variants = (g.variants || []).map(v => v.trim()).filter(Boolean);
            if (variants.length === 0) {
                rows.push({ nama, varian: null, kategori, gambar: gambar || null });
            } else {
                variants.forEach(v => rows.push({ nama, varian: v, kategori, gambar: gambar || null }));
            }
        });
    return rows;
}

// ============================================================
// PERSISTENCE (localStorage draft)
// ============================================================
function loadProducts() {
    const draft = localStorage.getItem(CONFIG.DRAFT_KEY);
    if (draft) {
        try {
            products = JSON.parse(draft);
            isDirty = localStorage.getItem(CONFIG.DIRTY_KEY) === '1';
            return;
        } catch (e) { /* fallthrough ke data file */ }
    }
    products = groupFromFlat(typeof productsData !== 'undefined' ? productsData : []);
    isDirty = false;
}

function saveDraft(markDirty = true) {
    if (markDirty) isDirty = true;
    localStorage.setItem(CONFIG.DRAFT_KEY, JSON.stringify(products));
    localStorage.setItem(CONFIG.DIRTY_KEY, isDirty ? '1' : '0');
    updateDirtyIndicator();
}

function updateDirtyIndicator() {
    const dot = document.getElementById('dirtyDot');
    if (dot) dot.classList.toggle('active', isDirty);
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    loadProducts();
    renderList();
    updateDirtyIndicator();
    setupEvents();
}

// ============================================================
// EVENTS
// ============================================================
function setupEvents() {
    document.getElementById('searchInput').addEventListener('input', () => renderList());
    document.getElementById('noImageChip').addEventListener('click', () => {
        filterNoImage = !filterNoImage;
        renderList();
    });
    document.getElementById('brokenChip').addEventListener('click', () => {
        filterBroken = !filterBroken;
        renderList();
    });
    document.getElementById('checkImagesBtn').addEventListener('click', checkAllImages);
    document.getElementById('addBtn').addEventListener('click', () => openEditor(null));
    document.getElementById('exportBtn').addEventListener('click', exportFile);
    document.getElementById('importBtn').addEventListener('click', () => document.getElementById('importFile').click());
    document.getElementById('importFile').addEventListener('change', handleImport);
    document.getElementById('resetBtn').addEventListener('click', resetToFile);

    // Editor
    document.getElementById('editorClose').addEventListener('click', closeEditor);
    document.getElementById('editorCancel').addEventListener('click', closeEditor);
    document.getElementById('editorSave').addEventListener('click', saveEditor);
    document.getElementById('addVariantBtn').addEventListener('click', () => addVariantRow(''));
    document.getElementById('fieldImage').addEventListener('input', updateImagePreview);

    // Dropdown kategori kustom
    const catInput = document.getElementById('fieldCategory');
    document.getElementById('catToggle').addEventListener('click', () => {
        const panel = document.getElementById('catOptions');
        if (panel.hidden) { openCatDropdown(); catInput.focus(); } else { closeCatDropdown(); }
    });
    catInput.addEventListener('focus', openCatDropdown);
    catInput.addEventListener('input', () => openCatDropdown());
    document.addEventListener('click', (e) => {
        if (!document.getElementById('catSelect').contains(e.target)) closeCatDropdown();
    });

    // Confirm
    document.getElementById('confirmCancel').addEventListener('click', closeConfirm);
    document.getElementById('confirmOk').addEventListener('click', doDelete);

    // Close modals on overlay click + Escape
    document.getElementById('editorModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeEditor();
    });
    document.getElementById('confirmModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeConfirm();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { closeEditor(); closeConfirm(); }
    });

    // Peringatan bila menutup/refresh halaman saat ada perubahan belum diunduh
    window.addEventListener('beforeunload', (e) => {
        if (isDirty) { e.preventDefault(); e.returnValue = ''; }
    });

    // Tombol kembali ke atas
    const backBtn = document.getElementById('backToTop');
    if (backBtn) {
        window.addEventListener('scroll', () => {
            backBtn.classList.toggle('visible', window.scrollY > 400);
        });
        backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
}

// ============================================================
// RENDER LIST
// ============================================================
function getCategories() {
    const set = new Set();
    products.forEach(p => { if (p.kategori) set.add(p.kategori); });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
}

function renderList() {
    const list = document.getElementById('productList');
    const empty = document.getElementById('emptyState');
    const countPill = document.getElementById('countPill');
    const search = document.getElementById('searchInput').value.toLowerCase().trim();

    countPill.textContent = `${products.length} produk`;

    // Hitung & tampilkan jumlah produk tanpa foto (dari seluruh data)
    const noImgCount = products.filter(p => !hasImage(p)).length;
    document.getElementById('noImageCount').textContent = noImgCount;
    document.getElementById('noImageChip').classList.toggle('active', filterNoImage);

    // Chip "foto rusak" hanya muncul setelah pengecekan dilakukan
    const brokenChip = document.getElementById('brokenChip');
    if (imagesChecked) {
        brokenChip.hidden = false;
        document.getElementById('brokenCount').textContent = brokenNames.size;
        brokenChip.classList.toggle('active', filterBroken);
    } else {
        brokenChip.hidden = true;
    }

    // Sort A→Z, keep original index for actions
    const indexed = products.map((p, i) => ({ p, i }))
        .sort((a, b) => a.p.nama.localeCompare(b.p.nama));

    const filtered = indexed.filter(({ p }) => {
        if (filterNoImage && hasImage(p)) return false;
        if (filterBroken && !brokenNames.has(p.nama)) return false;
        if (search && !(p.nama.toLowerCase().includes(search) || (p.kategori || '').toLowerCase().includes(search))) return false;
        return true;
    });

    if (filtered.length === 0) {
        list.innerHTML = '';
        empty.hidden = false;
        return;
    }
    empty.hidden = true;

    list.innerHTML = filtered.map(({ p, i }) => {
        const thumb = p.gambar
            ? `<img src="${escapeAttr(p.gambar)}" alt="" onerror="imgError(this)">`
            : ICONS.placeholder;

        const variantHtml = (p.variants && p.variants.length)
            ? p.variants.map(v => `<span class="variant-chip">${escapeHtml(v)}</span>`).join('')
            : `<span class="variant-chip muted">tanpa varian</span>`;

        const brokenBadge = (imagesChecked && brokenNames.has(p.nama))
            ? `<span class="broken-badge">link foto rusak</span>` : '';

        return `
            <div class="product-row">
                <div class="product-thumb">${thumb}</div>
                <div class="product-main">
                    <div class="product-row-name">${escapeHtml(p.nama)}</div>
                    <div class="product-meta">
                        <span class="cat-chip">${escapeHtml(p.kategori || '—')}</span>
                        ${brokenBadge}
                        ${variantHtml}
                    </div>
                </div>
                <div class="product-actions">
                    <button class="icon-btn" title="Edit" onclick="openEditor(${i})">${ICONS.edit}</button>
                    <button class="icon-btn danger" title="Hapus" onclick="askDelete(${i})">${ICONS.trash}</button>
                </div>
            </div>
        `;
    }).join('');
}

// ---- Dropdown kategori kustom (pilih lama / ketik baru) ----
function buildCatOptions(filter) {
    const panel = document.getElementById('catOptions');
    const q = (filter || '').toLowerCase().trim();
    const cats = getCategories().filter(c => !q || c.toLowerCase().includes(q));
    if (cats.length === 0) { panel.innerHTML = ''; panel.hidden = true; return; }
    panel.innerHTML = cats.map(c =>
        `<button type="button" class="cat-option" data-cat="${escapeAttr(c)}">${escapeHtml(c)}</button>`
    ).join('');
    panel.querySelectorAll('.cat-option').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('fieldCategory').value = btn.dataset.cat;
            closeCatDropdown();
        });
    });
}

function openCatDropdown() {
    buildCatOptions(document.getElementById('fieldCategory').value);
    const panel = document.getElementById('catOptions');
    if (panel.innerHTML.trim()) panel.hidden = false;
}

function closeCatDropdown() {
    const panel = document.getElementById('catOptions');
    if (panel) panel.hidden = true;
}

// ============================================================
// EDITOR
// ============================================================
function openEditor(index) {
    editingIndex = index;
    const isNew = index === null;
    const p = isNew ? { nama: '', kategori: '', gambar: '', variants: [] } : products[index];

    document.getElementById('editorEyebrow').textContent = isNew ? 'Produk Baru' : 'Edit Produk';
    document.getElementById('editorTitle').textContent = isNew ? 'Tambah Produk' : 'Edit Produk';
    document.getElementById('fieldName').value = p.nama || '';
    document.getElementById('fieldCategory').value = p.kategori || '';
    document.getElementById('fieldImage').value = p.gambar || '';

    const rows = document.getElementById('variantRows');
    rows.innerHTML = '';
    (p.variants || []).forEach(v => addVariantRow(v));

    updateImagePreview();
    openModal('editorModal');
    setTimeout(() => document.getElementById('fieldName').focus(), 50);
}

function addVariantRow(value) {
    const rows = document.getElementById('variantRows');
    const row = document.createElement('div');
    row.className = 'variant-row';
    row.innerHTML = `
        <input type="text" class="variant-input" placeholder="Contoh: 100ml" value="${escapeAttr(value || '')}">
        <button type="button" class="variant-remove" title="Hapus varian">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>
        </button>
    `;
    row.querySelector('.variant-remove').addEventListener('click', () => row.remove());
    rows.appendChild(row);
}

function updateImagePreview() {
    const url = document.getElementById('fieldImage').value.trim();
    const preview = document.getElementById('imagePreview');
    preview.innerHTML = url
        ? `<img src="${escapeAttr(url)}" alt="" onerror="imgError(this)">`
        : ICONS.placeholder;
}

function saveEditor() {
    const nama = document.getElementById('fieldName').value.trim();
    const kategori = document.getElementById('fieldCategory').value.trim();
    const gambar = document.getElementById('fieldImage').value.trim();

    if (!nama) { showToast('Nama produk wajib diisi.'); return; }
    if (!kategori) { showToast('Kategori wajib diisi.'); return; }

    // Cegah nama ganda (katalog menggabungkan produk dengan nama sama)
    const clash = products.some((p, i) =>
        i !== editingIndex && p.nama.toLowerCase() === nama.toLowerCase()
    );
    if (clash) { showToast(`Produk "${nama}" sudah ada. Gunakan nama lain atau edit yang ada.`); return; }

    // Kumpulkan varian (buang yang kosong & duplikat)
    const variants = [];
    document.querySelectorAll('#variantRows .variant-input').forEach(inp => {
        const v = inp.value.trim();
        if (v && !variants.includes(v)) variants.push(v);
    });

    const record = { nama, kategori, gambar: gambar || null, variants };

    if (editingIndex === null) {
        products.push(record);
        showToast(`"${nama}" ditambahkan.`);
    } else {
        products[editingIndex] = record;
        showToast(`"${nama}" diperbarui.`);
    }

    saveDraft();
    renderList();
    closeEditor();
}

function closeEditor() { closeCatDropdown(); closeModal('editorModal'); editingIndex = null; }

// ============================================================
// DELETE
// ============================================================
function askDelete(index) {
    pendingDeleteIndex = index;
    const p = products[index];
    document.getElementById('confirmText').innerHTML =
        `Hapus <strong>${escapeHtml(p.nama)}</strong> dari katalog? Tindakan ini tidak bisa dibatalkan (kecuali kamu belum menyimpan/mengunduh).`;
    openModal('confirmModal');
}

function doDelete() {
    if (pendingDeleteIndex === null) return;
    const p = products[pendingDeleteIndex];
    products.splice(pendingDeleteIndex, 1);
    pendingDeleteIndex = null;
    saveDraft();
    renderList();
    closeConfirm();
    showToast(`"${p.nama}" dihapus.`);
}

function closeConfirm() { closeModal('confirmModal'); pendingDeleteIndex = null; }

// ============================================================
// CEK LINK FOTO (deteksi gambar yang URL-nya mati / gagal dimuat)
// ============================================================
function checkImage(url, timeout = 10000) {
    return new Promise(resolve => {
        const img = new Image();
        let done = false;
        const finish = ok => { if (!done) { done = true; clearTimeout(t); resolve(ok); } };
        const t = setTimeout(() => finish(false), timeout);
        img.onload = () => finish(img.naturalWidth > 0);
        img.onerror = () => finish(false);
        img.src = url;
    });
}

async function checkAllImages() {
    if (checking) return;
    const withImg = products.filter(hasImage);
    if (withImg.length === 0) { showToast('Tidak ada produk dengan link foto untuk dicek.'); return; }

    checking = true;
    brokenNames = new Set();
    const btn = document.getElementById('checkImagesBtn');
    const label = document.getElementById('checkLabel');
    btn.disabled = true;

    const total = withImg.length;
    const queue = withImg.slice();
    let done = 0;
    const CONCURRENCY = 6; // beberapa gambar paralel agar cepat tapi sopan

    async function worker() {
        while (queue.length) {
            const p = queue.shift();
            const ok = await checkImage(String(p.gambar).trim());
            if (!ok) brokenNames.add(p.nama);
            done++;
            label.textContent = `Mengecek ${done}/${total}…`;
        }
    }
    await Promise.all(Array.from({ length: CONCURRENCY }, worker));

    imagesChecked = true;
    checking = false;
    btn.disabled = false;
    label.textContent = 'Cek ulang foto';
    renderList();
    showToast(`Selesai cek ${total} foto — ${brokenNames.size} link rusak.`);
}

// ============================================================
// EXPORT  → products.js
// ============================================================
const FILE_HEADER = `// ============================================================
// DATA PRODUK - KATALOG TOKO
// ============================================================
// File ini di-generate oleh Panel Admin (admin.html).
// Untuk mengubah produk, gunakan panel admin lalu unduh ulang file ini.
//
// Format tiap baris: 1 baris = 1 varian.
//   { "nama": "...", "varian": "..." | null, "kategori": "...", "gambar": "URL" | null }
//   - Produk tanpa varian  -> "varian": null
//   - Produk dengan varian -> beberapa baris bernama sama, "varian" berbeda
//   - "gambar" boleh berupa URL penuh (https://...) atau path lokal (img/nama.jpg)
// ============================================================

`;

function buildFileContent() {
    const rows = flattenToRows(products);
    return FILE_HEADER + 'const productsData = ' + JSON.stringify(rows, null, 2) + ';\n';
}

function exportFile() {
    if (products.length === 0) { showToast('Belum ada produk untuk diekspor.'); return; }

    const content = buildFileContent();
    const blob = new Blob([content], { type: 'text/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products.js';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

    // Tandai sudah diunduh
    isDirty = false;
    localStorage.setItem(CONFIG.DIRTY_KEY, '0');
    updateDirtyIndicator();
    showToast('products.js terunduh. Upload file ini ke Netlify untuk mempublikasikan.');
}

// ============================================================
// IMPORT  ← products.js / .json
// ============================================================
function handleImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        try {
            const arr = parseProductsFile(ev.target.result);
            products = groupFromFlat(arr);
            saveDraft();
            renderList();
            showToast(`Berhasil mengimpor ${products.length} produk.`);
        } catch (err) {
            showToast('Gagal membaca file. Pastikan itu products.js yang valid.');
        }
    };
    reader.readAsText(file);
    e.target.value = ''; // reset agar file sama bisa dipilih lagi
}

function parseProductsFile(text) {
    // Mulai cari '[' dari setelah kata 'productsData' agar tidak salah ambil
    // tanda kurung yang mungkin ada di komentar header.
    const decl = text.indexOf('productsData');
    const start = text.indexOf('[', decl === -1 ? 0 : decl);
    const end = text.lastIndexOf(']');
    if (start === -1 || end === -1 || end < start) throw new Error('Format tidak dikenali');
    const arr = JSON.parse(text.slice(start, end + 1));
    if (!Array.isArray(arr)) throw new Error('Bukan array produk');
    return arr;
}

// ============================================================
// RESET ke data file yang sedang ter-deploy
// ============================================================
function resetToFile() {
    const ok = confirm('Muat ulang dari products.js yang sedang aktif? Semua perubahan yang belum diunduh akan hilang.');
    if (!ok) return;
    localStorage.removeItem(CONFIG.DRAFT_KEY);
    localStorage.removeItem(CONFIG.DIRTY_KEY);
    products = groupFromFlat(typeof productsData !== 'undefined' ? productsData : []);
    isDirty = false;
    renderList();
    updateDirtyIndicator();
    showToast('Dimuat ulang dari file produk.');
}

// ============================================================
// MODAL + TOAST + UTIL
// ============================================================
function openModal(id) {
    document.getElementById(id).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
    if (!document.querySelector('.modal-overlay.active')) {
        document.body.style.overflow = '';
    }
}

let toastTimer;
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

function imgError(img) {
    img.parentElement.innerHTML = ICONS.placeholder;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text == null ? '' : text;
    return div.innerHTML;
}

// Untuk dipakai di dalam atribut (src/value): aman dari " dan <
function escapeAttr(text) {
    return escapeHtml(text).replace(/"/g, '&quot;');
}
