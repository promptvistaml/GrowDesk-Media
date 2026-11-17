'use client';

import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from './client-logos-data';

const clients = [
  {
    name: 'Cleaning Karigar',
    category: 'Franchise Model',
    logo: CLIENT_LOGOS.cleaning_karigar || '/our-work/cleaning_karigar.png',
  },
  {
    name: 'TravelZone',
    category: 'Fleet Bookings',
    logo: CLIENT_LOGOS.travel_zone || '/our-work/travel_zone.png',
  },
  {
    name: 'WeShine Beauty n Salon',
    category: 'Franchise Network',
    logo: CLIENT_LOGOS.weshine || '/our-work/weshine.png',
  },
  {
    name: 'Sankalp Learning Classes',
    category: 'Education Funnels',
    logo: CLIENT_LOGOS.sankalp || '/our-work/sankalp.png',
  },
  {
    name: 'Chandra Tiles',
    category: 'Multi-Branch Brand',
    logo: CLIENT_LOGOS.chandra_tiles || '/our-work/chandra_tiles.png',
  },
  {
    name: 'Sanjivani Institute of Pharmacy',
    category: 'Higher Education',
    logo: CLIENT_LOGOS.sanjivani || '/our-work/sanjivani.png',
  },
  {
    name: 'Gyanoday Vidya Sanskar School',
    category: 'Institutional Admissions',
    logo: CLIENT_LOGOS.gyanoday || '/our-work/gyanoday.png',
  },
];

export function FlightClients() {
  // Duplicate list to achieve continuous infinite marquee loop
  const marqueeList = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="bg-[#000000] text-white py-16 sm:py-20 md:py-24 overflow-hidden select-none relative z-10">

      <div className="max-w-6xl mx-auto px-6 mb-10 sm:mb-12 flex flex-col items-end text-right">
        <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-bold tracking-[-0.035em] text-white leading-[0.95] uppercase">
          Who we&apos;ve
        </h2>
        <div className="font-script text-4xl sm:text-6xl md:text-7xl text-[#7299FF] font-bold opacity-95 leading-[1.0] -mt-2 sm:-mt-3 select-none lowercase">
          worked with.
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Subtle Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

        <motion.div
          className="flex items-center gap-10 sm:gap-14 whitespace-nowrap will-change-transform"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 45,
            ease: 'linear',
          }}
        >
          {marqueeList.map((client, idx) => (
            <div
              key={idx}
              className="flex shrink-0 items-center gap-8 sm:gap-12 group cursor-default"
            >
              <div className="flex shrink-0 items-center justify-center h-16 sm:h-20 min-w-[90px] max-w-[220px] px-2 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-85">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 sm:h-16 w-auto max-w-[180px] object-contain pointer-events-none select-none drop-shadow-md grayscale contrast-125"
                  loading="eager"
                  decoding="sync"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
