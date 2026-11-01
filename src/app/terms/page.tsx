import type { Metadata } from 'next';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Terms of Engagement | GrowDesk Media',
  description: 'Terms of engagement for strategic advisory and marketing mandates with GrowDesk Media.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#000000] text-white">
      <section className="bg-[#000000] text-white pt-16 pb-16 text-center px-6 border-b border-white/10">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
          LEGAL
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white">
          Terms of Engagement
        </h1>
      </section>

      <section className="bg-[#FFFFFF] text-[#000000] py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-sm text-neutral-700 leading-relaxed font-light">
          <div>
            <h2 className="font-serif text-lg font-normal text-neutral-900 mb-2">1. Scope of Mandates</h2>
            <p>
              GrowDesk Media engages with clients through defined Statements of Work (SOW) covering brand positioning, paid acquisition, franchise modeling, or WhatsApp automations.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-normal text-neutral-900 mb-2">2. Client Inputs & Execution Dependencies</h2>
            <p>
              Campaign velocity relies upon prompt access to necessary brand collateral, credentials, ad spend budgets, and review authorizations.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-normal text-neutral-900 mb-2">3. Historical Case Studies & Metrics</h2>
            <p>
              Metrics published on this website reflect actual reported data from client leadership. Future outcomes depend on commercial market conditions and fulfillment execution.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
