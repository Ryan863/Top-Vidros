'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Especialidades', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#070708]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-black/20 backdrop-blur-md border-b border-white/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="group flex items-center gap-3 tracking-tighter text-white transition-opacity hover:opacity-90"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.06] border border-white/15 backdrop-blur group-hover:border-rose-500/50 transition-colors">
              <span className="w-2.5 h-2.5 rounded-sm bg-rose-600 shadow-[0_0_12px_rgba(225,29,72,0.8)]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-bold text-lg sm:text-xl tracking-widest uppercase">
                <span className="text-white">TOP</span>
                <span className="text-rose-500 font-light text-base">/</span>
                <span className="text-neutral-200 font-light">VIDROS</span>
              </div>
              <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase -mt-0.5 hidden sm:block">
                Arquitetura em Vidro
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 hover:text-white transition-colors duration-200 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-rose-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] text-neutral-300 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>Plantão 24h</span>
            </div>

            <a
              href="https://wa.me/5522998227120?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20personalizado%20com%20a%20Top%20Vidros."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 bg-white/[0.06] hover:bg-rose-600/90 border border-white/20 hover:border-rose-500 hover:shadow-[0_0_24px_rgba(225,29,72,0.4)] active:scale-95 group"
            >
              <MessageCircle className="w-3.5 h-3.5 text-rose-400 group-hover:text-white transition-colors" />
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#070708]/95 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-white/10 text-xs text-neutral-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-rose-500" />
              <span>Campos dos Goytacazes · RJ</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-tight text-neutral-200 hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-neutral-500" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Plantão 24 Horas Disponível</span>
            </div>
            <a
              href="https://wa.me/5522998227120?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Top%20Vidros."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-rose-600/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Fazer Cotação no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
