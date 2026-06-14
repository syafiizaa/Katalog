// ============================================================
// DATA PRODUK - KATALOG TOKO
// ============================================================
// File ini berisi semua data produk yang ditampilkan di website
// 
// CARA MENAMBAH PRODUK BARU:
// 1. Scroll ke bagian bawah array 'productsData'
// 2. Tambahkan objek baru dengan format:
//    { nama: "Nama Produk", varian: "Nama Varian", kategori: "Kategori", gambar: "URL" }
//    
//    - Jika produk TIDAK punya varian, gunakan: varian: null
//    - Jika produk PUNYA varian, buat beberapa baris dengan nama sama
//    - Jika produk TIDAK punya gambar, gunakan: gambar: null (atau tidak perlu ditulis)
//
// CONTOH:
// Produk tanpa varian & tanpa gambar:
//    { "nama": "Sabun Mandi ABC", "varian": null, "kategori": "Sabun" },
//
// Produk dengan varian & tanpa gambar:
//    { "nama": "Parfum XYZ", "varian": "50ml", "kategori": "Parfum" },
//    { "nama": "Parfum XYZ", "varian": "100ml", "kategori": "Parfum" },
//
// Produk dengan gambar (gambar cukup di salah satu varian):
//    { "nama": "Shampo ABC", "varian": "100ml", "kategori": "Shampoo", "gambar": "https://example.com/shampo.jpg" },
//    { "nama": "Shampo ABC", "varian": "200ml", "kategori": "Shampoo" },
//
// SUMBER GAMBAR YANG BISA DIGUNAKAN:
// - Cloudinary (gratis): https://cloudinary.com
// - ImgBB (gratis): https://imgbb.com
// - Postimages: https://postimages.org
// - Google Drive: https://drive.google.com (gunakan link: https://drive.google.com/uc?id=FILE_ID)
// - Link gambar dari website manapun
//
// KATEGORI YANG TERSEDIA:
// Kosmetik, Parfum, Baterai, Alat, Sabun, Obat Nyamuk, 
// Baby Care, Alat Kebersihan, Minyak Rambut, Deodorant, Shampoo, Odol
// (Anda juga bisa menambah kategori baru)
// ============================================================

