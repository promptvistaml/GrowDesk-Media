'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppFloatingWidget() {
  const whatsappUrl = "https://wa.me/?text=Hello%20GrowDesk%20Media,%20I'm%20visiting%20your%20website%20and%20would%20like%20to%20inquire%20about%20growth%20services.";

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with GrowDesk Media on WhatsApp"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-medium text-xs tracking-wide"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-semibold">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}

