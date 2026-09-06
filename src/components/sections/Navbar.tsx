// Navbar floating ala brutalism

import { useState } from 'react';

const linkItems = [
  { id: 'tentang',  label: 'Tentang' },
  { id: 'tech',     label: 'Tech' },
  { id: 'proyek',   label: 'Proyek' },
  { id: 'perjalanan', label: 'Perjalanan' },
  { id: 'kontak',   label: 'Kontak' },
];

export function Navbar() {
  const [buka, setBuka] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl">
      <div className="bg-pasir-50 border-brutal-thick border-laut-700 shadow-brutal px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="font-mono-tight font-bold text-laut-700 text-lg">
          ~/restu
        </a>

        {/* desktop */}
        <ul className="hidden md:flex gap-1 font-mono-tight font-bold text-sm">
          {linkItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="px-3 py-1.5 hover:bg-laut-500 hover:text-pasir-50 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          onClick={() => setBuka(b => !b)}
          className="md:hidden font-mono-tight font-bold text-laut-700 px-2"
          aria-label="Toggle menu"
        >
          {buka ? '[X]' : '[=]'}
        </button>
      </div>

      {/* mobile dropdown */}
      {buka && (
        <ul className="md:hidden mt-2 bg-pasir-50 border-brutal-thick border-laut-700 shadow-brutal font-mono-tight font-bold">
          {linkItems.map(item => (
            <li key={item.id} className="border-b-2 border-laut-700 last:border-b-0">
              <a
                href={`#${item.id}`}
                onClick={() => setBuka(false)}
                className="block px-4 py-3 hover:bg-laut-500 hover:text-pasir-50"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}