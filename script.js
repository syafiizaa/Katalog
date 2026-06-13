// ============================================================
// SCRIPT.JS - Katalog Produk Toko
// ============================================================
// File ini berisi semua logika aplikasi website katalog
// ============================================================

// ============================================================
// KONFIGURASI - UBAH DI SINI JIKA DIPERLUKAN
// ============================================================
const CONFIG = {
    // Nomor WhatsApp toko (format: 62xxxxxxxxxx tanpa + atau spasi)
    WHATSAPP_NUMBER: '6281295256232',
    
    // Nama toko
    STORE_NAME: 'Toko Kami',
    
    // Pesan pembuka WhatsApp
    WA_GREETING: 'Halo, saya ingin memesan:',
    
    // Pesan penutup WhatsApp
    WA_CLOSING: 'Terima kasih!',
    
    // Key untuk localStorage
    CART_STORAGE_KEY: 'cart'
};

// ============================================================
// STATE MANAGEMENT
// ============================================================
let cart = [];
let currentCategory = 'all';
let currentSearch = '';
let selectedProduct = null;
let selectedVariant = null;
let viewMode = 'grid'; // 'grid' or 'list'
let modalQty = 1;
let modalProduct = null;
let modalVariant = null;

// Tutorial state
let tutorialStep = 0;
const TUTORIAL_SEEN_KEY = 'tutorialSeen';

