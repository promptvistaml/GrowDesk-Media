'use client';

const practices = [
  {
    index: '01',
    title: 'Category Creation & Momentum',
    tag: 'SCALE & VALUATION',
    description:
      'We establish the foundational narrative for companies inaugurating new market paradigms. From stealth emergence to Series A-to-IPO trajectory, we shape the consensus on why your company matters.',
    deliverables: ['Foundational Message Architecture', 'Tier-1 Tiered Launch Orchestration', 'Venture Milestone Narratives'],
  },
  {
    index: '02',
    title: 'Executive & Founder Visibility',
    tag: 'REPUTATION ARCHITECTURE',
    description:
      'Public standing cannot be outsourced to boilerplate quotes. We position leaders as authoritative voices shaping industry policy, technology discourse, and economic paradigms.',
    deliverables: ['Keynote & Editorial Byline Strategy', 'Top-tier Profile Placements', 'Board & Stakeholder Alignment'],
  },
  {
    index: '03',
    title: 'High-Stakes Crisis & Scrutiny',
    tag: 'REPUTATIONAL RESILIENCE',
    description:
      'In moments of friction, ambiguity is a liability. We provide rapid-response strategic counsel across regulatory investigations, leadership transitions, activist exposure, and product crises.',
    deliverables: ['Real-time Risk Navigation', 'Counter-Narrative Rapid Response', 'Internal & External Coordination'],
  },
  {
    index: '04',
    title: 'M&A and Capital Events',
    tag: 'FINANCIAL COMMUNICATIONS',
    description:
      'Securing narrative authority during liquidity events, complex acquisitions, and major enterprise partnerships where stock performance and regulatory clearance are at stake.',
    deliverables: ['Acquisition & Divestiture Positioning', 'Investor Ecosystem Resonance', 'Analyst & Media Roadshows'],
  },
];

export function Practices() {
  return (
    <section id="practice" className="border-b border-[#e5e5e0] py-20 md:py-28 bg-[#fbfbfa]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#e5e5e0]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
              [ PRACTICE AREAS ]
            </span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-neutral-900">
              Precision advisory for high-impact milestones.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs uppercase tracking-widest text-neutral-500 max-w-xs">
            Direct senior engagement. No delegation to junior intermediaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-[#e5e5e0]">
          {practices.map((item) => (
            <div
              key={item.index}
              className="border-r border-b border-[#e5e5e0] p-8 md:p-12 hover:bg-neutral-50/80 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-6">
                  <span>// {item.index}</span>
                  <span className="border border-neutral-200 px-2 py-0.5 uppercase tracking-wider text-neutral-600">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 group-hover:translate-x-1 transition-transform mb-4">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm md:text-base font-light mb-8">
                  {item.description}
                </p>
              </div>

              <div className="border-t border-neutral-200 pt-6">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-2">
                  Key Disciplines:
                </span>
                <ul className="space-y-1">
                  {item.deliverables.map((del) => (
                    <li key={del} className="text-xs font-mono text-neutral-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                      {del}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

