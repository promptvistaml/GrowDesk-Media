'use client';

import React from 'react';
import Link from 'next/link';

export function FlightTestimonials() {
  return (
    <section className="relative overflow-hidden bg-[#000000] text-white py-24 sm:py-32 md:py-36 px-4 sm:px-6 md:px-8 select-none border-t border-b border-white/10 font-sans">
      {/* Ambient Blue Optical Flares */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[420px] bg-blue-600/18 blur-[160px] rounded-full z-0" />
      <div className="pointer-events-none absolute top-1/3 -right-20 w-[550px] h-[450px] bg-blue-500/14 blur-[150px] rounded-full z-0" />
      <div className="pointer-events-none absolute -bottom-36 left-10 w-[600px] h-[380px] bg-blue-700/12 blur-[150px] rounded-full z-0" />

      <div className="relative z-10 max-w-6xl mx-auto font-sans">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 font-sans">
      
          <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-bold tracking-[-0.035em] text-white leading-[0.95] max-w-3xl mx-auto uppercase">
            They trust us to turn<br />
            bold concepts into
          </h2>
          <div className="font-script text-4xl sm:text-6xl md:text-7xl text-[#7299FF] font-bold opacity-95 leading-[1.0] -mt-2 sm:-mt-4 select-none lowercase">
            real world wins.
          </div>
        </div>

        {/* 2x2 Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch font-sans">
          {/* Card 1 (Top Left): Royal Blue Metric Card */}
          <div className="rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[440px] shadow-2xl transition-all duration-300 hover:shadow-blue-600/30 hover:scale-[1.01] relative overflow-hidden group font-sans bg-gradient-to-br from-[#1E50FF]/90 via-[#1030D0]/85 to-[#081878]/90 backdrop-blur-xl border border-blue-400/20">
            {/* Internal Optical Flare */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-blue-400/30 blur-[70px] rounded-full z-0" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/15 blur-[60px] rounded-full z-0" />

            {/* Top Icon & Title */}
            <div className="relative z-10">
              {/* Futuristic Wireframe Goggles / Infinity Symbol */}
              <div className="inline-flex items-center text-white/95 mb-6">
                <svg
                  width="46"
                  height="26"
                  viewBox="0 0 46 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-auto"
                >
                  <rect
                    x="1.5"
                    y="1.5"
                    width="43"
                    height="23"
                    rx="11.5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  />
                  <ellipse
                    cx="14.5"
                    cy="13"
                    rx="6.5"
                    ry="6.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <ellipse
                    cx="31.5"
                    cy="13"
                    rx="6.5"
                    ry="6.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="21"
                    y1="13"
                    x2="25"
                    y2="13"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight leading-snug max-w-md">
                How we drove massive growth across multiple industries
              </h3>

              {/* Stats List */}
              <div className="mt-8 space-y-3 sm:space-y-4 text-sm sm:text-base font-medium font-sans text-white/95">
                <ul className="flex flex-col gap-5 mb-12">
                        <li className="flex items-center gap-3">
                            <span className="text-white font-bold text-lg md:text-xl">152</span>
                            <span className="text-blue-100 font-medium">School admissions in two months</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-white font-bold text-lg md:text-xl">45+</span>
                            <span className="text-blue-100 font-medium">Pharmacy admissions in two months</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-white font-bold text-lg md:text-xl">600+</span>
                            <span className="text-blue-100 font-medium">Student contacts collected</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-white font-bold text-lg md:text-xl">2x</span>
                            <span className="text-blue-100 font-medium">Reported sales / follower growth</span>
                        </li>
                    </ul>
              </div>
            </div>

            {/* Bottom Link */}
            <div className="mt-10 pt-4">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest text-white/90 group-hover:text-white font-semibold transition-colors"
              >
                <span>VIEW PROJECTS</span>
                <span className="transition-transform group-hover:translate-x-1">&gt;</span>
              </Link>
            </div>
          </div>

          {/* Card 2 (Top Right): Man Testimonial Photo */}
          <div className="relative rounded-3xl overflow-hidden min-h-[440px] flex flex-col justify-end p-8 sm:p-10 shadow-2xl group transition-all duration-300 hover:scale-[1.01] bg-[#0c0e12] font-sans">
            <img
              src="/our-work/IMG_2513.jpg"
              alt="Gyanoday Vidya Sanskar School"
              className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
              loading="eager" 
            />
            {/* Ambient Gradient to ensure high-contrast readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

            <div className="relative z-10 font-sans">
              <p className="text-base sm:text-xl font-bold font-sans text-white leading-snug tracking-tight mb-3">
                &ldquo;Achieved 152 admissions in two months, more than three times our initial benchmark.&rdquo;
              </p>
              <p className="text-xs font-sans uppercase tracking-[0.22em] text-neutral-400 font-semibold">
                GYANODAY VIDYA SANSKAR SCHOOL
              </p>
            </div>
          </div>

          {/* Card 3 (Bottom Left): Woman Testimonial Photo */}
          <div className="relative rounded-3xl overflow-hidden min-h-[440px] flex flex-col justify-end p-8 sm:p-10 shadow-2xl group transition-all duration-300 hover:scale-[1.01] bg-[#0c0e12] font-sans">
            <img
              src="/our-work/weshinebeautynsalon.png"
              alt="WeShine Beauty & Salon / Cleaning Karigar"
              className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
              loading="eager" 
            />
            {/* Ambient Gradient to ensure high-contrast readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

            <div className="relative z-10 font-sans">
              <p className="text-base sm:text-xl font-bold font-sans text-white leading-snug tracking-tight mb-3">
                &ldquo;Built our franchise model from scratch and expanded across multiple cities.&rdquo;
              </p>
              <p className="text-xs font-sans uppercase tracking-[0.22em] text-neutral-400 font-semibold">
                CLEANING KARIGAR, CO-FOUNDER
              </p>
            </div>
          </div>

          {/* Card 4 (Bottom Right): Split Stack of Two Cards */}
          <div className="flex flex-col gap-6 min-h-[440px] font-sans">
            {/* Sub-card 4A: Dark Charcoal Challenge Card */}
            <div className="bg-[#141419] border border-white/5 rounded-3xl p-7 sm:p-9 flex flex-col justify-between flex-1 shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:border-white/10 group font-sans">
              {/* Script Brand Logo in clean sans bold */}
              <div>
                <span className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  Biriyani and Co.
                </span>
                <p className="text-base sm:text-lg font-normal font-sans text-neutral-400 leading-snug mt-6">
                  Challenge — Scale a small food cart and increase daily production and sales.
                </p>
              </div>
            </div>

            {/* Sub-card 4B: Crisp White Execution Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-white via-white/95 to-slate-50/90 backdrop-blur-xl border border-white/80 text-black rounded-3xl p-7 sm:p-9 flex flex-col justify-between flex-1 shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:border-blue-200/60 group font-sans">
                {/* Subtle soft blue optical sheen */}
                <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 bg-blue-500/10 blur-[50px] rounded-full z-0" />
              <div className="relative z-10">
                {/* Soundwave / Equalizer Bars Icon */}
                <div className="flex items-center gap-1 text-black mb-4">
                  <span className="w-1 h-3 bg-black rounded-full" />
                  <span className="w-1 h-5 bg-black rounded-full" />
                  <span className="w-1 h-7 bg-black rounded-full" />
                  <span className="w-1 h-4 bg-black rounded-full" />
                  <span className="w-1 h-2 bg-black rounded-full" />
                </div>

                <p className="text-sm sm:text-base font-normal font-sans text-neutral-900 leading-snug">
                  Marketing and promotional campaigns driving immediate business outcomes.
                </p>

                {/* Metrics */}
                <div className="mt-5 space-y-1.5 text-xs sm:text-sm font-medium font-sans text-neutral-700">
                  <p className="flex items-center gap-1.5">
                    <span className="text-blue-600">↑ 210%</span>
                    <span>2x Reported Sales Growth</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="text-blue-600">↑ 15kg</span>
                    <span>Handi Size increased to 15 kg</span>
                  </p>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="mt-6 pt-2">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1 text-xs font-sans uppercase tracking-widest text-black font-bold hover:opacity-75 transition-opacity"
                >
                  <span>VIEW PROJECTS</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
