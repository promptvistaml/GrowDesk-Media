'use client';

import { ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="border-b border-[#e5e5e0] py-20 md:py-28 bg-[#111111] text-[#fbfbfa]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight leading-tight">
              Preparing for a moment of consequence?
            </h2>
            <p className="text-neutral-400 font-light text-base leading-relaxed">
              We accept a limited number of advisory mandates each quarter to ensure uninterrupted senior principal involvement.
            </p>

            <div className="pt-6 font-mono text-xs text-neutral-400 space-y-2">
              <div>ENCRYPTED DISPATCH: growdeskmedia@gmail.com</div>
              <div>LOCATIONS: NEW YORK // LOS ANGELES // AUSTIN</div>
            </div>
          </div>

          {/* Right Column / Advisory Brief Form */}
          <div className="lg:col-span-7 bg-[#171717] p-8 md:p-12 border border-neutral-800">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    Principal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className="w-full bg-[#111] border border-neutral-700 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-[#111] border border-neutral-700 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    Organization / Entity
                  </label>
                  <input
                    type="text"
                    placeholder="Company or fund name"
                    className="w-full bg-[#111] border border-neutral-700 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    Nature of Mandate
                  </label>
                  <select
                    className="w-full bg-[#111] border border-neutral-700 px-4 py-3 text-sm text-neutral-300 focus:outline-none focus:border-white transition-colors"
                  >
                    <option>Category Launch & Brand Positioning</option>
                    <option>Executive Reputation & Byline Advisory</option>
                    <option>Crisis Navigation & Risk Mitigation</option>
                    <option>M&A, Financing, or Liquidity Event</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-neutral-400 mb-2">
                  Context & Timeline
                </label>
                <textarea
                  rows={4}
                  placeholder="Outline the inflection point, timing horizon, and key objectives..."
                  className="w-full bg-[#111] border border-neutral-700 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
              >
                Transmit Confidential Inquiry
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

