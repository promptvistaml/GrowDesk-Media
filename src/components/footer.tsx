import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#FFFFFF] text-[#000000] border-t border-neutral-200 py-12 md:py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Navigation row matching the screenshot */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-800">
          <Link href="/about" className="hover:text-black">
            WHO WE ARE
          </Link>
          <Link href="/services" className="hover:text-black">
            WHAT WE DO
          </Link>
          <Link href="/case-studies" className="hover:text-black">
            OUR WORK
          </Link>
          <Link href="/services#framework" className="hover:text-black">
            THE RUNWAY
          </Link>
          <Link href="/#connect" className="hover:text-black">
            CONNECT
          </Link>
          <Link href="/admin" className="hover:text-black text-neutral-400">
            ADMIN
          </Link>
        </div>

        {/* Copyright notice matching the second image */}
        <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 pt-6">
          © 2026 GROWDESK MEDIA • ALL RIGHTS RESERVED • STRATEGIC COMMUNICATIONS ADVISORY
        </div>
      </div>
    </footer>
  );
}
