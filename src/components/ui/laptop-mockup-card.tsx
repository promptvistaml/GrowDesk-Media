import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

const laptopFrameVariants = {
  metallicSilver: {
    border: "border-[#d8dce2]",
    sheen: "bg-gradient-to-r from-[#b0b8c4] via-[#f3f5f8] to-[#9aa3b2]",
    lid: "bg-gradient-to-b from-[#1c1d22] via-[#111215] to-[#0a0a0c]",
    innerBezel: "border-[#32363d]",
    base: "bg-gradient-to-b from-[#e2e6ec] via-[#bcc5d1] to-[#8a94a2]",
    baseLip: "bg-gradient-to-r from-[#949fae] via-[#ffffff] to-[#7e8998]",
    notch: "bg-[#4a525d]",
    notchIndent: "bg-[#2b3038]",
  },
  spaceGray: {
    border: "border-[#5d636e]",
    sheen: "bg-gradient-to-r from-[#444a54] via-[#858d9c] to-[#3a3f47]",
    lid: "bg-gradient-to-b from-[#18191d] via-[#101114] to-[#08080a]",
    innerBezel: "border-[#2a2c33]",
    base: "bg-gradient-to-b from-[#6b7380] via-[#4b525d] to-[#2c3038]",
    baseLip: "bg-gradient-to-r from-[#414752] via-[#949eaf] to-[#363b44]",
    notch: "bg-[#252830]",
    notchIndent: "bg-[#181a20]",
  },
  titanium: {
    border: "border-[#9d9890]",
    sheen: "bg-gradient-to-r from-[#7a756d] via-[#cfc9be] to-[#6d6860]",
    lid: "bg-gradient-to-b from-[#1b1a18] via-[#11100e] to-[#090807]",
    innerBezel: "border-[#2f2d29]",
    base: "bg-gradient-to-b from-[#a49f96] via-[#7d776e] to-[#514d46]",
    baseLip: "bg-gradient-to-r from-[#6b665f] via-[#ded8cc] to-[#5a554e]",
    notch: "bg-[#3e3b36]",
    notchIndent: "bg-[#23211e]",
  },
  midnight: {
    border: "border-[#383d47]",
    sheen: "bg-gradient-to-r from-[#212630] via-[#4e586c] to-[#1c2028]",
    lid: "bg-gradient-to-b from-[#12141a] via-[#0d0e12] to-[#050608]",
    innerBezel: "border-[#1e222b]",
    base: "bg-gradient-to-b from-[#353c48] via-[#222731] to-[#14171d]",
    baseLip: "bg-gradient-to-r from-[#262c36] via-[#5c687e] to-[#1d222a]",
    notch: "bg-[#15181f]",
    notchIndent: "bg-[#0b0c10]",
  },
} as const;

export type LaptopFrameVariant = keyof typeof laptopFrameVariants;

type LaptopMockupCardProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    variant?: LaptopFrameVariant;
    children?: ReactNode;
  }
>;

export const LaptopMockupCard = forwardRef<
  HTMLDivElement,
  LaptopMockupCardProps
>(({ className, children, variant = "metallicSilver", ...props }, ref) => {
  const frame = laptopFrameVariants[variant] || laptopFrameVariants.metallicSilver;

  return (
    <div
      ref={ref}
      data-slot="laptop-mockup-card"
      data-variant={variant}
      className={cn("flex flex-col items-center font-sans select-none", className)}
      {...props}
    >
      {/* Laptop Display Lid (Chamfered edge + brushed metal border reflection) */}
      <div
        className={cn(
          "w-[340px] sm:w-[460px] md:w-[540px] lg:w-[600px] xl:w-[640px]",
          "relative overflow-hidden rounded-t-[20px] p-[2.5px] pb-0 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)]",
          frame.sheen,
        )}
      >
        {/* Inner lid bezel ring */}
        <div className={cn("rounded-t-[17px] p-[10px] pb-0 shadow-inner", frame.lid)}>
          {/* Top Camera Notch & Web camera lens dot */}
          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 z-20">
            <div className="w-2.5 h-2.5 rounded-full bg-black/90 border border-neutral-700/60 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#1e40af]/60 shadow-[0_0_2px_#3b82f6]" />
            </div>
            <div className="w-1 h-1 rounded-full bg-emerald-500/70" />
          </div>

          {/* Screen Content Container with Glossy Glare Filter */}
          <div
            className={cn(
              "relative aspect-[16/10] w-full overflow-hidden rounded-t-[8px] bg-black border",
              frame.innerBezel,
            )}
          >
            {/* Screen Content Display */}
            <div className="relative size-full overflow-hidden rounded-t-[7px]">
              {children}
            </div>

            {/* Realistic Diagonal Glass Specular Highlight Reflection */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] z-10" />
            
            {/* Subtle screen bottom bezel shadow */}
            <div className="pointer-events-none absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-black/40 to-transparent z-10" />
          </div>
        </div>
      </div>

      {/* Laptop Base (Anodized Aluminum Unibody with Precision Thumb Scoop) */}
      <div
        className={cn(
          "relative h-4 sm:h-5 md:h-5.5 lg:h-6 w-[380px] sm:w-[520px] md:w-[610px] lg:w-[680px] xl:w-[720px]",
          "rounded-b-[18px] shadow-[0_15px_35px_rgba(0,0,0,0.35),0_30px_70px_rgba(0,0,0,0.2)] p-[1.5px] pt-0",
          frame.baseLip,
        )}
      >
        <div
          className={cn(
            "relative size-full rounded-b-[17px] shadow-inner",
            frame.base,
          )}
        >
          {/* Machined Thumb Notch for Display Opening */}
          <div
            className={cn(
              "absolute top-0 left-1/2 -translate-x-1/2 h-2 sm:h-2.5 w-18 sm:w-24 md:w-28 rounded-b-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] flex items-center justify-center",
              frame.notchIndent,
            )}
            aria-hidden="true"
          >
            <div className={cn("h-[1.5px] w-12 sm:w-16 rounded-full opacity-60", frame.notch)} />
          </div>

          {/* Bottom Rubber Foot shadow gradient */}
          <div className="absolute -bottom-1 inset-x-6 h-1 bg-black/40 blur-xs rounded-full" />
        </div>
      </div>
    </div>
  );
});

LaptopMockupCard.displayName = "LaptopMockupCard";
