// =============================================================
// DATA PORTOFOLIO — Restu Ardana
// Ganti isinya di sini, tampilan website otomatis berubah.
// =============================================================

import type { Profil, TechItem, Proyek, Pengalaman } from '../types/portfolio';

export const profil: Profil = {
  nama: 'Restu Ardana',
  judul: 'Calon Software Engineer & AI Developer',
  subJudul: 'Siswa SMK 6 Surakarta · Pemula yang Serius Belajar',
  bio: 'Siswa SMK 6 Surakarta yang passionate di bidang software engineering dan artificial intelligence. Suka ngulik kode, eksplor hal baru, dan membayangkan software yang bisa bantu orang lain. Cita-cita: jadi software engineer handal yang paham AI.',
  status: 'Terbuka untuk belajar & kolaborasi',
  lokasi: 'Surakarta, Indonesia',
  fotoUrl: '/avatar.jpg',              // taruh foto Anda di public/avatar.jpg
  cvUrl: '/cv.pdf',                    // taruh CV di public/cv.pdf (opsional)
  email: 'restu.ardana@email.com',     // ganti dengan email asli
  github: 'https://github.com/restu-ardana',     // ganti jika sudah punya
  linkedin: 'https://linkedin.com/in/restu-ardana', // ganti jika sudah punya
  minatan: [
    'Software Engineering',
    'Artificial Intelligence',
    'Web Development',
    'Badminton',
    'Membaca Buku',
    'Nonton Film',
  ],
};

export const techStack: TechItem[] = [
  {
    nama: 'HTML5',
    kategori: 'frontend',
    warna: '#e34f26',
    deskripsi: 'Struktur halaman web semantic dengan tag-tag HTML5 yang tepat.',
    level: 'menengah',
  },
  {
    nama: 'CSS3',
    kategori: 'frontend',
    warna: '#1572b6',
    deskripsi: 'Styling responsif pakai flexbox, grid, dan animasi dasar.',
    level: 'menengah',
  },
  {
    nama: 'JavaScript',
    kategori: 'bahasa',
    warna: '#f7df1e',
    deskripsi: 'Logika interaktif di browser, manipulasi DOM, dan event handling.',
    level: 'dasar',
  },
  {
    nama: 'Python',
    kategori: 'bahasa',
    warna: '#3776ab',
    deskripsi: 'Dasar pemrograman, scripting otomasi, dan pengenalan AI/ML.',
    level: 'dasar',
  },
  {
    nama: 'Git',
    kategori: 'tool',
    warna: '#f05032',
    deskripsi: 'Version control untuk tracking perubahan dan dokumentasi progres.',
    level: 'dasar',
  },
  {
    nama: 'VS Code',
    kategori: 'tool',
    warna: '#007acc',
    deskripsi: 'Editor utama sehari-hari untuk nulis dan debug kode.',
    level: 'menengah',
  },
  {
    nama: 'Linux',
    kategori: 'tool',
    warna: '#fcc624',
    deskripsi: 'Eksplor terminal dan filesystem lewat WSL buat workflow ngoding.',
    level: 'belajar',
  },
];