// ============================================================
// ICONS (inline SVG, inherit color via currentColor)
// ============================================================
const ICONS = {
    cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.3"/><circle cx="17.5" cy="20" r="1.3"/><path d="M3 4h2l2.2 11.1a1.5 1.5 0 0 0 1.5 1.2h7.8a1.5 1.5 0 0 0 1.47-1.18L21 7.5H6.1"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 21 8l-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>`,
    trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 .9 12.1a1 1 0 0 0 1 .9h6.2a1 1 0 0 0 1-.9L17 7"/></svg>`,
    grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7.5" height="7.5" rx="1.4"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.4"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.4"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.4"/></svg>`,
    list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></svg>`,
    placeholder: `<svg class="img-placeholder" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2.5"/><circle cx="8.5" cy="9" r="1.6"/><path d="m21 16-4.5-4.5L5 21"/></svg>`,
    note: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`
};

// Image load failure -> show the line-art placeholder
function imgError(img) {
    img.parentElement.innerHTML = ICONS.placeholder;
}

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load cart from localStorage
    loadCart();
    
    // Load view mode preference
    loadViewMode();
    
    // Generate categories
    generateCategories();
    
    // Generate products
    renderProducts();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup pickup time listeners
    setupPickupTimeListeners();
    
    // Setup alphabet sidebar
    setupAlphabetSidebar();
    
    // Setup scroll detection for alphabet sidebar
    setupScrollDetection();

    // Setup back-to-top button
    setupBackToTop();
    
    // Check URL hash for cart
    if (window.location.hash === '#openCart') {
        setTimeout(() => toggleCart(), 100);
        history.replaceState(null, null, ' ');
    }
    
    // Update cart badge
    updateCartBadge();
    
    // Check if should show tutorial
    checkTutorial();
}

function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function(e) {
            currentSearch = e.target.value.toLowerCase().trim();
            renderProducts();
        }, 300));
    }
    
    // Close variant modal on overlay click
    const variantModal = document.getElementById('variantModal');
    if (variantModal) {
        variantModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeVariantModal();
            }
        });
    }
    
    // Close add cart modal on overlay click
    const addCartModal = document.getElementById('addCartModal');
    if (addCartModal) {
        addCartModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeAddCartModal();
            }
        });
    }
    
    // Close category modal on overlay click
    const categoryModal = document.getElementById('categoryModal');
    if (categoryModal) {
        categoryModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeCategoryModal();
            }
        });
    }
    
    // Keyboard events
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeVariantModal();
            closeCategoryModal();
            closeAddCartModal();
            if (document.querySelector('.cart-sidebar.active')) {
                toggleCart();
            }
        }
    });
}

// ============================================================
// PRODUCT DATA PROCESSING
// ============================================================
function getProcessedProducts() {
    // Group products by name
    const productMap = new Map();
    
    productsData.forEach(item => {
        const name = item.nama;
        if (!productMap.has(name)) {
            productMap.set(name, {
                nama: name,
                kategori: item.kategori,
                gambar: item.gambar || null,
                variants: []
            });
        }
        // Update gambar if current item has one and existing doesn't
        if (item.gambar && !productMap.get(name).gambar) {
            productMap.get(name).gambar = item.gambar;
        }
        if (item.varian) {
            productMap.get(name).variants.push(item.varian);
        }
    });
    
    return Array.from(productMap.values());
}

function getCategories() {
    const categories = new Set();
    productsData.forEach(item => {
        if (item.kategori) {
            categories.add(item.kategori);
        }
    });
    return Array.from(categories).sort();
}

// ============================================================
// CATEGORIES
// ============================================================
function generateCategories() {
    const categoryGrid = document.getElementById('categoryGrid');
    if (!categoryGrid) return;
    
    const categories = getCategories();
    
    let html = `<button class="category-grid-btn active" onclick="selectCategory('all')">Semua</button>`;
    
    categories.forEach(category => {
        html += `<button class="category-grid-btn" onclick="selectCategory('${escapeHtml(category)}')">${escapeHtml(category)}</button>`;
    });
    
    categoryGrid.innerHTML = html;
}

function openCategoryModal() {
    document.getElementById('categoryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCategoryModal() {
    const modal = document.getElementById('categoryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function selectCategory(category) {
    currentCategory = category;
    
    // Update button text
    const categoryText = document.getElementById('categoryText');
    if (categoryText) {
        categoryText.textContent = category === 'all' ? 'Semua Kategori' : category;
    }
    
    // Update active state in modal
    document.querySelectorAll('.category-grid-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === category || (category === 'all' && btn.textContent === 'Semua')) {
            btn.classList.add('active');
        }
    });
    
    // Close modal and render
    closeCategoryModal();
    renderProducts();
}

function filterCategory(category) {
    selectCategory(category);
}

// ============================================================
// PRODUCT RENDERING
// ============================================================
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');
    const productsCount = document.getElementById('productsCount');
    
    if (!productsGrid) return;
    
    const products = getProcessedProducts();
    
    // Filter products
    let filteredProducts = products.filter(product => {
        // Category filter
        if (currentCategory !== 'all' && product.kategori !== currentCategory) {
            return false;
        }
        
        // Search filter
        if (currentSearch) {
            const searchText = product.nama.toLowerCase();
            if (!searchText.includes(currentSearch)) {
                return false;
            }
        }
        
        return true;
    });
    
    // Sort products alphabetically
    filteredProducts.sort((a, b) => a.nama.localeCompare(b.nama));
    
    // Update count
    if (productsCount) {
        productsCount.textContent = `${filteredProducts.length} produk`;
    }
    
    // Show/hide no products message
    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        noProducts.style.display = 'block';
        return;
    } else {
        productsGrid.style.display = viewMode === 'list' ? 'flex' : 'grid';
        noProducts.style.display = 'none';
    }
    
    // Apply view mode class
    productsGrid.classList.toggle('list-view', viewMode === 'list');
    
    // Render products
    let html = '';
    filteredProducts.forEach(product => {
        const hasVariants = product.variants.length > 0;
        const imageHtml = product.gambar
            ? `<img src="${escapeHtml(product.gambar)}" alt="${escapeHtml(product.nama)}" onerror="imgError(this)">`
            : ICONS.placeholder;

        // Variants text for list view
        const variantsText = hasVariants ? `${product.variants.length} varian` : '';

        if (viewMode === 'grid') {
            html += `
                <div class="product-card" data-name="${escapeHtml(product.nama)}">
                    <div class="product-image">${imageHtml}</div>
                    <div class="product-info">
                        <span class="product-category">${escapeHtml(product.kategori)}</span>
                        <h3 class="product-name">${escapeHtml(product.nama)}</h3>
                        ${hasVariants ? `
                            <button class="variant-btn" onclick="openVariantModal('${escapeJs(product.nama)}')">
                                ${ICONS.layers} ${product.variants.length} varian
                            </button>
                        ` : ''}
                        <div class="product-actions">
                            <button class="action-btn add-cart-btn" onclick="openAddCartModal('${escapeJs(product.nama)}', ${hasVariants})">
                                ${ICONS.cart}<span>Tambah</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // List view
            html += `
                <div class="product-card" data-name="${escapeHtml(product.nama)}">
                    <div class="product-info">
                        <span class="product-category">${escapeHtml(product.kategori)}</span>
                        <h3 class="product-name">${escapeHtml(product.nama)}</h3>
                        ${hasVariants ? `<span class="product-variants-text">${variantsText}</span>` : ''}
                        <div class="product-actions">
                            <button class="action-btn add-cart-btn" onclick="openAddCartModal('${escapeJs(product.nama)}', ${hasVariants})" aria-label="Tambah ke keranjang">
                                ${ICONS.cart}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    
    productsGrid.innerHTML = html;
}

function resetFilters() {
    currentCategory = 'all';
    currentSearch = '';
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Update category button text
    const categoryText = document.getElementById('categoryText');
    if (categoryText) {
        categoryText.textContent = 'Semua Kategori';
    }
    
    // Update active state in modal
    document.querySelectorAll('.category-grid-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === 'Semua') {
            btn.classList.add('active');
        }
    });
    
    renderProducts();
}

// ============================================================
// VARIANT MODAL
// ============================================================
function openVariantModal(productName) {
    const products = getProcessedProducts();
    const product = products.find(p => p.nama === productName);
    
    if (!product) return;
    
    selectedProduct = product;
    selectedVariant = null;
    
    // Update modal content
    document.getElementById('modalProductName').textContent = product.nama;
    document.getElementById('modalProductCategory').textContent = product.kategori;
    
    // Update modal image
    const modalImage = document.querySelector('#variantModal .modal-product-image');
    if (modalImage) {
        if (product.gambar) {
            modalImage.innerHTML = `<img src="${escapeHtml(product.gambar)}" alt="${escapeHtml(product.nama)}" onerror="imgError(this)">`;
        } else {
            modalImage.innerHTML = ICONS.placeholder;
        }
    }
    
    // Generate variant options
    const variantOptions = document.getElementById('variantOptions');
    let html = '';
    product.variants.forEach(variant => {
        html += `<button class="variant-option" onclick="selectVariant(this, '${escapeJs(variant)}')">${escapeHtml(variant)}</button>`;
    });
    variantOptions.innerHTML = html;
    
    // Show modal
    document.getElementById('variantModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVariantModal() {
    document.getElementById('variantModal').classList.remove('active');
    document.body.style.overflow = '';
    selectedProduct = null;
    selectedVariant = null;
}

function selectVariant(button, variant) {
    // Remove selected from all
    document.querySelectorAll('.variant-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected to clicked
    button.classList.add('selected');
    selectedVariant = variant;
}

// ============================================================
// WHATSAPP FUNCTIONS
// ============================================================
function sendWhatsAppMessage(productName, variant) {
    let message = `${CONFIG.WA_GREETING}\n\n`;
    
    if (variant) {
        message += `- ${productName} - ${variant}`;
    } else {
        message += `- ${productName}`;
    }
    
    message += `\n\n${CONFIG.WA_CLOSING}`;
    
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(waUrl, '_blank');
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        showToast('Keranjang masih kosong!');
        return;
    }
    
    // Get pickup time
    const pickupTime = getPickupTime();
    if (!pickupTime) {
        showToast('Silakan pilih waktu pengambilan!');
        return;
    }
    
    let message = `${CONFIG.WA_GREETING}\n\n`;
    
    cart.forEach((item, index) => {
        const variantText = item.variant ? ` - ${item.variant}` : '';
        const notesText = item.notes ? ` [${item.notes}]` : '';
        message += `${index + 1}. ${item.nama}${variantText} (x${item.qty})${notesText}\n`;
    });
    
    message += `\nWaktu pengambilan: ${pickupTime}`;
    message += `\n\n${CONFIG.WA_CLOSING}`;
    
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(waUrl, '_blank');
}

function getPickupTime() {
    const selectedRadio = document.querySelector('input[name="pickupTime"]:checked');
    if (!selectedRadio) return null;
    
    if (selectedRadio.value === 'custom') {
        const customInput = document.getElementById('customPickupTime');
        const customValue = customInput ? customInput.value.trim() : '';
        return customValue || null;
    }
    
    return selectedRadio.value;
}

function setupPickupTimeListeners() {
    const radioButtons = document.querySelectorAll('input[name="pickupTime"]');
    const customInput = document.getElementById('customPickupTime');
    
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (customInput) {
                if (this.value === 'custom') {
                    customInput.style.display = 'block';
                    customInput.focus();
                } else {
                    customInput.style.display = 'none';
                }
            }
        });
    });
}

// ============================================================
// CART FUNCTIONS
// ============================================================
function loadCart() {
    const savedCart = localStorage.getItem(CONFIG.CART_STORAGE_KEY);
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            cart = [];
        }
    }
}

function saveCart() {
    localStorage.setItem(CONFIG.CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const cartBtn = document.getElementById('cartBtn');
    if (!badge) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
    
    // Toggle warna hijau pada tombol keranjang
    if (cartBtn) {
        if (totalItems > 0) {
            cartBtn.classList.add('has-items');
        } else {
            cartBtn.classList.remove('has-items');
        }
    }
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        renderCart();
    } else {
        document.body.style.overflow = '';
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotalItems = document.getElementById('cartTotalItems');
    
    if (cart.length === 0) {
        cartItems.style.display = 'none';
        cartEmpty.classList.add('show');
        cartFooter.style.display = 'none';
        return;
    }
    
    cartItems.style.display = 'block';
    cartEmpty.classList.remove('show');
    cartFooter.style.display = 'block';
    
    let html = '';
    cart.forEach((item, index) => {
        const variantText = item.variant ? item.variant : '';
        const notesText = item.notes ? item.notes : '';
        html += `
            <div class="cart-item">
                <div class="cart-item-image">${ICONS.placeholder}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${escapeHtml(item.nama)}</div>
                    ${variantText ? `<div class="cart-item-variant">${escapeHtml(variantText)}</div>` : ''}
                    <div class="cart-item-notearea" data-index="${index}">
                        ${notesText
                            ? `<button class="cart-note-view" onclick="editNote(${index})" title="Ubah catatan">${ICONS.note}<span>${escapeHtml(notesText)}</span></button>`
                            : `<button class="cart-note-add" onclick="editNote(${index})">${ICONS.note}<span>Tambah catatan</span></button>`}
                    </div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateQty(${index}, -1)" aria-label="Kurangi">&minus;</button>
                        <span class="qty-value">${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty(${index}, 1)" aria-label="Tambah">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})" aria-label="Hapus">${ICONS.trash}</button>
            </div>
        `;
    });
    
    cartItems.innerHTML = html;
    
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartTotalItems.textContent = `${totalItems} item`;
}

function quickAddToCart(productName, hasVariants) {
    if (hasVariants) {
        openVariantModal(productName);
    } else {
        openAddCartModal(productName, false);
    }
}

function addToCartFromModal() {
    if (!selectedProduct) return;

    // Produk bervarian wajib memilih salah satu varian dulu
    if (selectedProduct.variants.length > 0 && !selectedVariant) {
        showToast('Silakan pilih varian terlebih dahulu');
        return;
    }

    // Lanjut ke modal jumlah & catatan dengan varian yang dipilih
    openAddCartModalWithData(selectedProduct.nama, selectedVariant, selectedProduct.gambar);
    closeVariantModal();
}

// ============================================================
// ADD TO CART MODAL (Quantity & Notes)
// ============================================================
function openAddCartModal(productName, hasVariants) {
    if (hasVariants) {
        openVariantModal(productName);
    } else {
        const products = getProcessedProducts();
        const product = products.find(p => p.nama === productName);
        if (product) {
            openAddCartModalWithData(productName, null, product.gambar);
        }
    }
}

function openAddCartModalWithData(productName, variant, imageUrl) {
    modalProduct = productName;
    modalVariant = variant;
    modalQty = 1;
    
    // Update modal content
    document.getElementById('addCartModalName').textContent = productName;
    document.getElementById('modalQtyDisplay').textContent = '1';
    document.getElementById('productNotes').value = '';
    
    // Update variant display
    const variantEl = document.getElementById('addCartModalVariant');
    if (variant) {
        variantEl.textContent = `Varian: ${variant}`;
        variantEl.style.display = 'block';
    } else {
        variantEl.style.display = 'none';
    }
    
    // Update image
    const imageEl = document.getElementById('addCartModalImage');
    if (imageUrl) {
        imageEl.innerHTML = `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(productName)}" onerror="imgError(this)">`;
    } else {
        imageEl.innerHTML = ICONS.placeholder;
    }
    
    // Find and set category
    const products = getProcessedProducts();
    const product = products.find(p => p.nama === productName);
    if (product) {
        document.getElementById('addCartModalCategory').textContent = product.kategori;
    }
    
    // Show modal
    document.getElementById('addCartModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAddCartModal() {
    document.getElementById('addCartModal').classList.remove('active');
    document.body.style.overflow = '';
    modalProduct = null;
    modalVariant = null;
    modalQty = 1;
}

