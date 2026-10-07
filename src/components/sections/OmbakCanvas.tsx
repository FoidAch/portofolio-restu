// Simulasi ombak 2D pakai HTML5 Canvas — tanpa library WebGL
// Dipakai sebagai background penuh di section Hero

import { useEffect, useRef } from 'react';

interface Props {
  /** Callback saat user klik/tap canvas — dikasih koordinat relatif ke canvas */
  onRipple?: (x: number, y: number) => void;
  className?: string;
}

export function OmbakCanvas({ onRipple, className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const onRippleRef = useRef(onRipple);
  onRippleRef.current = onRipple;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    // Resize handling untuk HiDPI + full parent size
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const lebar = parent.clientWidth;
      const tinggi = parent.clientHeight;
      canvas.width = Math.max(1, Math.floor(lebar * dpr));
      canvas.height = Math.max(1, Math.floor(tinggi * dpr));
      canvas.style.width = `${lebar}px`;
      canvas.style.height = `${tinggi}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    // partikel riak dari klik
    const ripples: { x: number; y: number; r: number; alpha: number }[] = [];

    const spawnRipple = (x: number, y: number) => {
      for (let i = 0; i < 4; i++) {
        ripples.push({ x, y, r: i * 8, alpha: 1 - i * 0.12 });
      }
      onRippleRef.current?.(x, y);
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawnRipple(x, y);
    };
    canvas.addEventListener('pointerdown', onPointer);

    // gelembung yang naik perlahan
    const bubbles: { x: number; y: number; r: number; speed: number }[] = [];
    const spawnBubble = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (w <= 0 || h <= 0) return;
      bubbles.push({
        x: Math.random() * w,
        y: h + 10,
        r: 2 + Math.random() * 5,
        speed: 0.25 + Math.random() * 0.55,
      });
    };
    const bubbleInterval = window.setInterval(spawnBubble, 500);

    let frame = 0;
    let rafId = 0;
    const render = () => {
      frame++;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (w <= 0 || h <= 0) {
        rafId = requestAnimationFrame(render);
        return;
      }

      // latar gradien laut dalam
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#b8e0ec');
      grad.addColorStop(0.35, '#3b9fbf');
      grad.addColorStop(0.7, '#0a3a5c');
      grad.addColorStop(1, '#041d31');
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
        for (let x = 0; x <= w; x += 3) {
          const y =
            yBase +
            Math.sin(x / wavelength + frame * speed) * amplitude +
            Math.sin(x / (wavelength * 0.45) + frame * speed * 1.25) * (amplitude * 0.35);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      };

      drawWave(h * 0.58, 16, 140, 0.022, '#1a7a9d', 0.75);
      drawWave(h * 0.72, 22, 180, 0.028, '#062a44', 0.9);
      drawWave(h * 0.85, 12, 100, 0.035, '#041d31', 0.95);

      // gelembung
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.y -= b.speed;
        b.x += Math.sin(frame * 0.02 + b.x) * 0.15;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        ctx.fill();
        if (b.y < -12) bubbles.splice(i, 1);
      }

      // riak klik
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.r += 1.8;
        r.alpha -= 0.014;
        if (r.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${r.alpha})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      // matahari kecil di pojok kanan atas
      const sunX = w - 56;
      const sunY = 52;
      ctx.beginPath();
      ctx.arc(sunX, sunY, 26, 0, Math.PI * 2);
      ctx.fillStyle = '#ffd76b';
      ctx.fill();
      // soft glow
      ctx.beginPath();
      ctx.arc(sunX, sunY, 38, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,215,107,0.18)';
      ctx.fill();

      rafId = requestAnimationFrame(render);
    };
    render();

    return () => {
      ro.disconnect();
      canvas.removeEventListener('pointerdown', onPointer);
      window.clearInterval(bubbleInterval);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full cursor-pointer ${className}`}
      aria-label="Simulasi ombak interaktif — sentuh untuk membuat riak"
    />
  );
}
