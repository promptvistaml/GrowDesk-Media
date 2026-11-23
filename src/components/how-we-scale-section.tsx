'use client';

import { useRef, useEffect, useState } from 'react';
import OrbitBorderButton from '@/components/ui/orbit-border-button';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  TrendingUp,
  ArrowUpRight,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Play,
  Volume2,
  BarChart3,
  Globe,
  Sliders,
  DollarSign,
  ShieldCheck,
} from 'lucide-react';
import {
  LaptopMockupCard,
  PhoneMockupCard,
  IpadMockupCard,
  DesktopMac3DCard,
} from '@/components/mockups';

/* ─────────────────────────────────────────────────────────────
   STAGE 1: Strategic Advisory — Video Showcase Screen (MacBook)
   Autoplays /videos/scroll_video.mp4 seamlessly on loop
   ───────────────────────────────────────────────────────────── */
function StrategyMeetingScreen() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    // IntersectionObserver ensures video decodes and streams only when visible on screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const promise = video.play();
            if (promise !== undefined) promise.catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative size-full bg-slate-950 overflow-hidden font-sans select-none pointer-events-none">
      {/* Autoplaying Loop Video ("Trust. Partnership. Security.") */}
      <video
        ref={videoRef}
        src="/videos/scroll_video.mp4"
        loop
        muted
        playsInline
        preload="none"
        className="size-full object-cover pointer-events-none"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   STAGE 2: Viral Reel Production & Sales Spike (iPhone - White Screen)
   ───────────────────────────────────────────────────────────── */