function increaseModalQty() {
    modalQty++;
    document.getElementById('modalQtyDisplay').textContent = modalQty;
}

function decreaseModalQty() {
    if (modalQty > 1) {
        modalQty--;
        document.getElementById('modalQtyDisplay').textContent = modalQty;
    }
}

function confirmAddToCart() {
    if (!modalProduct) return;
    
    const notes = document.getElementById('productNotes').value.trim();
    
    // Add to cart with quantity and notes
    addToCartWithDetails(modalProduct, modalVariant, modalQty, notes);
    closeAddCartModal();
}

function addToCartWithDetails(productName, variant, qty, notes) {
    // Create unique key including notes
    const existingIndex = cart.findIndex(item => 
        item.nama === productName && 
        item.variant === variant && 
        item.notes === notes
    );
    
    if (existingIndex > -1) {
        cart[existingIndex].qty += qty;
    } else {
        cart.push({
            nama: productName,
            variant: variant,
            qty: qty,
            notes: notes || null
        });
    }
    
    saveCart();
    renderCart();
    
    const variantText = variant ? ` - ${variant}` : '';
    showToast(`${productName}${variantText} (${qty}x) ditambahkan ke keranjang`);
}

// ============================================================
// EDIT CATATAN ITEM DI KERANJANG
// ============================================================
function editNote(index) {
    const area = document.querySelector(`.cart-item-notearea[data-index="${index}"]`);
    if (!area || !cart[index]) return;

    area.innerHTML = `
        <input type="text" class="cart-note-input" placeholder="Catatan (warna/ukuran/dll)…">
        <div class="cart-note-actions">
            <button class="cart-note-save" onclick="saveNote(${index})">Simpan</button>
            <button class="cart-note-cancel" onclick="renderCart()">Batal</button>
        </div>`;

    const input = area.querySelector('.cart-note-input');
    input.value = cart[index].notes || '';   // set via property -> tidak perlu escape atribut
    input.focus();
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); saveNote(index); }
        if (e.key === 'Escape') { e.preventDefault(); renderCart(); }
    });
}

