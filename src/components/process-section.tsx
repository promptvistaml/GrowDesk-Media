import { WORK_PROCESS_STEPS } from '@/data/content';

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0B1F4D] text-white border-b border-[#0B1F4D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#4FA9FF] block mb-3 font-semibold">
            [ 03 // OUR SIX-STAGE EXECUTION FRAMEWORK ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Understand. Plan. Create. Launch. Optimise. Report.
          </h2>
          <p className="mt-4 text-base text-neutral-300 font-light">
            We operate with mathematical clarity. No guesswork, no opaque agency retainers—just systematic deployment designed to turn budget into commercial momentum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORK_PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#112961] border border-white/10 p-8 rounded-lg hover:border-[#4FA9FF] transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-black text-[#4FA9FF]">
                  {step.step}
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">
                  PHASE // ACTIVE
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2 text-white">
                {step.name}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

