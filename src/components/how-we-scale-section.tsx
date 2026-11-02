'use client';

import { useRef } from 'react';
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
   STAGE 1: Strategic Advisory — Strategy Meeting Screen (MacBook)
   ───────────────────────────────────────────────────────────── */
function StrategyMeetingScreen() {
  return (
    <div className="relative size-full bg-slate-900 overflow-hidden font-sans select-none">
      {/* High-Resolution Strategy Meeting Photograph */}
      <img
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
        alt="GrowDesk Strategic Leadership Meeting"
        className="size-full object-cover grayscale contrast-125 brightness-90 hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Subtle Dark Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

      {/* Top Header Bar Simulation */}
      <div className="absolute top-3 inset-x-4 flex items-center justify-between text-[10px] font-mono tracking-wider text-white/80 z-20">
        <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
          <span>GROWDESK STRATEGIC ADVISORY</span>
        </div>
        <span className="hidden sm:inline bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
          MOMENT OF PUBLIC CONSEQUENCE
        </span>
      </div>

      {/* Overlaid Glassmorphic Status Badge */}
      <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-slate-950/85 backdrop-blur-md border border-white/15 rounded-xl p-3.5 text-white shadow-2xl z-20">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
              Live Assessment
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">STAGE 01</span>
        </div>
        <h4 className="text-sm font-semibold tracking-tight text-white mb-1">
          Brand Audit & Positioning
        </h4>
        <div className="flex items-center justify-between text-[11px] text-slate-300 pt-1 border-t border-white/10">
          <span>Authority Score: <strong className="text-white">94/100</strong></span>
          <span className="text-emerald-400 font-medium">+38% Conviction</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   STAGE 2: Viral Reel Production & Sales Spike (iPhone)
   ───────────────────────────────────────────────────────────── */
function ReelEditorScreen({ scrollYProgress }: { scrollYProgress: any }) {
  // Slide up the dark-mode analytics sheet gently from 0.32 to 0.44
  const sheetY = useTransform(scrollYProgress, [0.32, 0.44], ['100%', '0%']);
  const sheetOpacity = useTransform(scrollYProgress, [0.32, 0.38], [0, 1]);

  return (
    <div className="relative size-full bg-neutral-950 text-white overflow-hidden font-sans select-none">
      {/* 2A: Reel Video Editor Screen */}
      <div className="relative size-full flex flex-col justify-between pt-10 pb-6 px-3">
        {/* Top Camera HUD / Timecode */}
        <div className="flex items-center justify-between px-1 text-[9px] font-mono text-neutral-400">
          <span className="flex items-center gap-1 text-red-500 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            REC 4K60
          </span>
          <span>00:01.4s / 00:30s</span>
        </div>

        {/* 9:16 Video Preview Canvas */}
        <div className="relative flex-1 my-2 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-inner">
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
            alt="Cinematic Vertical Video Production"
            className="size-full object-cover contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Floating Hook Retention Badge */}
          <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md border border-emerald-500/30 rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
            <TrendingUp className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] font-mono text-emerald-300 font-semibold tracking-tight">
              Hook Retention: 84%
            </span>
          </div>

          {/* Centered Playhead & Captions Overlay */}
          <div className="absolute bottom-3 inset-x-2 text-center">
            <p className="text-[11px] font-extrabold text-amber-300 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md inline-block uppercase tracking-wider shadow-sm">
              &quot;THE EXACT FORMULA TO 2X REVENUE&quot;
            </p>
          </div>
        </div>

        {/* Video Editor Tracks & Animated Audio Waveform */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-2.5 space-y-1.5">
          <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400">
            <span className="flex items-center gap-1">
              <Volume2 className="w-3 h-3 text-blue-400" /> Master Audio
            </span>
            <span className="text-emerald-400 font-semibold">128 BPM Sync</span>
          </div>

          {/* Waveform Bar Simulation */}
          <div className="flex items-center gap-0.5 h-4 px-1 bg-black/40 rounded-sm overflow-hidden">
            {[40, 70, 95, 60, 85, 100, 75, 50, 90, 65, 80, 100, 55, 85, 95, 70, 45, 80, 90, 60, 40].map(
              (h, i) => (
                <div
                  key={i}
                  className="w-1 bg-blue-500 rounded-full"
                  style={{ height: `${h}%` }}
                />
              )
            )}
          </div>

          {/* Timeline Cuts Layers */}
          <div className="space-y-1 pt-1">
            <div className="h-2 w-full bg-amber-500/80 rounded-xs flex items-center px-1 text-[7px] font-mono text-black font-bold">
              A-ROLL (TALKING HEAD)
            </div>
            <div className="h-2 w-3/4 bg-purple-500/80 rounded-xs flex items-center px-1 text-[7px] font-mono text-white font-bold">
              B-ROLL (PRODUCT SHOWCASE)
            </div>
          </div>
        </div>
      </div>

      {/* 2B: Sliding Analytics Sheet (Direct Revenue & Viral Spike) */}
      <motion.div
        style={{ y: sheetY, opacity: sheetOpacity }}
        className="absolute inset-x-0 bottom-0 h-[82%] bg-neutral-900/95 backdrop-blur-xl border-t border-neutral-700/80 rounded-t-[32px] p-4 flex flex-col justify-between shadow-2xl z-30"
      >
        {/* Grab Handle */}
        <div className="w-10 h-1 bg-neutral-600 rounded-full mx-auto mb-2" />

        {/* Analytics Header */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              Performance Surge
            </span>
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-1.5 py-0.5 rounded-full font-bold">
              +340% SPIKE
            </span>
          </div>
          <div className="text-2xl font-bold tracking-tight text-white">
            ₹18,40,000
          </div>
          <p className="text-[10px] text-neutral-400">
            Direct Revenue Generated (First 30 Days)
          </p>
        </div>

        {/* Glowing Emerald Line Graph Spiking Upward */}
        <div className="relative h-28 my-1 bg-black/40 rounded-xl p-2 border border-neutral-800 flex flex-col justify-end">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 200 90"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="emeraldSpike" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Area Fill */}
            <path
              d="M 0 80 Q 40 78, 80 65 T 130 45 T 170 20 L 200 6 L 200 90 L 0 90 Z"
              fill="url(#emeraldSpike)"
            />
            {/* Glowing Line */}
            <path
              d="M 0 80 Q 40 78, 80 65 T 130 45 T 170 20 L 200 6"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Pulsing Target Node */}
            <circle cx="200" cy="6" r="4" fill="#34d399" />
          </svg>
        </div>

        {/* Sub-Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 text-[10px] pt-1">
          <div className="bg-black/50 border border-neutral-800 rounded-lg p-2">
            <span className="text-neutral-400 block text-[9px]">Reel Views</span>
            <strong className="text-white text-xs">1,420,800+</strong>
          </div>
          <div className="bg-black/50 border border-neutral-800 rounded-lg p-2">
            <span className="text-neutral-400 block text-[9px]">Avg Watch</span>
            <strong className="text-emerald-400 text-xs">18.2s (84%)</strong>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   STAGE 3: Omnichannel Marketing & ROAS Scaling (iPad)
   ───────────────────────────────────────────────────────────── */
function MarketingPadScreen({ scrollYProgress }: { scrollYProgress: any }) {
  // Reveal scaling metrics & upward chart gently between 0.60 and 0.74
  const roasCounter = useTransform(scrollYProgress, [0.60, 0.74], ['3.2x', '4.8x']);
  const barHeight1 = useTransform(scrollYProgress, [0.60, 0.72], ['45%', '85%']);
  const barHeight2 = useTransform(scrollYProgress, [0.62, 0.73], ['55%', '95%']);
  const barHeight3 = useTransform(scrollYProgress, [0.64, 0.74], ['60%', '100%']);

  return (
    <div className="relative size-full bg-slate-950 text-white overflow-hidden font-sans p-4 sm:p-5 flex flex-col justify-between select-none">
      {/* Top Command Center Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div>
            <h4 className="text-xs font-semibold text-white tracking-tight">
              GrowDesk Acquisition Command
            </h4>
            <span className="text-[9px] font-mono text-slate-400">
              Omnichannel Funnel Telemetry
            </span>
          </div>
        </div>

        {/* Live Status Pill */}
        <motion.div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-950/60 border border-emerald-500/40 rounded-full text-emerald-300 text-[10px] font-mono font-bold shadow-xs">
          
          <span>BLENDED ROAS: </span>
          <motion.span>{roasCounter}</motion.span>
        </motion.div>
      </div>

      {/* Middle Channel Analytics & A/B Creative Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
        {/* Channel 1: Meta Performance */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>META PERFORMANCE</span>
            <span className="text-emerald-400 font-bold">ACTIVE</span>
          </div>
          <div className="text-lg font-bold text-white">4.82% CTR</div>
          <p className="text-[9px] text-slate-400">Winning Reel Creative B</p>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-[82%]" />
          </div>
        </div>

        {/* Channel 2: Google High-Intent */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>GOOGLE SEARCH</span>
            <span className="text-blue-400 font-bold">OPTIMIZED</span>
          </div>
          <div className="text-lg font-bold text-white">14.6% Conv.</div>
          <p className="text-[9px] text-slate-400">High-Intent Keywords</p>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[94%]" />
          </div>
        </div>

        {/* Channel 3: WhatsApp Direct Funnel */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>WHATSAPP ROUTE</span>
            <span className="text-emerald-400 font-bold">REAL-TIME</span>
          </div>
          <div className="text-lg font-bold text-white">Zero Leakage</div>
          <p className="text-[9px] text-slate-400">Direct Inquiries: 600+</p>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-amber-400 h-full w-[100%]" />
          </div>
        </div>
      </div>

      {/* Bottom Growth Scaling Graph */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
            +215% QUARTERLY REVENUE VELOCITY
          </span>
          <p className="text-[11px] text-slate-300 font-light">
            Blended Customer Acquisition Cost: <strong className="text-white">₹142 (-38.4%)</strong>
          </p>
        </div>

        {/* Dynamic Growth Bars */}
        <div className="flex items-end gap-2 h-12 w-28 shrink-0">
          <div className="flex-1 bg-blue-600/60 rounded-t-sm h-[40%]" />
          <div className="flex-1 bg-blue-600/80 rounded-t-sm h-[60%]" />
          <motion.div
            style={{ height: barHeight1 }}
            className="flex-1 bg-blue-500 rounded-t-sm"
          />
          <motion.div
            style={{ height: barHeight2 }}
            className="flex-1 bg-emerald-500 rounded-t-sm"
          />
          <motion.div
            style={{ height: barHeight3 }}
            className="flex-1 bg-emerald-400 rounded-t-sm shadow-[0_0_12px_#34d399]"
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   STAGE 4: Conversion Web Architecture — Client Assembly (MacBook)
   ───────────────────────────────────────────────────────────── */
function ClientWebBuildScreen({ scrollYProgress }: { scrollYProgress: any }) {
  // Animate wireframe blocks snapping into polished high-converting UI gently
  const wireframeOpacity = useTransform(scrollYProgress, [0.81, 0.91], [1, 0]);
  const polishedOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const pillScale = useTransform(scrollYProgress, [0.88, 0.98], [0.88, 1]);

  return (
    <div className="relative size-full bg-slate-950 text-white overflow-hidden font-sans select-none flex flex-col justify-between">
      {/* Top Browser Window Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 z-20">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-800/80 text-[10px] font-mono text-slate-300 border border-slate-700/60">
          <Globe className="w-3 h-3 text-blue-400" />
          <span>growdeskmedia.com/flagship-client</span>
        </div>
        <div className="w-12" />
      </div>

      {/* Dynamic Assembly Canvas */}
      <div className="relative flex-1 p-5 overflow-hidden">
        {/* Wireframe Stage (Fades out as user scrolls) */}
        <motion.div
          style={{ opacity: wireframeOpacity }}
          className="absolute inset-5 flex flex-col gap-3 pointer-events-none"
        >
          <div className="h-4 w-1/3 bg-slate-800/60 rounded-sm animate-pulse" />
          <div className="h-8 w-2/3 bg-slate-800/80 rounded-md animate-pulse" />
          <div className="h-3 w-1/2 bg-slate-800/40 rounded-sm animate-pulse" />
          <div className="grid grid-cols-3 gap-3 pt-3">
            <div className="h-20 bg-slate-800/40 rounded-lg border border-dashed border-slate-700" />
            <div className="h-20 bg-slate-800/40 rounded-lg border border-dashed border-slate-700" />
            <div className="h-20 bg-slate-800/40 rounded-lg border border-dashed border-slate-700" />
          </div>
        </motion.div>

        {/* Polished High-Converting UI Stage (Fades in & snaps into place) */}
        <motion.div
          style={{ opacity: polishedOpacity }}
          className="relative size-full flex flex-col justify-between"
        >
          {/* Hero Banner inside website */}
          <div className="space-y-2 max-w-sm">
            <span className="text-[9px] font-mono uppercase tracking-widest text-blue-400 font-bold block">
              ENTERPRISE CLIENT EXPERIENCE
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal leading-tight tracking-tight">
              Scale Your Multi-City Footprint With Precision.
            </h3>
            <p className="text-[11px] text-slate-300 font-light leading-relaxed">
              Designed for sub-second load times and frictionless WhatsApp booking conversions.
            </p>
          </div>

          {/* Luxury Floating Feature Cards */}
          <div className="grid grid-cols-3 gap-2.5 pt-2">
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg">
              <span className="text-[9px] font-mono text-slate-400 block">TIME TO FIRST BYTE</span>
              <strong className="text-white text-xs sm:text-sm">0.18s</strong>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg">
              <span className="text-[9px] font-mono text-slate-400 block">SEO AUTHORITY</span>
              <strong className="text-emerald-400 text-xs sm:text-sm">Rank #1</strong>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg">
              <span className="text-[9px] font-mono text-slate-400 block">CONVERSION OPT</span>
              <strong className="text-blue-400 text-xs sm:text-sm">Direct WhatsApp</strong>
            </div>
          </div>
        </motion.div>

        {/* Floating Google Lighthouse 99 Performance Pill */}
        <motion.div
          style={{ scale: pillScale }}
          className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md border border-emerald-500/40 rounded-xl px-3 py-2 flex items-center gap-2 shadow-2xl z-30"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center font-bold text-emerald-400 text-xs">
            99
          </div>
          <div>
            <div className="text-[10px] font-bold text-white tracking-tight">Performance Score</div>
            <div className="text-[8px] font-mono text-emerald-400">Google Lighthouse Verified</div>
          </div>
        </motion.div>

        {/* Floating Conversion Lift Pill */}
        <motion.div
          style={{ scale: pillScale }}
          className="absolute bottom-5 right-4 bg-slate-950/90 backdrop-blur-md border border-blue-500/40 rounded-xl px-3 py-2 flex items-center gap-2 shadow-2xl z-30"
        >
          <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-400">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-white tracking-tight">+68% Conversion Lift</div>
            <div className="text-[8px] font-mono text-slate-400">Qualified Pipeline Velocity</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT: HowWeScaleSection (Sticky Scroll-Jacked About Us)
   ───────────────────────────────────────────────────────────── */
export function HowWeScaleSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress along the 520vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Silky smooth spring physics to soften discrete wheel notches and slow down pacing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 20,
    mass: 0.35,
    restDelta: 0.0005,
  });

  // Vertical scroll progress bar (0% -> 100%)
  const progressBarHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // Left Column Stage Opacity & Y Translations - wider, gentler crossfade curves
  // Stage 1 (0.00 - 0.22)
  const left1Opacity = useTransform(smoothProgress, [0, 0.16, 0.26], [1, 1, 0]);
  const left1Y = useTransform(smoothProgress, [0, 0.16, 0.26], [0, 0, -25]);

  // Stage 2 (0.22 - 0.52)
  const left2Opacity = useTransform(smoothProgress, [0.18, 0.27, 0.45, 0.54], [0, 1, 1, 0]);
  const left2Y = useTransform(smoothProgress, [0.18, 0.27, 0.45, 0.54], [25, 0, 0, -25]);

  // Stage 3 (0.50 - 0.78)
  const left3Opacity = useTransform(smoothProgress, [0.46, 0.55, 0.72, 0.81], [0, 1, 1, 0]);
  const left3Y = useTransform(smoothProgress, [0.46, 0.55, 0.72, 0.81], [25, 0, 0, -25]);

  // Stage 4 (0.78 - 1.00)
  const left4Opacity = useTransform(smoothProgress, [0.73, 0.82, 1.0], [0, 1, 1]);
  const left4Y = useTransform(smoothProgress, [0.73, 0.82, 1.0], [25, 0, 0]);

  // Right Device Morph & Scale Transforms - gradual, cinematic easing
  // Device 1: MacBook Titanium (Stage 1)
  const dev1Scale = useTransform(smoothProgress, [0, 0.16, 0.27], [1, 1, 0.90]);
  const dev1Opacity = useTransform(smoothProgress, [0, 0.16, 0.27], [1, 1, 0]);

  // Device 2: iPhone Titanium (Stage 2)
  const dev2Scale = useTransform(smoothProgress, [0.17, 0.27, 0.45, 0.55], [0.90, 1, 1, 0.90]);
  const dev2Opacity = useTransform(smoothProgress, [0.17, 0.26, 0.46, 0.55], [0, 1, 1, 0]);

  // Device 3: iPad SpaceBlack (Stage 3)
  const dev3Scale = useTransform(smoothProgress, [0.46, 0.56, 0.72, 0.82], [0.90, 1, 1, 0.90]);
  const dev3Opacity = useTransform(smoothProgress, [0.46, 0.55, 0.73, 0.82], [0, 1, 1, 0]);

  // Device 4: MacBook Midnight (Stage 4)
  const dev4Scale = useTransform(smoothProgress, [0.73, 0.83, 1.0], [0.90, 1, 1]);
  const dev4Opacity = useTransform(smoothProgress, [0.73, 0.82, 1.0], [0, 1, 1]);

  return (
    <div
      ref={containerRef}
      id="how-we-scale"
      className="relative h-[520vh] bg-[#F6F9FD]"
    >
      {/* Sticky Full Viewport Wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[#F6F9FD] px-8 md:px-16 border-b border-blue-100/60">
        {/* Bottom-Right Soft Organic Earthen Dune Silhouette */}
        <svg
          className="pointer-events-none absolute right-0 bottom-0 w-[55vw] max-w-[800px] h-auto text-blue-100/60 select-none z-0"
          viewBox="0 0 800 450"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 450C220 400 360 260 520 280C680 300 740 200 800 180V450H0Z" />
        </svg>

        {/* 2-Column Grid Container matching exact layout and left padding */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center w-full">
          {/* ────────────────────────────────────────────────
              LEFT COLUMN (6 cols): Editorial Typography
              ──────────────────────────────────────────────── */}
          <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[440px] flex items-center">
            {/* Stage 1 Content: Strategic Foundations */}
            <motion.div
              style={{ opacity: left1Opacity, y: left1Y }}
              className="absolute inset-0 flex flex-col justify-center space-y-6"
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
                  href="/case-studies"
                  className="relative inline-block overflow-hidden rounded-none border border-black/80 bg-white text-black px-8 py-3.5 text-[11px] font-mono uppercase tracking-[0.2em] font-medium shadow-xs transition-colors duration-300 before:absolute before:inset-0 before:bg-black before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-y-100 hover:text-white"
                >
                  <span className="relative z-10">VIEW SELECTED WORK →</span>
                </Link>
              </div>
            </motion.div>

            {/* Stage 2 Content: Viral Reel Production */}
            <motion.div
              style={{ opacity: left2Opacity, y: left2Y }}
              className="absolute inset-0 flex flex-col justify-center space-y-6"
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
              style={{ opacity: left3Opacity, y: left3Y }}
              className="absolute inset-0 flex flex-col justify-center space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 uppercase">
                <span>03 / PERFORMANCE MARKETING</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal leading-[1.12] text-neutral-900 tracking-tight max-w-xl">
                Data-backed acquisition funnels that scale revenue predictably across every channel.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-xl">
                <p>
                  We eliminate guesswork with full-funnel Meta, Google, and LinkedIn ad architectures. Every rupee is tracked from first impression to checkout, optimizing CAC and multiplying return on ad spend.
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

            {/* Stage 4 Content: Conversion Web Architecture */}
            <motion.div
              style={{ opacity: left4Opacity, y: left4Y }}
              className="absolute inset-0 flex flex-col justify-center space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 uppercase">
                <span>04 / DIGITAL PRODUCT & WEB</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal leading-[1.12] text-neutral-900 tracking-tight max-w-xl">
                Bespoke, high-converting client websites built for speed, aesthetics, and scale.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-xl">
                <p>
                  Your website is your 24/7 flagship store. We design and engineer lightning-fast digital experiences that anchor your brand authority and turn incoming marketing traffic into qualified pipeline.
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

          {/* ────────────────────────────────────────────────
              RIGHT COLUMN (6 cols): Interactive Hardware Showcase
              Shared center axis for all device models
              ──────────────────────────────────────────────── */}
          <div className="lg:col-span-6 relative min-h-[400px] sm:min-h-[480px] md:min-h-[540px] flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px] h-[360px] sm:h-[420px] md:h-[480px] flex items-center justify-center">
              {/* STAGE 1 DEVICE: MacBook Titanium */}
              <motion.div
                style={{ scale: dev1Scale, opacity: dev1Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="pointer-events-auto">
                  <LaptopMockupCard variant="titanium">
                    <StrategyMeetingScreen />
                  </LaptopMockupCard>
                </div>
              </motion.div>

              {/* STAGE 2 DEVICE: iPhone Titanium with Dynamic Island (Dead-centered with other models) */}
              <motion.div
                style={{ scale: dev2Scale, opacity: dev2Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="pointer-events-auto scale-105 sm:scale-110">
                  <PhoneMockupCard variant="titanium" showDynamicIsland={true}>
                    <ReelEditorScreen scrollYProgress={smoothProgress} />
                  </PhoneMockupCard>
                </div>
              </motion.div>

              {/* STAGE 3 DEVICE: iPad SpaceBlack with Front Camera */}
              <motion.div
                style={{ scale: dev3Scale, opacity: dev3Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="pointer-events-auto">
                  <IpadMockupCard variant="spaceBlack" showCamera={true}>
                    <MarketingPadScreen scrollYProgress={smoothProgress} />
                  </IpadMockupCard>
                </div>
              </motion.div>

              {/* STAGE 4 DEVICE: MacBook Midnight */}
              <motion.div
                style={{ scale: dev4Scale, opacity: dev4Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="pointer-events-auto">
                  <LaptopMockupCard variant="midnight">
                    <ClientWebBuildScreen scrollYProgress={smoothProgress} />
                  </LaptopMockupCard>
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