function saveNote(index) {
    if (!cart[index]) return;
    const area = document.querySelector(`.cart-item-notearea[data-index="${index}"]`);
    const input = area ? area.querySelector('.cart-note-input') : null;
    const val = input ? input.value.trim() : '';
    cart[index].notes = val || null;
    saveCart();
    renderCart();
    showToast(val ? 'Catatan disimpan' : 'Catatan dihapus');
}

// ============================================================
// VIEW MODE TOGGLE
// ============================================================
function loadViewMode() {
    const savedMode = localStorage.getItem('viewMode');
    if (savedMode) {
        viewMode = savedMode;
    }
    updateViewToggleIcon();
}

function toggleViewMode() {
    viewMode = viewMode === 'grid' ? 'list' : 'grid';
    localStorage.setItem('viewMode', viewMode);
    updateViewToggleIcon();
    renderProducts();
}

function updateViewToggleIcon() {
    const icon = document.getElementById('viewIcon');
    if (icon) {
        // Show the icon for the view you'll switch TO
        icon.innerHTML = viewMode === 'grid' ? ICONS.list : ICONS.grid;
    }
}

function addToCart(productName, variant) {
    // Find existing item
    const existingIndex = cart.findIndex(item => 
        item.nama === productName && item.variant === variant
    );
    
    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({
            nama: productName,
            variant: variant,
            qty: 1
        });
    }
    
    saveCart();
    renderCart();
    
    const variantText = variant ? ` - ${variant}` : '';
    showToast(`${productName}${variantText} ditambahkan ke keranjang`);
}

