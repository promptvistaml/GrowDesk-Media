'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { GrowDeskLogo } from '@/components/growdesk-logo';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isServices = pathname === '/services';
  const isOurWork = pathname === '/case-studies';
  const isAbout = pathname === '/about';
  const isLightPage = isServices || isOurWork || isAbout;

  const linkClass = isLightPage
    ? "text-[10px] tracking-normal text-neutral-700 hover:text-black transition-opacity font-normal"
    : "text-[10px] tracking-normal text-white/90 hover:text-white transition-opacity font-normal";

  const headerBg = (isOurWork || isAbout)
    ? "bg-[#FAFBF6] text-[#000000]"
    : isServices
    ? "bg-[#FFFFFF] text-[#000000]"
    : "bg-[#000000] text-white";

  const headerPosition = isHome
    ? "absolute top-0 inset-x-0 bg-transparent text-white"
    : `relative w-full ${headerBg}`;

  return (
    <header className={`z-50 pt-4 sm:pt-6 transition-colors duration-200 ${headerPosition}`}>
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 py-6 md:py-8 flex items-center justify-between">

        {/* Left Nav Group */}
        <nav className="hidden md:flex items-center gap-12 lg:gap-16">
          <Link
            href="/about"
            className={`${linkClass} ${isAbout ? "border-b border-black pb-0.5 text-black font-medium" : ""}`}
          >
            Why GrowDesk
          </Link>
          <Link
            href="/services"
            className={`${linkClass} ${isServices ? "border-b border-black pb-0.5 text-black font-medium" : ""}`}
          >
            What We Do
          </Link>
        </nav>

        {/* Center Prominent Brand Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <Link href="/" className="inline-block group py-1">
            <GrowDeskLogo isLight={isLightPage} className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto" />
          </Link>
        </div>

        {/* Right Nav Group */}
        <div className="flex items-center gap-12 lg:gap-16 ml-auto md:ml-0">
          <Link
            href="/case-studies"
            className={`hidden md:inline-block ${linkClass} ${isOurWork ? "border-b border-black pb-0.5 text-black font-medium" : ""}`}
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

          {/* Mobile Menu Toggle for small screens */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-1 ml-auto ${isLightPage ? "text-black" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-8 py-8 flex flex-col gap-6 text-sm tracking-wide ${
          (isOurWork || isAbout)
            ? "bg-[#FAFBF6] border-t border-neutral-200 text-black"
            : isServices
            ? "bg-[#FFFFFF] border-t border-neutral-200 text-black"
            : "bg-[#000000] border-t border-white/10 text-white"
        }`}>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={isAbout ? "font-bold" : ""}>
            Why GrowDesk
          </Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className={isServices ? "font-bold" : ""}>
            What We Do
          </Link>
          <Link href="/case-studies" onClick={() => setMobileMenuOpen(false)} className={isOurWork ? "font-bold" : ""}>
            Our Work
          </Link>
          <Link href="/services#framework" onClick={() => setMobileMenuOpen(false)}>
            The Runway
          </Link>
          <Link href="/#connect" onClick={() => setMobileMenuOpen(false)}>
            Connect
          </Link>
        </div>
      )}
    </header>
  );
}
