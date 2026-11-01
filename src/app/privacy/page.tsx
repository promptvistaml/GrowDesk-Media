import type { Metadata } from 'next';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | GrowDesk Media',
  description: 'GrowDesk Media Privacy Policy regarding communications and WhatsApp data transmission.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#000000] text-white">
      <section className="bg-[#000000] text-white pt-16 pb-16 text-center px-6 border-b border-white/10">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
          LEGAL
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white">
          Privacy Policy
        </h1>
      </section>

      <section className="bg-[#FFFFFF] text-[#000000] py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-sm text-neutral-700 leading-relaxed font-light">
          <div>
            <h2 className="font-serif text-lg font-normal text-neutral-900 mb-2">1. Information Collection</h2>
            <p>
              When submitting a consultation request on GrowDesk Media, we collect your name, business name, service of interest, and primary contact details (phone number or email).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-normal text-neutral-900 mb-2">2. Purpose & WhatsApp Routing</h2>
            <p>
              Contact data is collected strictly to review your commercial brief, facilitate conversations on our official WhatsApp desk, and provide advisory proposals.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-normal text-neutral-900 mb-2">3. Storage & Confidentiality</h2>
            <p>
              Inquiries are handled in strict commercial confidence and will never be sold, distributed, or shared with third-party advertising brokers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
