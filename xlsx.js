// ============================================================
// XLSX.JS — Penulis file Excel (.xlsx) sederhana, tanpa library
// ------------------------------------------------------------
// File .xlsx sebenarnya adalah arsip ZIP berisi beberapa file XML.
// Modul ini menyusunnya sendiri di browser supaya halaman tetap
// statis: tanpa CDN, tanpa server, tanpa npm.
//
// Dipakai oleh compare.html (tombol "Ekspor Excel").
//
// Pemakaian:
//   downloadXlsx('laporan.xlsx', [
//       {
//           name:   'Nama Sheet',                 // maks 31 karakter
//           cols:   [6, 40, 26],                  // lebar kolom (satuan karakter)
//           header: ['No', 'Nama', 'Varian'],     // baris judul (dibekukan + filter)
//           rows:   [[1, 'Air Mawar', '100ml']]
//       }
//   ]);
//
// Isi sel: string -> teks, number -> angka, null/'' -> sel kosong.
// Untuk gaya khusus pakai objek: { v: nilai, s: XLSX_STYLE.MUTED }
// ============================================================

// Indeks gaya sel. Urutannya HARUS sama dengan urutan <xf> di dalam
// <cellXfs> pada STYLES_XML di bawah.
const XLSX_STYLE = {
    PLAIN:  0,  // polos, tanpa garis
    HEADER: 1,  // judul kolom: tebal, huruf putih, latar gelap
    TEXT:   2,  // sel teks biasa: bergaris, rata atas, teks membungkus
    MUTED:  3,  // keterangan tambahan: miring, abu-abu
    NUM:    4,  // angka / kata pendek: rata tengah
    TITLE:  5,  // judul besar
    KEY:    6,  // label tabel ringkasan: tebal, latar krem
    VALUE:  7   // nilai tabel ringkasan: latar krem
};

// ============================================================
// XML BAGIAN TETAP
// ============================================================
const XLSX_DECL = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

const XLSX_RELS_ROOT = XLSX_DECL +
    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
    '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>' +
    '</Relationships>';

// Palet mengikuti token desain situs (ink #2c2521, krem #f6f0e8, garis #e0d6c8)
const XLSX_STYLES = XLSX_DECL +
    '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
    '<fonts count="5">' +
        '<font><sz val="11"/><color rgb="FF2C2521"/><name val="Calibri"/><family val="2"/></font>' +
        '<font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/><family val="2"/></font>' +
        '<font><i/><sz val="10"/><color rgb="FF8A7F74"/><name val="Calibri"/><family val="2"/></font>' +
        '<font><b/><sz val="14"/><color rgb="FF2C2521"/><name val="Calibri"/><family val="2"/></font>' +
        '<font><b/><sz val="11"/><color rgb="FF2C2521"/><name val="Calibri"/><family val="2"/></font>' +
    '</fonts>' +
    '<fills count="4">' +
        '<fill><patternFill patternType="none"/></fill>' +
        '<fill><patternFill patternType="gray125"/></fill>' +
        '<fill><patternFill patternType="solid"><fgColor rgb="FF2C2521"/><bgColor indexed="64"/></patternFill></fill>' +
        '<fill><patternFill patternType="solid"><fgColor rgb="FFF6F0E8"/><bgColor indexed="64"/></patternFill></fill>' +
    '</fills>' +
    '<borders count="2">' +
        '<border><left/><right/><top/><bottom/><diagonal/></border>' +
        '<border>' +
            '<left style="thin"><color rgb="FFE0D6C8"/></left>' +
            '<right style="thin"><color rgb="FFE0D6C8"/></right>' +
            '<top style="thin"><color rgb="FFE0D6C8"/></top>' +
            '<bottom style="thin"><color rgb="FFE0D6C8"/></bottom>' +
            '<diagonal/>' +
        '</border>' +
    '</borders>' +
    '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>' +
    '<cellXfs count="8">' +
        '<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>' +
        '<xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>' +
        '<xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>' +
        '<xf numFmtId="0" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>' +
        '<xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf>' +
        '<xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>' +
        '<xf numFmtId="0" fontId="4" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>' +
        '<xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>' +
    '</cellXfs>' +
    '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>' +
    '</styleSheet>';

// ============================================================
// UTIL XML
// ============================================================
function xlsxEsc(value) {
    const text = String(value);
    let out = '';
    for (let i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i);
        // Buang karakter kontrol yang tidak sah di XML 1.0 (bisa merusak file),
        // kecuali tab / baris baru.
        if (code < 32 && code !== 9 && code !== 10 && code !== 13) continue;
        const ch = text.charAt(i);
        if (ch === '&') out += '&amp;';
        else if (ch === '<') out += '&lt;';
        else if (ch === '>') out += '&gt;';
        else if (ch === '"') out += '&quot;';
        else if (ch === "'") out += '&apos;';
        else out += ch;
    }
    return out;
}

