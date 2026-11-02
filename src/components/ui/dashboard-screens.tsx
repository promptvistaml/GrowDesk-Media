'use client';

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart as RechartsBarChart,
  Area,
  AreaChart,
} from 'recharts';
import {
  Users,
  Search,
  Bell,
  ArrowUpRight,
  TrendingUp,
  CreditCard,
  Layers,
  ChevronDown,
  Activity,
} from 'lucide-react';

/* ── Tab Metallic Tablet Bezel Frame ── */
export function MetallicTabletMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full select-none">
      {/* Outer Anodized Aluminum Chamfered Bezel */}
      <div className="relative w-full rounded-[28px] sm:rounded-[34px] p-[3px] sm:p-[4px] bg-gradient-to-tr from-[#98a2b3] via-[#e4e7ec] to-[#7d8797] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15),0_10px_25px_rgba(30,99,255,0.06)]">
        {/* Subtle Machined Metallic Edge Reflection */}
        <div className="relative w-full rounded-[25px] sm:rounded-[30px] p-[8px] sm:p-[12px] bg-[#0c0d10] border border-[#232730] shadow-inner">
          {/* Front Camera & Ambient Light Sensor Pinhole */}
          <div className="absolute top-[8px] left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 z-20">
            <div className="w-2 h-2 rounded-full bg-black/95 border border-neutral-700/60 flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-blue-500/80" />
            </div>
            <div className="w-1 h-1 rounded-full bg-neutral-700/60" />
          </div>

          {/* High-Res Screen Glass with Specular Glare */}
          <div className="relative w-full overflow-hidden rounded-[18px] sm:rounded-[22px] bg-white border border-neutral-200 shadow-sm">
            {children}
            {/* Subtle Diagonal Glass Highlight */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.12] z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Screen 1: Dashboard with Composed Bar + Line Chart (Active Users) ── */
const chart1Data = [
  { A: 633, B: 190, date: 'Jan 01' },
  { A: 443, B: 228, date: 'Jan 15' },
  { A: 760, B: 209, date: 'Feb 01' },
  { A: 950, B: 220, date: 'Feb 15' },
  { A: 570, B: 279, date: 'Mar 01' },
  { A: 443, B: 333, date: 'Mar 15' },
  { A: 506, B: 372, date: 'Apr 01' },
  { A: 696, B: 278, date: 'Apr 15' },
  { A: 950, B: 258, date: 'May 01' },
  { A: 633, B: 357, date: 'May 15' },
  { A: 570, B: 382, date: 'Jun 01' },
  { A: 950, B: 361, date: 'Jun 15' },
  { A: 696, B: 405, date: 'Jul 01' },
  { A: 633, B: 477, date: 'Jul 15' },
  { A: 570, B: 465, date: 'Aug 01' },
  { A: 760, B: 630, date: 'Aug 15' },
  { A: 633, B: 664, date: 'Sep 01' },
  { A: 633, B: 808, date: 'Sep 15' },
];

