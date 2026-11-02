import PerspectiveTunnelHero from "@/components/ui/perspective-tunnel-hero";
import NeuroNoiseStats from "@/components/ui/neuro-noise-stats";
import { FlightManifesto } from "@/components/flight-manifesto";
import { FlightClients } from "@/components/flight-clients";
import { FlightTestimonials } from "@/components/flight-testimonials";
import { FlightAiEra } from "@/components/flight-ai-era";
import Faq05 from "@/components/ui/faq-05";
import { ContactSection } from "@/components/ui/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#000000]">
      {/* 3D Perspective Tunnel Hero Sequence */}
      <PerspectiveTunnelHero />

      {/* Metrics Section: Displayed right after */}
      <NeuroNoiseStats
        eyebrow=""
        title="Impact built around measurable business outcomes"
        stats={[
          { value: "152", label: "School admissions in two months" },
          { value: "45+", label: "Pharmacy admissions in two months" },
          { value: "2×", label: "Reported sales & follower velocity" },
          { value: "600+", label: "Verified student contacts captured" },
        ]}
      />

      <FlightManifesto />
      <div className="h-8 sm:h-12 md:h-16 bg-[#F6F9FD] w-full" />
      <FlightClients />
      <FlightTestimonials />
      <FlightAiEra />
      <Faq05 />
      <ContactSection />
      <Footer />
    </main>
  );
}
