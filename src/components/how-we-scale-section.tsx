'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
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
} from '@/components/mockups';

/* ─────────────────────────────────────────────────────────────
   STAGE 1: Strategic Advisory — Video Showcase Screen (MacBook)
   Autoplays /videos/scroll_video.mp4 seamlessly on loop
   ───────────────────────────────────────────────────────────── */
function StrategyMeetingScreen() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="relative size-full bg-slate-950 overflow-hidden font-sans select-none">
      {/* Autoplaying Loop Video ("Trust. Partnership. Security.") */}
      <video
        ref={videoRef}
        src="/videos/scroll_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="size-full object-cover"
      />

     
      
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   STAGE 2: Viral Reel Production & Sales Spike (iPhone - White Screen)
   ───────────────────────────────────────────────────────────── */
function ReelEditorScreen({ scrollYProgress }: { scrollYProgress: any }) {
  // Slide up the white analytics sheet gently during Stage 2 active window (0.25 - 0.31)
  const sheetY = useTransform(scrollYProgress, [0.25, 0.31], ['100%', '0%']);
  const sheetOpacity = useTransform(scrollYProgress, [0.25, 0.28], [0, 1]);

  return (
    <div className="relative size-full bg-white text-slate-900 overflow-hidden font-sans select-none">
      {/* 2A: Reel Video Editor Screen (White UI) */}
      <div className="relative size-full flex flex-col justify-between pt-11 pb-5 px-3">
        {/* Top Camera HUD / Timecode */}
        <div className="flex items-center justify-between px-1 text-[9px] font-mono text-slate-500">
          <span className="flex items-center gap-1 text-red-600 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            REC 4K60
          </span>
          <span className="text-slate-600 font-medium">00:01.4s / 00:30s</span>
        </div>

        {/* 9:16 Video Preview Canvas */}
        <div className="relative flex-1 my-2 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
            alt="Cinematic Vertical Video Production"
            className="size-full object-cover contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          {/* Floating Hook Retention Badge */}
          <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md border border-emerald-500/30 rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-xs">
            <TrendingUp className="w-3 h-3 text-emerald-600" />
            <span className="text-[10px] font-mono text-emerald-700 font-semibold tracking-tight">
              Hook Retention: 84%
            </span>
          </div>

          {/* Centered Captions Overlay */}
          <div className="absolute bottom-3 inset-x-2 text-center">
            <p className="text-[11px] font-extrabold text-slate-900 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-md inline-block uppercase tracking-wider shadow-sm border border-slate-200/80">
              &quot;THE EXACT FORMULA TO 2X REVENUE&quot;
            </p>
          </div>
        </div>

        {/* Video Editor Tracks & Animated Audio Waveform */}
        
      </div>

      {/* 2B: Sliding Analytics Sheet (Crisp White Card) */}
      <motion.div
        style={{ y: sheetY, opacity: sheetOpacity }}
        className="absolute inset-x-2 bottom-2 rounded-2xl bg-white/98 backdrop-blur-md border border-slate-200/90 p-3.5 shadow-2xl z-30"
      >
        <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-2" />

        <div className="flex items-center justify-between text-xs font-semibold mb-2">
          <span className="text-slate-800">Live Post-Drop Analytics</span>
          <span className="text-emerald-600 flex items-center gap-1 text-[10px] font-mono font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE
          </span>
        </div>

        {/* Emerald Upward Spiking SVG Line Graph */}
        <div className="h-16 w-full my-1">
          <svg className="size-full overflow-visible" viewBox="0 0 200 60">
            <defs>
              <linearGradient id="emeraldSpikeLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0 50 Q 30 48, 60 40 T 110 32 T 150 14 T 200 4 L 200 60 L 0 60 Z"
              fill="url(#emeraldSpikeLight)"
            />
            <path
              d="M0 50 Q 30 48, 60 40 T 110 32 T 150 14 T 200 4"
              fill="none"
              stroke="#059669"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* High-Impact Numerical Telemetry */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
          <div>
            <span className="text-[9px] font-mono text-slate-500 block uppercase">
              Reel Views
            </span>
            <strong className="text-sm font-bold text-slate-900 tracking-tight">
              1.4M+
            </strong>
          </div>
          <div>
            <span className="text-[9px] font-mono text-slate-500 block uppercase">
              Direct Revenue
            </span>
            <strong className="text-sm font-bold text-emerald-600 tracking-tight">
              ₹18.4L <span className="text-[10px] font-normal text-slate-600">(+340%)</span>
            </strong>
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
  // Dynamic scroll-driven interactions in window [0.43, 0.50]
  const roasCounter = useTransform(scrollYProgress, [0.44, 0.50], ['25x', '325x']);
  const revenueCounter = useTransform(scrollYProgress, [0.44, 0.50], ['₹5,000', '₹1,29,999']);
  
  // Interactive Line Chart curve progression (0 -> 1)
  const lineProgress = useTransform(scrollYProgress, [0.43, 0.50], [0, 1]);
  const tooltipOpacity = useTransform(scrollYProgress, [0.46, 0.50], [0, 1]);
  const tooltipScale = useTransform(scrollYProgress, [0.46, 0.50], [0.8, 1]);

  // Interactive Bar Chart heights (rise with scroll)
  const spendBar1Height = useTransform(scrollYProgress, [0.43, 0.46], ['0%', '14%']);
  const karigarRevBarHeight = useTransform(scrollYProgress, [0.44, 0.50], ['0%', '100%']);
  
  const spendBar2Height = useTransform(scrollYProgress, [0.43, 0.46], ['0%', '12%']);
  const weShineRevBarHeight = useTransform(scrollYProgress, [0.44, 0.49], ['0%', '64%']);

  return (
    <div className="relative size-full bg-white text-slate-900 overflow-hidden font-sans p-3.5 sm:p-4 flex flex-col justify-between select-none">
      {/* Top Command Center Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-1.5">
            
            <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 tracking-tight uppercase">
              Performance Command 
            </h4>
          </div>
          <span className="text-[8px] sm:text-[9px] font-mono text-slate-500">
            Interactive Spend vs. Revenue Multiplier Telemetry
          </span>
        </div>

        {/* Live Status Pill with Peak ROAS */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-300 rounded-full text-emerald-700 text-[10px] font-mono font-bold shadow-xs">
          <span>PEAK ROAS: </span>
          <motion.span className="text-emerald-800 font-extrabold">{roasCounter}</motion.span>
        </div>
      </div>

      {/* Top 2 KPI Cards */}
      <div className="grid grid-cols-2 gap-2 my-1">
        {/* Cleaning Karigar */}
        <div className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-2 flex items-center justify-between shadow-2xs">
          <div>
            <span className="text-[8px] font-mono text-slate-500 block uppercase font-medium">Cleaning Karigar</span>
            <motion.div className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">
              {revenueCounter}
            </motion.div>
            <span className="text-[8px] font-mono text-slate-500">From ₹400 Ad Spend</span>
          </div>
          <div className="text-right">
            <span className="inline-block px-1.5 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 font-bold font-mono text-[9px] border border-emerald-300">
              325× ROAS
            </span>
            <span className="text-[7px] font-mono text-emerald-700 block mt-0.5">+32,400% Gain</span>
          </div>
        </div>

        {/* WeShine Beauty */}
        <div className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-2 flex items-center justify-between shadow-2xs">
          <div>
            <span className="text-[8px] font-mono text-slate-500 block uppercase font-medium">WeShine Salon</span>
            <div className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">
              ₹3,500 – ₹5,000
            </div>
            <span className="text-[8px] font-mono text-slate-500">From ₹200 Ad Budget</span>
          </div>
          <div className="text-right">
            <span className="inline-block px-1.5 py-0.5 rounded-sm bg-blue-100 text-blue-800 font-bold font-mono text-[9px] border border-blue-300">
              25× ROAS
            </span>
            <span className="text-[7px] font-mono text-blue-700 block mt-0.5">+2,400% Gain</span>
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
                    className="w-4 bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-xs shadow-xs"
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
                    className="w-4.5 bg-gradient-to-t from-emerald-600 to-teal-400 rounded-t-xs shadow-xs"
                    title="₹1,29,999 Revenue"
                  />
                  <span className="text-[6px] font-mono font-bold text-emerald-700 mt-0.5">₹1.3L</span>
                </div>
              </div>
              <span className="text-[7px] font-mono text-slate-600 font-semibold">Karigar</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[7px] font-mono text-slate-500 pt-1">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-slate-300 rounded-xs" /> Spend</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-xs" /> Revenue (ROAS)</span>
          </div>
        </div>

        {/* RIGHT: Interactive ROAS Multiplier Line Chart */}
        <div className="col-span-7 bg-slate-50/80 border border-slate-200/90 rounded-xl p-2.5 flex flex-col justify-between shadow-2xs relative overflow-hidden">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[8px] font-mono uppercase text-slate-600 font-bold">
              ROAS Growth Curve (Scroll Reactive)
            </span>
            <span className="text-[7px] font-mono text-emerald-700 font-bold bg-emerald-100/80 px-1 rounded-xs">
              Linear 325x Spike
            </span>
          </div>

          {/* SVG Line Chart Canvas */}
          <div className="relative w-full flex-1 my-1">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 280 90">
              <defs>
                <linearGradient id="roasGradientLight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                  <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
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
                stroke="#059669"
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
              <circle cx="260" cy="12" r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
            </svg>

            {/* Floating Dynamic Tooltip that appears at apex */}
            <motion.div
              style={{ opacity: tooltipOpacity, scale: tooltipScale }}
              className="absolute top-0 right-1 bg-slate-900 text-white rounded-md px-2 py-1 shadow-lg text-[8px] font-mono border border-slate-700 pointer-events-none"
            >
              <div className="font-bold text-emerald-400">Peak: ₹1,29,999 (325×)</div>
              <div className="text-slate-300 text-[7px]">Spend: ₹400 • ROI: +32,400%</div>
            </motion.div>
          </div>

          {/* X-Axis Labels */}
          <div className="flex items-center justify-between text-[7px] font-mono text-slate-400 pt-0.5 border-t border-slate-100">
            <span>₹200 Ad Launch</span>
            <span>WeShine (25x)</span>
            <span className="text-emerald-700 font-bold">Karigar (325x Peak)</span>
          </div>
        </div>
      </div>

      {/* Bottom Verification Strip */}
      <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[8px] font-mono text-slate-500">
        <span className="flex items-center gap-1 text-emerald-700 font-semibold">
          <TrendingUp className="w-3 h-3 text-emerald-600" /> Blended CPA Reduced by 74%
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
  // Scroll reactive transforms in active window [0.62, 0.70]
  const funnelLineProgress = useTransform(scrollYProgress, [0.63, 0.70], [0, 1]);
  const sankalpBarHeight = useTransform(scrollYProgress, [0.63, 0.69], ['0%', '100%']);
  const schoolBarHeight = useTransform(scrollYProgress, [0.64, 0.70], ['0%', '84%']);
  const sanjivaniBarHeight = useTransform(scrollYProgress, [0.63, 0.68], ['0%', '62%']);
  const pillScale = useTransform(scrollYProgress, [0.66, 0.71], [0.92, 1]);
  const nodeTooltipOpacity = useTransform(scrollYProgress, [0.66, 0.70], [0, 1]);

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
        <div className="grid grid-cols-3 gap-2">
          {/* Card 1: Gyanoday Vidya Sanskar School */}
          <div className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-2 shadow-2xs">
            <div className="flex items-center justify-between text-[8px] font-mono text-slate-500 mb-0.5">
              <span className="font-semibold text-slate-700 truncate">School Admissions</span>
              <span className="text-emerald-700 font-bold bg-emerald-100/80 px-1 rounded-xs">₹9.8/Adm</span>
            </div>
            <strong className="text-xs sm:text-sm font-extrabold text-slate-900 block tracking-tight">
              152 Admissions
            </strong>
            <span className="text-[8px] font-mono text-slate-500">₹1,500 Ad (₹4,999 pkg)</span>
          </div>

          {/* Card 2: Sanjivani Institute of Pharmacy */}
          <div className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-2 shadow-2xs">
            <div className="flex items-center justify-between text-[8px] font-mono text-slate-500 mb-0.5">
              <span className="font-semibold text-slate-700 truncate">Sanjivani Pharmacy</span>
              <span className="text-blue-700 font-bold bg-blue-100/80 px-1 rounded-xs">37.5% Conv</span>
            </div>
            <strong className="text-xs sm:text-sm font-extrabold text-slate-900 block tracking-tight">
              45 Admissions
            </strong>
            <span className="text-[8px] font-mono text-slate-500">120 Leads on ₹1,999 Ad</span>
          </div>

          {/* Card 3: Sankalp Learning Classes */}
          <div className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-2 shadow-2xs">
            <div className="flex items-center justify-between text-[8px] font-mono text-slate-500 mb-0.5">
              <span className="font-semibold text-slate-700 truncate">Sankalp Classes</span>
              <span className="text-purple-700 font-bold bg-purple-100/80 px-1 rounded-xs">₹16/Lead</span>
            </div>
            <strong className="text-xs sm:text-sm font-extrabold text-slate-900 block tracking-tight">
              600+ Students
            </strong>
            <span className="text-[8px] font-mono text-slate-500">Enquiries on ₹10k Spend</span>
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
                    className="w-5 bg-gradient-to-t from-purple-600 to-indigo-500 rounded-t-xs shadow-xs"
                    title="600+ Student Data"
                  />
                </div>
                <span className="text-[7px] font-mono font-bold text-purple-700">600+</span>
                <span className="text-[6px] font-mono text-slate-500">Sankalp</span>
              </div>

              {/* Gyanoday: 152 Admissions */}
              <div className="flex flex-col items-center gap-1 h-full justify-end">
                <div className="h-20 flex items-end">
                  <motion.div
                    style={{ height: schoolBarHeight }}
                    className="w-5 bg-gradient-to-t from-emerald-600 to-teal-500 rounded-t-xs shadow-xs"
                    title="152 Admissions"
                  />
                </div>
                <span className="text-[7px] font-mono font-bold text-emerald-700">152</span>
                <span className="text-[6px] font-mono text-slate-500">School</span>
              </div>

              {/* Sanjivani: 120 Enquiries -> 45 Admissions */}
              <div className="flex flex-col items-center gap-1 h-full justify-end">
                <div className="h-20 flex items-end">
                  <motion.div
                    style={{ height: sanjivaniBarHeight }}
                    className="w-5 bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t-xs shadow-xs"
                    title="45 Admissions from 120 Leads"
                  />
                </div>
                <span className="text-[7px] font-mono font-bold text-blue-700">45</span>
                <span className="text-[6px] font-mono text-slate-500">Sanjivani</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[7px] font-mono text-slate-500 pt-1">
              <span>720+ Total Inbound Leads</span>
              <span className="text-emerald-700 font-bold">197+ Total Admissions</span>
            </div>
          </div>

          {/* RIGHT: Interactive Funnel Line Chart */}
          <div className="col-span-7 bg-slate-50/80 border border-slate-200/90 rounded-xl p-2.5 flex flex-col justify-between shadow-2xs relative overflow-hidden">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[8px] font-mono uppercase text-slate-600 font-bold">
                Funnel Velocity Line Chart (Scroll Scrub)
              </span>
              <span className="text-[7px] font-mono text-purple-700 font-bold bg-purple-100/80 px-1 rounded-xs">
                3-Tier Intake
              </span>
            </div>

            {/* SVG Line Chart Canvas */}
            <div className="relative w-full flex-1 my-1">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 280 90">
                <defs>
                  <linearGradient id="funnelGradientLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.30" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
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
                  stroke="#7c3aed"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ pathLength: funnelLineProgress }}
                />

                {/* Funnel Milestone Nodes */}
                {/* Node 1: Targeted Impressions */}
                <circle cx="10" cy="20" r="4" fill="#7c3aed" stroke="#ffffff" strokeWidth="1.5" />
                {/* Node 2: 720+ Enquiries */}
                <circle cx="130" cy="50" r="4" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
                {/* Node 3: 197+ Admissions */}
                <circle cx="260" cy="76" r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
              </svg>

              {/* Floating Dynamic Tooltip that follows the conversion apex */}
              <motion.div
                style={{ opacity: nodeTooltipOpacity }}
                className="absolute bottom-1 right-1 bg-slate-900 text-white rounded-md px-2 py-1 shadow-lg text-[8px] font-mono border border-slate-700 pointer-events-none"
              >
                <div className="font-bold text-emerald-400">197+ Direct Admissions</div>
                <div className="text-slate-300 text-[7px]">Conversion Rate: 37.5%</div>
              </motion.div>
            </div>

            {/* X-Axis Funnel Step Labels */}
            <div className="flex items-center justify-between text-[7px] font-mono text-slate-500 pt-0.5 border-t border-slate-100">
              <span>85k+ Impressions</span>
              <span className="text-blue-700 font-bold">720+ Enquiries</span>
              <span className="text-emerald-700 font-bold">197+ Admissions</span>
            </div>
          </div>
        </div>

        {/* Floating Verification Badges */}
        <motion.div
          style={{ scale: pillScale }}
          className="flex items-center justify-between pt-1 text-[8px] sm:text-[9px] font-mono text-slate-500"
        >
          <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-md">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span className="font-semibold">All Records Verified &amp; Audited</span>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   BUSINESS PILLARS DATA (STAGE 5)
   1. Organic Branding — Build identity, trust and audience
   2. Performance Marketing — Generate leads, sales and measurable results
   3. Automation & Technology — Improve efficiency and automate operations
   4. Franchise Scaling — Build systems and expand the business
   ───────────────────────────────────────────────────────────── */
const BUSINESS_PILLARS = [
  {
    title: 'Organic Branding',
    subtitle: 'Build identity, trust and audience',
  },
  {
    title: 'Performance Marketing',
    subtitle: 'Generate leads, sales and measurable results',
  },
  {
    title: 'Automation & Technology',
    subtitle: 'Improve efficiency and automate operations',
  },
  {
    title: 'Franchise Scaling',
    subtitle: 'Build systems and expand the business',
  },
];

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT: HowWeScaleSection
   Single unified sticky scroll-jacked section (h-[950vh]) on #F6F9FD.
   - Stage 1: MacBook Titanium (Strategic Advisory)
   - Stage 2: iPhone Titanium (Short-Form & Content Engine)
   - Stage 3: iPad SpaceBlack (Performance Marketing)
   - Stage 4: MacBook Midnight (Digital Product & Web)
   - Stage 5: Big Hand holding Smartphone & 4 Pop-out Photorealistic Glass Cards
   ───────────────────────────────────────────────────────────── */
export function HowWeScaleSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track single unified scroll progress across 950vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth, gentle easing spring physics for 120fps fluid transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 24,
    mass: 0.16,
    restDelta: 0.0001,
  });

  // Vertical progress bar (0% -> 100%)
  const progressBarHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // Shared synchronized milestones for Stages 1 to 4:
  // Transition 1 -> 2: [0.15, 0.22]
  // Transition 2 -> 3: [0.34, 0.41]
  // Transition 3 -> 4: [0.53, 0.60]
  // Transition 4 -> 5: [0.72, 0.79]

  // Left Column Stage Physical Vertical Scroll Motion
  // Stage 1
  const left1Y = useTransform(smoothProgress, [0, 0.15, 0.22], ['0%', '0%', '-125%']);
  const left1Opacity = useTransform(smoothProgress, [0, 0.15, 0.22], [1, 1, 0]);
  const left1Shadow = useTransform(
    smoothProgress,
    [0, 0.15, 0.22],
    ['drop-shadow(0 0 0 rgba(0,0,0,0))', 'drop-shadow(0 0 0 rgba(0,0,0,0))', 'drop-shadow(0 20px 25px rgba(15,23,42,0.14))']
  );

  // Stage 2
  const left2Y = useTransform(smoothProgress, [0.15, 0.22, 0.34, 0.41], ['125%', '0%', '0%', '-125%']);
  const left2Opacity = useTransform(smoothProgress, [0.15, 0.22, 0.34, 0.41], [0, 1, 1, 0]);
  const left2Shadow = useTransform(
    smoothProgress,
    [0.15, 0.22, 0.34, 0.41],
    [
      'drop-shadow(0 20px 25px rgba(15,23,42,0.14))',
      'drop-shadow(0 0 0 rgba(0,0,0,0))',
      'drop-shadow(0 0 0 rgba(0,0,0,0))',
      'drop-shadow(0 20px 25px rgba(15,23,42,0.14))',
    ]
  );

  // Stage 3
  const left3Y = useTransform(smoothProgress, [0.34, 0.41, 0.53, 0.60], ['125%', '0%', '0%', '-125%']);
  const left3Opacity = useTransform(smoothProgress, [0.34, 0.41, 0.53, 0.60], [0, 1, 1, 0]);
  const left3Shadow = useTransform(
    smoothProgress,
    [0.34, 0.41, 0.53, 0.60],
    [
      'drop-shadow(0 20px 25px rgba(15,23,42,0.14))',
      'drop-shadow(0 0 0 rgba(0,0,0,0))',
      'drop-shadow(0 0 0 rgba(0,0,0,0))',
      'drop-shadow(0 20px 25px rgba(15,23,42,0.14))',
    ]
  );

  // Stage 4
  const left4Y = useTransform(smoothProgress, [0.53, 0.60, 0.72, 0.79], ['125%', '0%', '0%', '-125%']);
  const left4Opacity = useTransform(smoothProgress, [0.53, 0.60, 0.72, 0.79], [0, 1, 1, 0]);
  const left4Shadow = useTransform(
    smoothProgress,
    [0.53, 0.60, 0.72, 0.79],
    ['drop-shadow(0 20px 25px rgba(15,23,42,0.14))', 'drop-shadow(0 0 0 rgba(0,0,0,0))', 'drop-shadow(0 0 0 rgba(0,0,0,0))', 'drop-shadow(0 20px 25px rgba(15,23,42,0.14))']
  );

  // Right Device Morph & Scale Transforms (Stages 1-4)
  // Device 1: MacBook Titanium (Stage 1)
  const dev1Scale = useTransform(smoothProgress, [0, 0.15, 0.22], [1, 1, 0.92]);
  const dev1Opacity = useTransform(smoothProgress, [0, 0.15, 0.22], [1, 1, 0]);

  // Device 2: iPhone Titanium (Stage 2)
  const dev2Scale = useTransform(smoothProgress, [0.15, 0.22, 0.34, 0.41], [0.92, 1, 1, 0.92]);
  const dev2Opacity = useTransform(smoothProgress, [0.15, 0.22, 0.34, 0.41], [0, 1, 1, 0]);

  // Device 3: iPad SpaceBlack (Stage 3)
  const dev3Scale = useTransform(smoothProgress, [0.34, 0.41, 0.53, 0.60], [0.92, 1, 1, 0.92]);
  const dev3Opacity = useTransform(smoothProgress, [0.34, 0.41, 0.53, 0.60], [0, 1, 1, 0]);

  // Device 4: MacBook Midnight (Stage 4)
  const dev4Scale = useTransform(smoothProgress, [0.53, 0.60, 0.72, 0.79], [0.92, 1, 1, 0.90]);
  const dev4Opacity = useTransform(smoothProgress, [0.53, 0.60, 0.72, 0.79], [0, 1, 1, 0]);

  // 2-Column Grid Container overall opacity (fades out smoothly to yield to Stage 5)
  const twoColOpacity = useTransform(smoothProgress, [0.73, 0.79], [1, 0]);
  const twoColPointerEvents = useTransform(smoothProgress, (val) => (val >= 0.78 ? 'none' : 'auto'));

  // ─────────────────────────────────────────────────────────
  // STAGE 5: The 4 Business Pillars Hand Architecture
  // In that same sticky viewport, after the 4th scroll ends, the hand appears!
  // ─────────────────────────────────────────────────────────
  const stage5Opacity = useTransform(smoothProgress, [0.75, 0.82], [0, 1]);
  const stage5PointerEvents = useTransform(smoothProgress, (val) => (val >= 0.76 ? 'auto' : 'none'));

  // Hand entrance & floating presence (Scroll 0.76 -> 0.83)
  const handY = useTransform(smoothProgress, [0.76, 0.83], ['14%', '0%']);
  const handScale = useTransform(smoothProgress, [0.76, 0.83], [0.93, 1]);

  // Four Pillar Frosted Glass Cards: Pop out from the phone screen to their settled corners
  // Card 1: Organic Branding (Top-Left)
  const c1X = useTransform(smoothProgress, [0.80, 0.91], ['0px', '-430px']);
  const c1Y = useTransform(smoothProgress, [0.80, 0.91], ['0px', '-190px']);
  const c1Scale = useTransform(smoothProgress, [0.80, 0.89], [0.25, 1]);
  const c1Opacity = useTransform(smoothProgress, [0.80, 0.87], [0, 1]);

  // Card 2: Performance Marketing (Top-Right)
  const c2X = useTransform(smoothProgress, [0.81, 0.92], ['0px', '400px']);
  const c2Y = useTransform(smoothProgress, [0.81, 0.92], ['0px', '-170px']);
  const c2Scale = useTransform(smoothProgress, [0.81, 0.90], [0.25, 1]);
  const c2Opacity = useTransform(smoothProgress, [0.81, 0.88], [0, 1]);

  // Card 3: Automation & Technology (Bottom-Left)
  const c3X = useTransform(smoothProgress, [0.82, 0.93], ['0px', '-440px']);
  const c3Y = useTransform(smoothProgress, [0.82, 0.93], ['0px', '190px']);
  const c3Scale = useTransform(smoothProgress, [0.82, 0.91], [0.25, 1]);
  const c3Opacity = useTransform(smoothProgress, [0.82, 0.89], [0, 1]);

  // Card 4: Franchise Scaling (Bottom-Right)
  const c4X = useTransform(smoothProgress, [0.83, 0.94], ['0px', '380px']);
  const c4Y = useTransform(smoothProgress, [0.83, 0.94], ['0px', '190px']);
  const c4Scale = useTransform(smoothProgress, [0.83, 0.92], [0.25, 1]);
  const c4Opacity = useTransform(smoothProgress, [0.83, 0.90], [0, 1]);

  return (
    <div
      ref={containerRef}
      id="how-we-scale"
      className="relative h-[950vh] bg-[#F6F9FD]"
    >
      {/* Sticky Full Viewport Wrapper (Same Section throughout all 5 stages) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#F6F9FD] px-6 sm:px-8 md:px-16 border-b border-blue-100/60">
        {/* Bottom-Right Soft Organic Earthen Dune Silhouette */}
        <svg
          className="pointer-events-none absolute right-0 bottom-0 w-[55vw] max-w-[800px] h-auto text-blue-100/60 select-none z-0"
          viewBox="0 0 800 450"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 450C220 400 360 260 520 280C680 300 740 200 800 180V450H0Z" />
        </svg>

       

        {/* ─────────────────────────────────────────────────────────────
            STAGES 1 to 4: 2-Column Grid Container (Editorial + Devices)
            Fades out cleanly after Stage 4 ends to yield to Stage 5
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          style={{ opacity: twoColOpacity, pointerEvents: twoColPointerEvents as any }}
          className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center w-full"
        >
          {/* Left Column (6 cols): Editorial Typography */}
          <div className="lg:col-span-6 relative h-[82vh] min-h-[580px] max-h-[740px] flex items-center justify-center overflow-hidden w-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_6%,black_94%,transparent_100%)]">
            {/* Stage 1 Content: Strategic Foundations */}
            <motion.div
              style={{ opacity: left1Opacity, y: left1Y, filter: left1Shadow }}
              className="absolute inset-0 flex flex-col justify-center space-y-6 transform-gpu will-change-[transform,opacity,filter]"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 uppercase">
                <span>01 / STRATEGIC ADVISORY</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal leading-[1.12] text-neutral-900 tracking-tight max-w-xl">
                Strategic management for moments where visibility, trust, and narrative shape business outcomes.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-xl">
                <p>
                  We advise founders and enterprises at critical inflection points—market launches, rapid scaling, brand positioning, and digital transformation. We align visibility with core business strategy to drive long-term outcomes.
                </p>
              </div>
              <div>
                <Link
                  href="/work"
                  className="relative inline-block overflow-hidden rounded-none border border-black/80 bg-white text-black px-8 py-3.5 text-[11px] font-mono uppercase tracking-[0.2em] font-medium shadow-xs transition-colors duration-300 before:absolute before:inset-0 before:bg-black before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-y-100 hover:text-white"
                >
                  <span className="relative z-10">VIEW SELECTED WORK →</span>
                </Link>
              </div>
            </motion.div>

            {/* Stage 2 Content: Viral Reel Production */}
            <motion.div
              style={{ opacity: left2Opacity, y: left2Y, filter: left2Shadow }}
              className="absolute inset-0 flex flex-col justify-center space-y-6 transform-gpu will-change-[transform,opacity,filter]"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 uppercase">
                <span>02 / SHORT-FORM & CONTENT ENGINE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal leading-[1.12] text-neutral-900 tracking-tight max-w-xl">
                High-retention Reels engineered to turn passive scrollers into paying customers.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-xl">
                <p>
                  From hook scripting and multi-cam production to algorithmic distribution, we craft vertical video assets that capture attention in the first 1.5 seconds and compound into direct revenue.
                </p>
              </div>
              <div>
                <Link
                  href="/services"
                  className="relative inline-block overflow-hidden rounded-none border border-black/80 bg-white text-black px-8 py-3.5 text-[11px] font-mono uppercase tracking-[0.2em] font-medium shadow-xs transition-colors duration-300 before:absolute before:inset-0 before:bg-black before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-y-100 hover:text-white"
                >
                  <span className="relative z-10">EXPLORE CONTENT STUDIO →</span>
                </Link>
              </div>
            </motion.div>

            {/* Stage 3 Content: Omnichannel Marketing */}
            <motion.div
              style={{ opacity: left3Opacity, y: left3Y, filter: left3Shadow }}
              className="absolute inset-0 flex flex-col justify-center space-y-6 transform-gpu will-change-[transform,opacity,filter]"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 uppercase">
                <span>03 / PERFORMANCE MARKETING</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal leading-[1.12] text-neutral-900 tracking-tight max-w-xl">
                Data-backed acquisition funnels turning ₹400 into ₹1.3L in revenue.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-xl">
                <p>
                  We eliminate guesswork with hyper-targeted Meta &amp; Google ad architectures. From Cleaning Karigar turning ₹400 into ₹1,29,999 (325× ROAS) to WeShine generating ₹5,000 from a ₹200 budget, every rupee is tracked and multiplied.
                </p>
              </div>
              <div>
                <Link
                  href="/case-studies"
                  className="relative inline-block overflow-hidden rounded-none border border-black/80 bg-white text-black px-8 py-3.5 text-[11px] font-mono uppercase tracking-[0.2em] font-medium shadow-xs transition-colors duration-300 before:absolute before:inset-0 before:bg-black before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-y-100 hover:text-white"
                >
                  <span className="relative z-10">SEE GROWTH METRICS →</span>
                </Link>
              </div>
            </motion.div>

            {/* Stage 4 Content: Conversion Architecture & Institutional Scale */}
            <motion.div
              style={{ opacity: left4Opacity, y: left4Y, filter: left4Shadow }}
              className="absolute inset-0 flex flex-col justify-center space-y-6 transform-gpu will-change-[transform,opacity,filter]"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 uppercase">
                <span>04 / HIGH-CONVERSION ARCHITECTURE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal leading-[1.12] text-neutral-900 tracking-tight max-w-xl">
                Institutional student funnels delivering 152 admissions and 600+ enquiries.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-xl">
                <p>
                  Scalable acquisition pipelines engineered for institutional trust. Generating 152 school admissions from ₹1,500 ads, 120 enquiries &amp; 45 pharmacy admissions for Sanjivani, and 600+ qualified student leads for Sankalp Learning Classes.
                </p>
              </div>
              <div>
                <Link
                  href="/#connect"
                  className="relative inline-block overflow-hidden rounded-none border border-black/80 bg-white text-black px-8 py-3.5 text-[11px] font-mono uppercase tracking-[0.2em] font-medium shadow-xs transition-colors duration-300 before:absolute before:inset-0 before:bg-black before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-y-100 hover:text-white"
                >
                  <span className="relative z-10">LAUNCH YOUR PROJECT →</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column (6 cols): Interactive Hardware Showcase */}
          <div className="lg:col-span-6 relative h-[82vh] min-h-[580px] max-h-[740px] flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px] h-[360px] sm:h-[420px] md:h-[480px] flex items-center justify-center">
              {/* STAGE 1 DEVICE: MacBook Titanium with Autoplaying Video */}
              <motion.div
                style={{ scale: dev1Scale, opacity: dev1Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none transform-gpu will-change-[transform,opacity]"
              >
                <div className="pointer-events-auto">
                  <LaptopMockupCard variant="titanium">
                    <StrategyMeetingScreen />
                  </LaptopMockupCard>
                </div>
              </motion.div>

              {/* STAGE 2 DEVICE: iPhone Titanium with Dynamic Island */}
              <motion.div
                style={{ scale: dev2Scale, opacity: dev2Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none transform-gpu will-change-[transform,opacity]"
              >
                <div className="pointer-events-auto scale-105 sm:scale-110">
                  <PhoneMockupCard variant="titanium" showDynamicIsland={true}>
                    <ReelEditorScreen scrollYProgress={smoothProgress} />
                  </PhoneMockupCard>
                </div>
              </motion.div>

              {/* STAGE 3 DEVICE: iPad Metallic Silver with Front Camera */}
              <motion.div
                style={{ scale: dev3Scale, opacity: dev3Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none transform-gpu will-change-[transform,opacity]"
              >
                <div className="pointer-events-auto">
                  <IpadMockupCard variant="metallicSilver" showCamera={true}>
                    <MarketingPadScreen scrollYProgress={smoothProgress} />
                  </IpadMockupCard>
                </div>
              </motion.div>

              {/* STAGE 4 DEVICE: MacBook Metallic Silver */}
              <motion.div
                style={{ scale: dev4Scale, opacity: dev4Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none transform-gpu will-change-[transform,opacity]"
              >
                <div className="pointer-events-auto">
                  <LaptopMockupCard variant="metallicSilver">
                    <ClientWebBuildScreen scrollYProgress={smoothProgress} />
                  </LaptopMockupCard>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            STAGE 5: In that same section, after the 4th scroll ends:
            The Hand Appears & The 4 Business Pillars Pop Out
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          style={{ opacity: stage5Opacity, pointerEvents: stage5PointerEvents as any }}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          <div className="relative w-full max-w-7xl h-screen flex items-center justify-center px-4">
            {/* BIG HAND & SMARTPHONE CONTAINER */}
            <motion.div
              style={{
                y: handY,
                scale: handScale,
              }}
              className="relative flex items-center justify-center transform-gpu will-change-transform z-10 pointer-events-none"
            >
              {/* Hand Image - Dominant flagship proportions */}
              <div className="relative w-[520px] sm:w-[740px] md:w-[940px] lg:w-[1120px] xl:w-[1260px]">
                <img
                  src="/images/hand-holding-smartphone-feathered.png"
                  alt="Hand holding smartphone displaying GrowDesk business pillars"
                  className="w-full h-auto object-contain select-none drop-shadow-[0_40px_90px_rgba(15,23,42,0.18)]"
                  draggable={false}
                />

                {/* Seamless feather blur overlay matching #F6F9FD so wrist cut is 100% invisible */}
                <div className="absolute -left-20 bottom-0 w-80 h-80 bg-gradient-to-tr from-[#F6F9FD] via-[#F6F9FD]/95 to-transparent blur-3xl pointer-events-none" />
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-[#F6F9FD]/90 blur-2xl pointer-events-none" />
              </div>
            </motion.div>

            {/* THE 4 BUSINESS PILLARS: Photorealistic Frosted Glass */}
            {/* PILLAR 1: Organic Branding (Top-Left) */}
            <motion.div
              style={{
                x: c1X,
                y: c1Y,
                scale: c1Scale,
                opacity: c1Opacity,
              }}
              className="absolute z-30 transform-gpu will-change-[transform,opacity]"
            >
              <div className="group relative w-[280px] sm:w-[330px] lg:w-[370px] overflow-hidden rounded-[24px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-white/[0.01] bg-slate-950/75 backdrop-blur-[30px] backdrop-saturate-[190%] border border-white/20 p-6 sm:p-7 shadow-[0_30px_70px_rgba(15,23,42,0.25),inset_0_1.5px_1px_0_rgba(255,255,255,0.45),inset_0_-1px_1px_0_rgba(255,255,255,0.06)] hover:border-white/40 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-br from-white/[0.22] via-transparent to-transparent opacity-80" />
                <div className="relative z-10">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {BUSINESS_PILLARS[0].title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-300/85 font-normal leading-relaxed mt-2">
                    {BUSINESS_PILLARS[0].subtitle}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* PILLAR 2: Performance Marketing (Top-Right) */}
            <motion.div
              style={{
                x: c2X,
                y: c2Y,
                scale: c2Scale,
                opacity: c2Opacity,
              }}
              className="absolute z-30 transform-gpu will-change-[transform,opacity]"
            >
              <div className="group relative w-[280px] sm:w-[330px] lg:w-[370px] overflow-hidden rounded-[24px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-white/[0.01] bg-slate-950/75 backdrop-blur-[30px] backdrop-saturate-[190%] border border-white/20 p-6 sm:p-7 shadow-[0_30px_70px_rgba(15,23,42,0.25),inset_0_1.5px_1px_0_rgba(255,255,255,0.45),inset_0_-1px_1px_0_rgba(255,255,255,0.06)] hover:border-white/40 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-br from-white/[0.22] via-transparent to-transparent opacity-80" />
                <div className="relative z-10">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {BUSINESS_PILLARS[1].title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-300/85 font-normal leading-relaxed mt-2">
                    {BUSINESS_PILLARS[1].subtitle}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* PILLAR 3: Automation & Technology (Bottom-Left) */}
            <motion.div
              style={{
                x: c3X,
                y: c3Y,
                scale: c3Scale,
                opacity: c3Opacity,
              }}
              className="absolute z-30 transform-gpu will-change-[transform,opacity]"
            >
              <div className="group relative w-[280px] sm:w-[330px] lg:w-[370px] overflow-hidden rounded-[24px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-white/[0.01] bg-slate-950/75 backdrop-blur-[30px] backdrop-saturate-[190%] border border-white/20 p-6 sm:p-7 shadow-[0_30px_70px_rgba(15,23,42,0.25),inset_0_1.5px_1px_0_rgba(255,255,255,0.45),inset_0_-1px_1px_0_rgba(255,255,255,0.06)] hover:border-white/40 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-br from-white/[0.22] via-transparent to-transparent opacity-80" />
                <div className="relative z-10">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {BUSINESS_PILLARS[2].title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-300/85 font-normal leading-relaxed mt-2">
                    {BUSINESS_PILLARS[2].subtitle}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* PILLAR 4: Franchise Scaling (Bottom-Right) */}
            <motion.div
              style={{
                x: c4X,
                y: c4Y,
                scale: c4Scale,
                opacity: c4Opacity,
              }}
              className="absolute z-30 transform-gpu will-change-[transform,opacity]"
            >
              <div className="group relative w-[280px] sm:w-[330px] lg:w-[370px] overflow-hidden rounded-[24px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-white/[0.01] bg-slate-950/75 backdrop-blur-[30px] backdrop-saturate-[190%] border border-white/20 p-6 sm:p-7 shadow-[0_30px_70px_rgba(15,23,42,0.25),inset_0_1.5px_1px_0_rgba(255,255,255,0.45),inset_0_-1px_1px_0_rgba(255,255,255,0.06)] hover:border-white/40 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-br from-white/[0.22] via-transparent to-transparent opacity-80" />
                <div className="relative z-10">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {BUSINESS_PILLARS[3].title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-300/85 font-normal leading-relaxed mt-2">
                    {BUSINESS_PILLARS[3].subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HowWeScaleSection;
