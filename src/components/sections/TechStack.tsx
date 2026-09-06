// Section Tech Stack: grid kartu dengan warna sesuai teknologi

import { KartuBrutal } from '../ui/KartuBrutal';
import { Label } from '../ui/Label';
import { techStack } from '../../data/portfolio';

const levelLabel: Record<string, string> = {
  belajar: 'Belajar',
  dasar: 'Dasar',
  menengah: 'Menengah',
  mahir: 'Mahir',
};

export function TechStack() {
  return (
    <section id="tech" className="py-20 px-4 bg-laut-500">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Label warna="koral">02</Label>
          <h2 className="font-display font-black text-3xl md:text-4xl text-pasir-50">
            Tech Stack
          </h2>
        </div>
        <p className="font-mono-tight text-pasir-200 mb-8 max-w-2xl">
          Tools dan bahasa yang sedang saya pelajari. Level menunjukkan seberapa nyaman saya memakainya saat ini.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {techStack.map(t => (
            <KartuBrutal
              key={t.nama}
              warnaLatar="bg-pasir-50"
              className="p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 border-brutal border-laut-700"
                  style={{ background: t.warna }}
                  aria-hidden
                />
                <Label warna="pasir">{levelLabel[t.level]}</Label>
              </div>
              <h3 className="font-mono-tight font-bold text-xl text-laut-700">
                {t.nama}
              </h3>
              <p className="font-display text-sm text-laut-600 mt-2 leading-relaxed">
                {t.deskripsi}
              </p>
            </KartuBrutal>
          ))}
        </div>
      </div>
    </section>
  );
}