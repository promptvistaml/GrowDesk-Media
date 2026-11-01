'use client';

import { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface EnquiryFormProps {
  defaultService?: string;
}

export function EnquiryForm({ defaultService }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    contactMethod: '',
    businessName: '',
    serviceCategory: defaultService || 'Paid Ads & Growth',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setWhatsappUrl(data.whatsappRedirectUrl);
      } else {
        setErrorMsg(data.error || 'Failed to submit inquiry.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try connecting via WhatsApp directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#FFFFFF] border-2 border-[#1E63FF] p-8 md:p-10 rounded-lg shadow-sm text-center space-y-6">
        <div className="w-16 h-16 bg-[#1E63FF]/10 text-[#1E63FF] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#0B1F4D]">Consultation Enquiry Received!</h3>
          <p className="text-sm text-neutral-600 max-w-md mx-auto">
            Thank you, <span className="font-semibold text-[#0B1F4D]">{formData.fullName}</span>. Your enquiry has been registered in our system. Complete the final step by sending your brief directly to our official WhatsApp desk.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded font-semibold text-sm shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Continue on Official WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                contactMethod: '',
                businessName: '',
                serviceCategory: defaultService || 'Paid Ads & Growth',
                message: '',
              });
            }}
            className="w-full sm:w-auto px-5 py-3.5 text-xs text-neutral-500 hover:text-[#0B1F4D] underline font-medium"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#E2E8F0] p-6 sm:p-10 rounded-lg shadow-sm space-y-6">
      {errorMsg && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F4D] mb-2">
            Your Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Rahul Sharma"
            className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded px-4 py-3 text-sm text-[#0B1F4D] focus:outline-none focus:border-[#1E63FF] focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F4D] mb-2">
            Contact Method (Phone or Email) *
          </label>
          <input
            type="text"
            required
            value={formData.contactMethod}
            onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
            placeholder="+91 98765 43210 or name@business.com"
            className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded px-4 py-3 text-sm text-[#0B1F4D] focus:outline-none focus:border-[#1E63FF] focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F4D] mb-2">
            Business / Brand Name
          </label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            placeholder="e.g. Cleaning Karigar"
            className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded px-4 py-3 text-sm text-[#0B1F4D] focus:outline-none focus:border-[#1E63FF] focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F4D] mb-2">
            Service of Interest
          </label>
          <select
            value={formData.serviceCategory}
            onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
            className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded px-4 py-3 text-sm text-[#0B1F4D] focus:outline-none focus:border-[#1E63FF] focus:bg-white transition-all"
          >
            <option value="Brand, Content & Social Media">Brand, Content & Social Media (Reels, Branding)</option>
            <option value="Paid Ads & Growth">Paid Ads & Growth (Meta Ads, Google Ads, Leads)</option>
            <option value="Website, E-commerce & SEO">Website, E-commerce & SEO</option>
            <option value="Messaging & Automation">Messaging & Automation (WhatsApp Business API)</option>
            <option value="Offline & Consulting">Offline Marketing & Franchise Growth Strategy</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F4D] mb-2">
          Project Goals / Commercial Milestone
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe your current targets (e.g. need 50+ admissions, launching multi-city franchise, daily vehicle bookings)..."
          className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded px-4 py-3 text-sm text-[#0B1F4D] focus:outline-none focus:border-[#1E63FF] focus:bg-white transition-all resize-none"
        />
      </div>

      <div className="flex items-start gap-2.5 text-xs text-neutral-500">
        <input type="checkbox" required id="consent" className="mt-0.5 accent-[#1E63FF]" />
        <label htmlFor="consent">
          I consent to GrowDesk Media contacting me regarding my business enquiry via WhatsApp and phone in accordance with the{' '}
          <Link href="/privacy" className="text-[#1E63FF] underline">
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-[#0B1F4D] hover:bg-[#1E63FF] text-white font-semibold text-sm rounded shadow flex items-center justify-center gap-2 transition-all disabled:opacity-50"
      >
        <span>{loading ? 'Processing Enquiry...' : 'Get a Consultation & Connect to WhatsApp'}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

