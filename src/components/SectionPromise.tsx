import { motion } from 'framer-motion';

export default function SectionPromise() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 select-none bg-black">
      <div className="max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-gold-shimmer font-light tracking-wide leading-snug"
        >
          "I pray to become the man you have always believed I could be."
        </motion.p>
      </div>
    </section>
  );
}