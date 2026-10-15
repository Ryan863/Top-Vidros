'use client';

import { MessageCircle } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

export function SocialRail() {
  return (
    <aside
      aria-label="Canais Sociais Top Vidros"
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-5"
    >
      {/* Top Subtle Line */}
      <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/20" />

      {/* Vertical Label */}
      <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-400 select-none py-1 vertical-text">
        SIGA-NOS
      </span>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5522998227120?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Top%20Vidros%20e%20gostaria%20de%20atendimento."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Top Vidros +55 22 99822-7120"
        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.04] hover:bg-rose-600/20 border border-white/10 hover:border-rose-500/60 backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]"
      >
        <MessageCircle className="w-4 h-4 text-neutral-300 group-hover:text-rose-400 transition-colors" />
        
        {/* Floating Tooltip */}
        <span className="absolute left-14 px-3 py-1.5 rounded-lg bg-[#0e0e11]/90 border border-white/10 text-[11px] font-medium text-white whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 backdrop-blur shadow-xl">
          WhatsApp: (22) 99822-7120
        </span>
      </a>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/top_vidros3"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram @top_vidros3"
        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.04] hover:bg-rose-600/20 border border-white/10 hover:border-rose-500/60 backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]"
      >
        <InstagramIcon className="w-4 h-4 text-neutral-300 group-hover:text-rose-400 transition-colors" />

        {/* Floating Tooltip */}
        <span className="absolute left-14 px-3 py-1.5 rounded-lg bg-[#0e0e11]/90 border border-white/10 text-[11px] font-medium text-white whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 backdrop-blur shadow-xl">
          Instagram: @top_vidros3
        </span>
      </a>

      {/* Bottom Subtle Line */}
      <div className="w-[1px] h-12 bg-gradient-to-t from-transparent to-white/20" />
    </aside>
  );
}
