'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASE_STUDIES, CaseStudy } from '@/data/content';
import FlexCarousel from '@/components/FlexCarousel';
import ChromaGrid from '@/components/ChromaGrid';

// Curated imagery matching each client's specific industry and custom uploads
const CASE_STUDY_IMAGES: Record<string, string> = {
  'cleaning-karigar': '/our-work/cleaning_karigar.png',
  travelzone:
    'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1000&q=80',
  'weshine-salon': '/our-work/weshinebeautynsalon.png',
  'sankalp-classes': '/our-work/sankalp-learning-classes-slc-telephone-exchange-road-bilaspur-chhattisgarh-tutorials-nzte73hdv9.jpg',
  'chandra-tiles':
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  'sanjivani-pharmacy':
    'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80',
  'biryani-and-co':
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
  'gyanoday-school':
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
};

// Vibrant curated spotlight accents for each individual card (giving each its unique color on hover)
const CASE_STUDY_ACCENTS: Record<string, string> = {
  'cleaning-karigar': '#38bdf8', // Electric Sky Cyan
  travelzone: '#ff8a4c',         // Sunset Amber / Orange
  'weshine-salon': '#ff7eb6',    // Vibrant Rose Pink
  'sankalp-classes': '#a855f7',  // Deep Violet / Purple
  'chandra-tiles': '#ffd23f',    // Warm Golden Ochre
  'sanjivani-pharmacy': '#34d399', // Emerald / Mint Green
  'biryani-and-co': '#f97316',   // Flame Tangerine
  'gyanoday-school': '#6366f1',  // Electric Indigo Blue
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
      {/* 1. Full Viewport Hero + Stats Section (Crisp Ice Blue & Black Brush Canvas - Matches Navbar) */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[75vh] lg:min-h-[calc(100vh-96px)] flex flex-col justify-between bg-[#F0F5FA] overflow-hidden">
        {/* Artistic Hand-Drawn Black Brush Stroke Curve */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 lg:w-[52%] pointer-events-none select-none overflow-hidden z-0 opacity-40 sm:opacity-75 lg:opacity-100">
          <img
            src="/images/flight-hero-brush-blue.jpg"
            alt=""
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Top/Middle Area: Editorial Headline & Subtitle */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 pt-12 sm:pt-20 md:pt-28 pb-12 flex-1 flex flex-col justify-center">
          <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6">
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
      </section>

      {/* Interactive Flex Carousel Section (Before "Looking to see something specific?") */}
      <section className="relative w-full overflow-hidden bg-[#F0F5FA] border-b border-blue-200/50">
        <div className="w-full h-[400px] sm:h-[480px] md:h-[560px] relative">
          <FlexCarousel
            items={[
              {
                src: '/our-work/cleaning_karigar.png',
                alt: 'Cleaning Karigar - Franchise Model Built from Scratch',
              },
              {
                src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
                alt: 'TravelZone - Marketing for Daily Vehicle Bookings',
              },
              {
                src: '/our-work/weshinebeautynsalon.png',
                alt: 'WeShine Beauty n Salon - Ground Level to Franchise',
              },
              {
                src: '/our-work/sankalp-learning-classes-slc-telephone-exchange-road-bilaspur-chhattisgarh-tutorials-nzte73hdv9.jpg',
                alt: 'Sankalp Learning Classes - High Velocity Enrollments',
              },
              {
                src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
                alt: 'Gyanoday English Medium School - 152 Admissions',
              },
              {
                src: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80',
                alt: 'Sanjivani Pharmacy - 45+ Admissions',
              },
            ]}
            preset="liquid"
            intro="rise"
            cardHeight={0.5}
            gap={12}
            squeeze={0.2}
            focusOnClick
            captions
            fit="natural"
            radius={0}
            lensWidth={0.74}
            lensHeight={1.18}
            tilt={62}
            roundness={0}
            bend={0.34}
            reach={0.38}
            curl="twist"
            dispersion={0.45}
            liquid={0}
            followCursor={false}
            autoplay={false}
            interval={4}
            captureWheel
          />
        </div>
      </section>

      {/* 2. Black Filter Section matching Image 2 */}
      <section className="bg-[#000000] text-white pt-14 md:pt-24 pb-10 md:pb-14 px-5 sm:px-8 md:px-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-start justify-between">
          {/* Left: Editorial Headline matching Image 2 */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl lg:text-[30px] font-normal leading-[1.18] text-white tracking-tight pb-4 md:pb-24 lg:pb-32">
              Looking to see something specific? <span className="italic font-normal text-neutral-200 block sm:inline">Filter your search.</span>
            </h2>

          </div>

          {/* Right: Sleek Outline Filter Box matching Image 2 */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="w-full max-w-sm border border-neutral-700 bg-black text-white p-5 sm:p-6 shadow-2xl rounded-none">
              <button
                type="button"
                onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
                className="w-full flex items-center justify-between font-serif text-lg tracking-tight text-white text-left hover:text-neutral-300 transition-colors"
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

      {/* 3. Responsive Interactive ChromaGrid Case Studies (Black Theme Work Section) */}
      <section className="bg-[#000000] text-white pb-20 md:pb-36 px-5 sm:px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <ChromaGrid
            items={filteredStudies.map((cs, idx) => {
              const fallbackColors = ['#ff8a4c', '#ff5a36', '#a98bff', '#38bdf8', '#ff7eb6', '#ffd23f', '#34d399', '#6366f1'];
              const cardAccent = CASE_STUDY_ACCENTS[cs.id] || fallbackColors[idx % fallbackColors.length];

              return {
                image:
                  CASE_STUDY_IMAGES[cs.id] ||
                  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
                title: cs.client,
                subtitle: cs.tagline,
                category: cs.category,
                statNumber: cs.statNumber,
                statLabel: cs.statLabel,
                accent: cardAccent,
                url: `/case-studies#${cs.id}`,
              };
            })}
            reveal="spotlight"
            columns={3}
            minCardWidth={240}
            gap={16}
            radius={260}
            aspectRatio="16 / 10"
            cardRadius={0}
            showInfo
            frame={false}
            softness={0.6}
            damping={0.45}
            fadeOut={0.6}
            grayscale={1}
            dim={0.12}
            glow={0.5}
            borderGlow={1}
          />
        </div>
      </section>

    </div>
  );
}
