'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASE_STUDIES, CaseStudy } from '@/data/content';

// Curated high-res imagery matching each client's specific industry
const CASE_STUDY_IMAGES: Record<string, string> = {
  'cleaning-karigar':
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80',
  travelzone:
    'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1000&q=80',
  'weshine-salon':
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
  'sankalp-classes':
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
  'chandra-tiles':
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  'sanjivani-pharmacy':
    'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80',
  'biryani-and-co':
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
  'gyanoday-school':
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
};

// Filter category mapping matching GrowDesk case study disciplines
const CATEGORY_FILTERS = [
  { id: 'all', label: 'All Work' },
  { id: 'education', label: 'Education & Admissions' },
  { id: 'franchise', label: 'Franchise & Retail' },
  { id: 'leadgen', label: 'Lead Generation & Ads' },
  { id: 'social', label: 'Social & Visibility' },
];

function getCategoryGroup(cs: CaseStudy): string {
  const cat = (cs.category + ' ' + cs.tagline).toLowerCase();
  if (cat.includes('school') || cat.includes('pharmacy') || cat.includes('education') || cat.includes('admission')) {
    return 'education';
  }
  if (cat.includes('franchise') || cat.includes('f&b') || cat.includes('salon')) {
    return 'franchise';
  }
  if (cat.includes('lead') || cat.includes('performance') || cat.includes('booking')) {
    return 'leadgen';
  }
  return 'social';
}

export function CaseStudiesView() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);

  const filteredStudies = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => getCategoryGroup(cs) === activeFilter);

  return (
    <div className="w-full bg-[#000000] text-white">
      {/* 1. Full Viewport Hero + Stats Section (Alabaster & Black Brush Canvas) */}
      <section className="relative w-full min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-96px)] flex flex-col justify-between bg-[#FAFBF6] overflow-hidden">
        {/* Artistic Hand-Drawn Black Brush Stroke Curve */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 lg:w-[52%] pointer-events-none select-none overflow-hidden z-0">
          <img
            src="/images/flight-hero-brush.jpg"
            alt=""
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Top/Middle Area: Editorial Headline & Subtitle */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-16 pt-16 sm:pt-24 md:pt-28 pb-12 flex-1 flex flex-col justify-center">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
              Our Work // Impact Ledger
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-normal leading-[1.08] text-neutral-900 tracking-tight">
              Selected engagements across high-stakes growth moments.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
              The following case profiles summarize reported results, campaign developments, and commercial milestones shared by our partner leadership teams.
            </p>
          </div>
        </div>

        {/* Bottom Metrics Bar: Full-Width Warm Sand Tone (#EBEBDE) with Vertical Dividers */}
        <div className="relative z-10 w-full bg-[#EBEBDE] border-t border-black/10">
          <div className="w-full max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-black/15">
            <div className="px-6 sm:px-8 py-6 sm:py-8 lg:py-10 space-y-1">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 block tracking-tight">
                152
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 block">
                School Admissions (3× Benchmark)
              </span>
            </div>

            <div className="px-6 sm:px-8 py-6 sm:py-8 lg:py-10 space-y-1">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 block tracking-tight">
                45+
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 block">
                Pharmacy Admissions in 60 Days
              </span>
            </div>

            <div className="px-6 sm:px-8 py-6 sm:py-8 lg:py-10 space-y-1">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 block tracking-tight">
                2×
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 block">
                Sales & Follower Velocity
              </span>
            </div>

            <div className="px-6 sm:px-8 py-6 sm:py-8 lg:py-10 space-y-1">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 block tracking-tight">
                600+
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 block">
                Student Contacts Captured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Black Filter Section matching Image 2 */}
      <section className="bg-[#000000] text-white pt-24 pb-14 px-8 md:px-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start justify-between">
          {/* Left: Editorial Headline matching Image 2 */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-xl sm:text-xl lg:text-[30px] font-normal leading-[1.14] text-white tracking-tight pb-32">
              Looking to see something specific? <span className="italic font-normal text-neutral-200">Filter your search.</span>
            </h2>

          </div>

          {/* Right: Sleek Outline Filter Box matching Image 2 */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="w-full max-w-sm border border-neutral-700 bg-black text-white p-6 shadow-2xl">
              <button
                type="button"
                onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
                className="w-full flex items-center justify-between font-serif text-lg tracking-tight text-white   text-left hover:text-neutral-300 transition-colors"
              >
                <span>Filter By:</span>
                {filterDropdownOpen ? (
                  <ChevronUp className="w-4 h-4 text-neutral-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-400" />
                )}
              </button>

              {filterDropdownOpen && (
                <ul className="pt-4 space-y-2.5">
                  {CATEGORY_FILTERS.map((cat) => {
                    const isActive = activeFilter === cat.id;
                    const count = cat.id === 'all'
                      ? CASE_STUDIES.length
                      : CASE_STUDIES.filter((cs) => getCategoryGroup(cs) === cat.id).length;

                    return (
                      <li key={cat.id}>
                        <button
                          type="button"
                          onClick={() => setActiveFilter(cat.id)}
                          className={`w-full text-left py-1 text-sm font-sans transition-all flex items-center justify-between ${isActive
                            ? 'text-white font-medium pl-2.5 border-l-2 border-white'
                            : 'text-neutral-400 hover:text-white pl-2.5 border-l-2 border-transparent'
                            }`}
                        >
                          <span>{cat.label}</span>

                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Responsive 3-Column Case Studies Grid (Black Theme Work Section) */}
      <section className="bg-[#000000] text-white pb-28 md:pb-36 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            <AnimatePresence>
              {filteredStudies.map((cs, idx) => {
                const imgUrl = CASE_STUDY_IMAGES[cs.id] ||
                  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80';

                return (
                  <motion.article
                    key={cs.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex flex-col bg-neutral-950 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 shadow-xl"
                  >
                    {/* Visual Card Image Thumbnail */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-neutral-800">
                      <img
                        src={imgUrl}
                        alt={cs.client}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Metric Callout Overlay Badge */}
                      <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white border border-neutral-700 shadow-sm">
                        {cs.statNumber}
                      </div>
                    </div>

                    {/* Card Content Block */}
                    <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        {/* Eyebrow & Category */}
                        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                          <span>CASE 0{idx + 1}</span>
                          <span className="text-neutral-500">{cs.category}</span>
                        </div>

                        {/* Client Heading */}
                        <h2 className="font-serif text-2xl font-normal text-white group-hover:text-neutral-200 tracking-tight leading-snug">
                          {cs.client}
                        </h2>

                        {/* Tagline */}
                        <p className="text-xs font-mono text-neutral-300 font-medium tracking-tight">
                          {cs.tagline}
                        </p>

                        {/* Stat Highlight Box */}
                        <div className="py-2.5 px-3 bg-neutral-900 border border-neutral-800 flex items-baseline justify-between">
                          <span className="font-serif text-xl text-white font-normal">
                            {cs.statNumber}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                            {cs.statLabel}
                          </span>
                        </div>

                        {/* Description Summary */}
                        <p className="text-xs sm:text-[13px] text-neutral-400 font-light leading-relaxed">
                          {cs.description}
                        </p>

                        {/* Key Bullets / Interventions */}
                        <div className="pt-2 border-t border-neutral-900">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2 font-semibold">
                            Core Interventions:
                          </span>
                          <ul className="space-y-1.5 text-xs text-neutral-400 font-light">
                            {cs.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-neutral-600 mt-2 shrink-0" />
                                <span className="leading-tight">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Card Footer Link */}
                      <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                        <Link
                          href="/services#framework"
                          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
                        >
                          <span>Explore Execution</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
