'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, TrendingUp, Users, Target, ShieldCheck } from 'lucide-react';

export function AgencyHero() {
  return (
    <section className="relative bg-white border-b border-[#E2E8F0] overflow-hidden bg-subtle-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Top Micro-Badge / Dispatch Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2E8F0] pb-6 mb-12 text-xs font-mono tracking-widest text-[#0B1F4D]/70 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1E63FF] animate-ping" />
            <span className="font-semibold text-[#0B1F4D]">GROWDESK MEDIA // PERFORMANCE & NARRATIVE</span>
          </div>
          <div className="hidden sm:block">OFFICIAL INQUIRY ROUTING: WHATSAPP DESK ACTIVE</div>
          <div>OUTCOMES OVER OPINIONS</div>
        </div>

        {/* Core Headline & Value Proposition */}
        <div className="max-w-5xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#F8FAFC] border border-[#1E63FF]/20 px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider text-[#1E63FF] mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Digital Marketing Built Around Commercial Outcomes</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0B1F4D] leading-[1.08]"
          >
            From brand building and franchise models to{' '}
            <span className="text-[#1E63FF] underline decoration-[#4FA9FF]/50 underline-offset-8">
              measurable lead generation
            </span>
            , admissions, and 2× sales growth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-[#0B1F4D]/80 max-w-3xl font-normal leading-relaxed"
          >
            GrowDesk Media supports ambitious enterprises through digital marketing, brand positioning, high-impact video content, lead generation, and growth-focused campaigns that drive bottom-line revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0B1F4D] hover:bg-[#1E63FF] text-white px-7 py-4 rounded font-semibold text-sm shadow-md transition-all group"
            >
              <span>Get a Consultation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#0B1F4D] px-7 py-4 rounded font-semibold text-sm transition-all"
            >
              <span>View Case Studies</span>
            </Link>
          </motion.div>
        </div>

        {/* Proof Ledger / Metrics Strip (Direct from PDF) */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#E2E8F0] bg-white shadow-sm">
          <div className="p-6 md:p-8 border-r border-b border-[#E2E8F0] space-y-1">
            <span className="text-3xl md:text-5xl font-extrabold text-[#1E63FF] tracking-tight block">
              152
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0B1F4D] block">
              School Admissions
            </span>
            <span className="text-[11px] text-neutral-500 block">Achieved in two months (Target was 50+)</span>
          </div>

          <div className="p-6 md:p-8 border-r border-b border-[#E2E8F0] space-y-1">
            <span className="text-3xl md:text-5xl font-extrabold text-[#1E63FF] tracking-tight block">
              45+
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0B1F4D] block">
              Pharmacy Admissions
            </span>
            <span className="text-[11px] text-neutral-500 block">Verified enrollment in 60-day sprint</span>
          </div>

          <div className="p-6 md:p-8 border-r border-b border-[#E2E8F0] space-y-1">
            <span className="text-3xl md:text-5xl font-extrabold text-[#1E63FF] tracking-tight block">
              2×
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0B1F4D] block">
              Sales & Follower Growth
            </span>
            <span className="text-[11px] text-neutral-500 block">Reported sales doubled & audience 2x</span>
          </div>

          <div className="p-6 md:p-8 border-r border-b border-[#E2E8F0] space-y-1">
            <span className="text-3xl md:text-5xl font-extrabold text-[#1E63FF] tracking-tight block">
              600+
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0B1F4D] block">
              Student Contacts
            </span>
            <span className="text-[11px] text-neutral-500 block">Structured high-intent lead database</span>
          </div>
        </div>
      </div>
    </section>
  );
}