function updateQty(index, delta) {
    if (cart[index]) {
        cart[index].qty += delta;
        
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        
        saveCart();
        renderCart();
    }
}

function removeFromCart(index) {
    if (cart[index]) {
        const item = cart[index];
        cart.splice(index, 1);
        saveCart();
        renderCart();
        
        const variantText = item.variant ? ` - ${item.variant}` : '';
        showToast(`${item.nama}${variantText} dihapus dari keranjang`);
    }
}

function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Apakah Anda yakin ingin mengosongkan keranjang?')) {
        cart = [];
        saveCart();
        renderCart();
        showToast('Keranjang telah dikosongkan');
    }
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function escapeJs(text) {
    return text.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================================
// TUTORIAL ONBOARDING
// ============================================================
const tutorialSteps = [
    {
        target: '.category-select-btn',
        title: 'Filter Kategori',
        desc: 'Tekan tombol ini untuk memilih kategori produk yang ingin Anda lihat.',
        position: 'bottom'
    },
    {
        target: '.search-input',
        title: 'Cari Produk',
        desc: 'Ketik nama produk di sini untuk mencari barang dengan cepat.',
        position: 'bottom'
    },
    {
        target: '.view-toggle-btn',
        title: 'Ubah Tampilan',
        desc: 'Tekan untuk mengubah tampilan katalog: Grid (dengan gambar) atau List (daftar).',
        position: 'bottom'
    },
    {
        target: '.product-card',
        title: 'Tambah ke Keranjang',
        desc: 'Tekan tombol keranjang untuk menambah produk. Anda bisa atur jumlah dan tambahkan catatan (warna/ukuran).',
        position: 'bottom'
    },
    {
        target: '.floating-cart-btn',
        title: 'Keranjang Belanja',
        desc: 'Tekan tombol ini untuk melihat keranjang belanja Anda dan kirim pesanan ke WhatsApp kami secara cepat tanpa ribet.',
        position: 'left'
    }
];

function checkTutorial() {
    const seen = localStorage.getItem(TUTORIAL_SEEN_KEY);
    if (!seen) {
        setTimeout(() => startTutorial(), 1000);
    }
}

function startTutorial() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    setTimeout(() => {
        tutorialStep = 0;
        document.getElementById('tutorialTotalSteps').textContent = tutorialSteps.length;
        document.getElementById('tutorialOverlay').classList.add('active');
        showTutorialStep();
    }, 100);
}

