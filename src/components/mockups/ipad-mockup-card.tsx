import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const ipadFrameVariants = {
  spaceBlack: {
    outerBorder: "border-[#363a42]",
    outerSheen: "bg-gradient-to-tr from-[#25282e] via-[#525866] to-[#1e2025]",
    innerFrame: "bg-gradient-to-b from-[#121316] via-[#0d0e10] to-[#070709]",
    screenBorder: "border-[#202227]",
  },
  metallicSilver: {
    outerBorder: "border-[#d0d4dc]",
    outerSheen: "bg-gradient-to-tr from-[#98a2b3] via-[#f3f5f8] to-[#8892a2]",
    innerFrame: "bg-gradient-to-b from-[#1c1d21] via-[#101113] to-[#0a0a0c]",
    screenBorder: "border-[#2c2f37]",
  },
} as const;

export type IpadFrameVariant = keyof typeof ipadFrameVariants;

export type IpadMockupCardProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    variant?: IpadFrameVariant;
    showCamera?: boolean;
    children?: ReactNode;
  }
>;

export const IpadMockupCard = forwardRef<HTMLDivElement, IpadMockupCardProps>(
  (
    {
      className,
      children,
      variant = "spaceBlack",
      showCamera = true,
      ...props
    },
    ref
  ) => {
    const frame =
      ipadFrameVariants[variant] || ipadFrameVariants.spaceBlack;

    return (
      <div
        ref={ref}
        data-slot="ipad-mockup-card"
        data-variant={variant}
        className={cn(
          "relative flex flex-col items-center select-none font-sans",
          className
        )}
        {...props}
      >
        {/* Outer Aluminum Bezel */}
        <div
          className={cn(
            "relative w-[340px] sm:w-[440px] md:w-[500px] lg:w-[540px] aspect-[4/3] rounded-[34px] sm:rounded-[38px] p-[3px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45),0_10px_25px_rgba(0,0,0,0.25)]",
            frame.outerSheen
          )}
        >
          {/* Inner Chassis & Symmetrical iPad Borders */}
          <div
            className={cn(
              "relative size-full rounded-[31px] sm:rounded-[35px] p-[10px] sm:p-[12px] shadow-inner",
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
                "relative size-full overflow-hidden rounded-[22px] sm:rounded-[24px] bg-black border",
                frame.screenBorder
              )}
            >
              {/* Screen Content Display */}
              <div className="relative size-full overflow-hidden">
                {children}
              </div>

              {/* Diagonal Glass Specular Highlight Reflection */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] z-20" />

              {/* Bottom Home Indicator Line */}
              <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-white/30 z-30" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

IpadMockupCard.displayName = "IpadMockupCard";