// 0 -> "A", 25 -> "Z", 26 -> "AA"
function xlsxColName(index) {
    let name = '';
    let n = index + 1;
    while (n > 0) {
        const rem = (n - 1) % 26;
        name = String.fromCharCode(65 + rem) + name;
        n = Math.floor((n - 1) / 26);
    }
    return name;
}

// Nama sheet Excel: maks 31 karakter, tanpa : \ / ? * [ ]
function xlsxSheetName(name, fallback) {
    const clean = String(name || fallback || 'Sheet')
        .replace(/[:\\\/\?\*\[\]]/g, ' ')
        .trim()
        .slice(0, 31);
    return clean || fallback || 'Sheet';
}

// Normalkan isi sel menjadi { v, s }
function xlsxCell(value) {
    if (value !== null && typeof value === 'object') {
        return { v: value.v, s: value.s };
    }
    return { v: value, s: undefined };
}

function xlsxCellXml(ref, cell) {
    const isNumber = typeof cell.v === 'number' && isFinite(cell.v);
    const style = cell.s !== undefined ? cell.s
        : (isNumber ? XLSX_STYLE.NUM : XLSX_STYLE.TEXT);

    if (cell.v === null || cell.v === undefined || cell.v === '') {
        return '<c r="' + ref + '" s="' + style + '"/>';
    }
    if (isNumber) {
        return '<c r="' + ref + '" s="' + style + '"><v>' + cell.v + '</v></c>';
    }
    return '<c r="' + ref + '" s="' + style + '" t="inlineStr">' +
        '<is><t xml:space="preserve">' + xlsxEsc(cell.v) + '</t></is></c>';
}

// ============================================================
// SATU LEMBAR (worksheet)
// ============================================================
function xlsxSheetXml(sheet) {
    const header = sheet.header || [];
    const bodyRows = sheet.rows || [];

    let colCount = header.length;
    bodyRows.forEach(r => { if (r.length > colCount) colCount = r.length; });
    if (colCount === 0) colCount = 1;

    const allRows = [];
    if (header.length) allRows.push(header.map(h => ({ v: h, s: XLSX_STYLE.HEADER })));
    bodyRows.forEach(r => allRows.push(r.map(xlsxCell)));

    const rowCount = Math.max(allRows.length, 1);
    const lastRef = xlsxColName(colCount - 1) + rowCount;

    // Lebar kolom
    let colsXml = '';
    if (sheet.cols && sheet.cols.length) {
        colsXml = '<cols>' + sheet.cols.map((w, i) =>
            '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + w + '" customWidth="1"/>'
        ).join('') + '</cols>';
    }

    // Baris judul dibekukan supaya tetap terlihat saat digulir
    const pane = header.length
        ? '<pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/>' +
          '<selection pane="bottomLeft" activeCell="A2" sqref="A2"/>'
        : '';

    const rowsXml = allRows.map((cells, rIdx) => {
        const rowNum = rIdx + 1;
        const isHeader = header.length && rIdx === 0;
        const attrs = ' r="' + rowNum + '" spans="1:' + colCount + '"' +
            (isHeader ? ' ht="26" customHeight="1"' : '');
        const cellsXml = cells.map((cell, cIdx) =>
            xlsxCellXml(xlsxColName(cIdx) + rowNum, cell)
        ).join('');
        return '<row' + attrs + '>' + cellsXml + '</row>';
    }).join('');

    // autoFilter hanya berguna kalau ada judul kolom + minimal 1 baris data
    const filter = (header.length && bodyRows.length)
        ? '<autoFilter ref="A1:' + lastRef + '"/>'
        : '';

    return XLSX_DECL +
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
        '<dimension ref="A1:' + lastRef + '"/>' +
        '<sheetViews><sheetView showGridLines="0" workbookViewId="0">' + pane + '</sheetView></sheetViews>' +
        '<sheetFormatPr defaultRowHeight="15"/>' +
        colsXml +
        '<sheetData>' + rowsXml + '</sheetData>' +
        filter +
        '</worksheet>';
}

// ============================================================
// ZIP (metode "stored" / tanpa kompresi — cukup & tanpa library)
// ============================================================
function xlsxCrc32(bytes) {
    let table = xlsxCrc32.table;
    if (!table) {
        table = xlsxCrc32.table = new Int32Array(256);
        for (let n = 0; n < 256; n++) {
            let c = n;
            for (let k = 0; k < 8; k++) {
                c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
            }
            table[n] = c;
        }
    }
    let crc = -1;
    for (let i = 0; i < bytes.length; i++) {
        crc = (crc >>> 8) ^ table[(crc ^ bytes[i]) & 0xFF];
    }
    return (crc ^ -1) >>> 0;
}

