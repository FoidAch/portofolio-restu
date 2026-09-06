// Tombol ala neo-brutalism: border tebal + shadow solid + hover lift

import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'koral' | 'outline';

const variantClass: Record<Variant, string> = {
  primary:   'bg-laut-500 text-pasir-50 shadow-brutal',
  secondary: 'bg-pasir-300 text-laut-700 shadow-brutal-pasir',
  koral:     'bg-koral-500 text-pasir-50 shadow-brutal-koral',
  outline:   'bg-pasir-50 text-laut-700 shadow-brutal',
};

interface Props {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export function TombolBrutal({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}: Props) {
  const base = `inline-flex items-center justify-center gap-2
                px-5 py-3 font-mono-tight font-bold
                border-brutal-thick border-laut-700
                hover-lift cursor-pointer
                ${variantClass[variant]}
                ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={base}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}