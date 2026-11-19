# 🌐 Portofolio Lazuardhi Akbar Maulana Tsani

> **Siswa Teknik Komputer dan Jaringan (TKJ) — SMKN 1 Kota Mojokerto**  
> *Spesialisasi MikroTik RouterOS v7, Cisco IOS CLI, Administrasi Server Linux Debian 12 Headless, Keamanan Siber, dan Otomasi Python 3.*

---

## ⚡ Fitur Utama & Keunggulan (Model 2: NOC & Terminal Cyber-Ops)

1. **Kecepatan & Performa Tinggi (Ultra-Fast Native Static Architecture)**:
   - Zero-dependency: Dibangun murni menggunakan **Vanilla Semantic HTML5**, **Modern CSS3 (Custom Properties & Grid/Flex)**, dan **Vanilla JavaScript**.
   - Tidak menggunakan library atau framework berat di sisi klien — rendering instan dengan skor performa maksimal.
   - Semua aset sertifikat menggunakan format gambar modern **WebP** ringan (~15–25 KB).
2. **Terminal Audio Sound Effects (Web Audio API Synthesizer)**:
   - Efek suara mechanical keyboard saat mengetik di terminal dan suara feedback eksekusi perintah dibuat langsung via browser `AudioContext` asli (tanpa file audio MP3/WAV eksternal sehingga 100% offline & zero network lag).
   - Tombol kontrol sakelar `[SFX: ON / OFF]` di navbar dan terminal dengan penyimpanan preferensi di `localStorage`.
3. **Interactive Web Shell / Terminal CLI 2.0**:
   - Terminal nyata yang dapat diketik secara langsung oleh recruiter:
     - `help`: Menampilkan daftar perintah yang didukung.
     - `cv`: Membuka Curriculum Vitae resmi.
     - `ping [host]`: Menjalankan simulasi ping ICMP interaktif dengan perhitungan RTT ms dan paket statistik.
     - `certs`: Menampilkan daftar 11 sertifikat kompetensi resmi.
     - `skills`: Menampilkan matriks protokol teknis.
     - `neofetch`: Menampilkan informasi sistem OS Debian 12 & ASCII art logo.
     - `status`: Memeriksa interface status port router.
     - `whoami`, `contact`, `clear`.
   - Dilengkapi tombol saran perintah cepat (*quick chips*) untuk kemudahan pengguna di perangkat ponsel/mobile.
4. **NOC Interface Status HUD**:
   - Panel telemetri live router MikroTik & Cisco dengan status LED berkedip (`ether1 WAN`, `ether2 LAN_GURU VLAN 10`, `ether3 LAN_SISWA Hotspot`, `ether4 TRUNK 802.1Q`, `wlan1 AP_LAB 5GHz`).
5. **Curriculum Vitae (CV) Siap Unduh & Cetak (`cv.html`)**:
   - Berkas `cv.html` berstandar ATS dengan tombol satu klik **Cetak / Simpan ke PDF** (`window.print()`) yang telah dioptimasi khusus untuk kertas cetak.
6. **Command Palette (`Ctrl+K` / `/`)**:
   - Akses cepat ala developer tools modern untuk mencari sertifikat, menjalankan perintah terminal, atau menavigasi bagian portofolio secara instan.
7. **Showcase 11 Sertifikat Resmi & Terverifikasi**:
   - Filter instan berdasarkan kategori (*Jaringan*, *Linux*, *Cyber Security*, *Python & Git*, *Mengetik*).
   - Pencarian real-time berdasarkan judul, ID, atau penerbit.
   - Tombol salin ID sertifikat dengan notifikasi toast dan chime audio.
   - Lightbox modal untuk pratinjau sertifikat resolusi tinggi + tautan PDF dan verifikasi online.
8. **Formulir Kontak Fungsional**:
   - Terintegrasi langsung dengan Web3Forms API ke email `lazuardhimaulana09@gmail.com` dengan perlindungan spam honeypot.

---

## 📁 Struktur Direktori

```text
├── index.html                                 # Halaman utama portofolio (NOC & Cyber-Ops)
├── cv.html                                    # Berkas Curriculum Vitae (Print / Save PDF Ready)
├── foto.webp                                  # Foto profil avatar resmi
├── favicon.png                                # Favicon logo resolusi tinggi
├── favicon.ico                                # Favicon standar browser
├── assets/
│   ├── css/
│   │   └── style.css                          # Stylesheet utama tema NOC & Terminal Obsidian
│   ├── js/
│   │   └── main.js                            # Logika interaktif, Web Audio SFX, CLI & Filter
│   └── certificates/                          # Thumbnail & preview sertifikat WebP
│       ├── lazuardhi_..._thumb.webp
│       └── lazuardhi_..._full.webp
├── *.pdf                                      # Berkas sertifikat asli
└── README.md                                  # Dokumentasi portofolio
```

---

## 🚀 Menjalankan Secara Lokal

Untuk menguji website di komputer lokal:

```bash
# Menggunakan Python 3 HTTP Server
python3 -m http.server 8080
```

Buka browser dan akses: `http://localhost:8080`

---

## 🌐 Publikasi ke GitHub Pages

Untuk mempublikasikan pembaruan ke repositori GitHub:

```bash
git add .
git commit -m "feat: remodel portofolio ke Model 2 NOC & Cyber-Ops dengan CV ready dan audio terminal"
git push origin main
```

---

© 2026 **Lazuardhi Akbar Maulana Tsani**. Hak Cipta Dilindungi.
