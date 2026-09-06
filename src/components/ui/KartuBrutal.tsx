// Kartu ala neo-brutalism: border tebal + shadow solid

import type { ReactNode, MouseEventHandler } from 'react';

interface Props {
  children: ReactNode;
  warnaLatar?: string;   // tailwind class, contoh "bg-pasir-100"
  className?: string;
  hoverLift?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export function KartuBrutal({
  children,
  warnaLatar = 'bg-pasir-50',
  className = '',
  hoverLift = true,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`
        ${warnaLatar}
        border-brutal-thick border-laut-700
        shadow-brutal
        ${hoverLift ? 'hover-lift' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
