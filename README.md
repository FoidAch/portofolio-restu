# Portofolio Restu Ardana

Template portofolio bertema **coastal + neo-brutalism** yang fresh dari nol (bukan fork dari repo orang).
Stack: React 19 + TypeScript + Vite + Tailwind CSS v4.

## Fitur

- Hero dengan **simulasi ombak 2D Canvas** (klik untuk bikin riak + gelembung naik)
- Tiap section pakai gaya neo-brutalism: border tebal, drop-shadow solid, hover-lift
- Section: Hero, Tentang, Tech Stack, Proyek (dengan modal studi kasus), Perjalanan (timeline), Kontak
- Section Kontak punya **terminal-style box** + **3D card flip** (hover)
- Data terpusat di `src/data/portfolio.ts` — edit di situ saja, tampilan otomatis berubah

## Struktur

```
portofolio-restu/
├── public/                      # aset statis
│   ├── favicon.svg
│   ├── avatar.jpg               # taruh foto Anda di sini
│   ├── cv.pdf                   # taruh CV di sini (opsional)
│   └── projects/                # screenshot proyek
├── src/
│   ├── App.tsx                  # susun section
│   ├── main.tsx                 # entry point
│   ├── index.css                # tema Tailwind v4
│   ├── components/
│   │   ├── ui/                  # TombolBrutal, KartuBrutal, Label
│   │   └── sections/            # Navbar, Hero, Tentang, TechStack, Proyek, Perjalanan, Kontak, Footer, OmbakCanvas
│   ├── data/portfolio.ts        # ⭐ SEMUA DATA DI SINI
│   └── types/portfolio.ts       # definisi tipe TypeScript
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Cara jalanin

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Cara build

```bash
npm run build
```

Hasil build ada di `dist/`.

## Yang perlu Anda ganti

1. `src/data/portfolio.ts` — nama, bio, email, sosmed, proyek, pengalaman
2. `public/avatar.jpg` — foto Anda (rename `images.jpg` jadi `avatar.jpg`)
3. `public/cv.pdf` — file CV (opsional)
4. `public/projects/*.png` — screenshot tiap proyek

## Tech stack yang dipakai di template

- **React 19** — library UI
- **TypeScript** — type safety
- **Vite** — dev server & build tool super cepat
- **Tailwind CSS v4** — utility-first CSS, pakai `@theme` untuk custom design tokens
- **HTML5 Canvas** (native, no library) — simulasi ombak di Hero

Tidak ada library animasi tambahan — semua animasi pakai CSS keyframes + canvas RAF supaya ringan.
