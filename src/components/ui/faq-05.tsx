"use client";

import * as React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const FAQS: readonly { id: string; q: string; a: string }[] = [
  {
    id: "item-1",
    q: "How quickly can we see measurable inquiries or admissions?",
    a: "Paid lead-generation and WhatsApp campaigns typically begin generating verified inquiries within 7–14 days of launch, while compounding organic/brand growth builds significantly over 30–60 days (as seen in our 1-to-2 month client sprints).",
  },
  {
    id: "item-2",
    q: "Do you only work with large companies?",
    a: "No. We partner with businesses at every high-intent stage—from single food carts like Biryani and Co. and local coaching institutes to multi-branch retailers like Chandra Tiles and expanding franchises like Cleaning Karigar.",
  },
  {
    id: "item-3",
    q: "How do I receive the leads you generate?",
    a: "All campaign and website inquiries are routed directly to your designated pipeline or WhatsApp Business number for immediate follow-up.",
  },
  {
    id: "item-4",
    q: "Can you build our franchise or marketing strategy from scratch?",
    a: "Yes. Beyond digital ads, we provide ground-up business consulting, brand positioning, and franchise model architecture.",
  },
];

const Faq05 = () => {
  const [openId, setOpenId] = useState<string | null>("item-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section data-slot="faq" className="bg-[#000000] text-white py-24 md:py-36 border-t border-white/10">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 border-y border-white/10 md:grid-cols-2 md:border-x">
        <div
          data-slot="faq-intro"
          className="flex flex-col gap-4 border-b border-white/10 px-6 pt-12 pb-6 md:border-b-0 md:border-e md:px-12 md:py-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.08] tracking-tight text-white">
            Questions, answered.
          </h2>
          <p className="max-w-sm text-sm font-light text-neutral-400 leading-relaxed pt-2">
            The things people ask most often. Still have questions? Reach out directly via our contact desk below.
          </p>
        </div>

        <div
          data-slot="faq-list"
          className="flex flex-col justify-center px-6 py-6 md:px-10"
        >
          <div className="w-full">
            {FAQS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="border-b border-white/10 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between py-5 font-normal text-left text-base sm:text-lg text-white transition-colors duration-200 hover:text-neutral-300 group"
                  >
                    <span className="pr-4">{item.q}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] text-neutral-400 group-hover:text-white",
                        isOpen && "rotate-180 text-white"
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.25, ease: "easeInOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pt-1 text-sm font-light text-neutral-400 leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq05;

