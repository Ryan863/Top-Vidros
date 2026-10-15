'use client';

import { useState } from 'react';
import { ArrowUpRight, MessageCircle, Sparkles, CheckCircle2, Shield } from 'lucide-react';

interface ServiceItem {
  id: string;
  category: 'banheiro' | 'portas' | 'fachadas' | 'espelhos' | 'manutencao';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: string[];
  ctaMessage: string;
  badge?: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'box',
    category: 'banheiro',
    title: 'Box para Banheiro de Alto Padrão',
    subtitle: 'Linhas Elegance, Black e Até o Teto',
    description:
      'Soluções sob medida para banheiros contemporâneos. Vidro temperado 8mm ou 10mm com perfis minimalistas pretos, dourados ou inox escovado, garantindo estanqueidade total e fluidez visual.',
    image: '/servicos/box.jpg',
    specs: ['Vidro temperado 8mm/10mm', 'Roldanas aparentes ou embutidas', 'Perfis em preto fosco e inox', 'Vedação de silicone náutico'],
    ctaMessage: 'Olá! Gostaria de um orçamento para Box de Banheiro de Alto Padrão.',
    badge: 'Mais Solicitado',
  },
  {
    id: 'portas',
    category: 'portas',
    title: 'Portas & Divisórias de Vidro',
    subtitle: 'Integração e Fluidez Arquitetônica',
    description:
      'Portas de correr, pivotantes e sistemas articulados que integram varandas gourmet, salas e ambientes corporativos sem abrir mão do isolamento acústico e térmico.',
    image: '/servicos/portas.jpg',
    specs: ['Sistemas de correr 2 a 6 folhas', 'Trilhos embutidos no piso', 'Amortecimento suave soft-close', 'Fechaduras de alta segurança'],
    ctaMessage: 'Olá! Gostaria de uma cotação para Portas e Divisórias de Vidro.',
  },
  {
    id: 'espelhos-led',
    category: 'espelhos',
    title: 'Espelhos com LED Backlight',
    subtitle: 'Iluminação Difusa e Sofisticação',
    description:
      'Espelhos com iluminação perimetral indireta em LED 3000K (luz quente) ou 4000K (neutra), com acionamento touch screen no vidro e desembaçador térmico integrado.',
    image: '/servicos/espelho-led.jpg',
    specs: ['Espelho cristal prata cebrace', 'LED de alto IRC > 90', 'Borda com acabamento lapidado', 'Botão touch dimerizável'],
    ctaMessage: 'Olá! Gostaria de um projeto para Espelho com LED Backlight.',
    badge: 'Tendência 2026',
  },
  {
    id: 'espelhos-organicos',
    category: 'espelhos',
    title: 'Espelhos Orgânicos & Bisotados',
    subtitle: 'Design Escultural e Lapidação Nobre',
    description:
      'Cortes fluídos e formas orgânicas que funcionam como verdadeiras obras de arte decorativas para lavabos, halls de entrada e painéis residenciais amplos.',
    image: '/servicos/espelhos.jpg',
    specs: ['Corte computadorizado CNC', 'Bisel de 10mm a 25mm', 'Tratamento anti-oxidação', 'Fixação oculta reforçada'],
    ctaMessage: 'Olá! Tenho interesse em Espelhos Orgânicos e Bisotados sob medida.',
  },
  {
    id: 'janelas-fachadas',
    category: 'fachadas',
    title: 'Janelas & Fachadas Pele de Vidro',
    subtitle: 'Eficiência Energética e Vista Panorâmica',
    description:
      'Janelas blindex 4 folhas e fechamentos de fachada com esquadrias de alumínio premium, maximizando a entrada de luz natural e a proteção contra ventos e chuva forte.',
    image: '/servicos/janelas.jpg',
    specs: ['Controle solar e térmico', 'Vidro laminado acústico', 'Fechamento hermético', 'Projetado para ventos litorâneos'],
    ctaMessage: 'Olá! Gostaria de orçamento para Janelas e Fachadas em Vidro.',
  },
  {
    id: 'temperados',
    category: 'fachadas',
    title: 'Vidros Temperados & Laminados',
    subtitle: 'Segurança Máxima Homologada',
    description:
      'Painéis estruturais para guarda-corpos, coberturas de vidro e divisórias residenciais e comerciais em conformidade rigorosa com as normas ABNT NBR 14698 e 7199.',
    image: '/servicos/temperados.jpg',
    specs: ['Resistência mecânica 5x maior', 'Película PVB estrutural', 'Bordas finamente lapidadas', 'Certificado de conformidade'],
    ctaMessage: 'Olá! Preciso de cotação para Vidros Temperados e Laminados.',
  },
  {
    id: 'manutencao',
    category: 'manutencao',
    title: 'Manutenção Especializada & Plantão 24h',
    subtitle: 'Reparos Imediatos e Revisão Preventiva',
    description:
      'Troca de roldanas, molas de piso hidráulicas, alinhamento de portas pesadas, substituição de vedações ressecadas e atendimento de emergência a qualquer hora do dia ou da noite.',
    image: '/servicos/manutencao.jpg',
    specs: ['Atendimento emergencial 24h', 'Troca de molas Dorma/DTS', 'Regulagem de pressão e prumo', 'Garantia expressa do serviço'],
    ctaMessage: 'Olá! Preciso de Atendimento de Manutenção / Plantão 24h para vidros.',
    badge: 'Plantão 24h',
  },
];

