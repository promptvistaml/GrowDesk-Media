'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const SOCIAL_LINKS = [
  {
    key: 'ig',
    label: 'Instagram',
    href: 'https://www.instagram.com/growdeskmedia/',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: 'fb',
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61591647995131',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    key: 'li',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/145189822/',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zm7 0h3.8v1.7h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.78 2.66 4.78 6.12V21h-4v-5.5c0-1.3-.02-3-1.83-3s-2.11 1.43-2.11 2.9V21h-4z" />
      </svg>
    ),
  },
  {
    key: 'wa',
    label: 'WhatsApp',
    href: 'https://wa.me/919406031522?text=Hello%20GrowDesk%20Media',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.777.818 2.789.82h.002c3.18 0 5.767-2.586 5.768-5.766 0-1.54-.6-2.988-1.689-4.079-1.09-1.09-2.538-1.687-4.079-1.687zm8.39 5.766c-.002 4.629-3.768 8.395-8.397 8.395-1.408-.002-2.784-.361-4.004-1.042l-4.446 1.166 1.187-4.333c-.748-1.28-1.144-2.738-1.145-4.186 0-4.63 3.766-8.396 8.397-8.396 2.244 0 4.354.874 5.94 2.46 1.587 1.587 2.466 3.696 2.468 5.936z" />
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
