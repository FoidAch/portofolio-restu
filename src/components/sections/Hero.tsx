// Hero section: pengenalan diri di atas ombak penuh
// Sentuh ombak → teks menyebar, lalu mengambang kembali rapi

import { useCallback, useRef, useState } from 'react';
import { OmbakCanvas } from './OmbakCanvas';
import { TombolBrutal } from '../ui/TombolBrutal';
import { profil } from '../../data/portfolio';

/* ---------- helper: pecah string jadi span per karakter ---------- */
function CharSpans({
  text,
  className = '',
  scatter,
  seed = 0,
}: {
  text: string;
  className?: string;
  scatter: boolean;
  seed?: number;
}) {
  return (
    <>
      {text.split('').map((ch, i) => {
        // deterministic-ish random dari seed + index
        const r1 = Math.sin(seed * 12.9898 + i * 78.233) * 43758.5453;
        const r2 = Math.sin(seed * 39.346 + i * 11.135) * 23421.631;
        const rx = (r1 - Math.floor(r1)) * 2 - 1; // -1..1
        const ry = (r2 - Math.floor(r2)) * 2 - 1;
        const rot = ((r1 - Math.floor(r1)) * 60 - 30).toFixed(1);
        const dx = (rx * (90 + (i % 7) * 18)).toFixed(1);
        const dy = (ry * (70 + (i % 5) * 22)).toFixed(1);
        const delay = scatter ? `${(i % 12) * 18}ms` : `${(i % 12) * 28}ms`;

        return (
          <span
            key={`${seed}-${i}`}
            className="inline-block"
            style={{
              transition: scatter
                ? `transform 0.55s cubic-bezier(0.22, 0.9, 0.36, 1) ${delay}, opacity 0.4s ease ${delay}`
                : `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}, opacity 0.6s ease ${delay}`,
              transform: scatter
                ? `translate(${dx}px, ${dy}px) rotate(${rot}deg) scale(0.85)`
                : 'translate(0, 0) rotate(0deg) scale(1)',
              opacity: scatter ? 0.35 : 1,
              whiteSpace: ch === ' ' ? 'pre' : undefined,
            }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        );
      })}
    </>
  );
}

export function Hero() {
  const [scatter, setScatter] = useState(false);
  const lockRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const handleRipple = useCallback(() => {
    if (lockRef.current) return;
    lockRef.current = true;
    setScatter(true);

    if (timerRef.current) window.clearTimeout(timerRef.current);
    // teks mengambang kembali setelah ~1.1s
    timerRef.current = window.setTimeout(() => {
      setScatter(false);
      // unlock sedikit setelah animasi kembali selesai
      window.setTimeout(() => {
        lockRef.current = false;
      }, 1000);
    }, 1100);
  }, []);

  const pathLabel = `~/portofolio/${profil.nama.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
    >
      {/* background ombak penuh */}
      <OmbakCanvas onRipple={handleRipple} />

      {/* soft overlay biar teks tetap terbaca */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(253,246,227,0.55) 0%, rgba(253,246,227,0.12) 55%, transparent 75%)',
        }}
      />

      {/* konten pengenalan */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center px-4 pt-28 pb-16">
        <p className="font-mono-tight text-sm text-laut-600 mb-4 tracking-widest drop-shadow-sm">
          <CharSpans text={pathLabel} scatter={scatter} seed={1} />
        </p>

        <h1 className="font-display font-black text-5xl md:text-7xl text-laut-700 leading-tight drop-shadow-sm">
          <CharSpans text="Halo, saya " scatter={scatter} seed={2} />
          <span className="text-koral-500">
            <CharSpans text={profil.nama} scatter={scatter} seed={3} />
          </span>
          <CharSpans text="." scatter={scatter} seed={4} />
        </h1>

        <p className="font-display text-2xl md:text-3xl text-laut-600 mt-4 font-bold drop-shadow-sm">
          <CharSpans text={profil.judul} scatter={scatter} seed={5} />
        </p>

        <p className="font-mono-tight text-base md:text-lg text-laut-700/90 mt-3 max-w-2xl mx-auto drop-shadow-sm">
          <CharSpans text={profil.subJudul} scatter={scatter} seed={6} />
        </p>

        <div
          className="flex flex-wrap gap-4 justify-center mt-8"
          style={{
            transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
            transform: scatter ? 'translateY(28px) scale(0.96)' : 'translateY(0) scale(1)',
            opacity: scatter ? 0.4 : 1,
          }}
        >
          <TombolBrutal variant="primary" href="#proyek">
            Lihat Proyek →
          </TombolBrutal>
          <TombolBrutal variant="koral" href="#kontak">
            Hubungi Saya
          </TombolBrutal>
        </div>

        <p className="font-mono-tight text-xs text-laut-700/70 mt-10 italic">
          💡 sentuh ombaknya — teks akan menyebar, lalu mengambang kembali
        </p>
      </div>
    </section>
  );
}
