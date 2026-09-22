# Portofolio Muhamad Fitra Kurnia

Website "about me" untuk lamaran magang, dibangun dengan Next.js (App Router), TypeScript, Tailwind CSS, dan Motion.

## Menjalankan di komputer sendiri

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur penting

- `src/data/portfolio.ts` — **semua isi teks ada di sini** (nama, deskripsi, proyek, skill, sertifikat, tautan). Untuk mengubah isi web, cukup edit file ini; setiap teks punya versi `id` (Indonesia) dan `en` (Inggris).
- `src/components/` — komponen tampilan tiap bagian (Hero, About, Education, Skills, Projects, Experience, Contact).
- `src/lib/site-state.ts` — logika ganti bahasa dan mode gelap/terang (disimpan di localStorage browser pengunjung).
- `public/images/profile.webp` — foto profil (sudah dipotong bulat dari foto yang diunggah).
- `public/certificates/` — file PDF sertifikat Azure AI yang bisa dibuka pengunjung.

## Menambah atau mengubah proyek

Tambahkan objek baru ke array `projects` di `src/data/portfolio.ts`, isi `role`, `description`, `tech`, `sections` (detail), dan `links` (live demo / GitHub). Tandai `featured: true` hanya pada satu proyek yang ingin ditonjolkan (saat ini BINUSphere).

## Deploy ke Vercel

1. Push folder ini ke repository GitHub baru.
2. Buka https://vercel.com, klik "New Project", pilih repository tersebut.
3. Vercel akan otomatis mendeteksi Next.js — klik "Deploy".
4. Setelah live, buka Project Settings → Domains, tambahkan `mfitrakurnia.dev`, lalu ikuti instruksi DNS dari Vercel di tempat kamu membeli domain.

## Yang masih perlu dilengkapi

- Tambahkan tangkapan layar (screenshot) tiap proyek jika mau — bisa ditambahkan sebagai gambar di dalam `sections` pada `portfolio.ts` dan dirender di `ProjectCard.tsx`.
- Isi durasi/tanggal BINUSphere jika ingin ditampilkan.
- Pertimbangkan menambahkan CV yang bisa diunduh (taruh file PDF di `public/` lalu buat tombol link ke sana).
