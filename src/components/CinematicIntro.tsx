import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [step, setStep] = useState(0);

  const lines = [
    "Some people become family by blood...",
    "Some become family through love...",
    "Some become fathers through sacrifice..."
  ];

  useEffect(() => {
    if (step < lines.length) {
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 3500); // 3.5s spacing for reading pace and breathing room
      return () => clearTimeout(timer);
    } else {
      const endTimer = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(endTimer);
    }
  }, [step, onComplete, lines.length]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black px-6 text-center select-none">
      <AnimatePresence mode="wait">
        {step < lines.length && (
          <motion.div
            key={step}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-1"
          >
            <span className="text-xl md:text-3xl font-light tracking-wider text-white">
              {lines[step]}
            </span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-[2px] h-[24px] md:h-[32px] bg-[#D4AF37]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Elegant rising glow once final typewriter finishes */}
      {step === lines.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="absolute inset-0 bg-radial-[circle_at_center,rgba(212,175,55,0.1)_0%,rgba(0,0,0,0)_70%]"
        />
      )}
    </div>
  );
}