import { motion } from 'framer-motion';

export default function SectionFather() {
  const sentences = [
    "Not because we share the same blood...",
    "But because you chose to love me like your own.",
    "You stood by me.",
    "Corrected me.",
    "Prayed for me.",
    "Believed in me.",
    "Supported me.",
    "For that...",
    "I will forever remain grateful."
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-4xl w-full flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <span className="text-5xl md:text-7xl font-light text-gold-shimmer font-mono">01</span>
          <div className="h-[1px] flex-1 bg-[#D4AF37]/30" />
          <span className="text-xs tracking-[0.3em] uppercase text-[#9CA3AF]">The Foundation</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
          A Father Figure
        </h2>

        <div className="space-y-4">
          {sentences.map((sentence, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
              className={`text-lg md:text-2xl font-light tracking-wide ${
                index === sentences.length - 1 ? 'text-gold-shimmer font-normal text-xl md:text-3xl mt-6' : 'text-gray-300'
              }`}
            >
              {sentence}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}