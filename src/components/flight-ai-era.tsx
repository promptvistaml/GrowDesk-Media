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
    <section className="bg-[#FFFFFF] text-[#000000] py-28 md:py-40 px-6 border-t border-neutral-100">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-neutral-900 leading-tight">
          In the digital era, noise compounds fast.
Execution drives outcomes.  
        </h2>

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

