'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, Minus, Plus, Building2 } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

type PlanType = 'provider' | 'accounting';

interface PlansSectionProps {
  defaultPlan?: PlanType;
}

const PlansSection = ({ defaultPlan = 'provider' }: PlansSectionProps) => {
  const [planType, setPlanType] = useState<PlanType>(defaultPlan);
  const [cnpjQuantity, setCnpjQuantity] = useState(5);
  
  const PRICE_PER_CNPJ = 9.90;
  const MIN_CNPJS = 5;
  const MAX_SLIDER = 100;
  
  const totalAccountingPrice = (cnpjQuantity * PRICE_PER_CNPJ).toFixed(2).replace('.', ',');

  const handleCnpjChange = (value: number) => {
    if (value >= MIN_CNPJS) {
      setCnpjQuantity(value);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || MIN_CNPJS;
    handleCnpjChange(Math.max(MIN_CNPJS, value));
  };

  useEffect(() => {
    // Detecta mudanças no hash (para links externos)
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#planos-prestador') {
        setPlanType('provider');
      } else if (hash === '#planos-contador') {
        setPlanType('accounting');
      }
    };

    // Listener para evento customizado (navegação interna)
    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === 'provider' || customEvent.detail === 'accounting') {
        setPlanType(customEvent.detail);
      }
    };

    // Executa na montagem
    handleHashChange();

    // Listeners
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('planTypeChange', handleCustomEvent);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('planTypeChange', handleCustomEvent);
    };
  }, []);

  // Schema para planos de prestadores
  const providerPlansSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "NFSRápida - Plano Básico",
          "description": "20 notas fiscais por mês com emissão simplificada",
          "image": "https://nfsrapida.com.br/logo.jpg",
          "brand": {
            "@type": "Brand",
            "name": "NFSRápida"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "5"
          },
          "offers": {
            "@type": "Offer",
            "price": "19.90",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31",
            "url": "https://nfsrapida.com.br/#planos"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "NFSRápida - Plano Profissional",
          "description": "NFS-e ilimitadas para grandes volumes",
          "image": "https://nfsrapida.com.br/logo.jpg",
          "brand": {
            "@type": "Brand",
            "name": "NFSRápida"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "5"
          },
          "offers": {
            "@type": "Offer",
            "price": "34.90",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31",
            "url": "https://nfsrapida.com.br/#planos"
          }
        }
      }
    ]
  };

  // Schema para plano de contabilidade
  const accountingPlansSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "NFSRápida - Plano Contabilidade",
    "description": "Plano customizável para contabilidades. R$ 9,90 por CNPJ com NFS-e ilimitadas.",
    "image": "https://nfsrapida.com.br/logo.jpg",
    "brand": {
      "@type": "Brand",
      "name": "NFSRápida"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "5"
    },
    "offers": {
      "@type": "Offer",
      "price": "9.90",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-12-31",
      "url": "https://nfsrapida.com.br/nfs-e-contabilidade-goiania#planos",
      "description": "Preço por CNPJ. Mínimo de 5 CNPJs."
    }
  };

  return (
    <section id="planos" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-20">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(planType === 'provider' ? providerPlansSchema : accountingPlansSchema) 
        }}
      />
      
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 z-0">
         <div className="absolute top-[20%] right-[10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary rounded-full blur-[80px] md:blur-[100px]"></div>
         <div className="absolute bottom-[10%] left-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600 rounded-full blur-[80px] md:blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <MotionWrapper className="text-center mb-8 sm:mb-12" direction="down">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Planos transparentes e acessíveis
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-base sm:text-lg mb-6 sm:mb-8">
            Escolha o plano ideal para o volume de notas que você emite. Sem taxas ocultas.
          </p>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="bg-slate-800 p-1 rounded-full inline-flex relative w-full max-w-md sm:w-auto">
              {/* Background Slider */}
              <div 
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full transition-all duration-300 ease-in-out ${
                  planType === 'provider' ? 'left-1' : 'left-[calc(50%+0px)]'
                }`}
              ></div>
              
              <button
                onClick={() => setPlanType('provider')}
                className={`relative z-10 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 flex-1 sm:flex-initial ${
                  planType === 'provider' ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Para Prestadores
              </button>
              <button
                onClick={() => setPlanType('accounting')}
                className={`relative z-10 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 flex-1 sm:flex-initial ${
                  planType === 'accounting' ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Para Contabilidade
              </button>
            </div>
          </div>

          <p className="text-slate-400 text-sm">
            {planType === 'provider' 
              ? 'Comece testando grátis por 7 dias antes de assinar qualquer plano.' 
              : 'Monte seu plano de acordo com a quantidade de clientes que você gerencia.'}
          </p>
        </MotionWrapper>

        {/* PRESTADORES DE SERVIÇO PLANS - 2 cards centralizados */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto mb-8 sm:mb-12 ${planType === 'provider' ? 'block' : 'hidden'}`}>
          {/* Básico */}
          <MotionWrapper className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-1" direction="up" delay={0.1}>
            <h3 className="font-bold text-xl sm:text-2xl text-white mb-2">Básico</h3>
            <p className="text-sm text-slate-400 mb-4 sm:mb-6">Ideal para pequenos negócios</p>
            <div className="flex items-baseline gap-1 mb-6 sm:mb-8">
              <span className="text-3xl sm:text-4xl font-bold">R$ 19,90</span>
              <span className="text-slate-400 text-sm">/mês</span>
            </div>
            
            <ul className="space-y-4 mb-8 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">20 notas fiscais</strong> por mês</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Emissão Simplificada</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Cancelamento de Notas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Envio de Nota por E-mail</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Suporte via WhatsApp</span>
              </li>
            </ul>
            <Link href="https://app.nfsrapida.com.br/" className="block w-full py-4 border border-slate-600 text-white font-bold text-center rounded-xl hover:bg-slate-700 transition-colors">
              Começar Básico
            </Link>
          </MotionWrapper>

          {/* Profissional - Featured */}
          <MotionWrapper className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 border-4 border-primary shadow-2xl shadow-green-900/20 relative transform md:scale-105 z-20" direction="up" delay={0.2}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
              Mais escolhido
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-2">Profissional</h3>
            <p className="text-sm text-slate-500 mb-4 sm:mb-6">Para grandes volumes</p>
            <div className="flex items-baseline gap-1 mb-6 sm:mb-8">
              <span className="text-3xl sm:text-4xl font-bold text-secondary">R$ 34,90</span>
              <span className="text-slate-500 text-sm">/mês</span>
            </div>
            
            <ul className="space-y-4 mb-8 text-sm font-medium text-slate-700">
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span><strong className="text-green-700">NFS-e Ilimitadas</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span>Emissão Simplificada</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span>Cancelamento de Notas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span>Envio de Nota por E-mail</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span>Suporte via WhatsApp</span>
              </li>
            </ul>
            <Link href="https://app.nfsrapida.com.br/" className="block w-full py-4 bg-primary text-white font-bold text-center rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30">
              Escolher Profissional
            </Link>
          </MotionWrapper>
        </div>

        {/* CONTABILIDADE - Card Customizável Único */}
        <div className={`max-w-2xl mx-auto mb-8 sm:mb-12 ${planType === 'accounting' ? 'block' : 'hidden'}`}>
          <MotionWrapper 
            className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 border-4 border-primary shadow-2xl shadow-green-900/20 relative" 
            direction="up" 
            delay={0.1}
          >
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
              Plano Flexível
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-2xl sm:text-3xl mb-2">Plano Contabilidade</h3>
              <p className="text-slate-500">Monte o plano ideal para sua contabilidade</p>
            </div>

            {/* Quantity Selector */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-8">
              <label className="block text-sm font-medium text-slate-600 mb-1 text-center">
                Quantos CNPJs você gerencia?
              </label>
              <p className="text-xs text-slate-400 mb-4 text-center">Mínimo de 5 CNPJs</p>
              
              {/* Controls */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={() => handleCnpjChange(cnpjQuantity - 1)}
                  disabled={cnpjQuantity <= MIN_CNPJS}
                  className="w-12 h-12 rounded-xl bg-white border-2 border-slate-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Minus className="w-5 h-5" />
                </button>
                
                <div className="relative">
                  <input
                    type="number"
                    value={cnpjQuantity}
                    onChange={handleInputChange}
                    min={MIN_CNPJS}
                    className="w-24 h-14 text-center text-2xl font-bold border-2 border-slate-200 rounded-xl focus:border-primary focus:outline-none transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-slate-400">CNPJs</span>
                </div>
                
                <button
                  onClick={() => handleCnpjChange(cnpjQuantity + 1)}
                  className="w-12 h-12 rounded-xl bg-white border-2 border-slate-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {/* Slider */}
              <div className="mt-8 px-2">
                <input
                  type="range"
                  min={MIN_CNPJS}
                  max={MAX_SLIDER}
                  value={Math.min(cnpjQuantity, MAX_SLIDER)}
                  onChange={(e) => handleCnpjChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>{MIN_CNPJS}</span>
                  <span>{MAX_SLIDER}+</span>
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div className="text-center mb-8">
              <div className="text-sm text-slate-500 mb-2">
                {cnpjQuantity} CNPJs × R$ 9,90
              </div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-secondary">R$ {totalAccountingPrice}</span>
                <span className="text-slate-500">/mês</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-slate-700"><strong className="text-green-700">NFS-e Ilimitadas</strong> por CNPJ</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-slate-700">Relatórios consolidados</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-slate-700">Gestão de Certificados</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-slate-700">Livro Fiscal</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-slate-700">Controle de inadimplência</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-slate-700">Suporte prioritário</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="https://app.nfsrapida.com.br/" 
              className="block w-full py-4 bg-primary text-white font-bold text-center rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30 text-lg"
            >
              Começar Agora
            </Link>

            {/* Footer Note */}
            <p className="text-center text-xs text-slate-400 mt-4">
              Mínimo de {MIN_CNPJS} CNPJs. Adicione ou remova clientes a qualquer momento.
            </p>
          </MotionWrapper>
        </div>

      </div>
    </section>
  );
};

export default PlansSection;
