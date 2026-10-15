'use client';

import { ShieldCheck, Ruler, Wrench, Clock, Check, Sparkles } from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: 'Vidro Temperado Certificado',
    norm: 'Normas ABNT NBR 14698 & 7199',
    description:
      'Tratamento térmico de ponta que confere até 5 vezes mais resistência a impactos e choque térmico. Em caso de quebra, fragmenta-se em pequenos pedaços arredondados não cortantes.',
    icon: ShieldCheck,
    highlight: 'Segurança Máxima',
  },
  {
    num: '02',
    title: 'Instalação de Alta Precisão',
    norm: 'Alinhamento Óptico Laser',
    description:
      'Nossos montadores utilizam níveis a laser milimétricos e calafetação com silicone estrutural anti-mofo, garantindo fechamento hermético e isolamento contra poeira e vento.',
    icon: Ruler,
    highlight: 'Precisão Milimétrica',
  },
  {
    num: '03',
    title: 'Ferragens em Preto Fosco & Inox',
    norm: 'Padrão Arquitetônico Nobre',
    description:
      'Puxadores maciços, perfis em alumínio anodizado e ferragens em aço inoxidável 304 que nunca oxidam ou descascam, mesmo sob a umidade contínua de banheiros e maresia.',
    icon: Wrench,
    highlight: 'Durabilidade Eterna',
  },
  {
    num: '04',
    title: 'Plantão & Suporte 24 Horas',
    norm: 'Atendimento Imediato em Campos',
    description:
      'Equipe dedicada pronta para intervir em quebras acidentais, desregulagem de portas pesadas, substituição de molas de piso e emergências comerciais 24h por dia.',
    icon: Clock,
    highlight: 'Sempre Disponível',
  },
];

export function TechnicalPillars() {
  return (
    <section id="diferenciais" className="relative py-28 bg-[#0a0a0c] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-rose-400">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span>EXCELÊNCIA TÉCNICA COMPROVADA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
            Engenharia de precisão para{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
              ambientes que exigem perfeição.
            </span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Cada esquadria e chapa de vidro passa por testes rigorosos de espessura, planicidade e estanqueidade antes e depois da fixação definitiva.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-rose-500/40 transition-all duration-500 backdrop-blur-lg hover:-translate-y-1 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                    <span className="text-3xl font-mono font-light text-neutral-500 group-hover:text-rose-500 transition-colors">
                      {pillar.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-rose-400 group-hover:text-white group-hover:bg-rose-600 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Highlight Tag */}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-medium">
                    {pillar.highlight}
                  </span>

                  {/* Title & Norm */}
                  <h3 className="text-xl font-medium text-white mt-1.5 mb-2 group-hover:text-rose-100 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-[11px] font-mono text-neutral-400 mb-4 pb-2 border-b border-white/5">
                    {pillar.norm}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-light text-neutral-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle indicator bottom */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-[11px] text-neutral-400">
                  <Check className="w-3.5 h-3.5 text-rose-500" />
                  <span>Garantia de Qualidade</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
