import Link from 'next/link';
import { ArrowUpRight, Megaphone, Target, Globe, MessageSquare, Briefcase } from 'lucide-react';
import { SERVICES } from '@/data/content';

const serviceIcons: Record<string, React.ReactNode> = {
  'brand-content-social': <Megaphone className="w-5 h-5 text-[#1E63FF]" />,
  'paid-ads-growth': <Target className="w-5 h-5 text-[#1E63FF]" />,
  'website-ecommerce-seo': <Globe className="w-5 h-5 text-[#1E63FF]" />,
  'messaging-automation': <MessageSquare className="w-5 h-5 text-[#1E63FF]" />,
  'offline-consulting': <Briefcase className="w-5 h-5 text-[#1E63FF]" />,
};

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2E8F0]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1E63FF] block mb-3 font-semibold">
              [ 01 // CORE SERVICE CAPABILITIES ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1F4D]">
              Specialized services engineered for scale.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-mono uppercase tracking-wider text-neutral-500 max-w-xs">
            From awareness to conversion, we orchestrate the entire customer journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => (
            <div
              key={s.slug}
              className="bg-white border border-[#E2E8F0] p-8 rounded-lg shadow-sm hover:border-[#1E63FF] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#1E63FF]/10 transition-colors">
                    {serviceIcons[s.slug]}
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    0{idx + 1}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-[#1E63FF] font-semibold block mb-2">
                  {s.category}
                </span>

                <h3 className="text-xl font-bold text-[#0B1F4D] tracking-tight mb-3 group-hover:text-[#1E63FF] transition-colors">
                  {s.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">
                  {s.tagline}
                </p>

                <div className="border-t border-[#E2E8F0] pt-4 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-2 font-semibold">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {s.deliverables.slice(0, 3).map((d, i) => (
                      <li key={i} className="text-xs text-neutral-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E63FF] mt-1 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <Link
                  href={`/services#${s.slug}`}
                  className="text-xs font-semibold text-[#0B1F4D] group-hover:text-[#1E63FF] flex items-center gap-1.5"
                >
                  <span>Explore Deliverables & Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

