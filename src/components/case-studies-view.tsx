'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface DetailedCaseStudy {
  id: string;
  caseNumber: string;
  client: string;
  tagline: string;
  category: string;
  filterGroup: string;
  tag: string;
  highlightStat: string;
  highlightLabel: string;
  description: string;
  bullets: string[];
  image: string;
}

const DETAILED_CASE_STUDIES: DetailedCaseStudy[] = [
  {
    id: 'cleaning-karigar',
    caseNumber: 'CASE 01',
    client: 'Cleaning Karigar',
    tagline: 'Franchise Model Built from Scratch',
    category: 'FRANCHISE DEVELOPMENT & BRANDING',
    filterGroup: 'franchise',
    tag: 'MULTI-CITY',
    highlightStat: 'Multi-City',
    highlightLabel: 'EXPANSION TRAJECTORY',
    description:
      'We helped develop the franchise model from the ground up, alongside brand positioning and targeted franchise promotion. The business is now actively expanding across multiple cities in India.',
    bullets: [
      'Built the complete turnkey franchise model from scratch',
      'Developed high-conversion marketing and franchise-promotion acquisition strategies',
      'Supported comprehensive brand positioning and multi-city expansion efforts',
    ],
    image: '/our-work/cleaning_karigar.png',
  },
  {
    id: 'travelzone',
    caseNumber: 'CASE 02',
    client: 'TravelZone',
    tagline: 'Marketing for Daily Vehicle Bookings',
    category: 'LEAD GENERATION & PERFORMANCE ADS',
    filterGroup: 'leadgen',
    tag: 'DAILY INQUIRIES',
    highlightStat: 'Daily Inquiries',
    highlightLabel: 'ACROSS FLEET CLASSES',
    description:
      "Continuous marketing activities driving qualified booking inquiries across TravelZone's fleet categories using targeted digital promotion, social video content, and conversion campaigns.",
    bullets: [
      'Multi-category fleet campaigns (sedan, SUV, luxury, tempo)',
      'High-intent marketing for local, airport transfers, outstation, and corporate cab services',
      'Content & lead-funnel campaigns hyper-focused on confirmed booking inquiries',
    ],
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'weshine-salon',
    caseNumber: 'CASE 03',
    client: 'WeShine Beauty n Salon',
    tagline: 'From Ground Level to Franchise Model',
    category: 'BRAND BUILDING & FRANCHISE STRATEGY',
    filterGroup: 'franchise',
    tag: 'GROUND-TO-SCALE',
    highlightStat: 'Ground-to-Scale',
    highlightLabel: 'FRANCHISE TRANSITION',
    description:
      'Partnered with the brand from its grassroots stage, executing promotional marketing and architecting a franchise-based business model for regional footprint growth.',
    bullets: [
      'Full brand identity refinement and promotional launch campaigns',
      'Direct customer-acquisition marketing support driving chair occupancy',
      'Franchise model blueprint and long-term expansion roadmap',
    ],
    image: '/our-work/weshinebeautynsalon.png',
  },
  {
    id: 'sankalp-classes',
    caseNumber: 'CASE 04',
    client: 'Sankalp Learning Classes',
    tagline: '600+ Student Contacts Collected',
    category: 'EDUCATION & ADMISSIONS MARKETING',
    filterGroup: 'education',
    tag: '600+ CONTACTS',
    highlightStat: '600+ Contacts',
    highlightLabel: 'STUDENT DATABASE',
    description:
      'Marketing activities helped gather a database of more than 600 student contact details, providing a base for follow-up and future admission campaigns.',
    bullets: [
      '600+ student contact details collected through marketing',
      'Created a potential student-lead database',
      'Supported future enrollment and follow-up campaigns',
    ],
    image:
      '/our-work/sankalp-learning-classes-slc-telephone-exchange-road-bilaspur-chhattisgarh-tutorials-nzte73hdv9.jpg',
  },
  {
    id: 'chandra-tiles',
    caseNumber: 'CASE 05',
    client: 'Chandra Tiles',
    tagline: 'Followers Doubled in One Month',
    category: 'SOCIAL VISIBILITY & REGIONAL REACH',
    filterGroup: 'social',
    tag: '2X REACH',
    highlightStat: '2× Velocity',
    highlightLabel: '4-BRANCH AUDIENCE',
    description:
      "Within one month of marketing, Chandra Tiles' social media followers reportedly doubled, improving its online presence and expanding its potential audience.",
    bullets: [
      '2× social media followers in one month',
      'Improved digital visibility and brand awareness',
      'Marketing support for a business with four branches',
    ],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'sanjivani-pharmacy',
    caseNumber: 'CASE 06',
    client: 'Sanjivani Institute of Pharmacy',
    tagline: '45+ Admissions in Two Months',
    category: 'INSTITUTIONAL ENROLLMENT & ADS',
    filterGroup: 'education',
    tag: '45+ ADMISSIONS',
    highlightStat: '45+ Admissions',
    highlightLabel: '60-DAY ENROLLMENT',
    description:
      'Focused marketing over two months reportedly generated more than 45 student admissions.',
    bullets: [
      '45+ student admissions in two months',
      'Marketing focused on student inquiries and admissions',
      'Supported institutional visibility and enrollment growth',
    ],
    image:
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'biryani-and-co',
    caseNumber: 'CASE 07',
    client: 'Biryani and Co.',
    tagline: 'Reported 2× Sales Growth',
    category: 'F&B GROWTH & LOCAL PERFORMANCE',
    filterGroup: 'franchise',
    tag: '2X SALES',
    highlightStat: '2× Sales',
    highlightLabel: 'SCALE & EXPANSION',
    description:
      'Biryani and Co. began as a small food cart. The business reported an increase in sales and production after marketing and promotional activities.',
    bullets: [
      'Handi size increased from 10 kg to 15 kg',
      'Reported daily sales increased from 10–12 to 22–25 servings',
      'Reported sales growth of approximately 2×',
    ],
    image:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gyanoday-school',
    caseNumber: 'CASE 08',
    client: 'Gyanoday Vidya Sanskar School',
    tagline: '152 Admissions (Goal: 50+)',
    category: 'EDUCATION & ADMISSIONS MARKETING',
    filterGroup: 'education',
    tag: '152 ADMISSIONS',
    highlightStat: '152 Admissions',
    highlightLabel: '3X BENCHMARK',
    description:
      "The school's initial goal was approximately 50+ admissions. After two months of marketing, the school reportedly achieved 152 admissions.",
    bullets: [
      'Initial target: approximately 50+ admissions',
      'Reported result: 152 admissions in two months',
      'More than three times the initial 50-admission benchmark',
    ],
    image:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
  },
];

