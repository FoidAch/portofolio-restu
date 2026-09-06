// Label kecil / tag ala brutalism

import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  warna?: 'laut' | 'koral' | 'palma' | 'pasir';
}

const warnaClass = {
  laut:  'bg-laut-500 text-pasir-50',
  koral: 'bg-koral-500 text-pasir-50',
  palma: 'bg-palma-500 text-pasir-50',
  pasir: 'bg-pasir-300 text-laut-700',
};

export function Label({ children, warna = 'laut' }: Props) {
  return (
    <span
      className={`
        inline-block px-2.5 py-1
        font-mono-tight text-xs font-bold uppercase tracking-wider
        border-2 border-laut-700
        ${warnaClass[warna]}
      `}
    >
      {children}
    </span>
  );
}
