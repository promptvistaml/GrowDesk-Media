"use client";

import LightRays from "@/components/LightRays";
import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion,
    useMotionValue,
    useSpring,
    MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
    LaptopGrowthCard,
    WhatsAppAutomationCard,
    AnalyticsPieCard,
    StickyStrategyNote,
    MobileReelCard,
    AdsPerformanceCard,
    EcommerceBrowserCard,
    FranchiseMapCard,
    ClientReviewCard,
} from "./tunnel-elements";

const TUNNEL_ELEMENTS = [
    { component: LaptopGrowthCard, id: "laptop-growth" },
    { component: WhatsAppAutomationCard, id: "whatsapp-crm" },
    { component: AnalyticsPieCard, id: "analytics-pie" },
    { component: StickyStrategyNote, id: "sticky-strategy" },
    { component: MobileReelCard, id: "mobile-reel" },
    { component: AdsPerformanceCard, id: "ads-performance" },
    { component: EcommerceBrowserCard, id: "ecommerce-browser" },
    { component: FranchiseMapCard, id: "franchise-map" },
    { component: ClientReviewCard, id: "client-review" },
];

interface TunnelCardData {
    component: React.ComponentType;
    id: string;
    angleCos: number;
    angleSin: number;
    radiusFactorX: number;
    radiusFactorY: number;
    rotationZ: number;
    index: number;
}

const TUNNEL_CARDS: TunnelCardData[] = TUNNEL_ELEMENTS.map((item, i) => {
    const goldenAngle = i * 137.5 * (Math.PI / 180);
    const radiusFactorX = 0.28 + (i % 3) * 0.08;
    const radiusFactorY = 0.26 + (i % 2) * 0.09;

    return {
        component: item.component,
        id: item.id,
        angleCos: Math.cos(goldenAngle),
        angleSin: Math.sin(goldenAngle),
        radiusFactorX,
        radiusFactorY,
        rotationZ: (i % 2 === 0 ? 1 : -1) * (2 + (i % 4) * 1.5),
        index: i,
    };
});

const SPRING_CONFIG = { stiffness: 60, damping: 25, mass: 0.5 };

interface StageDimensions {
    width: number;
    height: number;
    isMobile: boolean;
}

function useCameraParallax(enabled: boolean) {
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const x = useSpring(rawX, SPRING_CONFIG);
    const y = useSpring(rawY, SPRING_CONFIG);

    useEffect(() => {
        if (!enabled) return;
        const onMove = (e: PointerEvent) => {
            rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
            rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, [enabled, rawX, rawY]);

    return { x, y };
}

interface TunnelCardProps {
    card: TunnelCardData;
    progress: MotionValue<number>;
    pointer: { x: MotionValue<number>; y: MotionValue<number> };
    total: number;
    stage: StageDimensions;
}

function TunnelCard({ card, progress, pointer, total, stage }: TunnelCardProps) {
    const staggerSpan = 0.55;
    const start = (card.index / total) * (1 - staggerSpan);
    const end = start + staggerSpan;

    const localProgress = useTransform(progress, [start, end], [0, 1]);

    const farZ = stage.isMobile ? -1400 : -1900;
    const nearZ = stage.isMobile ? 350 : 520;
    const z = useTransform(localProgress, [0, 1], [farZ, nearZ]);

    const opacity = useTransform(localProgress, [0, 0.15, 0.85, 0.98], [0, 1, 1, 0]);

    const scale = useTransform(localProgress, [0, 0.5, 1], [0.75, 1, 1.08]);

    const baseX = card.angleCos * (stage.width * card.radiusFactorX);
    const baseY = card.angleSin * (stage.height * card.radiusFactorY);
    const panStrength = stage.isMobile ? 20 : 45;

    const transform = useTransform(
        [z, pointer.x, pointer.y],
        ([currZ, px, py]: number[]) => {
            const offsetX = baseX - px * panStrength;
            const offsetY = baseY - py * panStrength;
            return `translate3d(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px), ${currZ}px) rotateZ(${card.rotationZ}deg)`;
        }
    );

    const Component = card.component;

    return (
        <motion.div
            style={{
                transform,
                opacity,
                scale,
                zIndex: card.index + 1,
            }}
            className="pointer-events-auto absolute left-1/2 top-1/2 will-change-transform select-none cursor-pointer filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] hover:drop-shadow-[0_25px_50px_rgba(30,99,255,0.3)] transition-[filter] duration-300"
        >
            <Component />
        </motion.div>
    );
}

export default function PerspectiveTunnelHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();

    const [stage, setStage] = useState<StageDimensions>({
        width: 1440,
        height: 900,
        isMobile: false,
    });

    useEffect(() => {
        const updateDimensions = () => {
            setStage({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile: window.innerWidth < 768,
            });
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // Sticky Scroll-Driven Progress:
    // Tracks scroll through the outer pinned container (300vh height).
    // The screen remains 100% physically stuck in place (sticky top-0)
    // while the user scrolls through the 3D tunnel cards.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 30,
        restDelta: 0.0001,
    });

    const pointer = useCameraParallax(!reduce);

    const titleScale = useTransform(smoothProgress, [0, 0.5, 1], [0.75, 1, 1.35]);
    const titleOpacity = useTransform(smoothProgress, [0, 0.12, 0.85, 1], [0.35, 1, 1, 0]);
    const promptOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

    return (
        /* Outer track container with extra scroll distance (300vh) */
        <div ref={containerRef} className="relative h-[300vh] w-full bg-black">
            {/* Pinned Sticky Viewport: Remains firmly fixed at top-0 until 300vh completes */}
            <div
                className="sticky top-0 h-[100svh] w-full overflow-hidden bg-black text-white select-none flex items-center justify-center "
                style={{
                    perspective: stage.isMobile ? "900px" : "1200px",
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Background LightRays */}
                <div className="absolute inset-0 z-0 pointer-events-auto">
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#1E63FF"
                        raysSpeed={1}
                        lightSpread={0.65}
                        rayLength={3}
                        glow={0.7}
                        haze={0.3}
                        followMouse
                        mouseInfluence={0.15}
                        clickPulse
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>

                {/* Central Anchor Typography (Futuristic × Organic Clash Display + Sacramento) */}
                <motion.div
                    style={{ scale: titleScale, opacity: titleOpacity }}
                    className="pointer-events-none z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl relative"
                >
                    <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] sm:tracking-[0.4em] text-neutral-400 mb-2 sm:mb-3">
                        BRANDS   •   LEADS   •   FRANCHISES
                    </p>

                    {/* Clash Display Bold Uppercase Heading */}
                    <h1 className="font-clash text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold tracking-[-0.04em] leading-[0.92] text-white uppercase drop-shadow-sm">
                        THINK BIG
                    </h1>

                    {/* Curvy Snell Roundhand Script with tight negative margin */}
                    <span className="font-script text-4xl sm:text-6xl md:text-7xl lg:text-[78px] text-[#7299FF] font-bold tracking-normal opacity-95 leading-[1.0] -mt-3 sm:-mt-5 md:-mt-6 select-none lowercase">
                        dream freely.
                    </span>

                    <p className="mt-4 sm:mt-5 max-w-2xl text-xs sm:text-base font-light text-neutral-400">
                        From brand positioning to daily lead generation.
                    </p>
                </motion.div>



                {/* 3D Z-Space Plane */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {TUNNEL_CARDS.map((card, i) => (
                        <TunnelCard
                            key={i}
                            card={card}
                            progress={smoothProgress}
                            pointer={pointer}
                            total={TUNNEL_CARDS.length}
                            stage={stage}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