// Filter category mapping matching GrowDesk case study disciplines
const CATEGORY_FILTERS = [
  { id: 'all', label: 'All Work' },
  { id: 'education', label: 'Education & Admissions' },
  { id: 'franchise', label: 'Franchise & Retail' },
  { id: 'leadgen', label: 'Lead Generation & Ads' },
  { id: 'social', label: 'Social & Visibility' },
];

export function CaseStudiesView() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);

  const filteredStudies =
    activeFilter === 'all'
      ? DETAILED_CASE_STUDIES
      : DETAILED_CASE_STUDIES.filter((cs) => cs.filterGroup === activeFilter);

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

      {/* 2. Black Filter Section matching Image 2 */}
      <section className="bg-[#000000] text-white pt-14 md:pt-20 pb-8 sm:pb-12 px-5 sm:px-8 md:px-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-start justify-between">
          {/* Left: Editorial Headline matching Image 2 */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl lg:text-[30px] font-normal leading-[1.18] text-white tracking-tight">
              Looking to see something specific?{' '}
              <span className="italic font-normal text-neutral-200 block sm:inline">
                Filter your search.
              </span>
            </h2>
          </div>

          {/* Right: Sleek Outline Filter Box matching Image 2 */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="w-full max-w-sm border border-neutral-700 bg-[#0a0a0a] text-white p-5 sm:p-6 shadow-2xl rounded-none">
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
                    const count =
                      cat.id === 'all'
                        ? DETAILED_CASE_STUDIES.length
                        : DETAILED_CASE_STUDIES.filter(
                            (cs) => cs.filterGroup === cat.id
                          ).length;

                    return (
                      <li key={cat.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveFilter(cat.id);
                            setFilterDropdownOpen(false);
                          }}
                          className={`w-full text-left py-1 text-sm font-sans transition-all flex items-center justify-between ${
                            isActive
                              ? 'text-white font-medium pl-2.5 border-l-2 border-white'
                              : 'text-neutral-400 hover:text-white pl-2.5 border-l-2 border-transparent'
                          }`}
                        >
                          <span>{cat.label}</span>
                          <span className="text-xs font-mono text-neutral-500">
                            ({count})
                          </span>
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

      {/* 3. Detailed Case Studies Grid (Matching Exact Dark Card Spec) */}
      <section className="bg-[#000000] text-white pb-24 md:pb-36 px-5 sm:px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((cs) => (
              <div
                key={cs.id}
                className="group bg-[#111111] border border-neutral-800 hover:border-neutral-700 transition-colors duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Image with Corner Badge */}
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-neutral-900 border-b border-neutral-800">
                  <img
                    src={cs.image}
                    alt={cs.client}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-white text-black px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider font-semibold shadow-md">
                    {cs.tag}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Case Eyebrow & Category */}
                    <div className="flex items-center justify-between text-neutral-400 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest gap-2">
                      <span className="shrink-0">{cs.caseNumber}</span>
                      <span className="truncate text-right">{cs.category}</span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl sm:text-[28px] font-normal text-white tracking-tight leading-snug">
                        {cs.client}
                      </h3>
                      <p className="text-xs sm:text-[13px] font-mono text-neutral-400">
                        {cs.tagline}
                      </p>
                    </div>

                    {/* Milestone Highlight Box */}
                    <div className="bg-[#1c1c1c] border border-neutral-800 px-4 py-3 flex items-center justify-between">
                      <span className="font-serif text-xl sm:text-2xl text-white font-normal tracking-tight">
                        {cs.highlightStat}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                        {cs.highlightLabel}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed">
                      {cs.description}
                    </p>

                    {/* Core Interventions */}
                    <div className="space-y-2 pt-1">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">
                        CORE INTERVENTIONS:
                      </span>
                      <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed">
                        {cs.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-neutral-500 shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Explore Link */}
                  <div className="pt-5 border-t border-white/10">
                    <a
                      href={`https://wa.me/919109991901?text=${encodeURIComponent(
                        `Hi GrowDesk, I would like to explore your execution and case study on ${cs.client}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] uppercase tracking-[0.2em] text-white hover:text-neutral-300 transition-colors flex items-center justify-between group/link font-medium"
                    >
                      <span>EXPLORE EXECUTION</span>
                      <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform text-xs">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
