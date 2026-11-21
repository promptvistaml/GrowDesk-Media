"use client";

import React from "react";
import {
  TrendingUp,
  MessageCircle,
  PieChart as PieIcon,
  CheckCheck,
  Play,
  Share2,
  Heart,
  MessageSquare,
  Bookmark,
  Target,
  ArrowUpRight,
  Globe,
  ShoppingCart,
  MapPin,
  Star,
  Sparkles,
  Phone,
  Video,
  MoreVertical,
  CheckCircle,
} from "lucide-react";

// 1. Laptop with Live Growth Analytics Chart
export function LaptopGrowthCard() {
  return (
    <div className="w-[300px] sm:w-[340px] rounded-2xl bg-neutral-950/90 border border-white/15 p-4 shadow-2xl backdrop-blur-xl text-white select-none">
      {/* Top window bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600/80" />
          <span className="ml-2 text-[10px] font-mono text-blue-300">growdesk.analytics/live</span>
        </div>
        <span className="inline-flex items-center text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40">
          Live
        </span>
      </div>

      {/* Main Stats Header */}
      <div className="mt-3 flex items-end justify-between">
        <div>
          <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono">Revenue Velocity</p>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-xl font-bold tracking-tight text-white font-clash">₹38,40,000</span>
            <span className="text-xs font-semibold text-blue-400 flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> +348%
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-neutral-400 font-mono">Blended ROAS</span>
          <p className="text-sm font-bold text-sky-400">4.82x</p>
        </div>
      </div>

      {/* Mini SVG Curve Graph */}
      <div className="mt-3 relative h-20 w-full overflow-hidden rounded-lg bg-neutral-900/60 p-2 border border-white/5">
        <svg viewBox="0 0 300 70" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="laptopGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E63FF" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#1E63FF" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 55 Q 50 48, 90 40 T 170 30 T 230 18 T 300 6 L 300 70 L 0 70 Z"
            fill="url(#laptopGrad)"
          />
          <path
            d="M 0 55 Q 50 48, 90 40 T 170 30 T 230 18 T 300 6"
            fill="none"
            stroke="#1E63FF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="300" cy="6" r="3.5" fill="#4FA9FF" />
          <circle cx="300" cy="6" r="2" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="mt-3 grid grid-cols-3 gap-1.5 pt-2 border-t border-white/10 text-center font-mono">
        <div>
          <p className="text-[9px] text-neutral-400">CAC</p>
          <p className="text-[11px] font-semibold text-white">₹380</p>
        </div>
        <div>
          <p className="text-[9px] text-neutral-400">Conversions</p>
          <p className="text-[11px] font-semibold text-white">1,840+</p>
        </div>
        <div>
          <p className="text-[9px] text-neutral-400">Scale</p>
          <p className="text-[11px] font-semibold text-blue-400">12.4x</p>
        </div>
      </div>
    </div>
  );
}

