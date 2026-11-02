'use client';

import { useRef } from 'react';
import Crosshair from '@/components/Crosshair';

export function WhyGrowDeskHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#F0F5FA] text-[#000000] pt-20 pb-24 md:pt-32 md:pb-36 px-8 md:px-16 overflow-hidden"
    >
      {/* Precision Crosshair effect scoped specifically to Why GrowDesk */}
      <Crosshair
        containerRef={containerRef}
        color="#1E63FF"
        thickness={1}
        opacity={0.8}
        smoothing={0.3}
        targetEffect="lock"
        targetSelector="a, button, img, [data-crosshair-target]"
        showCoordinates
        clickPulse
      />

      <div className="relative z-10 max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column / Editorial Statement */}
        <div className="lg:col-span-7 space-y-8">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
            Why GrowDesk // Who We Are
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] text-neutral-900 tracking-tight">
            Decisive counsel for moments of public consequence.
          </h1>
          <div className="space-y-4 text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
            <p>
              Communications decisions are business decisions that directly influence valuation, trust, enterprise value, and long-term commercial momentum.
            </p>
            <p className="text-sm sm:text-base text-neutral-500">
              We advise founders, executive teams, and emerging market leaders at critical inflection points—connecting positioning, performance marketing, and digital infrastructure to tangible commercial outcomes.
            </p>
          </div>
        </div>

        {/* Right Column / Architectural Grayscale Photograph matching Flight PR */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden bg-neutral-100 border border-neutral-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Executive leadership and strategic advisory"
              className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
