import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, ChevronRight, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { Footer } from '@/components/footer';
import { SERVICES_SEO, LOCATIONS_SEO, AGENCY_INFO } from '@/data/seo-data';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbsJsonLd } from '@/components/seo/json-ld';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_SEO.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_SEO.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | GrowDesk Media',
    };
  }

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      url: `${AGENCY_INFO.url}/services/${service.slug}`,
      siteName: AGENCY_INFO.name,
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle,
      description: service.metaDescription,
      images: [service.heroImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_SEO.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES_SEO.filter((s) => s.slug !== slug);

  return (
    <main className="min-h-screen flex flex-col bg-[#000000] text-white">
      {/* Schema Structured Data for SEO Rich Snippets */}
      <ServiceJsonLd service={service} />
      <FaqJsonLd faqs={service.faqs} />
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.shortTitle, url: `/services/${service.slug}` },
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
            <Link href="/services" className="hover:text-black transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-blue-600 font-medium">{service.shortTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider">
                <Sparkles className="w-3 h-3" /> Core Service Pillar
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-normal leading-[1.12] text-neutral-900 tracking-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
                {service.tagline}
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#000000] text-white px-7 py-3.5 text-xs font-mono uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-neutral-800 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enquire on WhatsApp</span>
                </a>
                <a
                  href={`tel:${AGENCY_INFO.phone}`}
                  className="inline-flex items-center gap-2 border border-neutral-300 bg-white text-neutral-900 px-7 py-3.5 text-xs font-mono uppercase tracking-[0.18em] font-medium transition-colors hover:bg-neutral-50"
                >
                  <PhoneCall className="w-4 h-4 text-neutral-700" />
                  <span>{AGENCY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Architectural Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden bg-neutral-100 border border-neutral-200 shadow-xl">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Deliverables & Scope Grid (Pure Black Canvas) */}
      <section className="relative bg-[#000000] py-24 md:py-32 px-6 sm:px-8 md:px-16 border-b border-white/10">
        <div className="max-w-[1300px] mx-auto space-y-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
              Deliverables &amp; Execution
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              What We Build &amp; Deploy
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Every system is engineered to capture intent, build visual authority, and feed qualified commercial inquiries directly into your sales pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-neutral-950/70 border border-neutral-800 hover:border-blue-500/50 transition-colors duration-200 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-950/50 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                    MODULE 0{idx + 1}
                  </span>
                </div>
                <h3 className="font-sans text-base font-medium text-white leading-snug">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Competitive Advantage / Features */}
      <section className="relative bg-[#0A0A0A] py-24 md:py-32 px-6 sm:px-8 md:px-16 border-b border-white/10">
        <div className="max-w-[1300px] mx-auto space-y-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
              Competitive Moat
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Why Ambitious Leaders Choose GrowDesk Media
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-black border border-white/10 space-y-3"
              >
                <span className="font-mono text-xs text-blue-400 block tracking-widest">
                  ADVANTAGE // 0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl font-normal text-white">
                  {feat.title}
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Process Framework */}
      <section className="relative bg-[#FFFFFF] text-[#000000] py-24 md:py-32 px-6 sm:px-8 md:px-16 border-b border-neutral-200">
        <div className="max-w-[1300px] mx-auto space-y-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
              Execution Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight">
              Phased Progression to Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step) => (
              <div key={step.step} className="border-t border-neutral-300 pt-7 space-y-3">
                <span className="font-mono text-xs text-neutral-400 block tracking-wider">
                  PHASE {step.step}
                </span>
                <h3 className="font-serif text-xl font-normal text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Geographic Service Corridors (SEO Internal Linking to Cities) */}
      <section className="relative bg-[#000000] py-20 px-6 sm:px-8 md:px-16 border-b border-white/10">
        <div className="max-w-[1300px] mx-auto space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              Regional Coverage
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              Providing {service.shortTitle} Across Central India &amp; Chhattisgarh
            </h3>
            <p className="text-sm text-neutral-400 max-w-2xl pt-2">
              We deploy full-service campaigns and on-location production crews throughout all major urban and industrial centers:
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {LOCATIONS_SEO.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-950 text-neutral-300 text-xs font-mono hover:border-blue-500 hover:text-white transition-colors"
              >
                {service.shortTitle} in {loc.city} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs Section */}
      <section className="relative bg-[#050505] py-24 px-6 sm:px-8 md:px-16 border-b border-white/10">
        <div className="max-w-[900px] mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
              Questions About {service.shortTitle}
            </h2>
          </div>

          <div className="space-y-6">
            {service.faqs.map((faq, idx) => (
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

      {/* 7. Bottom CTA */}
      <section className="relative bg-[#F6F9FD] text-[#000000] py-24 px-6 sm:px-8 md:px-16 text-center">
        <div className="max-w-[800px] mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
            Ready to Accelerate?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight">
            Deploy {service.shortTitle} for Your Business
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light max-w-xl mx-auto">
            Connect directly with GrowDesk Media to review your current acquisition bottlenecks and receive a custom commercial growth proposal.
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
              <span>Submit Brief Online</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="bg-black py-16 px-6 sm:px-8 md:px-16 border-t border-white/10">
        <div className="max-w-[1300px] mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
            Explore Other Disciplines
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="p-5 rounded border border-neutral-800 bg-neutral-950/60 hover:border-blue-500 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-neutral-500 block mb-1">
                    SERVICE //
                  </span>
                  <h4 className="font-serif text-base text-white group-hover:text-blue-400 transition-colors">
                    {other.shortTitle}
                  </h4>
                </div>
                <span className="text-xs font-mono text-neutral-400 group-hover:text-blue-400 mt-4 inline-flex items-center gap-1">
                  Learn More <ArrowUpRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
