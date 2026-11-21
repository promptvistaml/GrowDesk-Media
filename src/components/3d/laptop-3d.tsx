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

export const laptopFrameVariants = {
  metallicSilver: {
    lidBorder: 'border-[#cbd5e1]',
    lidSheen:
      'bg-gradient-to-r from-[#94a3b8] via-[#e2e8f0] to-[#64748b]',
    lidHighlight:
      'bg-gradient-to-b from-white/70 via-white/10 to-transparent',
    innerBezel: 'border-[#1e2025]',
    baseSurface:
      'bg-gradient-to-b from-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8]',
    baseLip:
      'bg-gradient-to-r from-[#94a3b8] via-white to-[#64748b]',
    baseEdge3D:
      'bg-gradient-to-b from-[#64748b] to-[#334155]',
    notch: 'bg-[#475569]',
    notchIndent: 'bg-[#1e293b]',
    trackpad:
      'bg-gradient-to-b from-[#cbd5e1]/80 to-[#94a3b8]/70 border-[#94a3b8]/60',
    speaker: '#64748b',
    keyboardWell: 'bg-[#0f1115]',
  },
  titanium: {
    lidBorder: 'border-[#a8a29e]',
    lidSheen:
      'bg-gradient-to-r from-[#78716c] via-[#e7e5e4] to-[#57534e]',
    lidHighlight:
      'bg-gradient-to-b from-white/60 via-white/15 to-transparent',
    innerBezel: 'border-[#292524]',
    baseSurface:
      'bg-gradient-to-b from-[#d6d3d1] via-[#a8a29e] to-[#78716c]',
    baseLip:
      'bg-gradient-to-r from-[#78716c] via-[#f5f5f4] to-[#57534e]',
    baseEdge3D:
      'bg-gradient-to-b from-[#57534e] to-[#292524]',
    notch: 'bg-[#57534e]',
    notchIndent: 'bg-[#1c1917]',
    trackpad:
      'bg-gradient-to-b from-[#a8a29e]/80 to-[#78716c]/70 border-[#78716c]/60',
    speaker: '#57534e',
    keyboardWell: 'bg-[#141210]',
  },
  spaceGray: {
    lidBorder: 'border-[#475569]',
    lidSheen:
      'bg-gradient-to-r from-[#334155] via-[#64748b] to-[#1e293b]',
    lidHighlight:
      'bg-gradient-to-b from-white/30 via-white/5 to-transparent',
    innerBezel: 'border-[#0f172a]',
    baseSurface:
      'bg-gradient-to-b from-[#475569] via-[#334155] to-[#1e293b]',
    baseLip:
      'bg-gradient-to-r from-[#334155] via-[#94a3b8] to-[#1e293b]',
    baseEdge3D:
      'bg-gradient-to-b from-[#1e293b] to-[#0f172a]',
    notch: 'bg-[#334155]',
    notchIndent: 'bg-[#0f172a]',
    trackpad:
      'bg-gradient-to-b from-[#334155]/80 to-[#1e293b]/70 border-[#1e293b]/60',
    speaker: '#334155',
    keyboardWell: 'bg-[#0a0f1d]',
  },
  midnight: {
    lidBorder: 'border-[#1e293b]',
    lidSheen:
      'bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#020617]',
    lidHighlight:
      'bg-gradient-to-b from-sky-400/20 via-transparent to-transparent',
    innerBezel: 'border-[#020617]',
    baseSurface:
      'bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#020617]',
    baseLip:
      'bg-gradient-to-r from-[#0f172a] via-[#334155] to-[#020617]',
    baseEdge3D:
      'bg-gradient-to-b from-[#0f172a] to-[#020617]',
    notch: 'bg-[#1e293b]',
    notchIndent: 'bg-[#020617]',
    trackpad:
      'bg-gradient-to-b from-[#0f172a]/90 to-[#020617]/80 border-[#1e293b]/40',
    speaker: '#1e293b',
    keyboardWell: 'bg-[#020617]',
  },
} as const;

export type LaptopFrameVariant = keyof typeof laptopFrameVariants;

export interface Laptop3DCardProps
  extends ComponentPropsWithoutRef<'div'> {
  variant?: LaptopFrameVariant;
  children?: ReactNode;
}

