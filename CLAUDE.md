# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, single-page **product catalog** website (Indonesian UI) for *Toko Kosmetik H. SAIFULLAH Pasar Harian*, a cosmetics shop. Customers browse products, build a cart, and "checkout" by generating a pre-filled WhatsApp message to the store — there is no backend, no payments, and **no prices** anywhere. It is meant to be deployed as plain static files (the folder name `deploy-...` reflects this).

No build system, no package manager, no tests, no framework — just `index.html` + `script.js` + `style.css` + the generated `products.js`, all vanilla JS/CSS.

## Running

Open `index.html` directly in a browser, or serve the folder over HTTP (needed if a browser blocks `file://` behavior):

```
python -m http.server 8000
```

Then visit `http://localhost:8000`. There is nothing to build or compile.

## Architecture

`index.html` defines all DOM (header, filter bar, product grid, and several modals/overlays that are shown/hidden via CSS classes). It loads `products.js` **before** `script.js` — `products.js` declares the global `productsData`, which `script.js` reads.

### Data model — the key concept

`products.js` is a **flat array** where **each row is one variant**, not one product. Products are identified by `nama` (name); multiple rows sharing the same `nama` are different variants of the same product:

```js
{ "nama": "Air Mawar", "varian": "100ml", "kategori": "Kosmetik", "gambar": "https://..." }
{ "nama": "Air Mawar", "varian": "200ml", "kategori": "Kosmetik", "gambar": null }
```

- `varian: null` means the product has no variants.
- `gambar` (image URL) only needs to be set on **one** row of a product; `getProcessedProducts()` propagates it to the whole product. `null`/missing (or a broken URL, via the `imgError()` handler) falls back to the line-art SVG placeholder `ICONS.placeholder`.

At runtime, `getProcessedProducts()` in `script.js` groups the flat rows by `nama` into `{ nama, kategori, gambar, variants: [] }` objects. **Almost everything in the UI works off this grouped view**, so when reasoning about rendering, filtering, or the cart, think in grouped products + variants, not raw rows.

### script.js structure

A single global-scope module (functions are global so `onclick=` handlers in the HTML can call them — keep that contract when adding interactive elements). Organized into clearly commented sections:

- **CONFIG** (top of file): store WhatsApp number, store name, WA greeting/closing text, and the localStorage cart key. Edit shop-specific settings here.
- **State**: module-level globals (`cart`, `currentCategory`, `currentSearch`, `viewMode`, plus modal/tutorial state).
- **Rendering**: `renderProducts()` (filters by category + search, sorts alphabetically, renders grid or list view), `renderCart()`, `generateCategories()` (categories are derived dynamically from the data, not hardcoded).
- **Modals**: a 2-step add-to-cart flow — variant modal (pick variant) → add-cart modal (quantity + free-text notes). Closed via overlay click or Escape.
- **Cart**: persisted to `localStorage`; line items are keyed by `nama + variant + notes`, so the same product with different notes is a separate line.
- **WhatsApp checkout**: `checkoutWhatsApp()` builds a text order (items, qty, notes, pickup time) and opens a `https://wa.me/<number>?text=...` link.
- **Tutorial onboarding**: spotlight walkthrough driven by the `tutorialSteps` array (each step targets a CSS selector); shown once, gated by the `tutorialSeen` localStorage key.
- **Alphabet sidebar**: jump-to-letter scrolling over the rendered product cards.

`localStorage` keys in use: `cart`, `viewMode`, `tutorialSeen`.

All dynamic HTML is built via template strings; user/data text is passed through `escapeHtml()` / `escapeJs()` — keep using these when injecting values into markup or inline handlers.

### Design system

UI chrome uses **inline SVG line icons**, not emoji — the `ICONS` object near the top of `script.js` holds the SVG strings used in generated markup (cart, layers, trash, grid, list, placeholder); static icons are inlined directly in `index.html`. All SVGs use `stroke="currentColor"`, so color comes from CSS. Visual tokens (the cream + dusty-mauve "boutique" palette, radii, shadows, easing) are CSS custom properties in `:root` at the top of `style.css`; headings use the `Fraunces` serif and body/UI use `Inter`. Change the look from those variables rather than hardcoding colors.

## Admin panel (`admin.html`)

`admin.html` + `admin.js` + `admin.css` are a self-contained, **backend-free** product manager — the intended primary way to edit the catalog. It deliberately uses **no database**: it loads the same `products.js`, lets you add/edit/delete products (grouped by name, with a variant list + image URL/local path), keeps a working draft in `localStorage` (keys `adminProductsDraft` / `adminProductsDirty`), and **exports a regenerated `products.js`** for the user to re-upload to Netlify. Publishing = replace the deployed `products.js`; edits are never live until then. There's also an **Import** (load an existing `products.js`/JSON) and **reset-to-file**.

