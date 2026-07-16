import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

interface HeroProps {
  onBegin: () => void;
}

export default function HeroSection({ onBegin }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Elegant floating micro-interaction
    gsap.to(containerRef.current, {
      y: -15,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen text-center z-10 select-none px-4"
    >
      <div className="max-w-4xl space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs md:text-sm font-medium tracking-[0.4em] uppercase text-gold-shimmer"
        >
          An Interactive Gratitude Chronicle
        </motion.p>

        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-none"
          >
            Happy Birthday
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-6xl font-semibold tracking-tight text-white/80"
          >
            To My Guiding Light,
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-3xl font-light italic tracking-wider text-gold-shimmer"
          >
            A Father. A Mentor. A Blessing.
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="pt-10"
        >
          <button
            onClick={onBegin}
            className="px-8 py-4 glass-panel glass-panel-interactive rounded-full text-white text-xs tracking-[0.3em] uppercase hover:scale-105 transition-all"
          >
            Begin Experience
          </button>
        </motion.div>
      </div>
    </div>
  );
}
