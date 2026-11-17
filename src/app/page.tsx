import PerspectiveTunnelHero from "@/components/ui/perspective-tunnel-hero";
import { HowWeScaleSection } from "@/components/how-we-scale-section";
import NeuroNoiseStats from "@/components/ui/neuro-noise-stats";
import { FlightClients } from "@/components/flight-clients";
import { FlightTestimonials } from "@/components/flight-testimonials";
import { FlightAiEra } from "@/components/flight-ai-era";
import { RegionalCoverage } from "@/components/regional-coverage";
import Faq05 from "@/components/ui/faq-05";
import { ContactSection } from "@/components/ui/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#000000]">
      {/* 3D Perspective Tunnel Hero Sequence */}
      <PerspectiveTunnelHero />

      {/* Client Marquee: Placed directly after landing page hero */}
      <FlightClients />

      {/* Metrics Impact Section */}
      <NeuroNoiseStats
        eyebrow=""
        title={
          <div className="flex flex-col">
            <span className="font-clash text-2xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] text-white leading-[0.95] uppercase">
              Impact built around
            </span>
            <span className="font-script text-3xl sm:text-5xl md:text-6xl text-[#7299FF] font-bold opacity-95 leading-[1.0] -mt-2 sm:-mt-3 select-none lowercase">
              measurable business outcomes.
            </span>
          </div>
        }
        stats={[
          { value: "152", label: "School admissions in two months" },
          { value: "45+", label: "Pharmacy admissions in two months" },
          { value: "2×", label: "Reported sales & follower velocity" },
          { value: "600+", label: "Verified student contacts captured" },
        ]}
      />

      {/* Sticky Scroll-Jacked About Us & Business Pillars Showcase (Same #F6F9FD Background) */}
      <HowWeScaleSection />

      <FlightTestimonials />
      <FlightAiEra />
      <RegionalCoverage />
      <Faq05 />
      <ContactSection />
      <Footer />
    </main>
  );
}
