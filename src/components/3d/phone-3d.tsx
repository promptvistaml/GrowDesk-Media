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

export const phoneFrameVariants = {
  titanium: {
    outerBorder: 'border-[#a8a29e]',
    outerSheen:
      'bg-gradient-to-tr from-[#78716c] via-[#e7e5e4] to-[#57534e]',
    outerHighlight:
      'bg-gradient-to-b from-white/70 via-white/10 to-transparent',
    innerFrame:
      'bg-gradient-to-b from-[#1c1917] via-[#141210] to-[#0c0a09]',
    screenBorder: 'border-[#292524]',
    antenna: 'bg-[#57534e]',
    button:
      'bg-gradient-to-r from-[#a8a29e] to-[#78716c] border-[#57534e]',
  },
  spaceBlack: {
    outerBorder: 'border-[#475569]',
    outerSheen:
      'bg-gradient-to-tr from-[#334155] via-[#64748b] to-[#1e293b]',
    outerHighlight:
      'bg-gradient-to-b from-white/40 via-white/5 to-transparent',
    innerFrame:
      'bg-gradient-to-b from-[#111215] via-[#0c0d10] to-[#060709]',
    screenBorder: 'border-[#1e2229]',
    antenna: 'bg-[#334155]',
    button:
      'bg-gradient-to-r from-[#475569] to-[#334155] border-[#1e293b]',
  },
  midnight: {
    outerBorder: 'border-[#1e293b]',
    outerSheen:
      'bg-gradient-to-tr from-[#0f172a] via-[#334155] to-[#020617]',
    outerHighlight:
      'bg-gradient-to-b from-sky-400/30 via-transparent to-transparent',
    innerFrame:
      'bg-gradient-to-b from-[#0f1218] via-[#0a0c10] to-[#040507]',
    screenBorder: 'border-[#1b2029]',
    antenna: 'bg-[#1e293b]',
    button:
      'bg-gradient-to-r from-[#1e293b] to-[#0f172a] border-[#020617]',
  },
} as const;

export type PhoneFrameVariant = keyof typeof phoneFrameVariants;

export interface Phone3DCardProps
  extends ComponentPropsWithoutRef<'div'> {
  variant?: PhoneFrameVariant;
  showDynamicIsland?: boolean;
  children?: ReactNode;
}

export const Phone3DCard = forwardRef<HTMLDivElement, Phone3DCardProps>(
  (
    {
      className,
      children,
      variant = 'titanium',
      showDynamicIsland = true,
      ...props
    },
    ref
  ) => {
    const frame =
      phoneFrameVariants[variant] || phoneFrameVariants.titanium;

    const containerRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback(
      (e: ReactMouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;

        // Slow, calm 3D tilt coordinates (max 8 degrees)
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
        data-slot="phone-3d-card"
        data-variant={variant}
        className={cn(
          'relative flex flex-col items-center select-none font-sans',
          className
        )}
        style={{ perspective: 1200 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Interactive 3D Parallax Phone with smooth, calm transitions */}
        <div
          ref={containerRef}
          className="relative flex flex-col items-center transition-transform duration-700 ease-out will-change-transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Side Hardware Buttons in 3D */}
          {/* Left: Volume Up / Down & Action Button */}
          <div
            className={cn(
              'absolute -left-[5px] top-24 w-[3.5px] h-8 rounded-l-xs border',
              frame.button
            )}
            style={{ transform: 'translateZ(-2px)' }}
          />
          <div
            className={cn(
              'absolute -left-[5px] top-36 w-[3.5px] h-12 rounded-l-xs border',
              frame.button
            )}
            style={{ transform: 'translateZ(-2px)' }}
          />
          <div
            className={cn(
              'absolute -left-[5px] top-52 w-[3.5px] h-12 rounded-l-xs border',
              frame.button
            )}
            style={{ transform: 'translateZ(-2px)' }}
          />
          {/* Right: Side Power Button */}
          <div
            className={cn(
              'absolute -right-[5px] top-32 w-[3.5px] h-16 rounded-r-xs border',
              frame.button
            )}
            style={{ transform: 'translateZ(-2px)' }}
          />

          {/* Outer Metallic Titanium Chassis */}
          <div
            className={cn(
              'relative w-[260px] sm:w-[280px] md:w-[300px] aspect-[9/19]',
              'rounded-[48px] p-[3px]',
              'shadow-[0_30px_70px_-15px_rgba(0,0,0,0.65),0_15px_30px_rgba(0,0,0,0.4)]',
              frame.outerSheen
            )}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Specular Edge Highlight Sheen */}
            <div
              className={cn(
                'pointer-events-none absolute inset-0 rounded-[48px] opacity-75',
                frame.outerHighlight
              )}
            />

            {/* Dynamic Cursor Light Glint */}
            {isHovered && (
              <div
                className="pointer-events-none absolute inset-0 rounded-[48px] mix-blend-overlay opacity-60"
                style={{
                  background: `radial-gradient(circle 180px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.85), transparent 70%)`,
                }}
              />
            )}

            {/* Inner Chassis Bezel & Antenna Ring */}
            <div
              className={cn(
                'relative size-full rounded-[45px] p-[10px] shadow-inner',
                frame.innerFrame
              )}
            >
              {/* Screen Glass Surface */}
              <div
                className={cn(
                  'relative size-full overflow-hidden rounded-[36px] bg-black border',
                  frame.screenBorder
                )}
              >
                {/* Dynamic Island Pill */}
                {showDynamicIsland && (
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-between px-2.5 w-[84px] h-[22px] rounded-full bg-black border border-neutral-800/80 shadow-md">
                    {/* Camera Sensor Lens */}
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-blue-950/80 shadow-[0_0_2px_#3b82f6]" />
                    </div>
                    {/* Fixed Indicator Dot */}
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                  </div>
                )}

                {/* Screen Content Display */}
                <div className="relative size-full overflow-hidden">
                  {children}
                </div>

                {/* Diagonal Glass Specular Highlight Reflection */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] z-20" />

                {/* Home Indicator Bar */}
                <div className="pointer-events-none absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-white/40 z-30" />
              </div>
            </div>
          </div>

          {/* 3D Ground Contact Shadow */}
          <div
            className="pointer-events-none absolute -bottom-5 inset-x-6 h-6 rounded-full bg-black/60 blur-md transition-opacity duration-300"
            style={{
              transform: `translateZ(-15px) scale(${isHovered ? 1.05 : 1})`,
              opacity: isHovered ? 0.7 : 0.5,
            }}
          />
        </div>
      </div>
    );
  }
);

Phone3DCard.displayName = 'Phone3DCard';
export { Phone3DCard as PhoneMockupCard };
