'use client';

import { useState } from 'react';
import { Star, CheckCircle, Quote, CornerDownRight } from 'lucide-react';

interface Review {
  author: string;
  meta?: string;
  date: string;
  comment: string;
  reply: string;
  truncated?: boolean;
}

const testimonials: Review[] = [
  {
    author: 'Michelle Queiroz',
    meta: '1 avaliação · 6 fotos',
    date: '2 meses atrás',
    comment:
      'Adorei o serviço, profissionalismo e pontual com o combinado, sempre nos dando satisfação do serviço e atendimento top, sempre respondendo e atendendo nossas mensagens. Único profissional que não deixou a desejar na minha obra... Indico e próxima obra contrato novamente 👏👏👏',
    reply:
      'Fico imensamente feliz em poder atendê-los com excelência!!! Procuramos sempre fazer um bom atendimento desde o primeiro contato até a execução do serviço. Conte sempre conosco.',
  },
  {
    author: 'Bárbara Nogueira',
    meta: '3 avaliações · 4 fotos',
    date: 'uma semana atrás',
    comment:
      'Excelente atendimento e serviço! Fiquei muito satisfeita com os boxes do meu banheiro. Desde o primeiro contato, foram muito atenciosos, o atendimento foi rápido e a instalação foi feita com muito capricho.',
    reply: 'Olá, Bárbara Nogueira! Muito obrigado por avaliar a Top Vidros.',
    truncated: true,
  },
  {
    author: 'Elayne Gomes Ribeiro',
    meta: '1 avaliação · 2 fotos',
    date: 'uma semana atrás',
    comment: 'Amei o trabalho. O acabamento perfeito, atento aos detalhes. Ótimo atendimento, parceiro de tempo.',
    reply:
      'Olá, Elayne! Muito obrigado pelo carinho e pela avaliação. Foi uma experiência incrível desenvolver o projeto do seu box, em sua casa. Ver o espaço pronto e sabendo que superou suas expectativas é a nossa maior satisfação! Contem sempre conosco. Um abraço, Equipe Top Vidros',
  },
  {
    author: 'Adrianocarvalhal Carvalhal',
    meta: 'Local Guide · 19 avaliações · 14 fotos',
    date: '3 meses atrás',
    comment:
      'Profissional muito competente, de confiança, resolveu problemas que vários outros vidraceiros não conseguiram. Agilidade e compromisso com datas e horários. Preço de acordo com o mercado. Recomendo.',
    reply: 'Muito obrigado pela avaliação! Buscamos sempre entender a necessidade do cliente durante a visita técnica…',
    truncated: true,
  },
  {
    author: 'Wanderson Madama',
    meta: '11 avaliações',
    date: '3 meses atrás',
    comment:
      'Top Vidros, excelência em atendimento, marcou comigo o dia da instalação, vieram os vidros todos certos, depois deu uma manutenção, eles vieram e resolveram super rápido, de um compromisso e uma qualidade sem igual. Recomendo a todos.',
    reply:
      'Muito obrigado pelo feedback!! Estamos felizes que tenha gostado do nosso serviço. Espero poder atendê-lo novamente em breve.',
  },
  {
    author: 'Mariana Terra Gonçalves',
    meta: '2 avaliações',
    date: 'um mês atrás',
    comment:
      'Quero deixar aqui minha avaliação para a Top Vidro. Fiquei muito satisfeita com todo o atendimento! A equipe teve muita paciência, atenção e cuidado durante todo o processo. Super recomendo! 👏🏾',
    reply:
      'Olá, Mariana! Muito obrigado pela avaliação 5 estrelas! ⭐⭐⭐⭐⭐ Ficamos muito felizes que tenha gostado do nosso serviço de box de banheiro…',
    truncated: true,
  },
  {
    author: 'Flavia Dentista',
    meta: '1 avaliação',
    date: 'um mês atrás · editado',
    comment: 'Eles são muito eficientes e rápidos na entrega do trabalho. Eu gostei muito do serviço e super indico. Grata.',
    reply:
      'Olá Flavia, muito obrigado pela avaliação! Ficamos felizes que tenha gostado da sua porta de correr na área gourmet aqui no Jockey - Campos. Foi um prazer atender você. Nossa equipe da Top Vidros agradece a confiança.',
  },
  {
    author: 'João Paulo Donato Macedo (Donato)',
    meta: '4 avaliações',
    date: 'um mês atrás',
    comment: 'Profissionais e produtos de qualidade. E transparência acima de tudo com o cliente.',
    reply:
      'Boa tarde, João, muito obrigado pelo feedback! Ficamos felizes que tenha gostado da sua porta jateada. Foi um prazer atender você em Campos dos Goytacazes. A Top Vidros agradece e fica à disposição!',
  },
  {
    author: 'Gabrielle Pereira',
    meta: '1 avaliação',
    date: 'um mês atrás',
    comment: 'Muito bons! Super indico. Pontuais e educados. Ótimo trabalho.',
    reply:
      'Olá, Gabrielle, muito obrigado pela avaliação! Qualidade, Agilidade e Segurança são nossos pilares aqui na Top Vidros. Foi um prazer realizar seu serviço de vidraçaria em Campos dos Goytacazes.',
    truncated: true,
  },
  {
    author: 'Thaís Gomes da Silva',
    meta: '1 avaliação',
    date: 'um mês atrás',
    comment:
      'Serviço de excelência! Não é a primeira vez que faço serviço com essa empresa, e mais uma vez demonstraram comprometimento e qualidade na entrega.',
    reply: 'Muito obrigado pelo feedback! Fico feliz que conseguimos atendê-la com excelência novamente.',
  },
  {
    author: 'Tatiana Côrtes Inojosa',
    meta: '4 avaliações',
    date: 'um mês atrás',
    comment: 'Ótimo atendimento e serviço! Avaliação de preço: ótimo preço.',
    reply:
      'Que bom ter sua avaliação!! Ficamos felizes em poder contribuir para que tenha um serviço de excelência. Em Campos dos Goytacazes, a Top Vidros é referência em vidraçaria! Conte sempre conosco.',
  },
  {
    author: 'Hosana Silva',
    meta: '1 avaliação',
    date: '3 meses atrás',
    comment: 'O atendimento da Top Vidros é muito bom, agilidade no atendimento, estou muito satisfeita, estão de parabéns.',
    reply: 'Muito obrigado pelo comentário. Procuramos sempre atender a todos com a maior eficiência possível. Conte sempre conosco!!!',
  },
  {
    author: 'Kátia de Matos Luiz',
    meta: '2 avaliações',
    date: '2 meses atrás',
    comment: 'Excelente profissionalismo e trabalho. Agilidade no serviço.',
    reply: 'Agradecemos por poder atendê-los mais uma vez, e por sempre confiar no nosso trabalho.',
    truncated: true,
  },
];