export const Laptop3DCard = forwardRef<HTMLDivElement, Laptop3DCardProps>(
  ({ className, children, variant = 'metallicSilver', ...props }, ref) => {
    const frame =
      laptopFrameVariants[variant] || laptopFrameVariants.metallicSilver;

    const containerRef = useRef<HTMLDivElement>(null);

    // Direct ref-based smooth tilt without triggering React state re-renders (preserves 60fps video playback)
    const handleMouseMove = useCallback(
      (e: ReactMouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;

        const tiltY = (px - 0.5) * 7;
        const tiltX = (0.5 - py) * 5;

        containerRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1, 1, 1)`;
      },
      []
    );

    const handleMouseLeave = useCallback(() => {
      if (containerRef.current) {
        containerRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      }
    }, []);

    return (
      <div
        ref={ref}
        data-slot="laptop-3d-card"
        data-variant={variant}
        className={cn(
          'relative flex flex-col items-center select-none font-sans',
          className
        )}
        style={{ perspective: 1400 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Interactive 3D Parallax Rig with smooth, calm transitions */}
        <div
          ref={containerRef}
          className="relative flex flex-col items-center transition-transform duration-700 ease-out will-change-transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          }}
        >
          {/* ─────────────────────────────────────────────────────────────
              1. 3D DISPLAY LID (Angled slightly backward in 3D perspective)
              ───────────────────────────────────────────────────────────── */}
          <div
            className={cn(
              'relative w-[320px] sm:w-[420px] md:w-[500px] lg:w-[540px] xl:w-[580px]',
              'rounded-t-[20px] p-[2.5px] pb-0',
              'shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),0_10px_20px_-5px_rgba(0,0,0,0.4)]',
              'transition-all duration-300',
              frame.lidSheen
            )}
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(14px) rotateX(-6deg)',
            }}
          >
            {/* Specular metallic highlight glare across the aluminum lid rim */}
            <div
              className={cn(
                'pointer-events-none absolute inset-0 rounded-t-[20px] opacity-70 transition-opacity duration-300',
                frame.lidHighlight
              )}
            />

            {/* Metallic reflection glint overlay */}
            <div
              className="pointer-events-none absolute inset-0 rounded-t-[20px] mix-blend-overlay opacity-30 bg-gradient-to-tr from-transparent via-white/50 to-transparent"
            />

            {/* Inner Black Bezel Housing */}
            <div className="relative rounded-t-[17px] bg-[#0c0d10] p-[9px] pb-0 shadow-inner">
              {/* FaceTime HD Camera Notch with lens sensor dot */}
              <div className="absolute top-[5px] left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-1.5 px-3 py-0.5 rounded-b-md bg-[#000000] shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-700/60 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-blue-500/80 shadow-[0_0_2px_#3b82f6]" />
                </div>
                <div className="w-1 h-1 rounded-full bg-emerald-500/80" />
              </div>

              {/* Ultra-Retina Liquid Screen Container (16:10 Apple standard) */}
              <div
                className={cn(
                  'relative aspect-[16/10] w-full overflow-hidden rounded-t-[8px] bg-black border',
                  frame.innerBezel
                )}
              >
                {/* Real Screen Content / Video */}
                <div className="relative size-full overflow-hidden rounded-t-[7px]">
                  {children}
                </div>

                {/* Diagonal Glass Specular Highlight Reflection */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.14] z-20" />

                {/* Subtle bottom screen hinge shadow */}
                <div className="pointer-events-none absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-black/50 to-transparent z-20" />
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              2. 3D ALUMINUM BASE CHASSIS (Keyboard Deck & Trackpad)
              Extruded forward in 3D perspective with realistic unibody depth
              ───────────────────────────────────────────────────────────── */}
          <div
            className={cn(
              'relative h-5 sm:h-6 md:h-7 lg:h-8 w-[360px] sm:w-[480px] md:w-[570px] lg:w-[610px] xl:w-[660px]',
              'rounded-b-[22px] p-[2px] pt-0',
              'shadow-[0_20px_40px_rgba(0,0,0,0.5),0_35px_80px_rgba(0,0,0,0.35)]',
              frame.baseLip
            )}
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(-6px) rotateX(64deg)',
              transformOrigin: 'top center',
            }}
          >
            {/* Main Anodized Aluminum Keyboard Deck Surface */}
            <div
              className={cn(
                'relative size-full rounded-b-[20px] shadow-inner flex items-center justify-between px-6 sm:px-10',
                frame.baseSurface
              )}
            >
              {/* Left Laser-Milled Speaker Grille */}
              <div className="hidden sm:flex flex-col gap-0.5 opacity-40">
                <div className="w-8 sm:w-12 h-[1px] bg-neutral-700 rounded-full" />
                <div className="w-8 sm:w-12 h-[1px] bg-neutral-700 rounded-full" />
                <div className="w-8 sm:w-12 h-[1px] bg-neutral-700 rounded-full" />
              </div>

              {/* Center CNC Machined Thumb Scoop */}
              <div
                className={cn(
                  'absolute top-0 left-1/2 -translate-x-1/2 h-2.5 sm:h-3.5 w-20 sm:w-28 md:w-32 rounded-b-xl shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] flex items-center justify-center',
                  frame.notchIndent
                )}
                aria-hidden="true"
              >
                <div
                  className={cn(
                    'h-[1.5px] w-14 sm:w-20 rounded-full opacity-60',
                    frame.notch
                  )}
                />
              </div>

              {/* Force Touch Glass Trackpad representation */}
              <div
                className={cn(
                  'absolute bottom-1 sm:bottom-1.5 left-1/2 -translate-x-1/2 h-2.5 sm:h-3.5 w-24 sm:w-36 md:w-44 rounded-sm border shadow-xs',
                  frame.trackpad
                )}
              />

              {/* Right Laser-Milled Speaker Grille */}
              <div className="hidden sm:flex flex-col gap-0.5 opacity-40">
                <div className="w-8 sm:w-12 h-[1px] bg-neutral-700 rounded-full" />
                <div className="w-8 sm:w-12 h-[1px] bg-neutral-700 rounded-full" />
                <div className="w-8 sm:w-12 h-[1px] bg-neutral-700 rounded-full" />
              </div>
            </div>

            {/* 3D Physical Extruded Aluminum Edge (Thickness profile) */}
            <div
              className={cn(
                'absolute -bottom-1.5 inset-x-3 h-2 rounded-b-xl opacity-90',
                frame.baseEdge3D
              )}
              style={{ transform: 'translateZ(-4px)' }}
            />
          </div>

          {/* ─────────────────────────────────────────────────────────────
              3. SOFT CONTACT SHADOW (Grounded onto surface)
              ───────────────────────────────────────────────────────────── */}
          <div
            className="pointer-events-none absolute -bottom-6 inset-x-8 h-8 rounded-full bg-black/60 blur-md transition-opacity duration-300"
            style={{
              transform: 'translateZ(-20px)',
              opacity: 0.6,
            }}
          />
        </div>
      </div>
    );
  }
);

Laptop3DCard.displayName = 'Laptop3DCard';
export { Laptop3DCard as LaptopMockupCard };
