"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Discipline {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
}

const DISCIPLINES: Discipline[] = [
  {
    id: "brand-content-social",
    number: "01/",
    title: "Brand, Content & Social Media",
    tagline: "Build brand equity, distinctive visual identity, and organic cultural resonance across modern digital channels.",
    description: "We orchestrate end-to-end creative production, cinematic reels, and conversion-focused copywriting that transform passive scrollers into loyal customers and brand evangelists.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
    deliverables: [
      "Social Media Management",
      "Video Production & Reels",
      "Graphic Design & Branding",
      "Content Creation & Copywriting"
    ]
  },
  {
    id: "paid-ads-growth",
    number: "02/",
    title: "Paid Ads & Growth",
    tagline: "High-intent performance campaigns and paid acquisition engines engineered for measurable commercial velocity.",
    description: "We design, manage, and scale targeted multi-channel ad funnels that capture verified consumer intent, lower customer acquisition costs, and produce immediate sales pipeline.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    deliverables: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads (Search, Display & YouTube)",
      "Performance Marketing",
      "Lead Generation Campaigns"
    ]
  },
  {
    id: "website-ecommerce-seo",
    number: "03/",
    title: "Website, E-Commerce & SEO",
    tagline: "High-performance web infrastructure, seamless digital storefronts, and compounding organic search visibility.",
    description: "From modern editorial websites to conversion-optimized e-commerce storefronts, we build high-speed digital touchpoints that rank at the top of Google and convert visitors into transactions.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    deliverables: [
      "Website Design & Development",
      "E-Commerce Store Development",
      "Search Engine Optimization (SEO)",
      "Technical SEO & Site Architecture"
    ]
  },
  {
    id: "messaging-automation",
    number: "04/",
    title: "Messaging & Automation",
    tagline: "Direct-to-consumer conversational funnels, 24/7 AI chatbots, and automated lifecycle communication.",
    description: "Connect with high-intent buyers on the channels they use daily. We build automated WhatsApp API workflows, intelligent AI response bots, and localized Google Business listings that close deals instantly.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    deliverables: [
      "WhatsApp Marketing & Automation",
      "AI Chatbots & Business Automation",
      "Email & SMS Marketing",
      "Google Business Profile Optimization"
    ]
  },
  {
    id: "offline-consulting",
    number: "05/",
    title: "Offline & Consulting",
    tagline: "High-visibility outdoor brand presence paired with strategic, senior-level business and franchise consulting.",
    description: "We bridge the physical and digital divide through strategic regional billboards, print collateral, and ground-up commercial advisory that scales retail footprints and franchise networks.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
    deliverables: [
      "Offline Marketing (Hoardings, Banners & Printing)",
      "Marketing Strategy & Business Consulting",
      "Franchise Model Architecture",
      "Market Sizing & Competitive Positioning"
    ]
  }
];

export function FlightVerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#000000] text-white py-24 md:py-36 px-6 lg:px-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto space-y-14">
        {/* Section Title matching Flight PR */}
        <div className="text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
            What we do
          </h2>
        </div>

        {/* Desktop Horizontal Accordion Slider (Matching Flight PR Vertical Tabs) */}
        <div className="hidden lg:flex w-full h-[620px] border border-white/20 overflow-hidden bg-black select-none">
          {DISCIPLINES.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <motion.div
                key={item.id}
                layout
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveIndex(idx)}
                className={`relative h-full flex cursor-pointer transition-colors ${
                  isActive ? "flex-1 cursor-default bg-black" : "w-16 hover:bg-white/5"
                } ${idx !== 0 ? "border-l border-white/20" : ""}`}
              >
                {/* Collapsed Tab Strip Header */}
                <div className="w-16 h-full flex flex-col justify-between items-center py-8 shrink-0 relative z-20">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                    {item.number}
                  </span>
                  
                  {/* Rotated Vertical Title */}
                  <div className="h-full flex items-center justify-center my-6">
                    <span
                      style={{ writingMode: "vertical-rl" }}
                      className={`rotate-180 uppercase font-mono text-[11px] tracking-[0.22em] transition-colors whitespace-nowrap ${
                        isActive ? "text-white font-medium" : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* Indicator circle */}
                  <div className={`w-2 h-2 rounded-full border border-white/40 transition-colors ${
                    isActive ? "bg-white border-white" : "bg-transparent"
                  }`} />
                </div>

                {/* Expanded Content Panel */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key={`content-${item.id}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex-1 h-full grid grid-cols-12 overflow-hidden border-l border-white/10"
                    >
                      {/* Left: Grayscale Editorial Photography */}
                      <div className="col-span-6 relative h-full overflow-hidden bg-neutral-900 border-r border-white/10">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                      </div>

                      {/* Right: Editorial Discipline Detail */}
                      <div className="col-span-6 p-8 lg:p-12 flex flex-col justify-between overflow-y-auto">
                        <div className="space-y-6">
                          <div>
                            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
                              DISCIPLINE {item.number}
                            </span>
                            <h3 className="font-serif text-3xl xl:text-4xl font-normal text-white tracking-tight leading-snug">
                              {item.title}
                            </h3>
                          </div>

                          <p className="text-base text-neutral-300 font-light leading-relaxed">
                            {item.tagline}
                          </p>

                          <p className="text-sm text-neutral-400 font-light leading-relaxed">
                            {item.description}
                          </p>

                          <div className="pt-4 border-t border-white/10 space-y-3">
                            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 block">
                              CORE CAPABILITIES:
                            </span>
                            <ul className="grid grid-cols-1 gap-2.5 text-sm font-light text-neutral-300">
                              {item.deliverables.map((del, dIdx) => (
                                <li key={dIdx} className="flex items-center">
                                  <span className="text-neutral-400 mr-2 text-base leading-none">•</span>
                                  <span>{del}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-8">
                          <Link
                            href="/#connect"
                            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors"
                          >
                            <span>INQUIRE ABOUT THIS DISCIPLINE</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Accordion View (Matching Flight PR mobile responsiveness) */}
        <div className="lg:hidden border border-white/20 divide-y divide-white/20 bg-black">
          {DISCIPLINES.map((item, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div key={item.id} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="font-mono text-sm text-neutral-400">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="mobile-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-neutral-950"
                    >
                      <div className="p-6 pt-0 space-y-6">
                        <div className="aspect-[16/9] w-full overflow-hidden rounded bg-neutral-900 border border-white/10">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover grayscale contrast-125"
                          />
                        </div>

                        <p className="text-sm text-neutral-300 font-light leading-relaxed">
                          {item.tagline}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-white/10">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block">
                            CORE CAPABILITIES:
                          </span>
                          <ul className="space-y-1.5 text-xs text-neutral-300 font-light">
                            {item.deliverables.map((del, dIdx) => (
                              <li key={dIdx} className="flex items-center">
                                <span className="text-neutral-400 mr-2 leading-none">•</span>
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-2">
                          <Link
                            href="/#connect"
                            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white border-b border-white pb-1"
                          >
                            <span>INQUIRE ABOUT THIS DISCIPLINE</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

