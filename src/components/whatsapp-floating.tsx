'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppFloatingWidget() {
  const whatsappUrl =
    "https://wa.me/919406031522?text=Hello%20GrowDesk%20Media,%20I'm%20visiting%20your%20website%20and%20would%20like%20to%20inquire%20about%20growth%20services.";

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with GrowDesk Media on WhatsApp"
        className="group flex items-center justify-center w-12 h-12 bg-black hover:bg-neutral-900 text-white border border-neutral-700/80 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.35)] hover:shadow-[0_8px_30px_rgba(30,99,255,0.25)] hover:border-neutral-500 transition-all duration-300"
      >
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-200">
          <MessageCircle className="w-4 h-4 fill-current" />
        </div>
      </a>
    </aside>
  );
}