const productsData = [
  {
    "gambar": "https://id-test-11.slatic.net/p/84fdd2ba2a32ab848af955a032886fa5.jpg",
    "kategori": "Kosmetik",
    "nama": "AHA mimi Thailand",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/a5b0f10dea28e1a51c24aad6a123243d",
    "kategori": "Kosmetik",
    "nama": "Air Mawar",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Air Mawar",
    "varian": "200ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Air Mawar",
    "varian": "Face Milk"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/ab1e222d89407e87cdd1badcfdf2a616",
    "kategori": "Baterai",
    "nama": "Alkaline AA",
    "varian": "Isi 2"
  },
  {
    "gambar": null,
    "kategori": "Baterai",
    "nama": "Alkaline AA",
    "varian": "Isi 6"
  },
  {
    "gambar": "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nrp/nrp48814/l/5.jpg",
    "kategori": "Kosmetik",
    "nama": "Aloe Vera Nature republic",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/amplop.jpg",
    "kategori": "Alat",
    "nama": "Amplop",
    "varian": "Biasa"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Amplop",
    "varian": "Lem"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/sg-11134201-22110-mbny18hhq5jv42",
    "kategori": "Parfum",
    "nama": "Anaiso spray",
    "varian": "150ml Pink"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Anaiso spray",
    "varian": "150ml Ungu"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Anaiso spray",
    "varian": "30ml"
  },
  {
    "gambar": "https://favo.id/cdn/shop/files/ASPTUB1001_Asepso-Plus-Antiseptic-Bar-Soap---80-gr.jpg?v\u003d1757320358",
    "kategori": "Sabun",
    "nama": "Asepso",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rash-m365wsmcey33f2",
    "kategori": "Kosmetik",
    "nama": "Aulia Body Lotion",
    "varian": null
  },
  {
    "gambar": "https://cf.shopee.co.id/file/id-11134207-7r98r-lzu4o5blagbk74",
    "kategori": "Obat Nyamuk",
    "nama": "Autan Sachet",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/188a287cbc92969da50af4d742064dc0.jpg_720x720q80.jpg",
    "kategori": "Parfum",
    "nama": "AXE Spray 135ml",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasj-m0jglay5bjb297",
    "kategori": "Parfum",
    "nama": "AXL Alexander 150ml",
    "varian": "Hitam"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "AXL Alexander 150ml",
    "varian": "Putih"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasj-m0jglay5bjb297",
    "kategori": "Parfum",
    "nama": "AXL Alexander 30ml",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/cologne%20baby.jpg",
    "kategori": "Baby Care",
    "nama": "Baby cologne 100ml",
    "varian": "Cussons"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Baby cologne 100ml",
    "varian": "Jhonsons"
  },
  {
    "gambar": "https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20201204093827359225_GELIGA-20G.jpg",
    "kategori": "Kosmetik",
    "nama": "Balsem geliga",
    "varian": "10g"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Balsem geliga",
    "varian": "20g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcT29gsDoNM2e94C0T1NbE-ua8Nvq9Z82duyV65_lzsdrFO8pX9SDO84AvI\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Balsem Lang",
    "varian": "10g"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Balsem Lang",
    "varian": "20g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRCZIUfs4Z76OghIqleXCPfHRIRiEQGNViTStEmfZeP1EYCn4Q96yjVQaE\u0026s\u003d10",
    "kategori": "Baterai",
    "nama": "Baterai ABC",
    "varian": "AA"
  },
  {
    "gambar": null,
    "kategori": "Baterai",
    "nama": "Baterai ABC",
    "varian": "AAA"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0n-mcknyuavoy7jd8",
    "kategori": "Alat Kebersihan",
    "nama": "Bayclin",
    "varian": "1 Liter"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Bayclin",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Bayclin",
    "varian": "200ml"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Bayclin",
    "varian": "500ml"
  },
  {
    "gambar": "https://img.mbizmarket.co.id/products/thumbs/800x800/2022/01/20/2b8bc1e6c28a63bb5c222bae9aad0349.jpg",
    "kategori": "Obat Nyamuk",
    "nama": "Baygon",
    "varian": "200ml"
  },
  {
    "gambar": null,
    "kategori": "Obat Nyamuk",
    "nama": "Baygon",
    "varian": "600ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/ff/kf/Sb20569403e9340d5a7adbcf05fef3e353.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Bedak Air mancur Nirmala sari",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/fe971e958bb54054968694e343cf0e19.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Bedak Caladine",
    "varian": "100g"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Bedak Caladine",
    "varian": "60g"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/bedc1ed4bb08595d7d92606fc47269a7.jpg",
    "kategori": "Baby Care",
    "nama": "Bedak Cussons",
    "varian": "130g"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Bedak Cussons",
    "varian": "50g"
  },
  {
    "gambar": "https://cf.shopee.co.id/file/4197268326ba96755cb880497686ecf1",
    "kategori": "Kosmetik",
    "nama": "Bedak dingin Bunga Tanjung",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/bedak%20emina.jpg",
    "kategori": "Kosmetik",
    "nama": "Bedak Emina",
    "varian": "Compact Powder"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Bedak Emina",
    "varian": "Loose Powder"
  },
  {
    "gambar": "https://images.ctfassets.net/9hr1ypxhfeji/S9AelDhO1a4ApVqoHBIuK/df594395d3fa708bd1fcf636260c8e14/3_step_pemakaian_bedak_biar_wanginya_bayi_banget-id-id",
    "kategori": "Baby Care",
    "nama": "Bedak Jhonsons",
    "varian": "50g"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Bedak Jhonsons",
    "varian": "75g"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/b5f38c522f1d1920a3b487e93e1b9978.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Bedak ketiak MBK",
    "varian": "Putih"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Bedak ketiak MBK",
    "varian": "Silver"
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/cb8ce95deeb560443fe878a9011dac37.jpg",
    "kategori": "Baby Care",
    "nama": "Bedak kodomo",
    "varian": "200g"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Bedak kodomo",
    "varian": "300g"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Bedak kodomo",
    "varian": "50g"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/marcks.jpg",
    "kategori": "Kosmetik",
    "nama": "Bedak Marcks",
    "varian": "Tabur"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Bedak Marcks",
    "varian": "Teen padat"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134211-7ra0l-mbm8x45ug2hff1",
    "kategori": "Baby Care",
    "nama": "Bedak Mitu",
    "varian": "100g"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Bedak Mitu",
    "varian": "200g"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Bedak Mitu",
    "varian": "50g"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/377f7620e490b30fadcc8004029b3433.jpg",
    "kategori": "Baby Care",
    "nama": "Bedak My Baby",
    "varian": "100g"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Bedak My Baby",
    "varian": "350g"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Bedak My Baby",
    "varian": "50g"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Bedak pigeon",
    "varian": "Padat"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/a6f3fbbd5cd4b79b8bebe7059e2b0952.jpg",
    "kategori": "Kosmetik",
    "nama": "Bedak pigeon",
    "varian": "Refill"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/e169ce4ac90afc4ae2f98024c935f399.jpg",
    "kategori": "Kosmetik",
    "nama": "Bedak Pixy",
    "varian": "Refill"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Bedak Pixy",
    "varian": "Two way cake"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/14d85023b5e9862b9da9330d9452a9ca.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Bedak Salicyl",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/b005e11f41b577efe8df75e12454ccae.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Bedak Sari bengkoang",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSZ1NWMuRk97DDPoMJqNqWQPVuqqXua1GAUT3OZZHTCeYBl3e6F8M9qB9df\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Bedak Sari Rias padat",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sariayu.jpg",
    "kategori": "Kosmetik",
    "nama": "Bedak Sariayu",
    "varian": "Compact"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Bedak Sariayu",
    "varian": "Loose"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/bedak%20skiva.jpg",
    "kategori": "Kosmetik",
    "nama": "Bedak Skiva 21",
    "varian": null
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/c4e6ac8b622a5a17e520eed91930912c.jpg",
    "kategori": "Parfum",
    "nama": "Bellagio Body Spray 80ml",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/b1dd84c04454512a89a2dbcbe0e99d7f.jpg_720x720q80.jpg",
    "kategori": "Parfum",
    "nama": "Bellagio homme spray cologne sport 100ml",
    "varian": null
  },
  {
    "gambar": "https://d1d8o7q9jg8pjk.cloudfront.net/p/lg_640bf105ebd0d.jpg",
    "kategori": "Alat",
    "nama": "Benang jahit Extra",
    "varian": "1 pak"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Benang jahit Extra",
    "varian": "Satuan"
  },
  {
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/Scdc2675a54e949bf9f38b4d2946cdd91A.jpg",
    "kategori": "Kosmetik",
    "nama": "Berastagi Astagina",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-68842233/eagle-s_eagle-s_eagle_henna_hair_dye_pewarna_rambut_full01_crk8lv3y.jpg",
    "kategori": "Kosmetik",
    "nama": "Black Henna Eagle",
    "varian": null
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/80fcb7b998d91f012ae9a21b8f49d8d5.jpg",
    "kategori": "Baby Care",
    "nama": "Botol dot Cussons",
    "varian": "240ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Botol dot Cussons",
    "varian": "50ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rbkb-ma9vtui2z91cca",
    "kategori": "Baby Care",
    "nama": "Botol dot Huki",
    "varian": "120ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Botol dot Huki",
    "varian": "240ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Botol dot Huki",
    "varian": "60ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98s-luorp8gx0d694d",
    "kategori": "Baby Care",
    "nama": "Botol Dot Pigeon",
    "varian": "120ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Botol Dot Pigeon",
    "varian": "240ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Botol Dot Pigeon",
    "varian": "50ml"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/adc000a00e4e3167ba46215a84889d3a.jpg",
    "kategori": "Baby Care",
    "nama": "Botol dot Reliable",
    "varian": "125ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Botol dot Reliable",
    "varian": "60ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/12ba8bba6c7609034301bdf2dd4f22d1.png_720x720q80.png",
    "kategori": "Kosmetik",
    "nama": "Caladine cair",
    "varian": "60ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Caladine cair",
    "varian": "95ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/sg-11134201-7rdwa-lyl0op5ll3wnda",
    "kategori": "Parfum",
    "nama": "Camelia body mist 100ml",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/051d97124185d42a5c4a4a21ec1ff1e9.jpg_720x720q80.jpg",
    "kategori": "Parfum",
    "nama": "Camelia body spray LLF 100ml",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/camelia.jpg",
    "kategori": "Parfum",
    "nama": "Camelia eau de parfum",
    "varian": "125ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Camelia eau de parfum",
    "varian": "22ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Camelia eau de parfum",
    "varian": "60ml"
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/103/MTA-119537941/casablanca_casablanca_body_mist_cologne_full01_fp88y967.jpg",
    "kategori": "Parfum",
    "nama": "Casablanca body mist 100ml",
    "varian": null
  },
  {
    "gambar": "https://images.tokopedia.net/img/cache/700/o3syd0/1997/1/1/c4b15b57547a47978616f50bdd7ec715~.jpeg",
    "kategori": "Parfum",
    "nama": "Casablanca body spray",
    "varian": "200ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Casablanca body spray",
    "varian": "65ml"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/00145ac4328f5c9eef1d99556772e2f5.jpg",
    "kategori": "Parfum",
    "nama": "Casablanca Femme Perfumed",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-17490148/casablanca_casablanca_pink_pomade_-50_g-_full04_cv9n7wie.jpg",
    "kategori": "Minyak Rambut",
    "nama": "Casablanca Pomade",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/92/MTA-154159021/br-m036969-00599_casablanca-deodorant-roll-on-50ml_full05-c12e6117.jpg",
    "kategori": "Deodorant",
    "nama": "Casablanca roll-on",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/b556d94eb22fd55a7df7c9348d638a9f",
    "kategori": "Alat",
    "nama": "Cermin Bulat",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m2omim0nnf11a1@resize_w450_nl.webp",
    "kategori": "Alat",
    "nama": "Cermin Kayu",
    "varian": "No. 3"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Cermin Kayu",
    "varian": "No. 4"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/f62faf3c655c9db8ad67864e1d5567bb.jpg",
    "kategori": "Alat",
    "nama": "Cermin Mini",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-26603435/penny_kaca_rias_duduk_-_cermin_gantung_penny_makeup_-_aesthetic_full03_3fd82e8c.jpg",
    "kategori": "Alat",
    "nama": "Cermin Penny Kecil",
    "varian": null
  },
  {
    "gambar": "https://images.tokopedia.net/img/cache/700/o3syd0/1997/1/1/61706af07f0c47c587fbb7b547147866~.jpeg",
    "kategori": "Kosmetik",
    "nama": "Citra Body Serum 180ml",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-81ztm-mf7rhhhnzkzze6@resize_w450_nl.webp",
    "kategori": "Kosmetik",
    "nama": "Citra Glow UV 110ml",
    "varian": "Avocado"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Citra Glow UV 110ml",
    "varian": "Sakura"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-81ztm-mf7rhhhnzkzze6@resize_w450_nl.webp",
    "kategori": "Kosmetik",
    "nama": "Citra Glow UV 210ml",
    "varian": "Avocado"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Citra Glow UV 210ml",
    "varian": "Night"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Citra Glow UV 210ml",
    "varian": "Sakura"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mdbupbgjqjp856@resize_w450_nl.webp",
    "kategori": "Kosmetik",
    "nama": "Citra Pearly UV",
    "varian": "110ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Citra Pearly UV",
    "varian": "210ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Citra Pearly UV",
    "varian": "380ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Citra Pearly UV",
    "varian": "60ml"
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/248069c2a4de40fcdebb9751def28cbf.jpg",
    "kategori": "Kosmetik",
    "nama": "Clean\u0026Clear Facial wash 100ml",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Clean\u0026Clear Facial wash 100ml",
    "varian": "50ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lzzq2nxm1ja3fc",
    "kategori": "Kosmetik",
    "nama": "Colagen laptulipe",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/58a52cfe030895c4dd6f95b46b7a9cfa.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Colagen Mecca Anugrah",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-54572660/pantene_pantene_conditioner_160ml_silky_-_damage_-_hair_fall_full01_e12j1axd.jpg",
    "kategori": "Shampoo",
    "nama": "Conditioner Pantene 160ml",
    "varian": null
  },
  {
    "gambar": "https://c.alfagift.id/product/1/A6446990001107_A6446990001107_20230801113811583_base.jpg",
    "kategori": "Shampoo",
    "nama": "Conditioner Rejoice",
    "varian": "150ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Conditioner Rejoice",
    "varian": "70ml"
  },
  {
    "gambar": "https://image.dailymartazzahra.com/s3/productimages/webp/co37129/p794113/w600-h600/a1781ed0-cbcd-498b-b181-7cbe2d4173ce.webp",
    "kategori": "Shampoo",
    "nama": "Conditioner Sunsilk 160ml",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/sg-11134201-7rce7-m6drp32cvxou8b",
    "kategori": "Kosmetik",
    "nama": "Corina hair spray",
    "varian": "150ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/6037eb47bc354f480ec8a8edec7133ee.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Cream Citra Pearly glow UV 40g",
    "varian": null
  },
  {
    "gambar": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/7/5/fe8d7c30-2efc-4b72-9076-e7b6ea1ca651.jpg",
    "kategori": "Kosmetik",
    "nama": "Cream Cussons",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Cream Dr.Pure",
    "varian": "Paket"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQgTFu05rMFmv-UO4YanYPQFaE5mnXY80ycDUhswihMjkcs2UAbn1AY3Uqe\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Cream Dr.Pure",
    "varian": "Satuan"
  },
  {
    "gambar": "https://www.gogobli.com/produk/fair__lovely/106567_fair__lovely_powder_cream_20gr.jpg",
    "kategori": "Kosmetik",
    "nama": "Cream Fair lovely",
    "varian": "23g"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Cream Fair lovely",
    "varian": "46g"
  },
  {
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S4bc8f137e7b34a79b5fe8d4a84e5c584w.jpg",
    "kategori": "Kosmetik",
    "nama": "Cream Garnier 20ml",
    "varian": "Sakura Night"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Cream Garnier 20ml",
    "varian": "Sakura SPF"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Cream Garnier 20ml",
    "varian": "Sakura UV"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Cream Garnier 20ml",
    "varian": "Vitamin C Night"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Cream Garnier 20ml",
    "varian": "Vitamin C SPF"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Cream Garnier 20ml",
    "varian": "Vitamin C UV"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/288d5c1fb03291c3d2182504d2b68b94.jpg",
    "kategori": "Kosmetik",
    "nama": "Cream Garnier Sachet",
    "varian": "Night"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Cream Garnier Sachet",
    "varian": "Sakura UV"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Cream Garnier Sachet",
    "varian": "Vitamin C"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRDS6VAwt9KS0xP3ZqzMvSJnBfUDW86DSTioB0SOYti_g\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Cream Minico",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTLqM55ljXTyVv5RAl0hk6WPEv8vXQznZfgqznbo-uA6vTEhHQ0dJwP97o\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Cream Ponds Niasorcinol",
    "varian": "20g"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Cream Ponds Niasorcinol",
    "varian": "40g"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lkqh1rm2aubm29",
    "kategori": "Baby Care",
    "nama": "Cussons 2in1 100ml",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Cussons baby oil",
    "varian": "100ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98u-lma6lcgpwd2742",
    "kategori": "Baby Care",
    "nama": "Cussons baby oil",
    "varian": "50ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Cussons Hair Lotion",
    "varian": "100ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/61635b124aec85d7da2eb4a019f17290.jpg_960x960q80.jpg_.webp",
    "kategori": "Baby Care",
    "nama": "Cussons Hair Lotion",
    "varian": "50ml"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Cutter",
    "varian": "Biasa"
  },
  {
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S596031b0924949be975f94e0136317bbB.jpg",
    "kategori": "Alat",
    "nama": "Cutter",
    "varian": "Gunindo"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Cutton buds cussons",
    "varian": "Extra Fine"
  },
  {
    "gambar": "https://www.cussonsbaby.co.id/wp-content/uploads/2020/04/CussonsBaby_Thumbnail-CottonBudPembersihTelingaBayi50s.jpg",
    "kategori": "Baby Care",
    "nama": "Cutton buds cussons",
    "varian": "Regular"
  },
  {
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/Sdd84441710cd4929931cd83abcc21af3j.jpg",
    "kategori": "Baby Care",
    "nama": "Cutton buds Valentine",
    "varian": null
  },
  {
    "gambar": "https://assets.babyzania.com/image/cache/catalog/1/Dee-Dee-Shampoo-Bottle-Pump-Shampoo-Anak---250-ml-800x800.jpg",
    "kategori": "Sabun",
    "nama": "Dee-Dee Shampoo",
    "varian": "250ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Dee-Dee Shampoo",
    "varian": "mini"
  },
  {
    "gambar": "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/10/25/f6f9ba7d-6c19-4e3a-9036-581efd84bf8b.jpg",
    "kategori": "Deodorant",
    "nama": "Deo Posh sachet",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/e878473ce6365899633b3d6050d043de.jpg_720x720q80.jpg",
    "kategori": "Sabun",
    "nama": "Dettol antiseptik",
    "varian": "45ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Dettol antiseptik",
    "varian": "95ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/92878cecb4d1549441b92b52a049c8d5.jpg_720x720q80.jpg",
    "kategori": "Sabun",
    "nama": "Dettol Batang",
    "varian": "100g"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Dettol Batang",
    "varian": "60g"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/dolby.jpg",
    "kategori": "Kosmetik",
    "nama": "Dolby",
    "varian": "Panjang"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Dolby",
    "varian": "Pendek"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Doremi kids cologne",
    "varian": "100ml"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/dd94a21e393a95dfc364b14b85656fb4.jpg",
    "kategori": "Parfum",
    "nama": "Doremi kids cologne",
    "varian": "60ml"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/5166e7a03ea7d9c938660ceae4971bc3.jpg",
    "kategori": "Deodorant",
    "nama": "Dove Roll on",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQOOhujkydSIiGF4INvhulY6Yxqo3gWnpyZGHO4ani1qw\u0026s\u003d10",
    "kategori": "Alat Kebersihan",
    "nama": "Downy Sachet 500",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcR6Tpbkc-LWGTcIcp_eWM2p7nIeJRORHOCHptdtKQVaww\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Elips vitamin rambut blister",
    "varian": null
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/f62814d1cbff8cc7f78f5de05ad8cdfd.jpg",
    "kategori": "Kosmetik",
    "nama": "Emeron lovely natural",
    "varian": "200ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Emeron lovely natural",
    "varian": "500ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRP9BkedRwsdqoweN5C-AszEWyEZoG9kfGg8xqo9rCZyg\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Emeron lovely white",
    "varian": "200ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Emeron lovely white",
    "varian": "500ml"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/emina%20toner.jpg",
    "kategori": "Kosmetik",
    "nama": "Emina Bright Stuff 100ml",
    "varian": "Face Toner"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Emina Bright Stuff 100ml",
    "varian": "Micellar Water"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQs6d5x1sMWjj39iNaJvHypwntbInZeZbTYxgYlG_-NTQ\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Emina Bright Stuff Cream",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rbk6-maxhgo6524rd68",
    "kategori": "Kosmetik",
    "nama": "Emina face wash",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Emina face wash",
    "varian": "50ml"
  },
  {
    "gambar": "https://guardianindonesia.co.id/media/catalog/product/3/1/3100048.png?format\u003djpeg",
    "kategori": "Kosmetik",
    "nama": "Emina Sun battle SPF 35",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRzN6WbnBeo5KOdHlMbtyrzoqYV6V8LSa5bLHSLAiwMMQ\u0026s\u003d10",
    "kategori": "Baby Care",
    "nama": "Empeng Huki",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Eskulin gel",
    "varian": "100ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQHoy7rC08LEfnoGn5BmArS-gd1qtWcSsO9kkiggwqbaw\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Eskulin gel",
    "varian": "50ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcR5Ij1dLBViat4stFAoOfMnKZU401cT5C8ydvc3uEFlSg\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Eskulin Japanese spray cologne 110ml",
    "varian": null
  },
  {
    "gambar": "https://kkakka.id/9163/eskulin-hair-body-wash-bottle-280ml-natural-smoothsofia.jpg",
    "kategori": "Sabun",
    "nama": "Eskulin Kids 2in1 280ml",
    "varian": null
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/262811fe280dc794c8c6c13edd026b63.jpg",
    "kategori": "Shampoo",
    "nama": "Eskulin Kids Shampoo 200ml",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/d928a3c3ad83da7b169e3e1e06daba54.jpg_720x720q80.jpg_.webp",
    "kategori": "Parfum",
    "nama": "Eskulin mist cologne 125ml",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/ff/kf/Sc46c39bb86c54b47ae0e767e1d871307t.jpg_720x720q80.jpg",
    "kategori": "Parfum",
    "nama": "Eskulin Splash cologne 125ml",
    "varian": null
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/17a7aa1ffaf83e6149f132bab7fe8420.jpg",
    "kategori": "Kosmetik",
    "nama": "Eyebrow Menow M.N",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTqAB6E0R_BdvnA3R_TicBMy2VFfTwiyd88kd6I2nkjxknYS7knsVJoYJe9\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Ez White Tofu",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Fair lovely sachet",
    "varian": "Cream"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/aafc773e695c609b55614ebd70ef398e.jpg",
    "kategori": "Kosmetik",
    "nama": "Fair lovely sachet",
    "varian": "Sabun"
  },
  {
    "gambar": "https://cf.shopee.co.id/file/1123989106e3ae1fa75c877d28ee86ea",
    "kategori": "Kosmetik",
    "nama": "Fanbo Compact Powder",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRUwVZMbqnfEmNm7ukWDqPFZHI3zUWCJDNnNnLc7gweEA\u0026s\u003d10",
    "kategori": "Alat Kebersihan",
    "nama": "Formula biasa isi 3",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTmRYD93G3nF2Dg13xrLBQNY-2O_hmSjhKadMTDvIdODQ\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Foundation NTS",
    "varian": "Putih Hijau"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Foundation NTS",
    "varian": "Silver"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/fresh.jpg",
    "kategori": "Parfum",
    "nama": "Fresh Natural 100ml",
    "varian": "Cologne"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Fresh Natural 100ml",
    "varian": "EDT Kaca"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Fresh Point Parfum Laundry",
    "varian": "1 Liter"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSprwk2tipgT5fBsWO9Z4mJDFaSlpsXLivnszNk2LFJEA\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Fresh Point Parfum Laundry",
    "varian": "250ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Fresh Point Parfum Laundry",
    "varian": "500ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Fresh Point Pelicin Laundry",
    "varian": "1 Liter"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQHNtdIwqrQyG_BH4HC-nnYLTM4VPpmkXvD1MlCGOxUzw\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Fresh Point Pelicin Laundry",
    "varian": "250ml"
  },
  {
    "gambar": "https://ukhtiosaka.com/wp-content/uploads/2023/11/Freshcare-Minyak-Angin-Aromatheraphy2.webp",
    "kategori": "Kosmetik",
    "nama": "Freshcare",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Gandapura",
    "varian": "30ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/1bdbd75c15d7db3afcbf29a3d1756138.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Gandapura",
    "varian": "60ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98t-lyd4v80iybd45d",
    "kategori": "Minyak Rambut",
    "nama": "Gatsby pomade",
    "varian": "30g"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Gatsby pomade",
    "varian": "80g"
  },
  {
    "gambar": "https://solvent-production.s3.amazonaws.com/media/images/products/2021/08/DSC_0371.JPG",
    "kategori": "Minyak Rambut",
    "nama": "Gatsby pomade kotak",
    "varian": "30g"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Gatsby pomade kotak",
    "varian": "80g"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Gatsby spray Gold",
    "varian": "175ml"
  },
  {
    "gambar": "https://laz-img-sg.alicdn.com/p/30fbee3b36e56373e0c89f6e31ba4807.jpg",
    "kategori": "Parfum",
    "nama": "Gatsby spray Gold",
    "varian": "50ml"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Gatsby THC",
    "varian": "125g"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Gatsby THC",
    "varian": "250g"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/719a78fcbc5d04e674b5a00ee5718075.png",
    "kategori": "Minyak Rambut",
    "nama": "Gatsby THC",
    "varian": "28g"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Gatsby THC",
    "varian": "70g"
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/6c66f7c112aaa1fb52f28095cc1bc67a.jpg",
    "kategori": "Parfum",
    "nama": "Gatsby urban cologne 125ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTOvvFqxRxuFGXIc4nkraLqtVEKlVsi8tkduAkNxvGQRg\u0026s\u003d10",
    "kategori": "Minyak Rambut",
    "nama": "Gatsby wax",
    "varian": "25g"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Gatsby wax",
    "varian": "75g"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Gatsby WG",
    "varian": "150g"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Gatsby WG",
    "varian": "300g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQR99Ch9O0wSBqld0XqUg-Wkly3UToFAhyksaChXwEQEg\u0026s\u003d10",
    "kategori": "Minyak Rambut",
    "nama": "Gatsby WG",
    "varian": "30g"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Gatsby WG",
    "varian": "75g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTiAMgr0QXgLMqs4Z9_Yt6FvhZiMJAF7-zzrBkcItXdGQ\u0026s\u003d10",
    "kategori": "Alat Kebersihan",
    "nama": "Gentle Gen",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTn-aO5PkzzMauJ3SRjkxaHBh0SB15KSap5LtE-GCLLg6kKqxmmghq3j4Sb\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Godokan sirih",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasi-m0l4obeubwuke1",
    "kategori": "Kosmetik",
    "nama": "GPU",
    "varian": "30ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "GPU",
    "varian": "60ml"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Gunting",
    "varian": "OLL"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Gunting",
    "varian": "OMM"
  },
  {
    "gambar": "https://imgx.brdcdn.com/imgx/500/aW1hZ2VzLnRva29wZWRpYS5uZXQvaW1nL2NhY2hlLzcwMC9WcWJjbU0vMjAyMS80LzE3L2JjNzczNjU3LTQzZmItNDFkNy04YTgyLTY3ODI1MmRiNjBlZA\u003d\u003d.jpg",
    "kategori": "Alat",
    "nama": "Gunting",
    "varian": "OSS"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSFUjJ_WfDUShhQeumkDZE3XmYKIixwA2awpH6fJ70eELcPUIvJyhRzBsMD\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Handbody Bibit pemutih",
    "varian": null
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/1e5c2754bcce4fdd5339ed0cd30d8a38.jpg",
    "kategori": "Kosmetik",
    "nama": "Handbody Leivy",
    "varian": "270ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Handbody Leivy",
    "varian": "500ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcROLjZOewiTOzJ95Me39gOawovo6hUresEvMx_TUxIYFWAWfq0pwlxeqqBC\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Handbody Natur E",
    "varian": "Hijau"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Handbody Natur E",
    "varian": "Merah"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQwYEElbkx_Ix9wK2Y8CIdlH4KybvEbgq-Ld2jPbdEk2Q\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Handbody Shinzui",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Handbody Shinzui",
    "varian": "210ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQ_s_G-ALDz9BMYchFoTbQbrqrAkWh-fALD8BOV0rWc_A\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Handsoap Yuri Botol",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/3e3b3a59af4b0dd0649ad9c2581eae86.jpg_720x720q80.jpg",
    "kategori": "Alat",
    "nama": "Hansaplast",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Happy Oil",
    "varian": "125ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQfXmAACHFdp_KL4Sx9IeLAo2d42D6t6b0VXiO-xydV3HGMVZVmsZ-y2HXi\u0026s\u003d10",
    "kategori": "Minyak Rambut",
    "nama": "Happy Oil",
    "varian": "70ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQtZ7tHLjcCJmdliT_RnS5MqSr1HVlsbM1c9hskKiY6Ci2Df26lvOt0AU8\u0026s\u003d10",
    "kategori": "Alat",
    "nama": "Harpic 200ml",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//112/MTA-89694337/harum_sari_bedak_bb_harum_sari_full02_r4fxk9bc.jpg",
    "kategori": "Kosmetik",
    "nama": "Harum Sari",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/8db5121a13042ba2a0a8085429ca62f1.jpg_960x960q80.jpg_.webp",
    "kategori": "Baby Care",
    "nama": "Herocyn baby",
    "varian": "100g"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Herocyn baby",
    "varian": "200g"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Herocyn dewasa",
    "varian": "150g"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/584ec66608b775ef33b06619358a2e59.jpg",
    "kategori": "Kosmetik",
    "nama": "Herocyn dewasa",
    "varian": "85g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQsBJL2Y0m3VOYuwc2n6cXsDhO6Y1-Qh62vTGmhBDdfcA\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Hit Kaleng",
    "varian": "165ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Hit Kaleng",
    "varian": "180ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/ff/kf/S2ca09aeb764743288136ca2e98858feb7.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Inhaler Lang",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Isi Staples",
    "varian": "Besar"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTPinKbGInEII8oKMS8hQ1t9I2EL0iXa1fx1YwsJmG0PA\u0026s\u003d10",
    "kategori": "Alat",
    "nama": "Isi Staples",
    "varian": "Kecil"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcS1P9qm9h2quBBx4ZmxqYWtMtWvzJTDgM9DNy4OWQ2Htw\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Izzi body mist hijab 100ml",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Izzi love body mist",
    "varian": "100ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcR70hSiuK1N0ApfibquijKKV8q1tWj79qXVtVdZkFGj8w\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Izzi love body mist",
    "varian": "60ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/sg-11134201-22110-k2lku5oyutjv20",
    "kategori": "Parfum",
    "nama": "Jacomo",
    "varian": "150ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Jacomo",
    "varian": "30ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/cf5b0c5ccb8f9ea8314bd72d2ade5d88.jpg_720x720q80.jpg",
    "kategori": "Alat",
    "nama": "Jarum Jahit",
    "varian": "Besar"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Jarum Jahit",
    "varian": "Kecil"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/0aab19a75378fdb2418d9dd1089e8e4e.jpg",
    "kategori": "Alat",
    "nama": "Jarum pentul Kecil",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/jepit%20baju.jpg",
    "kategori": "Alat",
    "nama": "Jepit baju",
    "varian": "Biasa"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Jepit baju",
    "varian": "Breo"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Jepit kuku",
    "varian": "Biasa Besar"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/jepit%20kuku.jpg",
    "kategori": "Alat",
    "nama": "Jepit kuku",
    "varian": "Biasa Kecil"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Jepit kuku",
    "varian": "Superdoll Besar"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Jepit kuku",
    "varian": "Superdoll Kecil"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/52ae5668820fd031489f20755209a19d.png_720x720q80.png",
    "kategori": "Baby Care",
    "nama": "Jhonsons 2IN1 body wash",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Jhonsons 2IN1 body wash",
    "varian": "200ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Jovan musk oil",
    "varian": "150ml"
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//107/MTA-24770779/jovan_deodorant_spray_jovan_musk_oil_ds_150ml_orange_full01_6a9fc3c5.jpg",
    "kategori": "Parfum",
    "nama": "Jovan musk oil",
    "varian": "30ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQULLtBb6xxxLk7phj2maVL1poiirxthEEYWsCaEo4XLw\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Kahf Eau De Toilette 35ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTmtRGeTSsRx-1u2K4B95UstObx97yfpxK7Q3q_aJsZ1Q\u0026s\u003d10",
    "kategori": "Deodorant",
    "nama": "Kahf roll on 45ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQcux-Wv4SfWBOkgIaTM-1tjigox4bGWUzR6v342FeAX4uq0ZGy77zUNjQ\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Kanna White",
    "varian": "15g"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Kanna White",
    "varian": "30g"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/kapas.jpg",
    "kategori": "Kosmetik",
    "nama": "Kapas Muka",
    "varian": "Kharisma"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Kapas Muka",
    "varian": "Modis"
  },
  {
    "gambar": "https://d2qjkwm11akmwu.cloudfront.net/products/11262-1665781763.webp",
    "kategori": "Kosmetik",
    "nama": "Kapas Selection",
    "varian": "Bulat"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/4bb346685ef9f0818796b1a85cd2332d.jpg",
    "kategori": "Alat",
    "nama": "Kapur Ajaib",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRhx2wTz08lRc5--uFVez2Xm_5KNuLtXtpDaC7fktkkkA\u0026s\u003d10",
    "kategori": "Alat",
    "nama": "Kapur Barus bola",
    "varian": "Isi 3"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Kapur Barus bola",
    "varian": "Isi 5"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTY1STIimPfj-fAXyf4yzibdm8it0ckyz2ijaw1UBhiXQ\u0026s\u003d10",
    "kategori": "Alat",
    "nama": "Kapur barus bola keranjang",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQtAZRSeil_DKcT38EQ_HUshnBYyxJnkCd0y3b8lD7SGA\u0026s\u003d10",
    "kategori": "Alat",
    "nama": "Kapur Barus Dahlia keranjang bulat",
    "varian": null
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/3ecff2b66c9d5a86d7654a5b40e39040.jpg",
    "kategori": "Alat",
    "nama": "Kapur Barus renteng",
    "varian": null
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/16dd64259404dcc6cac7d2934da7179a.jpg",
    "kategori": "Alat",
    "nama": "Kapur barus Seagull 150g",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Kastok baju",
    "varian": "Hitam"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Kastok baju",
    "varian": "Luxor"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Kastok baju",
    "varian": "Vito"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Kelly Merah",
    "varian": "15g"
  },
  {
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/Sccbdc41d90b9466893692e78597adca9N.jpg",
    "kategori": "Kosmetik",
    "nama": "Kelly Merah",
    "varian": "5g"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Kelly Merah",
    "varian": "Fair Cheek"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/38e5306c274d9e1737943429e2929f60",
    "kategori": "Alat Kebersihan",
    "nama": "Kispray Botol",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTts8KwNwj5k1rQKMSVkZhh_zdAOZw3nE7ND60ZTCvSVWqQjy-IzrFBMqc\u0026s\u003d10",
    "kategori": "Alat",
    "nama": "Kiwi cair",
    "varian": "30ml"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Kiwi cair",
    "varian": "75ml"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Kiwi kaleng",
    "varian": "100g"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/df6f01149553023b7ac77da5db3da7b1.jpg_960x960q80.jpg_.webp",
    "kategori": "Alat",
    "nama": "Kiwi kaleng",
    "varian": "17g"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Kiwi kaleng",
    "varian": "45g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRoK3BYPmagZxaTmoOOfr72yxqN3yFJCl6QSfqQQkuSZQ\u0026s\u003d10",
    "kategori": "Alat",
    "nama": "Korek telinga lampu",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Lakban",
    "varian": "Besar"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSbYVaXJZFqaC4hsNw2YBesNfe8iBxCy-bPQ4lj8EgfnQ\u0026s\u003d10",
    "kategori": "Alat",
    "nama": "Lakban",
    "varian": "Kecil"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Laurier Night 30cm",
    "varian": "Isi 16"
  },
  {
    "gambar": "https://www.kao.com/content/dam/sites/kao/www-kao-com/id/id/products/laurier/lre_relax_night30_01.jpg",
    "kategori": "Kosmetik",
    "nama": "Laurier Night 30cm",
    "varian": "Isi 8"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Laurier Night 35cm",
    "varian": "Isi 12"
  },
  {
    "gambar": "https://assets.babyzania.com/image/cache/catalog/1/1530c0dc-7c0f-4654-adfd-cec64c9c66f6-800x800.jpg",
    "kategori": "Kosmetik",
    "nama": "Laurier Night 35cm",
    "varian": "Isi 6"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/63332f82a26401109d02e92d5d057fa8.jpg",
    "kategori": "Alat",
    "nama": "Lem korea",
    "varian": null
  },
  {
    "gambar": "https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/06aadfa98a314a598c771ade6bd02ee4~.jpeg",
    "kategori": "Sabun",
    "nama": "Lemon Soap",
    "varian": "15g"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Lemon Soap",
    "varian": "25g"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Lemon Soap",
    "varian": "75g"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/lip%20cream.jpg",
    "kategori": "Kosmetik",
    "nama": "Lip Cream",
    "varian": "Hanasui"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Lip Cream",
    "varian": "Implora"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Lip Cream",
    "varian": "Maybelline"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Lip Cream",
    "varian": "OMG"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTU04lmtcyemL85m74mA6U1PJ7FZU-34dIcktmietCzBg\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Lip Tint Hanasui",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSApAtm4ppPon2bLpYyNbfTANzPkB4Vp6nycvR96bTXDA\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Lipstik Elisabeth",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQN_NYm5SvfNGuWRonhLs-oCLX4cJjjAQLzsgDYj04Fhw\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Lipstik Skiva 21",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcT1Upnh5ljrnvhTtBgFmIjqqzOd-q6o19-n9t6Ej54A6w\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Lipstik Valentine Ruby",
    "varian": null
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/1e5207cf194a6f12d9739908d3f4b0ab.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Listerine",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Listerine",
    "varian": "250ml"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/lovillea%20series.jpg",
    "kategori": "Parfum",
    "nama": "Lovilla",
    "varian": "Body Mits"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Lovilla",
    "varian": "EDP Kaca"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/lulur.jpg",
    "kategori": "Kosmetik",
    "nama": "Lulur",
    "varian": "Ovale"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Lulur",
    "varian": "Sekar Jagat"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Lulur",
    "varian": "THAI"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Lulur",
    "varian": "Vienna"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Lulur Ayudia Pouch",
    "varian": "1000g"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/ddc2766b02e0dd584ee07f05b054c908.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Lulur Ayudia Pouch",
    "varian": "300g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQiOT85Uj8F8Vbad4mO1bD90N6QuORk-_vGekWZWjwFcNU-vP9MM5hVWww\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Lulur bali herborist",
    "varian": "100g"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Lulur bali herborist",
    "varian": "200g"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/f2787266e8d7ed02e7712496807e8199",
    "kategori": "Kosmetik",
    "nama": "Lulur Bengkoang kuning mekar sari",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRcWAtUy0j6U4JpPHz6vbB2kumVo3FmTGHfs2Sgw0hIGo8NDwgozUwCyV0\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Lulur Hafabi",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSxVwKr3p6nwnXzk6O9Lqnc0UiofdXId4cS9V6fUAAbAg\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Lulur kocok ratu mas",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Lulur kocok ratu mas",
    "varian": "250ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rbk3-m95g0s3ynt0221",
    "kategori": "Kosmetik",
    "nama": "Lulur Purbasari",
    "varian": "100g"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Lulur Purbasari",
    "varian": "200g"
  },
  {
    "gambar": "https://img.lazcdn.com/g/ff/kf/S8397f824a6d14337a78801877279ad80F.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Lulur Shinzui",
    "varian": "120g"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Lulur Shinzui",
    "varian": "200g"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/44180da4851de61f556da1954a5be798.png_960x960q80.png_.webp",
    "kategori": "Kosmetik",
    "nama": "Lulur Vienna Pouch 250g",
    "varian": null
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/f4623ba3720bc811c0a0c15ea4dda57f.jpg",
    "kategori": "Kosmetik",
    "nama": "Makarizo advisor vita max 8ml",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Makarizo hair energy spray",
    "varian": "100ml"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/5a0c3b357f41021b1a31c7779ea6db7b.jpg",
    "kategori": "Kosmetik",
    "nama": "Makarizo hair energy spray",
    "varian": "60ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSOJ7Yh5MAu69zBjNx5kXkJyMPXmXhxXQnZZthL2Ev4jg\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Make Over Liquid matt foundation",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Make Over Perfect Cover",
    "varian": "Refill"
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/13fb207119b4db4031e85e5b4b34ccb1.jpg",
    "kategori": "Kosmetik",
    "nama": "Make Over Perfect Cover",
    "varian": "Two Way Cake"
  },
  {
    "gambar": "https://bimg.akulaku.net/goods/spu/75329254f43546478fc39bfa473be3cf8513.png?w\u003d726\u0026q\u003d80\u0026fit\u003d1",
    "kategori": "Kosmetik",
    "nama": "Make Over Silky Smooth Powder",
    "varian": null
  },
  {
    "gambar": "https://cf.shopee.co.id/file/535db97cf720105ffbfca7cc024a0188",
    "kategori": "Kosmetik",
    "nama": "Manjakani",
    "varian": "50ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Manjakani",
    "varian": "90ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Manjakani",
    "varian": "Jumbo"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/b261506ae6169be853eea025a05a3024.jpg_720x720q80.jpg",
    "kategori": "Parfum",
    "nama": "Marie jos 70ml",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/109/MTA-117883369/br-m036969-10098_marina-compact-powder_full01-657503aa.jpg",
    "kategori": "Kosmetik",
    "nama": "Marina Compact Powder",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Marina Natural",
    "varian": "190ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQOnxHcli9ge6rm2UvBfQat4rpjIPwJu0uNrsOAiH_PUg\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Marina Natural",
    "varian": "95ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Marina White",
    "varian": "192ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Marina White",
    "varian": "350ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Marina White",
    "varian": "460ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcS4PrY-0BhTORoaYf56r5WQp2J0apT5QycdF6aSaLIumA\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Marina White",
    "varian": "95ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Marlboro Napoleon",
    "varian": "200ml"
  },
  {
    "gambar": "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/a03e70b424314f179ddbe13730415585~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?dr\u003d15584\u0026t\u003d555f072d\u0026ps\u003d933b5bde\u0026shp\u003d6ce186a1\u0026shcp\u003de1be8f53\u0026idc\u003dmy2\u0026from\u003d1826719393",
    "kategori": "Parfum",
    "nama": "Marlboro Napoleon",
    "varian": "65ml"
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/7ea22b5f1c11ffbfcf9fce8121e44942.jpg",
    "kategori": "Minyak Rambut",
    "nama": "Marlboro pomade",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/mascara%20Maybelline.jpg",
    "kategori": "Kosmetik",
    "nama": "Mascara Maybelline",
    "varian": "Colossal"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Mascara Maybelline",
    "varian": "Hyper Curl"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTh09BTGtAVotsO9c3t8ahYdIVRDAaFdwMIiAY_9vcqKg\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Masker Muka Naturgo Hanasui",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTsth38iRJrbCwKZ4j7gw8KoDJ_ixfjcfXBnqwePXGNfA\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Masker Rambut Elips sachet",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQR31IVbvg9BkS5D2hEEpOV8bSnA3O64E-Egw7PH6vT-g\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Master kids spray cologne 80+20ml",
    "varian": null
  },
  {
    "gambar": "https://images.tokopedia.net/img/cache/700/o3syd0/1997/1/1/383723e53d074d8cb3952b7af75bcdea~.jpeg",
    "kategori": "Kosmetik",
    "nama": "Melani",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/mesin%20nyamuk.jpg",
    "kategori": "Obat Nyamuk",
    "nama": "Mesin Nyamuk Liquid Elektrik",
    "varian": "Hit"
  },
  {
    "gambar": null,
    "kategori": "Obat Nyamuk",
    "nama": "Mesin Nyamuk Liquid Elektrik",
    "varian": "Vape"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Micellar W Garnier",
    "varian": "125ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRRfzixQz275Ffl11ts9QUhk_xpirf-O2PboaXXxxU2bQ\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Micellar W Garnier",
    "varian": "50ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/207ed0d3a46ef8eacb054933aca2898f.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Minyak angin gajah",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/262eb7bea200f62048fa27be2f11c4a5.jpg_960x960q80.jpg_.webp",
    "kategori": "Parfum",
    "nama": "Minyak fanbo",
    "varian": "67pp"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Minyak fanbo",
    "varian": "Gloria 13ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Minyak fanbo",
    "varian": "Gloria 5ml"
  },
  {
    "gambar": "https://images.tokopedia.net/img/cache/500-square/aphluv/1997/1/1/95bd9a48fbb6439e80e67619965f45cb~.jpeg",
    "kategori": "Kosmetik",
    "nama": "Minyak Kayu Putih Gajah kaca",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Minyak Kayu Putih Lang",
    "varian": "120ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQgmvXbfh4U26qQxz-CX_fxrh0iBnyb28UAqw8z33YFzw\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Minyak Kayu Putih Lang",
    "varian": "15ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Minyak Kayu Putih Lang",
    "varian": "210ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Minyak Kayu Putih Lang",
    "varian": "30ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Minyak Kayu Putih Lang",
    "varian": "60ml"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/mesin%20nyamuk.jpg",
    "kategori": "Minyak Rambut",
    "nama": "Minyak Rambut",
    "varian": "Clear Men"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Minyak Rambut",
    "varian": "Kemiriku"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Minyak Rambut",
    "varian": "Naura"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Minyak Rambut",
    "varian": "Rita"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Minyak Rambut",
    "varian": "Santal"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Minyak Rambut",
    "varian": "Viva"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Minyak Rambut",
    "varian": "Vycaris"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Minyak rambut Gatsby sachet",
    "varian": "Pomade"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134201-7qul5-lkam964hzau18b",
    "kategori": "Minyak Rambut",
    "nama": "Minyak rambut Gatsby sachet",
    "varian": "WG"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Minyak rambut Tancho",
    "varian": "130g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSSoxiUVo8XZJoTU677KDYEo8gZObjzJoTfTh8Px7_8HQ\u0026s\u003d10",
    "kategori": "Minyak Rambut",
    "nama": "Minyak rambut Tancho",
    "varian": "20g"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Minyak rambut Tancho",
    "varian": "40g"
  },
  {
    "gambar": null,
    "kategori": "Minyak Rambut",
    "nama": "Minyak rambut Tancho",
    "varian": "60g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcT3KhAzGf6Nqpl6Njmr0lz-15_5oe6Tiuw5JsNIyPJnmg\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Minyak Tawon",
    "varian": "CC"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Minyak Tawon",
    "varian": "DD"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Minyak Tawon",
    "varian": "EE"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Minyak Tawon",
    "varian": "FF"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Minyak zaitun mustika",
    "varian": "175ml"
  },
  {
    "gambar": "https://khyrastore.com/wp-content/uploads/2020/09/2924676_a796cc11-f2b1-4add-afc3-4b81a792eda2_905_905.jpg",
    "kategori": "Kosmetik",
    "nama": "Minyak zaitun mustika",
    "varian": "75ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Minyak Zaitun Purbasari",
    "varian": "150ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/e90a5f640cd47bc33db0338ca2df0705.jpg_960x960q80.jpg_.webp",
    "kategori": "Kosmetik",
    "nama": "Minyak Zaitun Purbasari",
    "varian": "75ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Mitu baby cologne",
    "varian": "100ml"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/b2291e51fd005574b8394316c06296e2.jpg",
    "kategori": "Baby Care",
    "nama": "Mitu baby cologne",
    "varian": "50ml"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/morris.jpg",
    "kategori": "Parfum",
    "nama": "Morris Eau De Parfume",
    "varian": "60ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Morris Eau De Parfume",
    "varian": "70ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "MS Glow",
    "varian": "Cream"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/135b903e0060bda8abb88be000eb69db.png",
    "kategori": "Kosmetik",
    "nama": "MS Glow",
    "varian": "Facial Wash"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "MS Glow",
    "varian": "Toner"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQOAJHDaHgL0XpguxcTb9r_hucyrOqbpA2JCL_AhOgREQ\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "MX Profesional hair serum 125ml",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/7fd6f2a985590b7d4282de8da8f5a676.jpg_720x720q80.jpg",
    "kategori": "Baby Care",
    "nama": "My Baby Hair \u0026 body 200ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRgrw5sPXxeUE6RjQQiEuvW9eQi1Atijbxq13G4YrQBdQ\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Nivea body lotion 200ml",
    "varian": "instant glow"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Nivea body lotion 200ml",
    "varian": "Night Nourish"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Nivea body lotion 200ml",
    "varian": "Radiant\u0026Smooth"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Nivea body lotion 200ml",
    "varian": "repair\u0026protect"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/b4fd5b7802e5e6d1d3f3155326dcfc3f.jpg",
    "kategori": "Kosmetik",
    "nama": "Nivea body lotion repair\u0026protect 100ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcR67fVKybdTa_shPVvfVm-oiD9U-dj9nRhB8nCLiNFB9Q\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Nivea body serum 180ml",
    "varian": "care\u0026protect"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Nivea body serum 180ml",
    "varian": "Hijab Cooling"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Nivea body serum 180ml",
    "varian": "Instant glow"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Nivea body serum 180ml",
    "varian": "Night Nourish"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Nivea body serum 180ml",
    "varian": "radiant\u0026smooth"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRirOnS2efVju_PZk9iNDLwXAWBezVHq3GiRzo27u2UzA\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Nivea body serum care protect 70ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcS_AsO_k8VelI3YqaHiECuzf706AXSuUPmaOJWna5ehlA\u0026s\u003d10",
    "kategori": "Deodorant",
    "nama": "Nivea deo spray men 150ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn1.gstatic.com/shopping?q\u003dtbn:ANd9GcRA0sQG6_FuYIFtCbKZDlyML6l_rQ10xbd5bfK5IIO5kz6slQ-Z2zx6v4drRrwmZ6ZGZd2tBF2WNXb_JOJ9YqM0fVnDEGJ2Rbn2WQRFsCpfxT5tAmVuvg_Q\u0026usqp\u003dCAc",
    "kategori": "Deodorant",
    "nama": "Nivea deo spray women 150ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcR-0zTRnI-Xc2isST1sbCmhl4f4_FQRIYY__5qgVoX27w\u0026s\u003d10",
    "kategori": "Deodorant",
    "nama": "Nivea Roll on",
    "varian": "25ml"
  },
  {
    "gambar": null,
    "kategori": "Deodorant",
    "nama": "Nivea Roll on",
    "varian": "50ml"
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//100/MTA-8496172/paperline_nota_kontan_paperline_besar_3_ply_-nk_b3_ncr-_full01_3hejm0f.jpg",
    "kategori": "Alat",
    "nama": "Nota Kontan",
    "varian": "108x155mm"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Nota Kontan",
    "varian": "160x210mm"
  },
  {
    "gambar": "https://d2qjkwm11akmwu.cloudfront.net/products/131027_29-9-2025_17-25-56.webp",
    "kategori": "Kosmetik",
    "nama": "Obat Kutu Peditox",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Odol",
    "nama": "Odol Ciptadent",
    "varian": "225g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRpiHPn_T4W1hFf5O9Lmm1z8vdPk6U1WklBQjSGxdlGWw\u0026s\u003d10",
    "kategori": "Odol",
    "nama": "Odol Ciptadent",
    "varian": "75g"
  },
  {
    "gambar": "https://img.lazcdn.com/g/ff/kf/S89211b15ce36400eb640281398457c1d8.jpg_720x720q80.jpg",
    "kategori": "Odol",
    "nama": "Odol Kodomo",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTaefHrEjlF0ybdOe7r-QZfPz5B7K3bej3YDejwtrJJdg\u0026s\u003d10",
    "kategori": "Baby Care",
    "nama": "Odol paket anak",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/114/MTA-158477937/br-m036969-16557_sasha-toothpaste-antibacterial-150gr_full01-ed6f1b16.jpg",
    "kategori": "Odol",
    "nama": "Odol Sasha",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQjE-fTNGmb7XjjAiGcsoMmIt0Guutshv9tOWA3H0QgqA\u0026s\u003d10",
    "kategori": "Odol",
    "nama": "Odol Sensodyne",
    "varian": "40g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRb40O_f-FfwlKk96J2Tn0fxnrk2vMRvVrTJWajwXHNzg\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "OMG Sunscreen SPF 50",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "One man show",
    "varian": "125ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTv0lkIVsmOpJneEKRqemKij1UUUQ_NtRG1QfYsQoirBA\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "One man show",
    "varian": "30ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Ovale",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Ovale",
    "varian": "200ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRF243DtaTFCIXuDICh0XmntIKK9YopssBPiUIUrzjkYg\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Ovale",
    "varian": "60ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Pacar Chandini",
    "varian": "Besar"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/d0cccb7802ae2900e493b5ac3c27f5b0.png_720x720q80.png",
    "kategori": "Kosmetik",
    "nama": "Pacar Chandini",
    "varian": "Kecil"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQZTm0rTp1-eEEERuvkqW8a6zBY_qajIK3UHCoqQfzJBw\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Pacar Henna gollecha",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Pacar Rani",
    "varian": "Besar"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcT-cWNfmKFIgGlTd9QeBxE2r3pi9iY8JMZ_2rSXWVM4mA\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Pacar Rani",
    "varian": "Kecil"
  },
  {
    "gambar": "https://i.ibb.co.com/mV5pmK82/806428.jpg",
    "kategori": "Kosmetik",
    "nama": "Pacar Ratu dangdut",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Paket Cussons",
    "varian": "Besar"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTF1v3w-rPFgpc2Ay95wtH4LDtOftY2NbvvRXctMSRaaw\u0026s\u003d10",
    "kategori": "Baby Care",
    "nama": "Paket Cussons",
    "varian": "Kecil"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Paket Cussons",
    "varian": "Sedang"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/evangeline.jpg",
    "kategori": "Parfum",
    "nama": "Parfum Evangeline 100ml",
    "varian": "EDC Plastik"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Parfum Evangeline 100ml",
    "varian": "EDP Kaca"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRfManPcrP-KQsVQoOvOe3mHlrjt3rgoeNlP7Le4khiew\u0026s",
    "kategori": "Parfum",
    "nama": "Parfum Marina",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQBZ79KZK0usXAHfLV_jQnEiTUzVPa0znHfq7d_7NUcCQ\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Parfum Master",
    "varian": "Splash cologne 150ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Parfum Master",
    "varian": "Spray cologne 100ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRVdMhoJaeXfkKE2-AzKE-iZQliVkiTRmS3w3aEVj982g\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Parfum Spalding",
    "varian": "175ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Parfum Spalding",
    "varian": "50ml"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Payung Saten",
    "varian": "Besar"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSj1ZtCeS4UbzCMUuPjFCkwcQX-OmKjwPsg6_9nWjU8xg\u0026s\u003d10",
    "kategori": "Alat",
    "nama": "Payung Saten",
    "varian": "Kecil"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Payung Saten",
    "varian": "Sedang"
  },
  {
    "gambar": "https://siopen.balangankab.go.id/storage/merchant/products/2024/04/02/4ea287e9c85d83bd7184ec999a746b5c.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Pembersih Kaca Cling",
    "varian": "Botol"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Pembersih Kaca Cling",
    "varian": "Refill"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/6e3f9977271d114d844a33dc729b6e88.jpg_720x720q80.jpg",
    "kategori": "Alat",
    "nama": "Peniti swan",
    "varian": null
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/d88f97c8a735f9bb1ddd6e3ca5bf4172.jpg",
    "kategori": "Kosmetik",
    "nama": "Pensil Alis Implora",
    "varian": "Satuan"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/cc134a0f2e9899eb8daae7d99b45bc23.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Pensil alis Viva asli",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/pentel%20dot.jpg",
    "kategori": "Baby Care",
    "nama": "Pentel Dot bayi",
    "varian": "Cussons"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Pentel Dot bayi",
    "varian": "Huki"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Pentel Dot bayi",
    "varian": "Huki isi 3"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Pentel Dot bayi",
    "varian": "Pigeon"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/e31bc35c929669e31b716154dfc80c3c.jpg",
    "kategori": "Odol",
    "nama": "Pepsodent 75g",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRGDVSEJwFxNq5EMhtrfdOLyswQcSFO5-68NrkOwRJ1NlfF6-aSlOJZvKGp\u0026s\u003d10",
    "kategori": "Odol",
    "nama": "Pepsodent Herbal",
    "varian": "190g"
  },
  {
    "gambar": null,
    "kategori": "Odol",
    "nama": "Pepsodent Herbal",
    "varian": "75g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQFznm7aEalaprBRnUN1IkroK9xdV1G1nk4IRBWD3pfpQ\u0026s\u003d10",
    "kategori": "Odol",
    "nama": "Pepsodent Siwak 110g",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQrO4kAK28iabd_YKGqNHdrXbHn9B6k4NgdLm4G4ywhsIodc6PSkPHhfQHB\u0026s\u003d10",
    "kategori": "Odol",
    "nama": "Pepsodent Whitening",
    "varian": "190g"
  },
  {
    "gambar": null,
    "kategori": "Odol",
    "nama": "Pepsodent Whitening",
    "varian": "75g"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Pierre Cardin",
    "varian": "150g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRX4Tq--EP2kYv4AB-4Dcqo8kHNdYiJqxkBuIKNFi9vqQ\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Pierre Cardin",
    "varian": "30g"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Pisau Cukur Gillette",
    "varian": "Biru"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Pisau Cukur Gillette",
    "varian": "Goal Click"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTiIx7dJzzWe8KfvoNMTAkZBhBuzChkdsrDdUJGgL5EMw\u0026s\u003d10",
    "kategori": "Alat",
    "nama": "Pisau Cukur Gillette",
    "varian": "Kuning"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Pixy Facial Foam",
    "varian": "100g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRl0BhtxnKdD-v0TgiNCoWj4ZI0STvFYWJcRK_Q_sZYXg\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Pixy Facial Foam",
    "varian": "40g"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTIuHnbv0T319WOQoy3Lrb64iRoEoL-txjbDdALxy3Hwg\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Pixy Micellar Water",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcStSwoWWJkXo4dVay9A0aQ0Y8XbZ6-66FLwdyrNt6LdnA\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Pixy Protecting Mist",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTlYVBD37DyBWn-MTW_x4TSzxA_RzjbNhaVpiY5nDPHnA\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Pixy Stick Deodorant",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQha5TVUWtjY-tD0Sgs6Eh_OxOdJW2mgg3i3bmTvLkyRg\u0026s\u003d10",
    "kategori": "Alat",
    "nama": "Plester Kecil",
    "varian": null
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/4f5f7665c764804abdefb0d13463349c.png",
    "kategori": "Kosmetik",
    "nama": "Plossa",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcS25vNIUPd1cJetYav8O7ptMc3cqY4HIzTLcz9lXOOGzQ\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Poise Facial Foam",
    "varian": null
  },
  {
    "gambar": "https://laz-img-sg.alicdn.com/p/fca5242b53fabe0bb1b51014697cd8ca.jpg",
    "kategori": "Kosmetik",
    "nama": "Ponds Age Miracle 10g",
    "varian": "Day"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Ponds Age Miracle 10g",
    "varian": "Night"
  },
  {
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/Sc77c2e79ca1e415289003cf97a3aac388.jpg",
    "kategori": "Kosmetik",
    "nama": "Ponds cream sachet",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Ponds men facial wash",
    "varian": "100ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcT7CbdisEnIX2mwIWkESXhIUwBVrpj7_9qJpEG06lS_ag\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Ponds men facial wash",
    "varian": "50ml"
  },
  {
    "gambar": "https://images.soco.id/b4705191-2297-4c7f-b299-32ef82685b1c-image-0-1733113760283",
    "kategori": "Kosmetik",
    "nama": "Ponds Vitamin micellar water",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Popok Merries L",
    "varian": "Isi 20"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Popok Merries L",
    "varian": "Isi 30"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Popok Merries L",
    "varian": "Isi 44"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQptq6SpBk-544sWRoP898ELfY7WzDZVffMk1MNjFdRIw\u0026s\u003d10",
    "kategori": "Baby Care",
    "nama": "Popok Merries L",
    "varian": "Isi 8"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Popok Merries M",
    "varian": "Isi 22"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Popok Merries M",
    "varian": "Isi 34"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Popok Merries M",
    "varian": "Isi 50"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/97ac393359f9486f175371e03927eebf.jpg_720x720q80.jpg",
    "kategori": "Baby Care",
    "nama": "Popok Merries M",
    "varian": "Isi 9"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQmG4-z7khbrL6pFSQdsNZDndgbATDgCDBxK0swaiMB8w\u0026s\u003d10",
    "kategori": "Baby Care",
    "nama": "Popok Merries S",
    "varian": "Isi 11"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Popok Merries S",
    "varian": "Isi 26"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Popok Merries S",
    "varian": "Isi 40"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Popok Merries XL",
    "varian": "Isi 16"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Popok Merries XL",
    "varian": "Isi 26"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Popok Merries XL",
    "varian": "Isi 38"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQNGXf5caG92_Id8PszEXmcouxTPkHqbOWDDWv1vmzD5A\u0026s\u003d10",
    "kategori": "Baby Care",
    "nama": "Popok Merries XL",
    "varian": "Isi 7"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTffsHaJMS6d8H3s9ehtTmvm619e6TiN3EzeglpcpftvA\u0026s\u003d10",
    "kategori": "Deodorant",
    "nama": "Posh roll on",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQT19aPNCNFDG6wA7RHZDAzvHs0R2iKkXKiF1mLMpfohg\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Posh Spray 150ml",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Puccelle Eau De Luxe",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Puccelle Eau De Luxe",
    "varian": "100ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRFbuBQY-29DoCMri5Ec1ItUyQR82M8ZeIllRhyJ4NFqQ\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Puccelle Eau De Luxe",
    "varian": "50ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRNdYTNuP2zsYB0z34mfQjjyoYGGCRZ6W0U0a1ADown_Q\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Puccelle Eau De Luxe Body Spray",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Puccelle Mist Cologne",
    "varian": "150ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQ_rHFmNP_if73JOaTGG6RPajBmMg1XgoTvatfF03wYMg\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Puccelle Mist Cologne",
    "varian": "75ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRloClpCxQxPPpcqtLN8V8jydLzzJ_nDgXUlwKxPNtU9g\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Puccelle Splash Cologne 175ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQI0k7yss4mhNM6qgk1SOdRVqxQsoco-anGK0gdUsReJg\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Puteri body splash",
    "varian": "135ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Puteri body splash",
    "varian": "245ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQuJO4zM-z8eFFxMrPf1PdCYou8Ofsemh5p63_wTCEI7w\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Puteri body spray 100ml",
    "varian": null
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/ebdff4e5632c91fd6435430f318e4b01.jpg",
    "kategori": "Kosmetik",
    "nama": "Putih Salju",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/rapika.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Rapika",
    "varian": "Botol"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Rapika",
    "varian": "Refill"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQibuRLAJNJE0xzB0wrsDr-yAeThHFJvnLgiVmbyK-d-Q\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "RDL Baby Face 150ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTBaIs5GOnMJ3vXyB49WtQdQZdJ6VoOUf6Wv6HgLxg62A\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Red-A Compact powder",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQ4kX5AoTTESf8okStX3eO4RQ-X3eN2pp8V3SVLatqvhg\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Refill Biore",
    "varian": "250ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Refill Biore",
    "varian": "450ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTv3MVZ-fsC0MOD2P0HELc2LpSM8SMvJxMRb5e4Vfxeug\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Refill Citra",
    "varian": "250ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Refill Citra",
    "varian": "400ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRPrz0B7gBv8nyLh6Sqw-o4GRC6IF-UdeB5b6Q_RYulbA\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Refill Dettol",
    "varian": "200ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Refill Dettol",
    "varian": "410ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSUltnFs2FYF1BDztK08h618eFxM7BvlWpJggw2a4CMOg\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Refill Giv",
    "varian": "250ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Refill Giv",
    "varian": "400ml"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/refill%20hit.jpg",
    "kategori": "Obat Nyamuk",
    "nama": "Refill Hit",
    "varian": "Liquid"
  },
  {
    "gambar": null,
    "kategori": "Obat Nyamuk",
    "nama": "Refill Hit",
    "varian": "Mat 18+9"
  },
  {
    "gambar": null,
    "kategori": "Obat Nyamuk",
    "nama": "Refill Hit",
    "varian": "Mat 48+6"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSAxzMERqQ1r-CozqSU1nWMSanFfAxsH8TIFkd7A63s8w\u0026s\u003d10",
    "kategori": "Alat Kebersihan",
    "nama": "Refill Kispray",
    "varian": "Gold"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Refill Kispray",
    "varian": "Violet"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTEWNTsOs28FjefDtDx5kUtQjG5iCRNH_PqGtpdukbz2w\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Refill Leivy",
    "varian": "250ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Refill Leivy",
    "varian": "450ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Refill Leivy",
    "varian": "900ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRfwmXKnVpFXTxATyWYaE4EtVw2Uq30p02ur_NLoRhzgg\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Refill Lifebuoy",
    "varian": "250ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Refill Lifebuoy",
    "varian": "400ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSbw4uTh_9Ihe_XtUHAmRd46YL8-HmyI02w7b9i7epwNw\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Refill Lux",
    "varian": "250ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Refill Lux",
    "varian": "450ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRbM9J1P9W2uY63f62xe-FBzikPohOfoFMsqV3NR-bunA\u0026s\u003d10",
    "kategori": "Alat Kebersihan",
    "nama": "Refill Molto Pewangi 780ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRZQ0H92DGOBlDOiJvNVz6VpSi_hg6QTx0PRFPQq4A2Hw\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Refill Nuvo",
    "varian": "250ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Refill Nuvo",
    "varian": "400ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRE-8AD-vq6dmb2DWE2lupnK1ClYnkqjIu_vvj1m1sGYg\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Refill Nuvo / Giv mini",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Refill Shinzui",
    "varian": "180ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Refill Shinzui",
    "varian": "400ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRElmte5bD8Ey_EZ4nTckV-3TFaVr-qPcexIXdc-Nk2wA\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Refill Shinzui",
    "varian": "85ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/ff/kf/S17722ad60e724fcdad914f593588b2b1q.jpg_720x720q80.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Refill Sleek 450ml",
    "varian": null
  },
  {
    "gambar": "https://static-tokodaring.tisera.id/prod/images/produk_gambar/688d806f7d18e.jpeg",
    "kategori": "Alat Kebersihan",
    "nama": "Refill So klin lantai",
    "varian": "345ml"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Refill So klin lantai",
    "varian": "780ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRRuNiZecI1tO25kjn9rCf0yI6pHmLK5aR3cdvaNjmtuw\u0026s\u003d10",
    "kategori": "Alat Kebersihan",
    "nama": "Refill So klin pewangi 800ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSNu3PDgSSJvRMZJDRuCJJvpFh1nPpJlNFC1On8HPlqGA\u0026s\u003d10",
    "kategori": "Alat Kebersihan",
    "nama": "Refill Stella Matic",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQQAG09C34PpRApbdF8_Wo22dIqYLEwf_IfSlsLwJJJEg\u0026s\u003d10",
    "kategori": "Alat Kebersihan",
    "nama": "Refill Vanish 150ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQmrjVPBhJZnxBC0-VGCFT21RdFaYulRkDeEbVoCHOAgg\u0026s\u003d10",
    "kategori": "Obat Nyamuk",
    "nama": "Refill Vape Liquid 45 malam",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSqssf-mqwM_qwPKjcVTwc_dmZ4P6HBsXLRoELbMuzTLgVNBJJyKtAi6hof\u0026s\u003d10",
    "kategori": "Alat Kebersihan",
    "nama": "Refill Wipol",
    "varian": "200ml"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Refill Wipol",
    "varian": "410ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Refill Zen",
    "varian": "400ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRmaR4DgXatQUeuzyG4oq5qcjzx-2rYt78LuUye4gX7cQ\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Refill Zen",
    "varian": "85ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQnjqNKzwGEofo4NtLRFcYuwSfyc15Yz3WzeUeYNItWYA\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Refill Zwitsal hair\u0026body 400ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcS1_fFvPqczupe7mY8ftbJEbYuSYRt8NxtkPth1iHDneQ\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Regazza body spray 100ml",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Regazza femme EDT",
    "varian": "100ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQXpVSCn1Q6FQH7lVC2TSrS9NY4fUMCDr3FF4Hf6jgoEQ\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Regazza femme EDT",
    "varian": "50ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQuJcJ7kMbyN6jfcCEL2TWMfn7WRdPmVykM4DQomus0Yw\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Regazza Femme spray cologne sport 100ml",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Deodorant",
    "nama": "Rexona",
    "varian": "Matahari"
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/a29fe7bb5020bf96254fa3cf9f5c025a.jpg",
    "kategori": "Deodorant",
    "nama": "Rexona",
    "varian": "Roll on"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/5c3fc737194d29c0e3aece1188de4d90.jpg",
    "kategori": "Deodorant",
    "nama": "Rexona sachet",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sabun%20batang%20dws.jpg",
    "kategori": "Sabun",
    "nama": "Sabun batang",
    "varian": "Citra"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun batang",
    "varian": "Giv"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun batang",
    "varian": "Leivy"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun batang",
    "varian": "Lifebuoy"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun batang",
    "varian": "Nuvo"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun batang",
    "varian": "Shinzui"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun batang",
    "varian": "Temulawak"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun batang",
    "varian": "Thai"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sabun%20batang%20bayi.jpg",
    "kategori": "Baby Care",
    "nama": "Sabun batang Bayi",
    "varian": "Cussons"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Sabun batang Bayi",
    "varian": "My baby"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Sabun batang Bayi",
    "varian": "Zwitsal"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSWUJQyvZJ4f2pPaWRjV3_foZLT4dzodWMKyEfviI8low\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Sabun Biore Botol",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun Biore Botol",
    "varian": "250ml"
  },
  {
    "gambar": "https://cf.shopee.co.id/file/2c8596a36882a699b63ccfc96b03392f",
    "kategori": "Sabun",
    "nama": "Sabun Dr.Pure",
    "varian": null
  },
  {
    "gambar": "https://cf.shopee.co.id/file/c094a362f15e84887f6750ea5915225f",
    "kategori": "Sabun",
    "nama": "Sabun Fair lovely",
    "varian": "100g"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun Fair lovely",
    "varian": "50g"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mdpkozlej1xr2c",
    "kategori": "Sabun",
    "nama": "Sabun Garnier",
    "varian": "100g"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun Garnier",
    "varian": "50g"
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-4119296/garnier_garnier_sakura_foam_pembersih_wajah_-9_ml_-_sachet-_full02_933258ea.jpg",
    "kategori": "Sabun",
    "nama": "Sabun Garnier Sachet",
    "varian": "Sakura UV"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun Garnier Sachet",
    "varian": "Vitamin C"
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//103/MTA-9489613/bee_brand_sabun_tawon_original_import_china_bee_-_flower_brand_besar_125_gr_aroma_cendana_-_lifebuoy_-_cuci_muka_-_murah_full02_i1jt2qj0.jpg",
    "kategori": "Sabun",
    "nama": "Sabun IRT Tawon",
    "varian": "Asli"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun IRT Tawon",
    "varian": "Biasa"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/bb64a675ec89cef16f3dc2f6e8b4a53b.jpg",
    "kategori": "Sabun",
    "nama": "Sabun kodomo 200ml",
    "varian": null
  },
  {
    "gambar": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/c829a189b84f473684df628df88a2c00~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr\u003d15584\u0026t\u003d555f072d\u0026ps\u003d933b5bde\u0026shp\u003d6ce186a1\u0026shcp\u003de1be8f53\u0026idc\u003dmy2\u0026from\u003d1826719393",
    "kategori": "Sabun",
    "nama": "Sabun Kojie San 65g",
    "varian": null
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/3481bf9b0d022fa0a562774d6a607794.jpg",
    "kategori": "Sabun",
    "nama": "Sabun Leivy botol",
    "varian": "250ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun Leivy botol",
    "varian": "500ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun Lifebuoy botol",
    "varian": "100ml"
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/91/MTA-165531005/lifebuoy_lifebuoy-body-wash-botol-sabun-mandi-cair-100-ml_full02.jpg",
    "kategori": "Sabun",
    "nama": "Sabun Lifebuoy botol",
    "varian": "250ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun Lifebuoy botol",
    "varian": "500ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rbk4-m8vxbwa86tjha9",
    "kategori": "Sabun",
    "nama": "Sabun Metal Fortis",
    "varian": "Cucumber"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun Metal Fortis",
    "varian": "Pepaya"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQXTcvaRENbM6kWZGaO0RPLBCT3HzkxnPPHN89hxmsWRA\u0026s\u003d10",
    "kategori": "Baby Care",
    "nama": "Sabun Mitu 2in1 Botol",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun Muka Acnes",
    "varian": "100ml"
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/c179ecc2cd2e5523204027274e6d57ae.jpg",
    "kategori": "Sabun",
    "nama": "Sabun Muka Acnes",
    "varian": "50ml"
  },
  {
    "gambar": "https://sg-test-11.slatic.net/p/aa4548d93e8b03c6375a9505b84017c6.jpg",
    "kategori": "Sabun",
    "nama": "Sabun muka Biore Men",
    "varian": "100g"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun muka Biore Men",
    "varian": "40g"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/4a6519a91bb886b6271a899337a3110d.png_720x720q80.png",
    "kategori": "Sabun",
    "nama": "Sabun muka biore Women",
    "varian": "100g"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun muka biore Women",
    "varian": "40g"
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/15eaddb839709642b8832d69fb255c3a.jpg",
    "kategori": "Sabun",
    "nama": "Sabun muka citra",
    "varian": null
  },
  {
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S4c4ea945e53d40f6a989c628d49341c24.jpg",
    "kategori": "Sabun",
    "nama": "Sabun muka Garnier Anti acne",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun muka Garnier Anti acne",
    "varian": "50ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun muka Garnier Men",
    "varian": "100ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/947bf4b1b79e752b06199ca8b259f170.png_720x720q80.png",
    "kategori": "Sabun",
    "nama": "Sabun muka Garnier Men",
    "varian": "50ml"
  },
  {
    "gambar": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/8/19/5d591859-5449-4d5f-a3b8-94a920b8c471.png",
    "kategori": "Sabun",
    "nama": "Sabun Muka Gatsby 100g",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/94/MTA-161200766/kahf_kahf_face_wash_100ml_4_varian_sabun_wajah_pria_full00_6243A57F-C0F7-4198-9F67-E52F5EC828A9.jpg",
    "kategori": "Sabun",
    "nama": "Sabun muka Kahf",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun muka Kahf",
    "varian": "50ml"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/6e11e6e4d004764c0fa16a731b1bf79b.jpg",
    "kategori": "Sabun",
    "nama": "Sabun muka Nivea Men",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun muka Nivea Men",
    "varian": "50ml"
  },
  {
    "gambar": "https://img.id.my-best.com/product_images/1f3124104e381bd08a4637bb5b718517.jpeg?ixlib\u003drails-4.3.1\u0026q\u003d70\u0026lossless\u003d0\u0026w\u003d800\u0026h\u003d800\u0026fit\u003dclip\u0026s\u003d2449b1c8292cd92d6daeca8757677d4b",
    "kategori": "Sabun",
    "nama": "Sabun muka Nivea Women",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun muka Nivea Women",
    "varian": "50ml"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/de4e1e9a19ac7ba86fb89e0b4569bd4a.jpg",
    "kategori": "Sabun",
    "nama": "Sabun Nuvo Botol 250ml",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/pepaya.jpg",
    "kategori": "Sabun",
    "nama": "Sabun Pepaya",
    "varian": "Besar"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun Pepaya",
    "varian": "Kecil"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun Pepaya",
    "varian": "RDL"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/89c6068b0da7c664f3bb5be01fd8b43d.jpg",
    "kategori": "Kosmetik",
    "nama": "Sabun pepaya Dolphin 250ml",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcReaOH5VSyu-qsm389lYka2-wa2Fc2NbWL420Ib1e38Bw\u0026s\u003d10",
    "kategori": "Sabun",
    "nama": "Sabun Ponds 100ml",
    "varian": "Age Miracle"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun Ponds 100ml",
    "varian": "Hitam"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun Ponds 100ml",
    "varian": "Niasorcinol"
  },
  {
    "gambar": "https://img.lazcdn.com/g/ff/kf/S014f0c8f0e1848c58d66d701f3843099v.jpg_360x360q80.jpg",
    "kategori": "Sabun",
    "nama": "Sabun Ponds 50ml",
    "varian": "Hitam"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Sabun Ponds 50ml",
    "varian": "Niasorcinol"
  },
  {
    "gambar": "https://cf.shopee.co.id/file/id-11134207-8224s-mhzt9u71m51c80",
    "kategori": "Sabun",
    "nama": "Sabun Serai Al Hikmah",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-81ztc-megx7u75kr9c19",
    "kategori": "Sabun",
    "nama": "Sabun Shinzui botol 225ml",
    "varian": null
  },
  {
    "gambar": "https://d2qjkwm11akmwu.cloudfront.net/products/404119_5-8-2021_15-22-44-1665782378.webp",
    "kategori": "Kosmetik",
    "nama": "SafeCare",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTO8_-emiuVsW5WfxIFKQ83HLP3ucdZyQnPsq9NrDxVuoZQHRq9OlHFT1L6\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Sariayu facial foam",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/c298342d8995acab535576034ce0dfaa.jpg_720x720q80.jpg_.webp",
    "kategori": "Kosmetik",
    "nama": "Sariayu Foundation",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Scarlett",
    "varian": "Cream Day"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Scarlett",
    "varian": "Cream Night"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Scarlett",
    "varian": "Facial foam"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/7703a9895adfab32f09ae3a582c02d75.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Scarlett",
    "varian": "Handbody"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Scarlett",
    "varian": "Toner"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/semir.jpg",
    "kategori": "Kosmetik",
    "nama": "Semir",
    "varian": "Bigen"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Semir",
    "varian": "Garnier"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Semir",
    "varian": "Hi top"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Semir",
    "varian": "Miranda"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Semir",
    "varian": "NYU"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Semir",
    "varian": "Tancho Bubuk"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Semir",
    "varian": "Tancho Cair"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Semir",
    "varian": "Top Lady"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/serum.jpg",
    "kategori": "Kosmetik",
    "nama": "Serum",
    "varian": "Garnier sachet 7.5ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Serum",
    "varian": "Hanasui"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Serum",
    "varian": "Implora"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSCUOHCQc5hgwi3qjF6-S4iEkrp3zNjyB0mlN04ZDZHQQ\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Shadow Implora",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lr7odb1syv5yf0",
    "kategori": "Shampoo",
    "nama": "Shampoo Clear",
    "varian": "160ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Clear",
    "varian": "300ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Clear",
    "varian": "70ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-8224v-mgbnr8r1t91lef",
    "kategori": "Kosmetik",
    "nama": "Shampoo Cultusia",
    "varian": "Botol"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Shampoo Cultusia",
    "varian": "Sachet"
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/cb7cdbabba7831cb30dcded114d8ec8c.png",
    "kategori": "Shampoo",
    "nama": "Shampoo Cussons",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Cussons",
    "varian": "50ml"
  },
  {
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S3b50d1a9a0284395ad4f7ca7261be529x.jpg",
    "kategori": "Shampoo",
    "nama": "Shampoo Emeron 160ml",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/544e61386952f2566e3116c782ca4389.jpg_720x720q80.jpg",
    "kategori": "Shampoo",
    "nama": "Shampoo Head\u0026Shoulders",
    "varian": "160ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Head\u0026Shoulders",
    "varian": "300ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Head\u0026Shoulders",
    "varian": "70ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcSvdgx5TiuqSvR5nPmHIuo4UajAZgsFfdYfV54cNXJa2g\u0026s\u003d10",
    "kategori": "Shampoo",
    "nama": "Shampoo Lifebuoy",
    "varian": "170ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Lifebuoy",
    "varian": "340ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Lifebuoy",
    "varian": "70ml"
  },
  {
    "gambar": "https://images.tokopedia.net/img/cache/500-square/product-1/2020/7/9/5738657/5738657_9397aeac-5604-4b92-924c-8aaafc8de4e7_1079_1079.jpg",
    "kategori": "Shampoo",
    "nama": "Shampoo Metal",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Metal",
    "varian": "200ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Natur",
    "varian": "140ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lqw08uma3uq197",
    "kategori": "Shampoo",
    "nama": "Shampoo Natur",
    "varian": "80ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/cb5f498aebd4a7893f5ca543bc2c3174.jpg_720x720q80.jpg",
    "kategori": "Shampoo",
    "nama": "Shampoo Pantene",
    "varian": "160ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Pantene",
    "varian": "70ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Rejoice",
    "varian": "150ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRwQzNdMimCAoUQTv_RPIxi32maMkpoERgbKnuzakjkdg\u0026s\u003d10",
    "kategori": "Shampoo",
    "nama": "Shampoo Rejoice",
    "varian": "70ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Sachet",
    "varian": "11rb"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/6592cbdbcf1629c6078362e32ae1a31a.png_720x720q80.png",
    "kategori": "Shampoo",
    "nama": "Shampoo Sachet",
    "varian": "6rb"
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/76c1db9c69ac8d11610b3b8a93784ba8.jpg",
    "kategori": "Shampoo",
    "nama": "Shampoo Sachet isi 3",
    "varian": "Head \u0026 Shoulders"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Sachet isi 3",
    "varian": "Pantene"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/d38f3b004b174a5c4344e8fc4148d7da.jpg_960x960q80.jpg_.webp",
    "kategori": "Shampoo",
    "nama": "Shampoo Sunsilk",
    "varian": "160ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Sunsilk",
    "varian": "320ml"
  },
  {
    "gambar": null,
    "kategori": "Shampoo",
    "nama": "Shampoo Sunsilk",
    "varian": "70ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcT3TWLo_57gGzceuwI4jr17oG_9yyJYXEPtBfuHHYMAOg\u0026s\u003d10",
    "kategori": "Shampoo",
    "nama": "Shampoo Zinc",
    "varian": "160ml"
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//89/MTA-56192110/no-brand_sikat-cupid-botol-susu-reliable-putar_full01.jpg",
    "kategori": "Baby Care",
    "nama": "Sikat Dot Reliable",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/96/MTA-180831812/ciptadent_sikat-gigi-ciptadent-crystal-clean_full01.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Sikat gigi Ciptadent",
    "varian": "1 kotak"
  },
  {
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S366c6fde471845bcb573ee83490f4a73Y.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Sikat gigi Formula Diamond",
    "varian": "1 kotak"
  },
  {
    "gambar": "https://images.squarespace-cdn.com/content/v1/61f0adcd7140a649c016b88a/1690444282167-9I7EF2QTU5Y0K62CV3TY/Banner+SGF_New_Extreme+Clean+3S+.jpg?format\u003d1000w",
    "kategori": "Alat Kebersihan",
    "nama": "Sikat Gigi Formula Lembut",
    "varian": "Isi 3"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Sikat Gigi Formula Lembut",
    "varian": "Satuan"
  },
  {
    "gambar": "https://arti-assets.sgp1.cdn.digitaloceanspaces.com/renyswalayanku/products/7a511498-84a0-41a4-9000-60f8e68ee4d4.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Sikat gigi kodomo",
    "varian": "1 kotak"
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/22014f916bb2298865af226d3b93c8f5.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Sikat gigi systema isi 3",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/bfe0578afffd142932ac3c056e9e7789.jpg_960x960q80.jpg_.webp",
    "kategori": "Alat Kebersihan",
    "nama": "Sikat Kawat cap kodok",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/52b6ecb4c0c05345327fea3663b4ca7f.jpg_720x720q80.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Sikat kayu",
    "varian": "1 Lusin"
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/9343ed609a6453e3989674d5dc2e8490.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Sikat plastik",
    "varian": "1 Lusin"
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//100/MTA-36936702/oem_oem_full01.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Sikat plastik Gagang",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/silet.jpg",
    "kategori": "Alat",
    "nama": "Silet",
    "varian": "Goal"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Silet",
    "varian": "London"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Silet",
    "varian": "Tatra"
  },
  {
    "gambar": "https://media.karousell.com/media/photos/products/2023/5/26/sisir_fancy_karakter__sisir_ga_1685114727_ccb6d2a0_progressive.jpg",
    "kategori": "Alat",
    "nama": "Sisir Karakter",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sisir%20kutu.jpg",
    "kategori": "Alat",
    "nama": "Sisir kutu",
    "varian": "Besi"
  },
  {
    "gambar": null,
    "kategori": "Alat",
    "nama": "Sisir kutu",
    "varian": "Kayu"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/09f9a60765ce86177280662c12b1ef07.jpg_720x720q80.jpg",
    "kategori": "Alat",
    "nama": "Sisir Plastik Coklat",
    "varian": "Kecil"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "So klin lantai botol",
    "varian": "450ml"
  },
  {
    "gambar": "https://img.mbizmarket.co.id/products/thumbs/800x800/2023/03/07/084d60d7a987d097525b004a013ab30e.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "So klin lantai botol",
    "varian": "900ml"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "So Klin Pemutih",
    "varian": "1 Liter"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/f57dcce3d8f170496e7184d58f8f34bf.jpg_720x720q80.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "So Klin Pemutih",
    "varian": "220ml"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "So Klin Pemutih",
    "varian": "500ml"
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/d1a81afd85321c9b5f8dad6e59cd4afc.jpg",
    "kategori": "Obat Nyamuk",
    "nama": "Soffell lotion nyamuk",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134211-7ra0o-mbnbldy3poif38",
    "kategori": "Kosmetik",
    "nama": "Softex Laurier",
    "varian": "Isi 20"
  },
  {
    "gambar": "https://img.lazcdn.com/g/ff/kf/S743b42a8c9fc4ae0b63762f18b83e2c59.jpg_960x960q80.jpg_.webp",
    "kategori": "Kosmetik",
    "nama": "Softex Laurier",
    "varian": "Isi 8"
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-14088329/laurier_laurier_active_day_x-tra_maxi_wing_30-s_full03_ervraa78.jpeg",
    "kategori": "Kosmetik",
    "nama": "Softex Laurier Wing",
    "varian": "Isi 20"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Softex Laurier Wing",
    "varian": "Isi 8"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/71ab9e9f062f4fca35eb2db991021288.jpg_720x720q80.jpg",
    "kategori": "Alat",
    "nama": "Spidol Permanen",
    "varian": null
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/8099dc699abee9b59d0b4183b201b52d.png",
    "kategori": "Kosmetik",
    "nama": "Spons Candy",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcT4J8CWkhPj4hTSsC8ifgHXfUW232JMvMQyFTm8jZRSNunvhI0RRAj_FCit\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Spons fanbo",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/spons%20mandi.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Spons mandi",
    "varian": "20g"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Spons mandi",
    "varian": "30g"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Spons mandi",
    "varian": "Dahlia"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7qul0-lism6xqfy7x23c",
    "kategori": "Alat Kebersihan",
    "nama": "Spons piring Jaring",
    "varian": null
  },
  {
    "gambar": "https://cf.shopee.co.id/file/67609a89cb48575682279214b1cca731",
    "kategori": "Kosmetik",
    "nama": "Spons x-pert",
    "varian": null
  },
  {
    "gambar": "https://siopen.balangankab.go.id/storage/merchant/products/2024/04/24/5fad1c60f85a0383a18c72f750cdba65.jpg",
    "kategori": "Alat",
    "nama": "Staples",
    "varian": "Kecil"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/stella.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Stella gantung",
    "varian": "All in One"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Stella gantung",
    "varian": "Bathroom"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Stella gantung",
    "varian": "Lemari"
  },
  {
    "gambar": "https://static-tokodaring.tisera.id/prod/images/produk_gambar/687f1bbd9a897.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Stella Kaleng",
    "varian": "200ml"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Stella Kaleng",
    "varian": "400ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Sumber Ayu",
    "varian": "200ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcQa84njxBKyzp5ipbq0L0xJQrnsESj1DLEpKEIyu4k_ew\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Sumber Ayu",
    "varian": "50ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Sumber Ayu",
    "varian": "90ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Sumber Ayu",
    "varian": "Kotak 50ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/267152f90842c75047161c749f6b6bcf.jpg_960x960q80.jpg_.webp",
    "kategori": "Kosmetik",
    "nama": "Sun Screen Hanasui",
    "varian": "SPF 30"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Sun Screen Hanasui",
    "varian": "SPF 50"
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//88/MTA-70305242/implora_implora_-_perfect_shield_sunscreen_spf_40_pa----_-_sunscreen_implora_full07_l317bi3q.jpg",
    "kategori": "Kosmetik",
    "nama": "Suncreen Implora",
    "varian": "SPF 40"
  },
  {
    "gambar": "https://encrypted-tbn1.gstatic.com/shopping?q\u003dtbn:ANd9GcT-tueiqU_ZKBiKBNFXvPoMOwF2_jXuKHDUPeXZQd1QDBVwu0mCkzlDcYC3os2Ul9-3MtoULLadLHl8igPjwgvOxkgJdZkUp2sOmva08h82\u0026usqp\u003dCAc",
    "kategori": "Alat Kebersihan",
    "nama": "Sunlight",
    "varian": "210ml"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Sunlight",
    "varian": "420ml"
  },
  {
    "gambar": "https://p16-lemon8-sign-sg.tiktokcdn.com/tos-alisg-v-a3e477-sg/3e02f9968b254750a868dd30909874a2~tplv-sdweummd6v-text-logo-v1:QG5pZGEuaGFuaWZhaA\u003d\u003d:q75.jpeg?lk3s\u003dc7f08e79\u0026source\u003dlemon8_seo\u0026x-expires\u003d1771351200\u0026x-signature\u003d8t5o4mDpHDMIm9RUcZJe2Nk1IbY%3D",
    "kategori": "Kosmetik",
    "nama": "Sunscreen Azarine 40ml",
    "varian": "SPF 35"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Sunscreen Azarine 40ml",
    "varian": "SPF 50"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lwi95qrj1926c4",
    "kategori": "Kosmetik",
    "nama": "Sunscreen Azarine SPF 45",
    "varian": "30ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Sunscreen Azarine SPF 45",
    "varian": "50ml"
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/109/MTA-94893309/_brd-20220_madame-gie-madame-protect-me-sunscreen-spf-30-pa-60ml_full01.jpg",
    "kategori": "Kosmetik",
    "nama": "Sunscreen Madame Gie",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0t-mdiqdi3kbfdb04",
    "kategori": "Kosmetik",
    "nama": "Sunscreen OMG SPF 50",
    "varian": null
  },
  {
    "gambar": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/4775ee4a3e8e436f83fd7d9b6e217a20~tplv-aphluv4xwc-resize-webp:800:800.webp?dr\u003d15584\u0026t\u003d555f072d\u0026ps\u003d933b5bde\u0026shp\u003d6ce186a1\u0026shcp\u003de1be8f53\u0026idc\u003dmy\u0026from\u003d1826719393",
    "kategori": "Kosmetik",
    "nama": "Sunscreen Wardah SPF 35",
    "varian": "Acne Calm"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Sunscreen Wardah SPF 35",
    "varian": "Vit.C"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTuWE8JNkWxnyt7eceK6DlULmGLiaJX9cq3y5NFSeW33QtsYaPOPbsy_SDO\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Sunscreen Wardah SPF 50",
    "varian": "Acne Calming 40ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Sunscreen Wardah SPF 50",
    "varian": "Airy Smooth 25ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Sunscreen Wardah SPF 50",
    "varian": "Aqua Fresh 30ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Sunscreen Wardah SPF 50",
    "varian": "UV Sport"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcR5WRsUTznlJcGmsJDx1aHBTkJ305HMaXA30rfBFDdIf6a3ebci9Z6wsnFQ\u0026s\u003d10",
    "kategori": "Parfum",
    "nama": "Tabac kaleng 200ml",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m18d06eurt8ve7",
    "kategori": "Baby Care",
    "nama": "Telon Lang",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Telon Lang",
    "varian": "15ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Telon Lang",
    "varian": "30ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Telon Lang",
    "varian": "60ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Telon My baby",
    "varian": "150ml"
  },
  {
    "gambar": "https://i0.wp.com/rajasusu.com/wp-content/uploads/2019/04/my-baby-145-ml.jpg?fit\u003d300%2C300\u0026ssl\u003d1",
    "kategori": "Baby Care",
    "nama": "Telon My baby",
    "varian": "60ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Telon My baby",
    "varian": "90ml"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/b33deb3e76c43c5ada41774d9bbf1084.jpg",
    "kategori": "Baby Care",
    "nama": "Tempat bedak bayi Anti pecah",
    "varian": null
  },
  {
    "gambar": "https://www.adikbayishop.com/image-product/img1841-1624270227.jpg",
    "kategori": "Baby Care",
    "nama": "Tempat Bedak Bayi Biasa",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasj-m1z5vwuxh9603c",
    "kategori": "Sabun",
    "nama": "Thai",
    "varian": "Body Wash"
  },
  {
    "gambar": null,
    "kategori": "Sabun",
    "nama": "Thai",
    "varian": "Handybody Lotion"
  },
  {
    "gambar": "https://cf.shopee.co.id/file/id-11134207-7rbk7-m7fzhgp2vmx06b",
    "kategori": "Kosmetik",
    "nama": "Timungan",
    "varian": "Besar"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/tisu.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Tisu",
    "varian": "Jolly Kecil"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Tisu",
    "varian": "paseo isi 6"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Tisu Basah Mitu",
    "varian": "Botol"
  },
  {
    "gambar": "https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/57ea1a7fc75446a9b312b640e6ee165c~.jpeg",
    "kategori": "Baby Care",
    "nama": "Tisu Basah Mitu",
    "varian": "Refill Isi 2"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/c509232fc9546dda28cceb70526158b9.jpg",
    "kategori": "Kosmetik",
    "nama": "Toner brightening Mustika Ratu",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Toner Viva",
    "varian": "Milk Bengkoang"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Toner Viva",
    "varian": "Milk Green Tea"
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//113/MTA-27993569/viva_cosmetics_viva_face_tonic_toner_lemon_spirulina_cucumber_astringent_green_tea_bengkuang_original_air_mawar_full01_kt6uue6r.jpg",
    "kategori": "Kosmetik",
    "nama": "Toner Viva",
    "varian": "Tonic/Milk"
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/tull%20jye.jpg",
    "kategori": "Kosmetik",
    "nama": "Tull Jye",
    "varian": "Cream Day+Night"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Tull Jye",
    "varian": "Washing"
  },
  {
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/Sab7298b2938e4aefa3e7cca01f7b70d0p.jpg",
    "kategori": "Kosmetik",
    "nama": "U.B Gingseng",
    "varian": null
  },
  {
    "gambar": "https://id-live-01.slatic.net/p/dcef16adde6ba852822df95f6cf59cb9.jpg",
    "kategori": "Obat Nyamuk",
    "nama": "Vape Semprot",
    "varian": "Besar"
  },
  {
    "gambar": null,
    "kategori": "Obat Nyamuk",
    "nama": "Vape Semprot",
    "varian": "Mini"
  },
  {
    "gambar": "https://image.astronauts.cloud/product-images/2024/10/8999999719418VaselineLotionHealthyBrightUvExtraBrigtheningBodyLotion200ml1_d4091fd8-b972-408f-ac2d-0d449136aef8_900x900.png",
    "kategori": "Kosmetik",
    "nama": "Vaseline B3",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Vaseline B3",
    "varian": "200ml"
  },
  {
    "gambar": "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1660211330_vaseline_repairing_petroleum_jelly_50_ml",
    "kategori": "Kosmetik",
    "nama": "Vaseline Gel 50ml",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134201-7r98r-looxqy9146wg91",
    "kategori": "Kosmetik",
    "nama": "Vaseline soft+glow gluta vitamin 180ml",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/97/MTA-154159053/br-m036969-03437_vaseline-100ml-healthy-bright-hand-body-lotion-spf-24-melembabkan-kulit_full02-ce0c42cb.jpg",
    "kategori": "Kosmetik",
    "nama": "Vaseline SPF",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Vaseline SPF",
    "varian": "200ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rash-m3vtfi838lnkd0",
    "kategori": "Kosmetik",
    "nama": "Veet pencabut bulu 25g",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/vitalis.jpg",
    "kategori": "Parfum",
    "nama": "Vitalis",
    "varian": "Eau De Glamour hijab chic 100ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Vitalis",
    "varian": "Eau de Joie"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Vitalis",
    "varian": "eu de naturel kaca 100ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Vitalis",
    "varian": "exotic body scent 100ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Vitalis",
    "varian": "Sparkle EDT 100ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lv92ks0hrh9oc7",
    "kategori": "Parfum",
    "nama": "Vitalis body scent",
    "varian": "120ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Vitalis body scent",
    "varian": "60ml"
  },
  {
    "gambar": "https://laz-img-sg.alicdn.com/p/c11e65e42767de0e7a67f162779881f4.jpg",
    "kategori": "Parfum",
    "nama": "Vitalis EDT",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Vitalis EDT",
    "varian": "50ml"
  },
  {
    "gambar": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/19/31794097-53dc-4069-af6f-bd26b00a2eab.jpg",
    "kategori": "Kosmetik",
    "nama": "Viva Compact Powder",
    "varian": null
  },
  {
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S21f130a8b8c843879fbe15eb8ec46a05a.jpg",
    "kategori": "Kosmetik",
    "nama": "Viva eye liner Matic",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//103/MTA-22644688/viva_cosmetics_viva_hand_-_body_lotion_bengkuang_550_ml_full01_cffir8w5.jpg",
    "kategori": "Kosmetik",
    "nama": "Viva Handbody 550ml",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/1ac3afd6e83f931d43daab2f71228292.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Viva Liquid",
    "varian": "Foundation"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Viva Liquid",
    "varian": "Pelembab"
  },
  {
    "gambar": "https://akcdn.detik.net.id/visual/2021/10/27/foto-bedak-sachet-viva-cuma-seribuan-murah-tapi-nggak-murahan-ini-deretan-manfaatnya-untuk-kecantikanviva-cosmetics_11.png?w\u003d480\u0026q\u003d90",
    "kategori": "Kosmetik",
    "nama": "Viva Sachet",
    "varian": null
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/498325fcee5caf603d1ab7fb84c1cda7.jpg",
    "kategori": "Kosmetik",
    "nama": "Viva Skin food 30g",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/116/MTA-158769548/brd-03895_vivelle-deodorant-body-spray-150ml-parfum_full01-2b668dd7.jpg",
    "kategori": "Parfum",
    "nama": "Vivelle Body Spray 150ml",
    "varian": null
  },
  {
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/vivel.jpg",
    "kategori": "Parfum",
    "nama": "Vivelle EDT",
    "varian": "Glass 100ml"
  },
  {
    "gambar": null,
    "kategori": "Parfum",
    "nama": "Vivelle EDT",
    "varian": "Scent 100ml"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRsztQQTIXKph8KJpjsLruIZe9TcUadmEPJO8CkSnEbj1kiYdp0lRHysGZa\u0026s\u003d10",
    "kategori": "Alat Kebersihan",
    "nama": "Vixal",
    "varian": "160ml"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Vixal",
    "varian": "470ml"
  },
  {
    "gambar": null,
    "kategori": "Alat Kebersihan",
    "nama": "Vixal",
    "varian": "750ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/ff260a760a37c1553616ef4201145644.png_960x960q80.png_.webp",
    "kategori": "Kosmetik",
    "nama": "Wardah aloe gel multifunction 100ml",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Wardah aloe vera facial wash",
    "varian": "100ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98q-luono0qle8tjdd",
    "kategori": "Kosmetik",
    "nama": "Wardah aloe vera facial wash",
    "varian": "60ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/d537e960398f127c5f9a854e8b43f8f2.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah body mist 100ml",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Wardah C-defense creamy wash",
    "varian": "100ml"
  },
  {
    "gambar": "https://c.alfagift.id/product/1/1_A6794790001131_20240829144254043_base.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah C-defense creamy wash",
    "varian": "60ml"
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/93/MTA-153365330/br-m036969-03522_wardah-c-defense-dd-cream-20ml_full03-55830680.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah C-defense DD cream",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-24500331/wardah_wardah_c_defence_serum_-17_ml-_full02_20058a40.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah C-defense serum 17ml",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rash-m37jonp4cov025",
    "kategori": "Kosmetik",
    "nama": "Wardah colorfit perfect glow cushion 15g",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lr608zoqs89977",
    "kategori": "Kosmetik",
    "nama": "Wardah colorfit Velvet powder foundation 11g",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/ff/kf/S97a4d8168c354731a669af2b359fbfecr.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah Crystal Secret cream 15g",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-60741030/wardah_wardah_crystal_secret_brightening_day_cream_30gr_-white_secret_day_cream_full01_svm41oxh.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah Crystal Secret cream 30g",
    "varian": "Day"
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcRlsWBgOkmMZpLV2ch1fV4H_-WrwVGJZ1zN2ddihaHVSTIWTVWEVmxvS-A\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Wardah Crystal Secret foaming cleanser 100ml",
    "varian": null
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/b5d6f8113b2d8d9f001dab7981ef6fca.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah Crystal Secret serum 20ml",
    "varian": null
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/d895794c9c5aa2f03618c5b76aca62f5.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah exclusive",
    "varian": "Refill"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Wardah exclusive",
    "varian": "Two way cake"
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/9664b12b713039687ef4aca0c69dbaab.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah exclusive creamy foundation 02 12g",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/shop/8f9a7a6b8bbf92576f1af121b0fbe92b.jpeg_960x960q80.jpg_.webp",
    "kategori": "Kosmetik",
    "nama": "Wardah exclusive flawless cover cushion 15g",
    "varian": null
  },
  {
    "gambar": "https://d2jlkn4m127vak.cloudfront.net/medias/articles/medias-2-1689093134.webp",
    "kategori": "Kosmetik",
    "nama": "Wardah Exlusive matte lip cream",
    "varian": null
  },
  {
    "gambar": "https://bimg.akulaku.net/goods/spu/3930679a0f064afcb80ad24096b60f050490.jpg?w\u003d726\u0026q\u003d80\u0026fit\u003d1",
    "kategori": "Kosmetik",
    "nama": "Wardah eye expert",
    "varian": "Expert Mascara"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Wardah eye expert",
    "varian": "Perfectcurl Mascara"
  },
  {
    "gambar": "https://d2jlkn4m127vak.cloudfront.net/medias/products/slides-2-1656144338.webp",
    "kategori": "Kosmetik",
    "nama": "Wardah Eye Expert optimum liner",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/26e48e2fd3517118a184f10a392179b3.png_720x720q80.png",
    "kategori": "Kosmetik",
    "nama": "Wardah Face mist",
    "varian": null
  },
  {
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcS969syjQV3mz_oPyGKseV72DS46IqZW_NTUyv4UFf1aJnFbCft4OaEuBEc\u0026s\u003d10",
    "kategori": "Kosmetik",
    "nama": "Wardah Lightening BB cream SFP 32 15ml",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/42b21af2f8085c48a14c02d9babc0ada.jpg_960x960q80.jpg_.webp",
    "kategori": "Kosmetik",
    "nama": "Wardah Lightening Concealer 6g",
    "varian": null
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/cbb46922c577e334fc15fff1fcfafa31.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah lightening cream 20ml",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/ff/kf/S3016c0e4b5d1482c98510de2d16a9f6dx.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah lightening cream 30ml",
    "varian": null
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/8bb3251f51f37a819f52d9a1cbfe1bc4.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah lightening face toner 125ml",
    "varian": null
  },
  {
    "gambar": "https://favo.id/cdn/shop/products/WARWAJ1011_Wardah-Lightening-Micellar-Gentle-Wash---100-mL.jpg?v\u003d1757321327",
    "kategori": "Kosmetik",
    "nama": "Wardah lightening gentle wash",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Wardah lightening gentle wash",
    "varian": "50ml"
  },
  {
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S10fbfe3f71894d62ac47b6c187082962R.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah lightening matte powder 20g",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7qul9-ljm861unoybz1f",
    "kategori": "Kosmetik",
    "nama": "Wardah Lightening micellar water",
    "varian": null
  },
  {
    "gambar": "https://id-test-11.slatic.net/p/360d0dd24dc2f74e56d3978dd59db193.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah lightening powder foundation",
    "varian": "Kaca"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Wardah lightening powder foundation",
    "varian": "Refill"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Wardah lightening serum ampoule",
    "varian": "30ml"
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/cb51b9ef70ff24749e9ca34101fded64",
    "kategori": "Kosmetik",
    "nama": "Wardah lightening serum ampoule",
    "varian": "8ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/ff/kf/S8751468261324e55b79520270ea61263g.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah luminous",
    "varian": "Refill"
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Wardah luminous",
    "varian": "Two way cake"
  },
  {
    "gambar": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/9/27/c5e28274-df68-40a0-99d0-b565b16a7a6a.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah Luminous Face Powder 30g",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/101/MTA-153145379/br-m036969-03522_wardah-everyday-luminous-liquid-foundation-40ml-alas-bedak-untuk-kulit-berminyak_full02-908b096e.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah Luminous Liquid Foundation 35ml",
    "varian": null
  },
  {
    "gambar": null,
    "kategori": "Kosmetik",
    "nama": "Wardah perfect bright C.Foam",
    "varian": "100ml"
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/6394fa82c7ded22c521172b7c692e4e0.jpg_960x960q80.jpg_.webp",
    "kategori": "Kosmetik",
    "nama": "Wardah perfect bright C.Foam",
    "varian": "50ml"
  },
  {
    "gambar": "https://favo.id/cdn/shop/products/WARWAJ1020_Wardah-Perfect-Bright-Moisturizer-SPF-28---20-mL-new-packaging_4625c5cd-35dc-428f-8b48-51ba50a1eab3.jpg?v\u003d1757321323",
    "kategori": "Kosmetik",
    "nama": "Wardah Perfect Bright Cream",
    "varian": "Oil Control"
  },
  {
    "gambar": "https://images.soco.id/98468dab-475c-4224-bb4a-c7cd2bf9ece9-image-2-1724210730859",
    "kategori": "Kosmetik",
    "nama": "Wardah Perfect Bright micellar water 100ml",
    "varian": null
  },
  {
    "gambar": "https://cf.shopee.co.id/file/sg-11134201-22120-kspkrwnqxtkva4",
    "kategori": "Kosmetik",
    "nama": "Wardah renew you cream 15g",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/6852f48d654e987395af0e2ad5c11268.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah renew you cream 30g",
    "varian": null
  },
  {
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rase-m1c2qpepimclad",
    "kategori": "Kosmetik",
    "nama": "Wardah renew you facial wash 100ml",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/ad19b1f61adb5270f3aa364d63ea3834.jpg_720x720q80.jpg",
    "kategori": "Kosmetik",
    "nama": "Wardah renew you intensive serum 15ml",
    "varian": null
  },
  {
    "gambar": "https://media.monotaro.id/mid01/big/Alat%20%26%20Kebutuhan%20Kebersihan/Pembersih%20Lantai/Pembersih%20Serbaguna/Wipol%20Karbol%20Cemara/Wipol%20Karbol%20Cemara%20Bottle%20450ml%201pc/3jS031990127-2.jpg",
    "kategori": "Alat Kebersihan",
    "nama": "Wipol botol 450ml",
    "varian": null
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//95/MTA-79351232/zwitsal_perawatan_bayi_-_zwitsal_baby_bath_minyak_telon_full31_ht59infg.jpg",
    "kategori": "Baby Care",
    "nama": "Zwitsal 2in1",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Zwitsal 2in1",
    "varian": "200ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Zwitsal 2in1",
    "varian": "300ml"
  },
  {
    "gambar": "https://ik.imagekit.io/dcjlghyytp1/660d1d010d771d6e0ec0f2b2e4fb0793?tr\u003df-auto,w-360",
    "kategori": "Baby Care",
    "nama": "Zwitsal Hair Lotion",
    "varian": "100ml"
  },
  {
    "gambar": null,
    "kategori": "Baby Care",
    "nama": "Zwitsal Hair Lotion",
    "varian": "200ml"
  },
  {
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/103/MTA-153749901/br-m036969-05210_zwitsal-kids-shampoo-180ml-seri-spongebob_full02-8c9e1dfe.jpg",
    "kategori": "Shampoo",
    "nama": "Zwitsal Kids Shampoo 180ml",
    "varian": null
  },
  {
    "gambar": "https://img.lazcdn.com/g/p/32fd15af04bc5b1a09c8f98ac7349f32.jpg_720x720q80.jpg",
    "kategori": "Baby Care",
    "nama": "Zwitsal Shampoo 100ml",
    "varian": null
  }
];
