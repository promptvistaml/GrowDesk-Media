import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import RuixenBentoCards from '@/components/ui/ruixen-bento-cards';
import { FeaturesAlternatingLayout01 } from '@/components/ui/features-alternating-layout';
import { WhyGrowDeskHero } from '@/components/why-growdesk-hero';

export const metadata: Metadata = {
  title: 'Why GrowDesk | Strategic Growth & Narrative Advisory',
  description:
    'GrowDesk advises founders, executives, and institutions navigating critical inflection points—connecting creative positioning and performance execution directly to commercial outcomes.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#000000] text-white">
      {/* 1. Hero Section with Interactive Crosshair effect */}
      <WhyGrowDeskHero />

      {/* 2. Core Philosophy & Strategic Principles Bento Cards (Pure Black Theme #000000) */}
      <RuixenBentoCards />

      {/* 3. Alternating Features Showcase: Beautiful analytics to grow smarter */}
      <FeaturesAlternatingLayout01 />

      {/* 4. Brand Ethos Quote & Runway Framework Canvas */}
      <section className="relative overflow-hidden bg-[#FFFFFF] text-[#000000] pt-24 pb-28 md:pt-36 md:pb-36 px-8 md:px-16 border-t border-neutral-200">
        {/* Background Graphic Artwork: Lightened opacity with multiply blend matching other pages */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <img
            src="/images/runway-banner-blue.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply"
          />
        </div>

        {/* Soft bottom gradient fade into pure white to blend seamlessly with the footer below */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent pointer-events-none z-0" />

        <div className="relative z-10 max-w-[1100px] mx-auto text-center space-y-8">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
            GrowDesk Advisory Ethos
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-[44px] font-normal text-neutral-900 leading-[1.22] tracking-tight max-w-4xl mx-auto">
            &ldquo;We operate at altitude—high enough to see the market terrain, close enough to understand what&apos;s at stake.&rdquo;
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Whether launching a franchise model from scratch or accelerating established operations into new territories, our strategic advisory brings structure, clarity, and capital efficiency.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/case-studies"
              className="relative inline-block overflow-hidden rounded-none border border-black/80 bg-white text-black px-8 py-3.5 text-[11px] font-mono uppercase tracking-[0.2em] font-medium shadow-sm transition-colors duration-300 before:absolute before:inset-0 before:bg-black before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-y-100 hover:text-white"
            >
              <span className="relative z-10">View Selected Work →</span>
            </Link>
            <Link
              href="/services"
              className="relative inline-block overflow-hidden rounded-none border border-neutral-300 bg-white/60 text-neutral-800 px-7 py-3.5 text-[11px] font-mono uppercase tracking-[0.2em] font-medium transition-colors duration-300 before:absolute before:inset-0 before:bg-black before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-y-100 hover:text-white hover:border-black backdrop-blur-xs"
            >
              <span className="relative z-10">Explore What We Do →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. White Footer blending seamlessly */}
      <Footer />
    </main>
  );
}
