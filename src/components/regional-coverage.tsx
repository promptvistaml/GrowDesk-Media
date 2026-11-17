'use client';

import Link from 'next/link';
import { ArrowUpRight, MapPin, Sparkles, Building2, TrendingUp, Share2, Globe, Bot, Layers } from 'lucide-react';
import { LOCATIONS_SEO, SERVICES_SEO } from '@/data/seo-data';

export function RegionalCoverage() {
  const serviceIconMap: Record<string, any> = {
    'paid-advertisement-lead-generation': TrendingUp,
    'social-media-content-creation': Share2,
    'web-development-seo': Globe,
    'business-automation-chatbots': Bot,
    'branding-offline-marketing': Layers,
  };

  return (
    <section id="locations" className="relative overflow-hidden bg-[#000000] text-white py-24 md:py-32 border-t border-white/10">
      {/* Ambient optical flare */}
      <div className="pointer-events-none absolute -top-40 left-1/3 w-[650px] h-[380px] bg-blue-600/12 blur-[170px] rounded-full z-0" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 w-[500px] h-[320px] bg-blue-500/10 blur-[150px] rounded-full z-0" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 sm:px-8 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-800">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7299FF] block">
              Regional Authority // Central India &bull; Chhattisgarh
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-[1.12]">
              Dominating Search, Performance Ads &amp; Automation
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              We deploy full-service creative shoots, paid media engines, and 24/7 AI chatbots across every major commercial corridor.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://wa.me/919406031522?text=Hello%20GrowDesk%20Media%2C%20I%20want%20to%20scale%20my%20business%20in%20my%20city."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-blue-500/40 bg-blue-950/20 text-blue-300 text-xs font-mono uppercase tracking-widest rounded hover:bg-blue-900/30 hover:border-blue-400 transition-colors"
            >
              <span>Schedule City Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 1. Core Services Strip */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              Specialized Service Blueprints
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SERVICES_SEO.map((srv) => {
              const IconComp = serviceIconMap[srv.slug] || Sparkles;
              return (
                <Link
                  key={srv.slug}
                  href={`/services/${srv.slug}`}
                  className="p-5 rounded-lg border border-neutral-800 bg-neutral-950/70 hover:border-blue-500/50 hover:bg-neutral-900/80 transition-all duration-300 group flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-md bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:border-blue-400 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-base text-white group-hover:text-blue-300 transition-colors">
                      {srv.shortTitle}
                    </h4>
                    <p className="text-[12px] text-neutral-400 font-light line-clamp-3 leading-relaxed">
                      {srv.tagline}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-blue-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* 2. City Hubs Grid */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              City Hubs &amp; Coverage Areas
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LOCATIONS_SEO.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="p-5 rounded-lg border border-neutral-800 bg-neutral-950/80 hover:border-blue-500/60 hover:bg-neutral-900/80 transition-all duration-300 group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-neutral-500 group-hover:text-blue-400 uppercase tracking-wider">
                      {loc.state}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h4 className="font-serif text-xl font-normal text-white group-hover:text-blue-300 transition-colors">
                    {loc.city}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light line-clamp-2">
                    {loc.headline}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center gap-1 text-[11px] font-mono text-neutral-500">
                  <Building2 className="w-3 h-3 text-neutral-400" />
                  <span className="truncate">{loc.keyBusinessHubs[0]}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
