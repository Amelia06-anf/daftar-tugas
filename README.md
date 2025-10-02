# Daftar Tugas - Podman Setup

Project ini kini menjadi satu aplikasi Node.js (Express + EJS) dengan database MySQL. Kontainerisasi menggunakan Podman + podman-compose.

## Struktur
- app: Express + EJS (UI + API) pada port 5000
- mysql: MySQL 8 dengan volume data dan init SQL

## Prasyarat
- Podman
- podman-compose (alternatif: gunakan `docker compose` jika Anda memakai Docker)

## Jalankan
1. Build dan jalankan layanan:

```sh
podman compose -f podman-compose.yml up -d --build
```

2. Akses:
- Aplikasi: http://localhost:5000
- Endpoint API: http://localhost:5000/tugas
- MySQL: localhost:3306 (user/pass dari .env)

3. Logs:
```sh
podman logs -f daftar-tugas-backend
podman logs -f daftar-tugas-db
podman logs -f daftar-tugas-frontend
```

4. Hentikan dan hapus container:
```sh
podman compose -f podman-compose.yml down
```

## Konfigurasi lingkungan
Ubah kredensial di file `.env` bila diperlukan. File init SQL berada di `mysql/init/001_schema.sql` dan akan dijalankan saat pertama kali DB dibuat.

## Catatan
- UI dan API jadi satu aplikasi Express. Halaman utama ada di `/` dan memanggil API relatif ke host (`/tugas`).
- Aplikasi membaca konfigurasi MySQL dari environment variables (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`).

## Publik via ngrok (single URL)
Jalankan ngrok pada port aplikasi:

```sh
ngrok http 5000
```

Gunakan URL ngrok yang muncul untuk akses UI dan API dari publik.