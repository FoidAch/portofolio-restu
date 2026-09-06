// Hero section: nama, judul, ombak canvas, dan CTA

import { OmbakCanvas } from './OmbakCanvas';
import { TombolBrutal } from '../ui/TombolBrutal';
import { profil } from '../../data/portfolio';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-0 px-4 bg-pasir-50 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="font-mono-tight text-sm text-laut-500 mb-4 tracking-widest">
          ~/portofolio/{profil.nama.toLowerCase().replace(/\s+/g, '-')}
        </p>
        <h1 className="font-display font-black text-5xl md:text-7xl text-laut-700 leading-tight">
          Halo, saya <span className="text-koral-500">{profil.nama}</span>.
        </h1>
        <p className="font-display text-2xl md:text-3xl text-laut-500 mt-4 font-bold">
          {profil.judul}
        </p>
        <p className="font-mono-tight text-base md:text-lg text-laut-600 mt-3 max-w-2xl mx-auto">
          {profil.subJudul}
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <TombolBrutal variant="primary" href="#proyek">
            Lihat Proyek →
          </TombolBrutal>
          <TombolBrutal variant="koral" href="#kontak">
            Hubungi Saya
          </TombolBrutal>
        </div>

        <p className="font-mono-tight text-xs text-laut-500 mt-8 italic">
          💡 klik ombaknya di bawah buat bikin riak
        </p>
      </div>

      <div className="mt-12">
        <OmbakCanvas tinggi={260} />
      </div>
    </section>
  );
}