export function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section id="depoimentos" className="relative py-28 bg-[#070708] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-rose-400">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>AVALIAÇÕES REAIS NO GOOGLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
              A confiança de quem já transformou seu espaço com a{' '}
              <span className="font-semibold text-rose-500">Top Vidros.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <div className="text-3xl font-bold text-white tracking-tight">5.0</div>
            <div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-neutral-400 mt-0.5 block font-light">Avaliações verificadas no Google</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {visible.map((t) => (
            <div
              key={t.author}
              className="group relative flex flex-col gap-5 p-7 rounded-3xl bg-white/[0.035] hover:bg-white/[0.06] border border-white/10 hover:border-rose-500/40 transition-all duration-300 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-neutral-600 group-hover:text-rose-500/50 transition-colors" />
              </div>

              <p className="text-sm font-light text-neutral-300 leading-relaxed">“{t.comment}”</p>

              <div className="pt-4 border-t border-white/5 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-sm font-medium text-white">
                    <span className="truncate">{t.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </div>
                  {t.meta && <div className="text-[11px] text-neutral-500 font-light">{t.meta}</div>}
                </div>
                <span className="text-[10px] font-mono text-neutral-500 whitespace-nowrap">{t.date}</span>
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-rose-400 mb-1.5">
                  <CornerDownRight className="w-3 h-3" />
                  <span>Resposta do proprietário</span>
                </div>
                <p className="text-xs font-light text-neutral-400 leading-relaxed">{t.reply}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition-colors"
          >
            {showAll ? 'Ver menos avaliações' : `Ver todas as avaliações (${testimonials.length})`}
          </button>
        </div>
      </div>
    </section>
  );
}