Admin diagnostics: a **"tanpa foto"** filter chip (products whose `gambar` is empty), a **"Cek link foto"** action that loads every image URL via `Image()` (concurrency-limited, on-demand) to detect dead links and exposes a **"foto rusak"** filter + per-row badge, and a `beforeunload` guard that warns when closing the tab with un-downloaded changes (`isDirty`).

Key points when working on it:
- It reuses `style.css` (design tokens/fonts) layered with `admin.css`; it loads `products.js` + `admin.js` only (NOT `script.js`), so its `CONFIG`/`ICONS`/`escapeHtml`/`imgError` are independent of the catalog's.
- `groupFromFlat()` / `flattenToRows()` convert between the flat file rows and the grouped editor model — they mirror the catalog's grouping, so a re-export is behavior-preserving. Two intentional normalizations: a redundant `varian:null` row on a product that also has real variants is dropped (the catalog already ignores it), and each product's `gambar` is written onto all its variant rows.
- There is **no authentication** on the admin page, by design. It's safe because the page can't change the live site by itself — publishing always requires Netlify access to upload the exported `products.js`. Opening the page only lets someone generate a file locally / edit their own `localStorage` draft.

## Comparison page (`compare.html`)

`compare.html` + `compare.js` + `compare.css` is a **client-side diff tool** between the catalog (`products.js`) and the shop's MySQL POS database, matched by **product name + variant** (the comparison unit; IDs/codes/prices are ignored). It loads `products.js` automatically and lets the user pick a MySQL **`.sql` dump** (read locally via `FileReader` — never uploaded). It contains a small, dependency-free **SQL-dump parser** (`tableColumns` / `readTuple` / `tableRows`) that reads `INSERT INTO ... VALUES` tuples, taking column order from the `CREATE TABLE` (or an explicit column list if present).

POS schema is in the `SCHEMA` constant at the top of `compare.js`: products in table `barang` (`id`, `nama`), variants in `barang_varian` (`barang_id` → `nama_varian`). A POS product with no variant rows is a `(nama, null)` unit; otherwise one unit per variant. Output: **in POS but not catalog** (the actionable "needs adding" list) and **in catalog but not POS** (typo / discontinued check). If the POS schema ever changes, update `SCHEMA`.

Matching is exact on normalized name+variant (lowercase, collapsed spaces). On top of that, a **fuzzy "mungkin sama" detector** flags likely duplicates at **two levels** (see `analyzeGroup`):
- **Name level** (`bestMatch`, threshold `FUZZY_THRESHOLD`): the product name is only a spelling/spacing/typo/base-name variation of an entry on the other side (e.g. "Exlusive" vs "Exclusive", "Rapika" vs "Rapika Botol").
- **Variant level** (`variantSim`/`bestVariantMatch`, threshold `VARIANT_FUZZY_THRESHOLD`, looser since variants are short): for a product whose name matches (exactly or fuzzily), a differing variant that is only a spacing/typo variation, or an existing variant plus an extra word, of an existing variant (e.g. "100ml" vs "100 ml", "Roll on" vs "Roll On Promo", "Besi" vs "Besi Tangkai"). `variantSim` compares space-stripped, and `wordPrefix` covers the "extra word" case.

A group is flagged `suspect` ("mungkin sama") if **either** level matches; the specific matched variant chips are highlighted and the match is shown in the suggestion line. These are **labelled, not auto-merged** — each row is tagged new-product / new-variant / mungkin-sama, suspect rows are not pre-checked, and the "hide likely duplicates" toggle (now keyed on `suspect`) focuses on truly-new items.

**Bulk "send to admin" bridge:** the missing-in-catalog rows have checkboxes (new-product/new-variant pre-checked, mungkin-sama not). "Tambahkan ke Admin" (`addSelectedToAdmin`) merges the picked items straight into the admin's `localStorage` draft (`adminProductsDraft` + dirty flag) — new products added (category auto-filled from the POS `kategori` table, image left empty), missing variants merged into existing products. The user then opens `admin.html`, fills photos, and exports. This is the cross-page link (both pages share the same origin's `localStorage`), so the two files' grouped model must stay compatible.

⚠️ The `.sql` dump and any `_*_test.js` scratch files must **never be deployed** — the SQL contains private business data (prices/stock/sales). Keep them out of the Netlify upload.

## Editing product data

Besides the admin panel, product data can also be changed:

1. **By hand** — append objects to the `productsData` array (the file header documents the format). This is how image URLs (`gambar`) get added.
2. **From Excel** — `convert_data.py` reads `data produk.xlsx` (columns `nama`, `varian`, `kategori`) and regenerates `products.js`:
   ```
   pip install pandas openpyxl
   python convert_data.py
   ```

⚠️ **`convert_data.py` does NOT emit the `gambar` field.** Regenerating from the spreadsheet overwrites `products.js` and **wipes all manually-added image URLs**. If you regenerate, either re-add images afterward or extend `convert_data.py` to carry a `gambar` column first.

Local images live in `img/` but `products.js` currently references images by full external URL in `gambar`; the `img/` files are not wired up automatically.
