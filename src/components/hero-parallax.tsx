'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // -- Parallax Transforms --
  // 1. Particles: Slowest, background depth
  const yParticles = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // 2. Indiana Outline: Moves across the screen
  const xIndiana = useTransform(scrollYProgress, [0, 1], ["-10%", "100%"]);
  const yIndiana = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // 3. Flag: Moves slightly faster than outline and scales
  const yFlag = useTransform(scrollYProgress, [0, 1], ["10%", "40%"]);
  const scaleFlag = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // 4. Text: Drifts up at medium speed
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // 5. Crowd: Moves slightly faster than background
  const yCrowd = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // 6. Fist: Foreground element, moves fast but stays lower
  const yFist = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // 7. Cardinal: Flies off screen (up and right)
  const yCardinal = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const xCardinal = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rotateCardinal = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div
      ref={ref}
      className="relative w-full h-[85vh] md:h-[100vh] overflow-hidden bg-background flex flex-col items-center justify-start pt-20 lg:pt-32"
    >
      {/* LAYER 1: Particle Background */}
      <motion.div
        style={{ y: yParticles }}
        className="absolute inset-0 z-0"
      >
        <ParticleEffect />
      </motion.div>

      {/* LAYER 2: Indiana Outline (SVG or Image) */}
      <motion.div
        style={{ x: xIndiana, y: yIndiana }}
        className="absolute top-[30%] -translate-y-1/2 left-[5%] z-0 w-[50vw] h-[40vh] md:w-[400px] md:h-[500px] opacity-30 dark:opacity-40 pointer-events-none"
      >
        <Image
          src="/hero/indiana-outline.png"
          alt="Indiana Outline"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* LAYER 2.5: Indiana Flag */}
      <motion.div
        style={{ y: yFlag, scale: scaleFlag }}
        className="absolute top-[5%] md:top-[18%] left-[35%] -translate-x-1/2 z-0 w-[80vw] h-[80vh] md:w-[800px] md:h-[600px] opacity-20 pointer-events-none"
      >
        <Image
          src="/hero/Flag_of_Indiana.png"
          alt="Indiana Flag"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* LAYER 3: Text (Behind the crowd slightly) */}
      <motion.div
        style={{ y: yText }}
        className="relative z-30 flex flex-col items-center justify-center w-full text-center mt-10 md:mt-20"
      >
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x pb-2 bg-[length:200%_auto] drop-shadow-2xl flex gap-4 md:gap-8 flex-wrap justify-center">
          <SplitText word="ACT." delay={0} />
          <SplitText word="IN." delay={0.2} />
          <SplitText word="ART." delay={0.4} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 text-lg md:text-2xl font-medium text-muted-foreground max-w-2xl px-4"
        >
          Advocacy through creativity. Change through expression.
        </motion.p>
      </motion.div>

      {/* LAYER 4: Crowd (Mid-ground) */}
      <motion.div
        style={{ y: yCrowd }}
        className="absolute bottom-0 left-0 right-0 z-10 w-full flex justify-center items-end pointer-events-none opacity-40 mix-blend-multiply dark:mix-blend-screen"
      >
        <div className="relative w-full h-[400px] md:h-[600px]">
          {/* Fallback gradient if image is missing */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
          <Image
            src="/hero/protest-crowd.png"
            alt="Crowd of protestors"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </motion.div>

      {/* LAYER 5: Cardinal (Floating Accent) */}
      <motion.div
        style={{ y: yCardinal, x: xCardinal, rotate: rotateCardinal }}
        className="absolute top-[15%] right-[8%] md:right-[18%] z-20 w-32 h-32 md:w-64 md:h-64 pointer-events-none"
      >
        <Image
          src="/hero/cardinal.png"
          alt="Cardinal"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* LAYER 6: Fist (Foreground) */}
      <motion.div
        style={{ y: yFist }}
        className="absolute -bottom-[5%] left-[15%] md:left-[20%] z-20 w-[300px] h-[500px] md:w-[500px] md:h-[800px] pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full relative"
        >
          <Image
            src="/hero/raised-fist.png"
            alt="Raised Fist"
            fill
            className="object-contain object-bottom drop-shadow-2xl mask-image-gradient"
          />
        </motion.div>
      </motion.div>

      {/* Gradient Fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-50" />
    </div>
  );
}


// --- Helper: Split Text Animation ---
function SplitText({ word, delay }: { word: string, delay: number }) {
  return (
    <span className="inline-flex overflow-hidden">
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: delay + (i * 0.05),
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

// --- Helper: Particle System ---
function ParticleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    const getThemeColor = () => {
      const style = getComputedStyle(document.body);
      const primary = style.getPropertyValue('--primary').trim();
      const accent = style.getPropertyValue('--accent').trim() || primary;

      return {
        primary: primary ? `hsla(${primary}, 0.5)` : 'rgba(0,0,0,0.2)',
        accent: accent ? `hsla(${accent}, 0.8)` : 'rgba(255,0,0,0.5)',
      };
    };

    let colors = getThemeColor();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = canvas!.height + Math.random() * 100;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * -2 - 0.5;
        this.life = 1.0;
        this.color = Math.random() > 0.5 ? colors.primary : colors.accent;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 0.005;

        if (this.life <= 0 || this.y < 0) {
          this.x = Math.random() * canvas!.width;
          this.y = canvas!.height + 10;
          this.life = 1.0;
          this.speedY = Math.random() * -2 - 0.5;
          this.color = Math.random() > 0.5 ? colors.primary : colors.accent;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color.replace(/[\d.]+\)$/g, `${this.life})`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particleCount = 60;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const observer = new MutationObserver(() => {
      colors = getThemeColor();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'style'] });

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, [mounted, theme]);

  return <canvas ref={canvasRef} className="w-full h-full opacity-60" />;
}