export function ServicesGrid() {
  const [activeTab, setActiveTab] = useState<'todos' | 'banheiro' | 'portas' | 'espelhos' | 'fachadas' | 'manutencao'>('todos');

  const filteredServices =
    activeTab === 'todos'
      ? servicesData
      : servicesData.filter((item) => item.category === activeTab);

  return (
    <section id="servicos" className="relative py-28 sm:py-36 bg-[#070708] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-600/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-white/10">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-rose-400">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>CATÁLOGO DE ESPECIALIDADES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
              Precisão milimétrica em{' '}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                cada detalhe do vidro.
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
              Materiais nobres, ferragens maciças e mão de obra artesanal para projetos arquitetônicos residenciais e corporativos em Campos dos Goytacazes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'banheiro', label: 'Box Banheiro' },
              { id: 'portas', label: 'Portas & Divisórias' },
              { id: 'espelhos', label: 'Espelhos' },
              { id: 'fachadas', label: 'Janelas & Fachadas' },
              { id: 'manutencao', label: 'Plantão 24h' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]'
                    : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (Glassmorphism Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-12">
          {filteredServices.map((service, index) => {
            const waUrl = `https://wa.me/5522998227120?text=${encodeURIComponent(service.ctaMessage)}`;

            return (
              <article
                key={service.id}
                className="group relative flex flex-col justify-between rounded-3xl overflow-hidden p-6 sm:p-7 transition-all duration-500 bg-white/[0.035] hover:bg-white/[0.065] border border-white/10 hover:border-rose-500/50 hover:-translate-y-1.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_20px_40px_-15px_rgba(225,29,72,0.2)] backdrop-blur-xl"
              >
                {/* Top Radiant Hover Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Image Container with Zoom Effect */}
                  <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-white/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/80 via-[#070708]/15 to-transparent" />

                    {/* Badge */}
                    {service.badge && (
                      <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-rose-600/90 text-white backdrop-blur shadow-lg">
                        {service.badge}
                      </span>
                    )}

                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-neutral-300">
                      <span className="font-mono text-[11px] text-neutral-400">REF: 0{index + 1}</span>
                      <span className="text-white/80 font-light text-[11px] uppercase tracking-wider">Top Vidros</span>
                    </div>
                  </div>

                  {/* Card Typography */}
                  <div className="space-y-2.5">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-rose-400">
                      {service.subtitle}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-rose-100 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-neutral-400 leading-relaxed pt-1">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Specs */}
                  <div className="grid grid-cols-2 gap-2 pt-5 pb-6 border-t border-white/5 mt-5">
                    {service.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct WhatsApp Quote Button */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full inline-flex items-center justify-between px-5 py-3.5 rounded-2xl text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 bg-white/[0.05] hover:bg-rose-600 border border-white/10 hover:border-rose-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] active:scale-98"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-3.5 h-3.5 text-rose-400 group-hover:text-white transition-colors" />
                    <span>Cotar no WhatsApp</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
