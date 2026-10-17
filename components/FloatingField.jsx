import { useEffect, useRef } from 'react';

/**
 * FloatingField — light 3D depth: a calm field of drifting dots and faint
 * constellation lines, layered with a slow parallax "depth" simulation
 * (deeper specks drift slower and smaller). Reads as a subtle 3D motion
 * field rather than a flat particle grid.
 *
 * tone="space"  — light specks on a dark background (footer)
 * tone="ink"    — ink specks on a light background (banner)
 */

const PALETTES = {
  space: {
    speck: (tw, deep) => `rgba(255, 255, 255, ${(tw * 0.55 * deep).toFixed(3)})`,
    accent: (tw, deep) => `rgba(228, 0, 43, ${(tw * 0.9 * deep).toFixed(3)})`,
    line: 'rgba(183, 193, 255, 0.08)',
  },
  ink: {
    speck: (tw, deep) => `rgba(10, 22, 80, ${(tw * 0.42 * deep).toFixed(3)})`,
    accent: (tw, deep) => `rgba(228, 0, 43, ${(tw * 0.5 * deep).toFixed(3)})`,
    line: 'rgba(10, 22, 80, 0.07)',
  },
};

const FloatingField = ({ className = '', tone = 'space', maxParticles = 110 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const palette = PALETTES[tone] || PALETTES.space;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let particles = [];
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Depth layers: 0 = deep (slow, small, faint) → 1 = near (faster, bigger)
    const seed = () => {
      const count = Math.min(Math.max(Math.round((w * h) / 14000), 42), maxParticles);
      particles = Array.from({ length: count }, (_, i) => {
        const depth = Math.random(); // 0 deep … 1 near
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          depth,
          r: 0.4 + depth * (tone === 'ink' ? 1.6 : 1.4),
          vx: (Math.random() - 0.5) * 0.06 * depth,
          vy: -(0.03 + 0.2 * depth),
          phase: Math.random() * Math.PI * 2,
          speed: 0.4 + depth * 0.8,
          accent: i % 7 === 0,
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);

      // Constellation links only between specks of similar depth — that keeps
      // them reading as planes in space rather than a flat net.
      ctx.strokeStyle = palette.line;
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j];
          if (Math.abs(a.depth - b.depth) > 0.18) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (dx * dx + dy * dy < 8100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Near specks get a faint soft glow halo — cheap 3D bloom
      for (const p of particles) {
        const twinkle = 0.4 + 0.6 * Math.abs(Math.sin(t * 0.0004 * p.speed + p.phase));
        if (p.depth > 0.75) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 3.2, 0, Math.PI * 2);
          ctx.fillStyle = palette.speck(twinkle * 0.18, 1);
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.accent ? palette.accent(twinkle, 0.35 + p.depth) : palette.speck(twinkle, 0.35 + p.depth);
        ctx.fill();
      }
    };

    const step = (t) => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -6) p.y = h + 6;
        if (p.x < -6) p.x = w + 6;
        if (p.x > w + 6) p.x = -6;
      }
      draw(t);
      raf = requestAnimationFrame(step);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      draw(1200); // repaint after resize so the field is never blank
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          cancelAnimationFrame(raf);
        } else if (!reduced) {
          raf = requestAnimationFrame(step);
        }
      },
      { threshold: 0.02 },
    );
    io.observe(canvas);

    // Always paint one static frame so the field is never empty — also covers
    // throttled tabs and prefers-reduced-motion.
    draw(1200);
    if (!reduced) {
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [tone, maxParticles]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export default FloatingField;
