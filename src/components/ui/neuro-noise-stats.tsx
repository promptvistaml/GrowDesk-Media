"use client";

import { cn } from "@/lib/utils";

type Stat = {
  value: string;
  label: string;
};

const DEFAULT_STATS: Stat[] = [
  { value: "152", label: "School admissions in two months" },
  { value: "45+", label: "Pharmacy admissions in two months" },
  { value: "2×", label: "Reported sales and follower growth" },
  { value: "600+", label: "Verified student contacts collected" },
];

type NeuroNoiseStatsProps = React.ComponentProps<"section"> & {
  eyebrow?: string;
  title?: string;
  stats?: Stat[];
};

function NeuroNoiseStats({
  eyebrow = "By The Numbers",
  title = "Impact built around measurable business outcomes",
  stats = DEFAULT_STATS,
  className,
  style,
  ...props
}: NeuroNoiseStatsProps) {
  return (
    <section
      data-slot="neuro-noise-stats"
      className={cn(
        "relative flex w-full flex-col gap-12 bg-black px-6 py-24 text-white md:px-12 lg:px-20  select-none",
        className,
      )}
      style={style}
      {...props}
    >
      <div className="flex max-w-2xl flex-col gap-3">
        <span className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-400">
          {eyebrow}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight text-white tracking-tight">
          {title}
        </h2>
      </div>

      <dl className="grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col-reverse justify-end gap-3 border-white/10 py-10 pr-6 not-first:border-l not-first:pl-6 max-lg:nth-3:border-l-0 max-lg:nth-3:pl-0 max-lg:nth-[n+3]:border-t"
          >
            <dt className="max-w-48 text-xs sm:text-sm font-light text-neutral-400">
              {stat.label}
            </dt>
            <dd className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight tabular-nums text-white">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export { NeuroNoiseStats, type Stat };
export default NeuroNoiseStats;
