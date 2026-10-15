'use client';

import { ArrowDown, MessageCircle, Sparkles, Shield, ChevronRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[640px] flex items-center justify-between overflow-hidden bg-[#070708]">
      {/* Responsive Background Image (100dvh - Desktop / Mobile Switch) */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile Viewport: fundoinicialparamobile.jpg */}
          <source media="(max-width: 768px)" srcSet="/fundoinicialparamobile.jpg" />
          {/* Desktop / Large Screens: FUNDOINICIAL.jpg */}
          <img
            src="/FUNDOINICIAL.jpg"
            alt="Fachada moderna envidraçada - Top Vidros"
            className="w-full h-full object-cover object-center transform transition-transform duration-1000 scale-[1.02]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Cinematic Architectural Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070708]/90 via-[#070708]/60 to-[#070708]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-[#070708]/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#070708]/20 to-[#070708]/70" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 pt-20 pb-12 flex flex-col justify-center h-full">
        <div className="max-w-3xl space-y-6 sm:space-y-8 pl-0 lg:pl-10">
          
          {/* Over-title Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-md text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_10px_#e11d48]" />
            <span>ARQUITETURA EM VIDRO · CAMPOS DOS GOYTACAZES</span>
          </div>

          {/* Main Headline H1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.12]">
            Projetos em vidro que{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
              transformam espaços
            </span>{' '}
            e valorizam a luz natural.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl font-light text-neutral-300 max-w-2xl leading-relaxed">
            Box, portas, janelas panorâmicas, espelhos e manutenção especializada com precisão milimétrica e acabamento nobre para residências e empresas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 sm:pt-4">
            <a
              href="https://wa.me/5522998227120?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20exclusiva%20com%20a%20Top%20Vidros."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 bg-rose-600 hover:bg-rose-500 shadow-[0_0_30px_rgba(225,29,72,0.45)] hover:shadow-[0_0_40px_rgba(225,29,72,0.65)] hover:scale-[1.02] active:scale-95 group"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Fazer Cotação no WhatsApp</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-medium tracking-wide text-neutral-200 hover:text-white transition-all duration-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-white/30 backdrop-blur-md active:scale-95"
            >
              <span>Ver Catálogo de Serviços</span>
              <ArrowDown className="w-4 h-4 text-neutral-400 animate-bounce" />
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-6 sm:pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 max-w-xl">
            <div>
              <div className="text-xl sm:text-2xl font-semibold text-white tracking-tight">100%</div>
              <div className="text-xs text-neutral-400 tracking-wide font-light">Vidro Certificado ABNT</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-semibold text-white tracking-tight">24h</div>
              <div className="text-xs text-neutral-400 tracking-wide font-light">Plantão & Reparos</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-xl sm:text-2xl font-semibold text-rose-400 tracking-tight">5.0 ★★★★★</div>
              <div className="text-xs text-neutral-400 tracking-wide font-light">Avaliação Máxima Google</div>
            </div>
          </div>

        </div>
      </div>

      {/* Editorial Bottom Architectural Rail */}
      <div className="absolute bottom-6 left-0 right-0 z-10 hidden sm:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-400">
          <div className="flex items-center gap-6">
            <span>COORD: 21°45'51"S 41°19'44"W</span>
            <span className="hidden md:inline text-neutral-600">|</span>
            <span className="hidden md:inline">CAMPOS DOS GOYTACAZES · RJ</span>
          </div>
          <a
            href="#servicos"
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            <span className="uppercase tracking-widest text-[10px]">EXPLORAR PROJETOS</span>
            <ArrowDown className="w-3.5 h-3.5 text-rose-500 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
