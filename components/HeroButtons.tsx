'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroButtons() {
  const handleScrollToPlan = (type: 'provider' | 'accounting') => {
    // Atualiza o hash na URL sem recarregar
    const hash = type === 'provider' ? '#planos-prestador' : '#planos-contador';
    window.history.pushState(null, '', hash);
    
    // Dispara evento para o componente PlansSection
    window.dispatchEvent(new CustomEvent('planTypeChange', { detail: type }));
    
    // Realiza o scroll suave manualmente para garantir
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
      <button 
        onClick={() => handleScrollToPlan('provider')}
        className="w-full sm:w-auto bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:bg-green-600 transition-all shadow-[0_0_40px_-10px_rgba(16,194,12,0.5)] hover:shadow-[0_0_60px_-15px_rgba(16,194,12,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
      >
        Sou Prestador
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button 
        onClick={() => handleScrollToPlan('accounting')}
        className="w-full sm:w-auto bg-white/5 text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
      >
        Sou Contador
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}

