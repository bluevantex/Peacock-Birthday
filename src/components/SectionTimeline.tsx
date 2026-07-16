import { motion } from 'framer-motion';

export default function SectionTimeline() {
  const Milestones = [
    { role: "Mentor", description: "Navigated me through industry complexities and self-doubt." },
    { role: "Father", description: "Chose to give warmth and safety when the world felt cold." },
    { role: "Supporter", description: "Consistently backed my big visions and early ideas." },
    { role: "Teacher", description: "Imparted valuable lifetime lessons of trust, integrity, and honor." },
    { role: "Role Model", description: "Lived an exemplary life demonstrating devotion and excellence." },
    { role: "Guide", description: "Placed me on pathing nodes designed to unlock my true power." }
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-32">
      <div className="max-w-2xl w-full relative">
        {/* Timeline Core Spine Axis */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/50 to-[#D4AF37]/10" />

        <div className="space-y-16">
          {Milestones.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                key={idx}
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${
                  isEven ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline Orb Point */}
                <div className="absolute left-4 md:left-1/2 -translate-x-[6.5px] w-3.5 h-3.5 rounded-full bg-black border-2 border-[#D4AF37] z-10 shadow-[0_0_10px_#D4AF37]" />

                <div className={`pl-12 md:pl-0 w-full md:w-[45%] ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="glass-panel glass-panel-interactive p-6 rounded-2xl">
                    <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide mb-2">{milestone.role}</h3>
                    <p className="text-xs md:text-sm text-[#9CA3AF] font-light leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}