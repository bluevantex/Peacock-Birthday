import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SectionDevMode() {
  const [typedCode, setTypedCode] = useState('');
  const fullCode = `class Uncle:
    kindness = infinity
    wisdom = infinity
    generosity = infinity
    mentorship = infinity`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedCode(fullCode.slice(0, index));
      index++;
      if (index > fullCode.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-24 font-mono text-xs md:text-sm">
      <div className="w-full max-w-3xl glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between bg-white/5 px-6 py-4 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[10px] tracking-wider text-gray-400">DEVELOPER_MODE_ROOT</span>
        </div>

        {/* Python Code Typing Panel */}
        <div className="p-6 md:p-10 space-y-8 bg-black/40">
          <pre className="text-emerald-400/90 leading-relaxed overflow-x-auto">
            <code>{typedCode}</code>
            <span className="w-2 h-4 bg-white inline-block animate-pulse ml-1 align-middle" />
          </pre>

          {/* Terminal Loading Output Diagnostics */}
          <div className="space-y-4 pt-6 border-t border-white/5">
            {[
              { name: "Wisdom", duration: 1.5 },
              { name: "Kindness", duration: 2.2 },
              { name: "Guidance", duration: 3.0 }
            ].map((module, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[#9CA3AF]">
                  <span>Loading {module.name}...</span>
                  <span className="text-emerald-400">100%</span>
                </div>
                <div className="h-[2px] bg-[#D4AF37]/20 w-full overflow-hidden rounded-full">
                  <motion.div 
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: module.duration, ease: "easeInOut" }}
                    className="h-full bg-[#D4AF37]"
                  />
                </div>
              </div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 3.2 }}
              className="pt-4 text-center border-t border-white/5"
            >
              <span className="text-gold-shimmer font-bold text-base md:text-lg animate-pulse tracking-widest">
                &gt; SYSTEM STATUS: LEGEND ONLINE
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}