// Simulasi ombak 2D pakai HTML5 Canvas — tanpa library WebGL

import { useEffect, useRef } from 'react';

interface Props {
  tinggi?: number;
}

export function OmbakCanvas({ tinggi = 220 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize handling untuk HiDPI
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const lebar = canvas.clientWidth;
      canvas.width = lebar * dpr;
      canvas.height = tinggi * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // partikel riak dari klik
    const ripples: { x: number; y: number; r: number; alpha: number }[] = [];
    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      for (let i = 0; i < 3; i++) {
        ripples.push({ x, y, r: 0, alpha: 1 });
      }
    };
    canvas.addEventListener('click', onClick);

    // gelembung yang naik perlahan
    const bubbles: { x: number; y: number; r: number; speed: number }[] = [];
    const spawnBubble = () => {
      if (!canvas) return;
      bubbles.push({
        x: Math.random() * canvas.clientWidth,
        y: tinggi + 10,
        r: 2 + Math.random() * 4,
        speed: 0.3 + Math.random() * 0.6,
      });
    };
    const bubbleInterval = window.setInterval(spawnBubble, 600);

    let frame = 0;
    let rafId = 0;
    const render = () => {
      frame++;
      const w = canvas.clientWidth;
      const h = tinggi;

      // latar gradien
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#7cc1d8');
      grad.addColorStop(0.5, '#3b9fbf');
      grad.addColorStop(1, '#0a3a5c');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // ombak — beberapa layer sinus
      const drawWave = (
        yBase: number,
        amplitude: number,
        wavelength: number,
        speed: number,
        color: string,
        alpha: number,
      ) => {
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 4) {
          const y = yBase
            + Math.sin((x / wavelength) + frame * speed) * amplitude
            + Math.sin((x / (wavelength * 0.4)) + frame * speed * 1.3) * (amplitude * 0.4);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      };

      drawWave(h * 0.55, 14, 120, 0.025, '#1a7a9d', 0.85);
      drawWave(h * 0.70, 18, 160, 0.030, '#062a44', 0.95);

      // gelembung
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.y -= b.speed;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.fill();
        if (b.y < -10) bubbles.splice(i, 1);
      }

      // riak klik
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.r += 1.2;
        r.alpha -= 0.02;
        if (r.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${r.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // matahari kecil di pojok
      ctx.beginPath();
      ctx.arc(w - 50, 50, 28, 0, Math.PI * 2);
      ctx.fillStyle = '#ffd76b';
      ctx.fill();

      rafId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('click', onClick);
      window.clearInterval(bubbleInterval);
      cancelAnimationFrame(rafId);
    };
  }, [tinggi]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full cursor-pointer"
      style={{ height: tinggi }}
      aria-label="Simulasi ombak interaktif — klik untuk membuat riak"
    />
  );
}