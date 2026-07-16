import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function SectionFinal() {
  const triggerConfettiCelebration = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFFFFF', '#AA7C11'],
      disableForReducedMotion: true
    });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 select-none">
      <div className="max-w-4xl text-center space-y-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          onViewportEnter={triggerConfettiCelebration}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <span className="text-xs tracking-[0.4em] text-gold-shimmer uppercase">With Every Shard of Gratitude</span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-none">
            Happy Birthday.
          </h1>
        </motion.div>

        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-3xl text-gray-300 font-light"
          >
            Thank you... for believing in me.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 }}
            className="pt-8 space-y-2"
          >
            <p className="text-xs tracking-widest text-[#9CA3AF] uppercase">Signed With Love</p>
            <p className="text-2xl font-serif text-gold-shimmer italic tracking-wide">BlueVantex</p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.25em] text-[#9CA3AF] uppercase">
        Built with Gratitude ❤️
      </div>
    </section>
  );
}