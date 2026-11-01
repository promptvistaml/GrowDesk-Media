'use client';

import { EnquiryForm } from '@/components/enquiry-form';
import Link from 'next/link';

export function FlightConnect() {
  return (
    <section id="connect" className="bg-[#FFFFFF] text-[#000000] py-24 md:py-32 px-6 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight">
            Connect With Us
          </h2>
          <p className="text-sm text-neutral-500 font-light max-w-lg mx-auto">
            All inquiries are directly forwarded to our official WhatsApp desk for prompt, structured consultation.
          </p>
        </div>

        <EnquiryForm />
      </div>
    </section>
  );
}

