import { motion } from 'framer-motion';

export default function SectionDua() {
  const duaTranslations = [
    "May Allah preserve you.",
    "Bless your health.",
    "Increase your provision.",
    "Accept every good deed.",
    "Reward every sacrifice.",
    "Grant you happiness in this life and the next.",
    "Ameen."
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-4xl text-center space-y-12">
        {/* Sacred Arabic Calligraphy Graphic representation */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-4xl md:text-6xl text-gold-shimmer font-serif tracking-normal leading-relaxed mb-6"
        >
          حفظك الله ورعاك
        </motion.h2>

        <div className="space-y-4 max-w-2xl mx-auto">
          {duaTranslations.map((dua, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className={`text-lg md:text-2xl font-light tracking-wide ${
                dua === 'Ameen.' ? 'text-gold-shimmer font-semibold text-2xl md:text-4xl mt-6' : 'text-gray-300'
              }`}
            >
              {dua}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}