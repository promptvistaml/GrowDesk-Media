'use client';

import Link from 'next/link';

const pressArticles = [
  {
    outlet: 'Forbes',
    title: 'She Calls Her Team ‘Rain Runners’',
    image: 'https://images.squarespace-cdn.com/content/v1/61e6f5d7afcec6004d1d1d9e/1643905320100-84AYPZ13RFGGXWBUB4AX/960x0.jpeg',
    href: '/case-studies',
  },
  {
    outlet: 'Bizwomen',
    title: '4 Reasons Why ‘Leap and the Net Will Appear’ Thinking is B.S.',
    image: 'https://images.squarespace-cdn.com/content/v1/61e6f5d7afcec6004d1d1d9e/1645219804595-7BPGISG7UNFXI0FRTW4O/mtctfeatuedimage_800xx1453-817-0-28.png',
    href: '/case-studies',
  },
  {
    outlet: 'Creative Boom',
    title: 'The biggest trends in graphic design, as predicted by leading creatives',
    image: 'https://images.squarespace-cdn.com/content/v1/61e6f5d7afcec6004d1d1d9e/1643905630686-O8MQTBM7VV8SSD30HFBG/1b892f7c7129e0c3fad42a41f9774e6ba4793825_1620.png',
    href: '/case-studies',
  },
  {
    outlet: 'Business Insider',
    title: 'Strategic Narrative Architecture: High-Stakes Public Impact',
    image: 'https://images.squarespace-cdn.com/content/v1/61e6f5d7afcec6004d1d1d9e/1643905397649-ZFX7EL0KEZZV1144TLTK/615485c4b414c1001862e94b.jpeg',
    href: '/case-studies',
  },
];

export function FlightPerspective() {
  return (
    <section className="bg-[#FFFFFF] text-[#000000] py-28 md:py-36 px-6 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight">
            Perspective, not noise.
          </h2>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
            Featured Editorial & Strategic Commentary
          </span>
        </div>

        {/* 4-Item Gallery matching Flight PR's exact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pressArticles.map((article, idx) => (
            <Link
              key={idx}
              href={article.href}
              className="group space-y-4 block hover:opacity-80 transition-opacity"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100 rounded-sm">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block">
                  {article.outlet}
                </span>
                <h3 className="font-serif text-base font-normal text-neutral-900 line-clamp-2 leading-snug">
                  {article.title}
                </h3>
                <span className="text-xs text-neutral-500 inline-block pt-1 font-medium group-hover:underline">
                  Read more &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