function ReelEditorScreen({ scrollYProgress }: { scrollYProgress: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    // IntersectionObserver ensures video decodes and streams only when visible on screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const promise = video.play();
            if (promise !== undefined) promise.catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Slide up the white analytics sheet gently during Stage 2 active window (0.24 - 0.34)
  const sheetY = useTransform(scrollYProgress, [0.24, 0.34], ['100%', '0%']);
  const sheetOpacity = useTransform(scrollYProgress, [0.24, 0.29], [0, 1]);

  return (
    <div className="relative size-full bg-black text-slate-900 overflow-hidden font-sans select-none pointer-events-none">
      {/* 2A: Full-Viewport Reel Video Background */}
      <video
        ref={videoRef}
        src="/videos/reel.mp4"
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 size-full object-cover pointer-events-none"
      />

      {/* Subtle top vignette for badge readability */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 via-black/25 to-transparent z-10" />

      {/* Top Floating Badge: Engagement / Reel Growth */}
      <div className="relative z-20 flex items-center justify-between pt-9 pb-2 px-3">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] font-mono font-semibold text-white tracking-wide shadow-sm whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
          <span>Reel Growth</span>
        </span>
        <span className="px-1.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md text-[8px] font-mono text-white/80 whitespace-nowrap">
          00:01.4s / 00:30s
        </span>
      </div>

      {/* 2B: Sliding Analytics Sheet - Stretches full width (left-0 right-0 bottom-0) */}
      <motion.div
        style={{ y: sheetY, opacity: sheetOpacity }}
        className="absolute inset-x-0 bottom-0 rounded-t-2xl sm:rounded-t-3xl bg-white/95 backdrop-blur-xl border-t border-slate-200/90 px-3 pt-2.5 pb-5 shadow-2xl z-30"
      >
        <div className="w-8 h-1 bg-slate-300 rounded-full mx-auto mb-2" />

        <div className="flex items-center justify-between text-[11px] font-semibold mb-1.5 whitespace-nowrap">
          <span className="text-slate-800">Live Post-Drop Analytics</span>
          <span className="text-blue-600 flex items-center gap-1 text-[9px] font-mono font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
            ENGAGEMENT
          </span>
        </div>

        {/* Blue Upward Spiking SVG Line Graph */}
        <div className="h-12 sm:h-16 w-full my-1">
          <svg className="size-full overflow-visible" viewBox="0 0 200 60">
            <defs>
              <linearGradient id="blueSpikeLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0 50 Q 30 48, 60 40 T 110 32 T 150 14 T 200 4 L 200 60 L 0 60 Z"
              fill="url(#blueSpikeLight)"
            />
            <path
              d="M0 50 Q 30 48, 60 40 T 110 32 T 150 14 T 200 4"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* High-Impact Numerical Telemetry (Always clean single-line numbers) */}
        <div className="grid grid-cols-2 gap-2 pt-1.5 border-t border-slate-100">
          <div>
            <span className="text-[8px] font-mono text-slate-500 block uppercase whitespace-nowrap">
              Reel Views
            </span>
            <div className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight whitespace-nowrap">
              1.4M+
            </div>
          </div>
          <div>
            <span className="text-[8px] font-mono text-slate-500 block uppercase whitespace-nowrap">
              Direct Revenue
            </span>
            <div className="text-xs sm:text-sm font-bold text-blue-600 tracking-tight whitespace-nowrap flex items-baseline gap-1">
              <span>₹18.4L</span>
              <span className="text-[9px] font-normal text-slate-500">(+340%)</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   STAGE 3: Omnichannel Performance Marketing & Direct ROAS (iPad - White Screen)
   Interactive Line Chart & Bar Chart Driven by Scroll:
   • Cleaning Karigar: ₹400 Ad Spend → ₹1,29,999 Revenue (325× ROAS)
   • WeShine Beauty n Salon: ₹200 Ad Budget → ₹3,500 - ₹5,000 Sales (25× ROAS)
   ───────────────────────────────────────────────────────────── */
function MarketingPadScreen({ scrollYProgress }: { scrollYProgress: any }) {
  // Dynamic scroll-driven interactions in Stage 3 active window [0.50, 0.68]
  const revenueCounter = useTransform(scrollYProgress, [0.52, 0.65], ['₹5,000', '₹1,29,999']);
  
  // Interactive Line Chart curve progression (0 -> 1)
  const lineProgress = useTransform(scrollYProgress, [0.50, 0.65], [0, 1]);
  const tooltipOpacity = useTransform(scrollYProgress, [0.58, 0.66], [0, 1]);
  const tooltipScale = useTransform(scrollYProgress, [0.58, 0.66], [0.8, 1]);

  // Interactive Bar Chart heights (rise with scroll)
  const spendBar1Height = useTransform(scrollYProgress, [0.50, 0.58], ['0%', '14%']);
  const karigarRevBarHeight = useTransform(scrollYProgress, [0.51, 0.66], ['0%', '100%']);
  
  const spendBar2Height = useTransform(scrollYProgress, [0.50, 0.57], ['0%', '12%']);
  const weShineRevBarHeight = useTransform(scrollYProgress, [0.51, 0.64], ['0%', '64%']);

  return (
    <div className="relative size-full bg-white text-slate-900 overflow-hidden font-sans p-3.5 sm:p-4 flex flex-col justify-between select-none">
      {/* Top Command Center Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div>
          <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 tracking-tight uppercase">
            Performance Command 
          </h4>
        </div>
      </div>

      {/* Top 2 KPI Cards */}
      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 my-1">
        {/* Cleaning Karigar */}
        <div className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-1.5 sm:p-2 flex items-center justify-between shadow-2xs">
          <div>
            <span className="text-[7px] sm:text-[8px] font-mono text-slate-500 block uppercase font-medium">Cleaning Karigar</span>
            <motion.div className="text-[11px] sm:text-xs md:text-sm font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
              {revenueCounter}
            </motion.div>
            <span className="text-[7px] sm:text-[8px] font-mono text-slate-500 whitespace-nowrap">From ₹400 Spend</span>
          </div>
          <div className="text-right">
            <span className="inline-block px-1 sm:px-1.5 py-0.5 rounded-sm bg-blue-100 text-blue-800 font-bold font-mono text-[7px] sm:text-[9px] border border-blue-300 whitespace-nowrap">
              325× ROAS
            </span>
            <span className="text-[6px] sm:text-[7px] font-mono text-blue-700 block mt-0.5 whitespace-nowrap">+32,400%</span>
          </div>
        </div>

        {/* WeShine Beauty */}
        <div className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-1.5 sm:p-2 flex items-center justify-between shadow-2xs">
          <div>
            <span className="text-[7px] sm:text-[8px] font-mono text-slate-500 block uppercase font-medium">WeShine Salon</span>
            <div className="text-[11px] sm:text-xs md:text-sm font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
              ₹3.5k – ₹5k
            </div>
            <span className="text-[7px] sm:text-[8px] font-mono text-slate-500 whitespace-nowrap">From ₹200 Budget</span>
          </div>
          <div className="text-right">
            <span className="inline-block px-1 sm:px-1.5 py-0.5 rounded-sm bg-blue-100 text-blue-800 font-bold font-mono text-[7px] sm:text-[9px] border border-blue-300 whitespace-nowrap">
              25× ROAS
            </span>
            <span className="text-[6px] sm:text-[7px] font-mono text-blue-700 block mt-0.5 whitespace-nowrap">+2,400%</span>
          </div>
        </div>
      </div>

      {/* Center Deck: Split View (Interactive Bar Chart on Left + Interactive Line Chart on Right) */}
      <div className="grid grid-cols-12 gap-2 my-1 flex-1 min-h-[140px]">
        {/* LEFT: Interactive Spend vs Revenue Bar Chart */}
        <div className="col-span-5 bg-slate-50/80 border border-slate-200/90 rounded-xl p-2.5 flex flex-col justify-between shadow-2xs">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-mono uppercase text-slate-600 font-bold">
              Spend vs. Return Bars
            </span>
            <span className="text-[7px] font-mono text-slate-400">Scroll to Scale</span>
          </div>

          {/* Bar Groups Container */}
          <div className="flex items-end justify-around gap-2 flex-1 pt-2 pb-1 border-b border-slate-200/80">
            {/* WeShine Group */}
            <div className="flex flex-col items-center gap-1 h-full justify-end">
              <div className="flex items-end gap-1.5 h-20">
                {/* Spend Bar */}
                <div className="flex flex-col items-center">
                  <motion.div
                    style={{ height: spendBar2Height }}
                    className="w-3.5 bg-slate-300 rounded-t-xs"
                    title="₹200 Spend"
                  />
                  <span className="text-[6px] font-mono text-slate-400 mt-0.5">₹200</span>
                </div>
                {/* Revenue Bar */}
                <div className="flex flex-col items-center">
                  <motion.div
                    style={{ height: weShineRevBarHeight }}
                    className="w-4 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-xs shadow-xs"
                    title="₹5,000 Sales"
                  />
                  <span className="text-[6px] font-mono font-bold text-blue-700 mt-0.5">₹5k</span>
                </div>
              </div>
              <span className="text-[7px] font-mono text-slate-600 font-semibold">WeShine</span>
            </div>

            {/* Cleaning Karigar Group */}
            <div className="flex flex-col items-center gap-1 h-full justify-end">
              <div className="flex items-end gap-1.5 h-20">
                {/* Spend Bar */}
                <div className="flex flex-col items-center">
                  <motion.div
                    style={{ height: spendBar1Height }}
                    className="w-3.5 bg-slate-300 rounded-t-xs"
                    title="₹400 Spend"
                  />
                  <span className="text-[6px] font-mono text-slate-400 mt-0.5">₹400</span>
                </div>
                {/* Revenue Bar */}
                <div className="flex flex-col items-center">
                  <motion.div
                    style={{ height: karigarRevBarHeight }}
                    className="w-4.5 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-xs shadow-xs"
                    title="₹1,29,999 Revenue"
                  />
                  <span className="text-[6px] font-mono font-bold text-blue-700 mt-0.5">₹1.3L</span>
                </div>
              </div>
              <span className="text-[7px] font-mono text-slate-600 font-semibold">Karigar</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[7px] font-mono text-slate-500 pt-1">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-slate-300 rounded-xs" /> Spend</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-blue-500 rounded-xs" /> Revenue (ROAS)</span>
          </div>
        </div>

        {/* RIGHT: Interactive ROAS Multiplier Line Chart */}
        <div className="col-span-7 bg-slate-50/80 border border-slate-200/90 rounded-xl p-2.5 flex flex-col justify-between shadow-2xs relative overflow-hidden">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[8px] font-mono uppercase text-slate-600 font-bold">
              ROAS Growth Curve (Scroll Reactive)
            </span>
            <span className="text-[7px] font-mono text-blue-700 font-bold bg-blue-100/80 px-1 rounded-xs">
              Linear 325x Spike
            </span>
          </div>

          {/* SVG Line Chart Canvas */}
          <div className="relative w-full flex-1 my-1">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 280 90">
              <defs>
                <linearGradient id="roasGradientLight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.30" />
                  <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="20" x2="280" y2="20" stroke="#e2e8f0" strokeDasharray="2 2" strokeWidth="1" />
              <line x1="0" y1="50" x2="280" y2="50" stroke="#e2e8f0" strokeDasharray="2 2" strokeWidth="1" />
              <line x1="0" y1="80" x2="280" y2="80" stroke="#cbd5e1" strokeWidth="1" />

              {/* Shaded Area Fill */}
              <path
                d="M10 80 Q 50 78, 90 70 T 170 42 T 260 12 L 260 80 L 10 80 Z"
                fill="url(#roasGradientLight)"
              />

              {/* Main Animated Growth Curve */}
              <motion.path
                d="M10 80 Q 50 78, 90 70 T 170 42 T 260 12"
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ pathLength: lineProgress }}
              />

              {/* Milestone Dots */}
              {/* Point 1: Campaign Launch (₹200 - ₹400) */}
              <circle cx="10" cy="80" r="3" fill="#64748b" />
              {/* Point 2: WeShine 25x */}
              <circle cx="90" cy="70" r="3.5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
              {/* Point 3: Cleaning Karigar 325x Peak */}
              <circle cx="260" cy="12" r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
            </svg>

            {/* Floating Dynamic Tooltip that appears at apex */}
            <motion.div
              style={{ opacity: tooltipOpacity, scale: tooltipScale }}
              className="absolute top-0 right-1 bg-slate-900 text-white rounded-md px-2 py-1 shadow-lg text-[8px] font-mono border border-slate-700 pointer-events-none"
            >
              <div className="font-bold text-blue-400">Peak: ₹1,29,999 (325×)</div>
              <div className="text-slate-300 text-[7px]">Spend: ₹400 • ROI: +32,400%</div>
            </motion.div>
          </div>

          {/* X-Axis Labels */}
          <div className="flex items-center justify-between text-[7px] font-mono text-slate-400 pt-0.5 border-t border-slate-100">
            <span>₹200 Ad Launch</span>
            <span className="text-blue-700 font-semibold">WeShine (25x)</span>
            <span className="text-blue-700 font-bold">Karigar (325x Peak)</span>
          </div>
        </div>
      </div>

      {/* Bottom Verification Strip */}
      <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[8px] font-mono text-slate-500">
        <span className="flex items-center gap-1 text-blue-700 font-semibold">
          <TrendingUp className="w-3 h-3 text-blue-600" /> Blended CPA Reduced by 74%
        </span>
        <span className="text-slate-400">Audited Meta &amp; Google Ads ROAS</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   STAGE 4: Conversion Architecture & Institutional Scale (MacBook - White Screen)
   Interactive Line Chart & Multi-Bar Chart Driven by Scroll:
   • Gyanoday Vidya Sanskar: ₹1,500 ad (₹4,999 campaign) → 152 admissions
   • Sanjivani Pharmacy: ₹1,999 ads → 120 enquiries → approx 45 admissions
   • Sankalp Learning Classes: ₹10,000 spend → 600+ student enquiries data
   ───────────────────────────────────────────────────────────── */
function ClientWebBuildScreen({ scrollYProgress }: { scrollYProgress: any }) {
  // Scroll reactive transforms in Stage 4 active window [0.76, 0.96]
  const funnelLineProgress = useTransform(scrollYProgress, [0.77, 0.93], [0, 1]);
  const sankalpBarHeight = useTransform(scrollYProgress, [0.77, 0.91], ['0%', '100%']);
  const schoolBarHeight = useTransform(scrollYProgress, [0.78, 0.93], ['0%', '84%']);
  const sanjivaniBarHeight = useTransform(scrollYProgress, [0.77, 0.90], ['0%', '62%']);
  const pillScale = useTransform(scrollYProgress, [0.81, 0.94], [0.92, 1]);
  const nodeTooltipOpacity = useTransform(scrollYProgress, [0.82, 0.94], [0, 1]);

  return (
    <div className="relative size-full bg-white text-slate-900 overflow-hidden font-sans select-none flex flex-col justify-between">
      {/* Top Browser Window Header */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-slate-50 border-b border-slate-200 z-20">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white text-[10px] font-mono text-slate-600 border border-slate-200 shadow-2xs">
          <Globe className="w-3 h-3 text-blue-600" />
          <span>growdeskmedia.com/institutional-growth-matrix</span>
        </div>
        <div className="w-12" />
      </div>

      {/* Main Dashboard Canvas (White Theme) */}
      <div className="relative flex-1 p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden">
        {/* Top 3 KPI Cards */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {/* Card 1: Gyanoday Vidya Sanskar School */}
          <div className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-1.5 sm:p-2 shadow-2xs">
            <div className="flex items-center justify-between text-[7px] sm:text-[8px] font-mono text-slate-500 mb-0.5">
              <span className="font-semibold text-slate-700 truncate">School Intake</span>
              <span className="text-blue-700 font-bold bg-blue-100/80 px-1 rounded-xs whitespace-nowrap">₹9.8/Adm</span>
            </div>
            <strong className="text-[11px] sm:text-xs md:text-sm font-extrabold text-slate-900 block tracking-tight whitespace-nowrap">
              152 Admits
            </strong>
            <span className="text-[6.5px] sm:text-[8px] font-mono text-slate-500 whitespace-nowrap">₹1.5k Ad Spend</span>
          </div>

          {/* Card 2: Sanjivani Institute of Pharmacy */}
          <div className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-1.5 sm:p-2 shadow-2xs">
            <div className="flex items-center justify-between text-[7px] sm:text-[8px] font-mono text-slate-500 mb-0.5">
              <span className="font-semibold text-slate-700 truncate">Sanjivani</span>
              <span className="text-blue-700 font-bold bg-blue-100/80 px-1 rounded-xs whitespace-nowrap">37.5% Conv</span>
            </div>
            <strong className="text-[11px] sm:text-xs md:text-sm font-extrabold text-slate-900 block tracking-tight whitespace-nowrap">
              45 Admits
            </strong>
            <span className="text-[6.5px] sm:text-[8px] font-mono text-slate-500 whitespace-nowrap">120 Leads</span>
          </div>

          {/* Card 3: Sankalp Learning Classes */}
          <div className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-1.5 sm:p-2 shadow-2xs">
            <div className="flex items-center justify-between text-[7px] sm:text-[8px] font-mono text-slate-500 mb-0.5">
              <span className="font-semibold text-slate-700 truncate">Sankalp</span>
              <span className="text-blue-700 font-bold bg-blue-100/80 px-1 rounded-xs whitespace-nowrap">₹16/Lead</span>
            </div>
            <strong className="text-[11px] sm:text-xs md:text-sm font-extrabold text-slate-900 block tracking-tight whitespace-nowrap">
              600+ Leads
            </strong>
            <span className="text-[6.5px] sm:text-[8px] font-mono text-slate-500 whitespace-nowrap">₹10k Spend</span>
          </div>
        </div>

        {/* Center Deck: Split View (Interactive Multi-Bar Chart on Left + Interactive Funnel Line Chart on Right) */}
        <div className="grid grid-cols-12 gap-2 my-1 flex-1 min-h-[140px]">
          {/* LEFT: Interactive Multi-Bar Chart */}
          <div className="col-span-5 bg-slate-50/80 border border-slate-200/90 rounded-xl p-2.5 flex flex-col justify-between shadow-2xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[8px] font-mono uppercase text-slate-600 font-bold">
                Student Intake Bars
              </span>
              <span className="text-[7px] font-mono text-slate-400">Scroll to Animate</span>
            </div>

            {/* Vertical Bar Pillars */}
            <div className="flex items-end justify-around gap-2 flex-1 pt-2 pb-1 border-b border-slate-200/80">
              {/* Sankalp: 600+ Leads */}
              <div className="flex flex-col items-center gap-1 h-full justify-end">
                <div className="h-20 flex items-end">
                  <motion.div
                    style={{ height: sankalpBarHeight }}
                    className="w-5 bg-blue-600 rounded-t-xs shadow-xs"
                    title="600+ Student Data"
                  />
                </div>
                <span className="text-[7px] font-mono font-bold text-blue-700">600+</span>
                <span className="text-[6px] font-mono text-slate-500">Sankalp</span>
              </div>

              {/* Gyanoday: 152 Admissions */}
              <div className="flex flex-col items-center gap-1 h-full justify-end">
                <div className="h-20 flex items-end">
                  <motion.div
                    style={{ height: schoolBarHeight }}
                    className="w-5 bg-blue-500 rounded-t-xs shadow-xs"
                    title="152 Admissions"
                  />
                </div>
                <span className="text-[7px] font-mono font-bold text-blue-700">152</span>
                <span className="text-[6px] font-mono text-slate-500">School</span>
              </div>

              {/* Sanjivani: 120 Enquiries -> 45 Admissions */}
              <div className="flex flex-col items-center gap-1 h-full justify-end">
                <div className="h-20 flex items-end">
                  <motion.div
                    style={{ height: sanjivaniBarHeight }}
                    className="w-5 bg-blue-400 rounded-t-xs shadow-xs"
                    title="45 Admissions from 120 Leads"
                  />
                </div>
                <span className="text-[7px] font-mono font-bold text-blue-700">45</span>
                <span className="text-[6px] font-mono text-slate-500">Sanjivani</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[7px] font-mono text-slate-500 pt-1">
              <span>720+ Total Inbound Leads</span>
              <span className="text-blue-700 font-bold">197+ Total Admissions</span>
            </div>
          </div>

          {/* RIGHT: Interactive Funnel Line Chart */}
          <div className="col-span-7 bg-slate-50/80 border border-slate-200/90 rounded-xl p-2.5 flex flex-col justify-between shadow-2xs relative overflow-hidden">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[8px] font-mono uppercase text-slate-600 font-bold">
                Funnel Velocity Line Chart (Scroll Scrub)
              </span>
              <span className="text-[7px] font-mono text-blue-700 font-bold bg-blue-100/80 px-1 rounded-xs">
                3-Tier Intake
              </span>
            </div>

            {/* SVG Line Chart Canvas */}
            <div className="relative w-full flex-1 my-1">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 280 90">
                <defs>
                  <linearGradient id="funnelGradientLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.30" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1="0" y1="20" x2="280" y2="20" stroke="#e2e8f0" strokeDasharray="2 2" strokeWidth="1" />
                <line x1="0" y1="50" x2="280" y2="50" stroke="#e2e8f0" strokeDasharray="2 2" strokeWidth="1" />
                <line x1="0" y1="80" x2="280" y2="80" stroke="#cbd5e1" strokeWidth="1" />

                {/* Shaded Area Fill */}
                <path
                  d="M10 20 Q 70 30, 130 50 T 260 76 L 260 80 L 10 80 Z"
                  fill="url(#funnelGradientLight)"
                />

                {/* Main Animated Funnel Line */}
                <motion.path
                  d="M10 20 Q 70 30, 130 50 T 260 76"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ pathLength: funnelLineProgress }}
                />

                {/* Funnel Milestone Nodes */}
                {/* Node 1: Targeted Impressions */}
                <circle cx="10" cy="20" r="4" fill="#1d4ed8" stroke="#ffffff" strokeWidth="1.5" />
                {/* Node 2: 720+ Enquiries */}
                <circle cx="130" cy="50" r="4" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
                {/* Node 3: 197+ Admissions */}
                <circle cx="260" cy="76" r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
              </svg>

              {/* Floating Dynamic Tooltip that follows the conversion apex */}
              <motion.div
                style={{ opacity: nodeTooltipOpacity }}
                className="absolute bottom-1 right-1 bg-slate-900 text-white rounded-md px-2 py-1 shadow-lg text-[8px] font-mono border border-slate-700 pointer-events-none"
              >
                <div className="font-bold text-blue-400">197+ Direct Admissions</div>
                <div className="text-slate-300 text-[7px]">Conversion Rate: 37.5%</div>
              </motion.div>
            </div>

            {/* X-Axis Funnel Step Labels */}
            <div className="flex items-center justify-between text-[7px] font-mono text-slate-500 pt-0.5 border-t border-slate-100">
              <span>85k+ Impressions</span>
              <span className="text-blue-700 font-bold">720+ Enquiries</span>
              <span className="text-blue-700 font-bold">197+ Admissions</span>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT: HowWeScaleSection
   Single unified sticky scroll-jacked section across stages 01 to 04 on #F6F9FD.
   - Stage 1: MacBook Titanium (Strategic Advisory)
   - Stage 2: iPhone Titanium (Short-Form & Content Engine)
   - Stage 3: iPad SpaceBlack (Performance Marketing)
   - Stage 4: Desktop Mac Monitor (Institutional Scale & Web)
   ───────────────────────────────────────────────────────────── */
export function HowWeScaleSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track single unified scroll progress across 950vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Direct, low-latency spring physics: responsive and snappy without double-lag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.12,
    restDelta: 0.0001,
  });

  // Vertical progress bar (0% -> 100%)
  const progressBarHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // Shared synchronized milestones for Stages 1 to 4:
  // Stage 1 active: [0, 0.20], transition: [0.20, 0.30]
  // Stage 2 active: [0.30, 0.45], transition: [0.45, 0.55]
  // Stage 3 active: [0.55, 0.70], transition: [0.70, 0.80]
  // Stage 4 active: [0.80, 1.00]
  
  // Dynamic Corner Light Flares tracking smoothly across stages
  const flareX = useTransform(smoothProgress, [0, 0.35, 0.65, 1], ['10%', '85%', '90%', '15%']);
  const flareY = useTransform(smoothProgress, [0, 0.35, 0.65, 1], ['15%', '25%', '60%', '75%']);
  const flareScale = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [1, 1.25, 1.1, 1.2]);
  const flareOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.22, 0.25, 0.22]);

  // Left Column Stage Physical Vertical Scroll Motion (Sticky, docked stage presentations)
  // Stage 1: Docks comfortably at 0%, then glides out slowly
  const left1Y = useTransform(smoothProgress, [0, 0.18, 0.25], ['0%', '0%', '-50px']);
  const left1Opacity = useTransform(smoothProgress, [0, 0.18, 0.25], [1, 1, 0]);
  const left1Shadow = useTransform(
    smoothProgress,
    [0, 0.18, 0.25],
    ['drop-shadow(0 0 0 rgba(0,0,0,0))', 'drop-shadow(0 0 0 rgba(0,0,0,0))', 'drop-shadow(0 20px 25px rgba(15,23,42,0.14))']
  );

  // Stage 2: Glides in, locks at 0% for reading, then glides out slowly
  const left2Y = useTransform(smoothProgress, [0.20, 0.27, 0.44, 0.50], ['50px', '0%', '0%', '-50px']);
  const left2Opacity = useTransform(smoothProgress, [0.20, 0.27, 0.44, 0.50], [0, 1, 1, 0]);
  const left2Shadow = useTransform(
    smoothProgress,
    [0.20, 0.27, 0.44, 0.50],
    [
      'drop-shadow(0 20px 25px rgba(15,23,42,0.14))',
      'drop-shadow(0 0 0 rgba(0,0,0,0))',
      'drop-shadow(0 0 0 rgba(0,0,0,0))',
      'drop-shadow(0 20px 25px rgba(15,23,42,0.14))',
    ]
  );

  // Stage 3: Glides in, locks at 0% for reading, then glides out slowly
  const left3Y = useTransform(smoothProgress, [0.46, 0.53, 0.70, 0.76], ['50px', '0%', '0%', '-50px']);
  const left3Opacity = useTransform(smoothProgress, [0.46, 0.53, 0.70, 0.76], [0, 1, 1, 0]);
  const left3Shadow = useTransform(
    smoothProgress,
    [0.46, 0.53, 0.70, 0.76],
    [
      'drop-shadow(0 20px 25px rgba(15,23,42,0.14))',
      'drop-shadow(0 0 0 rgba(0,0,0,0))',
      'drop-shadow(0 0 0 rgba(0,0,0,0))',
      'drop-shadow(0 20px 25px rgba(15,23,42,0.14))',
    ]
  );

  // Stage 4: Glides in and stays locked for conclusive reading
  const left4Y = useTransform(smoothProgress, [0.72, 0.79, 0.95, 1], ['50px', '0%', '0%', '0%']);
  const left4Opacity = useTransform(smoothProgress, [0.72, 0.79, 0.95, 1], [0, 1, 1, 1]);
  const left4Shadow = useTransform(
    smoothProgress,
    [0.72, 0.79, 0.95, 1],
    ['drop-shadow(0 0 0 rgba(0,0,0,0))', 'drop-shadow(0 0 0 rgba(0,0,0,0))', 'drop-shadow(0 0 0 rgba(0,0,0,0))', 'drop-shadow(0 0 0 rgba(0,0,0,0))']
  );

  // Right Device Morph, Translation & Scale Transforms (Stages 1-4)
  // Device 1: MacBook Titanium (Stage 1) - Static initial position, gently fades out as stage transitions
  const dev1Scale = useTransform(smoothProgress, [0, 0.18, 0.25], [1, 1, 0.90]);
  const dev1Opacity = useTransform(smoothProgress, [0, 0.18, 0.25], [1, 1, 0]);

  // Device 2: iPhone Titanium (Stage 2) - Enters gently from upright (top-right) and slowly recedes behind
  const dev2Y = useTransform(smoothProgress, [0.20, 0.27, 0.44, 0.50], ['-140px', '0px', '0px', '30px']);
  const dev2X = useTransform(smoothProgress, [0.20, 0.27, 0.44, 0.50], ['80px', '0px', '0px', '-20px']);
  const dev2Scale = useTransform(smoothProgress, [0.20, 0.27, 0.44, 0.50], [0.92, 1, 1, 0.88]);
  const dev2Opacity = useTransform(smoothProgress, [0.20, 0.27, 0.44, 0.50], [0, 1, 1, 0]);

  // Device 3: iPad Pro SpaceBlack (Stage 3) - Substantial tablet presence with slow, graceful morph
  const dev3Y = useTransform(smoothProgress, [0.46, 0.53, 0.70, 0.76], ['60px', '0px', '0px', '-25px']);
  const dev3Scale = useTransform(smoothProgress, [0.46, 0.53, 0.70, 0.76], [0.92, 1, 1, 0.90]);
  const dev3Opacity = useTransform(smoothProgress, [0.46, 0.53, 0.70, 0.76], [0, 1, 1, 0]);

  // Device 4: Mac Desktop Monitor (Stage 4) - Desktop Mac monitor with aluminum stand
  const dev4Y = useTransform(smoothProgress, [0.72, 0.79, 0.95, 1], ['70px', '0px', '0px', '0px']);
  const dev4Scale = useTransform(smoothProgress, [0.72, 0.79, 0.95, 1], [0.92, 1, 1, 1]);
  const dev4Opacity = useTransform(smoothProgress, [0.72, 0.79, 0.95, 1], [0, 1, 1, 1]);

  return (
    <div
      ref={containerRef}
      id="how-we-scale"
      className="relative h-[380vh] bg-[#CBD5E1]"
    >
      {/* Sticky Full Viewport Wrapper (Same Section throughout all 4 stages) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#CBD5E1] px-4 sm:px-8 md:px-16">
        {/* Subtle Ambient Flares */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(30,99,255,0.12)_0%,rgba(79,169,255,0.05)_40%,transparent_70%)] blur-[90px] z-0" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.14)_0%,rgba(59,130,246,0.06)_45%,transparent_70%)] blur-[100px] z-0" />

        {/* Dynamic Tracking Light Flare */}
        <motion.div
          style={{
            left: flareX,
            top: flareY,
            scale: flareScale,
            opacity: flareOpacity,
          }}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(30,99,255,0.12)_0%,rgba(79,169,255,0.06)_35%,rgba(96,165,250,0.02)_60%,transparent_75%)] blur-[95px] z-0"
        />

        {/* Bottom-Right Soft Organic Earthen Dune Silhouette */}
        <svg
          className="pointer-events-none absolute right-0 bottom-0 w-[55vw] max-w-[800px] h-auto text-slate-400/20 select-none z-0"
          viewBox="0 0 800 450"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 450C220 400 360 260 520 280C680 300 740 200 800 180V450H0Z" />
        </svg>

        {/* ─────────────────────────────────────────────────────────────
            STAGES 1 to 4: 2-Column Grid Container (Editorial + Devices)
            ───────────────────────────────────────────────────────────── */}
        <div
          className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-14 items-center w-full"
        >
          {/* Left Column (6 cols): Editorial Typography */}
          <div className="lg:col-span-6 relative h-[38vh] sm:h-[40vh] lg:h-[82vh] min-h-[200px] lg:min-h-[580px] max-h-[320px] lg:max-h-[740px] flex items-center justify-center overflow-hidden w-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_6%,black_94%,transparent_100%)]">
            {/* Stage 1 Content: Strategic Foundations */}
            <motion.div
              style={{ opacity: left1Opacity, y: left1Y, filter: left1Shadow }}
              className="absolute inset-0 flex flex-col justify-center space-y-2.5 sm:space-y-4 lg:space-y-6 transform-gpu will-change-[transform,opacity,filter]"
            >
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-blue-700 font-normal uppercase">
                <span>01 / STRATEGIC ADVISORY</span>
              </div>
              <h2 className="font-sans text-lg sm:text-2xl lg:text-[32px] xl:text-[36px] font-normal leading-[1.2] text-black tracking-tight max-w-lg line-clamp-4">
                Strategic management for moments where visibility, trust, and narrative shape business outcomes.
              </h2>
              <div className="space-y-1.5 text-xs sm:text-sm text-neutral-600/90 font-light leading-relaxed max-w-lg">
                <p>
                  We advise founders and enterprises at critical inflection points—market launches, rapid scaling, brand positioning, and digital transformation. We align visibility with core business strategy to drive long-term outcomes.
                </p>
              </div>
              <div>
                <OrbitBorderButton
                  link="/case-studies"
                  label="VIEW SELECTED WORK →"
                  padding="10px 22px"
                  colors={{ fill: "#CBD5E1", textColor: "#000000" }}
                  border={{
                    borderColor: "rgba(59, 130, 246, 0.4)",
                    borderStyle: "solid",
                    borderWidth: 1.5,
                  }}
                  stroke={{
                    size: 30,
                    color: "#3B82F6",
                    speed: 50,
                    direction: "ccw",
                    hoverFill: 100,
                  }}
                />
              </div>
            </motion.div>

            {/* Stage 2 Content: Viral Reel Production */}
            <motion.div
              style={{ opacity: left2Opacity, y: left2Y, filter: left2Shadow }}
              className="absolute inset-0 flex flex-col justify-center space-y-2.5 sm:space-y-4 lg:space-y-6 transform-gpu will-change-[transform,opacity,filter]"
            >
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-blue-700 font-normal uppercase">
                <span>02 / SHORT-FORM & CONTENT ENGINE</span>
              </div>
              <h2 className="font-sans text-lg sm:text-2xl lg:text-[32px] xl:text-[36px] font-normal leading-[1.2] text-black tracking-tight max-w-lg">
                High-retention Reels engineered to turn passive scrollers into paying customers.
              </h2>
              <div className="space-y-1.5 text-xs sm:text-sm text-neutral-600/90 font-light leading-relaxed max-w-lg">
                <p>
                  From hook scripting and multi-cam production to algorithmic distribution, we craft vertical video assets that capture attention in the first 1.5 seconds and compound into direct revenue.
                </p>
              </div>
              <div>
                <OrbitBorderButton
                  link="/services"
                  label="EXPLORE CONTENT STUDIO →"
                  padding="10px 22px"
                  colors={{ fill: "#CBD5E1", textColor: "#000000" }}
                  border={{
                    borderColor: "rgba(59, 130, 246, 0.4)",
                    borderStyle: "solid",
                    borderWidth: 1.5,
                  }}
                  stroke={{
                    size: 30,
                    color: "#3B82F6",
                    speed: 50,
                    direction: "ccw",
                    hoverFill: 100,
                  }}
                />
              </div>
            </motion.div>

            {/* Stage 3 Content: Omnichannel Marketing */}
            <motion.div
              style={{ opacity: left3Opacity, y: left3Y, filter: left3Shadow }}
              className="absolute inset-0 flex flex-col justify-center space-y-2.5 sm:space-y-4 lg:space-y-6 transform-gpu will-change-[transform,opacity,filter]"
            >
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-blue-700 font-normal uppercase">
                <span>03 / PERFORMANCE MARKETING</span>
              </div>
              <h2 className="font-sans text-lg sm:text-2xl lg:text-[32px] xl:text-[36px] font-normal leading-[1.2] text-black tracking-tight max-w-lg">
                Data-backed acquisition funnels turning ₹400 into ₹1.3L in revenue.
              </h2>
              <div className="space-y-1.5 text-xs sm:text-sm text-neutral-600/90 font-light leading-relaxed max-w-lg">
                <p>
                  We eliminate guesswork with hyper-targeted Meta &amp; Google ad architectures. From Cleaning Karigar turning ₹400 into ₹1,29,999 (325× ROAS) to WeShine generating ₹5,000 from a ₹200 budget, every rupee is tracked and multiplied.
                </p>
              </div>
              <div>
                <OrbitBorderButton
                  link="/case-studies"
                  label="SEE GROWTH METRICS →"
                  padding="10px 22px"
                  colors={{ fill: "#CBD5E1", textColor: "#000000" }}
                  border={{
                    borderColor: "rgba(59, 130, 246, 0.4)",
                    borderStyle: "solid",
                    borderWidth: 1.5,
                  }}
                  stroke={{
                    size: 30,
                    color: "#3B82F6",
                    speed: 50,
                    direction: "ccw",
                    hoverFill: 100,
                  }}
                />
              </div>
            </motion.div>

            {/* Stage 4 Content: Conversion Architecture & Institutional Scale */}
            <motion.div
              style={{ opacity: left4Opacity, y: left4Y, filter: left4Shadow }}
              className="absolute inset-0 flex flex-col justify-center space-y-2.5 sm:space-y-4 lg:space-y-6 transform-gpu will-change-[transform,opacity,filter]"
            >
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-blue-700 font-normal uppercase">
                <span>04 / HIGH-CONVERSION ARCHITECTURE</span>
              </div>
              <h2 className="font-sans text-lg sm:text-2xl lg:text-[32px] xl:text-[36px] font-normal leading-[1.2] text-black tracking-tight max-w-lg">
                Institutional student funnels delivering 152 admissions and 600+ enquiries.
              </h2>
              <div className="space-y-1.5 text-xs sm:text-sm text-neutral-600/90 font-light leading-relaxed max-w-lg">
                <p>
                  Scalable acquisition pipelines engineered for institutional trust. Generating 152 school admissions from ₹1,500 ads, 120 enquiries &amp; 45 pharmacy admissions for Sanjivani, and 600+ qualified student leads for Sankalp Learning Classes.
                </p>
              </div>
              <div>
                <OrbitBorderButton
                  link="/#connect"
                  label="LAUNCH YOUR PROJECT →"
                  padding="10px 22px"
                  colors={{ fill: "#CBD5E1", textColor: "#000000" }}
                  border={{
                    borderColor: "rgba(59, 130, 246, 0.4)",
                    borderStyle: "solid",
                    borderWidth: 1.5,
                  }}
                  stroke={{
                    size: 30,
                    color: "#3B82F6",
                    speed: 50,
                    direction: "ccw",
                    hoverFill: 100,
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column (6 cols): Interactive Hardware Showcase */}
          <div className="lg:col-span-6 relative h-[42vh] sm:h-[48vh] lg:h-[82vh] min-h-[230px] sm:min-h-[280px] lg:min-h-[580px] max-h-[420px] lg:max-h-[740px] flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px] h-[210px] min-[380px]:h-[240px] sm:h-[360px] md:h-[420px] lg:h-[480px] flex items-center justify-center">
              {/* STAGE 1 DEVICE: MacBook Titanium - Centered in place without side entry */}
              <motion.div
                style={{ scale: dev1Scale, opacity: dev1Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none transform-gpu will-change-[transform,opacity]"
              >
                <div className="pointer-events-auto scale-[0.80] min-[380px]:scale-[0.88] sm:scale-100">
                  <LaptopMockupCard variant="titanium">
                    <StrategyMeetingScreen />
                  </LaptopMockupCard>
                </div>
              </motion.div>

              {/* STAGE 2 DEVICE: iPhone Titanium - Enters from upright (top-right) and recedes cleanly */}
              <motion.div
                style={{ x: dev2X, y: dev2Y, scale: dev2Scale, opacity: dev2Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none transform-gpu will-change-[transform,opacity]"
              >
                <div className="pointer-events-auto scale-[0.78] min-[380px]:scale-[0.84] sm:scale-105 sm:scale-110">
                  <PhoneMockupCard variant="titanium" showDynamicIsland={true}>
                    <ReelEditorScreen scrollYProgress={smoothProgress} />
                  </PhoneMockupCard>
                </div>
              </motion.div>

              {/* STAGE 3 DEVICE: iPad Metallic Silver - Expansive tablet presence */}
              <motion.div
                style={{ y: dev3Y, scale: dev3Scale, opacity: dev3Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none transform-gpu will-change-[transform,opacity]"
              >
                <div className="pointer-events-auto scale-[0.78] min-[380px]:scale-[0.85] sm:scale-100">
                  <IpadMockupCard variant="metallicSilver" showCamera={true}>
                    <MarketingPadScreen scrollYProgress={smoothProgress} />
                  </IpadMockupCard>
                </div>
              </motion.div>

              {/* STAGE 4 DEVICE: Desktop Mac Monitor (iMac / Studio Display with Aluminum Stand) */}
              <motion.div
                style={{ y: dev4Y, scale: dev4Scale, opacity: dev4Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none transform-gpu will-change-[transform,opacity]"
              >
                <div className="pointer-events-auto scale-[0.78] min-[380px]:scale-[0.85] sm:scale-100">
                  <DesktopMac3DCard variant="metallicSilver">
                    <ClientWebBuildScreen scrollYProgress={smoothProgress} />
                  </DesktopMac3DCard>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeScaleSection;