function xlsxZip(files) {
    const encoder = new TextEncoder();
    const now = new Date();
    const dosTime = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
    const dosDate = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();

    const parts = [];      // isi arsip (local header + data)
    const directory = [];  // central directory
    let offset = 0;

    files.forEach(file => {
        const nameBytes = encoder.encode(file.name);
        const data = encoder.encode(file.content);
        const crc = xlsxCrc32(data);
        const size = data.length;

        const local = new Uint8Array(30 + nameBytes.length);
        const lv = new DataView(local.buffer);
        lv.setUint32(0, 0x04034b50, true);   // signature
        lv.setUint16(4, 20, true);           // versi minimum
        lv.setUint16(6, 0x0800, true);       // flag: nama file UTF-8
        lv.setUint16(8, 0, true);            // metode: 0 = stored
        lv.setUint16(10, dosTime, true);
        lv.setUint16(12, dosDate, true);
        lv.setUint32(14, crc, true);
        lv.setUint32(18, size, true);        // ukuran terkompresi
        lv.setUint32(22, size, true);        // ukuran asli
        lv.setUint16(26, nameBytes.length, true);
        lv.setUint16(28, 0, true);           // panjang extra field
        local.set(nameBytes, 30);

        parts.push(local, data);

        const central = new Uint8Array(46 + nameBytes.length);
        const cv = new DataView(central.buffer);
        cv.setUint32(0, 0x02014b50, true);
        cv.setUint16(4, 20, true);           // versi pembuat
        cv.setUint16(6, 20, true);           // versi minimum
        cv.setUint16(8, 0x0800, true);
        cv.setUint16(10, 0, true);
        cv.setUint16(12, dosTime, true);
        cv.setUint16(14, dosDate, true);
        cv.setUint32(16, crc, true);
        cv.setUint32(20, size, true);
        cv.setUint32(24, size, true);
        cv.setUint16(28, nameBytes.length, true);
        cv.setUint32(42, offset, true);      // posisi local header
        central.set(nameBytes, 46);

        directory.push(central);
        offset += local.length + size;
    });

    const directorySize = directory.reduce((sum, d) => sum + d.length, 0);

    const end = new Uint8Array(22);
    const ev = new DataView(end.buffer);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(8, files.length, true);
    ev.setUint16(10, files.length, true);
    ev.setUint32(12, directorySize, true);
    ev.setUint32(16, offset, true);

    return new Blob(parts.concat(directory, [end]), {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
}

// ============================================================
// API
// ============================================================
function buildXlsx(sheets) {
    const list = (sheets || []).filter(Boolean);
    if (list.length === 0) throw new Error('Tidak ada sheet untuk ditulis.');

    const names = [];
    list.forEach((s, i) => {
        let name = xlsxSheetName(s.name, 'Sheet' + (i + 1));
        // Excel menolak dua sheet bernama sama
        let n = 2;
        while (names.indexOf(name.toLowerCase()) !== -1) {
            name = xlsxSheetName(name.slice(0, 28) + ' ' + n, 'Sheet' + (i + 1));
            n++;
        }
        names.push(name.toLowerCase());
        s._name = name;
    });

    const sheetRels = list.map((s, i) =>
        '<Relationship Id="rId' + (i + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (i + 1) + '.xml"/>'
    ).join('');

    const workbook = XLSX_DECL +
        '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" ' +
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' +
        '<sheets>' + list.map((s, i) =>
            '<sheet name="' + xlsxEsc(s._name) + '" sheetId="' + (i + 1) + '" r:id="rId' + (i + 1) + '"/>'
        ).join('') + '</sheets>' +
        '</workbook>';

    const workbookRels = XLSX_DECL +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        sheetRels +
        '<Relationship Id="rId' + (list.length + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
        '</Relationships>';

    const contentTypes = XLSX_DECL +
        '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
        '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
        '<Default Extension="xml" ContentType="application/xml"/>' +
        '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>' +
        list.map((s, i) =>
            '<Override PartName="/xl/worksheets/sheet' + (i + 1) + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
        ).join('') +
        '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>' +
        '</Types>';

    const files = [
        { name: '[Content_Types].xml', content: contentTypes },
        { name: '_rels/.rels', content: XLSX_RELS_ROOT },
        { name: 'xl/workbook.xml', content: workbook },
        { name: 'xl/_rels/workbook.xml.rels', content: workbookRels },
        { name: 'xl/styles.xml', content: XLSX_STYLES }
    ];
    list.forEach((s, i) => {
        files.push({ name: 'xl/worksheets/sheet' + (i + 1) + '.xml', content: xlsxSheetXml(s) });
    });

    return xlsxZip(files);
}

function downloadXlsx(filename, sheets) {
    const blob = buildXlsx(sheets);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}
