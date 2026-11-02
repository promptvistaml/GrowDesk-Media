import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const phoneFrameVariants = {
  titanium: {
    outerBorder: "border-[#9d9890]",
    outerSheen: "bg-gradient-to-tr from-[#6b665f] via-[#ded8cc] to-[#5a554e]",
    innerFrame: "bg-gradient-to-b from-[#1c1b18] via-[#10100e] to-[#080807]",
    screenBorder: "border-[#2b2925]",
    islandBg: "bg-black",
  },
  spaceBlack: {
    outerBorder: "border-[#40434a]",
    outerSheen: "bg-gradient-to-tr from-[#2d3036] via-[#616875] to-[#25282e]",
    innerFrame: "bg-gradient-to-b from-[#121316] via-[#0c0d0f] to-[#050506]",
    screenBorder: "border-[#202227]",
    islandBg: "bg-black",
  },
  midnight: {
    outerBorder: "border-[#2b3342]",
    outerSheen: "bg-gradient-to-tr from-[#1b212c] via-[#48566e] to-[#161a23]",
    innerFrame: "bg-gradient-to-b from-[#0f1218] via-[#0a0c10] to-[#040507]",
    screenBorder: "border-[#1b2029]",
    islandBg: "bg-black",
  },
} as const;

export type PhoneFrameVariant = keyof typeof phoneFrameVariants;

export type PhoneMockupCardProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    variant?: PhoneFrameVariant;
    showDynamicIsland?: boolean;
    children?: ReactNode;
  }
>;

export const PhoneMockupCard = forwardRef<HTMLDivElement, PhoneMockupCardProps>(
  (
    {
      className,
      children,
      variant = "titanium",
      showDynamicIsland = true,
      ...props
    },
    ref
  ) => {
    const frame =
      phoneFrameVariants[variant] || phoneFrameVariants.titanium;

    return (
      <div
        ref={ref}
        data-slot="phone-mockup-card"
        data-variant={variant}
        className={cn(
          "relative flex flex-col items-center select-none font-sans",
          className
        )}
        {...props}
      >
        {/* Outer Titanium Chassis (Precision Edge Radius + Specular Highlights) */}
        <div
          className={cn(
            "relative w-[260px] sm:w-[280px] md:w-[300px] aspect-[9/19] rounded-[48px] p-[3px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)]",
            frame.outerSheen
          )}
        >
          {/* Inner Chassis Bezel & Antenna Lines */}
          <div
            className={cn(
              "relative size-full rounded-[45px] p-[10px] shadow-inner",
              frame.innerFrame
            )}
          >
            {/* Screen Glass Surface */}
            <div
              className={cn(
                "relative size-full overflow-hidden rounded-[36px] bg-black border",
                frame.screenBorder
              )}
            >
              {/* Dynamic Island Pill */}
              {showDynamicIsland && (
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-between px-2.5 w-[84px] h-[22px] rounded-full bg-black border border-neutral-800/80 shadow-md">
                  {/* Camera Sensor Lens */}
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-blue-950/80" />
                  </div>
                  {/* Green mic/cam activity indicator or spacer */}
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>
              )}

              {/* Screen Content */}
              <div className="relative size-full overflow-hidden">
                {children}
              </div>

              {/* Specular Diagonal Glass Glare */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] z-20" />

              {/* Home Indicator Bar */}
              <div className="pointer-events-none absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-white/40 z-30" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

PhoneMockupCard.displayName = "PhoneMockupCard";

