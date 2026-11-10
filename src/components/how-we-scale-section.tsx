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
   STAGE 2: Viral Reel Production & Sales Spike (iPhone)
   ───────────────────────────────────────────────────────────── */
function ReelEditorScreen({ scrollYProgress }: { scrollYProgress: any }) {
  // Slide up the dark-mode analytics sheet gently during Stage 2 active window (0.25 - 0.31)
  const sheetY = useTransform(scrollYProgress, [0.25, 0.31], ['100%', '0%']);
  const sheetOpacity = useTransform(scrollYProgress, [0.25, 0.28], [0, 1]);

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
        className="absolute inset-x-2 bottom-2 rounded-2xl bg-neutral-950/95 backdrop-blur-md border border-neutral-800 p-3.5 shadow-2xl z-30"
      >
        <div className="w-10 h-1 bg-neutral-700 rounded-full mx-auto mb-2" />

        <div className="flex items-center justify-between text-xs font-semibold mb-2">
          <span className="text-neutral-300">Live Post-Drop Analytics</span>
          <span className="text-emerald-400 flex items-center gap-1 text-[10px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE
          </span>
        </div>

        {/* Emerald Upward Spiking SVG Line Graph */}
        <div className="h-16 w-full my-1">
          <svg className="size-full overflow-visible" viewBox="0 0 200 60">
            <defs>
              <linearGradient id="emeraldSpike" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0 50 Q 30 48, 60 40 T 110 32 T 150 14 T 200 4 L 200 60 L 0 60 Z"
              fill="url(#emeraldSpike)"
            />
            <path
              d="M0 50 Q 30 48, 60 40 T 110 32 T 150 14 T 200 4"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* High-Impact Numerical Telemetry */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-800/80">
          <div>
            <span className="text-[9px] font-mono text-neutral-400 block uppercase">
              Reel Views
            </span>
            <strong className="text-sm font-bold text-white tracking-tight">
              1.4M+
            </strong>
          </div>
          <div>
            <span className="text-[9px] font-mono text-neutral-400 block uppercase">
              Direct Revenue
            </span>
            <strong className="text-sm font-bold text-emerald-400 tracking-tight">
              ₹18.4L <span className="text-[10px] font-normal">(+340%)</span>
            </strong>
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
  // Animate scaling metrics during Stage 3 active window (0.44 - 0.50)
  const roasCounter = useTransform(scrollYProgress, [0.44, 0.50], ['3.2x', '4.8x']);
  const barHeight1 = useTransform(scrollYProgress, [0.44, 0.49], ['45%', '85%']);
  const barHeight2 = useTransform(scrollYProgress, [0.45, 0.50], ['55%', '95%']);
  const barHeight3 = useTransform(scrollYProgress, [0.46, 0.50], ['60%', '100%']);

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

      {/* Center 3-Column Marketing Matrix */}
      <div className="grid grid-cols-3 gap-3 my-2">
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5">
          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
            <span>Meta Ads</span>
            <span className="text-emerald-400 font-bold">5.2x</span>
          </div>
          <div className="text-xs font-bold text-white mb-2">₹11.2L Spend</div>
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full w-[85%]" />
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5">
          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
            <span>Google Search</span>
            <span className="text-emerald-400 font-bold">4.4x</span>
          </div>
          <div className="text-xs font-bold text-white mb-2">₹8.6L Spend</div>
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-[72%]" />
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5">
          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
            <span>LinkedIn B2B</span>
            <span className="text-emerald-400 font-bold">4.1x</span>
          </div>
          <div className="text-xs font-bold text-white mb-2">₹5.4L Spend</div>
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 rounded-full w-[65%]" />
          </div>
        </div>
      </div>

      {/* Bottom Growth Dynamics Bar Chart */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 flex items-end justify-between gap-4 h-24">
        <div className="flex flex-col justify-between h-full">
          <div>
            <span className="text-[9px] font-mono uppercase text-slate-400 block">
              Quarterly Trajectory
            </span>
            <strong className="text-sm font-bold text-emerald-400">
              +215% Growth
            </strong>
          </div>
          <span className="text-[8px] font-mono text-slate-400">
            Blended CPA: -42%
          </span>
        </div>

        {/* Animated Bar Groups */}
        <div className="flex items-end gap-3 h-full pb-1">
          <div className="flex flex-col items-center gap-1">
            <motion.div
              style={{ height: barHeight1 }}
              className="w-5 bg-blue-600 rounded-t-sm"
            />
            <span className="text-[7px] font-mono text-slate-400">M1</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <motion.div
              style={{ height: barHeight2 }}
              className="w-5 bg-indigo-500 rounded-t-sm"
            />
            <span className="text-[7px] font-mono text-slate-400">M2</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <motion.div
              style={{ height: barHeight3 }}
              className="w-5 bg-emerald-400 rounded-t-sm shadow-[0_0_10px_rgba(52,211,153,0.5)]"
            />
            <span className="text-[7px] font-mono text-emerald-400 font-bold">
              M3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   STAGE 4: Conversion Web Architecture — Client Assembly (MacBook)
   ───────────────────────────────────────────────────────────── */
function ClientWebBuildScreen({ scrollYProgress }: { scrollYProgress: any }) {
  // Animate wireframe blocks snapping into polished high-converting UI during Stage 4 active window (0.63 - 0.70)
  const wireframeOpacity = useTransform(scrollYProgress, [0.63, 0.67], [1, 0]);
  const polishedOpacity = useTransform(scrollYProgress, [0.65, 0.70], [0, 1]);
  const pillScale = useTransform(scrollYProgress, [0.66, 0.71], [0.88, 1]);

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
              style={{ opacity: left4Opacity, y: left4Y, filter: left4Shadow }}
              className="absolute inset-0 flex flex-col justify-center space-y-6 transform-gpu will-change-[transform,opacity,filter]"
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

              {/* STAGE 3 DEVICE: iPad SpaceBlack with Front Camera */}
              <motion.div
                style={{ scale: dev3Scale, opacity: dev3Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none transform-gpu will-change-[transform,opacity]"
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
                className="absolute inset-0 flex items-center justify-center pointer-events-none transform-gpu will-change-[transform,opacity]"
              >
                <div className="pointer-events-auto">
                  <LaptopMockupCard variant="midnight">
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