function showTutorialStep() {
    const step = tutorialSteps[tutorialStep];
    const targetEl = document.querySelector(step.target);
    
    if (!targetEl) {
        nextTutorialStep();
        return;
    }
    
    // Update step info
    document.getElementById('tutorialStepNum').textContent = tutorialStep + 1;
    document.getElementById('tutorialTitle').textContent = step.title;
    document.getElementById('tutorialDesc').textContent = step.desc;
    
    const nextBtn = document.getElementById('tutorialNextBtn');
    nextBtn.textContent = tutorialStep === tutorialSteps.length - 1 ? 'Selesai' : 'Lanjut';
    
    // Special handling for floating cart button (step 5) - raise z-index temporarily
    const floatingBtn = document.querySelector('.floating-cart-btn');
    if (step.target === '.floating-cart-btn') {
        floatingBtn.style.zIndex = '10002';
    } else {
        floatingBtn.style.zIndex = '';
    }
    
    // Get element position
    const rect = targetEl.getBoundingClientRect();
    const highlight = document.getElementById('tutorialHighlight');
    const padding = 8;
    
    // Position and show highlight box (creates spotlight effect)
    highlight.style.display = 'block';
    highlight.style.top = (rect.top - padding) + 'px';
    highlight.style.left = (rect.left - padding) + 'px';
    highlight.style.width = (rect.width + padding * 2) + 'px';
    highlight.style.height = (rect.height + padding * 2) + 'px';
    
    // Position tooltip
    positionTooltip(rect, step.position);
}

