'use client';

import { motion } from 'framer-motion';

export function FlightHero() {
  return (
    <section className="bg-[#000000] text-white pt-24 pb-20 md:pt-36 md:pb-28 text-center flex flex-col items-center justify-center px-6">
      {/* Flight PR iconic statement */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal max-w-4xl tracking-tight leading-tight"
      >
        Advising leaders when the next move matters.
      </motion.h1>
    </section>
  );
}

