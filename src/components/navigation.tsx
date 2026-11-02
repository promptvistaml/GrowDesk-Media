'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GrowDeskLogo } from '@/components/growdesk-logo';

const LinkedInIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const MailIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isServices = pathname === '/services';
  const isOurWork = pathname === '/case-studies';
  const isAbout = pathname === '/about';
  const isLightPage = isServices || isOurWork || isAbout;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const linkClass = isLightPage
    ? "relative text-[10px] tracking-normal text-neutral-700 hover:text-black transition-colors font-normal py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#1E63FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-250 after:origin-left"
    : "relative text-[10px] tracking-normal text-white/90 hover:text-white transition-colors font-normal py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#1E63FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-250 after:origin-left";

  const headerBg = (isOurWork || isAbout)
    ? "bg-[#F0F5FA] text-[#000000]"
    : isServices
    ? "bg-[#FFFFFF] text-[#000000]"
    : "bg-[#000000] text-white";

  const headerPosition = isHome
    ? "absolute top-0 inset-x-0 bg-transparent text-white"
    : `relative w-full ${headerBg}`;

  // Theme matching for full-screen mobile menu overlay
  const mobileOverlayBg = (isOurWork || isAbout)
    ? "bg-[#F0F5FA] text-[#000000]"
    : isServices
    ? "bg-[#FFFFFF] text-[#000000]"
    : "bg-[#000000] text-white";

  const mobileLinkClass = isLightPage
    ? "font-serif text-3xl sm:text-4xl font-normal text-neutral-900 hover:text-neutral-500 transition-colors tracking-normal"
    : "font-serif text-3xl sm:text-4xl font-normal text-white hover:text-neutral-300 transition-colors tracking-normal";

  const mobileSocialClass = isLightPage
    ? "text-neutral-800 hover:text-black transition-colors"
    : "text-white/90 hover:text-white transition-colors";

  return (
    <>
      <header className={`z-50 pt-3 sm:pt-6 transition-colors duration-200 ${headerPosition}`}>
        <div className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 py-4 md:py-8 flex items-center justify-between">

          {/* Left Nav Group (Desktop) */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-16 z-10">
            <Link
              href="/about"
              className={`${linkClass} ${isAbout ? "after:scale-x-100 font-medium" : ""}`}
            >
              Why GrowDesk
            </Link>
            <Link
              href="/services"
              className={`${linkClass} ${isServices ? "after:scale-x-100 font-medium" : ""}`}
            >
              What We Do
            </Link>
          </nav>

          {/* Center Prominent Brand Logo - Perfectly Centered & Bigger for ALL pages & viewports */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto z-10">
            <Link href="/" className="inline-block group py-1">
              <GrowDeskLogo
                isLight={isLightPage}
                className="h-12 sm:h-15 md:h-20 lg:h-24 w-auto transition-transform hover:scale-105 duration-300"
              />
            </Link>
          </div>

          {/* Right Nav Group (Desktop) */}
          <div className="flex items-center gap-10 lg:gap-16 ml-auto z-10">
            <Link
              href="/case-studies"
              className={`hidden md:inline-block ${linkClass} ${isOurWork ? "after:scale-x-100 font-medium" : ""}`}
            >
              Our Work
            </Link>
            <Link
              href="/services#framework"
              className={`hidden md:inline-block ${linkClass}`}
            >
              The Runway
            </Link>
            <Link
              href="/#connect"
              className={`hidden md:inline-block ${linkClass}`}
            >
              Connect
            </Link>

            {/* Mobile Menu Toggle button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`md:hidden p-2 -mr-1 rounded-md transition-colors ${
                isLightPage ? "text-neutral-900 hover:bg-neutral-200/50" : "text-white hover:bg-white/10"
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 stroke-[1.8]" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay matching Page Theme */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`fixed inset-0 z-[100] flex flex-col justify-between p-6 sm:p-8 md:hidden h-[100dvh] ${mobileOverlayBg}`}
          >
            {/* Top Bar with Centered Logo & Right Close X Button */}
            <div className="relative w-full flex items-center justify-between pt-2">
              <div className="w-10" />

              {/* Center Brand Logo in Mobile Menu - Centered & Bigger */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block"
                >
                  <GrowDeskLogo
                    isLight={isLightPage}
                    className="h-12 sm:h-15 w-auto"
                  />
                </Link>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className={`p-2 -mr-2 transition-colors z-10 ${
                  isLightPage ? "text-neutral-900 hover:text-black" : "text-white/90 hover:text-white"
                }`}
                aria-label="Close menu"
              >
                <X className="w-7 h-7 stroke-[1.5]" />
              </button>
            </div>

            {/* Center Editorial Serif Navigation Links */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-7 sm:gap-9 text-center my-auto py-8">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                Why GrowDesk
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                What We Do
              </Link>
              <Link
                href="/case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                Our Work
              </Link>
              <Link
                href="/services#framework"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                The Runway
              </Link>
              <Link
                href="/#connect"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                Connect
              </Link>
            </nav>

            {/* Bottom Social Icons */}
            <div className="flex items-center justify-center gap-7 pb-6 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={mobileSocialClass}
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={mobileSocialClass}
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@growdeskmedia.com"
                className={mobileSocialClass}
                aria-label="Email"
              >
                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
