'use client';

import Link from 'next/link';

export function FlightCallout() {
  return (
    <section className="bg-[#000000] text-white py-28 md:py-36 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-neutral-100 leading-snug tracking-tight">
          We advance leaders navigating complexity, scrutiny, and irreversible decisions in the AI era—where speed, scale, and visibility redefine the stakes.
        </h2>

        <div>
          <Link
            href="/contact"
            className="inline-block border border-white text-white hover:bg-white hover:text-black font-sans text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 font-medium"
          >
            Work with us &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