export function DashboardScreenOne() {
  return (
    <div className="w-full bg-[#FAFCFF] text-neutral-800 text-xs font-sans">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-semibold text-neutral-900 tracking-tight">
            <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
              G
            </div>
            <span>GrowDesk</span>
          </div>
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-600 font-medium">My dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 rounded-lg text-neutral-500 border border-neutral-200 text-[11px]">
            <Search className="w-3.5 h-3.5" />
            <span>Search...</span>
          </div>
          <div className="p-1.5 text-neutral-500 hover:text-neutral-800">
            <Bell className="w-3.5 h-3.5" />
          </div>
          <div className="w-6 h-6 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-bold flex items-center justify-center text-[10px]">
            AL
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* KPI Strip */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          <div className="p-3 bg-white rounded-xl border border-neutral-200/80 shadow-2xs">
            <span className="text-[10px] font-medium text-neutral-500 block uppercase tracking-wider">
              Total Revenue
            </span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-base sm:text-lg font-bold text-neutral-900">$8,746.22</span>
              <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5">
                <ArrowUpRight className="w-3 h-3" /> +12%
              </span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-neutral-200/80 shadow-2xs">
            <span className="text-[10px] font-medium text-neutral-500 block uppercase tracking-wider">
              Page Views
            </span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-base sm:text-lg font-bold text-neutral-900">12,440</span>
              <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5">
                <ArrowUpRight className="w-3 h-3" /> +8.4%
              </span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-neutral-200/80 shadow-2xs">
            <span className="text-[10px] font-medium text-neutral-500 block uppercase tracking-wider">
              Active Now
            </span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-base sm:text-lg font-bold text-neutral-900">96</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Real Recharts Interactive Composed Chart (Bar + Line) */}
        <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-neutral-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="font-semibold text-neutral-900 text-xs sm:text-sm block">
                Lead Velocity &amp; Active Users
              </span>
              <span className="text-[10px] text-neutral-500">
                Weekly mobile and desktop conversion rates
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[10px] text-neutral-600">
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-600" /> Mobile
              </span>
              <span className="flex items-center gap-1 text-[10px] text-neutral-600">
                <span className="w-2.5 h-0.5 bg-blue-400" /> Desktop
              </span>
            </div>
          </div>

          <div className="h-44 sm:h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chart1Data} margin={{ left: -20, right: 8, top: 8, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={{ stroke: '#E5E7EB' }}
                  tick={{ fontSize: 9, fill: '#6B7280' }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 9, fill: '#6B7280' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1E293B',
                    borderColor: '#334155',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '11px',
                  }}
                />
                <Bar dataKey="A" name="Mobile" fill="#1E63FF" maxBarSize={10} radius={[3, 3, 0, 0]} />
                <Line
                  dataKey="B"
                  name="Desktop"
                  stroke="#60A5FA"
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  dot={false}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Screen 2: Recharts Stacked Bar Chart (Customer Acquisition Channels) ── */
const chart2Data = [
  { month: 'Jan', A: 300, B: 200, C: 150 },
  { month: 'Feb', A: 320, B: 300, C: 200 },
  { month: 'Mar', A: 300, B: 200, C: 180 },
  { month: 'Apr', A: 240, B: 300, C: 220 },
  { month: 'May', A: 320, B: 280, C: 100 },
  { month: 'Jun', A: 330, B: 300, C: 130 },
  { month: 'Jul', A: 300, B: 200, C: 100 },
  { month: 'Aug', A: 350, B: 300, C: 200 },
  { month: 'Sep', A: 300, B: 200, C: 100 },
  { month: 'Oct', A: 200, B: 300, C: 280 },
  { month: 'Nov', A: 240, B: 300, C: 300 },
  { month: 'Dec', A: 200, B: 400, C: 350 },
];

export function DashboardScreenTwo() {
  return (
    <div className="w-full bg-[#FAFCFF] text-neutral-800 text-xs font-sans">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-semibold text-neutral-900 tracking-tight">
            <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
              G
            </div>
            <span>GrowDesk</span>
          </div>
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-600 font-medium">Customer Pipeline</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md font-semibold text-[10px] border border-blue-200">
            Real-time Sync
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-5 space-y-4">
        <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-neutral-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="font-semibold text-neutral-900 text-xs sm:text-sm block">
                Attribution &amp; Growth Channels
              </span>
              <span className="text-[10px] text-neutral-500">
                Breakdown by Organic, Paid Performance, and Referral
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[10px] text-neutral-600">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#1E63FF]" /> Direct
              </span>
              <span className="flex items-center gap-1 text-[10px] text-neutral-600">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#60A5FA]" /> Ads
              </span>
              <span className="flex items-center gap-1 text-[10px] text-neutral-600">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#CBD5E1]" /> Organic
              </span>
            </div>
          </div>

          <div className="h-48 sm:h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={chart2Data} margin={{ left: -20, right: 8, top: 8, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={{ stroke: '#E5E7EB' }}
                  tick={{ fontSize: 9, fill: '#6B7280' }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 9, fill: '#6B7280' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1E293B',
                    borderColor: '#334155',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '11px',
                  }}
                />
                <Bar dataKey="A" name="Direct" stackId="a" fill="#1E63FF" maxBarSize={14} />
                <Bar dataKey="B" name="Ads" stackId="a" fill="#60A5FA" maxBarSize={14} />
                <Bar
                  dataKey="C"
                  name="Organic"
                  stackId="a"
                  fill="#CBD5E1"
                  maxBarSize={14}
                  radius={[3, 3, 0, 0]}
                />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Screen 3: Recharts Gradient Area Chart (Conversion & Velocity) ── */
const chart3Data = [
  { date: 'Jan', A: 600, B: 400, C: 100 },
  { date: 'Feb', A: 620, B: 405, C: 160 },
  { date: 'Mar', A: 630, B: 400, C: 170 },
  { date: 'Apr', A: 650, B: 410, C: 190 },
  { date: 'May', A: 600, B: 320, C: 200 },
  { date: 'Jun', A: 650, B: 430, C: 230 },
  { date: 'Jul', A: 620, B: 400, C: 200 },
  { date: 'Aug', A: 750, B: 540, C: 300 },
  { date: 'Sep', A: 780, B: 490, C: 390 },
  { date: 'Oct', A: 750, B: 450, C: 300 },
  { date: 'Nov', A: 780, B: 480, C: 340 },
  { date: 'Dec', A: 820, B: 500, C: 450 },
];

export function DashboardScreenThree() {
  return (
    <div className="w-full bg-[#FAFCFF] text-neutral-800 text-xs font-sans">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-semibold text-neutral-900 tracking-tight">
            <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
              G
            </div>
            <span>GrowDesk</span>
          </div>
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-600 font-medium">Conversion Reports</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
            +24.8% YoY
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-5 space-y-4">
        <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-neutral-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="font-semibold text-neutral-900 text-xs sm:text-sm block">
                Annual Pipeline Trajectory
              </span>
              <span className="text-[10px] text-neutral-500">
                Cumulative conversion metrics across institutional accounts
              </span>
            </div>
          </div>

          <div className="h-48 sm:h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chart3Data} margin={{ left: -20, right: 8, top: 8, bottom: 0 }}>
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1E63FF" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#1E63FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={{ stroke: '#E5E7EB' }}
                  tick={{ fontSize: 9, fill: '#6B7280' }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 9, fill: '#6B7280' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1E293B',
                    borderColor: '#334155',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '11px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="A"
                  name="Series 1"
                  stroke="#1E63FF"
                  strokeWidth={2}
                  fill="url(#blueGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="B"
                  name="Series 2"
                  stroke="#60A5FA"
                  strokeWidth={2}
                  fill="none"
                  strokeDasharray="4 4"
                />
                <Area
                  type="monotone"
                  dataKey="C"
                  name="Series 3"
                  stroke="#94A3B8"
                  strokeWidth={1.5}
                  fill="none"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

