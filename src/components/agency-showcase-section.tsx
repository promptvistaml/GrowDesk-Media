'use client';

import React, { useState } from 'react';
import Link from 'next/link';

/* ─────────────────────────────────────────────────────────────
   SVG Arrow Icon exactly as in Maxira buttons
   ───────────────────────────────────────────────────────────── */
function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-right"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 1: [ Empowering 100+ top brands to outperform ]
   Exact Maxira HTML markup, classes, layout, and smooth loop
   ───────────────────────────────────────────────────────────── */
const PARTNER_LOGOS = [
  { name: 'Cleaning Karigar', src: '/our-work/IMG_1424.png', width: 90 },
  { name: 'TravelZone', src: '/our-work/IMG_7541.png', width: 90 },
  { name: 'WeShine Beauty n Salon', src: '/our-work/weshinebeautynsalon.png', width: 100 },
  { name: 'Sankalp Classes', src: '/our-work/IMG_4620.png', width: 85 },
  { name: 'Chandra Tiles', src: '/our-work/IMG_4619.png', width: 85 },
  { name: 'Sanjivani Pharmacy', src: '/our-work/IMG_4621.png', width: 85 },
  { name: 'Biryani and Co.', src: '/our-work/IMG_7549.jpg', width: 85 },
  { name: 'Gyanoday School', src: '/our-work/IMG_7529.jpg', width: 85 },
];

