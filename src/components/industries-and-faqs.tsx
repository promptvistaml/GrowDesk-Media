import { INDUSTRIES_SERVED, FAQS } from '@/data/content';
import { EnquiryForm } from '@/components/enquiry-form';
import { CheckCircle } from 'lucide-react';

export function IndustriesAndFaqs() {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Industries We Serve */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#1E63FF] block mb-3 font-semibold">
              [ 04 // SECTOR EXPERTISE ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1F4D]">
              Industries where we generate proven impact.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_SERVED.map((ind, i) => (
              <div
                key={i}
                className="p-6 border border-[#E2E8F0] rounded-lg bg-[#F8FAFC] hover:border-[#1E63FF] transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-[#1E63FF]" />
                  <h3 className="font-bold text-base text-[#0B1F4D]">{ind.name}</h3>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed font-light pl-6">
                  {ind.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs and Final Enquiry Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="consultation">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#1E63FF] block font-semibold">
              [ 05 // FREQUENTLY ASKED QUESTIONS ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1F4D] leading-tight">
              Direct answers to common growth queries.
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              Every mandate starts with full alignment on business objectives, target metrics, and transparent communication protocols.
            </p>

            <div className="space-y-4 pt-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border border-[#E2E8F0] p-5 rounded-lg bg-[#F8FAFC]">
                  <h4 className="font-semibold text-sm text-[#0B1F4D] mb-2">{faq.q}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1E63FF] block font-semibold mb-1">
                [ GET A CONSULTATION ]
              </span>
              <h3 className="text-2xl font-bold text-[#0B1F4D]">
                Initiate Your Growth Brief
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Submissions route straight to our WhatsApp desk for fast response and review.
              </p>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

