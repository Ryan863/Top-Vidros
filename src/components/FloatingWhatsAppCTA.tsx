'use client';

import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppCTAProps {
  phone?: string;
  defaultMessage?: string;
}

export function FloatingWhatsAppCTA({
  phone = '5522998227120',
  defaultMessage = 'Olá! Gostaria de tirar dúvidas e solicitar um orçamento de vidro.',
}: FloatingWhatsAppCTAProps) {
  const encodedMsg = encodeURIComponent(defaultMessage);
  const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

  return (
    <aside
      aria-label="Atendimento Rápido WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-auto sm:px-6 sm:h-12 bg-rose-600 hover:bg-rose-500 text-white rounded-full shadow-[0_4px_25px_rgba(225,29,72,0.45)] hover:shadow-[0_4px_35px_rgba(225,29,72,0.65)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20 backdrop-blur-md"
      >
        {/* Pulsing Attention Ping */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-400" />
        </span>

        <MessageCircle className="w-5 h-5 sm:mr-2 stroke-[2.2] fill-current" />
        <span className="hidden sm:inline font-semibold text-xs tracking-wider uppercase">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
