'use client';

export function Philosophy() {
  return (
    <section id="method" className="border-b border-[#e5e5e0] py-20 md:py-28 bg-[#fbfbfa]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
            [ METHODOLOGY & ETHOS ]
          </span>
          <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-neutral-900 leading-tight">
            We reject the churn of traditional agency retainers in favor of surgical high-conviction mandates.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-[#e5e5e0] bg-white space-y-4">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">PRINCIPLE 01</span>
            <h3 className="text-xl font-medium tracking-tight text-neutral-900">Direct Principal Involvement</h3>
            <p className="text-sm text-neutral-600 leading-relaxed font-light">
              You work directly with senior partners who have spent decades navigating high-scrutiny newsrooms and boardrooms, not account associates learning on your mandate.
            </p>
          </div>

          <div className="p-8 border border-[#e5e5e0] bg-white space-y-4">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">PRINCIPLE 02</span>
            <h3 className="text-xl font-medium tracking-tight text-neutral-900">Enterprise Value Calibration</h3>
            <p className="text-sm text-neutral-600 leading-relaxed font-light">
              Public relations is not vanity press hits. Every story, interview, and statement is engineered to strengthen multiple expansion, enterprise partnerships, and capital leverage.
            </p>
          </div>

          <div className="p-8 border border-[#e5e5e0] bg-white space-y-4">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">PRINCIPLE 03</span>
            <h3 className="text-xl font-medium tracking-tight text-neutral-900">Calculated Restraint</h3>
            <p className="text-sm text-neutral-600 leading-relaxed font-light">
              Often, the most powerful communication move is what is deliberately left unsaid. We counsel on timing, cadence, and restraint to protect executive leverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

