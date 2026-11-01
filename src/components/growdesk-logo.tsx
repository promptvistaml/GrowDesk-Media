'use client';

interface GrowDeskLogoProps {
  className?: string;
  isLight?: boolean;
}

export function GrowDeskLogo({ className = "h-11 sm:h-13 md:h-16 lg:h-18 w-auto", isLight = false }: GrowDeskLogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {isLight ? (
        // Light pages (/services, /case-studies): Original brand navy & royal blue logo
        <img
          src="/images/growdesk-logo.png"
          alt="GrowDesk Media"
          className="h-full w-auto object-contain select-none transition-transform duration-200 hover:scale-[1.02]"
        />
      ) : (
        // Dark pages (/, /about): Pure white typography with zero white border around the royal blue 'W' arrow
        <img
          src="/images/growdesk-logo-white.png"
          alt="GrowDesk Media"
          className="h-full w-auto object-contain select-none transition-transform duration-200 hover:scale-[1.02]"
        />
      )}
    </div>
  );
}