export const proyek: Proyek[] = [
  {
    id: 'biodata-html',
    judul: 'Biodata HTML & CSS',
    ringkasan: 'Halaman profil statis pertama — latihan semantic HTML5 dan styling CSS murni.',
    deskripsi: 'Proyek pembuka untuk memahami semantic HTML5 dan CSS box model. Menampilkan foto profil, daftar hobi, dan informasi diri dengan layout kartu sederhana. Tanpa framework, murni HTML + CSS.',
    peran: 'Front-End Pemula',
    tahun: '2025',
    kategori: 'web',
    teknologi: ['HTML5', 'CSS3', 'Flexbox'],
    pelajaran: [
      'Memahami tag-tag semantic HTML5',
      'Latihan box model, border, dan radius',
      'Bikin layout responsif sederhana dengan flexbox',
    ],
    gambar: '/projects/biodata.png',
  },
  {
    id: 'form-html',
    judul: 'Formulir HTML Interaktif',
    ringkasan: 'Latihan form dengan validasi native HTML5 — text, email, date, dan file upload.',
    deskripsi: 'Proyek kedua yang fokus ke form HTML5. Mempraktikkan berbagai tipe input dan validasi bawaan browser tanpa JavaScript. Plus aksesibilitas dasar dengan label dan fieldset.',
    peran: 'Front-End Pemula',
    tahun: '2025',
    kategori: 'web',
    teknologi: ['HTML5', 'CSS3', 'Form Validation'],
    pelajaran: [
      'Berbagai tipe input HTML5 dan kapan pakainya',
      'Validasi native pakai atribut required dan type',
      'Aksesibilitas form pakai label dan fieldset',
    ],
    gambar: '/projects/formulir.png',
  },
  {
    id: 'todo-javascript',
    judul: 'Aplikasi To-Do JavaScript',
    ringkasan: 'Aplikasi to-do list sederhana pakai JavaScript murni — tambah, centang, hapus tugas.',
    deskripsi: 'Latihan JavaScript pertama yang interaktif. Mempraktikkan DOM manipulation, event listener, dan localStorage supaya data tidak hilang saat refresh. Tampil simpel dengan styling CSS.',
    peran: 'Front-End Pemula',
    tahun: '2025',
    kategori: 'web',
    teknologi: ['HTML5', 'CSS3', 'JavaScript', 'DOM', 'localStorage'],
    pelajaran: [
      'DOM manipulation: querySelector, createElement, appendChild',
      'Event listener dan handling user input',
      'localStorage untuk persistensi data sederhana',
    ],
    gambar: '/projects/todo.png',
  },
];

export const pengalaman: Pengalaman[] = [
  {
    id: 'smk6',
    tahun: '2024 - Sekarang',
    peran: 'Pelajar Aktif',
    tempat: 'SMK 6 Surakarta',
    jenis: 'pendidikan',
    cerita: 'Menempuh pendidikan menengah kejuruan di SMK 6 Surakarta. Fokus mengembangkan kemampuan teknis di bidang teknologi, pemrograman dasar, dan persiapan karier di industri software.',
    sorotan: [
      'Mempelajari dasar-dasar pemrograman dan logika komputer',
      'Eksplorasi HTML, CSS, JavaScript, dan Python secara autodidak',
      'Membangun beberapa proyek kecil untuk portofolio belajar',
    ],
    teknologi: ['HTML', 'CSS', 'JavaScript', 'Python', 'Git'],
  },
  {
    id: 'smp',
    tahun: '2021 - 2024',
    peran: 'Pelajar',
    tempat: 'SMP (Sekolah Menengah Pertama)',
    jenis: 'pendidikan',
    cerita: 'Menyelesaikan pendidikan menengah pertama. Aktif di kegiatan ekstrakurikuler dan mulai mengembangkan kebiasaan membaca buku untuk menambah wawasan.',
    sorotan: [
      'Aktif mengikuti kegiatan ekstrakurikuler',
      'Mulai mengembangkan kebiasaan membaca buku',
      'Dasar kerja sama tim dan komunikasi',
    ],
  },
  {
    id: 'otodidak',
    tahun: '2024 - Sekarang',
    peran: 'Belajar Mandiri Software Engineering',
    tempat: 'Self-Directed Learning',
    jenis: 'belajar',
    cerita: 'Belajar secara otodidak lewat kursus online gratis, dokumentasi resmi, dan praktik langsung. Target: punya pondasi kuat di web development sebelum lulus SMK.',
    sorotan: [
      'Selesai bikin 3+ proyek latihan HTML/CSS/JavaScript',
      'Mulai belajar Python untuk pengenalan AI/ML',
      'Biasa pakai Git dan VS Code untuk workflow harian',
    ],
    teknologi: ['HTML', 'CSS', 'JavaScript', 'Python', 'Git', 'VS Code'],
  },
];
