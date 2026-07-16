import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function StatItem({ value, label, isString = false }: { value: number | string, label: string, isString?: boolean }) {
  const countRef = useRef<HTMLDivElement>(null);
  const motionVal = useMotionValue(0);
  const displayedVal = useTransform(motionVal, (latest) => Math.floor(latest));
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView && !isString) {
      animate(motionVal, typeof value === 'number' ? value : 0, { duration: 3, ease: 'easeOut' });
    }
  }, [isInView, motionVal, value, isString]);

  return (
    <div ref={countRef} className="glass-panel p-8 text-center space-y-2 rounded-3xl">
      <div className="text-4xl md:text-6xl font-extrabold text-gold-shimmer">
        {isString ? (
          value
        ) : (
          <motion.span>{displayedVal}</motion.span>
        )}
      </div>
      <p className="text-xs tracking-widest text-[#9CA3AF] uppercase">{label}</p>
    </div>
  );
}

export default function SectionStats() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-24">
      <div className="max-w-5xl w-full grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatItem value="∞" label="Years of Wisdom" isString />
        <StatItem value={500} label="Lives Impacted" />
        <StatItem value="∞" label="Prayers Made" isString />
        <StatItem value="∞" label="Love Given" isString />
      </div>
    </section>
  );
}