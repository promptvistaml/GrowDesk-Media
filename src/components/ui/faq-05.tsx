"use client";

import * as React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { FaqJsonLd } from "@/components/seo/json-ld";

const FAQS: readonly { id: string; q: string; a: string }[] = [
  {
    id: "item-1",
    q: "How does GrowDesk Media generate verified leads and paid ad results in Chhattisgarh?",
    a: "We engineer laser-targeted Meta Ads (Facebook & Instagram) and Google PPC campaigns connected directly to automated WhatsApp funnels. Businesses in Raipur, Bilaspur, Durg, and Bhilai typically start receiving verified inquiries within 48 to 72 hours of campaign launch.",
  },
  {
    id: "item-2",
    q: "Do you handle complete Instagram reel production, video shoots, and copywriting?",
    a: "Yes. Our in-house production crew travels across Chhattisgarh and Central India with 4K cinema gear to shoot viral Instagram reels, brand films, and customer testimonials, backed by psychological copywriting and daily social media channel management.",
  },
  {
    id: "item-3",
    q: "How does your web development and SEO service help our website rank #1 on Google?",
    a: "We engineer custom, high-speed Next.js web applications with 95+ Core Web Vitals, local schema structured data, and targeted keyword architectures that outrank competitors across Raipur, Bilaspur, Nagpur, MP, and Odisha.",
  },
  {
    id: "item-4",
    q: "What business automation and WhatsApp marketing solutions does GrowDesk Media implement?",
    a: "We deploy the official WhatsApp Business API, intelligent 24/7 AI-driven customer support chatbots, automated SMS/email sequences, and CRM integrations that qualify leads and alert your sales team in real-time.",
  },
  {
    id: "item-5",
    q: "Can you manage offline branding, outdoor billboards, and franchise expansion?",
    a: "Yes. From prime outdoor hoardings along high-traffic corridors in Raipur and Bilaspur to complete brand identity systems and turnkey franchise blueprints (like our work with Cleaning Karigar and WeShine), we provide full 360-degree online-to-offline scale.",
  },
  {
    id: "item-6",
    q: "Which locations and cities does GrowDesk Media serve?",
    a: "Our core footprint covers all major cities in Chhattisgarh—including Raipur, Bilaspur, Durg, Bhilai, Korba, and Rajnandgaon—as well as regional hubs across Nagpur (Maharashtra), Madhya Pradesh (Jabalpur, Bhopal, Indore), and Odisha (Bhubaneswar).",
  },
];

const Faq05 = () => {
  const [openId, setOpenId] = useState<string | null>("item-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section data-slot="faq" className="relative overflow-hidden bg-[#000000] text-white py-24 md:py-36 border-t border-white/10">
      <FaqJsonLd faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      {/* Ambient Blue Optical Flares */}
      <div className="pointer-events-none absolute -top-40 right-1/4 w-[700px] h-[400px] bg-blue-600/15 blur-[160px] rounded-full z-0" />
      <div className="pointer-events-none absolute -bottom-36 left-1/4 w-[600px] h-[360px] bg-blue-500/12 blur-[150px] rounded-full z-0" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 border-y border-white/10 md:grid-cols-2 md:border-x">
        <div
          data-slot="faq-intro"
          className="flex flex-col gap-4 border-b border-white/10 px-6 pt-12 pb-6 md:border-b-0 md:border-e md:px-12 md:py-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            FAQ
          </span>
          <h2 className="font-clash text-3xl sm:text-5xl font-bold leading-[0.95] tracking-[-0.035em] text-white uppercase">
            Questions,
          </h2>
          <span className="font-script text-4xl sm:text-6xl md:text-7xl text-[#7299FF] font-bold opacity-95 leading-[1.0] -mt-2 sm:-mt-3 select-none lowercase">
            answered.
          </span>
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