export function EmpoweringBrandsSection() {
  const repeated = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="section" style={{ paddingTop: '80px', paddingBottom: '90px' }}>
      <div className="container">
        <div className="w-layout-grid logo-grid" style={{ opacity: 1 }}>
          <div className="main-center">
            <p className="p-03">[ Empowering 100+ top brands to outperform ]<br/></p>
          </div>
          <div className="margin-30">
            <div className="carousel">
              <div className="logo-shadow"></div>
              <div className="logo-shadow right"></div>
              <div className="logo-carousel-wrap">
                <ul role="list" className="logo-carousel logo-carousel-animated" style={{ margin: 0, padding: 0 }}>
                  {repeated.map((logo, idx) => (
                    <li key={idx} className="logo-carousel-item" style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <span className="logo-link w-inline-block" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img
                          src={logo.src}
                          alt={logo.name}
                          style={{
                            height: '42px',
                            width: 'auto',
                            maxWidth: '120px',
                            objectFit: 'contain',
                            borderRadius: '6px',
                            filter: 'brightness(0.95) contrast(1.1)',
                          }}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 2: [ About us ] & Horizontal Work Marquee
   "Brave creativity. Modern marketing. Real-world brand transformations."
   Exact Maxira HTML markup, circular badge ("PROJECTS THAT MOVE THE NEEDLE"),
   and marquee project cards
   ───────────────────────────────────────────────────────────── */
const WORK_PROJECTS = [
  {
    title: 'Cleaning Karigar',
    cat: 'Franchise Scale',
    img: '/our-work/cleaning_karigar.png',
  },
  {
    title: 'WeShine Beauty n Salon',
    cat: 'Brand & Bookings',
    img: '/our-work/weshinebeautynsalon.png',
  },
  {
    title: 'TravelZone Fleets',
    cat: 'Digital Growth',
    img: '/our-work/IMG_7541.png',
  },
  {
    title: 'Sankalp Learning Classes',
    cat: 'Admissions Funnel',
    img: '/our-work/sankalp-learning-classes-slc-telephone-exchange-road-bilaspur-chhattisgarh-tutorials-nzte73hdv9.jpg',
  },
  {
    title: 'Chandra Tiles',
    cat: 'Commercial Scale',
    img: '/our-work/IMG_4619.png',
  },
  {
    title: 'Executive Trust & Culture',
    cat: 'Strategic Advisory',
    img: '/our-work/IMG_2513.jpg',
  },
];

export function ProjectsMoveNeedleSection() {
  const repeatedProjects = [...WORK_PROJECTS, ...WORK_PROJECTS];

  return (
    <section className="section _02" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div>
          <div className="max-w-width" style={{ opacity: 1 }}>
            <div className="testi-small-flex">
              <div className="star-flex">
                <p className="p-03">[ About us ]<br/></p>
              </div>
            </div>
            <h2 className="display-1 _01">
              Brave creativity. <span className="other-font">Modern marketing.</span> Real-world brand transformations.
            </h2>
            <div className="margin-20">
              <p className="p-02">A full-stack suite of services purpose-built for scale</p>
            </div>
            <div className="margin-30">
              <div className="button-flex center-mobile">
                <Link href="/about" className="button-main first w-inline-block">
                  <div className="button-text">Meet the team</div>
                  <div className="button-icon-wrapper">
                    <div className="button-arrow hover w-embed">
                      <ArrowRightIcon />
                    </div>
                    <div className="button-arrow w-embed">
                      <ArrowRightIcon />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exact Maxira Infinite Work Marquee with Rotating / Floating Circle Badge */}
      <div className="margin-100 make-50">
        <div className="work-main">
          <div className="work-marque-wrapper">
            <div className="w-dyn-list" style={{ width: '100%' }}>
              <div role="list" className="work-marque work-marque-animated w-dyn-items">
                {repeatedProjects.map((p, idx) => (
                  <div key={idx} role="listitem" className="w-dyn-item" style={{ width: '420px', flexShrink: 0 }}>
                    <div className="work-wrapper-first w-inline-block">
                      <div className="work-content" style={{ position: 'relative', height: '280px', borderRadius: '8px' }}>
                        {/* Circular Play / Needle Badge exactly as in Maxira */}
                        <div
                          className="project-circle-text"
                          style={{
                            pointerEvents: 'none',
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '1px',
                            color: '#000',
                            background: 'rgba(255, 255, 255, 0.88)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                          }}
                        >
                          <span style={{ textAlign: 'center', padding: '8px', lineHeight: 1.2 }}>
                            PROJECTS THAT MOVE THE NEEDLE
                          </span>
                        </div>
                        <img
                          src={p.img}
                          alt={p.title}
                          className="work-photo-first"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 className="work-title-first">{p.title}</h3>
                        <span className="p-03" style={{ fontSize: '11px' }}>{p.cat}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 3: [ core features ] End-to-end , marketing, simplified
   The 4 Core Pillars of our team, exact Maxira cards & button
   ───────────────────────────────────────────────────────────── */
const FOUR_CORE_FEATURES = [
  {
    topClass: 'features-top _01',
    title: 'Organic Branding & Narrative',
    desc: 'Pin‑point your market, craft a winning story, and map a clear path to high-trust market authority.',
  },
  {
    topClass: 'features-top _02',
    title: 'Performance Marketing',
    desc: 'Data‑driven paid and organic campaigns across Meta and Google engineered to maximise ROI.',
  },
  {
    topClass: 'features-top _03',
    title: 'Automation & Technology',
    desc: 'Frictionless customer journeys, automated WhatsApp lead triage, and operations that scale effortlessly.',
  },
  {
    topClass: 'features-top _01',
    title: 'Franchise & Commercial Scale',
    desc: 'Magnetic commercial blueprints, multi-branch scaling systems, and regional expansion execution.',
  },
];

export function MarketingEndToEndSection() {
  return (
    <section className="section _03">
      <div className="container">
        <div>
          <div className="max-w-width _01" style={{ opacity: 1 }}>
            <div className="testi-small-flex">
              <div className="star-flex">
                <p className="p-03 _01-d">[ core features ]<br/></p>
              </div>
            </div>
            <h2 className="display-1 _01">
              End-to-end , marketing, <span className="other-font _02-d">simplified</span>
            </h2>
            <div className="margin-20">
              <p className="p-02">A full-stack suite of services purpose-built for commercial expansion</p>
            </div>
          </div>

          <div className="margin-60">
            <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              {FOUR_CORE_FEATURES.map((item, idx) => (
                <div key={idx} className="features-card" style={{ opacity: 1 }}>
                  <div className={item.topClass}></div>
                  <div className="main-block">
                    <h3 className="display-1 _04">{item.title}</h3>
                    <div className="margin-10">
                      <p className="p-01">{item.desc}</p>
                    </div>
                    <div className="margin-15">
                      <div className="button-flex">
                        <Link href="/contact" className="button-main first w-variant-1bb29a39-8460-9957-ca7d-509c3fade0ee w-inline-block">
                          <div className="button-text">learn more</div>
                          <div className="button-icon-wrapper">
                            <div className="button-arrow hover w-embed">
                              <ArrowRightIcon />
                            </div>
                            <div className="button-arrow w-embed">
                              <ArrowRightIcon />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 4: The marketing agency you need for the company you want to become.
   [ why choose us ] + [ Testimonials ] They trust us to turn bold concepts into real world wins.
   Exact Maxira split grid, vertical marquee, case blocks, & metrics
   ───────────────────────────────────────────────────────────── */
export function AgencyUnitSection() {
  return (
    <section className="section _01">
      <div className="main-shadow top"></div>
      <div className="container">
        {/* Why choose us & Agency philosophy */}
        <div className="about-grid">
          <div className="quote-wrapper">
            <div>
              <h2 className="display-1 _01" style={{ opacity: 1 }}>
                The marketing agency you need <span className="other-font">for the company </span>you want to become.
              </h2>
            </div>
            <div className="line-divider" style={{ opacity: 1 }}></div>
            <p className="p-03" style={{ opacity: 1 }}>[ why choose us ]<br/></p>
            <h2 className="second-title" style={{ opacity: 1 }}>
              &ldquo;We mine the data, decode your audience, and transform your brand’s edge into tangible wins&rdquo;
            </h2>
            <div className="author-flex" style={{ opacity: 1 }}>
              <div className="author-photo" style={{ background: '#110fdf' }}></div>
              <p className="p-03">GrowDesk Executive Leadership, Senior Advisory<br/></p>
            </div>
          </div>

          <div>
            <div className="flex-reverse">
              <div className="marquee second" style={{ height: '480px', overflow: 'hidden' }}>
                <div className="marquee-group marquee-vertical-animated">
                  <div className="testimonial-card-group">
                    <div className="about-photo _01" style={{ backgroundImage: "url('/our-work/cleaning_karigar.png')", backgroundSize: 'cover' }}></div>
                    <div className="about-photo _02" style={{ backgroundImage: "url('/our-work/weshinebeautynsalon.png')", backgroundSize: 'cover' }}></div>
                    <div className="about-photo _03" style={{ backgroundImage: "url('/our-work/IMG_7541.png')", backgroundSize: 'cover' }}></div>
                    <div className="about-photo _04" style={{ backgroundImage: "url('/our-work/sankalp-learning-classes-slc-telephone-exchange-road-bilaspur-chhattisgarh-tutorials-nzte73hdv9.jpg')", backgroundSize: 'cover' }}></div>
                    <div className="about-photo _02" style={{ backgroundImage: "url('/our-work/IMG_4619.png')", backgroundSize: 'cover' }}></div>
                  </div>
                  {/* Duplicate set for seamless vertical loop */}
                  <div className="testimonial-card-group">
                    <div className="about-photo _01" style={{ backgroundImage: "url('/our-work/cleaning_karigar.png')", backgroundSize: 'cover' }}></div>
                    <div className="about-photo _02" style={{ backgroundImage: "url('/our-work/weshinebeautynsalon.png')", backgroundSize: 'cover' }}></div>
                    <div className="about-photo _03" style={{ backgroundImage: "url('/our-work/IMG_7541.png')", backgroundSize: 'cover' }}></div>
                    <div className="about-photo _04" style={{ backgroundImage: "url('/our-work/sankalp-learning-classes-slc-telephone-exchange-road-bilaspur-chhattisgarh-tutorials-nzte73hdv9.jpg')", backgroundSize: 'cover' }}></div>
                    <div className="about-photo _02" style={{ backgroundImage: "url('/our-work/IMG_4619.png')", backgroundSize: 'cover' }}></div>
                  </div>
                </div>
                <div className="main-shadow top"></div>
                <div className="main-shadow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* The trust we earn & Testimonial case study blocks */}
        <div className="margin-40 make-100">
          <div>
            <div className="max-w-width _01" style={{ opacity: 1 }}>
              <div className="testi-small-flex">
                <div className="star-flex">
                  <p className="p-03">[ Testimonials ]<br/></p>
                </div>
              </div>
              <h2 className="display-1 _01">
                They trust us to turn bold concepts into real <span className="other-font">world wins.</span>
              </h2>
              <div className="margin-20">
                <p className="p-02">We translate vision into action</p>
              </div>
            </div>
          </div>

          <div className="margin-60">
            <div className="case-grid">
              {/* Case Block 1 */}
              <div className="block-1" style={{ opacity: 1 }}>
                <div>
                  <img width="90" src="/our-work/IMG_1424.png" alt="Cleaning Karigar" style={{ borderRadius: '6px' }} />
                  <div className="margin-20">
                    <h2 className="second-title _01">How we scaled Cleaning Karigar into multi-city franchise expansion</h2>
                  </div>
                </div>
                <div className="chart-grid _01">
                  <h2 className="second-title _02"><span className="lighter-arrow">13k+</span> homes cleaned and serviced</h2>
                  <h2 className="second-title _02"><span className="lighter-arrow">＋325×</span> ad spend conversion lift</h2>
                  <h2 className="second-title _02"><span className="lighter-arrow">100%</span> verified service retention</h2>
                  <h2 className="second-title _02"><span className="lighter-arrow">4.9 / 5</span> client trust score</h2>
                </div>
                <div>
                  <div className="button-flex">
                    <Link href="/case-studies" className="button-main first w-inline-block">
                      <div className="button-text">View Project</div>
                      <div className="button-icon-wrapper">
                        <div className="button-arrow hover w-embed"><ArrowRightIcon /></div>
                        <div className="button-arrow w-embed"><ArrowRightIcon /></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Case Block 2 (Photo with Quote Overlay) */}
              <div className="block-2" style={{ opacity: 1 }}>
                <div className="image-wrap">
                  <img src="/our-work/IMG_2513.jpg" alt="Partner review" loading="lazy" className="paralax-image" />
                  <div className="main-overlay"></div>
                  <div className="absolute-bottom">
                    <h2 className="second-title">
                      &ldquo;Their strategic clarity and flawless execution landed us in boardroom conversations we’d struggled to enter for years.&rdquo;
                    </h2>
                    <div className="author-flex left">
                      <p className="p-03">Cleaning Karigar Leadership, Co-Founder<br/></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Block 3 (Photo with Quote Overlay) */}
              <div>
                <div className="block-2" style={{ opacity: 1 }}>
                  <div className="image-wrap">
                    <img src="/images/759384077_18091052654174784_6424992665912909937_n.jpg" alt="Institutional review" loading="lazy" className="paralax-image" />
                    <div className="main-overlay"></div>
                    <div className="absolute-bottom">
                      <h2 className="second-title">
                        &ldquo;GrowDesk made us look and perform like a category veteran from day one.&rdquo;
                      </h2>
                      <div className="author-flex left">
                        <p className="p-03">WeShine Beauty n Salon, Co‑Founder<br/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Block 4 & 5 */}
              <div className="block-flex">
                <div className="block-1 _01 color" style={{ opacity: 1 }}>
                  <div>
                    <img width="80" src="/our-work/IMG_7541.png" alt="TravelZone" style={{ borderRadius: '6px' }} />
                  </div>
                  <div>
                    <h2 className="second-title _01">
                      Challenge — break into saturated routes and secure predictable daily corporate bookings.
                    </h2>
                  </div>
                </div>
                <div className="block-1 _02 color" style={{ opacity: 1 }}>
                  <div>
                    <img width="60" src="/our-work/IMG_4620.png" alt="SLC" style={{ borderRadius: '6px' }} />
                    <div className="margin-20">
                      <h2 className="second-title _01">
                        High-intent search targeting, automated WhatsApp lead triage, and student admissions campaigns
                      </h2>
                    </div>
                  </div>
                  <div className="chart-grid">
                    <h2 className="second-title _02"><span className="lighter-arrow _01">↑</span> 600+ verified inquiries</h2>
                    <h2 className="second-title _02"><span className="lighter-arrow _01">↓</span> 42 % cost‑per‑acquisition</h2>
                  </div>
                  <div>
                    <div className="button-flex">
                      <Link href="/case-studies" className="button-main first w-variant-1bb29a39-8460-9957-ca7d-509c3fade0ee w-inline-block">
                        <div className="button-text">View Project</div>
                        <div className="button-icon-wrapper">
                          <div className="button-arrow w-variant-1bb29a39-8460-9957-ca7d-509c3fade0ee hover w-embed"><ArrowRightIcon /></div>
                          <div className="button-arrow w-variant-1bb29a39-8460-9957-ca7d-509c3fade0ee w-embed"><ArrowRightIcon /></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 5: [ One-time payment ] Made for clients with a mission in mind
   Exact Maxira Pricing Switcher, Features list, & Pause/Try blocks
   (Strictly omitting the "Insights that drive real results" blog section)
   ───────────────────────────────────────────────────────────── */
export function MadeForMissionSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="section _04">
      <div className="container">
        <div>
          <div className="about-grid _01">
            <div className="quote-wrapper">
              <div className="max-w-width _02-l" style={{ opacity: 1 }}>
                <div className="testi-small-flex">
                  <div className="star-flex">
                    <p className="p-03">[ Growth Partnership ]<br/></p>
                  </div>
                </div>
                <h2 className="display-1 _01">
                  Made for clients with a <span className="other-font">mission in mind</span>
                </h2>
                <div className="margin-20">
                  <p className="p-02">We translate vision into action</p>
                </div>
                <div className="margin-40">
                  <div className="button-flex center-mobile">
                    <Link href="/contact" className="button-main first w-inline-block">
                      <div className="button-text">Contact us</div>
                      <div className="button-icon-wrapper">
                        <div className="button-arrow hover w-embed"><ArrowRightIcon /></div>
                        <div className="button-arrow w-embed"><ArrowRightIcon /></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-wrapper" style={{ opacity: 1 }}>
                <div
                  className="pricing-switcher"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsAnnual(!isAnnual)}
                >
                  <p className={`p-03 _01-d ${isAnnual ? 'hide' : ''}`} style={{ margin: 0 }}>Billed Monthly</p>
                  <div id="switch_button" className="pricing-switch" style={{ background: isAnnual ? '#110fdf' : '#222' }}>
                    <div
                      className="pricing-crcle"
                      style={{
                        transform: isAnnual ? 'translateX(24px)' : 'translateX(0px)',
                        transition: 'transform 0.25s ease',
                      }}
                    ></div>
                  </div>
                  <p className={`p-03 _01-d ${!isAnnual ? 'hide' : ''}`} style={{ margin: 0 }}>Billed Annually</p>
                </div>

                {!isAnnual ? (
                  <div className="first-part-prc first" style={{ display: 'block' }}>
                    <h1 className="display-1 _01">Monthly</h1>
                    <div className="margin-50">
                      <p className="p-03 _01-d">[ what&#x27;s included ]<br/></p>
                      <div className="margin-30">
                        <div className="pricing-desciprtion">
                          <div className="pricing-detail-text">
                            <span style={{ color: '#1dd35a', marginRight: '10px' }}>✓</span>
                            <p className="p-for-price">Full-Stack Organic &amp; Performance Media</p>
                          </div>
                          <div className="pricing-detail-text">
                            <span style={{ color: '#1dd35a', marginRight: '10px' }}>✓</span>
                            <p className="p-for-price">Dedicated Creative Scripting &amp; Production</p>
                          </div>
                          <div className="pricing-detail-text">
                            <span style={{ color: '#1dd35a', marginRight: '10px' }}>✓</span>
                            <p className="p-for-price">Direct WhatsApp Automated Lead Funnel</p>
                          </div>
                          <div className="pricing-detail-text">
                            <span style={{ color: '#1dd35a', marginRight: '10px' }}>✓</span>
                            <p className="p-for-price">Real-Time Telemetry &amp; Weekly Executive Reviews</p>
                          </div>
                          <div className="pricing-detail-text">
                            <span style={{ color: '#1dd35a', marginRight: '10px' }}>✓</span>
                            <p className="p-for-price">Continuous CAC Optimization</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="line-divider _01"></div>
                    <div>
                      <div className="pricing-bottom-flex">
                        <h2 className="pricing-large">Custom<span className="month-small">/ month</span></h2>
                        <Link href="/contact" className="button w-inline-block">
                          <div className="button-border"></div>
                          <div className="button-inner">
                            <div className="button-txt">Get Started</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="first-part-prc second" style={{ display: 'block' }}>
                    <h1 className="display-1 _01">Annually</h1>
                    <div className="margin-50">
                      <p className="p-03 _01-d">[ what&#x27;s included ]<br/></p>
                      <div className="margin-30">
                        <div className="pricing-desciprtion">
                          <div className="pricing-detail-text">
                            <span style={{ color: '#1dd35a', marginRight: '10px' }}>✓</span>
                            <p className="p-for-price">Annual CMO Strategic Advisory &amp; Growth Blueprint</p>
                          </div>
                          <div className="pricing-detail-text">
                            <span style={{ color: '#1dd35a', marginRight: '10px' }}>✓</span>
                            <p className="p-for-price">Multi-City Franchise Network Expansion</p>
                          </div>
                          <div className="pricing-detail-text">
                            <span style={{ color: '#1dd35a', marginRight: '10px' }}>✓</span>
                            <p className="p-for-price">Priority Production &amp; Video Media Pipeline</p>
                          </div>
                          <div className="pricing-detail-text">
                            <span style={{ color: '#1dd35a', marginRight: '10px' }}>✓</span>
                            <p className="p-for-price">Full Custom Web &amp; Automation Architecture</p>
                          </div>
                          <div className="pricing-detail-text">
                            <span style={{ color: '#1dd35a', marginRight: '10px' }}>✓</span>
                            <p className="p-for-price">Dedicated Account Managing Partner</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="line-divider _01"></div>
                    <div>
                      <div className="pricing-bottom-flex">
                        <h2 className="pricing-large">Enterprise<span className="month-small">/ annually</span></h2>
                        <Link href="/contact" className="button w-inline-block">
                          <div className="button-border"></div>
                          <div className="button-inner">
                            <div className="button-txt">Get Started</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Exact Maxira Grid Card (Pause anytime & Try it for a week) */}
              <div className="grid-card">
                <div>
                  <div className="block-1 _03" style={{ opacity: 1 }}>
                    <div className="chart-grid _02">
                      <div className="pricing-icon"></div>
                      <h2 className="second-title _02">Pause<span className="lighter-arrow"> Anytime</span></h2>
                    </div>
                    <p className="p-01">Pause your growth plan whenever you like — easy peasy.</p>
                  </div>
                </div>
                <div>
                  <div className="block-1 _03" style={{ opacity: 1 }}>
                    <div className="chart-grid _02">
                      <div className="pricing-icon _01"></div>
                      <h2 className="second-title _02">Results <span className="lighter-arrow">First</span></h2>
                    </div>
                    <p className="p-01">Transparent accountability and verifiable commercial outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-shadow"></div>
    </section>
  );
}