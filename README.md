# ✨ GlowYou - Web App & PWA (Skincare & Skin Analysis)

> **"Kenali Kulitmu, Raih Versi Terbaikmu"**

Aplikasi rekomendasi kecantikan & e-commerce terkurasi yang dibuat berdasarkan sketsa kawat (*wireframe*) dan panduan desain visual bernuansa *warm blush / peach*.

---

## 📱 Fitur-Fitur Utama yang Tersedia

1. **Splash Screen & Onboarding (3 Layar)**:
   - Pengenalan nilai aplikasi, animasi maskot & tipografi yang lembut.
   - Pilihan *Lewati* atau *Lanjut*.
2. **Beranda Interaktif (Home Screen)**:
   - Sapaan nama pengguna (*Halo, Alifa ✨*).
   - *Search Bar* untuk pencarian produk, tips, atau bahan aktif.
   - *Hero Banner CTA* untuk analisis tipe kulit langsung.
   - *Quick Navigation 4 Grid*: Analisis Kulit, Rekomendasi Produk, Tips Harian, Edukasi.
   - *Rekomendasi Terpersonalisasi*: Produk yang disesuaikan otomatis dengan tipe kulit pengguna saat ini.
   - *Artikel Terbaru*: Cuplikan tips & edukasi seputar perawatan kulit.
3. **Analisis Tipe Kulit (Core Feature)**:
   - 6 Pilihan kondisi kulit utama (Normal, Kering, Berminyak, Kombinasi, Sensitif, Berjerawat) dengan kartu visual interaktif.
   - Halaman **Hasil Analisis**:
     - Badge tipe kulit & deskripsi mendalam.
     - Checklist ciri-ciri utama kulit.
     - Panduan rutinitas skincare dasar harian (*Morning Routine* & *Night Routine*).
     - Daftar rekomendasi produk spesifik yang ramah untuk jenis kulit tersebut.
     - Simpan hasil tes ke profil pengguna.
4. **Katalog Produk & Detail Produk (E-Commerce)**:
   - Filter cepat berdasarkan tipe kulit (*Semua, Berminyak, Kering, Normal, Kombinasi, Sensitif, Berjerawat*).
   - Kategori produk (*Facial Wash, Toner, Serum, Moisturizer, Sunscreen*).
   - Halaman **Detail Produk**:
     - Foto produk, harga, rating, jumlah ulasan.
     - Badge kesesuaian (*Cocok Untuk: Kulit Berminyak, Kulit Berjerawat*).
     - Manfaat utama, cara pakai (*how to use*), dan daftar bahan aktif (*key ingredients*).
     - Pengatur kuantitas (+ / -).
     - Tombol *+ Keranjang* dan *Beli Sekarang*.
5. **In-App Cart & Checkout**:
   - Keranjang belanja interaktif dengan pengubah kuantitas dan hapus item.
   - Ringkasan subtotal harga.
   - Layar **Checkout**:
     - Form alamat pengiriman.
     - Pilihan kurir/ekspedisi (J&T Reguler, SiCepat Hemat, GoSend Instan).
     - Pilihan metode pembayaran (BCA Virtual Account, Mandiri VA, GoPay/QRIS, ShopeePay, COD).
     - Ringkasan rincian biaya (Subtotal + Ongkir = Total).
   - Layar **Pesanan Berhasil**: Nomor VA unik otomatis, tombol salin, dan status pesanan.
6. **Tips & Edukasi Kecantikan**:
   - Filter kategori (*Semua, Perawatan Kulit, Make Up, Edukasi*).
   - Pembaca artikel lengkap dengan format bersih dan produk rekomendasi terkait di akhir artikel.
7. **Profil Pengguna**:
   - Kartu status kondisi kulit terkini dengan tombol *Tes Ulang*.
   - Menu: *Tipe Kulit Saya, Riwayat Analisis, Pesanan Saya, Produk Favorit (Wishlist), Notifikasi, Pengaturan*.
8. **PWA (Progressive Web App)**:
   - Terpasang `manifest.json` & Service Worker (`sw.js`).
   - Dapat diinstal langsung ke layar utama smartphone (*Add to Home Screen*).

---

## 🚀 Cara Menjalankan Aplikasi

Kamu bisa membuka aplikasi ini dengan dua cara mudah:

### Cara 1: Buka Langsung di Browser (Paling Cepat)
Cukup klik dua kali file **`run.bat`** atau klik kanan file **`index.html`** -> **Open with Google Chrome / Microsoft Edge**.

### Cara 2: Menjalankan Local Web Server (Python)
Buka terminal / PowerShell di folder ini, lalu jalankan:
```bash
python serve.py
```
Lalu buka browser di alamat: **`http://localhost:3000`**

---

## 📂 Struktur File Proyek
```
Glow You/
├── index.html         # Struktur utama antarmuka & mobile viewport simulator
├── manifest.json      # Konfigurasi PWA (Add to Home Screen)
├── sw.js              # Service Worker untuk caching offline
├── serve.py           # Server pengembang lokal Python
├── run.bat            # Shortcut sekali klik untuk pengguna Windows
├── README.md          # Dokumentasi & panduan penggunaan
├── css/
│   └── style.css      # Styling khusus, font Plus Jakarta Sans & animasi
└── js/
    ├── data.js        # Data produk skincare, tipe kulit, dan artikel
    ├── store.js       # Manajemen state (LocalStorage: cart, orders, wishlist)
    └── app.js         # Logika interaktif & perender seluruh layar UI
```

