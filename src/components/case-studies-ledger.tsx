import Link from 'next/link';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { CASE_STUDIES } from '@/data/content';

export function CaseStudiesLedger() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2E8F0]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1E63FF] block mb-3 font-semibold">
              [ 02 // PROVEN COMMERCIAL IMPACT ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1F4D]">
              Verified Client Case Studies.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-mono uppercase tracking-wider text-neutral-500 max-w-xs">
            Based directly on performance figures and business developments reported by client leadership.
          </p>
        </div>

        {/* High-Impact Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {CASE_STUDIES.slice(0, 4).map((cs, idx) => (
            <div
              key={cs.id}
              className="border border-[#E2E8F0] p-8 rounded-lg bg-[#F8FAFC] hover:bg-white hover:border-[#1E63FF] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4 mb-6">
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    CASE 0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#1E63FF] font-semibold bg-[#1E63FF]/10 px-2.5 py-1 rounded">
                    {cs.category}
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#0B1F4D] tracking-tight">
                    {cs.statNumber}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#1E63FF] font-semibold">
                    {cs.statLabel}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0B1F4D] mb-1">
                  {cs.client}
                </h3>
                <h4 className="text-sm font-medium text-neutral-500 mb-4">
                  {cs.tagline}
                </h4>

                <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">
                  {cs.description}
                </p>

                <div className="border-t border-[#E2E8F0] pt-4">
                  <ul className="space-y-1.5">
                    {cs.bullets.map((b, i) => (
                      <li key={i} className="text-xs text-neutral-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E63FF] mt-1 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E63FF] hover:text-[#0B1F4D]"
                >
                  <span>Inquire for Similar Growth</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center pt-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 bg-[#0B1F4D] hover:bg-[#1E63FF] text-white px-8 py-4 rounded font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
          >
            <span>View All 8 Verified Case Studies</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

