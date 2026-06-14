// ============================================================
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

const productsData = [
  {
    "nama": "Air Mawar L",
    "varian": "100m",
    "kategori": "Bab",
    "gambar": null
  },
  {
    "nama": "Air Mawar L",
    "varian": "200ml",
    "kategori": "Bab",
    "gambar": null
  },
  {
    "nama": "Air Mawar L",
    "varian": "Face Milk",
    "kategori": "Bab",
    "gambar": null
  },
  {
    "nama": "Alkaline AA",
    "varian": "Isi 2",
    "kategori": "Baterai",
    "gambar": "https://down-id.img.susercontent.com/file/ab1e222d89407e87cdd1badcfdf2a616"
  },
  {
    "nama": "Alkaline AA",
    "varian": "Isi 6",
    "kategori": "Baterai",
    "gambar": "https://down-id.img.susercontent.com/file/ab1e222d89407e87cdd1badcfdf2a616"
  },
  {
    "nama": "Aloe Vera Nature republic",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nrp/nrp48814/l/5.jpg"
  },
  {
    "nama": "Amplop",
    "varian": "Biasa",
    "kategori": "Alat",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/amplop.jpg"
  },
  {
    "nama": "Amplop",
    "varian": "Lem",
    "kategori": "Alat",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/amplop.jpg"
  },
  {
    "nama": "Anaiso spray",
    "varian": "150ml Pink",
    "kategori": "Parfum",
    "gambar": "https://down-id.img.susercontent.com/file/sg-11134201-22110-mbny18hhq5jv42"
  },
  {
    "nama": "Anaiso spray",
    "varian": "150ml Ungu",
    "kategori": "Parfum",
    "gambar": "https://down-id.img.susercontent.com/file/sg-11134201-22110-mbny18hhq5jv42"
  },
  {
    "nama": "Anaiso spray",
    "varian": "30ml",
    "kategori": "Parfum",
    "gambar": "https://down-id.img.susercontent.com/file/sg-11134201-22110-mbny18hhq5jv42"
  },
  {
    "nama": "Asepso",
    "varian": null,
    "kategori": "Sabun",
    "gambar": "https://favo.id/cdn/shop/files/ASPTUB1001_Asepso-Plus-Antiseptic-Bar-Soap---80-gr.jpg?v=1757320358"
  },
  {
    "nama": "Aulia Body Lotion",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rash-m365wsmcey33f2"
  },
  {
    "nama": "Autan Sachet",
    "varian": null,
    "kategori": "Obat Nyamuk",
    "gambar": "https://cf.shopee.co.id/file/id-11134207-7r98r-lzu4o5blagbk74"
  },
  {
    "nama": "AXE Spray 135ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://img.lazcdn.com/g/p/188a287cbc92969da50af4d742064dc0.jpg_720x720q80.jpg"
  },
  {
    "nama": "AXL Alexander 150ml",
    "varian": "Hitam",
    "kategori": "Parfum",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasj-m0jglay5bjb297"
  },
  {
    "nama": "AXL Alexander 150ml",
    "varian": "Putih",
    "kategori": "Parfum",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasj-m0jglay5bjb297"
  },
  {
    "nama": "AXL Alexander 30ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasj-m0jglay5bjb297"
  },
  {
    "nama": "Baby cologne 100ml",
    "varian": "Cussons",
    "kategori": "Baby Care",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/cologne%20baby.jpg"
  },
  {
    "nama": "Baby cologne 100ml",
    "varian": "Jhonsons",
    "kategori": "Baby Care",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/cologne%20baby.jpg"
  },
  {
    "nama": "Balsem geliga",
    "varian": "10g",
    "kategori": "Kosmetik",
    "gambar": "https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20201204093827359225_GELIGA-20G.jpg"
  },
  {
    "nama": "Balsem geliga",
    "varian": "20g",
    "kategori": "Kosmetik",
    "gambar": "https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20201204093827359225_GELIGA-20G.jpg"
  },
  {
    "nama": "Balsem Lang",
    "varian": "10g",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29gsDoNM2e94C0T1NbE-ua8Nvq9Z82duyV65_lzsdrFO8pX9SDO84AvI&s=10"
  },
  {
    "nama": "Balsem Lang",
    "varian": "20g",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29gsDoNM2e94C0T1NbE-ua8Nvq9Z82duyV65_lzsdrFO8pX9SDO84AvI&s=10"
  },
  {
    "nama": "Baterai ABC",
    "varian": "AA",
    "kategori": "Baterai",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZIUfs4Z76OghIqleXCPfHRIRiEQGNViTStEmfZeP1EYCn4Q96yjVQaE&s=10"
  },
  {
    "nama": "Baterai ABC",
    "varian": "AAA",
    "kategori": "Baterai",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZIUfs4Z76OghIqleXCPfHRIRiEQGNViTStEmfZeP1EYCn4Q96yjVQaE&s=10"
  },
  {
    "nama": "Bayclin",
    "varian": "1 Liter",
    "kategori": "Alat Kebersihan",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0n-mcknyuavoy7jd8"
  },
  {
    "nama": "Bayclin",
    "varian": "100ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0n-mcknyuavoy7jd8"
  },
  {
    "nama": "Bayclin",
    "varian": "200ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0n-mcknyuavoy7jd8"
  },
  {
    "nama": "Bayclin",
    "varian": "500ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0n-mcknyuavoy7jd8"
  },
  {
    "nama": "Baygon",
    "varian": "200ml",
    "kategori": "Obat Nyamuk",
    "gambar": "https://img.mbizmarket.co.id/products/thumbs/800x800/2022/01/20/2b8bc1e6c28a63bb5c222bae9aad0349.jpg"
  },
  {
    "nama": "Baygon",
    "varian": "600ml",
    "kategori": "Obat Nyamuk",
    "gambar": "https://img.mbizmarket.co.id/products/thumbs/800x800/2022/01/20/2b8bc1e6c28a63bb5c222bae9aad0349.jpg"
  },
  {
    "nama": "Bedak Air mancur Nirmala sari",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/ff/kf/Sb20569403e9340d5a7adbcf05fef3e353.jpg_720x720q80.jpg"
  },
  {
    "nama": "Bedak Caladine",
    "varian": "100g",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/fe971e958bb54054968694e343cf0e19.jpg_720x720q80.jpg"
  },
  {
    "nama": "Bedak Caladine",
    "varian": "60g",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/fe971e958bb54054968694e343cf0e19.jpg_720x720q80.jpg"
  },
  {
    "nama": "Bedak Cussons",
    "varian": "130g",
    "kategori": "Baby Care",
    "gambar": "https://id-test-11.slatic.net/p/bedc1ed4bb08595d7d92606fc47269a7.jpg"
  },
  {
    "nama": "Bedak Cussons",
    "varian": "50g",
    "kategori": "Baby Care",
    "gambar": "https://id-test-11.slatic.net/p/bedc1ed4bb08595d7d92606fc47269a7.jpg"
  },
  {
    "nama": "Bedak dingin Bunga Tanjung",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://cf.shopee.co.id/file/4197268326ba96755cb880497686ecf1"
  },
  {
    "nama": "Bedak Emina",
    "varian": "Compact Powder",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/bedak%20emina.jpg"
  },
  {
    "nama": "Bedak Emina",
    "varian": "Loose Powder",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/bedak%20emina.jpg"
  },
  {
    "nama": "Bedak Jhonsons",
    "varian": "50g",
    "kategori": "Baby Care",
    "gambar": "https://images.ctfassets.net/9hr1ypxhfeji/S9AelDhO1a4ApVqoHBIuK/df594395d3fa708bd1fcf636260c8e14/3_step_pemakaian_bedak_biar_wanginya_bayi_banget-id-id"
  },
  {
    "nama": "Bedak Jhonsons",
    "varian": "75g",
    "kategori": "Baby Care",
    "gambar": "https://images.ctfassets.net/9hr1ypxhfeji/S9AelDhO1a4ApVqoHBIuK/df594395d3fa708bd1fcf636260c8e14/3_step_pemakaian_bedak_biar_wanginya_bayi_banget-id-id"
  },
  {
    "nama": "Bedak ketiak MBK",
    "varian": "Putih",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/b5f38c522f1d1920a3b487e93e1b9978.jpg_720x720q80.jpg"
  },
  {
    "nama": "Bedak ketiak MBK",
    "varian": "Silver",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/b5f38c522f1d1920a3b487e93e1b9978.jpg_720x720q80.jpg"
  },
  {
    "nama": "Bedak kodomo",
    "varian": "200g",
    "kategori": "Baby Care",
    "gambar": "https://id-live-01.slatic.net/p/cb8ce95deeb560443fe878a9011dac37.jpg"
  },
  {
    "nama": "Bedak kodomo",
    "varian": "300g",
    "kategori": "Baby Care",
    "gambar": "https://id-live-01.slatic.net/p/cb8ce95deeb560443fe878a9011dac37.jpg"
  },
  {
    "nama": "Bedak kodomo",
    "varian": "50g",
    "kategori": "Baby Care",
    "gambar": "https://id-live-01.slatic.net/p/cb8ce95deeb560443fe878a9011dac37.jpg"
  },
  {
    "nama": "Bedak Marcks",
    "varian": "Tabur",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/marcks.jpg"
  },
  {
    "nama": "Bedak Marcks",
    "varian": "Teen padat",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/marcks.jpg"
  },
  {
    "nama": "Bedak Mitu",
    "varian": "100g",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134211-7ra0l-mbm8x45ug2hff1"
  },
  {
    "nama": "Bedak Mitu",
    "varian": "200g",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134211-7ra0l-mbm8x45ug2hff1"
  },
  {
    "nama": "Bedak Mitu",
    "varian": "50g",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134211-7ra0l-mbm8x45ug2hff1"
  },
  {
    "nama": "Bedak My Baby",
    "varian": "100g",
    "kategori": "Baby Care",
    "gambar": "https://id-test-11.slatic.net/p/377f7620e490b30fadcc8004029b3433.jpg"
  },
  {
    "nama": "Bedak My Baby",
    "varian": "350g",
    "kategori": "Baby Care",
    "gambar": "https://id-test-11.slatic.net/p/377f7620e490b30fadcc8004029b3433.jpg"
  },
  {
    "nama": "Bedak My Baby",
    "varian": "50g",
    "kategori": "Baby Care",
    "gambar": "https://id-test-11.slatic.net/p/377f7620e490b30fadcc8004029b3433.jpg"
  },
  {
    "nama": "Bedak pigeon",
    "varian": "Padat",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/a6f3fbbd5cd4b79b8bebe7059e2b0952.jpg"
  },
  {
    "nama": "Bedak pigeon",
    "varian": "Refill",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/a6f3fbbd5cd4b79b8bebe7059e2b0952.jpg"
  },
  {
    "nama": "Bedak Pixy",
    "varian": "Refill",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/e169ce4ac90afc4ae2f98024c935f399.jpg"
  },
  {
    "nama": "Bedak Pixy",
    "varian": "Two way cake",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/e169ce4ac90afc4ae2f98024c935f399.jpg"
  },
  {
    "nama": "Bedak Salicyl",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/14d85023b5e9862b9da9330d9452a9ca.jpg_720x720q80.jpg"
  },
  {
    "nama": "Bedak Sari bengkoang",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/b005e11f41b577efe8df75e12454ccae.jpg_720x720q80.jpg"
  },
  {
    "nama": "Bedak Sari Rias padat",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1NWMuRk97DDPoMJqNqWQPVuqqXua1GAUT3OZZHTCeYBl3e6F8M9qB9df&s=10"
  },
  {
    "nama": "Bedak Sariayu",
    "varian": "Compact",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sariayu.jpg"
  },
  {
    "nama": "Bedak Sariayu",
    "varian": "Loose",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sariayu.jpg"
  },
  {
    "nama": "Bedak Skiva 21",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/bedak%20skiva.jpg"
  },
  {
    "nama": "Bellagio Body Spray 80ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://id-test-11.slatic.net/p/c4e6ac8b622a5a17e520eed91930912c.jpg"
  },
  {
    "nama": "Bellagio homme spray cologne sport 100ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://img.lazcdn.com/g/p/b1dd84c04454512a89a2dbcbe0e99d7f.jpg_720x720q80.jpg"
  },
  {
    "nama": "Benang jahit Extra",
    "varian": "1 pak",
    "kategori": "Alat",
    "gambar": "https://d1d8o7q9jg8pjk.cloudfront.net/p/lg_640bf105ebd0d.jpg"
  },
  {
    "nama": "Benang jahit Extra",
    "varian": "Satuan",
    "kategori": "Alat",
    "gambar": "https://d1d8o7q9jg8pjk.cloudfront.net/p/lg_640bf105ebd0d.jpg"
  },
  {
    "nama": "Berastagi Astagina",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/Scdc2675a54e949bf9f38b4d2946cdd91A.jpg"
  },
  {
    "nama": "Black Henna Eagle",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-68842233/eagle-s_eagle-s_eagle_henna_hair_dye_pewarna_rambut_full01_crk8lv3y.jpg"
  },
  {
    "nama": "Botol dot Cussons",
    "varian": "240ml",
    "kategori": "Baby Care",
    "gambar": "https://id-live-01.slatic.net/p/80fcb7b998d91f012ae9a21b8f49d8d5.jpg"
  },
  {
    "nama": "Botol dot Cussons",
    "varian": "50ml",
    "kategori": "Baby Care",
    "gambar": "https://id-live-01.slatic.net/p/80fcb7b998d91f012ae9a21b8f49d8d5.jpg"
  },
  {
    "nama": "Botol dot Huki",
    "varian": "120ml",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rbkb-ma9vtui2z91cca"
  },
  {
    "nama": "Botol dot Huki",
    "varian": "240ml",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rbkb-ma9vtui2z91cca"
  },
  {
    "nama": "Botol dot Huki",
    "varian": "60ml",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rbkb-ma9vtui2z91cca"
  },
  {
    "nama": "Botol Dot Pigeon",
    "varian": "120ml",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98s-luorp8gx0d694d"
  },
  {
    "nama": "Botol Dot Pigeon",
    "varian": "240ml",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98s-luorp8gx0d694d"
  },
  {
    "nama": "Botol Dot Pigeon",
    "varian": "50ml",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98s-luorp8gx0d694d"
  },
  {
    "nama": "Botol dot Reliable",
    "varian": "125ml",
    "kategori": "Baby Care",
    "gambar": "https://id-test-11.slatic.net/p/adc000a00e4e3167ba46215a84889d3a.jpg"
  },
  {
    "nama": "Botol dot Reliable",
    "varian": "60ml",
    "kategori": "Baby Care",
    "gambar": "https://id-test-11.slatic.net/p/adc000a00e4e3167ba46215a84889d3a.jpg"
  },
  {
    "nama": "Caladine cair",
    "varian": "60ml",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/12ba8bba6c7609034301bdf2dd4f22d1.png_720x720q80.png"
  },
  {
    "nama": "Caladine cair",
    "varian": "95ml",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/12ba8bba6c7609034301bdf2dd4f22d1.png_720x720q80.png"
  },
  {
    "nama": "Camelia body mist 100ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://down-id.img.susercontent.com/file/sg-11134201-7rdwa-lyl0op5ll3wnda"
  },
  {
    "nama": "Camelia body spray LLF 100ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://img.lazcdn.com/g/p/051d97124185d42a5c4a4a21ec1ff1e9.jpg_720x720q80.jpg"
  },
  {
    "nama": "Camelia eau de parfum",
    "varian": "125ml",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/camelia.jpg"
  },
  {
    "nama": "Camelia eau de parfum",
    "varian": "22ml",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/camelia.jpg"
  },
  {
    "nama": "Camelia eau de parfum",
    "varian": "60ml",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/camelia.jpg"
  },
  {
    "nama": "Casablanca body mist 100ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/103/MTA-119537941/casablanca_casablanca_body_mist_cologne_full01_fp88y967.jpg"
  },
  {
    "nama": "Casablanca body spray",
    "varian": "200ml",
    "kategori": "Parfum",
    "gambar": "https://images.tokopedia.net/img/cache/700/o3syd0/1997/1/1/c4b15b57547a47978616f50bdd7ec715~.jpeg"
  },
  {
    "nama": "Casablanca body spray",
    "varian": "65ml",
    "kategori": "Parfum",
    "gambar": "https://images.tokopedia.net/img/cache/700/o3syd0/1997/1/1/c4b15b57547a47978616f50bdd7ec715~.jpeg"
  },
  {
    "nama": "Casablanca Femme Perfumed",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://id-test-11.slatic.net/p/00145ac4328f5c9eef1d99556772e2f5.jpg"
  },
  {
    "nama": "Casablanca Pomade",
    "varian": null,
    "kategori": "Minyak Rambut",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-17490148/casablanca_casablanca_pink_pomade_-50_g-_full04_cv9n7wie.jpg"
  },
  {
    "nama": "Casablanca roll-on",
    "varian": null,
    "kategori": "Deodorant",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/92/MTA-154159021/br-m036969-00599_casablanca-deodorant-roll-on-50ml_full05-c12e6117.jpg"
  },
  {
    "nama": "Cermin Bulat",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://down-id.img.susercontent.com/file/b556d94eb22fd55a7df7c9348d638a9f"
  },
  {
    "nama": "Cermin Kayu",
    "varian": "No. 3",
    "kategori": "Alat",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m2omim0nnf11a1@resize_w450_nl.webp"
  },
  {
    "nama": "Cermin Kayu",
    "varian": "No. 4",
    "kategori": "Alat",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m2omim0nnf11a1@resize_w450_nl.webp"
  },
  {
    "nama": "Cermin Mini",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://id-test-11.slatic.net/p/f62faf3c655c9db8ad67864e1d5567bb.jpg"
  },
  {
    "nama": "Cermin Penny Kecil",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-26603435/penny_kaca_rias_duduk_-_cermin_gantung_penny_makeup_-_aesthetic_full03_3fd82e8c.jpg"
  },
  {
    "nama": "Citra Body Serum 180ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://images.tokopedia.net/img/cache/700/o3syd0/1997/1/1/61706af07f0c47c587fbb7b547147866~.jpeg"
  },
  {
    "nama": "Citra Glow UV 110ml",
    "varian": "Avocado",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-81ztm-mf7rhhhnzkzze6@resize_w450_nl.webp"
  },
  {
    "nama": "Citra Glow UV 110ml",
    "varian": "Sakura",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-81ztm-mf7rhhhnzkzze6@resize_w450_nl.webp"
  },
  {
    "nama": "Citra Glow UV 210ml",
    "varian": "Avocado",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-81ztm-mf7rhhhnzkzze6@resize_w450_nl.webp"
  },
  {
    "nama": "Citra Glow UV 210ml",
    "varian": "Night",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-81ztm-mf7rhhhnzkzze6@resize_w450_nl.webp"
  },
  {
    "nama": "Citra Glow UV 210ml",
    "varian": "Sakura",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-81ztm-mf7rhhhnzkzze6@resize_w450_nl.webp"
  },
  {
    "nama": "Citra Pearly UV",
    "varian": "110ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mdbupbgjqjp856@resize_w450_nl.webp"
  },
  {
    "nama": "Citra Pearly UV",
    "varian": "210ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mdbupbgjqjp856@resize_w450_nl.webp"
  },
  {
    "nama": "Citra Pearly UV",
    "varian": "380ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mdbupbgjqjp856@resize_w450_nl.webp"
  },
  {
    "nama": "Citra Pearly UV",
    "varian": "60ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mdbupbgjqjp856@resize_w450_nl.webp"
  },
  {
    "nama": "Clean&Clear Facial wash 100ml",
    "varian": "100ml",
    "kategori": "Kosmetik",
    "gambar": "https://id-live-01.slatic.net/p/248069c2a4de40fcdebb9751def28cbf.jpg"
  },
  {
    "nama": "Clean&Clear Facial wash 100ml",
    "varian": "50ml",
    "kategori": "Kosmetik",
    "gambar": "https://id-live-01.slatic.net/p/248069c2a4de40fcdebb9751def28cbf.jpg"
  },
  {
    "nama": "Colagen laptulipe",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lzzq2nxm1ja3fc"
  },
  {
    "nama": "Colagen Mecca Anugrah",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/58a52cfe030895c4dd6f95b46b7a9cfa.jpg_720x720q80.jpg"
  },
  {
    "nama": "Conditioner Pantene 160ml",
    "varian": null,
    "kategori": "Shampoo",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-54572660/pantene_pantene_conditioner_160ml_silky_-_damage_-_hair_fall_full01_e12j1axd.jpg"
  },
  {
    "nama": "Conditioner Rejoice",
    "varian": "150ml",
    "kategori": "Shampoo",
    "gambar": "https://c.alfagift.id/product/1/A6446990001107_A6446990001107_20230801113811583_base.jpg"
  },
  {
    "nama": "Conditioner Rejoice",
    "varian": "70ml",
    "kategori": "Shampoo",
    "gambar": "https://c.alfagift.id/product/1/A6446990001107_A6446990001107_20230801113811583_base.jpg"
  },
  {
    "nama": "Conditioner Sunsilk 160ml",
    "varian": null,
    "kategori": "Shampoo",
    "gambar": "https://image.dailymartazzahra.com/s3/productimages/webp/co37129/p794113/w600-h600/a1781ed0-cbcd-498b-b181-7cbe2d4173ce.webp"
  },
  {
    "nama": "Corina hair spray",
    "varian": "150ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/sg-11134201-7rce7-m6drp32cvxou8b"
  },
  {
    "nama": "Cream Citra Pearly glow UV 40g",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/6037eb47bc354f480ec8a8edec7133ee.jpg_720x720q80.jpg"
  },
  {
    "nama": "Cream Cussons",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/7/5/fe8d7c30-2efc-4b72-9076-e7b6ea1ca651.jpg"
  },
  {
    "nama": "Cream Dr.Pure",
    "varian": "Paket",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTFu05rMFmv-UO4YanYPQFaE5mnXY80ycDUhswihMjkcs2UAbn1AY3Uqe&s=10"
  },
  {
    "nama": "Cream Dr.Pure",
    "varian": "Satuan",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTFu05rMFmv-UO4YanYPQFaE5mnXY80ycDUhswihMjkcs2UAbn1AY3Uqe&s=10"
  },
  {
    "nama": "Cream Fair lovely",
    "varian": "23g",
    "kategori": "Kosmetik",
    "gambar": "https://www.gogobli.com/produk/fair__lovely/106567_fair__lovely_powder_cream_20gr.jpg"
  },
  {
    "nama": "Cream Fair lovely",
    "varian": "46g",
    "kategori": "Kosmetik",
    "gambar": "https://www.gogobli.com/produk/fair__lovely/106567_fair__lovely_powder_cream_20gr.jpg"
  },
  {
    "nama": "Cream Garnier 20ml",
    "varian": "Sakura Night",
    "kategori": "Kosmetik",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S4bc8f137e7b34a79b5fe8d4a84e5c584w.jpg"
  },
  {
    "nama": "Cream Garnier 20ml",
    "varian": "Sakura SPF",
    "kategori": "Kosmetik",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S4bc8f137e7b34a79b5fe8d4a84e5c584w.jpg"
  },
  {
    "nama": "Cream Garnier 20ml",
    "varian": "Sakura UV",
    "kategori": "Kosmetik",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S4bc8f137e7b34a79b5fe8d4a84e5c584w.jpg"
  },
  {
    "nama": "Cream Garnier 20ml",
    "varian": "Vitamin C Night",
    "kategori": "Kosmetik",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S4bc8f137e7b34a79b5fe8d4a84e5c584w.jpg"
  },
  {
    "nama": "Cream Garnier 20ml",
    "varian": "Vitamin C SPF",
    "kategori": "Kosmetik",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S4bc8f137e7b34a79b5fe8d4a84e5c584w.jpg"
  },
  {
    "nama": "Cream Garnier 20ml",
    "varian": "Vitamin C UV",
    "kategori": "Kosmetik",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S4bc8f137e7b34a79b5fe8d4a84e5c584w.jpg"
  },
  {
    "nama": "Cream Garnier Sachet",
    "varian": "Night",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/288d5c1fb03291c3d2182504d2b68b94.jpg"
  },
  {
    "nama": "Cream Garnier Sachet",
    "varian": "Sakura UV",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/288d5c1fb03291c3d2182504d2b68b94.jpg"
  },
  {
    "nama": "Cream Garnier Sachet",
    "varian": "Vitamin C",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/288d5c1fb03291c3d2182504d2b68b94.jpg"
  },
  {
    "nama": "Cream Minico",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDS6VAwt9KS0xP3ZqzMvSJnBfUDW86DSTioB0SOYti_g&s=10"
  },
  {
    "nama": "Cream Ponds Niasorcinol",
    "varian": "20g",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqM55ljXTyVv5RAl0hk6WPEv8vXQznZfgqznbo-uA6vTEhHQ0dJwP97o&s=10"
  },
  {
    "nama": "Cream Ponds Niasorcinol",
    "varian": "40g",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqM55ljXTyVv5RAl0hk6WPEv8vXQznZfgqznbo-uA6vTEhHQ0dJwP97o&s=10"
  },
  {
    "nama": "Cussons 2in1 100ml",
    "varian": null,
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lkqh1rm2aubm29"
  },
  {
    "nama": "Cussons baby oil",
    "varian": "100ml",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98u-lma6lcgpwd2742"
  },
  {
    "nama": "Cussons baby oil",
    "varian": "50ml",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98u-lma6lcgpwd2742"
  },
  {
    "nama": "Cussons Hair Lotion",
    "varian": "100ml",
    "kategori": "Baby Care",
    "gambar": "https://img.lazcdn.com/g/p/61635b124aec85d7da2eb4a019f17290.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Cussons Hair Lotion",
    "varian": "50ml",
    "kategori": "Baby Care",
    "gambar": "https://img.lazcdn.com/g/p/61635b124aec85d7da2eb4a019f17290.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Cutter",
    "varian": "Biasa",
    "kategori": "Alat",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S596031b0924949be975f94e0136317bbB.jpg"
  },
  {
    "nama": "Cutter",
    "varian": "Gunindo",
    "kategori": "Alat",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S596031b0924949be975f94e0136317bbB.jpg"
  },
  {
    "nama": "Cutton buds cussons",
    "varian": "Extra Fine",
    "kategori": "Baby Care",
    "gambar": "https://www.cussonsbaby.co.id/wp-content/uploads/2020/04/CussonsBaby_Thumbnail-CottonBudPembersihTelingaBayi50s.jpg"
  },
  {
    "nama": "Cutton buds cussons",
    "varian": "Regular",
    "kategori": "Baby Care",
    "gambar": "https://www.cussonsbaby.co.id/wp-content/uploads/2020/04/CussonsBaby_Thumbnail-CottonBudPembersihTelingaBayi50s.jpg"
  },
  {
    "nama": "Cutton buds Valentine",
    "varian": null,
    "kategori": "Baby Care",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/Sdd84441710cd4929931cd83abcc21af3j.jpg"
  },
  {
    "nama": "Dee-Dee Shampoo",
    "varian": "250ml",
    "kategori": "Sabun",
    "gambar": "https://assets.babyzania.com/image/cache/catalog/1/Dee-Dee-Shampoo-Bottle-Pump-Shampoo-Anak---250-ml-800x800.jpg"
  },
  {
    "nama": "Dee-Dee Shampoo",
    "varian": "mini",
    "kategori": "Sabun",
    "gambar": "https://assets.babyzania.com/image/cache/catalog/1/Dee-Dee-Shampoo-Bottle-Pump-Shampoo-Anak---250-ml-800x800.jpg"
  },
  {
    "nama": "Deo Posh sachet",
    "varian": null,
    "kategori": "Deodorant",
    "gambar": "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/10/25/f6f9ba7d-6c19-4e3a-9036-581efd84bf8b.jpg"
  },
  {
    "nama": "Dettol antiseptik",
    "varian": "45ml",
    "kategori": "Sabun",
    "gambar": "https://img.lazcdn.com/g/p/e878473ce6365899633b3d6050d043de.jpg_720x720q80.jpg"
  },
  {
    "nama": "Dettol antiseptik",
    "varian": "95ml",
    "kategori": "Sabun",
    "gambar": "https://img.lazcdn.com/g/p/e878473ce6365899633b3d6050d043de.jpg_720x720q80.jpg"
  },
  {
    "nama": "Dettol Batang",
    "varian": "100g",
    "kategori": "Sabun",
    "gambar": "https://img.lazcdn.com/g/p/92878cecb4d1549441b92b52a049c8d5.jpg_720x720q80.jpg"
  },
  {
    "nama": "Dettol Batang",
    "varian": "60g",
    "kategori": "Sabun",
    "gambar": "https://img.lazcdn.com/g/p/92878cecb4d1549441b92b52a049c8d5.jpg_720x720q80.jpg"
  },
  {
    "nama": "Dolby",
    "varian": "Panjang",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/dolby.jpg"
  },
  {
    "nama": "Dolby",
    "varian": "Pendek",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/dolby.jpg"
  },
  {
    "nama": "Doremi kids cologne",
    "varian": "100ml",
    "kategori": "Parfum",
    "gambar": "https://id-test-11.slatic.net/p/dd94a21e393a95dfc364b14b85656fb4.jpg"
  },
  {
    "nama": "Doremi kids cologne",
    "varian": "60ml",
    "kategori": "Parfum",
    "gambar": "https://id-test-11.slatic.net/p/dd94a21e393a95dfc364b14b85656fb4.jpg"
  },
  {
    "nama": "Dove Roll on",
    "varian": null,
    "kategori": "Deodorant",
    "gambar": "https://id-test-11.slatic.net/p/5166e7a03ea7d9c938660ceae4971bc3.jpg"
  },
  {
    "nama": "Downy Sachet 500",
    "varian": null,
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOhujkydSIiGF4INvhulY6Yxqo3gWnpyZGHO4ani1qw&s=10"
  },
  {
    "nama": "Elips vitamin rambut blister",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Tpbkc-LWGTcIcp_eWM2p7nIeJRORHOCHptdtKQVaww&s=10"
  },
  {
    "nama": "Emeron lovely natural",
    "varian": "200ml",
    "kategori": "Kosmetik",
    "gambar": "https://id-live-01.slatic.net/p/f62814d1cbff8cc7f78f5de05ad8cdfd.jpg"
  },
  {
    "nama": "Emeron lovely natural",
    "varian": "500ml",
    "kategori": "Kosmetik",
    "gambar": "https://id-live-01.slatic.net/p/f62814d1cbff8cc7f78f5de05ad8cdfd.jpg"
  },
  {
    "nama": "Emeron lovely white",
    "varian": "200ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9BkedRwsdqoweN5C-AszEWyEZoG9kfGg8xqo9rCZyg&s=10"
  },
  {
    "nama": "Emeron lovely white",
    "varian": "500ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9BkedRwsdqoweN5C-AszEWyEZoG9kfGg8xqo9rCZyg&s=10"
  },
  {
    "nama": "Emina Bright Stuff 100ml",
    "varian": "Face Toner",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/emina%20toner.jpg"
  },
  {
    "nama": "Emina Bright Stuff 100ml",
    "varian": "Micellar Water",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/emina%20toner.jpg"
  },
  {
    "nama": "Emina Bright Stuff Cream",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6d5x1sMWjj39iNaJvHypwntbInZeZbTYxgYlG_-NTQ&s=10"
  },
  {
    "nama": "Emina face wash",
    "varian": "100ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rbk6-maxhgo6524rd68"
  },
  {
    "nama": "Emina face wash",
    "varian": "50ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rbk6-maxhgo6524rd68"
  },
  {
    "nama": "Emina Sun battle SPF 35",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://guardianindonesia.co.id/media/catalog/product/3/1/3100048.png?format=jpeg"
  },
  {
    "nama": "Empeng Huki",
    "varian": null,
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzN6WbnBeo5KOdHlMbtyrzoqYV6V8LSa5bLHSLAiwMMQ&s=10"
  },
  {
    "nama": "Eskulin gel",
    "varian": "100ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoy7rC08LEfnoGn5BmArS-gd1qtWcSsO9kkiggwqbaw&s=10"
  },
  {
    "nama": "Eskulin gel",
    "varian": "50ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoy7rC08LEfnoGn5BmArS-gd1qtWcSsO9kkiggwqbaw&s=10"
  },
  {
    "nama": "Eskulin Japanese spray cologne 110ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ij1dLBViat4stFAoOfMnKZU401cT5C8ydvc3uEFlSg&s=10"
  },
  {
    "nama": "Eskulin Kids 2in1 280ml",
    "varian": null,
    "kategori": "Sabun",
    "gambar": "https://kkakka.id/9163/eskulin-hair-body-wash-bottle-280ml-natural-smoothsofia.jpg"
  },
  {
    "nama": "Eskulin Kids Shampoo 200ml",
    "varian": null,
    "kategori": "Shampoo",
    "gambar": "https://id-test-11.slatic.net/p/262811fe280dc794c8c6c13edd026b63.jpg"
  },
  {
    "nama": "Eskulin mist cologne 125ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://img.lazcdn.com/g/p/d928a3c3ad83da7b169e3e1e06daba54.jpg_720x720q80.jpg_.webp"
  },
  {
    "nama": "Eskulin Splash cologne 125ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://img.lazcdn.com/g/ff/kf/Sc46c39bb86c54b47ae0e767e1d871307t.jpg_720x720q80.jpg"
  },
  {
    "nama": "Eyebrow Menow M.N",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/17a7aa1ffaf83e6149f132bab7fe8420.jpg"
  },
  {
    "nama": "Ez White Tofu",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAB6E0R_BdvnA3R_TicBMy2VFfTwiyd88kd6I2nkjxknYS7knsVJoYJe9&s=10"
  },
  {
    "nama": "Fair lovely sachet",
    "varian": "Cream",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/aafc773e695c609b55614ebd70ef398e.jpg"
  },
  {
    "nama": "Fair lovely sachet",
    "varian": "Sabun",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/aafc773e695c609b55614ebd70ef398e.jpg"
  },
  {
    "nama": "Fanbo Compact Powder",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://cf.shopee.co.id/file/1123989106e3ae1fa75c877d28ee86ea"
  },
  {
    "nama": "Formula biasa isi 3",
    "varian": null,
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwVZMbqnfEmNm7ukWDqPFZHI3zUWCJDNnNnLc7gweEA&s=10"
  },
  {
    "nama": "Foundation NTS",
    "varian": "Putih Hijau",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRYD93G3nF2Dg13xrLBQNY-2O_hmSjhKadMTDvIdODQ&s=10"
  },
  {
    "nama": "Foundation NTS",
    "varian": "Silver",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRYD93G3nF2Dg13xrLBQNY-2O_hmSjhKadMTDvIdODQ&s=10"
  },
  {
    "nama": "Fresh Natural 100ml",
    "varian": "Cologne",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/fresh.jpg"
  },
  {
    "nama": "Fresh Natural 100ml",
    "varian": "EDT Kaca",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/fresh.jpg"
  },
  {
    "nama": "Fresh Point Parfum Laundry",
    "varian": "1 Liter",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprwk2tipgT5fBsWO9Z4mJDFaSlpsXLivnszNk2LFJEA&s=10"
  },
  {
    "nama": "Fresh Point Parfum Laundry",
    "varian": "250ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprwk2tipgT5fBsWO9Z4mJDFaSlpsXLivnszNk2LFJEA&s=10"
  },
  {
    "nama": "Fresh Point Parfum Laundry",
    "varian": "500ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprwk2tipgT5fBsWO9Z4mJDFaSlpsXLivnszNk2LFJEA&s=10"
  },
  {
    "nama": "Fresh Point Pelicin Laundry",
    "varian": "1 Liter",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHNtdIwqrQyG_BH4HC-nnYLTM4VPpmkXvD1MlCGOxUzw&s=10"
  },
  {
    "nama": "Fresh Point Pelicin Laundry",
    "varian": "250ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHNtdIwqrQyG_BH4HC-nnYLTM4VPpmkXvD1MlCGOxUzw&s=10"
  },
  {
    "nama": "Freshcare",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://ukhtiosaka.com/wp-content/uploads/2023/11/Freshcare-Minyak-Angin-Aromatheraphy2.webp"
  },
  {
    "nama": "Gandapura",
    "varian": "30ml",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/1bdbd75c15d7db3afcbf29a3d1756138.jpg_720x720q80.jpg"
  },
  {
    "nama": "Gandapura",
    "varian": "60ml",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/1bdbd75c15d7db3afcbf29a3d1756138.jpg_720x720q80.jpg"
  },
  {
    "nama": "Gatsby pomade",
    "varian": "30g",
    "kategori": "Minyak Rambut",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98t-lyd4v80iybd45d"
  },
  {
    "nama": "Gatsby pomade",
    "varian": "80g",
    "kategori": "Minyak Rambut",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98t-lyd4v80iybd45d"
  },
  {
    "nama": "Gatsby pomade kotak",
    "varian": "30g",
    "kategori": "Minyak Rambut",
    "gambar": "https://solvent-production.s3.amazonaws.com/media/images/products/2021/08/DSC_0371.JPG"
  },
  {
    "nama": "Gatsby pomade kotak",
    "varian": "80g",
    "kategori": "Minyak Rambut",
    "gambar": "https://solvent-production.s3.amazonaws.com/media/images/products/2021/08/DSC_0371.JPG"
  },
  {
    "nama": "Gatsby spray Gold",
    "varian": "175ml",
    "kategori": "Parfum",
    "gambar": "https://laz-img-sg.alicdn.com/p/30fbee3b36e56373e0c89f6e31ba4807.jpg"
  },
  {
    "nama": "Gatsby spray Gold",
    "varian": "50ml",
    "kategori": "Parfum",
    "gambar": "https://laz-img-sg.alicdn.com/p/30fbee3b36e56373e0c89f6e31ba4807.jpg"
  },
  {
    "nama": "Gatsby THC",
    "varian": "125g",
    "kategori": "Minyak Rambut",
    "gambar": "https://id-test-11.slatic.net/p/719a78fcbc5d04e674b5a00ee5718075.png"
  },
  {
    "nama": "Gatsby THC",
    "varian": "250g",
    "kategori": "Minyak Rambut",
    "gambar": "https://id-test-11.slatic.net/p/719a78fcbc5d04e674b5a00ee5718075.png"
  },
  {
    "nama": "Gatsby THC",
    "varian": "28g",
    "kategori": "Minyak Rambut",
    "gambar": "https://id-test-11.slatic.net/p/719a78fcbc5d04e674b5a00ee5718075.png"
  },
  {
    "nama": "Gatsby THC",
    "varian": "70g",
    "kategori": "Minyak Rambut",
    "gambar": "https://id-test-11.slatic.net/p/719a78fcbc5d04e674b5a00ee5718075.png"
  },
  {
    "nama": "Gatsby urban cologne 125ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://id-live-01.slatic.net/p/6c66f7c112aaa1fb52f28095cc1bc67a.jpg"
  },
  {
    "nama": "Gatsby wax",
    "varian": "25g",
    "kategori": "Minyak Rambut",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOvvFqxRxuFGXIc4nkraLqtVEKlVsi8tkduAkNxvGQRg&s=10"
  },
  {
    "nama": "Gatsby wax",
    "varian": "75g",
    "kategori": "Minyak Rambut",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOvvFqxRxuFGXIc4nkraLqtVEKlVsi8tkduAkNxvGQRg&s=10"
  },
  {
    "nama": "Gatsby WG",
    "varian": "150g",
    "kategori": "Minyak Rambut",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR99Ch9O0wSBqld0XqUg-Wkly3UToFAhyksaChXwEQEg&s=10"
  },
  {
    "nama": "Gatsby WG",
    "varian": "300g",
    "kategori": "Minyak Rambut",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR99Ch9O0wSBqld0XqUg-Wkly3UToFAhyksaChXwEQEg&s=10"
  },
  {
    "nama": "Gatsby WG",
    "varian": "30g",
    "kategori": "Minyak Rambut",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR99Ch9O0wSBqld0XqUg-Wkly3UToFAhyksaChXwEQEg&s=10"
  },
  {
    "nama": "Gatsby WG",
    "varian": "75g",
    "kategori": "Minyak Rambut",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR99Ch9O0wSBqld0XqUg-Wkly3UToFAhyksaChXwEQEg&s=10"
  },
  {
    "nama": "Gentle Gen",
    "varian": null,
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAMgr0QXgLMqs4Z9_Yt6FvhZiMJAF7-zzrBkcItXdGQ&s=10"
  },
  {
    "nama": "Godokan sirih",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-aO5PkzzMauJ3SRjkxaHBh0SB15KSap5LtE-GCLLg6kKqxmmghq3j4Sb&s=10"
  },
  {
    "nama": "GPU",
    "varian": "30ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasi-m0l4obeubwuke1"
  },
  {
    "nama": "GPU",
    "varian": "60ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasi-m0l4obeubwuke1"
  },
  {
    "nama": "Gunting",
    "varian": "OLL",
    "kategori": "Alat",
    "gambar": "https://imgx.brdcdn.com/imgx/500/aW1hZ2VzLnRva29wZWRpYS5uZXQvaW1nL2NhY2hlLzcwMC9WcWJjbU0vMjAyMS80LzE3L2JjNzczNjU3LTQzZmItNDFkNy04YTgyLTY3ODI1MmRiNjBlZA==.jpg"
  },
  {
    "nama": "Gunting",
    "varian": "OMM",
    "kategori": "Alat",
    "gambar": "https://imgx.brdcdn.com/imgx/500/aW1hZ2VzLnRva29wZWRpYS5uZXQvaW1nL2NhY2hlLzcwMC9WcWJjbU0vMjAyMS80LzE3L2JjNzczNjU3LTQzZmItNDFkNy04YTgyLTY3ODI1MmRiNjBlZA==.jpg"
  },
  {
    "nama": "Gunting",
    "varian": "OSS",
    "kategori": "Alat",
    "gambar": "https://imgx.brdcdn.com/imgx/500/aW1hZ2VzLnRva29wZWRpYS5uZXQvaW1nL2NhY2hlLzcwMC9WcWJjbU0vMjAyMS80LzE3L2JjNzczNjU3LTQzZmItNDFkNy04YTgyLTY3ODI1MmRiNjBlZA==.jpg"
  },
  {
    "nama": "Handbody Bibit pemutih",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUjJ_WfDUShhQeumkDZE3XmYKIixwA2awpH6fJ70eELcPUIvJyhRzBsMD&s=10"
  },
  {
    "nama": "Handbody Leivy",
    "varian": "270ml",
    "kategori": "Kosmetik",
    "gambar": "https://id-live-01.slatic.net/p/1e5c2754bcce4fdd5339ed0cd30d8a38.jpg"
  },
  {
    "nama": "Handbody Leivy",
    "varian": "500ml",
    "kategori": "Kosmetik",
    "gambar": "https://id-live-01.slatic.net/p/1e5c2754bcce4fdd5339ed0cd30d8a38.jpg"
  },
  {
    "nama": "Handbody Natur E",
    "varian": "Hijau",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLjZOewiTOzJ95Me39gOawovo6hUresEvMx_TUxIYFWAWfq0pwlxeqqBC&s=10"
  },
  {
    "nama": "Handbody Natur E",
    "varian": "Merah",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLjZOewiTOzJ95Me39gOawovo6hUresEvMx_TUxIYFWAWfq0pwlxeqqBC&s=10"
  },
  {
    "nama": "Handbody Shinzui",
    "varian": "100ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYEElbkx_Ix9wK2Y8CIdlH4KybvEbgq-Ld2jPbdEk2Q&s=10"
  },
  {
    "nama": "Handbody Shinzui",
    "varian": "210ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYEElbkx_Ix9wK2Y8CIdlH4KybvEbgq-Ld2jPbdEk2Q&s=10"
  },
  {
    "nama": "Handsoap Yuri Botol",
    "varian": null,
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_s_G-ALDz9BMYchFoTbQbrqrAkWh-fALD8BOV0rWc_A&s=10"
  },
  {
    "nama": "Hansaplast",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://img.lazcdn.com/g/p/3e3b3a59af4b0dd0649ad9c2581eae86.jpg_720x720q80.jpg"
  },
  {
    "nama": "Happy Oil",
    "varian": "125ml",
    "kategori": "Minyak Rambut",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXmAACHFdp_KL4Sx9IeLAo2d42D6t6b0VXiO-xydV3HGMVZVmsZ-y2HXi&s=10"
  },
  {
    "nama": "Happy Oil",
    "varian": "70ml",
    "kategori": "Minyak Rambut",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXmAACHFdp_KL4Sx9IeLAo2d42D6t6b0VXiO-xydV3HGMVZVmsZ-y2HXi&s=10"
  },
  {
    "nama": "Harpic 200ml",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZ7tHLjcCJmdliT_RnS5MqSr1HVlsbM1c9hskKiY6Ci2Df26lvOt0AU8&s=10"
  },
  {
    "nama": "Harum Sari",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//112/MTA-89694337/harum_sari_bedak_bb_harum_sari_full02_r4fxk9bc.jpg"
  },
  {
    "nama": "Herocyn baby",
    "varian": "100g",
    "kategori": "Baby Care",
    "gambar": "https://img.lazcdn.com/g/p/8db5121a13042ba2a0a8085429ca62f1.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Herocyn baby",
    "varian": "200g",
    "kategori": "Baby Care",
    "gambar": "https://img.lazcdn.com/g/p/8db5121a13042ba2a0a8085429ca62f1.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Herocyn dewasa",
    "varian": "150g",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/584ec66608b775ef33b06619358a2e59.jpg"
  },
  {
    "nama": "Herocyn dewasa",
    "varian": "85g",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/584ec66608b775ef33b06619358a2e59.jpg"
  },
  {
    "nama": "Hit Kaleng",
    "varian": "165ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBJL2Y0m3VOYuwc2n6cXsDhO6Y1-Qh62vTGmhBDdfcA&s=10"
  },
  {
    "nama": "Hit Kaleng",
    "varian": "180ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBJL2Y0m3VOYuwc2n6cXsDhO6Y1-Qh62vTGmhBDdfcA&s=10"
  },
  {
    "nama": "Inhaler Lang",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/ff/kf/S2ca09aeb764743288136ca2e98858feb7.jpg_720x720q80.jpg"
  },
  {
    "nama": "Isi Staples",
    "varian": "Besar",
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPinKbGInEII8oKMS8hQ1t9I2EL0iXa1fx1YwsJmG0PA&s=10"
  },
  {
    "nama": "Isi Staples",
    "varian": "Kecil",
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPinKbGInEII8oKMS8hQ1t9I2EL0iXa1fx1YwsJmG0PA&s=10"
  },
  {
    "nama": "Izzi body mist hijab 100ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1P9qm9h2quBBx4ZmxqYWtMtWvzJTDgM9DNy4OWQ2Htw&s=10"
  },
  {
    "nama": "Izzi love body mist",
    "varian": "100ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR70hSiuK1N0ApfibquijKKV8q1tWj79qXVtVdZkFGj8w&s=10"
  },
  {
    "nama": "Izzi love body mist",
    "varian": "60ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR70hSiuK1N0ApfibquijKKV8q1tWj79qXVtVdZkFGj8w&s=10"
  },
  {
    "nama": "Jacomo",
    "varian": "150ml",
    "kategori": "Parfum",
    "gambar": "https://down-id.img.susercontent.com/file/sg-11134201-22110-k2lku5oyutjv20"
  },
  {
    "nama": "Jacomo",
    "varian": "30ml",
    "kategori": "Parfum",
    "gambar": "https://down-id.img.susercontent.com/file/sg-11134201-22110-k2lku5oyutjv20"
  },
  {
    "nama": "Jarum Jahit",
    "varian": "Besar",
    "kategori": "Alat",
    "gambar": "https://img.lazcdn.com/g/p/cf5b0c5ccb8f9ea8314bd72d2ade5d88.jpg_720x720q80.jpg"
  },
  {
    "nama": "Jarum Jahit",
    "varian": "Kecil",
    "kategori": "Alat",
    "gambar": "https://img.lazcdn.com/g/p/cf5b0c5ccb8f9ea8314bd72d2ade5d88.jpg_720x720q80.jpg"
  },
  {
    "nama": "Jarum pentul Kecil",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://id-test-11.slatic.net/p/0aab19a75378fdb2418d9dd1089e8e4e.jpg"
  },
  {
    "nama": "Jepit baju",
    "varian": "Biasa",
    "kategori": "Alat",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/jepit%20baju.jpg"
  },
  {
    "nama": "Jepit baju",
    "varian": "Breo",
    "kategori": "Alat",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/jepit%20baju.jpg"
  },
  {
    "nama": "Jepit kuku",
    "varian": "Biasa Besar",
    "kategori": "Alat",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/jepit%20kuku.jpg"
  },
  {
    "nama": "Jepit kuku",
    "varian": "Biasa Kecil",
    "kategori": "Alat",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/jepit%20kuku.jpg"
  },
  {
    "nama": "Jepit kuku",
    "varian": "Superdoll Besar",
    "kategori": "Alat",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/jepit%20kuku.jpg"
  },
  {
    "nama": "Jepit kuku",
    "varian": "Superdoll Kecil",
    "kategori": "Alat",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/jepit%20kuku.jpg"
  },
  {
    "nama": "Jhonsons 2IN1 body wash",
    "varian": "100ml",
    "kategori": "Baby Care",
    "gambar": "https://img.lazcdn.com/g/p/52ae5668820fd031489f20755209a19d.png_720x720q80.png"
  },
  {
    "nama": "Jhonsons 2IN1 body wash",
    "varian": "200ml",
    "kategori": "Baby Care",
    "gambar": "https://img.lazcdn.com/g/p/52ae5668820fd031489f20755209a19d.png_720x720q80.png"
  },
  {
    "nama": "Jovan musk oil",
    "varian": "150ml",
    "kategori": "Parfum",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//107/MTA-24770779/jovan_deodorant_spray_jovan_musk_oil_ds_150ml_orange_full01_6a9fc3c5.jpg"
  },
  {
    "nama": "Jovan musk oil",
    "varian": "30ml",
    "kategori": "Parfum",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//107/MTA-24770779/jovan_deodorant_spray_jovan_musk_oil_ds_150ml_orange_full01_6a9fc3c5.jpg"
  },
  {
    "nama": "Kahf Eau De Toilette 35ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULLtBb6xxxLk7phj2maVL1poiirxthEEYWsCaEo4XLw&s=10"
  },
  {
    "nama": "Kahf roll on 45ml",
    "varian": null,
    "kategori": "Deodorant",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmtRGeTSsRx-1u2K4B95UstObx97yfpxK7Q3q_aJsZ1Q&s=10"
  },
  {
    "nama": "Kanna White",
    "varian": "15g",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcux-Wv4SfWBOkgIaTM-1tjigox4bGWUzR6v342FeAX4uq0ZGy77zUNjQ&s=10"
  },
  {
    "nama": "Kanna White",
    "varian": "30g",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcux-Wv4SfWBOkgIaTM-1tjigox4bGWUzR6v342FeAX4uq0ZGy77zUNjQ&s=10"
  },
  {
    "nama": "Kapas Muka",
    "varian": "Kharisma",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/kapas.jpg"
  },
  {
    "nama": "Kapas Muka",
    "varian": "Modis",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/kapas.jpg"
  },
  {
    "nama": "Kapas Selection",
    "varian": "Bulat",
    "kategori": "Kosmetik",
    "gambar": "https://d2qjkwm11akmwu.cloudfront.net/products/11262-1665781763.webp"
  },
  {
    "nama": "Kapur Ajaib",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://id-test-11.slatic.net/p/4bb346685ef9f0818796b1a85cd2332d.jpg"
  },
  {
    "nama": "Kapur Barus bola",
    "varian": "Isi 3",
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhx2wTz08lRc5--uFVez2Xm_5KNuLtXtpDaC7fktkkkA&s=10"
  },
  {
    "nama": "Kapur Barus bola",
    "varian": "Isi 5",
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhx2wTz08lRc5--uFVez2Xm_5KNuLtXtpDaC7fktkkkA&s=10"
  },
  {
    "nama": "Kapur barus bola keranjang",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY1STIimPfj-fAXyf4yzibdm8it0ckyz2ijaw1UBhiXQ&s=10"
  },
  {
    "nama": "Kapur Barus Dahlia keranjang bulat",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtAZRSeil_DKcT38EQ_HUshnBYyxJnkCd0y3b8lD7SGA&s=10"
  },
  {
    "nama": "Kapur Barus renteng",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://id-live-01.slatic.net/p/3ecff2b66c9d5a86d7654a5b40e39040.jpg"
  },
  {
    "nama": "Kapur barus Seagull 150g",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://id-live-01.slatic.net/p/16dd64259404dcc6cac7d2934da7179a.jpg"
  },
  {
    "nama": "Kastok baju",
    "varian": "Hitam",
    "kategori": "Alat",
    "gambar": null
  },
  {
    "nama": "Kastok baju",
    "varian": "Luxor",
    "kategori": "Alat",
    "gambar": null
  },
  {
    "nama": "Kastok baju",
    "varian": "Vito",
    "kategori": "Alat",
    "gambar": null
  },
  {
    "nama": "Kelly Merah",
    "varian": "15g",
    "kategori": "Kosmetik",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/Sccbdc41d90b9466893692e78597adca9N.jpg"
  },
  {
    "nama": "Kelly Merah",
    "varian": "5g",
    "kategori": "Kosmetik",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/Sccbdc41d90b9466893692e78597adca9N.jpg"
  },
  {
    "nama": "Kelly Merah",
    "varian": "Fair Cheek",
    "kategori": "Kosmetik",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/Sccbdc41d90b9466893692e78597adca9N.jpg"
  },
  {
    "nama": "Kispray Botol",
    "varian": null,
    "kategori": "Alat Kebersihan",
    "gambar": "https://down-id.img.susercontent.com/file/38e5306c274d9e1737943429e2929f60"
  },
  {
    "nama": "Kiwi cair",
    "varian": "30ml",
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTts8KwNwj5k1rQKMSVkZhh_zdAOZw3nE7ND60ZTCvSVWqQjy-IzrFBMqc&s=10"
  },
  {
    "nama": "Kiwi cair",
    "varian": "75ml",
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTts8KwNwj5k1rQKMSVkZhh_zdAOZw3nE7ND60ZTCvSVWqQjy-IzrFBMqc&s=10"
  },
  {
    "nama": "Kiwi kaleng",
    "varian": "100g",
    "kategori": "Alat",
    "gambar": "https://img.lazcdn.com/g/p/df6f01149553023b7ac77da5db3da7b1.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Kiwi kaleng",
    "varian": "17g",
    "kategori": "Alat",
    "gambar": "https://img.lazcdn.com/g/p/df6f01149553023b7ac77da5db3da7b1.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Kiwi kaleng",
    "varian": "45g",
    "kategori": "Alat",
    "gambar": "https://img.lazcdn.com/g/p/df6f01149553023b7ac77da5db3da7b1.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Korek telinga lampu",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoK3BYPmagZxaTmoOOfr72yxqN3yFJCl6QSfqQQkuSZQ&s=10"
  },
  {
    "nama": "Lakban",
    "varian": "Besar",
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYVaXJZFqaC4hsNw2YBesNfe8iBxCy-bPQ4lj8EgfnQ&s=10"
  },
  {
    "nama": "Lakban",
    "varian": "Kecil",
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYVaXJZFqaC4hsNw2YBesNfe8iBxCy-bPQ4lj8EgfnQ&s=10"
  },
  {
    "nama": "Laurier Night 30cm",
    "varian": "Isi 16",
    "kategori": "Kosmetik",
    "gambar": "https://www.kao.com/content/dam/sites/kao/www-kao-com/id/id/products/laurier/lre_relax_night30_01.jpg"
  },
  {
    "nama": "Laurier Night 30cm",
    "varian": "Isi 8",
    "kategori": "Kosmetik",
    "gambar": "https://www.kao.com/content/dam/sites/kao/www-kao-com/id/id/products/laurier/lre_relax_night30_01.jpg"
  },
  {
    "nama": "Laurier Night 35cm",
    "varian": "Isi 12",
    "kategori": "Kosmetik",
    "gambar": "https://assets.babyzania.com/image/cache/catalog/1/1530c0dc-7c0f-4654-adfd-cec64c9c66f6-800x800.jpg"
  },
  {
    "nama": "Laurier Night 35cm",
    "varian": "Isi 6",
    "kategori": "Kosmetik",
    "gambar": "https://assets.babyzania.com/image/cache/catalog/1/1530c0dc-7c0f-4654-adfd-cec64c9c66f6-800x800.jpg"
  },
  {
    "nama": "Lem korea",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://id-test-11.slatic.net/p/63332f82a26401109d02e92d5d057fa8.jpg"
  },
  {
    "nama": "Lemon Soap",
    "varian": "15g",
    "kategori": "Sabun",
    "gambar": "https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/06aadfa98a314a598c771ade6bd02ee4~.jpeg"
  },
  {
    "nama": "Lemon Soap",
    "varian": "25g",
    "kategori": "Sabun",
    "gambar": "https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/06aadfa98a314a598c771ade6bd02ee4~.jpeg"
  },
  {
    "nama": "Lemon Soap",
    "varian": "75g",
    "kategori": "Sabun",
    "gambar": "https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/06aadfa98a314a598c771ade6bd02ee4~.jpeg"
  },
  {
    "nama": "Lip Cream",
    "varian": "Hanasui",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/lip%20cream.jpg"
  },
  {
    "nama": "Lip Cream",
    "varian": "Implora",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/lip%20cream.jpg"
  },
  {
    "nama": "Lip Cream",
    "varian": "Maybelline",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/lip%20cream.jpg"
  },
  {
    "nama": "Lip Cream",
    "varian": "OMG",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/lip%20cream.jpg"
  },
  {
    "nama": "Lip Tint Hanasui",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU04lmtcyemL85m74mA6U1PJ7FZU-34dIcktmietCzBg&s=10"
  },
  {
    "nama": "Lipstik Elisabeth",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApAtm4ppPon2bLpYyNbfTANzPkB4Vp6nycvR96bTXDA&s=10"
  },
  {
    "nama": "Lipstik Skiva 21",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_NYm5SvfNGuWRonhLs-oCLX4cJjjAQLzsgDYj04Fhw&s=10"
  },
  {
    "nama": "Lipstik Valentine Ruby",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Upnh5ljrnvhTtBgFmIjqqzOd-q6o19-n9t6Ej54A6w&s=10"
  },
  {
    "nama": "Listerine",
    "varian": "100ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://id-test-11.slatic.net/p/1e5207cf194a6f12d9739908d3f4b0ab.jpg"
  },
  {
    "nama": "Listerine",
    "varian": "250ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://id-test-11.slatic.net/p/1e5207cf194a6f12d9739908d3f4b0ab.jpg"
  },
  {
    "nama": "Lovilla",
    "varian": "Body Mits",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/lovillea%20series.jpg"
  },
  {
    "nama": "Lovilla",
    "varian": "EDP Kaca",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/lovillea%20series.jpg"
  },
  {
    "nama": "Lulur",
    "varian": "Ovale",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/lulur.jpg"
  },
  {
    "nama": "Lulur",
    "varian": "Sekar Jagat",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/lulur.jpg"
  },
  {
    "nama": "Lulur",
    "varian": "THAI",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/lulur.jpg"
  },
  {
    "nama": "Lulur",
    "varian": "Vienna",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/lulur.jpg"
  },
  {
    "nama": "Lulur Ayudia Pouch",
    "varian": "1000g",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/ddc2766b02e0dd584ee07f05b054c908.jpg_720x720q80.jpg"
  },
  {
    "nama": "Lulur Ayudia Pouch",
    "varian": "300g",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/ddc2766b02e0dd584ee07f05b054c908.jpg_720x720q80.jpg"
  },
  {
    "nama": "Lulur bali herborist",
    "varian": "100g",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiOT85Uj8F8Vbad4mO1bD90N6QuORk-_vGekWZWjwFcNU-vP9MM5hVWww&s=10"
  },
  {
    "nama": "Lulur bali herborist",
    "varian": "200g",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiOT85Uj8F8Vbad4mO1bD90N6QuORk-_vGekWZWjwFcNU-vP9MM5hVWww&s=10"
  },
  {
    "nama": "Lulur Bengkoang kuning mekar sari",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/f2787266e8d7ed02e7712496807e8199"
  },
  {
    "nama": "Lulur Hafabi",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcWAtUy0j6U4JpPHz6vbB2kumVo3FmTGHfs2Sgw0hIGo8NDwgozUwCyV0&s=10"
  },
  {
    "nama": "Lulur kocok ratu mas",
    "varian": "100ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVwKr3p6nwnXzk6O9Lqnc0UiofdXId4cS9V6fUAAbAg&s=10"
  },
  {
    "nama": "Lulur kocok ratu mas",
    "varian": "250ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVwKr3p6nwnXzk6O9Lqnc0UiofdXId4cS9V6fUAAbAg&s=10"
  },
  {
    "nama": "Lulur Purbasari",
    "varian": "100g",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rbk3-m95g0s3ynt0221"
  },
  {
    "nama": "Lulur Purbasari",
    "varian": "200g",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rbk3-m95g0s3ynt0221"
  },
  {
    "nama": "Lulur Shinzui",
    "varian": "120g",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/ff/kf/S8397f824a6d14337a78801877279ad80F.jpg_720x720q80.jpg"
  },
  {
    "nama": "Lulur Shinzui",
    "varian": "200g",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/ff/kf/S8397f824a6d14337a78801877279ad80F.jpg_720x720q80.jpg"
  },
  {
    "nama": "Lulur Vienna Pouch 250g",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/44180da4851de61f556da1954a5be798.png_960x960q80.png_.webp"
  },
  {
    "nama": "Makarizo advisor vita max 8ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://id-live-01.slatic.net/p/f4623ba3720bc811c0a0c15ea4dda57f.jpg"
  },
  {
    "nama": "Makarizo hair energy spray",
    "varian": "100ml",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/5a0c3b357f41021b1a31c7779ea6db7b.jpg"
  },
  {
    "nama": "Makarizo hair energy spray",
    "varian": "60ml",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/5a0c3b357f41021b1a31c7779ea6db7b.jpg"
  },
  {
    "nama": "Make Over Liquid matt foundation",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJ7Yh5MAu69zBjNx5kXkJyMPXmXhxXQnZZthL2Ev4jg&s=10"
  },
  {
    "nama": "Make Over Perfect Cover",
    "varian": "Refill",
    "kategori": "Kosmetik",
    "gambar": "https://id-live-01.slatic.net/p/13fb207119b4db4031e85e5b4b34ccb1.jpg"
  },
  {
    "nama": "Make Over Perfect Cover",
    "varian": "Two Way Cake",
    "kategori": "Kosmetik",
    "gambar": "https://id-live-01.slatic.net/p/13fb207119b4db4031e85e5b4b34ccb1.jpg"
  },
  {
    "nama": "Make Over Silky Smooth Powder",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://bimg.akulaku.net/goods/spu/75329254f43546478fc39bfa473be3cf8513.png?w=726&q=80&fit=1"
  },
  {
    "nama": "Manjakani",
    "varian": "50ml",
    "kategori": "Kosmetik",
    "gambar": "https://cf.shopee.co.id/file/535db97cf720105ffbfca7cc024a0188"
  },
  {
    "nama": "Manjakani",
    "varian": "90ml",
    "kategori": "Kosmetik",
    "gambar": "https://cf.shopee.co.id/file/535db97cf720105ffbfca7cc024a0188"
  },
  {
    "nama": "Manjakani",
    "varian": "Jumbo",
    "kategori": "Kosmetik",
    "gambar": "https://cf.shopee.co.id/file/535db97cf720105ffbfca7cc024a0188"
  },
  {
    "nama": "Marie jos 70ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://img.lazcdn.com/g/p/b261506ae6169be853eea025a05a3024.jpg_720x720q80.jpg"
  },
  {
    "nama": "Marina Compact Powder",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/109/MTA-117883369/br-m036969-10098_marina-compact-powder_full01-657503aa.jpg"
  },
  {
    "nama": "Marina Natural",
    "varian": "190ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnxHcli9ge6rm2UvBfQat4rpjIPwJu0uNrsOAiH_PUg&s=10"
  },
  {
    "nama": "Marina Natural",
    "varian": "95ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnxHcli9ge6rm2UvBfQat4rpjIPwJu0uNrsOAiH_PUg&s=10"
  },
  {
    "nama": "Marina White",
    "varian": "192ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PrY-0BhTORoaYf56r5WQp2J0apT5QycdF6aSaLIumA&s=10"
  },
  {
    "nama": "Marina White",
    "varian": "350ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PrY-0BhTORoaYf56r5WQp2J0apT5QycdF6aSaLIumA&s=10"
  },
  {
    "nama": "Marina White",
    "varian": "460ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PrY-0BhTORoaYf56r5WQp2J0apT5QycdF6aSaLIumA&s=10"
  },
  {
    "nama": "Marina White",
    "varian": "95ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PrY-0BhTORoaYf56r5WQp2J0apT5QycdF6aSaLIumA&s=10"
  },
  {
    "nama": "Marlboro Napoleon",
    "varian": "200ml",
    "kategori": "Parfum",
    "gambar": "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/a03e70b424314f179ddbe13730415585~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my2&from=1826719393"
  },
  {
    "nama": "Marlboro Napoleon",
    "varian": "65ml",
    "kategori": "Parfum",
    "gambar": "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/a03e70b424314f179ddbe13730415585~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my2&from=1826719393"
  },
  {
    "nama": "Marlboro pomade",
    "varian": null,
    "kategori": "Minyak Rambut",
    "gambar": "https://id-live-01.slatic.net/p/7ea22b5f1c11ffbfcf9fce8121e44942.jpg"
  },
  {
    "nama": "Mascara Maybelline",
    "varian": "Colossal",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/mascara%20Maybelline.jpg"
  },
  {
    "nama": "Mascara Maybelline",
    "varian": "Hyper Curl",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/mascara%20Maybelline.jpg"
  },
  {
    "nama": "Masker Muka Naturgo Hanasui",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh09BTGtAVotsO9c3t8ahYdIVRDAaFdwMIiAY_9vcqKg&s=10"
  },
  {
    "nama": "Masker Rambut Elips sachet",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsth38iRJrbCwKZ4j7gw8KoDJ_ixfjcfXBnqwePXGNfA&s=10"
  },
  {
    "nama": "Master kids spray cologne 80+20ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR31IVbvg9BkS5D2hEEpOV8bSnA3O64E-Egw7PH6vT-g&s=10"
  },
  {
    "nama": "Melani",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://images.tokopedia.net/img/cache/700/o3syd0/1997/1/1/383723e53d074d8cb3952b7af75bcdea~.jpeg"
  },
  {
    "nama": "Mesin Nyamuk Liquid Elektrik",
    "varian": "Hit",
    "kategori": "Obat Nyamuk",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/mesin%20nyamuk.jpg"
  },
  {
    "nama": "Mesin Nyamuk Liquid Elektrik",
    "varian": "Vape",
    "kategori": "Obat Nyamuk",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/mesin%20nyamuk.jpg"
  },
  {
    "nama": "Micellar W Garnier",
    "varian": "125ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfzixQz275Ffl11ts9QUhk_xpirf-O2PboaXXxxU2bQ&s=10"
  },
  {
    "nama": "Micellar W Garnier",
    "varian": "50ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfzixQz275Ffl11ts9QUhk_xpirf-O2PboaXXxxU2bQ&s=10"
  },
  {
    "nama": "Minyak angin gajah",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/207ed0d3a46ef8eacb054933aca2898f.jpg_720x720q80.jpg"
  },
  {
    "nama": "Minyak fanbo",
    "varian": "67pp",
    "kategori": "Parfum",
    "gambar": "https://img.lazcdn.com/g/p/262eb7bea200f62048fa27be2f11c4a5.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Minyak fanbo",
    "varian": "Gloria 13ml",
    "kategori": "Parfum",
    "gambar": "https://img.lazcdn.com/g/p/262eb7bea200f62048fa27be2f11c4a5.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Minyak fanbo",
    "varian": "Gloria 5ml",
    "kategori": "Parfum",
    "gambar": "https://img.lazcdn.com/g/p/262eb7bea200f62048fa27be2f11c4a5.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Minyak Kayu Putih Gajah kaca",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://images.tokopedia.net/img/cache/500-square/aphluv/1997/1/1/95bd9a48fbb6439e80e67619965f45cb~.jpeg"
  },
  {
    "nama": "Minyak Kayu Putih Lang",
    "varian": "120ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmvXbfh4U26qQxz-CX_fxrh0iBnyb28UAqw8z33YFzw&s=10"
  },
  {
    "nama": "Minyak Kayu Putih Lang",
    "varian": "15ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmvXbfh4U26qQxz-CX_fxrh0iBnyb28UAqw8z33YFzw&s=10"
  },
  {
    "nama": "Minyak Kayu Putih Lang",
    "varian": "210ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmvXbfh4U26qQxz-CX_fxrh0iBnyb28UAqw8z33YFzw&s=10"
  },
  {
    "nama": "Minyak Kayu Putih Lang",
    "varian": "30ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmvXbfh4U26qQxz-CX_fxrh0iBnyb28UAqw8z33YFzw&s=10"
  },
  {
    "nama": "Minyak Kayu Putih Lang",
    "varian": "60ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmvXbfh4U26qQxz-CX_fxrh0iBnyb28UAqw8z33YFzw&s=10"
  },
  {
    "nama": "Minyak Rambut",
    "varian": "Clear Men",
    "kategori": "Minyak Rambut",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/mesin%20nyamuk.jpg"
  },
  {
    "nama": "Minyak Rambut",
    "varian": "Kemiriku",
    "kategori": "Minyak Rambut",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/mesin%20nyamuk.jpg"
  },
  {
    "nama": "Minyak Rambut",
    "varian": "Naura",
    "kategori": "Minyak Rambut",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/mesin%20nyamuk.jpg"
  },
  {
    "nama": "Minyak Rambut",
    "varian": "Rita",
    "kategori": "Minyak Rambut",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/mesin%20nyamuk.jpg"
  },
  {
    "nama": "Minyak Rambut",
    "varian": "Santal",
    "kategori": "Minyak Rambut",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/mesin%20nyamuk.jpg"
  },
  {
    "nama": "Minyak Rambut",
    "varian": "Viva",
    "kategori": "Minyak Rambut",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/mesin%20nyamuk.jpg"
  },
  {
    "nama": "Minyak Rambut",
    "varian": "Vycaris",
    "kategori": "Minyak Rambut",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/mesin%20nyamuk.jpg"
  },
  {
    "nama": "Minyak rambut Gatsby sachet",
    "varian": "Pomade",
    "kategori": "Minyak Rambut",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134201-7qul5-lkam964hzau18b"
  },
  {
    "nama": "Minyak rambut Gatsby sachet",
    "varian": "WG",
    "kategori": "Minyak Rambut",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134201-7qul5-lkam964hzau18b"
  },
  {
    "nama": "Minyak rambut Tancho",
    "varian": "130g",
    "kategori": "Minyak Rambut",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoxiUVo8XZJoTU677KDYEo8gZObjzJoTfTh8Px7_8HQ&s=10"
  },
  {
    "nama": "Minyak rambut Tancho",
    "varian": "20g",
    "kategori": "Minyak Rambut",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoxiUVo8XZJoTU677KDYEo8gZObjzJoTfTh8Px7_8HQ&s=10"
  },
  {
    "nama": "Minyak rambut Tancho",
    "varian": "40g",
    "kategori": "Minyak Rambut",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoxiUVo8XZJoTU677KDYEo8gZObjzJoTfTh8Px7_8HQ&s=10"
  },
  {
    "nama": "Minyak rambut Tancho",
    "varian": "60g",
    "kategori": "Minyak Rambut",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoxiUVo8XZJoTU677KDYEo8gZObjzJoTfTh8Px7_8HQ&s=10"
  },
  {
    "nama": "Minyak Tawon",
    "varian": "CC",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KhAzGf6Nqpl6Njmr0lz-15_5oe6Tiuw5JsNIyPJnmg&s=10"
  },
  {
    "nama": "Minyak Tawon",
    "varian": "DD",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KhAzGf6Nqpl6Njmr0lz-15_5oe6Tiuw5JsNIyPJnmg&s=10"
  },
  {
    "nama": "Minyak Tawon",
    "varian": "EE",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KhAzGf6Nqpl6Njmr0lz-15_5oe6Tiuw5JsNIyPJnmg&s=10"
  },
  {
    "nama": "Minyak Tawon",
    "varian": "FF",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KhAzGf6Nqpl6Njmr0lz-15_5oe6Tiuw5JsNIyPJnmg&s=10"
  },
  {
    "nama": "Minyak zaitun mustika",
    "varian": "175ml",
    "kategori": "Kosmetik",
    "gambar": "https://khyrastore.com/wp-content/uploads/2020/09/2924676_a796cc11-f2b1-4add-afc3-4b81a792eda2_905_905.jpg"
  },
  {
    "nama": "Minyak zaitun mustika",
    "varian": "75ml",
    "kategori": "Kosmetik",
    "gambar": "https://khyrastore.com/wp-content/uploads/2020/09/2924676_a796cc11-f2b1-4add-afc3-4b81a792eda2_905_905.jpg"
  },
  {
    "nama": "Minyak Zaitun Purbasari",
    "varian": "150ml",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/e90a5f640cd47bc33db0338ca2df0705.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Minyak Zaitun Purbasari",
    "varian": "75ml",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/e90a5f640cd47bc33db0338ca2df0705.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Mitu baby cologne",
    "varian": "100ml",
    "kategori": "Baby Care",
    "gambar": "https://id-test-11.slatic.net/p/b2291e51fd005574b8394316c06296e2.jpg"
  },
  {
    "nama": "Mitu baby cologne",
    "varian": "50ml",
    "kategori": "Baby Care",
    "gambar": "https://id-test-11.slatic.net/p/b2291e51fd005574b8394316c06296e2.jpg"
  },
  {
    "nama": "Morris Eau De Parfume",
    "varian": "60ml",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/morris.jpg"
  },
  {
    "nama": "Morris Eau De Parfume",
    "varian": "70ml",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/morris.jpg"
  },
  {
    "nama": "MS Glow",
    "varian": "Cream",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/135b903e0060bda8abb88be000eb69db.png"
  },
  {
    "nama": "MS Glow",
    "varian": "Facial Wash",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/135b903e0060bda8abb88be000eb69db.png"
  },
  {
    "nama": "MS Glow",
    "varian": "Toner",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/135b903e0060bda8abb88be000eb69db.png"
  },
  {
    "nama": "MX Profesional hair serum 125ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAJHDaHgL0XpguxcTb9r_hucyrOqbpA2JCL_AhOgREQ&s=10"
  },
  {
    "nama": "My Baby Hair & body 200ml",
    "varian": null,
    "kategori": "Baby Care",
    "gambar": "https://img.lazcdn.com/g/p/7fd6f2a985590b7d4282de8da8f5a676.jpg_720x720q80.jpg"
  },
  {
    "nama": "Nivea body lotion 200ml",
    "varian": "instant glow",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrw5sPXxeUE6RjQQiEuvW9eQi1Atijbxq13G4YrQBdQ&s=10"
  },
  {
    "nama": "Nivea body lotion 200ml",
    "varian": "Night Nourish",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrw5sPXxeUE6RjQQiEuvW9eQi1Atijbxq13G4YrQBdQ&s=10"
  },
  {
    "nama": "Nivea body lotion 200ml",
    "varian": "Radiant&Smooth",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrw5sPXxeUE6RjQQiEuvW9eQi1Atijbxq13G4YrQBdQ&s=10"
  },
  {
    "nama": "Nivea body lotion 200ml",
    "varian": "repair&protect",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrw5sPXxeUE6RjQQiEuvW9eQi1Atijbxq13G4YrQBdQ&s=10"
  },
  {
    "nama": "Nivea body lotion repair&protect 100ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/b4fd5b7802e5e6d1d3f3155326dcfc3f.jpg"
  },
  {
    "nama": "Nivea body serum 180ml",
    "varian": "care&protect",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67fVKybdTa_shPVvfVm-oiD9U-dj9nRhB8nCLiNFB9Q&s=10"
  },
  {
    "nama": "Nivea body serum 180ml",
    "varian": "Hijab Cooling",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67fVKybdTa_shPVvfVm-oiD9U-dj9nRhB8nCLiNFB9Q&s=10"
  },
  {
    "nama": "Nivea body serum 180ml",
    "varian": "Instant glow",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67fVKybdTa_shPVvfVm-oiD9U-dj9nRhB8nCLiNFB9Q&s=10"
  },
  {
    "nama": "Nivea body serum 180ml",
    "varian": "Night Nourish",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67fVKybdTa_shPVvfVm-oiD9U-dj9nRhB8nCLiNFB9Q&s=10"
  },
  {
    "nama": "Nivea body serum 180ml",
    "varian": "radiant&smooth",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67fVKybdTa_shPVvfVm-oiD9U-dj9nRhB8nCLiNFB9Q&s=10"
  },
  {
    "nama": "Nivea body serum care protect 70ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirOnS2efVju_PZk9iNDLwXAWBezVHq3GiRzo27u2UzA&s=10"
  },
  {
    "nama": "Nivea deo spray men 150ml",
    "varian": null,
    "kategori": "Deodorant",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_AsO_k8VelI3YqaHiECuzf706AXSuUPmaOJWna5ehlA&s=10"
  },
  {
    "nama": "Nivea deo spray women 150ml",
    "varian": null,
    "kategori": "Deodorant",
    "gambar": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRA0sQG6_FuYIFtCbKZDlyML6l_rQ10xbd5bfK5IIO5kz6slQ-Z2zx6v4drRrwmZ6ZGZd2tBF2WNXb_JOJ9YqM0fVnDEGJ2Rbn2WQRFsCpfxT5tAmVuvg_Q&usqp=CAc"
  },
  {
    "nama": "Nivea Roll on",
    "varian": "25ml",
    "kategori": "Deodorant",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0zTRnI-Xc2isST1sbCmhl4f4_FQRIYY__5qgVoX27w&s=10"
  },
  {
    "nama": "Nivea Roll on",
    "varian": "50ml",
    "kategori": "Deodorant",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0zTRnI-Xc2isST1sbCmhl4f4_FQRIYY__5qgVoX27w&s=10"
  },
  {
    "nama": "Nota Kontan",
    "varian": "108x155mm",
    "kategori": "Alat",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//100/MTA-8496172/paperline_nota_kontan_paperline_besar_3_ply_-nk_b3_ncr-_full01_3hejm0f.jpg"
  },
  {
    "nama": "Nota Kontan",
    "varian": "160x210mm",
    "kategori": "Alat",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//100/MTA-8496172/paperline_nota_kontan_paperline_besar_3_ply_-nk_b3_ncr-_full01_3hejm0f.jpg"
  },
  {
    "nama": "Obat Kutu Peditox",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://d2qjkwm11akmwu.cloudfront.net/products/131027_29-9-2025_17-25-56.webp"
  },
  {
    "nama": "Odol Ciptadent",
    "varian": "225g",
    "kategori": "Odol",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiHPn_T4W1hFf5O9Lmm1z8vdPk6U1WklBQjSGxdlGWw&s=10"
  },
  {
    "nama": "Odol Ciptadent",
    "varian": "75g",
    "kategori": "Odol",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiHPn_T4W1hFf5O9Lmm1z8vdPk6U1WklBQjSGxdlGWw&s=10"
  },
  {
    "nama": "Odol Kodomo",
    "varian": null,
    "kategori": "Odol",
    "gambar": "https://img.lazcdn.com/g/ff/kf/S89211b15ce36400eb640281398457c1d8.jpg_720x720q80.jpg"
  },
  {
    "nama": "Odol paket anak",
    "varian": null,
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaefHrEjlF0ybdOe7r-QZfPz5B7K3bej3YDejwtrJJdg&s=10"
  },
  {
    "nama": "Odol Sasha",
    "varian": null,
    "kategori": "Odol",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/114/MTA-158477937/br-m036969-16557_sasha-toothpaste-antibacterial-150gr_full01-ed6f1b16.jpg"
  },
  {
    "nama": "Odol Sensodyne",
    "varian": "40g",
    "kategori": "Odol",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjE-fTNGmb7XjjAiGcsoMmIt0Guutshv9tOWA3H0QgqA&s=10"
  },
  {
    "nama": "OMG Sunscreen SPF 50",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb40O_f-FfwlKk96J2Tn0fxnrk2vMRvVrTJWajwXHNzg&s=10"
  },
  {
    "nama": "One man show",
    "varian": "125ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0lkIVsmOpJneEKRqemKij1UUUQ_NtRG1QfYsQoirBA&s=10"
  },
  {
    "nama": "One man show",
    "varian": "30ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0lkIVsmOpJneEKRqemKij1UUUQ_NtRG1QfYsQoirBA&s=10"
  },
  {
    "nama": "Ovale",
    "varian": "100ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF243DtaTFCIXuDICh0XmntIKK9YopssBPiUIUrzjkYg&s=10"
  },
  {
    "nama": "Ovale",
    "varian": "200ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF243DtaTFCIXuDICh0XmntIKK9YopssBPiUIUrzjkYg&s=10"
  },
  {
    "nama": "Ovale",
    "varian": "60ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF243DtaTFCIXuDICh0XmntIKK9YopssBPiUIUrzjkYg&s=10"
  },
  {
    "nama": "Pacar Chandini",
    "varian": "Besar",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/d0cccb7802ae2900e493b5ac3c27f5b0.png_720x720q80.png"
  },
  {
    "nama": "Pacar Chandini",
    "varian": "Kecil",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/d0cccb7802ae2900e493b5ac3c27f5b0.png_720x720q80.png"
  },
  {
    "nama": "Pacar Henna gollecha",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZTm0rTp1-eEEERuvkqW8a6zBY_qajIK3UHCoqQfzJBw&s=10"
  },
  {
    "nama": "Pacar Rani",
    "varian": "Besar",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-cWNfmKFIgGlTd9QeBxE2r3pi9iY8JMZ_2rSXWVM4mA&s=10"
  },
  {
    "nama": "Pacar Rani",
    "varian": "Kecil",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-cWNfmKFIgGlTd9QeBxE2r3pi9iY8JMZ_2rSXWVM4mA&s=10"
  },
  {
    "nama": "Pacar Ratu dangdut",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://i.ibb.co.com/mV5pmK82/806428.jpg"
  },
  {
    "nama": "Paket Cussons",
    "varian": "Besar",
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1v3w-rPFgpc2Ay95wtH4LDtOftY2NbvvRXctMSRaaw&s=10"
  },
  {
    "nama": "Paket Cussons",
    "varian": "Kecil",
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1v3w-rPFgpc2Ay95wtH4LDtOftY2NbvvRXctMSRaaw&s=10"
  },
  {
    "nama": "Paket Cussons",
    "varian": "Sedang",
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1v3w-rPFgpc2Ay95wtH4LDtOftY2NbvvRXctMSRaaw&s=10"
  },
  {
    "nama": "Parfum Evangeline 100ml",
    "varian": "EDC Plastik",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/evangeline.jpg"
  },
  {
    "nama": "Parfum Evangeline 100ml",
    "varian": "EDP Kaca",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/evangeline.jpg"
  },
  {
    "nama": "Parfum Marina",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfManPcrP-KQsVQoOvOe3mHlrjt3rgoeNlP7Le4khiew&s"
  },
  {
    "nama": "Parfum Master",
    "varian": "Splash cologne 150ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZ79KZK0usXAHfLV_jQnEiTUzVPa0znHfq7d_7NUcCQ&s=10"
  },
  {
    "nama": "Parfum Master",
    "varian": "Spray cologne 100ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZ79KZK0usXAHfLV_jQnEiTUzVPa0znHfq7d_7NUcCQ&s=10"
  },
  {
    "nama": "Parfum Spalding",
    "varian": "175ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdMhoJaeXfkKE2-AzKE-iZQliVkiTRmS3w3aEVj982g&s=10"
  },
  {
    "nama": "Parfum Spalding",
    "varian": "50ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdMhoJaeXfkKE2-AzKE-iZQliVkiTRmS3w3aEVj982g&s=10"
  },
  {
    "nama": "Payung Saten",
    "varian": "Besar",
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1ZtCeS4UbzCMUuPjFCkwcQX-OmKjwPsg6_9nWjU8xg&s=10"
  },
  {
    "nama": "Payung Saten",
    "varian": "Kecil",
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1ZtCeS4UbzCMUuPjFCkwcQX-OmKjwPsg6_9nWjU8xg&s=10"
  },
  {
    "nama": "Payung Saten",
    "varian": "Sedang",
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1ZtCeS4UbzCMUuPjFCkwcQX-OmKjwPsg6_9nWjU8xg&s=10"
  },
  {
    "nama": "Pembersih Kaca Cling",
    "varian": "Botol",
    "kategori": "Alat Kebersihan",
    "gambar": "https://siopen.balangankab.go.id/storage/merchant/products/2024/04/02/4ea287e9c85d83bd7184ec999a746b5c.jpg"
  },
  {
    "nama": "Pembersih Kaca Cling",
    "varian": "Refill",
    "kategori": "Alat Kebersihan",
    "gambar": "https://siopen.balangankab.go.id/storage/merchant/products/2024/04/02/4ea287e9c85d83bd7184ec999a746b5c.jpg"
  },
  {
    "nama": "Peniti swan",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://img.lazcdn.com/g/p/6e3f9977271d114d844a33dc729b6e88.jpg_720x720q80.jpg"
  },
  {
    "nama": "Pensil Alis Implora",
    "varian": "Satuan",
    "kategori": "Kosmetik",
    "gambar": "https://id-live-01.slatic.net/p/d88f97c8a735f9bb1ddd6e3ca5bf4172.jpg"
  },
  {
    "nama": "Pensil alis Viva asli",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/cc134a0f2e9899eb8daae7d99b45bc23.jpg_720x720q80.jpg"
  },
  {
    "nama": "Pentel Dot bayi",
    "varian": "Cussons",
    "kategori": "Baby Care",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/pentel%20dot.jpg"
  },
  {
    "nama": "Pentel Dot bayi",
    "varian": "Huki",
    "kategori": "Baby Care",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/pentel%20dot.jpg"
  },
  {
    "nama": "Pentel Dot bayi",
    "varian": "Huki isi 3",
    "kategori": "Baby Care",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/pentel%20dot.jpg"
  },
  {
    "nama": "Pentel Dot bayi",
    "varian": "Pigeon",
    "kategori": "Baby Care",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/pentel%20dot.jpg"
  },
  {
    "nama": "Pepsodent 75g",
    "varian": null,
    "kategori": "Odol",
    "gambar": "https://id-test-11.slatic.net/p/e31bc35c929669e31b716154dfc80c3c.jpg"
  },
  {
    "nama": "Pepsodent Herbal",
    "varian": "190g",
    "kategori": "Odol",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDVSEJwFxNq5EMhtrfdOLyswQcSFO5-68NrkOwRJ1NlfF6-aSlOJZvKGp&s=10"
  },
  {
    "nama": "Pepsodent Herbal",
    "varian": "75g",
    "kategori": "Odol",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDVSEJwFxNq5EMhtrfdOLyswQcSFO5-68NrkOwRJ1NlfF6-aSlOJZvKGp&s=10"
  },
  {
    "nama": "Pepsodent Siwak 110g",
    "varian": null,
    "kategori": "Odol",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFznm7aEalaprBRnUN1IkroK9xdV1G1nk4IRBWD3pfpQ&s=10"
  },
  {
    "nama": "Pepsodent Whitening",
    "varian": "190g",
    "kategori": "Odol",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrO4kAK28iabd_YKGqNHdrXbHn9B6k4NgdLm4G4ywhsIodc6PSkPHhfQHB&s=10"
  },
  {
    "nama": "Pepsodent Whitening",
    "varian": "75g",
    "kategori": "Odol",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrO4kAK28iabd_YKGqNHdrXbHn9B6k4NgdLm4G4ywhsIodc6PSkPHhfQHB&s=10"
  },
  {
    "nama": "Pierre Cardin",
    "varian": "150g",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4Tq--EP2kYv4AB-4Dcqo8kHNdYiJqxkBuIKNFi9vqQ&s=10"
  },
  {
    "nama": "Pierre Cardin",
    "varian": "30g",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4Tq--EP2kYv4AB-4Dcqo8kHNdYiJqxkBuIKNFi9vqQ&s=10"
  },
  {
    "nama": "Pisau Cukur Gillette",
    "varian": "Biru",
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiIx7dJzzWe8KfvoNMTAkZBhBuzChkdsrDdUJGgL5EMw&s=10"
  },
  {
    "nama": "Pisau Cukur Gillette",
    "varian": "Goal Click",
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiIx7dJzzWe8KfvoNMTAkZBhBuzChkdsrDdUJGgL5EMw&s=10"
  },
  {
    "nama": "Pisau Cukur Gillette",
    "varian": "Kuning",
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiIx7dJzzWe8KfvoNMTAkZBhBuzChkdsrDdUJGgL5EMw&s=10"
  },
  {
    "nama": "Pixy Facial Foam",
    "varian": "100g",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0BhtxnKdD-v0TgiNCoWj4ZI0STvFYWJcRK_Q_sZYXg&s=10"
  },
  {
    "nama": "Pixy Facial Foam",
    "varian": "40g",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0BhtxnKdD-v0TgiNCoWj4ZI0STvFYWJcRK_Q_sZYXg&s=10"
  },
  {
    "nama": "Pixy Micellar Water",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIuHnbv0T319WOQoy3Lrb64iRoEoL-txjbDdALxy3Hwg&s=10"
  },
  {
    "nama": "Pixy Protecting Mist",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSwoWWJkXo4dVay9A0aQ0Y8XbZ6-66FLwdyrNt6LdnA&s=10"
  },
  {
    "nama": "Pixy Stick Deodorant",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYVBD37DyBWn-MTW_x4TSzxA_RzjbNhaVpiY5nDPHnA&s=10"
  },
  {
    "nama": "Plester Kecil",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQha5TVUWtjY-tD0Sgs6Eh_OxOdJW2mgg3i3bmTvLkyRg&s=10"
  },
  {
    "nama": "Plossa",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/4f5f7665c764804abdefb0d13463349c.png"
  },
  {
    "nama": "Poise Facial Foam",
    "varian": null,
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25vNIUPd1cJetYav8O7ptMc3cqY4HIzTLcz9lXOOGzQ&s=10"
  },
  {
    "nama": "Ponds Age Miracle 10g",
    "varian": "Day",
    "kategori": "Kosmetik",
    "gambar": "https://laz-img-sg.alicdn.com/p/fca5242b53fabe0bb1b51014697cd8ca.jpg"
  },
  {
    "nama": "Ponds Age Miracle 10g",
    "varian": "Night",
    "kategori": "Kosmetik",
    "gambar": "https://laz-img-sg.alicdn.com/p/fca5242b53fabe0bb1b51014697cd8ca.jpg"
  },
  {
    "nama": "Ponds cream sachet",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/Sc77c2e79ca1e415289003cf97a3aac388.jpg"
  },
  {
    "nama": "Ponds men facial wash",
    "varian": "100ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CbdisEnIX2mwIWkESXhIUwBVrpj7_9qJpEG06lS_ag&s=10"
  },
  {
    "nama": "Ponds men facial wash",
    "varian": "50ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CbdisEnIX2mwIWkESXhIUwBVrpj7_9qJpEG06lS_ag&s=10"
  },
  {
    "nama": "Ponds Vitamin micellar water",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://images.soco.id/b4705191-2297-4c7f-b299-32ef82685b1c-image-0-1733113760283"
  },
  {
    "nama": "Popok Merries L",
    "varian": "Isi 20",
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptq6SpBk-544sWRoP898ELfY7WzDZVffMk1MNjFdRIw&s=10"
  },
  {
    "nama": "Popok Merries L",
    "varian": "Isi 30",
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptq6SpBk-544sWRoP898ELfY7WzDZVffMk1MNjFdRIw&s=10"
  },
  {
    "nama": "Popok Merries L",
    "varian": "Isi 44",
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptq6SpBk-544sWRoP898ELfY7WzDZVffMk1MNjFdRIw&s=10"
  },
  {
    "nama": "Popok Merries L",
    "varian": "Isi 8",
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptq6SpBk-544sWRoP898ELfY7WzDZVffMk1MNjFdRIw&s=10"
  },
  {
    "nama": "Popok Merries M",
    "varian": "Isi 22",
    "kategori": "Baby Care",
    "gambar": "https://img.lazcdn.com/g/p/97ac393359f9486f175371e03927eebf.jpg_720x720q80.jpg"
  },
  {
    "nama": "Popok Merries M",
    "varian": "Isi 34",
    "kategori": "Baby Care",
    "gambar": "https://img.lazcdn.com/g/p/97ac393359f9486f175371e03927eebf.jpg_720x720q80.jpg"
  },
  {
    "nama": "Popok Merries M",
    "varian": "Isi 50",
    "kategori": "Baby Care",
    "gambar": "https://img.lazcdn.com/g/p/97ac393359f9486f175371e03927eebf.jpg_720x720q80.jpg"
  },
  {
    "nama": "Popok Merries M",
    "varian": "Isi 9",
    "kategori": "Baby Care",
    "gambar": "https://img.lazcdn.com/g/p/97ac393359f9486f175371e03927eebf.jpg_720x720q80.jpg"
  },
  {
    "nama": "Popok Merries S",
    "varian": "Isi 11",
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG4-z7khbrL6pFSQdsNZDndgbATDgCDBxK0swaiMB8w&s=10"
  },
  {
    "nama": "Popok Merries S",
    "varian": "Isi 26",
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG4-z7khbrL6pFSQdsNZDndgbATDgCDBxK0swaiMB8w&s=10"
  },
  {
    "nama": "Popok Merries S",
    "varian": "Isi 40",
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG4-z7khbrL6pFSQdsNZDndgbATDgCDBxK0swaiMB8w&s=10"
  },
  {
    "nama": "Popok Merries XL",
    "varian": "Isi 16",
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGXf5caG92_Id8PszEXmcouxTPkHqbOWDDWv1vmzD5A&s=10"
  },
  {
    "nama": "Popok Merries XL",
    "varian": "Isi 26",
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGXf5caG92_Id8PszEXmcouxTPkHqbOWDDWv1vmzD5A&s=10"
  },
  {
    "nama": "Popok Merries XL",
    "varian": "Isi 38",
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGXf5caG92_Id8PszEXmcouxTPkHqbOWDDWv1vmzD5A&s=10"
  },
  {
    "nama": "Popok Merries XL",
    "varian": "Isi 7",
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGXf5caG92_Id8PszEXmcouxTPkHqbOWDDWv1vmzD5A&s=10"
  },
  {
    "nama": "Posh roll on",
    "varian": null,
    "kategori": "Deodorant",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffsHaJMS6d8H3s9ehtTmvm619e6TiN3EzeglpcpftvA&s=10"
  },
  {
    "nama": "Posh Spray 150ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT19aPNCNFDG6wA7RHZDAzvHs0R2iKkXKiF1mLMpfohg&s=10"
  },
  {
    "nama": "Puccelle Eau De Luxe",
    "varian": "100ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbuBQY-29DoCMri5Ec1ItUyQR82M8ZeIllRhyJ4NFqQ&s=10"
  },
  {
    "nama": "Puccelle Eau De Luxe",
    "varian": "50ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbuBQY-29DoCMri5Ec1ItUyQR82M8ZeIllRhyJ4NFqQ&s=10"
  },
  {
    "nama": "Puccelle Eau De Luxe Body Spray",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdYTNuP2zsYB0z34mfQjjyoYGGCRZ6W0U0a1ADown_Q&s=10"
  },
  {
    "nama": "Puccelle Mist Cologne",
    "varian": "150ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rHFmNP_if73JOaTGG6RPajBmMg1XgoTvatfF03wYMg&s=10"
  },
  {
    "nama": "Puccelle Mist Cologne",
    "varian": "75ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rHFmNP_if73JOaTGG6RPajBmMg1XgoTvatfF03wYMg&s=10"
  },
  {
    "nama": "Puccelle Splash Cologne 175ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRloClpCxQxPPpcqtLN8V8jydLzzJ_nDgXUlwKxPNtU9g&s=10"
  },
  {
    "nama": "Puteri body splash",
    "varian": "135ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0k7yss4mhNM6qgk1SOdRVqxQsoco-anGK0gdUsReJg&s=10"
  },
  {
    "nama": "Puteri body splash",
    "varian": "245ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0k7yss4mhNM6qgk1SOdRVqxQsoco-anGK0gdUsReJg&s=10"
  },
  {
    "nama": "Puteri body spray 100ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJO4zM-z8eFFxMrPf1PdCYou8Ofsemh5p63_wTCEI7w&s=10"
  },
  {
    "nama": "Putih Salju",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/ebdff4e5632c91fd6435430f318e4b01.jpg"
  },
  {
    "nama": "Rapika",
    "varian": "Botol",
    "kategori": "Alat Kebersihan",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/rapika.jpg"
  },
  {
    "nama": "Rapika",
    "varian": "Refill",
    "kategori": "Alat Kebersihan",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/rapika.jpg"
  },
  {
    "nama": "RDL Baby Face 150ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibuRLAJNJE0xzB0wrsDr-yAeThHFJvnLgiVmbyK-d-Q&s=10"
  },
  {
    "nama": "Red-A Compact powder",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaIs5GOnMJ3vXyB49WtQdQZdJ6VoOUf6Wv6HgLxg62A&s=10"
  },
  {
    "nama": "Refill Biore",
    "varian": "250ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4kX5AoTTESf8okStX3eO4RQ-X3eN2pp8V3SVLatqvhg&s=10"
  },
  {
    "nama": "Refill Biore",
    "varian": "450ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4kX5AoTTESf8okStX3eO4RQ-X3eN2pp8V3SVLatqvhg&s=10"
  },
  {
    "nama": "Refill Citra",
    "varian": "250ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3MVZ-fsC0MOD2P0HELc2LpSM8SMvJxMRb5e4Vfxeug&s=10"
  },
  {
    "nama": "Refill Citra",
    "varian": "400ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3MVZ-fsC0MOD2P0HELc2LpSM8SMvJxMRb5e4Vfxeug&s=10"
  },
  {
    "nama": "Refill Dettol",
    "varian": "200ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrz0B7gBv8nyLh6Sqw-o4GRC6IF-UdeB5b6Q_RYulbA&s=10"
  },
  {
    "nama": "Refill Dettol",
    "varian": "410ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrz0B7gBv8nyLh6Sqw-o4GRC6IF-UdeB5b6Q_RYulbA&s=10"
  },
  {
    "nama": "Refill Giv",
    "varian": "250ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUltnFs2FYF1BDztK08h618eFxM7BvlWpJggw2a4CMOg&s=10"
  },
  {
    "nama": "Refill Giv",
    "varian": "400ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUltnFs2FYF1BDztK08h618eFxM7BvlWpJggw2a4CMOg&s=10"
  },
  {
    "nama": "Refill Hit",
    "varian": "Liquid",
    "kategori": "Obat Nyamuk",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/refill%20hit.jpg"
  },
  {
    "nama": "Refill Hit",
    "varian": "Mat 18+9",
    "kategori": "Obat Nyamuk",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/refill%20hit.jpg"
  },
  {
    "nama": "Refill Hit",
    "varian": "Mat 48+6",
    "kategori": "Obat Nyamuk",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/refill%20hit.jpg"
  },
  {
    "nama": "Refill Kispray",
    "varian": "Gold",
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxzMERqQ1r-CozqSU1nWMSanFfAxsH8TIFkd7A63s8w&s=10"
  },
  {
    "nama": "Refill Kispray",
    "varian": "Violet",
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxzMERqQ1r-CozqSU1nWMSanFfAxsH8TIFkd7A63s8w&s=10"
  },
  {
    "nama": "Refill Leivy",
    "varian": "250ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWNTsOs28FjefDtDx5kUtQjG5iCRNH_PqGtpdukbz2w&s=10"
  },
  {
    "nama": "Refill Leivy",
    "varian": "450ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWNTsOs28FjefDtDx5kUtQjG5iCRNH_PqGtpdukbz2w&s=10"
  },
  {
    "nama": "Refill Leivy",
    "varian": "900ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWNTsOs28FjefDtDx5kUtQjG5iCRNH_PqGtpdukbz2w&s=10"
  },
  {
    "nama": "Refill Lifebuoy",
    "varian": "250ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwmXKnVpFXTxATyWYaE4EtVw2Uq30p02ur_NLoRhzgg&s=10"
  },
  {
    "nama": "Refill Lifebuoy",
    "varian": "400ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwmXKnVpFXTxATyWYaE4EtVw2Uq30p02ur_NLoRhzgg&s=10"
  },
  {
    "nama": "Refill Lux",
    "varian": "250ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbw4uTh_9Ihe_XtUHAmRd46YL8-HmyI02w7b9i7epwNw&s=10"
  },
  {
    "nama": "Refill Lux",
    "varian": "450ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbw4uTh_9Ihe_XtUHAmRd46YL8-HmyI02w7b9i7epwNw&s=10"
  },
  {
    "nama": "Refill Molto Pewangi 780ml",
    "varian": null,
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbM9J1P9W2uY63f62xe-FBzikPohOfoFMsqV3NR-bunA&s=10"
  },
  {
    "nama": "Refill Nuvo",
    "varian": "250ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQ0H92DGOBlDOiJvNVz6VpSi_hg6QTx0PRFPQq4A2Hw&s=10"
  },
  {
    "nama": "Refill Nuvo",
    "varian": "400ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQ0H92DGOBlDOiJvNVz6VpSi_hg6QTx0PRFPQq4A2Hw&s=10"
  },
  {
    "nama": "Refill Nuvo / Giv mini",
    "varian": null,
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-8AD-vq6dmb2DWE2lupnK1ClYnkqjIu_vvj1m1sGYg&s=10"
  },
  {
    "nama": "Refill Shinzui",
    "varian": "180ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRElmte5bD8Ey_EZ4nTckV-3TFaVr-qPcexIXdc-Nk2wA&s=10"
  },
  {
    "nama": "Refill Shinzui",
    "varian": "400ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRElmte5bD8Ey_EZ4nTckV-3TFaVr-qPcexIXdc-Nk2wA&s=10"
  },
  {
    "nama": "Refill Shinzui",
    "varian": "85ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRElmte5bD8Ey_EZ4nTckV-3TFaVr-qPcexIXdc-Nk2wA&s=10"
  },
  {
    "nama": "Refill Sleek 450ml",
    "varian": null,
    "kategori": "Alat Kebersihan",
    "gambar": "https://img.lazcdn.com/g/ff/kf/S17722ad60e724fcdad914f593588b2b1q.jpg_720x720q80.jpg"
  },
  {
    "nama": "Refill So klin lantai",
    "varian": "345ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://static-tokodaring.tisera.id/prod/images/produk_gambar/688d806f7d18e.jpeg"
  },
  {
    "nama": "Refill So klin lantai",
    "varian": "780ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://static-tokodaring.tisera.id/prod/images/produk_gambar/688d806f7d18e.jpeg"
  },
  {
    "nama": "Refill So klin pewangi 800ml",
    "varian": null,
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuNiZecI1tO25kjn9rCf0yI6pHmLK5aR3cdvaNjmtuw&s=10"
  },
  {
    "nama": "Refill Stella Matic",
    "varian": null,
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu3PDgSSJvRMZJDRuCJJvpFh1nPpJlNFC1On8HPlqGA&s=10"
  },
  {
    "nama": "Refill Vanish 150ml",
    "varian": null,
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQAG09C34PpRApbdF8_Wo22dIqYLEwf_IfSlsLwJJJEg&s=10"
  },
  {
    "nama": "Refill Vape Liquid 45 malam",
    "varian": null,
    "kategori": "Obat Nyamuk",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrjVPBhJZnxBC0-VGCFT21RdFaYulRkDeEbVoCHOAgg&s=10"
  },
  {
    "nama": "Refill Wipol",
    "varian": "200ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqssf-mqwM_qwPKjcVTwc_dmZ4P6HBsXLRoELbMuzTLgVNBJJyKtAi6hof&s=10"
  },
  {
    "nama": "Refill Wipol",
    "varian": "410ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqssf-mqwM_qwPKjcVTwc_dmZ4P6HBsXLRoELbMuzTLgVNBJJyKtAi6hof&s=10"
  },
  {
    "nama": "Refill Zen",
    "varian": "400ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmaR4DgXatQUeuzyG4oq5qcjzx-2rYt78LuUye4gX7cQ&s=10"
  },
  {
    "nama": "Refill Zen",
    "varian": "85ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmaR4DgXatQUeuzyG4oq5qcjzx-2rYt78LuUye4gX7cQ&s=10"
  },
  {
    "nama": "Refill Zwitsal hair&body 400ml",
    "varian": null,
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjqNKzwGEofo4NtLRFcYuwSfyc15Yz3WzeUeYNItWYA&s=10"
  },
  {
    "nama": "Regazza body spray 100ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_fFvPqczupe7mY8ftbJEbYuSYRt8NxtkPth1iHDneQ&s=10"
  },
  {
    "nama": "Regazza femme EDT",
    "varian": "100ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpVSCn1Q6FQH7lVC2TSrS9NY4fUMCDr3FF4Hf6jgoEQ&s=10"
  },
  {
    "nama": "Regazza femme EDT",
    "varian": "50ml",
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpVSCn1Q6FQH7lVC2TSrS9NY4fUMCDr3FF4Hf6jgoEQ&s=10"
  },
  {
    "nama": "Regazza Femme spray cologne sport 100ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJcJ7kMbyN6jfcCEL2TWMfn7WRdPmVykM4DQomus0Yw&s=10"
  },
  {
    "nama": "Rexona",
    "varian": "Matahari",
    "kategori": "Deodorant",
    "gambar": "https://id-live-01.slatic.net/p/a29fe7bb5020bf96254fa3cf9f5c025a.jpg"
  },
  {
    "nama": "Rexona",
    "varian": "Roll on",
    "kategori": "Deodorant",
    "gambar": "https://id-live-01.slatic.net/p/a29fe7bb5020bf96254fa3cf9f5c025a.jpg"
  },
  {
    "nama": "Rexona sachet",
    "varian": null,
    "kategori": "Deodorant",
    "gambar": "https://id-test-11.slatic.net/p/5c3fc737194d29c0e3aece1188de4d90.jpg"
  },
  {
    "nama": "Sabun batang",
    "varian": "Citra",
    "kategori": "Sabun",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sabun%20batang%20dws.jpg"
  },
  {
    "nama": "Sabun batang",
    "varian": "Giv",
    "kategori": "Sabun",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sabun%20batang%20dws.jpg"
  },
  {
    "nama": "Sabun batang",
    "varian": "Leivy",
    "kategori": "Sabun",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sabun%20batang%20dws.jpg"
  },
  {
    "nama": "Sabun batang",
    "varian": "Lifebuoy",
    "kategori": "Sabun",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sabun%20batang%20dws.jpg"
  },
  {
    "nama": "Sabun batang",
    "varian": "Nuvo",
    "kategori": "Sabun",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sabun%20batang%20dws.jpg"
  },
  {
    "nama": "Sabun batang",
    "varian": "Shinzui",
    "kategori": "Sabun",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sabun%20batang%20dws.jpg"
  },
  {
    "nama": "Sabun batang",
    "varian": "Temulawak",
    "kategori": "Sabun",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sabun%20batang%20dws.jpg"
  },
  {
    "nama": "Sabun batang",
    "varian": "Thai",
    "kategori": "Sabun",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sabun%20batang%20dws.jpg"
  },
  {
    "nama": "Sabun batang Bayi",
    "varian": "Cussons",
    "kategori": "Baby Care",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sabun%20batang%20bayi.jpg"
  },
  {
    "nama": "Sabun batang Bayi",
    "varian": "My baby",
    "kategori": "Baby Care",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sabun%20batang%20bayi.jpg"
  },
  {
    "nama": "Sabun batang Bayi",
    "varian": "Zwitsal",
    "kategori": "Baby Care",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sabun%20batang%20bayi.jpg"
  },
  {
    "nama": "Sabun Biore Botol",
    "varian": "100ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUJQyvZJ4f2pPaWRjV3_foZLT4dzodWMKyEfviI8low&s=10"
  },
  {
    "nama": "Sabun Biore Botol",
    "varian": "250ml",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUJQyvZJ4f2pPaWRjV3_foZLT4dzodWMKyEfviI8low&s=10"
  },
  {
    "nama": "Sabun Dr.Pure",
    "varian": null,
    "kategori": "Sabun",
    "gambar": "https://cf.shopee.co.id/file/2c8596a36882a699b63ccfc96b03392f"
  },
  {
    "nama": "Sabun Fair lovely",
    "varian": "100g",
    "kategori": "Sabun",
    "gambar": "https://cf.shopee.co.id/file/c094a362f15e84887f6750ea5915225f"
  },
  {
    "nama": "Sabun Fair lovely",
    "varian": "50g",
    "kategori": "Sabun",
    "gambar": "https://cf.shopee.co.id/file/c094a362f15e84887f6750ea5915225f"
  },
  {
    "nama": "Sabun Garnier",
    "varian": "100g",
    "kategori": "Sabun",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mdpkozlej1xr2c"
  },
  {
    "nama": "Sabun Garnier",
    "varian": "50g",
    "kategori": "Sabun",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mdpkozlej1xr2c"
  },
  {
    "nama": "Sabun Garnier Sachet",
    "varian": "Sakura UV",
    "kategori": "Sabun",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-4119296/garnier_garnier_sakura_foam_pembersih_wajah_-9_ml_-_sachet-_full02_933258ea.jpg"
  },
  {
    "nama": "Sabun Garnier Sachet",
    "varian": "Vitamin C",
    "kategori": "Sabun",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-4119296/garnier_garnier_sakura_foam_pembersih_wajah_-9_ml_-_sachet-_full02_933258ea.jpg"
  },
  {
    "nama": "Sabun IRT Tawon",
    "varian": "Asli",
    "kategori": "Sabun",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//103/MTA-9489613/bee_brand_sabun_tawon_original_import_china_bee_-_flower_brand_besar_125_gr_aroma_cendana_-_lifebuoy_-_cuci_muka_-_murah_full02_i1jt2qj0.jpg"
  },
  {
    "nama": "Sabun IRT Tawon",
    "varian": "Biasa",
    "kategori": "Sabun",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//103/MTA-9489613/bee_brand_sabun_tawon_original_import_china_bee_-_flower_brand_besar_125_gr_aroma_cendana_-_lifebuoy_-_cuci_muka_-_murah_full02_i1jt2qj0.jpg"
  },
  {
    "nama": "Sabun kodomo 200ml",
    "varian": null,
    "kategori": "Sabun",
    "gambar": "https://id-test-11.slatic.net/p/bb64a675ec89cef16f3dc2f6e8b4a53b.jpg"
  },
  {
    "nama": "Sabun Kojie San 65g",
    "varian": null,
    "kategori": "Sabun",
    "gambar": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/c829a189b84f473684df628df88a2c00~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my2&from=1826719393"
  },
  {
    "nama": "Sabun Leivy botol",
    "varian": "250ml",
    "kategori": "Sabun",
    "gambar": "https://id-live-01.slatic.net/p/3481bf9b0d022fa0a562774d6a607794.jpg"
  },
  {
    "nama": "Sabun Leivy botol",
    "varian": "500ml",
    "kategori": "Sabun",
    "gambar": "https://id-live-01.slatic.net/p/3481bf9b0d022fa0a562774d6a607794.jpg"
  },
  {
    "nama": "Sabun Lifebuoy botol",
    "varian": "100ml",
    "kategori": "Sabun",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/91/MTA-165531005/lifebuoy_lifebuoy-body-wash-botol-sabun-mandi-cair-100-ml_full02.jpg"
  },
  {
    "nama": "Sabun Lifebuoy botol",
    "varian": "250ml",
    "kategori": "Sabun",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/91/MTA-165531005/lifebuoy_lifebuoy-body-wash-botol-sabun-mandi-cair-100-ml_full02.jpg"
  },
  {
    "nama": "Sabun Lifebuoy botol",
    "varian": "500ml",
    "kategori": "Sabun",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/91/MTA-165531005/lifebuoy_lifebuoy-body-wash-botol-sabun-mandi-cair-100-ml_full02.jpg"
  },
  {
    "nama": "Sabun Metal Fortis",
    "varian": "Cucumber",
    "kategori": "Sabun",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rbk4-m8vxbwa86tjha9"
  },
  {
    "nama": "Sabun Metal Fortis",
    "varian": "Pepaya",
    "kategori": "Sabun",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rbk4-m8vxbwa86tjha9"
  },
  {
    "nama": "Sabun Mitu 2in1 Botol",
    "varian": null,
    "kategori": "Baby Care",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTcvaRENbM6kWZGaO0RPLBCT3HzkxnPPHN89hxmsWRA&s=10"
  },
  {
    "nama": "Sabun Muka Acnes",
    "varian": "100ml",
    "kategori": "Sabun",
    "gambar": "https://id-live-01.slatic.net/p/c179ecc2cd2e5523204027274e6d57ae.jpg"
  },
  {
    "nama": "Sabun Muka Acnes",
    "varian": "50ml",
    "kategori": "Sabun",
    "gambar": "https://id-live-01.slatic.net/p/c179ecc2cd2e5523204027274e6d57ae.jpg"
  },
  {
    "nama": "Sabun muka Biore Men",
    "varian": "100g",
    "kategori": "Sabun",
    "gambar": "https://sg-test-11.slatic.net/p/aa4548d93e8b03c6375a9505b84017c6.jpg"
  },
  {
    "nama": "Sabun muka Biore Men",
    "varian": "40g",
    "kategori": "Sabun",
    "gambar": "https://sg-test-11.slatic.net/p/aa4548d93e8b03c6375a9505b84017c6.jpg"
  },
  {
    "nama": "Sabun muka biore Women",
    "varian": "100g",
    "kategori": "Sabun",
    "gambar": "https://img.lazcdn.com/g/p/4a6519a91bb886b6271a899337a3110d.png_720x720q80.png"
  },
  {
    "nama": "Sabun muka biore Women",
    "varian": "40g",
    "kategori": "Sabun",
    "gambar": "https://img.lazcdn.com/g/p/4a6519a91bb886b6271a899337a3110d.png_720x720q80.png"
  },
  {
    "nama": "Sabun muka citra",
    "varian": null,
    "kategori": "Sabun",
    "gambar": "https://id-live-01.slatic.net/p/15eaddb839709642b8832d69fb255c3a.jpg"
  },
  {
    "nama": "Sabun muka Garnier Anti acne",
    "varian": "100ml",
    "kategori": "Sabun",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S4c4ea945e53d40f6a989c628d49341c24.jpg"
  },
  {
    "nama": "Sabun muka Garnier Anti acne",
    "varian": "50ml",
    "kategori": "Sabun",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S4c4ea945e53d40f6a989c628d49341c24.jpg"
  },
  {
    "nama": "Sabun muka Garnier Men",
    "varian": "100ml",
    "kategori": "Sabun",
    "gambar": "https://img.lazcdn.com/g/p/947bf4b1b79e752b06199ca8b259f170.png_720x720q80.png"
  },
  {
    "nama": "Sabun muka Garnier Men",
    "varian": "50ml",
    "kategori": "Sabun",
    "gambar": "https://img.lazcdn.com/g/p/947bf4b1b79e752b06199ca8b259f170.png_720x720q80.png"
  },
  {
    "nama": "Sabun Muka Gatsby 100g",
    "varian": null,
    "kategori": "Sabun",
    "gambar": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/8/19/5d591859-5449-4d5f-a3b8-94a920b8c471.png"
  },
  {
    "nama": "Sabun muka Kahf",
    "varian": "100ml",
    "kategori": "Sabun",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/94/MTA-161200766/kahf_kahf_face_wash_100ml_4_varian_sabun_wajah_pria_full00_6243A57F-C0F7-4198-9F67-E52F5EC828A9.jpg"
  },
  {
    "nama": "Sabun muka Kahf",
    "varian": "50ml",
    "kategori": "Sabun",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/94/MTA-161200766/kahf_kahf_face_wash_100ml_4_varian_sabun_wajah_pria_full00_6243A57F-C0F7-4198-9F67-E52F5EC828A9.jpg"
  },
  {
    "nama": "Sabun muka Nivea Men",
    "varian": "100ml",
    "kategori": "Sabun",
    "gambar": "https://id-test-11.slatic.net/p/6e11e6e4d004764c0fa16a731b1bf79b.jpg"
  },
  {
    "nama": "Sabun muka Nivea Men",
    "varian": "50ml",
    "kategori": "Sabun",
    "gambar": "https://id-test-11.slatic.net/p/6e11e6e4d004764c0fa16a731b1bf79b.jpg"
  },
  {
    "nama": "Sabun muka Nivea Women",
    "varian": "100ml",
    "kategori": "Sabun",
    "gambar": "https://img.id.my-best.com/product_images/1f3124104e381bd08a4637bb5b718517.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=2449b1c8292cd92d6daeca8757677d4b"
  },
  {
    "nama": "Sabun muka Nivea Women",
    "varian": "50ml",
    "kategori": "Sabun",
    "gambar": "https://img.id.my-best.com/product_images/1f3124104e381bd08a4637bb5b718517.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=2449b1c8292cd92d6daeca8757677d4b"
  },
  {
    "nama": "Sabun Nuvo Botol 250ml",
    "varian": null,
    "kategori": "Sabun",
    "gambar": "https://id-test-11.slatic.net/p/de4e1e9a19ac7ba86fb89e0b4569bd4a.jpg"
  },
  {
    "nama": "Sabun Pepaya",
    "varian": "Besar",
    "kategori": "Sabun",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/pepaya.jpg"
  },
  {
    "nama": "Sabun Pepaya",
    "varian": "Kecil",
    "kategori": "Sabun",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/pepaya.jpg"
  },
  {
    "nama": "Sabun Pepaya",
    "varian": "RDL",
    "kategori": "Sabun",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/pepaya.jpg"
  },
  {
    "nama": "Sabun pepaya Dolphin 250ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/89c6068b0da7c664f3bb5be01fd8b43d.jpg"
  },
  {
    "nama": "Sabun Ponds 100ml",
    "varian": "Age Miracle",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReaOH5VSyu-qsm389lYka2-wa2Fc2NbWL420Ib1e38Bw&s=10"
  },
  {
    "nama": "Sabun Ponds 100ml",
    "varian": "Hitam",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReaOH5VSyu-qsm389lYka2-wa2Fc2NbWL420Ib1e38Bw&s=10"
  },
  {
    "nama": "Sabun Ponds 100ml",
    "varian": "Niasorcinol",
    "kategori": "Sabun",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReaOH5VSyu-qsm389lYka2-wa2Fc2NbWL420Ib1e38Bw&s=10"
  },
  {
    "nama": "Sabun Ponds 50ml",
    "varian": "Hitam",
    "kategori": "Sabun",
    "gambar": "https://img.lazcdn.com/g/ff/kf/S014f0c8f0e1848c58d66d701f3843099v.jpg_360x360q80.jpg"
  },
  {
    "nama": "Sabun Ponds 50ml",
    "varian": "Niasorcinol",
    "kategori": "Sabun",
    "gambar": "https://img.lazcdn.com/g/ff/kf/S014f0c8f0e1848c58d66d701f3843099v.jpg_360x360q80.jpg"
  },
  {
    "nama": "Sabun Serai Al Hikmah",
    "varian": null,
    "kategori": "Sabun",
    "gambar": "https://cf.shopee.co.id/file/id-11134207-8224s-mhzt9u71m51c80"
  },
  {
    "nama": "Sabun Shinzui botol 225ml",
    "varian": null,
    "kategori": "Sabun",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-81ztc-megx7u75kr9c19"
  },
  {
    "nama": "SafeCare",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://d2qjkwm11akmwu.cloudfront.net/products/404119_5-8-2021_15-22-44-1665782378.webp"
  },
  {
    "nama": "Sariayu facial foam",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8_-emiuVsW5WfxIFKQ83HLP3ucdZyQnPsq9NrDxVuoZQHRq9OlHFT1L6&s=10"
  },
  {
    "nama": "Sariayu Foundation",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/c298342d8995acab535576034ce0dfaa.jpg_720x720q80.jpg_.webp"
  },
  {
    "nama": "Scarlett",
    "varian": "Cream Day",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/7703a9895adfab32f09ae3a582c02d75.jpg_720x720q80.jpg"
  },
  {
    "nama": "Scarlett",
    "varian": "Cream Night",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/7703a9895adfab32f09ae3a582c02d75.jpg_720x720q80.jpg"
  },
  {
    "nama": "Scarlett",
    "varian": "Facial foam",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/7703a9895adfab32f09ae3a582c02d75.jpg_720x720q80.jpg"
  },
  {
    "nama": "Scarlett",
    "varian": "Handbody",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/7703a9895adfab32f09ae3a582c02d75.jpg_720x720q80.jpg"
  },
  {
    "nama": "Scarlett",
    "varian": "Toner",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/7703a9895adfab32f09ae3a582c02d75.jpg_720x720q80.jpg"
  },
  {
    "nama": "Semir",
    "varian": "Bigen",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/semir.jpg"
  },
  {
    "nama": "Semir",
    "varian": "Garnier",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/semir.jpg"
  },
  {
    "nama": "Semir",
    "varian": "Hi top",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/semir.jpg"
  },
  {
    "nama": "Semir",
    "varian": "Miranda",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/semir.jpg"
  },
  {
    "nama": "Semir",
    "varian": "NYU",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/semir.jpg"
  },
  {
    "nama": "Semir",
    "varian": "Tancho Bubuk",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/semir.jpg"
  },
  {
    "nama": "Semir",
    "varian": "Tancho Cair",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/semir.jpg"
  },
  {
    "nama": "Semir",
    "varian": "Top Lady",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/semir.jpg"
  },
  {
    "nama": "Serum",
    "varian": "Garnier sachet 7.5ml",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/serum.jpg"
  },
  {
    "nama": "Serum",
    "varian": "Hanasui",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/serum.jpg"
  },
  {
    "nama": "Serum",
    "varian": "Implora",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/serum.jpg"
  },
  {
    "nama": "Shadow Implora",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUOHCQc5hgwi3qjF6-S4iEkrp3zNjyB0mlN04ZDZHQQ&s=10"
  },
  {
    "nama": "Shampoo Clear",
    "varian": "160ml",
    "kategori": "Shampoo",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lr7odb1syv5yf0"
  },
  {
    "nama": "Shampoo Clear",
    "varian": "300ml",
    "kategori": "Shampoo",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lr7odb1syv5yf0"
  },
  {
    "nama": "Shampoo Clear",
    "varian": "70ml",
    "kategori": "Shampoo",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lr7odb1syv5yf0"
  },
  {
    "nama": "Shampoo Cultusia",
    "varian": "Botol",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-8224v-mgbnr8r1t91lef"
  },
  {
    "nama": "Shampoo Cultusia",
    "varian": "Sachet",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-8224v-mgbnr8r1t91lef"
  },
  {
    "nama": "Shampoo Cussons",
    "varian": "100ml",
    "kategori": "Shampoo",
    "gambar": "https://id-live-01.slatic.net/p/cb7cdbabba7831cb30dcded114d8ec8c.png"
  },
  {
    "nama": "Shampoo Cussons",
    "varian": "50ml",
    "kategori": "Shampoo",
    "gambar": "https://id-live-01.slatic.net/p/cb7cdbabba7831cb30dcded114d8ec8c.png"
  },
  {
    "nama": "Shampoo Emeron 160ml",
    "varian": null,
    "kategori": "Shampoo",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S3b50d1a9a0284395ad4f7ca7261be529x.jpg"
  },
  {
    "nama": "Shampoo Head&Shoulders",
    "varian": "160ml",
    "kategori": "Shampoo",
    "gambar": "https://img.lazcdn.com/g/p/544e61386952f2566e3116c782ca4389.jpg_720x720q80.jpg"
  },
  {
    "nama": "Shampoo Head&Shoulders",
    "varian": "300ml",
    "kategori": "Shampoo",
    "gambar": "https://img.lazcdn.com/g/p/544e61386952f2566e3116c782ca4389.jpg_720x720q80.jpg"
  },
  {
    "nama": "Shampoo Head&Shoulders",
    "varian": "70ml",
    "kategori": "Shampoo",
    "gambar": "https://img.lazcdn.com/g/p/544e61386952f2566e3116c782ca4389.jpg_720x720q80.jpg"
  },
  {
    "nama": "Shampoo Lifebuoy",
    "varian": "170ml",
    "kategori": "Shampoo",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdgx5TiuqSvR5nPmHIuo4UajAZgsFfdYfV54cNXJa2g&s=10"
  },
  {
    "nama": "Shampoo Lifebuoy",
    "varian": "340ml",
    "kategori": "Shampoo",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdgx5TiuqSvR5nPmHIuo4UajAZgsFfdYfV54cNXJa2g&s=10"
  },
  {
    "nama": "Shampoo Lifebuoy",
    "varian": "70ml",
    "kategori": "Shampoo",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdgx5TiuqSvR5nPmHIuo4UajAZgsFfdYfV54cNXJa2g&s=10"
  },
  {
    "nama": "Shampoo Metal",
    "varian": "100ml",
    "kategori": "Shampoo",
    "gambar": "https://images.tokopedia.net/img/cache/500-square/product-1/2020/7/9/5738657/5738657_9397aeac-5604-4b92-924c-8aaafc8de4e7_1079_1079.jpg"
  },
  {
    "nama": "Shampoo Metal",
    "varian": "200ml",
    "kategori": "Shampoo",
    "gambar": "https://images.tokopedia.net/img/cache/500-square/product-1/2020/7/9/5738657/5738657_9397aeac-5604-4b92-924c-8aaafc8de4e7_1079_1079.jpg"
  },
  {
    "nama": "Shampoo Natur",
    "varian": "140ml",
    "kategori": "Shampoo",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lqw08uma3uq197"
  },
  {
    "nama": "Shampoo Natur",
    "varian": "80ml",
    "kategori": "Shampoo",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lqw08uma3uq197"
  },
  {
    "nama": "Shampoo Pantene",
    "varian": "160ml",
    "kategori": "Shampoo",
    "gambar": "https://img.lazcdn.com/g/p/cb5f498aebd4a7893f5ca543bc2c3174.jpg_720x720q80.jpg"
  },
  {
    "nama": "Shampoo Pantene",
    "varian": "70ml",
    "kategori": "Shampoo",
    "gambar": "https://img.lazcdn.com/g/p/cb5f498aebd4a7893f5ca543bc2c3174.jpg_720x720q80.jpg"
  },
  {
    "nama": "Shampoo Rejoice",
    "varian": "150ml",
    "kategori": "Shampoo",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQzNdMimCAoUQTv_RPIxi32maMkpoERgbKnuzakjkdg&s=10"
  },
  {
    "nama": "Shampoo Rejoice",
    "varian": "70ml",
    "kategori": "Shampoo",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQzNdMimCAoUQTv_RPIxi32maMkpoERgbKnuzakjkdg&s=10"
  },
  {
    "nama": "Shampoo Sachet",
    "varian": "11rb",
    "kategori": "Shampoo",
    "gambar": "https://img.lazcdn.com/g/p/6592cbdbcf1629c6078362e32ae1a31a.png_720x720q80.png"
  },
  {
    "nama": "Shampoo Sachet",
    "varian": "6rb",
    "kategori": "Shampoo",
    "gambar": "https://img.lazcdn.com/g/p/6592cbdbcf1629c6078362e32ae1a31a.png_720x720q80.png"
  },
  {
    "nama": "Shampoo Sachet isi 3",
    "varian": "Head & Shoulders",
    "kategori": "Shampoo",
    "gambar": "https://id-live-01.slatic.net/p/76c1db9c69ac8d11610b3b8a93784ba8.jpg"
  },
  {
    "nama": "Shampoo Sachet isi 3",
    "varian": "Pantene",
    "kategori": "Shampoo",
    "gambar": "https://id-live-01.slatic.net/p/76c1db9c69ac8d11610b3b8a93784ba8.jpg"
  },
  {
    "nama": "Shampoo Sunsilk",
    "varian": "160ml",
    "kategori": "Shampoo",
    "gambar": "https://img.lazcdn.com/g/p/d38f3b004b174a5c4344e8fc4148d7da.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Shampoo Sunsilk",
    "varian": "320ml",
    "kategori": "Shampoo",
    "gambar": "https://img.lazcdn.com/g/p/d38f3b004b174a5c4344e8fc4148d7da.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Shampoo Sunsilk",
    "varian": "70ml",
    "kategori": "Shampoo",
    "gambar": "https://img.lazcdn.com/g/p/d38f3b004b174a5c4344e8fc4148d7da.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Shampoo Zinc",
    "varian": "160ml",
    "kategori": "Shampoo",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TWLo_57gGzceuwI4jr17oG_9yyJYXEPtBfuHHYMAOg&s=10"
  },
  {
    "nama": "Sikat Dot Reliable",
    "varian": null,
    "kategori": "Baby Care",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//89/MTA-56192110/no-brand_sikat-cupid-botol-susu-reliable-putar_full01.jpg"
  },
  {
    "nama": "Sikat gigi Ciptadent",
    "varian": "1 kotak",
    "kategori": "Alat Kebersihan",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/96/MTA-180831812/ciptadent_sikat-gigi-ciptadent-crystal-clean_full01.jpg"
  },
  {
    "nama": "Sikat gigi Formula Diamond",
    "varian": "1 kotak",
    "kategori": "Alat Kebersihan",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S366c6fde471845bcb573ee83490f4a73Y.jpg"
  },
  {
    "nama": "Sikat Gigi Formula Lembut",
    "varian": "Isi 3",
    "kategori": "Alat Kebersihan",
    "gambar": "https://images.squarespace-cdn.com/content/v1/61f0adcd7140a649c016b88a/1690444282167-9I7EF2QTU5Y0K62CV3TY/Banner+SGF_New_Extreme+Clean+3S+.jpg?format=1000w"
  },
  {
    "nama": "Sikat Gigi Formula Lembut",
    "varian": "Satuan",
    "kategori": "Alat Kebersihan",
    "gambar": "https://images.squarespace-cdn.com/content/v1/61f0adcd7140a649c016b88a/1690444282167-9I7EF2QTU5Y0K62CV3TY/Banner+SGF_New_Extreme+Clean+3S+.jpg?format=1000w"
  },
  {
    "nama": "Sikat gigi kodomo",
    "varian": "1 kotak",
    "kategori": "Alat Kebersihan",
    "gambar": "https://arti-assets.sgp1.cdn.digitaloceanspaces.com/renyswalayanku/products/7a511498-84a0-41a4-9000-60f8e68ee4d4.jpg"
  },
  {
    "nama": "Sikat gigi systema isi 3",
    "varian": null,
    "kategori": "Alat Kebersihan",
    "gambar": "https://id-live-01.slatic.net/p/22014f916bb2298865af226d3b93c8f5.jpg"
  },
  {
    "nama": "Sikat Kawat cap kodok",
    "varian": null,
    "kategori": "Alat Kebersihan",
    "gambar": "https://img.lazcdn.com/g/p/bfe0578afffd142932ac3c056e9e7789.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Sikat kayu",
    "varian": "1 Lusin",
    "kategori": "Alat Kebersihan",
    "gambar": "https://img.lazcdn.com/g/p/52b6ecb4c0c05345327fea3663b4ca7f.jpg_720x720q80.jpg"
  },
  {
    "nama": "Sikat plastik",
    "varian": "1 Lusin",
    "kategori": "Alat Kebersihan",
    "gambar": "https://id-live-01.slatic.net/p/9343ed609a6453e3989674d5dc2e8490.jpg"
  },
  {
    "nama": "Sikat plastik Gagang",
    "varian": null,
    "kategori": "Alat Kebersihan",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//100/MTA-36936702/oem_oem_full01.jpg"
  },
  {
    "nama": "Silet",
    "varian": "Goal",
    "kategori": "Alat",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/silet.jpg"
  },
  {
    "nama": "Silet",
    "varian": "London",
    "kategori": "Alat",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/silet.jpg"
  },
  {
    "nama": "Silet",
    "varian": "Tatra",
    "kategori": "Alat",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/silet.jpg"
  },
  {
    "nama": "Sisir Karakter",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://media.karousell.com/media/photos/products/2023/5/26/sisir_fancy_karakter__sisir_ga_1685114727_ccb6d2a0_progressive.jpg"
  },
  {
    "nama": "Sisir kutu",
    "varian": "Besi",
    "kategori": "Alat",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sisir%20kutu.jpg"
  },
  {
    "nama": "Sisir kutu",
    "varian": "Kayu",
    "kategori": "Alat",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/sisir%20kutu.jpg"
  },
  {
    "nama": "Sisir Plastik Coklat",
    "varian": "Kecil",
    "kategori": "Alat",
    "gambar": "https://img.lazcdn.com/g/p/09f9a60765ce86177280662c12b1ef07.jpg_720x720q80.jpg"
  },
  {
    "nama": "So klin lantai botol",
    "varian": "450ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://img.mbizmarket.co.id/products/thumbs/800x800/2023/03/07/084d60d7a987d097525b004a013ab30e.jpg"
  },
  {
    "nama": "So klin lantai botol",
    "varian": "900ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://img.mbizmarket.co.id/products/thumbs/800x800/2023/03/07/084d60d7a987d097525b004a013ab30e.jpg"
  },
  {
    "nama": "So Klin Pemutih",
    "varian": "1 Liter",
    "kategori": "Alat Kebersihan",
    "gambar": "https://img.lazcdn.com/g/p/f57dcce3d8f170496e7184d58f8f34bf.jpg_720x720q80.jpg"
  },
  {
    "nama": "So Klin Pemutih",
    "varian": "220ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://img.lazcdn.com/g/p/f57dcce3d8f170496e7184d58f8f34bf.jpg_720x720q80.jpg"
  },
  {
    "nama": "So Klin Pemutih",
    "varian": "500ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://img.lazcdn.com/g/p/f57dcce3d8f170496e7184d58f8f34bf.jpg_720x720q80.jpg"
  },
  {
    "nama": "Soffell lotion nyamuk",
    "varian": null,
    "kategori": "Obat Nyamuk",
    "gambar": "https://id-live-01.slatic.net/p/d1a81afd85321c9b5f8dad6e59cd4afc.jpg"
  },
  {
    "nama": "Softex Laurier",
    "varian": "Isi 20",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134211-7ra0o-mbnbldy3poif38"
  },
  {
    "nama": "Softex Laurier",
    "varian": "Isi 8",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134211-7ra0o-mbnbldy3poif38"
  },
  {
    "nama": "Softex Laurier Wing",
    "varian": "Isi 20",
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-14088329/laurier_laurier_active_day_x-tra_maxi_wing_30-s_full03_ervraa78.jpeg"
  },
  {
    "nama": "Softex Laurier Wing",
    "varian": "Isi 8",
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-14088329/laurier_laurier_active_day_x-tra_maxi_wing_30-s_full03_ervraa78.jpeg"
  },
  {
    "nama": "Spidol Permanen",
    "varian": null,
    "kategori": "Alat",
    "gambar": "https://img.lazcdn.com/g/p/71ab9e9f062f4fca35eb2db991021288.jpg_720x720q80.jpg"
  },
  {
    "nama": "Spons Candy",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://id-live-01.slatic.net/p/8099dc699abee9b59d0b4183b201b52d.png"
  },
  {
    "nama": "Spons fanbo",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4J8CWkhPj4hTSsC8ifgHXfUW232JMvMQyFTm8jZRSNunvhI0RRAj_FCit&s=10"
  },
  {
    "nama": "Spons mandi",
    "varian": "20g",
    "kategori": "Alat Kebersihan",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/spons%20mandi.jpg"
  },
  {
    "nama": "Spons mandi",
    "varian": "30g",
    "kategori": "Alat Kebersihan",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/spons%20mandi.jpg"
  },
  {
    "nama": "Spons mandi",
    "varian": "Dahlia",
    "kategori": "Alat Kebersihan",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/spons%20mandi.jpg"
  },
  {
    "nama": "Spons piring Jaring",
    "varian": null,
    "kategori": "Alat Kebersihan",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7qul0-lism6xqfy7x23c"
  },
  {
    "nama": "Spons x-pert",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://cf.shopee.co.id/file/67609a89cb48575682279214b1cca731"
  },
  {
    "nama": "Staples",
    "varian": "Kecil",
    "kategori": "Alat",
    "gambar": "https://siopen.balangankab.go.id/storage/merchant/products/2024/04/24/5fad1c60f85a0383a18c72f750cdba65.jpg"
  },
  {
    "nama": "Stella gantung",
    "varian": "All in One",
    "kategori": "Alat Kebersihan",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/stella.jpg"
  },
  {
    "nama": "Stella gantung",
    "varian": "Bathroom",
    "kategori": "Alat Kebersihan",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/stella.jpg"
  },
  {
    "nama": "Stella gantung",
    "varian": "Lemari",
    "kategori": "Alat Kebersihan",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/stella.jpg"
  },
  {
    "nama": "Stella Kaleng",
    "varian": "200ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://static-tokodaring.tisera.id/prod/images/produk_gambar/687f1bbd9a897.jpg"
  },
  {
    "nama": "Stella Kaleng",
    "varian": "400ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://static-tokodaring.tisera.id/prod/images/produk_gambar/687f1bbd9a897.jpg"
  },
  {
    "nama": "Sumber Ayu",
    "varian": "200ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa84njxBKyzp5ipbq0L0xJQrnsESj1DLEpKEIyu4k_ew&s=10"
  },
  {
    "nama": "Sumber Ayu",
    "varian": "50ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa84njxBKyzp5ipbq0L0xJQrnsESj1DLEpKEIyu4k_ew&s=10"
  },
  {
    "nama": "Sumber Ayu",
    "varian": "90ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa84njxBKyzp5ipbq0L0xJQrnsESj1DLEpKEIyu4k_ew&s=10"
  },
  {
    "nama": "Sumber Ayu",
    "varian": "Kotak 50ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa84njxBKyzp5ipbq0L0xJQrnsESj1DLEpKEIyu4k_ew&s=10"
  },
  {
    "nama": "Sun Screen Hanasui",
    "varian": "SPF 30",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/267152f90842c75047161c749f6b6bcf.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Sun Screen Hanasui",
    "varian": "SPF 50",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/267152f90842c75047161c749f6b6bcf.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Suncreen Implora",
    "varian": "SPF 40",
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//88/MTA-70305242/implora_implora_-_perfect_shield_sunscreen_spf_40_pa----_-_sunscreen_implora_full07_l317bi3q.jpg"
  },
  {
    "nama": "Sunlight",
    "varian": "210ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-tueiqU_ZKBiKBNFXvPoMOwF2_jXuKHDUPeXZQd1QDBVwu0mCkzlDcYC3os2Ul9-3MtoULLadLHl8igPjwgvOxkgJdZkUp2sOmva08h82&usqp=CAc"
  },
  {
    "nama": "Sunlight",
    "varian": "420ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-tueiqU_ZKBiKBNFXvPoMOwF2_jXuKHDUPeXZQd1QDBVwu0mCkzlDcYC3os2Ul9-3MtoULLadLHl8igPjwgvOxkgJdZkUp2sOmva08h82&usqp=CAc"
  },
  {
    "nama": "Sunscreen Azarine 40ml",
    "varian": "SPF 35",
    "kategori": "Kosmetik",
    "gambar": "https://p16-lemon8-sign-sg.tiktokcdn.com/tos-alisg-v-a3e477-sg/3e02f9968b254750a868dd30909874a2~tplv-sdweummd6v-text-logo-v1:QG5pZGEuaGFuaWZhaA==:q75.jpeg?lk3s=c7f08e79&source=lemon8_seo&x-expires=1771351200&x-signature=8t5o4mDpHDMIm9RUcZJe2Nk1IbY%3D"
  },
  {
    "nama": "Sunscreen Azarine 40ml",
    "varian": "SPF 50",
    "kategori": "Kosmetik",
    "gambar": "https://p16-lemon8-sign-sg.tiktokcdn.com/tos-alisg-v-a3e477-sg/3e02f9968b254750a868dd30909874a2~tplv-sdweummd6v-text-logo-v1:QG5pZGEuaGFuaWZhaA==:q75.jpeg?lk3s=c7f08e79&source=lemon8_seo&x-expires=1771351200&x-signature=8t5o4mDpHDMIm9RUcZJe2Nk1IbY%3D"
  },
  {
    "nama": "Sunscreen Azarine SPF 45",
    "varian": "30ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lwi95qrj1926c4"
  },
  {
    "nama": "Sunscreen Azarine SPF 45",
    "varian": "50ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lwi95qrj1926c4"
  },
  {
    "nama": "Sunscreen Madame Gie",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/109/MTA-94893309/_brd-20220_madame-gie-madame-protect-me-sunscreen-spf-30-pa-60ml_full01.jpg"
  },
  {
    "nama": "Sunscreen OMG SPF 50",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7ra0t-mdiqdi3kbfdb04"
  },
  {
    "nama": "Sunscreen Wardah SPF 35",
    "varian": "Acne Calm",
    "kategori": "Kosmetik",
    "gambar": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/4775ee4a3e8e436f83fd7d9b6e217a20~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393"
  },
  {
    "nama": "Sunscreen Wardah SPF 35",
    "varian": "Vit.C",
    "kategori": "Kosmetik",
    "gambar": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/4775ee4a3e8e436f83fd7d9b6e217a20~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393"
  },
  {
    "nama": "Sunscreen Wardah SPF 50",
    "varian": "Acne Calming 40ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWE8JNkWxnyt7eceK6DlULmGLiaJX9cq3y5NFSeW33QtsYaPOPbsy_SDO&s=10"
  },
  {
    "nama": "Sunscreen Wardah SPF 50",
    "varian": "Airy Smooth 25ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWE8JNkWxnyt7eceK6DlULmGLiaJX9cq3y5NFSeW33QtsYaPOPbsy_SDO&s=10"
  },
  {
    "nama": "Sunscreen Wardah SPF 50",
    "varian": "Aqua Fresh 30ml",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWE8JNkWxnyt7eceK6DlULmGLiaJX9cq3y5NFSeW33QtsYaPOPbsy_SDO&s=10"
  },
  {
    "nama": "Sunscreen Wardah SPF 50",
    "varian": "UV Sport",
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWE8JNkWxnyt7eceK6DlULmGLiaJX9cq3y5NFSeW33QtsYaPOPbsy_SDO&s=10"
  },
  {
    "nama": "Tabac kaleng 200ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WRsUTznlJcGmsJDx1aHBTkJ305HMaXA30rfBFDdIf6a3ebci9Z6wsnFQ&s=10"
  },
  {
    "nama": "Telon Lang",
    "varian": "100ml",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m18d06eurt8ve7"
  },
  {
    "nama": "Telon Lang",
    "varian": "15ml",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m18d06eurt8ve7"
  },
  {
    "nama": "Telon Lang",
    "varian": "30ml",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m18d06eurt8ve7"
  },
  {
    "nama": "Telon Lang",
    "varian": "60ml",
    "kategori": "Baby Care",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m18d06eurt8ve7"
  },
  {
    "nama": "Telon My baby",
    "varian": "150ml",
    "kategori": "Baby Care",
    "gambar": "https://i0.wp.com/rajasusu.com/wp-content/uploads/2019/04/my-baby-145-ml.jpg?fit=300%2C300&ssl=1"
  },
  {
    "nama": "Telon My baby",
    "varian": "60ml",
    "kategori": "Baby Care",
    "gambar": "https://i0.wp.com/rajasusu.com/wp-content/uploads/2019/04/my-baby-145-ml.jpg?fit=300%2C300&ssl=1"
  },
  {
    "nama": "Telon My baby",
    "varian": "90ml",
    "kategori": "Baby Care",
    "gambar": "https://i0.wp.com/rajasusu.com/wp-content/uploads/2019/04/my-baby-145-ml.jpg?fit=300%2C300&ssl=1"
  },
  {
    "nama": "Tempat bedak bayi Anti pecah",
    "varian": null,
    "kategori": "Baby Care",
    "gambar": "https://id-test-11.slatic.net/p/b33deb3e76c43c5ada41774d9bbf1084.jpg"
  },
  {
    "nama": "Tempat Bedak Bayi Biasa",
    "varian": null,
    "kategori": "Baby Care",
    "gambar": "https://www.adikbayishop.com/image-product/img1841-1624270227.jpg"
  },
  {
    "nama": "Thai",
    "varian": "Body Wash",
    "kategori": "Sabun",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasj-m1z5vwuxh9603c"
  },
  {
    "nama": "Thai",
    "varian": "Handybody Lotion",
    "kategori": "Sabun",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rasj-m1z5vwuxh9603c"
  },
  {
    "nama": "Timungan",
    "varian": "Besar",
    "kategori": "Kosmetik",
    "gambar": "https://cf.shopee.co.id/file/id-11134207-7rbk7-m7fzhgp2vmx06b"
  },
  {
    "nama": "Tisu",
    "varian": "Jolly Kecil",
    "kategori": "Alat Kebersihan",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/tisu.jpg"
  },
  {
    "nama": "Tisu",
    "varian": "paseo isi 6",
    "kategori": "Alat Kebersihan",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/tisu.jpg"
  },
  {
    "nama": "Tisu Basah Mitu",
    "varian": "Botol",
    "kategori": "Baby Care",
    "gambar": "https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/57ea1a7fc75446a9b312b640e6ee165c~.jpeg"
  },
  {
    "nama": "Tisu Basah Mitu",
    "varian": "Refill Isi 2",
    "kategori": "Baby Care",
    "gambar": "https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/57ea1a7fc75446a9b312b640e6ee165c~.jpeg"
  },
  {
    "nama": "Toner brightening Mustika Ratu",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/c509232fc9546dda28cceb70526158b9.jpg"
  },
  {
    "nama": "Toner Viva",
    "varian": "Milk Bengkoang",
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//113/MTA-27993569/viva_cosmetics_viva_face_tonic_toner_lemon_spirulina_cucumber_astringent_green_tea_bengkuang_original_air_mawar_full01_kt6uue6r.jpg"
  },
  {
    "nama": "Toner Viva",
    "varian": "Milk Green Tea",
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//113/MTA-27993569/viva_cosmetics_viva_face_tonic_toner_lemon_spirulina_cucumber_astringent_green_tea_bengkuang_original_air_mawar_full01_kt6uue6r.jpg"
  },
  {
    "nama": "Toner Viva",
    "varian": "Tonic/Milk",
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//113/MTA-27993569/viva_cosmetics_viva_face_tonic_toner_lemon_spirulina_cucumber_astringent_green_tea_bengkuang_original_air_mawar_full01_kt6uue6r.jpg"
  },
  {
    "nama": "Tull Jye",
    "varian": "Cream Day+Night",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/tull%20jye.jpg"
  },
  {
    "nama": "Tull Jye",
    "varian": "Washing",
    "kategori": "Kosmetik",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/tull%20jye.jpg"
  },
  {
    "nama": "U.B Gingseng",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/Sab7298b2938e4aefa3e7cca01f7b70d0p.jpg"
  },
  {
    "nama": "Vape Semprot",
    "varian": "Besar",
    "kategori": "Obat Nyamuk",
    "gambar": "https://id-live-01.slatic.net/p/dcef16adde6ba852822df95f6cf59cb9.jpg"
  },
  {
    "nama": "Vape Semprot",
    "varian": "Mini",
    "kategori": "Obat Nyamuk",
    "gambar": "https://id-live-01.slatic.net/p/dcef16adde6ba852822df95f6cf59cb9.jpg"
  },
  {
    "nama": "Vaseline B3",
    "varian": "100ml",
    "kategori": "Kosmetik",
    "gambar": "https://image.astronauts.cloud/product-images/2024/10/8999999719418VaselineLotionHealthyBrightUvExtraBrigtheningBodyLotion200ml1_d4091fd8-b972-408f-ac2d-0d449136aef8_900x900.png"
  },
  {
    "nama": "Vaseline B3",
    "varian": "200ml",
    "kategori": "Kosmetik",
    "gambar": "https://image.astronauts.cloud/product-images/2024/10/8999999719418VaselineLotionHealthyBrightUvExtraBrigtheningBodyLotion200ml1_d4091fd8-b972-408f-ac2d-0d449136aef8_900x900.png"
  },
  {
    "nama": "Vaseline Gel 50ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1660211330_vaseline_repairing_petroleum_jelly_50_ml"
  },
  {
    "nama": "Vaseline soft+glow gluta vitamin 180ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134201-7r98r-looxqy9146wg91"
  },
  {
    "nama": "Vaseline SPF",
    "varian": "100ml",
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/97/MTA-154159053/br-m036969-03437_vaseline-100ml-healthy-bright-hand-body-lotion-spf-24-melembabkan-kulit_full02-ce0c42cb.jpg"
  },
  {
    "nama": "Vaseline SPF",
    "varian": "200ml",
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/97/MTA-154159053/br-m036969-03437_vaseline-100ml-healthy-bright-hand-body-lotion-spf-24-melembabkan-kulit_full02-ce0c42cb.jpg"
  },
  {
    "nama": "Veet pencabut bulu 25g",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rash-m3vtfi838lnkd0"
  },
  {
    "nama": "Vitalis",
    "varian": "Eau De Glamour hijab chic 100ml",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/vitalis.jpg"
  },
  {
    "nama": "Vitalis",
    "varian": "Eau de Joie",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/vitalis.jpg"
  },
  {
    "nama": "Vitalis",
    "varian": "eu de naturel kaca 100ml",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/vitalis.jpg"
  },
  {
    "nama": "Vitalis",
    "varian": "exotic body scent 100ml",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/vitalis.jpg"
  },
  {
    "nama": "Vitalis",
    "varian": "Sparkle EDT 100ml",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/vitalis.jpg"
  },
  {
    "nama": "Vitalis body scent",
    "varian": "120ml",
    "kategori": "Parfum",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lv92ks0hrh9oc7"
  },
  {
    "nama": "Vitalis body scent",
    "varian": "60ml",
    "kategori": "Parfum",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lv92ks0hrh9oc7"
  },
  {
    "nama": "Vitalis EDT",
    "varian": "100ml",
    "kategori": "Parfum",
    "gambar": "https://laz-img-sg.alicdn.com/p/c11e65e42767de0e7a67f162779881f4.jpg"
  },
  {
    "nama": "Vitalis EDT",
    "varian": "50ml",
    "kategori": "Parfum",
    "gambar": "https://laz-img-sg.alicdn.com/p/c11e65e42767de0e7a67f162779881f4.jpg"
  },
  {
    "nama": "Viva Compact Powder",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/19/31794097-53dc-4069-af6f-bd26b00a2eab.jpg"
  },
  {
    "nama": "Viva eye liner Matic",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S21f130a8b8c843879fbe15eb8ec46a05a.jpg"
  },
  {
    "nama": "Viva Handbody 550ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//103/MTA-22644688/viva_cosmetics_viva_hand_-_body_lotion_bengkuang_550_ml_full01_cffir8w5.jpg"
  },
  {
    "nama": "Viva Liquid",
    "varian": "Foundation",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/1ac3afd6e83f931d43daab2f71228292.jpg_720x720q80.jpg"
  },
  {
    "nama": "Viva Liquid",
    "varian": "Pelembab",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/1ac3afd6e83f931d43daab2f71228292.jpg_720x720q80.jpg"
  },
  {
    "nama": "Viva Sachet",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://akcdn.detik.net.id/visual/2021/10/27/foto-bedak-sachet-viva-cuma-seribuan-murah-tapi-nggak-murahan-ini-deretan-manfaatnya-untuk-kecantikanviva-cosmetics_11.png?w=480&q=90"
  },
  {
    "nama": "Viva Skin food 30g",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/498325fcee5caf603d1ab7fb84c1cda7.jpg"
  },
  {
    "nama": "Vivelle Body Spray 150ml",
    "varian": null,
    "kategori": "Parfum",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/116/MTA-158769548/brd-03895_vivelle-deodorant-body-spray-150ml-parfum_full01-2b668dd7.jpg"
  },
  {
    "nama": "Vivelle EDT",
    "varian": "Glass 100ml",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/vivel.jpg"
  },
  {
    "nama": "Vivelle EDT",
    "varian": "Scent 100ml",
    "kategori": "Parfum",
    "gambar": "https://raw.githubusercontent.com/syafiizaa/katalog/refs/heads/main/img/vivel.jpg"
  },
  {
    "nama": "Vixal",
    "varian": "160ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsztQQTIXKph8KJpjsLruIZe9TcUadmEPJO8CkSnEbj1kiYdp0lRHysGZa&s=10"
  },
  {
    "nama": "Vixal",
    "varian": "470ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsztQQTIXKph8KJpjsLruIZe9TcUadmEPJO8CkSnEbj1kiYdp0lRHysGZa&s=10"
  },
  {
    "nama": "Vixal",
    "varian": "750ml",
    "kategori": "Alat Kebersihan",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsztQQTIXKph8KJpjsLruIZe9TcUadmEPJO8CkSnEbj1kiYdp0lRHysGZa&s=10"
  },
  {
    "nama": "Wardah aloe gel multifunction 100ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/ff260a760a37c1553616ef4201145644.png_960x960q80.png_.webp"
  },
  {
    "nama": "Wardah aloe vera facial wash",
    "varian": "100ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98q-luono0qle8tjdd"
  },
  {
    "nama": "Wardah aloe vera facial wash",
    "varian": "60ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98q-luono0qle8tjdd"
  },
  {
    "nama": "Wardah body mist 100ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/d537e960398f127c5f9a854e8b43f8f2.jpg_720x720q80.jpg"
  },
  {
    "nama": "Wardah C-defense creamy wash",
    "varian": "100ml",
    "kategori": "Kosmetik",
    "gambar": "https://c.alfagift.id/product/1/1_A6794790001131_20240829144254043_base.jpg"
  },
  {
    "nama": "Wardah C-defense creamy wash",
    "varian": "60ml",
    "kategori": "Kosmetik",
    "gambar": "https://c.alfagift.id/product/1/1_A6794790001131_20240829144254043_base.jpg"
  },
  {
    "nama": "Wardah C-defense DD cream",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/93/MTA-153365330/br-m036969-03522_wardah-c-defense-dd-cream-20ml_full03-55830680.jpg"
  },
  {
    "nama": "Wardah C-defense serum 17ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-24500331/wardah_wardah_c_defence_serum_-17_ml-_full02_20058a40.jpg"
  },
  {
    "nama": "Wardah colorfit perfect glow cushion 15g",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rash-m37jonp4cov025"
  },
  {
    "nama": "Wardah colorfit Velvet powder foundation 11g",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lr608zoqs89977"
  },
  {
    "nama": "Wardah Crystal Secret cream 15g",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/ff/kf/S97a4d8168c354731a669af2b359fbfecr.jpg_720x720q80.jpg"
  },
  {
    "nama": "Wardah Crystal Secret cream 30g",
    "varian": "Day",
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-60741030/wardah_wardah_crystal_secret_brightening_day_cream_30gr_-white_secret_day_cream_full01_svm41oxh.jpg"
  },
  {
    "nama": "Wardah Crystal Secret foaming cleanser 100ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlsWBgOkmMZpLV2ch1fV4H_-WrwVGJZ1zN2ddihaHVSTIWTVWEVmxvS-A&s=10"
  },
  {
    "nama": "Wardah Crystal Secret serum 20ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/b5d6f8113b2d8d9f001dab7981ef6fca.jpg"
  },
  {
    "nama": "Wardah exclusive",
    "varian": "Refill",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/d895794c9c5aa2f03618c5b76aca62f5.jpg"
  },
  {
    "nama": "Wardah exclusive",
    "varian": "Two way cake",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/d895794c9c5aa2f03618c5b76aca62f5.jpg"
  },
  {
    "nama": "Wardah exclusive creamy foundation 02 12g",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/9664b12b713039687ef4aca0c69dbaab.jpg"
  },
  {
    "nama": "Wardah exclusive flawless cover cushion 15g",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/shop/8f9a7a6b8bbf92576f1af121b0fbe92b.jpeg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Wardah Exlusive matte lip cream",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://d2jlkn4m127vak.cloudfront.net/medias/articles/medias-2-1689093134.webp"
  },
  {
    "nama": "Wardah eye expert",
    "varian": "Expert Mascara",
    "kategori": "Kosmetik",
    "gambar": "https://bimg.akulaku.net/goods/spu/3930679a0f064afcb80ad24096b60f050490.jpg?w=726&q=80&fit=1"
  },
  {
    "nama": "Wardah eye expert",
    "varian": "Perfectcurl Mascara",
    "kategori": "Kosmetik",
    "gambar": "https://bimg.akulaku.net/goods/spu/3930679a0f064afcb80ad24096b60f050490.jpg?w=726&q=80&fit=1"
  },
  {
    "nama": "Wardah Eye Expert optimum liner",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://d2jlkn4m127vak.cloudfront.net/medias/products/slides-2-1656144338.webp"
  },
  {
    "nama": "Wardah Face mist",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/26e48e2fd3517118a184f10a392179b3.png_720x720q80.png"
  },
  {
    "nama": "Wardah Lightening BB cream SFP 32 15ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS969syjQV3mz_oPyGKseV72DS46IqZW_NTUyv4UFf1aJnFbCft4OaEuBEc&s=10"
  },
  {
    "nama": "Wardah Lightening Concealer 6g",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/42b21af2f8085c48a14c02d9babc0ada.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Wardah lightening cream 20ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/cbb46922c577e334fc15fff1fcfafa31.jpg"
  },
  {
    "nama": "Wardah lightening cream 30ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/ff/kf/S3016c0e4b5d1482c98510de2d16a9f6dx.jpg_720x720q80.jpg"
  },
  {
    "nama": "Wardah lightening face toner 125ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/8bb3251f51f37a819f52d9a1cbfe1bc4.jpg"
  },
  {
    "nama": "Wardah lightening gentle wash",
    "varian": "100ml",
    "kategori": "Kosmetik",
    "gambar": "https://favo.id/cdn/shop/products/WARWAJ1011_Wardah-Lightening-Micellar-Gentle-Wash---100-mL.jpg?v=1757321327"
  },
  {
    "nama": "Wardah lightening gentle wash",
    "varian": "50ml",
    "kategori": "Kosmetik",
    "gambar": "https://favo.id/cdn/shop/products/WARWAJ1011_Wardah-Lightening-Micellar-Gentle-Wash---100-mL.jpg?v=1757321327"
  },
  {
    "nama": "Wardah lightening matte powder 20g",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://filebroker-cdn.lazada.co.id/kf/S10fbfe3f71894d62ac47b6c187082962R.jpg"
  },
  {
    "nama": "Wardah Lightening micellar water",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7qul9-ljm861unoybz1f"
  },
  {
    "nama": "Wardah lightening powder foundation",
    "varian": "Kaca",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/360d0dd24dc2f74e56d3978dd59db193.jpg"
  },
  {
    "nama": "Wardah lightening powder foundation",
    "varian": "Refill",
    "kategori": "Kosmetik",
    "gambar": "https://id-test-11.slatic.net/p/360d0dd24dc2f74e56d3978dd59db193.jpg"
  },
  {
    "nama": "Wardah lightening serum ampoule",
    "varian": "30ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/cb51b9ef70ff24749e9ca34101fded64"
  },
  {
    "nama": "Wardah lightening serum ampoule",
    "varian": "8ml",
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/cb51b9ef70ff24749e9ca34101fded64"
  },
  {
    "nama": "Wardah luminous",
    "varian": "Refill",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/ff/kf/S8751468261324e55b79520270ea61263g.jpg_720x720q80.jpg"
  },
  {
    "nama": "Wardah luminous",
    "varian": "Two way cake",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/ff/kf/S8751468261324e55b79520270ea61263g.jpg_720x720q80.jpg"
  },
  {
    "nama": "Wardah Luminous Face Powder 30g",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/9/27/c5e28274-df68-40a0-99d0-b565b16a7a6a.jpg"
  },
  {
    "nama": "Wardah Luminous Liquid Foundation 35ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/101/MTA-153145379/br-m036969-03522_wardah-everyday-luminous-liquid-foundation-40ml-alas-bedak-untuk-kulit-berminyak_full02-908b096e.jpg"
  },
  {
    "nama": "Wardah perfect bright C.Foam",
    "varian": "100ml",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/6394fa82c7ded22c521172b7c692e4e0.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Wardah perfect bright C.Foam",
    "varian": "50ml",
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/6394fa82c7ded22c521172b7c692e4e0.jpg_960x960q80.jpg_.webp"
  },
  {
    "nama": "Wardah Perfect Bright Cream",
    "varian": "Oil Control",
    "kategori": "Kosmetik",
    "gambar": "https://favo.id/cdn/shop/products/WARWAJ1020_Wardah-Perfect-Bright-Moisturizer-SPF-28---20-mL-new-packaging_4625c5cd-35dc-428f-8b48-51ba50a1eab3.jpg?v=1757321323"
  },
  {
    "nama": "Wardah Perfect Bright micellar water 100ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://images.soco.id/98468dab-475c-4224-bb4a-c7cd2bf9ece9-image-2-1724210730859"
  },
  {
    "nama": "Wardah renew you cream 15g",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://cf.shopee.co.id/file/sg-11134201-22120-kspkrwnqxtkva4"
  },
  {
    "nama": "Wardah renew you cream 30g",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/6852f48d654e987395af0e2ad5c11268.jpg_720x720q80.jpg"
  },
  {
    "nama": "Wardah renew you facial wash 100ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://down-id.img.susercontent.com/file/id-11134207-7rase-m1c2qpepimclad"
  },
  {
    "nama": "Wardah renew you intensive serum 15ml",
    "varian": null,
    "kategori": "Kosmetik",
    "gambar": "https://img.lazcdn.com/g/p/ad19b1f61adb5270f3aa364d63ea3834.jpg_720x720q80.jpg"
  },
  {
    "nama": "Wipol botol 450ml",
    "varian": null,
    "kategori": "Alat Kebersihan",
    "gambar": "https://media.monotaro.id/mid01/big/Alat%20%26%20Kebutuhan%20Kebersihan/Pembersih%20Lantai/Pembersih%20Serbaguna/Wipol%20Karbol%20Cemara/Wipol%20Karbol%20Cemara%20Bottle%20450ml%201pc/3jS031990127-2.jpg"
  },
  {
    "nama": "Zwitsal 2in1",
    "varian": "100ml",
    "kategori": "Baby Care",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//95/MTA-79351232/zwitsal_perawatan_bayi_-_zwitsal_baby_bath_minyak_telon_full31_ht59infg.jpg"
  },
  {
    "nama": "Zwitsal 2in1",
    "varian": "200ml",
    "kategori": "Baby Care",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//95/MTA-79351232/zwitsal_perawatan_bayi_-_zwitsal_baby_bath_minyak_telon_full31_ht59infg.jpg"
  },
  {
    "nama": "Zwitsal 2in1",
    "varian": "300ml",
    "kategori": "Baby Care",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//95/MTA-79351232/zwitsal_perawatan_bayi_-_zwitsal_baby_bath_minyak_telon_full31_ht59infg.jpg"
  },
  {
    "nama": "Zwitsal Hair Lotion",
    "varian": "100ml",
    "kategori": "Baby Care",
    "gambar": "https://ik.imagekit.io/dcjlghyytp1/660d1d010d771d6e0ec0f2b2e4fb0793?tr=f-auto,w-360"
  },
  {
    "nama": "Zwitsal Hair Lotion",
    "varian": "200ml",
    "kategori": "Baby Care",
    "gambar": "https://ik.imagekit.io/dcjlghyytp1/660d1d010d771d6e0ec0f2b2e4fb0793?tr=f-auto,w-360"
  },
  {
    "nama": "Zwitsal Kids Shampoo 180ml",
    "varian": null,
    "kategori": "Shampoo",
    "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/103/MTA-153749901/br-m036969-05210_zwitsal-kids-shampoo-180ml-seri-spongebob_full02-8c9e1dfe.jpg"
  },
  {
    "nama": "Zwitsal Shampoo 100ml",
    "varian": null,
    "kategori": "Baby Care",
    "gambar": "https://img.lazcdn.com/g/p/32fd15af04bc5b1a09c8f98ac7349f32.jpg_720x720q80.jpg"
  }
];
