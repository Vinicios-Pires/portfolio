"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const FONT_SIZE = 14;
const COLUMN_GAP = 18;

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = resolvedTheme === "dark";

    const textColor = isDark
      ? "rgba(0, 255, 70, 0.06)"
      : "rgba(22, 163, 74, 0.18)";
    const fadeColor = isDark
      ? "rgba(10, 10, 15, 0.05)"
      : "rgba(255, 255, 255, 0.04)";

    let columns = Math.floor(canvas.width / COLUMN_GAP);
    let drops: number[] = Array.from(
      { length: columns },
      () => -Math.floor(Math.random() * 40)
    );

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columns = Math.floor(canvas.width / COLUMN_GAP);
      drops = Array.from(
        { length: columns },
        () => -Math.floor(Math.random() * 40)
      );
    }

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    let lastTime = 0;
    const interval = 80; // ms between frames — controls speed

    function draw(timestamp: number) {
      rafRef.current = requestAnimationFrame(draw);

      if (timestamp - lastTime < interval) return;
      lastTime = timestamp;

      if (!ctx || !canvas) return;

      // Fade previous frame
      ctx.fillStyle = fadeColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = textColor;
      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = Math.random() > 0.5 ? "1" : "0";
        const x = i * COLUMN_GAP;
        const y = drops[i] * FONT_SIZE;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    />
  );
}
