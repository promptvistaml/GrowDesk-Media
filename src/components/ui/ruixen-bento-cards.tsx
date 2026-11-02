"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BentoCardItem {
  title: string;
  description: string;
  className?: string;
}

export const cardContents: BentoCardItem[] = [
  {
    title: "Outcomes Over Optics",
    description:
      "We measure success in confirmed admissions, daily fleet bookings, and doubled retail sales—never passive vanity metrics.",
  },
  {
    title: "Direct-to-WhatsApp Speed",
    description:
      "Every campaign and website inquiry routes straight to your official WhatsApp in real time, eliminating lead leakage and slow manual follow-ups.",
  },
  {
    title: "Full-Stack Growth Architecture",
    description:
      "From ground-up franchise modeling and brand positioning to high-retention Reels, Meta/Google performance ads, and conversion-focused websites. Whether you are scaling a single food cart to 2x daily capacity, filling 150+ school admission seats, or expanding a service brand across multiple Indian cities, our execution adapts seamlessly to your stage of growth.",
  },
  {
    title: "Proven Ground Impact",
    description:
      "Backed by real client milestones: 152 school admissions in 60 days, 600+ student leads, and 2x social reach in a single month.",
  },
  {
    title: "Zero-Fluff Execution",
    description:
      "Understand → Plan → Create → Launch → Optimise → Report. Built for fast deployment and transparent ROI.",
  },
];

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-3 -left-3 pointer-events-none select-none" />
    <PlusIcon className="absolute -top-3 -right-3 pointer-events-none select-none" />
    <PlusIcon className="absolute -bottom-3 -left-3 pointer-events-none select-none" />
    <PlusIcon className="absolute -bottom-3 -right-3 pointer-events-none select-none" />
  </>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1.2"
    stroke="currentColor"
    className={cn("text-zinc-500 size-6", className)}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

export const PlusCard: React.FC<{
  className?: string;
  title: string;
  description: string;
}> = ({ className = "", title, description }) => {
  return (
    <div
      className={cn(
        "relative border border-solid border-zinc-700/80  p-6 sm:p-8 bg-transparent min-h-[190px]",
        "flex flex-col justify-between group hover:border-zinc-500 transition-colors duration-300",
        className
      )}
    >
      <CornerPlusIcons />
      {/* Content */}
      <div className="relative z-10 space-y-3">
        <h3 className="text-xl sm:text-2xl font-serif font-normal text-white tracking-tight">
          {title}
        </h3>
        <p className="text-neutral-400 text-sm sm:text-[14px] font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function RuixenBentoCards({ className = "" }: { className?: string }) {
  return (
    <section className={cn("bg-[#000000] text-white py-16 md:py-32 px-5 sm:px-8 md:px-16 border-t border-b border-white/10", className)}>
      <div className="max-w-[1300px] mx-auto space-y-6 sm:space-y-8">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
          Strategic Principles // Growth Architecture
        </span>

        {/* Bento Grid with exact requested layout & proportions */}
        <div className="space-y-6">
          {/* Row 1: Left Card (~60%), Right Card (~40%) */}
          <div className="flex flex-col lg:flex-row gap-6">
            <PlusCard
              title={cardContents[0].title}
              description={cardContents[0].description}
              className="w-full lg:w-[60%]"
            />
            <PlusCard
              title={cardContents[1].title}
              description={cardContents[1].description}
              className="w-full lg:w-[40%]"
            />
          </div>

          {/* Row 2: Left Card (~68%), Right Card (~32%) */}
          <div className="flex flex-col lg:flex-row gap-6">
            <PlusCard
              title={cardContents[2].title}
              description={cardContents[2].description}
              className="w-full lg:w-[68%]"
            />
            <PlusCard
              title={cardContents[3].title}
              description={cardContents[3].description}
              className="w-full lg:w-[32%]"
            />
          </div>

          {/* Row 3: Left Card (~35%), Bottom-Right Anchor Text (~65%) */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            <PlusCard
              title={cardContents[4].title}
              description={cardContents[4].description}
              className="w-full lg:w-[35%]"
            />

            {/* Row 3, Bottom-Right Anchor Text (Right-Aligned Display Block) */}
            <div className="w-full lg:w-[65%] flex flex-col justify-end text-left lg:text-right space-y-4 px-2 lg:pl-10 py-4 lg:py-2">
              <h2 className="font-serif text-4xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal text-white leading-[1.08] tracking-tight">
                Built for outcomes.<br />
                Engineered for<br />
                scale.
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-xl lg:ml-auto">
                GrowDesk Media gives ambitious founders and institutions the strategy, content, and performance funnels to scale rapidly. Every campaign is built to convert attention into measurable revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
