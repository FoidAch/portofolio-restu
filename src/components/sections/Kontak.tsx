// Section Kontak: terminal-style + 3D card flip ala brutalism

import { useState } from 'react';
import { KartuBrutal } from '../ui/KartuBrutal';
import { Label } from '../ui/Label';
import { TombolBrutal } from '../ui/TombolBrutal';
import { profil } from '../../data/portfolio';

export function Kontak() {
  const [disalin, setDisalin] = useState(false);

  const salinEmail = async () => {
    try {
      await navigator.clipboard.writeText(profil.email);
      setDisalin(true);
      window.setTimeout(() => setDisalin(false), 2000);
    } catch {
      // fallback: select text
      window.prompt('Salin email:', profil.email);
    }
  };

  return (
    <section id="kontak" className="py-20 px-4 bg-pasir-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Label warna="koral">05</Label>
          <h2 className="font-display font-black text-3xl md:text-4xl text-laut-700">
            Kontak
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Terminal style */}
          <KartuBrutal className="p-0" warnaLatar="bg-laut-700">
            <div className="bg-laut-500 px-4 py-2 border-b-brutal border-laut-700 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-koral-500" />
              <span className="w-3 h-3 rounded-full bg-pasir-300" />
              <span className="w-3 h-3 rounded-full bg-palma-500" />
              <span className="font-mono-tight text-xs text-pasir-200 ml-2">
                ~/kontak.sh
              </span>
            </div>
            <div className="p-5 font-mono-tight text-sm">
              <p className="text-palma-500">$ whoami</p>
              <p className="text-pasir-50 mb-3">{profil.nama}</p>

              <p className="text-palma-500">$ cat email.txt</p>
              <p className="text-pasir-50 mb-3">{profil.email}</p>

              <p className="text-palma-500">$ cat lokasi.txt</p>
              <p className="text-pasir-50 mb-3">{profil.lokasi}</p>

              <p className="text-palma-500">$ ./hubungi --sekarang</p>
              <p className="text-pasir-300 mb-3">
                {profil.status}
              </p>

              <button
                onClick={salinEmail}
                className="mt-2 px-3 py-1.5 bg-pasir-300 text-laut-700 font-mono-tight font-bold text-xs border-2 border-pasir-50 hover:bg-pasir-50"
              >
                {disalin ? '✓ Tersalin!' : 'Salin Email'}
              </button>
            </div>
          </KartuBrutal>

          {/* 3D card flip */}
          <div className="[perspective:1000px] h-80">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              {/* depan */}
              <KartuBrutal className="absolute inset-0 p-6 [backface-visibility:hidden]" warnaLatar="bg-pasir-300">
                <Label warna="koral">Catatan Developer</Label>
                <h3 className="font-mono-tight font-bold text-2xl text-laut-700 mt-3">
                  Ayo kolaborasi! 🤝
                </h3>
                <p className="font-display text-laut-700 mt-3 leading-relaxed">
                  Saya terbuka untuk belajar bareng, kontribusi proyek open source, atau sekadar diskusi soal kode dan AI.
                </p>
                <p className="font-mono-tight text-xs text-laut-500 mt-6">
                  💡 hover kartu ini untuk catatan pribadi saya
                </p>
              </KartuBrutal>

              {/* belakang */}
              <KartuBrutal className="absolute inset-0 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]" warnaLatar="bg-koral-500">
                <Label warna="pasir">Catatan Pribadi</Label>
                <p className="font-mono-tight text-pasir-50 mt-3 leading-relaxed">
                  "Saya masih belajar dan banyak hal yang belum saya kuasai. Tapi saya serius, rajin, dan cepat tangkap hal baru. Kalau Anda mau ajarin atau bareng-bareng bikin sesuatu — saya siap."
                </p>
                <p className="font-mono-tight text-xs text-pasir-100 mt-6">
                  — Restu
                </p>
              </KartuBrutal>
            </div>
          </div>
        </div>

        {/* link sosmed */}
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          <TombolBrutal variant="primary" href={`mailto:${profil.email}`}>
            ✉ Email
          </TombolBrutal>
          <TombolBrutal variant="secondary" href={profil.github}>
            GitHub ↗
          </TombolBrutal>
          <TombolBrutal variant="koral" href={profil.linkedin}>
            LinkedIn ↗
          </TombolBrutal>
        </div>
      </div>
    </section>
  );
}