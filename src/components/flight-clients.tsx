'use client';

import { motion } from 'framer-motion';

const clients = [
  { name: 'Cleaning Karigar', category: 'Franchise Model' },
  { name: 'TravelZone', category: 'Fleet Bookings' },
  { name: 'WeShine Beauty n Salon', category: 'Franchise Network' },
  { name: 'Sankalp Learning Classes', category: 'Education Funnels' },
  { name: 'Chandra Tiles', category: 'Multi-Branch Brand' },
  { name: 'Sanjivani Institute of Pharmacy', category: 'Higher Education' },
  { name: 'Biryani and Co.', category: 'F&B Retail Growth' },
  { name: 'Gyanoday Vidya Sanskar School', category: 'Institutional Admissions' },
];

export function FlightClients() {
  // Duplicate list to achieve continuous infinite marquee loop
  const marqueeList = [...clients, ...clients, ...clients];

  return (
    <section className="bg-[#000000] text-white py-24 md:py-32 border-t border-b border-white/10 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-6 text-center mb-14">
        <h3 className="font-serif text-3xl sm:text-4xl text-neutral-200 font-normal tracking-tight">
          Who we&apos;ve worked with
        </h3>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Subtle Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex items-center gap-14 sm:gap-20 whitespace-nowrap will-change-transform"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 150,
            ease: 'linear',
          }}
        >
          {marqueeList.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 group cursor-default"
            >
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight text-white/90 group-hover:text-white transition-colors font-light">
                  {client.name}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 mt-0.5">
                  {client.category}
                </span>
              </div>
              <span className="text-white/20 text-xl font-light select-none">/</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
