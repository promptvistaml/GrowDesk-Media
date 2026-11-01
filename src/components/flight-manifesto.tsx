'use client';

import Link from 'next/link';

export function FlightManifesto() {
  return (
    <section className="relative overflow-hidden bg-[#FBF9F5] text-[#000000] pt-26 pb-26 md:pt-26 md:pb-26 px-8 md:px-16 border-b border-[#ECEAE2]">
      {/* Bottom-Right Soft Organic Earthen Dune Silhouette */}
      <svg
        className="pointer-events-none absolute right-0 bottom-0 w-[55vw] max-w-[800px] h-auto text-[#ECEAE2] select-none z-0"
        viewBox="0 0 800 450"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 450C220 400 360 260 520 280C680 300 740 200 800 180V450H0Z" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column / Editorial Copy */}
        <div className="lg:col-span-7 space-y-8">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] text-neutral-900 tracking-tight">
            Strategic communications for moments where visibility, trust, and narrative shape business outcomes.
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-xl">
            <p>
              Flight advises founders and executives at critical inflection points—launches, fundraising, rapid growth, M&amp;A, breakthrough campaigns, public scrutiny, and leadership transitions.
            </p>
            <p>
              We shape narrative, align visibility with business strategy, and ensure communications decisions support favorable, long-term outcomes.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/case-studies"
              className="inline-block border border-black px-7 py-3 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-900 hover:bg-black hover:text-white transition-colors"
            >
              View Selected Work
            </Link>
          </div>
        </div>

        {/* Right Column / Framed Fortune Editorial Device Photograph */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative p-3 bg-white border border-neutral-300 shadow-xl max-w-sm sm:max-w-md w-full">
            <div className="aspect-[4/3] sm:aspect-square overflow-hidden bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80"
                alt="Strategic advisory laptop and coffee desk"
                className="w-full h-full object-cover grayscale-[25%] contrast-[1.05]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