function positionTooltip(rect, position) {
    const tooltip = document.getElementById('tutorialTooltip');
    const tooltipWidth = Math.min(320, window.innerWidth - 40);
    const tooltipHeight = 180;
    const margin = 15;
    
    let top, left;
    
    switch (position) {
        case 'bottom':
            top = rect.bottom + margin;
            left = Math.max(20, Math.min(rect.left, window.innerWidth - tooltipWidth - 20));
            if (top + tooltipHeight > window.innerHeight) {
                top = rect.top - tooltipHeight - margin;
            }
            break;
        case 'top':
            top = rect.top - tooltipHeight - margin;
            left = Math.max(20, Math.min(rect.left, window.innerWidth - tooltipWidth - 20));
            if (top < 0) {
                top = rect.bottom + margin;
            }
            break;
        case 'left':
            // Position tooltip above and to the left of the element
            top = rect.top - tooltipHeight - margin;
            left = rect.left - tooltipWidth - margin;
            // If tooltip goes off left side, position to the left edge
            if (left < 20) {
                left = 20;
            }
            // If tooltip goes above viewport, position it higher but still visible
            if (top < 20) {
                top = 20;
            }
            break;
        case 'right':
            top = Math.max(20, rect.top);
            left = rect.right + margin;
            if (left + tooltipWidth > window.innerWidth) {
                left = rect.left - tooltipWidth - margin;
            }
            break;
        default:
            top = rect.bottom + margin;
            left = 20;
    }
    
    top = Math.max(20, Math.min(top, window.innerHeight - tooltipHeight - 20));
    left = Math.max(20, Math.min(left, window.innerWidth - tooltipWidth - 20));
    
    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
}

function nextTutorialStep() {
    tutorialStep++;
    
    if (tutorialStep >= tutorialSteps.length) {
        endTutorial();
    } else {
        showTutorialStep();
    }
}

function skipTutorial() {
    endTutorial();
}

function endTutorial() {
    document.getElementById('tutorialOverlay').classList.remove('active');
    document.getElementById('tutorialHighlight').style.display = 'none';
    
    // Reset floating cart button z-index
    const floatingBtn = document.querySelector('.floating-cart-btn');
    if (floatingBtn) {
        floatingBtn.style.zIndex = '';
    }
    
    localStorage.setItem(TUTORIAL_SEEN_KEY, 'true');
    tutorialStep = 0;
}

// ============================================================
// ALPHABET SIDEBAR
// ============================================================
let isScrolling = false;
let scrollTimeout;

function setupAlphabetSidebar() {
    const sidebar = document.getElementById('alphabetSidebar');
    const letters = sidebar.querySelectorAll('.alpha-letter');
    
    letters.forEach(letter => {
        letter.addEventListener('click', function() {
            const targetLetter = this.dataset.letter;
            scrollToLetter(targetLetter);
        });
        
        // Touch events for faster scrolling
        letter.addEventListener('touchstart', function(e) {
            e.preventDefault();
            const targetLetter = this.dataset.letter;
            scrollToLetter(targetLetter);
        });
    });
}

// ============================================================
// BACK TO TOP
// ============================================================
function setupBackToTop() {
    const backBtn = document.getElementById('backToTop');
    if (!backBtn) return;
    window.addEventListener('scroll', () => {
        backBtn.classList.toggle('visible', window.scrollY > 400);
    });
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function setupScrollDetection() {
    const sidebar = document.getElementById('alphabetSidebar');
    
    window.addEventListener('scroll', function() {
        // Show sidebar when scrolling
        sidebar.classList.add('visible');
        
        // Clear existing timeout
        clearTimeout(scrollTimeout);
        
        // Hide after 2 seconds of no scrolling
        scrollTimeout = setTimeout(() => {
            sidebar.classList.remove('visible');
        }, 2000);
        
        // Update active letter based on visible products
        updateActiveLetter();
    });
}

function scrollToLetter(letter) {
    const products = document.querySelectorAll('.product-card[data-name]');
    
    for (let product of products) {
        const name = product.dataset.name;
        if (name && name.toUpperCase().startsWith(letter)) {
            product.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Highlight the letter briefly
            highlightLetter(letter);
            return;
        }
    }
    
    // If no product found with that letter, show toast
    showToast(`Tidak ada produk dengan huruf "${letter}"`);
}

function highlightLetter(letter) {
    const letters = document.querySelectorAll('.alpha-letter');
    letters.forEach(el => {
        el.classList.remove('active');
        if (el.dataset.letter === letter) {
            el.classList.add('active');
        }
    });
    
    // Remove highlight after 1 second
    setTimeout(() => {
        letters.forEach(el => el.classList.remove('active'));
    }, 1000);
}

function updateActiveLetter() {
    const products = document.querySelectorAll('.product-card[data-name]');
    const viewportTop = window.scrollY + 150; // Account for header
    
    for (let product of products) {
        const rect = product.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            const name = product.dataset.name;
            if (name) {
                const firstLetter = name.charAt(0).toUpperCase();
                highlightLetter(firstLetter);
                return;
            }
        }
    }
}
