// Komponen utama — menyusun semua section

import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Tentang } from './components/sections/Tentang';
import { TechStack } from './components/sections/TechStack';
import { Proyek } from './components/sections/Proyek';
import { Perjalanan } from './components/sections/Perjalanan';
import { Kontak } from './components/sections/Kontak';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Tentang />
      <TechStack />
      <Proyek />
      <Perjalanan />
      <Kontak />
      <Footer />
    </div>
  );
}