'use client';

const capabilities = [
  'Meta & Google Performance Ads',
  'Lead Generation & Admission Funnels',
  'Social Media & Viral Reels Production',
  'Turnkey Franchise Model Development',
  'WhatsApp Business & AI Automation',
  'Brand Positioning & Visual Identity',
  'Website & E-Commerce Development',
  'Search Engine & Local GMB Optimization',
  'Offline Media, Hoardings & Print',
  'Marketing Strategy & Growth Consulting'
];

export function FlightAiEra() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] text-[#000000] py-28 md:py-40 px-6 border-t border-neutral-100">
      {/* Ambient Blue Optical Flare on Light Canvas */}
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[750px] h-[420px] bg-blue-500/8 blur-[150px] rounded-full z-0" />
      <div className="pointer-events-none absolute -bottom-28 right-1/4 w-[650px] h-[380px] bg-blue-600/6 blur-[140px] rounded-full z-0" />
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div>
          <h2 style={{ color: "#000000" }} className="font-clash text-3xl sm:text-5xl md:text-6xl font-bold tracking-[-0.035em] text-black !text-black leading-[0.95] uppercase">
            In the digital era, noise compounds fast.
          </h2>
          <div style={{ color: "#1E63FF" }} className="font-script text-4xl sm:text-6xl md:text-7xl text-[#1E63FF] !text-[#1E63FF] font-bold opacity-95 leading-[1.0] -mt-2 sm:-mt-4 select-none lowercase">
            execution drives outcomes.
          </div>
        </div>

        <p className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed">
          Our work sits at the intersection of brand positioning, performance media, and automated lead capture. We operate close to the ground—strategic enough to build multi-city franchises, and tactical enough to drive daily bookings, admissions, and sales.
        </p>

        {/* 2-column bulleted list exactly matching Flight PR */}
        <div className="pt-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-left text-sm font-light text-neutral-700">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                <span className="capitalize">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

