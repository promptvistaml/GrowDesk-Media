import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { FlightVerticalTabs } from '@/components/flight-vertical-tabs';
import { WORK_PROCESS_STEPS } from '@/data/content';

export const metadata: Metadata = {
  title: 'What We Do | Strategic Communications & Narrative Advisory',
  description:
    'Our work supports leaders at inflection points—when decisions around visibility, narrative, and response carry lasting impact.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#000000] text-white">
      {/* 1. Top Hero Section (Pure White Canvas #FFFFFF matching receipts background) */}
      <section className="bg-[#FFFFFF] text-[#000000] pt-20 pb-24 md:pt-32 md:pb-36 px-8 md:px-16 overflow-hidden">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column / Editorial Statement */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] text-neutral-900 tracking-tight">
              Our work powers ambitious brands at inflection points—where visibility, performance ads, and automation turn into real revenue
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
              From ground-up franchise modelling to high-velocity lead funnels, we connect creative execution directly to your WhatsApp—turning market attention into daily inquiries and long-term scale.
            </p>
          </div>

          {/* Right Column / Architectural Grayscale Photograph matching Flight PR */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden bg-neutral-100 border border-neutral-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Modern architectural lines at inflection point"
                className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive "What we do" Horizontal Accordion / Vertical Tabs (Pure Black #000000) */}
      <FlightVerticalTabs />

      {/* 3. The Runway / Strategic Process Framework (Crisp Ice Blue Canvas blending seamlessly into white footer) */}
      <section id="framework" className="relative overflow-hidden bg-[#F6F9FD] text-[#000000] pt-24 pb-28 md:pt-36 md:pb-36 px-8 md:px-16 border-t border-blue-100">
        {/* Background Graphic Artwork: Lightened opacity with multiply blend */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <img
            src="/images/runway-banner-blue.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply"
          />
        </div>

        {/* Soft bottom gradient fade into pure white to blend seamlessly with the footer below */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent pointer-events-none z-0" />

        <div className="relative z-10 max-w-[1300px] mx-auto space-y-16">
          {/* Header & View More Button matching receipts layout */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-7">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
                The Runway // Strategic Process
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-normal text-neutral-900 tracking-tight leading-[1.12]">
                Understand. Plan. Create. Launch. Optimise. Report.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                Every initiative follows a rigorous phased progression to ensure message clarity, tracking fidelity, and capital efficiency.
              </p>
            </div>

            {/* View Selected Work boxy sliding hover button */}
            <div className="shrink-0">
              <Link
                href="/case-studies"
                className="relative inline-block overflow-hidden rounded-none border border-black/80 bg-white text-black px-8 py-3.5 text-[11px] font-mono uppercase tracking-[0.2em] font-medium shadow-sm transition-colors duration-300 before:absolute before:inset-0 before:bg-black before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-y-100 hover:text-white"
              >
                <span className="relative z-10">View Selected Work →</span>
              </Link>
            </div>
          </div>

          {/* 6 Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {WORK_PROCESS_STEPS.map((step) => (
              <div key={step.step} className="border-t border-neutral-300 pt-7 space-y-3">
                <span className="font-mono text-xs text-neutral-400 block tracking-wider">
                  STAGE {step.step}
                </span>
                <h3 className="font-serif text-2xl font-normal text-neutral-900 tracking-tight">
                  {step.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-600 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
