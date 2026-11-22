'use client';

import { motion } from 'framer-motion';

const capabilities = [
  'Meta & Google Performance Ads',
  'Lead Generation & Admission Funnels',
  'Social Media & Viral Reels Production',
  'Turnkey Franchise Model Development',
  'WhatsApp Business & AI Automation',
  'Brand Positioning & Visual Identity',
  'Website & E-Commerce Development',
  'Search Engine & Local GMB Optimization',
  'Offline Media, Hoardings & Print',
  'Marketing Strategy & Growth Consulting'
];

export function FlightAiEra() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] text-[#000000] py-14 sm:py-24 md:py-36 px-4 sm:px-6 border-t border-neutral-100">
      {/* Ambient Blue Corner Optical Flares on Light Canvas */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[700px] h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(30,99,255,0.12)_0%,rgba(79,169,255,0.05)_40%,transparent_70%)] blur-[120px] rounded-full z-0" />
      <div className="pointer-events-none absolute -bottom-36 -right-32 w-[650px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.10)_0%,rgba(30,99,255,0.04)_40%,transparent_70%)] blur-[130px] rounded-full z-0" />
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 style={{ color: "#000000" }} className="font-clash text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-black !text-black leading-[0.95] uppercase">
            In the digital era, noise compounds fast.
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            style={{ color: "#1E63FF" }}
            className="font-script text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1E63FF] !text-[#1E63FF] font-bold opacity-95 leading-[1.0] -mt-1 sm:-mt-3 select-none lowercase"
          >
            execution drives outcomes.
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="text-xs sm:text-base md:text-lg text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Our work sits at the intersection of brand positioning, performance media, and automated lead capture. We operate close to the ground—strategic enough to build multi-city franchises, and tactical enough to drive daily bookings, admissions, and sales.
        </motion.p>

        {/* 2-column bulleted list with staggered text appearance (Always 2 columns together) */}
        <div className="pt-4 sm:pt-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-y-2 sm:gap-y-3.5 gap-x-3 sm:gap-x-8 text-left text-[11px] sm:text-sm font-light text-neutral-700">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.28 + i * 0.05, ease: 'easeOut' }}
                className="flex items-center gap-1.5 sm:gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                <span className="capitalize text-neutral-800 font-medium leading-tight">{cap}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

