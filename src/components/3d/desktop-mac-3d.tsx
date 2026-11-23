'use client';

import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from 'react';
import { cn } from '@/lib/utils';

export const desktopMacVariants = {
  metallicSilver: {
    stand: 'bg-gradient-to-b from-[#cbd5e1] via-[#e2e8f0] to-[#94a3b8] border-[#94a3b8]',
    standHighlight: 'bg-gradient-to-r from-transparent via-white/70 to-transparent',
    bezel: 'bg-[#0f1115] border-[#1e2229]',
    chin: 'bg-gradient-to-b from-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8] border-t border-white/60',
    edge: 'border-[#cbd5e1]',
    outerSheen: 'bg-gradient-to-tr from-[#94a3b8] via-[#e2e8f0] to-[#64748b]',
  },
  spaceGray: {
    stand: 'bg-gradient-to-b from-[#334155] via-[#475569] to-[#1e293b] border-[#1e293b]',
    standHighlight: 'bg-gradient-to-r from-transparent via-white/30 to-transparent',
    bezel: 'bg-[#090b0e] border-[#111622]',
    chin: 'bg-gradient-to-b from-[#475569] via-[#334155] to-[#1e293b] border-t border-white/20',
    edge: 'border-[#475569]',
    outerSheen: 'bg-gradient-to-tr from-[#334155] via-[#64748b] to-[#1e293b]',
  },
} as const;

export type DesktopMacVariant = keyof typeof desktopMacVariants;

export interface DesktopMac3DCardProps
  extends ComponentPropsWithoutRef<'div'> {
  variant?: DesktopMacVariant;
  children?: ReactNode;
}

export const DesktopMac3DCard = forwardRef<
  HTMLDivElement,
  DesktopMac3DCardProps
>(({ className, children, variant = 'metallicSilver', ...props }, ref) => {
  const frame =
    desktopMacVariants[variant] || desktopMacVariants.metallicSilver;

  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Gentle, calm mouse parallax (very slow & subtle)
  const handleMouseMove = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      // Soft max 5 degree tilt for a grounded, calm desktop display
      const tiltY = (px - 0.5) * 8;
      const tiltX = (0.5 - py) * 6;

      setTilt({ x: tiltX, y: tiltY });
      setGlarePos({ x: px * 100, y: py * 100 });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlarePos({ x: 50, y: 50 });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <div
      ref={ref}
      data-slot="desktop-mac-3d-card"
      data-variant={variant}
      className={cn(
        'relative flex flex-col items-center select-none font-sans',
        className
      )}
      style={{ perspective: 1400 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* 3D Parallax Rig with smooth, calm transitions */}
      <div
        ref={containerRef}
        className="relative flex flex-col items-center transition-transform duration-700 ease-out will-change-transform"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* ─────────────────────────────────────────────────────────────
            1. DESKTOP MONITOR DISPLAY CHASSIS (iMac / Studio Display)
            ───────────────────────────────────────────────────────────── */}
        <div
          className={cn(
            'relative w-[280px] min-[380px]:w-[320px] sm:w-[460px] md:w-[540px] lg:w-[590px] xl:w-[630px] max-w-[90vw]',
            'rounded-[18px] sm:rounded-[22px] p-[2px] sm:p-[2.5px] pb-0',
            frame.outerSheen
          )}
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(10px)',
          }}
        >
          {/* Specular sheen across the top and side aluminum chamfer */}
          <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-gradient-to-b from-white/60 via-transparent to-transparent opacity-80" />

          {/* Dynamic cursor reflection glint */}
          {isHovered && (
            <div
              className="pointer-events-none absolute inset-0 rounded-[22px] mix-blend-overlay opacity-50 transition-opacity"
              style={{
                background: `radial-gradient(circle 240px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.7), transparent 70%)`,
              }}
            />
          )}

          {/* Inner Black Glass Bezel Housing */}
          <div className={cn('relative rounded-t-[19px] p-[10px] pb-2', frame.bezel)}>
            {/* Clean Top Bezel */}

            {/* High-Resolution Screen Content Container (16:10 Widescreen) */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[8px] bg-white border border-slate-200">
              <div className="relative size-full overflow-hidden">
                {children}
              </div>

              {/* Diagonal Glass Specular Highlight Glare */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] z-20" />
            </div>
          </div>

          {/* Anodized Aluminum Lower Chin (Signature Apple Desktop aesthetic) */}
          <div
            className={cn(
              'relative h-8 sm:h-10 md:h-11 w-full rounded-b-[19px] flex items-center justify-center shadow-inner',
              frame.chin
            )}
          >
            {/* Center Apple logo on the chin */}
            <div className="flex items-center justify-center opacity-70 hover:opacity-90 transition-opacity">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-500 fill-current"
                viewBox="0 0 170 170"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.3-9.59-11.24-20.47-14.83-32.65-3.59-12.18-5.38-23.71-5.38-34.58 0-14.58 3.66-26.75 10.98-36.5 7.32-9.75 16.59-14.75 27.81-15 4.9 0 10.42 1.34 16.56 4.01 6.14 2.68 10.15 4.07 12.03 4.19 1.52 0 5.68-1.47 12.48-4.41 6.8-2.94 12.75-4.25 17.86-3.92 13.72.65 24.58 5.75 32.58 15.31-11.97 7.29-17.84 17.2-17.61 29.73.23 9.7 4 17.65 11.32 23.86 7.32 6.2 15.79 9.77 25.42 10.7-2.18 6.54-4.8 12.87-7.86 19.01zm-32.74-106.84c0-7.39 2.66-14.34 7.97-20.85 5.31-6.52 11.96-10.45 19.95-11.78.22 1.3.33 2.49.33 3.58 0 7.38-2.78 14.53-8.33 21.43-5.55 6.9-12.39 10.87-20.52 11.9-.22-1.3-.33-2.5-.33-3.6z" />
              </svg>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. CNC ALUMINUM PEDESTAL STAND & DESKTOP FOOT
            Cantilevered hinge and weighted aluminum foot
            ───────────────────────────────────────────────────────────── */}
        <div
          className="relative flex flex-col items-center -mt-1"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(-8px)',
          }}
        >
          {/* Vertical Aluminum Stem with Cable Pass-through */}
          <div
            className={cn(
              'relative w-14 sm:w-18 md:w-20 h-14 sm:h-18 md:h-20 flex items-center justify-center border-x',
              frame.stand
            )}
          >
            {/* Stand Metallic Highlight */}
            <div className={cn('absolute inset-0', frame.standHighlight)} />
            
            {/* Oval Cable Pass-through Port */}
            <div className="relative w-5 sm:w-6 h-7 sm:h-9 rounded-full bg-[#1e232d] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-neutral-700/40" />
          </div>

          {/* Horizontal Aluminum Desk Foot (Resting on table) */}
          <div
            className={cn(
              'relative w-36 sm:w-48 md:w-56 h-3 sm:h-3.5 rounded-b-md border-t border-white/50',
              frame.stand
            )}
            style={{
              transform: 'rotateX(55deg) translateZ(-4px)',
              transformOrigin: 'top center',
            }}
          >
            <div className={cn('absolute inset-0', frame.standHighlight)} />
          </div>
        </div>
      </div>
    </div>
  );
});

DesktopMac3DCard.displayName = 'DesktopMac3DCard';
