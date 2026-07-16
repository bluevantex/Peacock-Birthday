import { motion } from 'framer-motion';

export default function SectionHospital() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black px-6 py-24 select-none">
      {/* ECG Heartbeat Path Art Animation */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center opacity-10 pointer-events-none">
        <svg className="w-full max-w-5xl h-48" viewBox="0 0 1000 100" fill="none">
          <motion.path
            d="M0,50 L300,50 L310,20 L320,80 L330,50 L340,50 L350,10 L360,90 L370,50 L600,50 L610,20 L620,80 L630,50 L1000,50"
            stroke="#D4AF37"
            strokeWidth="3"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 4, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="max-w-2xl text-center space-y-12 relative z-10">
        {[
          "There was a day... when I became weak.",
          "When I was admitted into the hospital...",
          "You didn't just ask if I was okay.",
          "You carried my burden.",
          "You settled my hospital bills. You stood by me.",
          "That kindness... will remain in my heart forever."
        ].map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: index * 0.4, ease: "easeOut" }}
            className={`text-lg md:text-2xl font-light tracking-wide ${
              index === 5 ? 'text-gold-shimmer font-serif italic font-normal text-xl md:text-3xl' : 'text-gray-300'
            }`}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}