// 2. WhatsApp Lead Automation Chat
export function WhatsAppAutomationCard() {
  return (
    <div className="w-[285px] sm:w-[315px] rounded-2xl bg-[#0b141a] border border-[#202c33] shadow-2xl overflow-hidden text-white select-none">
      {/* Real WhatsApp Top Header */}
      <div className="bg-[#1f2c34] px-3 py-2.5 flex items-center justify-between border-b border-[#222d34]">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center text-white font-bold text-xs shadow-inner">
              <MessageCircle className="w-4 h-4 fill-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#1f2c34] flex items-center justify-center">
              <CheckCircle className="w-2.5 h-2.5 text-[#00a884] fill-[#00a884]" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-xs font-semibold text-[#e9edef] leading-tight">WhatsApp bot</h4>
            </div>
            <p className="text-[10px] text-[#8696a0] leading-tight">Official Business Account</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[#aebac1]">
          <Video className="w-3.5 h-3.5" />
          <Phone className="w-3.5 h-3.5" />
          <MoreVertical className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* WhatsApp Chat Wallpaper Background with Subtle WhatsApp Doodles Pattern */}
      <div
        className="p-3 space-y-2.5 text-xs relative overflow-hidden"
        style={{
          backgroundColor: "#0b141a",
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            radial-gradient(circle at 40% 60%, rgba(0, 168, 132, 0.06) 1.5px, transparent 1.5px),
            linear-gradient(rgba(11, 20, 26, 0.94), rgba(11, 20, 26, 0.94))
          `,
          backgroundSize: "24px 24px, 24px 24px, 32px 32px, 100% 100%",
        }}
      >
        {/* Subtle Chat Doodles SVG Overlay */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#e9edef_1px,transparent_1px)] [background-size:12px_12px]" />

        {/* Date stamp pill */}
        <div className="flex justify-center relative z-10">
          <span className="bg-[#182229] text-[#8696a0] text-[9px] px-2 py-0.5 rounded-md shadow-sm font-medium">
            TODAY
          </span>
        </div>

        {/* Incoming User Message (Dark Slate Bubble) */}
        <div className="flex flex-col items-start max-w-[85%] relative z-10">
          <div className="rounded-lg rounded-tl-none bg-[#202c33] text-[#e9edef] px-3 py-1.5 shadow-sm text-[11px] leading-relaxed relative">
            Hi, I want franchise details & admission fee for Raipur branch.
            <div className="flex items-center justify-end gap-1 mt-0.5">
              <span className="text-[9px] text-[#8696a0]">10:42 AM</span>
            </div>
          </div>
        </div>

        {/* Outgoing Automated Bot Message (Real WhatsApp Green Bubble #005c4b) */}
        <div className="flex flex-col items-end max-w-[88%] ml-auto relative z-10">
          <div className="rounded-lg rounded-tr-none bg-[#005c4b] text-[#e9edef] px-3 py-1.5 shadow-sm text-[11px] leading-relaxed relative">
            Hello! 👋 Sent the complete 2026 prospectus & fee matrix to your email.
            <div className="mt-1.5 pt-1.5 border-t border-[#00745f] text-[10px] text-[#d1fae5] font-medium flex items-center gap-1">
              ✓ Counselor booked for 11:30 AM
            </div>
            <div className="flex items-center justify-end gap-1 mt-1">
              <span className="text-[9px] text-[#8696a0]">10:42 AM</span>
              <span className="text-[9px] text-[#53bdeb] flex items-center">
                Automated • Delivered <CheckCheck className="w-3 h-3 ml-0.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. Vector Donut / Pie Analytics Widget
export function AnalyticsPieCard() {
  return (
    <div className="w-[270px] sm:w-[290px] rounded-2xl bg-neutral-950/90 border border-blue-500/25 p-4 shadow-2xl backdrop-blur-xl text-white select-none">
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <PieIcon className="w-4 h-4 text-blue-400" />
          <h4 className="text-xs font-semibold">Attribution Split</h4>
        </div>
        <span className="text-[9px] font-mono text-neutral-400">Total: 4.2k Leads</span>
      </div>

      {/* SVG Donut */}
      <div className="mt-3 flex items-center gap-4">
        <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            {/* Background circle */}
            <circle cx="18" cy="18" r="14" fill="none" stroke="#262626" strokeWidth="4.5" />
            {/* Segment 1: Meta Ads (55%) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#1E63FF"
              strokeWidth="4.5"
              strokeDasharray="55 100"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
            {/* Segment 2: Google Ads (28%) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#4FA9FF"
              strokeWidth="4.5"
              strokeDasharray="28 100"
              strokeDashoffset="-55"
            />
            {/* Segment 3: WhatsApp Automation (17%) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#10B981"
              strokeWidth="4.5"
              strokeDasharray="17 100"
              strokeDashoffset="-83"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-bold font-clash text-white">55%</span>
            <span className="text-[8px] font-mono text-neutral-400 uppercase">Meta</span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-1.5 text-[10px] font-mono flex-1">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#1E63FF]" /> Meta Ads
            </span>
            <span className="font-semibold text-white">55%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#4FA9FF]" /> Google
            </span>
            <span className="font-semibold text-white">28%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> WhatsApp
            </span>
            <span className="font-semibold text-white">17%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. Realistic Strategy Sticky Note / Action Memo
export function StickyStrategyNote() {
  return (
    <div className="w-[250px] sm:w-[270px] rounded-xl bg-gradient-to-br from-[#FEF08A] to-[#FDE047] p-4 text-neutral-900 shadow-2xl shadow-amber-950/40 select-none relative -rotate-1 border border-amber-300/40">
      {/* Taped top look */}
      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/40 backdrop-blur-sm rounded-sm border border-white/60 shadow-sm rotate-1" />

      <div className="flex items-center justify-between border-b border-amber-900/15 pb-1.5 pt-1">
        <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-amber-900">
          Q1 Growth Sprint
        </span>
        <span className="text-[9px] font-mono text-amber-800">Raipur Hub</span>
      </div>

      <ul className="mt-2.5 space-y-2 text-xs">
        <li className="flex items-start gap-2">
          <span className="text-emerald-700 font-bold mt-0.5">✓</span>
          <span className="line-through text-neutral-600 leading-snug">
            Film 24 high-hook reels with creator
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-emerald-700 font-bold mt-0.5">✓</span>
          <span className="line-through text-neutral-600 leading-snug">
            Scale Meta ad budget to ₹50k/day
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-amber-800 font-bold mt-0.5">→</span>
          <span className="font-semibold text-neutral-950 leading-snug">
            Launch WhatsApp admission bot for 150+ students
          </span>
        </li>
      </ul>

      <div className="mt-3 pt-2 border-t border-amber-900/15 flex items-center justify-between text-[10px] text-amber-900 font-medium">
        <span>Target: 10x ROI</span>
        <span className="font-bold">GrowDesk Executed</span>
      </div>
    </div>
  );
}

// 5. iPhone Viral Reel Player Mockup
// Flagship 19.5:9 authentic smartphone frame with video loop, realistic bezel & Instagram Reels UI
export function MobileReelCard() {
  return (
    <div className="w-[250px] sm:w-[270px] h-[520px] sm:h-[560px] rounded-[50px] bg-gradient-to-b from-[#333] via-[#1a1a1a] to-[#0d0d0d] p-[10px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.22),inset_0_1px_2px_rgba(255,255,255,0.4)] select-none text-white relative flex flex-col ring-1 ring-black/80">
      {/* Side Hardware Buttons */}
      <div className="absolute -left-[13px] top-24 w-[3.5px] h-8 bg-[#444] rounded-l-xs border-l border-white/20 shadow-sm" />
      <div className="absolute -left-[13px] top-36 w-[3.5px] h-12 bg-[#444] rounded-l-xs border-l border-white/20 shadow-sm" />
      <div className="absolute -left-[13px] top-52 w-[3.5px] h-12 bg-[#444] rounded-l-xs border-l border-white/20 shadow-sm" />
      <div className="absolute -right-[13px] top-32 w-[3.5px] h-16 bg-[#444] rounded-r-xs border-r border-white/20 shadow-sm" />

      {/* Screen Frame with authentic 19.5:9 OLED aspect */}
      <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-black flex flex-col justify-between border border-neutral-800 shadow-inner">
        {/* Real Dynamic Island Pill */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[86px] h-[24px] bg-black rounded-full z-40 flex items-center justify-between px-2.5 border border-neutral-800 shadow-md">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a] ring-1 ring-neutral-800 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-blue-950/80 shadow-[0_0_2px_#3b82f6]" />
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
        </div>

        {/* Video Canvas Layer - Autoplaying reel */}
        <div className="absolute inset-0 bg-neutral-950">
          <video
            src="/videos/reel.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle cinematic gradient vignette for UI contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] z-10" />
        </div>

        {/* Top Status & Audio Bar */}
        <div className="relative z-20 pt-9 px-4 flex items-center justify-between text-[11px] font-medium text-white/95">
          <span className="text-[10px] font-mono tracking-tight font-semibold drop-shadow">9:41</span>
          <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15 text-[9px] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-semibold">Reels</span>
          </div>
          <div className="w-4 h-2 rounded-[3px] border border-white/70 p-[1px] flex justify-end shadow-xs">
            <div className="w-2 h-full bg-white rounded-[1px]" />
          </div>
        </div>

        {/* Center Subtle Play Button Glow */}
        <div className="relative z-20 self-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/25 shadow-2xl cursor-pointer hover:scale-105 transition-transform">
          <Play className="w-5 h-5 text-white fill-white ml-0.5 drop-shadow" />
        </div>

        {/* Instagram / Reels Floating UI Layer */}
        <div className="relative z-20 p-3.5 flex items-end justify-between">
          {/* Creator Caption & Audio */}
          <div className="max-w-[75%] space-y-1.5 pb-1">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 to-rose-600 p-[1px]">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[9px] font-bold">
                  G
                </div>
              </div>
              <span className="text-[11px] font-bold text-white leading-none drop-shadow">growdesk.media</span>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/25 backdrop-blur-sm text-white font-semibold">Follow</span>
            </div>

            <p className="text-[10px] text-white/95 leading-tight drop-shadow font-normal">
              Raipur school reaches <span className="font-bold text-sky-400">152 admissions</span> in 30 days with viral hook reels 🚀
            </p>

            <div className="flex items-center gap-1.5 text-[9px] text-white/80 drop-shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="truncate">Original audio • Trending in Central India</span>
            </div>
          </div>

          {/* Right Action Icons (Like, Comment, Share, Bookmark) */}
          <div className="flex flex-col items-center gap-3 pb-1 text-white">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-rose-500 shadow-md">
                <Heart className="w-4 h-4 fill-rose-500" />
              </div>
              <span className="text-[9px] font-semibold mt-0.5 drop-shadow">84.2K</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center shadow-md">
                <MessageSquare className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-semibold mt-0.5 drop-shadow">1.4K</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center shadow-md">
                <Share2 className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-semibold mt-0.5 drop-shadow">14.8K</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center shadow-md">
                <Bookmark className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Home Indicator Bar */}
        <div className="relative z-20 pb-2 flex justify-center">
          <div className="w-24 h-1 bg-white/70 rounded-full shadow-sm" />
        </div>
      </div>
    </div>
  );
}

// 6. Meta & Google Paid Ads Manager Campaign Tile
export function AdsPerformanceCard() {
  return (
    <div className="w-[280px] sm:w-[310px] rounded-2xl bg-neutral-950/90 border border-blue-600/30 p-4 shadow-2xl backdrop-blur-xl text-white select-none">
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white">
            <Target className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-xs font-semibold">Meta Ads Manager</h4>
            <p className="text-[9px] text-neutral-400 font-mono">Central India Conversion Set</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 text-left">
        <div className="p-2 rounded-lg bg-neutral-900/80 border border-white/5">
          <span className="text-[9px] font-mono text-neutral-400">Cost Per Lead (CPL)</span>
          <p className="text-base font-bold text-white font-clash mt-0.5">₹42.50</p>
          <span className="text-[9px] text-emerald-400 font-mono">-62% vs avg</span>
        </div>
        <div className="p-2 rounded-lg bg-neutral-900/80 border border-white/5">
          <span className="text-[9px] font-mono text-neutral-400">Verified Inquiries</span>
          <p className="text-base font-bold text-white font-clash mt-0.5">620+</p>
          <span className="text-[9px] text-blue-400 font-mono">98% qualified</span>
        </div>
      </div>

      <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-2 border-t border-white/5">
        <span>Daily Spend: ₹2,500</span>
        <span className="text-emerald-400 font-semibold flex items-center gap-0.5">
          ROAS: 5.6x <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

// 7. Minimalist E-Commerce Browser Window
export function EcommerceBrowserCard() {
  return (
    <div className="w-[290px] sm:w-[320px] rounded-2xl bg-neutral-950/90 border border-white/15 p-3.5 shadow-2xl backdrop-blur-xl text-white select-none">
      {/* Browser Bar */}
      <div className="flex items-center gap-2 pb-2.5 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <div className="flex-1 flex items-center justify-center bg-neutral-900 rounded-md py-0.5 px-2 text-[9px] font-mono text-neutral-400 gap-1 border border-white/5">
          <Globe className="w-2.5 h-2.5 text-blue-400" /> brand-store.in/checkout
        </div>
      </div>

      {/* Storefront Dashboard Header */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
            <ShoppingCart className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] text-neutral-400 font-mono">Store Conversion</p>
            <h4 className="text-sm font-bold text-white">4.8% CVR (2.2x industry)</h4>
          </div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="mt-3 space-y-1.5 text-[10px] font-mono">
        <div>
          <div className="flex justify-between text-neutral-400 mb-0.5">
            <span>Checkout Speed</span>
            <span className="text-emerald-400">0.8s</span>
          </div>
          <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-[94%]" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-neutral-400 mb-0.5">
            <span>Abandoned Cart Recovery</span>
            <span className="text-blue-400">38% via WhatsApp</span>
          </div>
          <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full w-[68%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// 8. Franchise / Regional Map Scale Hub
// Requirement: "And then the thing is this franchise expansion thing, make it in light mode, okay? Not dark mode."
export function FranchiseMapCard() {
  const hubs = ["Raipur", "Bilaspur", "Bhilai", "Nagpur"];
  return (
    <div className="w-[275px] sm:w-[295px] rounded-2xl bg-white/95 border border-neutral-200/80 p-4 shadow-2xl backdrop-blur-xl text-neutral-900 select-none">
      <div className="flex items-center justify-between pb-2.5 border-b border-neutral-200/80">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center text-royal-blue border border-blue-200/50">
            <MapPin className="w-3.5 h-3.5 text-royal-blue" />
          </div>
          <h4 className="text-xs font-bold text-neutral-900">Franchise Expansion</h4>
        </div>
        <span className="text-[10px] font-mono font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/60">
          4 Active Hubs
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {hubs.map((hub) => (
          <span
            key={hub}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-100/90 border border-neutral-200 text-[10px] font-mono font-medium text-neutral-800 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            {hub}
          </span>
        ))}
      </div>

      <div className="mt-3 p-3 rounded-xl bg-gradient-to-br from-blue-50/80 to-sky-50/50 border border-blue-200/70 flex items-center justify-between shadow-xs">
        <div>
          <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider font-semibold">
            Student Admissions
          </span>
          <p className="text-lg font-bold text-neutral-900 font-clash leading-none mt-0.5">
            152 Enrolled
          </p>
        </div>
        <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-md border border-emerald-300/80 shadow-xs">
          Target Met ✓
        </span>
      </div>
    </div>
  );
}

// 9. Verified Client Review & Trust Badge
export function ClientReviewCard() {
  return (
    <div className="w-[260px] sm:w-[280px] rounded-2xl bg-neutral-950/90 border border-amber-500/25 p-4 shadow-2xl backdrop-blur-xl text-white select-none">
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-[9px] font-mono text-neutral-400 flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-blue-400" /> 5.0 Rating
        </span>
      </div>

      <p className="mt-2.5 text-xs text-neutral-200 font-light italic leading-relaxed">
        &ldquo;GrowDesk scaled our regional admissions in under 60 days. The automated WhatsApp funnel alone paid for the entire campaign.&rdquo;
      </p>

      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
        <div>
          <p className="font-semibold text-white">Franchise Director</p>
          <p className="text-[9px] text-neutral-400">Education Group • CG</p>
        </div>
        <span className="text-blue-400 font-semibold">Verified Client</span>
      </div>
    </div>
  );
}
