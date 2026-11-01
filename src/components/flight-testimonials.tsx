'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: '"You gave us the best possible outcome for our launch. Thank you!"',
    author: 'VIC FATNANI',
    title: 'CO-FOUNDER AND GM, ADLINGO (GOOGLE)',
  },
  {
    quote: '"GrowDesk is the best growth and marketing partner for scaling businesses."',
    author: 'SAHIN BOYDAS',
    title: 'FOUNDER & CEO, REMOTETEAM.COM (ACQUIRED BY GUSTO)',
  },
  {
    quote: '"A tremendous partner in helping us gain high-intent traction before and after our key expansion. Highly recommended!"',
    author: 'KATHERINE WINSTON',
    title: 'HEAD OF MARKETING, PLUNK',
  },
  {
    quote: '"We worked with many marketing agencies before but were never satisfied until working with the GrowDesk leadership team."',
    author: 'DANA LOBERG',
    title: 'FOUNDER & CEO, LEO',
  },
];

export function FlightTestimonials() {
  // Page number continuously increments on "next" and decrements on "prev"
  // so the carousel keeps advancing infinitely in the same direction like a circle.
  const [[page, direction], setPage] = useState([0, 1]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // True modulo calculation to cycle through testimonials indefinitely
  const currentIndex = ((page % testimonials.length) + testimonials.length) % testimonials.length;
  const current = testimonials[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
    }),
    center: {
      x: '0%',
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
    }),
  };

  return (
    <section className="relative overflow-hidden bg-[#F2EFE9] text-[#000000] py-32 md:py-44 px-6 sm:px-12 select-none border-t border-b border-neutral-300">
      {/* Background Organic Abstract Shapes */}
      <svg
        className="pointer-events-none absolute left-0 top-0 w-80 md:w-[480px] h-auto text-[#E6E1D7] select-none z-0"
        viewBox="0 0 500 250"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H400C380 40 360 80 280 80C200 80 180 160 100 160C40 160 0 200 0 250V0Z" />
      </svg>

      <svg
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-[45vw] max-w-[650px] h-full text-[#EAE6DD] select-none z-0"
        viewBox="0 0 600 600"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M600 0V600C500 550 420 500 360 380C300 250 450 180 400 60C380 20 450 0 600 0Z" />
      </svg>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Infinite Circular Slider Viewport with comfortable height */}
        <div className="relative w-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 240, damping: 28 },
              }}
              className="absolute w-full px-4 sm:px-8 space-y-6 flex flex-col items-center justify-center"
            >
              <h2
                className={`font-serif font-normal text-neutral-900 leading-[1.25] tracking-tight max-w-3xl mx-auto ${
                  current.quote.length > 80
                    ? 'text-xl sm:text-3xl md:text-4xl'
                    : 'text-2xl sm:text-4xl md:text-5xl'
                }`}
              >
                {current.quote}
              </h2>

              <div className="space-y-1 pt-1">
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-600">
                  — {current.author}
                </p>
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 font-light">
                  {current.title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Arrow Navigation Controls */}
        <div className="flex items-center justify-center gap-10 mt-12 pt-4">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="p-2 text-neutral-800 hover:text-black hover:-translate-x-1 transition-all group cursor-pointer"
          >
            <svg
              className="w-8 h-4 stroke-[1.5]"
              viewBox="0 0 34 16"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M33 8H1M1 8L8 1M1 8L8 15" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="p-2 text-neutral-800 hover:text-black hover:translate-x-1 transition-all group cursor-pointer"
          >
            <svg
              className="w-8 h-4 stroke-[1.5]"
              viewBox="0 0 34 16"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 8H33M33 8L26 1M33 8L26 15" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
