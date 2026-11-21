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

export const ipadFrameVariants = {
  metallicSilver: {
    outerBorder: 'border-[#cbd5e1]',
    outerSheen:
      'bg-gradient-to-tr from-[#94a3b8] via-[#e2e8f0] to-[#64748b]',
    outerHighlight:
      'bg-gradient-to-b from-white/70 via-white/10 to-transparent',
    innerFrame:
      'bg-gradient-to-b from-[#1c1d21] via-[#101113] to-[#0a0a0c]',
    screenBorder: 'border-[#2c2f37]',
  },
  spaceBlack: {
    outerBorder: 'border-[#475569]',
    outerSheen:
      'bg-gradient-to-tr from-[#334155] via-[#64748b] to-[#1e293b]',
    outerHighlight:
      'bg-gradient-to-b from-white/40 via-white/5 to-transparent',
    innerFrame:
      'bg-gradient-to-b from-[#121316] via-[#0d0e10] to-[#070709]',
    screenBorder: 'border-[#202227]',
  },
} as const;

export type IpadFrameVariant = keyof typeof ipadFrameVariants;

export interface Ipad3DCardProps
  extends ComponentPropsWithoutRef<'div'> {
  variant?: IpadFrameVariant;
  showCamera?: boolean;
  children?: ReactNode;
}

export const Ipad3DCard = forwardRef<HTMLDivElement, Ipad3DCardProps>(
  (
    {
      className,
      children,
      variant = 'metallicSilver',
      showCamera = true,
      ...props
    },
    ref
  ) => {
    const frame =
      ipadFrameVariants[variant] || ipadFrameVariants.metallicSilver;

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

        // Slow, calm 3D tilt coordinates (max 7 degrees)
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
        data-slot="ipad-3d-card"
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
        {/* Interactive 3D Parallax iPad with smooth, calm transitions */}
        <div
          ref={containerRef}
          className="relative flex flex-col items-center transition-transform duration-700 ease-out will-change-transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Outer Aluminum Bezel (Substantially sized iPad Pro) */}
          <div
            className={cn(
              'relative w-[360px] sm:w-[480px] md:w-[550px] lg:w-[600px] xl:w-[640px] aspect-[4/3]',
              'rounded-[34px] sm:rounded-[38px] p-[3px]',
              'shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55),0_10px_25px_rgba(0,0,0,0.3)]',
              frame.outerSheen
            )}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Specular Highlight Sheen */}
            <div
              className={cn(
                'pointer-events-none absolute inset-0 rounded-[34px] sm:rounded-[38px] opacity-75',
                frame.outerHighlight
              )}
            />

            {/* Dynamic Cursor Light Glint */}
            {isHovered && (
              <div
                className="pointer-events-none absolute inset-0 rounded-[34px] sm:rounded-[38px] mix-blend-overlay opacity-60"
                style={{
                  background: `radial-gradient(circle 200px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.85), transparent 70%)`,
                }}
              />
            )}

            {/* Inner Chassis & iPad Uniform Glass Borders */}
            <div
              className={cn(
                'relative size-full rounded-[31px] sm:rounded-[35px] p-[10px] sm:p-[12px] shadow-inner',
                frame.innerFrame
              )}
            >
              {/* Front Camera Dot on top bezel */}
              {showCamera && (
                <div className="absolute top-[5px] left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 z-20">
                  <div className="w-2 h-2 rounded-full bg-black border border-neutral-700/60 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-blue-500/70" />
                  </div>
                </div>
              )}

              {/* Screen Glass Surface */}
              <div
                className={cn(
                  'relative size-full overflow-hidden rounded-[22px] sm:rounded-[24px] bg-black border',
                  frame.screenBorder
                )}
              >
                {/* Screen Content Display */}
                <div className="relative size-full overflow-hidden">
                  {children}
                </div>

                {/* Diagonal Glass Specular Highlight Reflection */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] z-20" />

                {/* Bottom Home Indicator Line */}
                <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-white/30 z-30" />
              </div>
            </div>
          </div>

          {/* 3D Ground Contact Shadow */}
          <div
            className="pointer-events-none absolute -bottom-6 inset-x-8 h-8 rounded-full bg-black/60 blur-md transition-opacity duration-300"
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

Ipad3DCard.displayName = 'Ipad3DCard';
export { Ipad3DCard as IpadMockupCard };
