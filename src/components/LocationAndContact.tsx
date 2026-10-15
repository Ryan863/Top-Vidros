'use client';

import { MapPin, Navigation, Phone, Mail, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

export function LocationAndContact() {
  const addressText = 'R. Benedito Queiroz, 92 - Parque Turf Club, Campos dos Goytacazes - RJ, 28024-040';
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'R. Benedito Queiroz, 92, Parque Turf Club, Campos dos Goytacazes - RJ, 28024-040'
  )}`;

  return (
    <section id="localizacao" className="relative py-28 bg-[#0a0a0c] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-rose-400">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span>ATENDIMENTO & LOCALIZAÇÃO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
            Estamos prontos para{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
              atender o seu projeto.
            </span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Visite nosso endereço em Campos dos Goytacazes ou acione nossa equipe pelo WhatsApp para visita técnica e orçamento no local.
          </p>
        </div>

        {/* Main Location Card in Technical Glassmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Side (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] space-y-8">
            <div className="space-y-6">
              
              {/* Plantão status badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Atendimento & Plantão 24 Horas</span>
              </div>

              {/* Address Block */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>Sede Top Vidros</span>
                </div>
                <p className="text-base sm:text-lg text-white font-normal leading-relaxed">
                  {addressText}
                </p>
              </div>

              {/* Direct GPS Action */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 group"
              >
                <Navigation className="w-4 h-4 text-rose-400 group-hover:rotate-45 transition-transform" />
                <span>Traçar Rota no Google Maps</span>
              </a>

              {/* Quick Contacts List */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                {/* Phone / WhatsApp */}
                <a
                  href="https://wa.me/5522998227120?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20com%20a%20Top%20Vidros."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400 font-mono uppercase">WhatsApp & Fone</div>
                      <div className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">
                        +55 (22) 99822-7120
                      </div>
                    </div>
                  </div>
                  <MessageCircle className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* Email */}
                <a
                  href="mailto:topvidroscampos@gmail.com"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400 font-mono uppercase">E-mail Comercial</div>
                      <div className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">
                        topvidroscampos@gmail.com
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/top_vidros3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-300">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400 font-mono uppercase">Instagram Oficial</div>
                      <div className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">
                        @top_vidros3
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </a>
              </div>

            </div>

            {/* Direct High Priority CTA */}
            <a
              href="https://wa.me/5522998227120?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20t%C3%A9cnica%20da%20Top%20Vidros."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(225,29,72,0.4)] hover:shadow-[0_0_35px_rgba(225,29,72,0.6)] transition-all duration-300 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Visita Técnica Gratuita</span>
            </a>

          </div>

          {/* Interactive Map Side (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 relative min-h-[380px] lg:min-h-full">
            <iframe
              title="Localização Top Vidros Campos dos Goytacazes"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.502937375232!2d-41.331165!3d-21.760775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbbcaaa47e24a49%3A0xb36f2f357f89b986!2sR.%20Benedito%20Queiroz%2C%2092%20-%20Parque%20Turf%20Club%2C%20Campos%20dos%20Goytacazes%20-%20RJ%2C%2028024-040!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.85)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] lg:min-h-full"
            />
            
            {/* Overlay badge with location details */}
            <div className="absolute top-4 left-4 p-4 rounded-2xl bg-[#070708]/90 backdrop-blur-md border border-white/10 max-w-xs shadow-xl pointer-events-none">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span>Top Vidros - Parque Turf Club</span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Atendimento em toda a cidade de Campos e região norte fluminense.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
