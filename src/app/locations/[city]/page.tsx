import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  MapPin,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Building2,
  TrendingUp,
  Share2,
  Globe,
  Bot,
  Layers,
} from 'lucide-react';
import { Footer } from '@/components/footer';
import { LOCATIONS_SEO, SERVICES_SEO, AGENCY_INFO } from '@/data/seo-data';
import { LocationJsonLd, FaqJsonLd, BreadcrumbsJsonLd } from '@/components/seo/json-ld';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS_SEO.map((loc) => ({
    city: loc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const location = LOCATIONS_SEO.find((loc) => loc.slug === city);

  if (!location) {
    return {
      title: 'Location Not Found | GrowDesk Media',
    };
  }

  return {
    title: location.seoTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: location.seoTitle,
      description: location.metaDescription,
      url: `${AGENCY_INFO.url}/locations/${location.slug}`,
      siteName: AGENCY_INFO.name,
      images: [
        {
          url: '/images/growdesk-w-logo.png',
          width: 1200,
          height: 630,
          alt: `${location.headline} | GrowDesk Media`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: location.seoTitle,
      description: location.metaDescription,
      images: ['/images/growdesk-w-logo.png'],
    },
  };
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { city } = await params;
  const location = LOCATIONS_SEO.find((loc) => loc.slug === city);

  if (!location) {
    notFound();
  }

  const otherLocations = LOCATIONS_SEO.filter((loc) => loc.slug !== city);

  const serviceIconMap: Record<string, any> = {
    'paid-advertisement-lead-generation': TrendingUp,
    'social-media-content-creation': Share2,
    'web-development-seo': Globe,
    'business-automation-chatbots': Bot,
    'branding-offline-marketing': Layers,
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#000000] text-white">
      {/* Schema Structured Data for SEO Rich Snippets */}
      <LocationJsonLd location={location} />
      <FaqJsonLd faqs={location.faqs} />
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/#locations' },
          { name: location.city, url: `/locations/${location.slug}` },
        ]}
      />

      {/* 1. Hero Section (White Editorial Canvas) */}
      <section className="relative bg-[#FFFFFF] text-[#000000] pt-20 pb-24 md:pt-32 md:pb-36 px-6 sm:px-8 md:px-16 overflow-hidden border-b border-neutral-200">
        <div className="max-w-[1300px] mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-8">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-500">Locations</span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-blue-600 font-medium">{location.city}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>
                  {location.city}, {location.state} // {location.region}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] text-neutral-900 tracking-tight">
                {location.headline}
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
                {location.subheadline}
              </p>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-2xl">
                {location.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#000000] text-white px-7 py-3.5 text-xs font-mono uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-neutral-800 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Connect on WhatsApp</span>
                </a>
                <a
                  href={`tel:${AGENCY_INFO.phone}`}
                  className="inline-flex items-center gap-2 border border-neutral-300 bg-white text-neutral-900 px-7 py-3.5 text-xs font-mono uppercase tracking-[0.18em] font-medium transition-colors hover:bg-neutral-50"
                >
                  <PhoneCall className="w-4 h-4 text-neutral-700" />
                  <span>Call {location.city} Desk</span>
                </a>
              </div>
            </div>

            {/* Right Column: Key Commercial Corridors Box */}
            <div className="lg:col-span-4">
              <div className="p-7 rounded-lg bg-neutral-50 border border-neutral-200 shadow-lg space-y-6">
                <div className="flex items-center gap-2 border-b border-neutral-200 pb-3">
                  <Building2 className="w-4 h-4 text-neutral-700" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-700 font-semibold">
                    Key Corridors Served
                  </h3>
                </div>

                <ul className="space-y-3">
                  {location.keyBusinessHubs.map((hub, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{hub}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 border-t border-neutral-200">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                    Priority Industries
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {location.targetSectors.map((sec, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-white border border-neutral-200 text-neutral-700 text-[11px]"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Service Capabilities in this Location */}
      <section className="relative bg-[#000000] py-24 md:py-32 px-6 sm:px-8 md:px-16 border-b border-white/10">
        <div className="max-w-[1300px] mx-auto space-y-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
              Core Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Marketing &amp; Tech Solutions for {location.city}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              We deploy full-funnel digital infrastructure tailored to the specific buyer behavior and competitive corridors of {location.city}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_SEO.map((srv) => {
              const IconComp = serviceIconMap[srv.slug] || Sparkles;
              return (
                <div
                  key={srv.slug}
                  className="p-7 rounded-lg bg-neutral-950/70 border border-neutral-800 hover:border-blue-500/50 transition-colors duration-200 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-500/30 flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="font-serif text-xl font-normal text-white">
                      {srv.shortTitle} in {location.city}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                      {srv.tagline}
                    </p>
                  </div>

                  <Link
                    href={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-white transition-colors pt-2 border-t border-neutral-800/80"
                  >
                    <span>View Service Blueprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Proven Regional Impact Stats */}
      <section className="relative bg-[#0A0A0A] py-20 px-6 sm:px-8 md:px-16 border-b border-white/10">
        <div className="max-w-[1300px] mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
              Verified Commercial Milestones
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
              Measurable Business Outcomes Delivered
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-black border border-white/10 text-center space-y-2">
              <span className="font-clash text-3xl sm:text-5xl font-bold text-white block">
                152
              </span>
              <p className="text-xs sm:text-sm text-neutral-400">
                School admissions in two months
              </p>
            </div>
            <div className="p-6 rounded-lg bg-black border border-white/10 text-center space-y-2">
              <span className="font-clash text-3xl sm:text-5xl font-bold text-white block">
                45+
              </span>
              <p className="text-xs sm:text-sm text-neutral-400">
                Pharmacy admissions in two months
              </p>
            </div>
            <div className="p-6 rounded-lg bg-black border border-white/10 text-center space-y-2">
              <span className="font-clash text-3xl sm:text-5xl font-bold text-[#7299FF] block">
                2×
              </span>
              <p className="text-xs sm:text-sm text-neutral-400">
                Reported sales &amp; follower velocity
              </p>
            </div>
            <div className="p-6 rounded-lg bg-black border border-white/10 text-center space-y-2">
              <span className="font-clash text-3xl sm:text-5xl font-bold text-white block">
                600+
              </span>
              <p className="text-xs sm:text-sm text-neutral-400">
                Verified student contacts captured
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Local FAQs */}
      <section className="relative bg-[#050505] py-24 px-6 sm:px-8 md:px-16 border-b border-white/10">
        <div className="max-w-[900px] mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
              Questions About Marketing in {location.city}
            </h2>
          </div>

          <div className="space-y-6">
            {location.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-black border border-white/10 space-y-3"
              >
                <h3 className="font-serif text-lg sm:text-xl font-normal text-white">
                  {faq.question}
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Direct Connect CTA */}
      <section className="relative bg-[#F6F9FD] text-[#000000] py-24 px-6 sm:px-8 md:px-16 text-center">
        <div className="max-w-[800px] mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
            Scale Your Market Share
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight">
            Ready to Dominate Search &amp; Sales in {location.city}?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light max-w-xl mx-auto">
            Get in touch with GrowDesk Media to review your competition in {location.city} and receive an actionable 90-day acquisition roadmap.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#000000] text-white px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] font-medium shadow-md hover:bg-neutral-800 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Connect on WhatsApp</span>
            </a>
            <Link
              href="/#connect"
              className="inline-flex items-center gap-2 border border-neutral-300 bg-white text-neutral-900 px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] font-medium hover:bg-neutral-50 transition-colors"
            >
              <span>Submit Project Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Other Regional Locations (SEO Interlinking) */}
      <section className="bg-black py-16 px-6 sm:px-8 md:px-16 border-t border-white/10">
        <div className="max-w-[1300px] mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
            Explore Other Regional Corridors
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherLocations.map((other) => (
              <Link
                key={other.slug}
                href={`/locations/${other.slug}`}
                className="p-4 rounded border border-neutral-800 bg-neutral-950/60 hover:border-blue-500 transition-colors group flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-serif text-white group-hover:text-blue-400 transition-colors">
                    {other.city}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 block">
                    {other.state}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-blue-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
