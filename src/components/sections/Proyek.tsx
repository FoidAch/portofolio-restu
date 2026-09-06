// Section Proyek: kartu-kartu proyek + modal studi kasus

import { useState } from 'react';
import type { Proyek as TipeProyek } from '../../types/portfolio';
import { KartuBrutal } from '../ui/KartuBrutal';
import { Label } from '../ui/Label';
import { TombolBrutal } from '../ui/TombolBrutal';
import { proyek } from '../../data/portfolio';

export function Proyek() {
  const [terbuka, setTerbuka] = useState<TipeProyek | null>(null);

  return (
    <section id="proyek" className="py-20 px-4 bg-pasir-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Label warna="laut">03</Label>
          <h2 className="font-display font-black text-3xl md:text-4xl text-laut-700">
            Proyek
          </h2>
        </div>
        <p className="font-mono-tight text-laut-600 mb-8 max-w-2xl">
          Klik kartu untuk lihat studi kasus lengkap — teknologi, pelajaran, dan proses di baliknya.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {proyek.map(p => (
            <KartuBrutal
              key={p.id}
              className="p-5 cursor-pointer"
              onClick={() => setTerbuka(p)}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <Label warna="koral">{p.kategori}</Label>
                <span className="font-mono-tight text-xs text-laut-500">{p.tahun}</span>
              </div>
              <h3 className="font-mono-tight font-bold text-xl text-laut-700">
                {p.judul}
              </h3>
              <p className="font-display text-sm text-laut-600 mt-2 leading-relaxed">
                {p.ringkasan}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.teknologi.slice(0, 4).map(t => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-mono-tight bg-pasir-200 text-laut-700 border-2 border-laut-700"
                  >
                    {t}
                  </span>
                ))}
                {p.teknologi.length > 4 && (
                  <span className="px-2 py-0.5 text-xs font-mono-tight text-laut-500">
                    +{p.teknologi.length - 4}
                  </span>
                )}
              </div>
            </KartuBrutal>
          ))}
        </div>
      </div>

      {/* Modal studi kasus */}
      {terbuka && (
        <div
          className="fixed inset-0 z-50 bg-laut-700/70 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setTerbuka(null)}
        >
          <div
            className="bg-pasir-50 border-brutal-thick border-laut-700 shadow-brutal max-w-2xl w-full p-6 my-8"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <Label warna="koral">{terbuka.kategori}</Label>
                <h3 className="font-mono-tight font-bold text-2xl text-laut-700 mt-2">
                  {terbuka.judul}
                </h3>
                <p className="font-mono-tight text-sm text-laut-500 mt-1">
                  {terbuka.peran} · {terbuka.tahun}
                </p>
              </div>
              <button
                onClick={() => setTerbuka(null)}
                className="font-mono-tight font-bold text-2xl text-laut-700 hover:text-koral-500 px-2"
                aria-label="Tutup"
              >
                ✕
              </button>
            </div>

            <p className="font-display text-laut-700 leading-relaxed">
              {terbuka.deskripsi}
            </p>

            <div className="mt-5">
              <p className="font-mono-tight text-xs uppercase text-laut-500 tracking-widest mb-2">
                Teknologi
              </p>
              <div className="flex flex-wrap gap-1.5">
                {terbuka.teknologi.map(t => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-mono-tight bg-pasir-200 text-laut-700 border-2 border-laut-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <p className="font-mono-tight text-xs uppercase text-laut-500 tracking-widest mb-2">
                Pelajaran
              </p>
              <ul className="space-y-1">
                {terbuka.pelajaran.map(l => (
                  <li
                    key={l}
                    className="font-display text-laut-700 text-sm flex gap-2"
                  >
                    <span className="text-koral-500 font-bold">▸</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {terbuka.tautanDemo && (
                <TombolBrutal variant="primary" href={terbuka.tautanDemo}>
                  Demo ↗
                </TombolBrutal>
              )}
              {terbuka.tautanRepo && (
                <TombolBrutal variant="secondary" href={terbuka.tautanRepo}>
                  Repo ↗
                </TombolBrutal>
              )}
              <TombolBrutal
                variant="outline"
                onClick={() => setTerbuka(null)}
              >
                Tutup
              </TombolBrutal>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}