'use client';

const cases = [
  {
    client: 'Autonomous Robotics Platform',
    category: 'DEEP TECH',
    milestone: '$85M Series B & Global Rollout',
    outcome:
      'Engineered an international narrative across FT, WSJ, and Bloomberg reframing industrial robotics as critical supply-chain infrastructure.',
    year: '2025',
  },
  {
    client: 'Decentralized Compute Protocol',
    category: 'AI & INFRASTRUCTURE',
    milestone: 'Token Launch & Enterprise Consortia',
    outcome:
      'Guided executive team through US regulatory testimony and strategic narrative positioning, expanding Tier-1 partner nodes by 340%.',
    year: '2025',
  },
  {
    client: 'Next-Gen Climate Intelligence',
    category: 'CLIMATE TECH',
    milestone: 'Stealth Exit & Category Debut',
    outcome:
      'Crafted the category blueprint defining "predictive orbital atmospheric monitoring," leading to sovereign fund investment syndicate.',
    year: '2024',
  },
  {
    client: 'Synthetic Biology Vanguard',
    category: 'LIFE SCIENCES',
    milestone: 'Leadership Transition & IPO Advisory',
    outcome:
      'Managed sensitive multi-stakeholder reputation architecture during public executive transition and concurrent public listing filing.',
    year: '2024',
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="border-b border-[#e5e5e0] py-20 md:py-28 bg-[#fbfbfa]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#e5e5e0]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
              [ IMPACT LEDGER ]
            </span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-neutral-900">
              Selected Engagements
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            CONFIDENTIAL ADVISORY // CASE PROFILES
          </span>
        </div>

        <div className="divide-y divide-[#e5e5e0] border-t border-b border-[#e5e5e0]">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-neutral-50/50 transition-colors px-2 md:px-6 group"
            >
              <div className="md:col-span-1 font-mono text-xs text-neutral-400">
                0{idx + 1}
              </div>
              <div className="md:col-span-4">
                <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 block mb-1">
                  {item.category}
                </span>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-neutral-900 group-hover:text-black">
                  {item.client}
                </h3>
                <span className="text-xs font-mono text-neutral-500 mt-1 block">
                  Milestone: {item.milestone}
                </span>
              </div>
              <div className="md:col-span-6 text-sm text-neutral-600 leading-relaxed font-light">
                {item.outcome}
              </div>
              <div className="md:col-span-1 md:text-right font-mono text-xs text-neutral-400">
                {item.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

