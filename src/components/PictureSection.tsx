import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// 1. Import the photo directly using a relative path
import Photo from "../assets/Big-T.png";

export default function PictureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Slow, immersive zooming motion aligned with scroll actions
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-24 select-none overflow-hidden"
    >
      <div className="relative w-full max-w-lg glass-panel rounded-3xl p-4 md:p-6 overflow-hidden flex flex-col items-center">
        {/* Soft backlighting */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(212,175,55,0.12)_0%,rgba(0,0,0,0)_80%] pointer-events-none" />

        {/* Frame Outer Layer Container */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden glass-panel border border-white/10">
          <motion.img
            style={{ scale: imageScale }}
            // 2. Use the imported variable as the src
            src={Photo}
            alt="My Uncle"
            className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
          />
        </div>

        <div className="text-center mt-8 space-y-2 relative z-10">
          <span className="text-[10px] tracking-[0.3em] text-[#9CA3AF] uppercase">
            The Backbone Of Our Journey
          </span>
          <h2 className="text-xl md:text-2xl font-light text-white tracking-wide">
            The Man We Celebrate Today
          </h2>
        </div>
      </div>
    </section>
  );
}
