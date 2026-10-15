'use client';

import { Star, CheckCircle, Quote } from 'lucide-react';

const testimonials = [
  {
    author: 'Bernardo Gunther',
    project: 'Fechamento de Varanda Gourmet & Portas de Correr',
    rating: 5,
    date: 'Setembro 2026',
    comment:
      'Serviço impecável na instalação dos vidros da minha varanda gourmet. O alinhamento das folhas é perfeito, desliza com suavidade e o acabamento em preto fosco combinou exatamente com o projeto da arquiteta.',
  },
  {
    author: 'Juliano Luchini',
    project: 'Box até o Teto Black & Espelho com LED',
    rating: 5,
    date: 'Outubro 2026',
    comment:
      'Fizeram o box até o teto com perfil preto e espelhos com LED no meu apartamento no Pelinca. Ficou cinematográfico. Pontuais, limpos e muito atenciosos na instalação.',
  },
  {
    author: 'Priscila de Paula',
    project: 'Espelhos Orgânicos Bisotados para Lavabo',
    rating: 5,
    date: 'Agosto 2026',
    comment:
      'Atendimento rápido, educado e preço justo pela qualidade extrema do material. O corte orgânico do espelho ficou uma verdadeira obra de arte. Recomendo de olhos fechados em Campos!',
  },
  {
    author: 'Guilherme S.A.',
    project: 'Manutenção de Emergência em Porta de Vidro Pesada',
    rating: 5,
    date: 'Outubro 2026',
    comment:
      'Precisava de manutenção urgente numa porta de vidro pesada da minha clínica que estava arrastando no chão. O plantão 24h atendeu super rápido e trocou a mola de piso no mesmo dia.',
  },
  {
    author: 'Lucas Segala',
    project: 'Janelas 4 Folhas & Guarda-Corpo de Vidro',
    rating: 5,
    date: 'Julho 2026',
    comment:
      'Qualidade do vidro temperado excelente e pontualidade exemplar. Cumpriram rigorosamente o prazo de fabricação e montagem. Mão de obra de alto nível.',
  },
  {
    author: 'Ester Antonia',
    project: 'Divisória de Vidro Acústico & Espelho de Parede Inteira',
    rating: 5,
    date: 'Setembro 2026',
    comment:
      'Os espelhos do meu estúdio e a divisória de vidro temperado ficaram fantásticos. Todo cliente que entra elogia o acabamento. A equipe da Top Vidros é nota mil.',
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative py-28 bg-[#070708] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Overall Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-rose-400">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>EXPERIÊNCIA COMPROVADA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
              A confiança de quem já transformou seu espaço com a{' '}
              <span className="font-semibold text-rose-500">Top Vidros.</span>
            </h2>
          </div>

          {/* Rating Pill */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <div className="text-3xl font-bold text-white tracking-tight">5.0</div>
            <div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-neutral-400 mt-0.5 block font-light">
                Avaliações Verificadas no Google
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="group relative flex flex-col justify-between p-7 rounded-3xl bg-white/[0.035] hover:bg-white/[0.06] border border-white/10 hover:border-rose-500/40 transition-all duration-400 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-neutral-600 group-hover:text-rose-500/50 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-sm font-light text-neutral-300 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Project Info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-white">
                    <span>{t.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-[11px] text-neutral-400 font-light truncate max-w-[200px]">
                    {t.project}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
