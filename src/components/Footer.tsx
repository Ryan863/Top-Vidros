'use client';

import { ArrowUp, MessageCircle, MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050506] border-t border-white/10 text-neutral-400 font-light text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.06] border border-white/15">
                <span className="w-2.5 h-2.5 rounded-sm bg-rose-600 shadow-[0_0_10px_#e11d48]" />
              </div>
              <div className="flex items-center gap-1.5 font-bold text-xl tracking-widest text-white uppercase">
                <span>TOP</span>
                <span className="text-rose-500 font-light">/</span>
                <span className="font-light">VIDROS</span>
              </div>
            </a>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              "Transparência, elegância e segurança sob medida para o seu ambiente."
              Arquitetura em vidro, vidros temperados, esquadrias e espelhos de luxo em Campos dos Goytacazes - RJ.
            </p>

            <div className="flex items-center gap-3 text-xs text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Plantão Emergencial 24h Disponível</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-medium">
              Navegação
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Catálogo de Serviços</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais Técnicos</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos Verificados</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Localização & Rota</a>
              </li>
            </ul>
          </div>

          {/* Specialties Column */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-medium">
              Especialidades
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>Box até o Teto (Linha Black)</li>
              <li>Portas & Divisórias de Vidro</li>
              <li>Espelhos Orgânicos & com LED</li>
              <li>Janelas & Fachadas Panorâmicas</li>
              <li>Vidros Temperados e Laminados</li>
              <li>Manutenção e Troca de Molas</li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-medium">
              Contato Direto
            </div>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>R. Benedito Queiroz, 92 - Parque Turf Club, Campos - RJ</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <span>+55 (22) 99822-7120</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                <span>topvidroscampos@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-rose-500 shrink-0" />
                <a
                  href="https://www.instagram.com/top_vidros3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @top_vidros3
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Editorial Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Top Vidros. Todos os direitos reservados.</span>
            <span className="hidden sm:inline">·</span>
            <span>ABNT NBR 14698 / NBR 7199</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao início da página"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white transition-colors border border-white/10 group"
          >
            <span className="text-[11px] uppercase tracking-wider">Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-rose-500 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
