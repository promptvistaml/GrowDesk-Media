import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Footer } from '@/components/footer';
import { FlightVerticalTabs } from '@/components/flight-vertical-tabs';
import { WORK_PROCESS_STEPS } from '@/data/content';
import { SERVICES_SEO, AGENCY_INFO } from '@/data/seo-data';
import { BreadcrumbsJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Digital Marketing & Business Automation Services | GrowDesk Media',
  description:
    'Explore GrowDesk Media’s core services: Paid Ads & Performance Lead Gen, Social Media & Reel Production, Modern Web Development, SEO, WhatsApp Automation, and Offline Branding across Raipur, Bilaspur, Durg, Bhilai, Nagpur, MP & Odisha.',
  keywords: [
    'digital marketing services Chhattisgarh',
    'paid advertisement agency Raipur',
    'lead generation company Bilaspur',
    'social media management Durg Bhilai',
    'Instagram reel production Chhattisgarh',
    'web development and SEO Raipur',
    'WhatsApp marketing agency Bilaspur',
    'AI chatbot automation Central India',
    'offline branding and hoardings Raipur',
    'Growdex Media services'
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Digital Marketing & Business Automation Services | GrowDesk Media',
    description:
      'Performance marketing, viral video reels, custom web development, SEO, and WhatsApp automation engineered for real revenue across Chhattisgarh and Central India.',
    url: `${AGENCY_INFO.url}/services`,
    siteName: AGENCY_INFO.name,
    images: ['/images/growdesk-w-logo.png'],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#000000] text-white">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ]}
      />

      {/* 1. Top Hero Section (Pure White Canvas #FFFFFF matching receipts background) */}
      <section className="bg-[#FFFFFF] text-[#000000] pt-20 pb-24 md:pt-32 md:pb-36 px-8 md:px-16 overflow-hidden">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column / Editorial Statement */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
              Core Disciplines // Raipur &bull; Bilaspur &bull; Central India
            </span>
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
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive "What we do" Horizontal Accordion / Vertical Tabs (Pure Black #000000) */}
      <FlightVerticalTabs />

      {/* 3. Dedicated Service Deep-Dives Navigation */}
      <section className="relative bg-[#0A0A0A] py-20 px-8 md:px-16 border-t border-white/10">
        <div className="max-w-[1300px] mx-auto space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
              Specialized Service Hubs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
              Explore Our End-to-End Specializations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_SEO.map((srv) => (
              <Link
                key={srv.slug}
                href={`/services/${srv.slug}`}
                className="p-6 rounded-lg bg-neutral-950/80 border border-neutral-800 hover:border-blue-500/60 transition-all duration-300 group flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-mono text-neutral-500 group-hover:text-blue-400 transition-colors uppercase tracking-wider block">
                    SERVICE DEEP-DIVE
                  </span>
                  <h3 className="font-serif text-xl font-normal text-white group-hover:text-blue-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {srv.tagline}
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-blue-400">
                  <span>View Full Capabilities</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Runway / Strategic Process Framework (Crisp Ice Blue Canvas blending seamlessly into white footer) */}
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
