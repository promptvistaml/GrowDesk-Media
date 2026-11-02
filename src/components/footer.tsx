'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const SOCIAL_LINKS = [
  {
    key: 'x',
    label: 'X (formerly Twitter)',
    href: 'https://twitter.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    key: 'ig',
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: 'yt',
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.5.5-5.5s0-3.6-.5-5.5zM9.6 15.6V8.4l6.4 3.6z" />
      </svg>
    ),
  },
  {
    key: 'li',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zm7 0h3.8v1.7h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.78 2.66 4.78 6.12V21h-4v-5.5c0-1.3-.02-3-1.83-3s-2.11 1.43-2.11 2.9V21h-4z" />
      </svg>
    ),
  },
];

interface FooterLinkItem {
  label: string;
  href: string;
  badge?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLinkItem[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Brand Strategy', href: '/services' },
      { label: 'Performance Marketing', href: '/services' },
      { label: 'Creative Direction', href: '/services' },
      { label: 'Media Production', href: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Our Work', href: '/case-studies' },
      { label: 'Client Results', href: '/case-studies' },
      { label: 'The Runway', href: '/services#framework' },
      { label: 'Direct Enquiry', href: '/#connect' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Why GrowDesk', href: '/about' },
      { label: 'Careers', href: '/#connect', badge: "we're hiring" },
      { label: 'Contact Us', href: '/#connect' },
      { label: 'Admin Portal', href: '/admin' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#000000] text-white pt-16 sm:pt-20 pb-10 border-t border-neutral-900">
      {/* Subtle blue accent glow in background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-gradient-to-b from-blue-600/15 via-blue-500/5 to-transparent blur-3xl opacity-80" 
      />

      <div className="relative max-w-[1400px] mx-auto w-full px-6 sm:px-8 lg:px-12">
        {/* Top Grid: Brand & Description + 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 lg:gap-12">
          {/* Brand info & Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-6"
          >
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-sm">
              GrowDesk Media is a strategic communications &amp; performance advisory driving measurable business velocity and market authority.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-9 h-9 rounded-md border border-neutral-800 bg-neutral-950/70 text-neutral-300 flex items-center justify-center hover:border-blue-500/60 hover:text-blue-400 hover:bg-blue-950/20 transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns with top subtle border divider */}
          {FOOTER_COLUMNS.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 * (idx + 1) }}
              className="flex flex-col gap-3 lg:border-t lg:border-neutral-800/80 lg:pt-5"
            >
              <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label} className="flex items-center gap-2">
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                    {link.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-mono tracking-wider uppercase">
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Giant Centered Wordmark with outline & mask fade (matching React Bits Pro Footer 8) */}
        <div
          className="relative mt-20 sm:mt-24 w-full select-none"
          aria-hidden="true"
          style={{
            fontSize: 'min(14.2vw, 190px)',
            height: '0.74em',
            maskImage: 'linear-gradient(to bottom, #000 45%, transparent 95%)',
            WebkitMaskImage: 'linear-gradient(to bottom, #000 45%, transparent 95%)',
          }}
        >
          {/* Dark outline text with subtle blue-toned stroke */}
          <div
            className="absolute inset-0 flex justify-center font-bold uppercase leading-none whitespace-nowrap text-black pointer-events-none"
            style={{
              fontSize: 'inherit',
              letterSpacing: '0.12em',
              paddingLeft: '0.12em',
              textShadow:
                '0 -1.5px 0 rgba(148, 163, 184, 0.45), 1.5px 0 0 rgba(148, 163, 184, 0.45), 0 1.5px 0 rgba(148, 163, 184, 0.45), -1.5px 0 0 rgba(148, 163, 184, 0.45), 1px 1px 0 rgba(59, 130, 246, 0.35), -1px -1px 0 rgba(59, 130, 246, 0.35)',
            }}
          >
            GROWDESK
          </div>
        </div>

        {/* Bottom row: Copyright & Legal links */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-neutral-500">
          <p className="tracking-wide">
            &copy; 2026 GrowDesk Media / Strategic Communications Advisory
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Terms of service
            </Link>
            <Link
              href="/#connect"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
