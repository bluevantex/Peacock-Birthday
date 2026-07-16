import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalLoaderProps {
  onComplete: () => void;
}

export default function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [bootPhase, setBootPhase] = useState(0);

  const modules = [
    "Gratitude Engine",
    "Memories",
    "Love",
    "Guidance",
    "Mentorship",
    "Kindness",
    "Sacrifice"
  ];

  useEffect(() => {
    // Print out modules sequentially mimicking kernel printouts
    if (bootPhase < modules.length) {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, `[ OK ] Booting ${modules[bootPhase]} Module...`]);
        setBootPhase((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [bootPhase]);

  useEffect(() => {
    if (bootPhase === modules.length) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 80);
      return () => clearInterval(interval);
    }
  }, [bootPhase]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black px-4 select-none font-mono text-xs md:text-sm">
      <div className="w-full max-w-lg glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl space-y-4">
        <div className="flex gap-2 border-b border-white/10 pb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/55" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/55" />
          <div className="w-3 h-3 rounded-full bg-green-500/55" />
        </div>
        
        <div className="space-y-2 min-h-[160px] text-gray-400">
          {logs.map((log, i) => (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              key={i}
            >
              {log}
            </motion.p>
          ))}
        </div>

        {bootPhase === modules.length && (
          <div className="space-y-2 pt-4">
            <div className="flex justify-between text-white">
              <span>Optimizing Memory Allocations...</span>
              <span className="text-gold-shimmer">{progress}%</span>
            </div>
            <div className="w-full bg-white/5 h-[3px] rounded-full overflow-hidden">
              <motion.div
                className="bg-[#D4AF37] h-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {progress === 100 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center pt-4"
          >
            <p className="text-emerald-400 mb-4 animate-pulse">SYSTEM STATUS: EXPERIENCE READY</p>
            <button
              onClick={onComplete}
              className="px-6 py-2 border border-[#D4AF37]/50 rounded-full text-white text-xs tracking-[0.2em] hover:bg-[#D4AF37]/10 transition-all uppercase"
            >
              Press ENTER / Click here to launch
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}