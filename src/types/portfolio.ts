// Tipe data portofolio — semua data ditampung di src/data/portfolio.ts

export interface Profil {
  nama: string;
  judul: string;          // tagline singkat di hero
  subJudul: string;       // baris kedua di hero
  bio: string;            // paragraf tentang diri
  status: string;         // contoh: "Terbuka untuk magang / kolaborasi"
  lokasi: string;
  fotoUrl: string;        // path di /public, contoh "/avatar.jpg"
  cvUrl: string;          // path di /public, contoh "/cv.pdf"
  email: string;
  github: string;         // url lengkap
  linkedin: string;       // url lengkap
  minatan: string[];      // list minat / hobi
}

export interface TechItem {
  nama: string;
  kategori: 'bahasa' | 'frontend' | 'backend' | 'tool';
  warna: string;          // hex, contoh "#3178C6"
  deskripsi: string;      // 1 kalimat, bagaimana Anda menggunakan teknologi ini
  level: 'belajar' | 'dasar' | 'menengah' | 'mahir';
}

export interface Proyek {
  id: string;
  judul: string;
  ringkasan: string;      // 1-2 kalimat, tampil di kartu
  deskripsi: string;      // paragraf panjang
  peran: string;          // contoh: "Front-End Pemula"
  tahun: string;          // contoh: "2025"
  kategori: 'web' | 'desktop' | 'mobile' | 'belajar';
  teknologi: string[];    // daftar tech stack
  pelajaran: string[];    // apa yang dipelajari dari proyek ini
  tautanDemo?: string;    // opsional
  tautanRepo?: string;    // opsional
  gambar: string;         // path di /public, contoh "/projects/nama.png"
}

export interface Pengalaman {
  id: string;
  tahun: string;          // contoh: "2024 - Sekarang"
  peran: string;          // contoh: "Pelajar Aktif"
  tempat: string;         // contoh: "SMK 6 Surakarta"
  jenis: 'pendidikan' | 'belajar' | 'organisasi' | 'kerja';
  cerita: string;         // paragraf
  sorotan: string[];      // bullet poin
  teknologi?: string[];   // opsional
}
