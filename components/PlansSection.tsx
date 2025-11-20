'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

type PlanType = 'provider' | 'accounting';

interface PlansSectionProps {
  defaultPlan?: PlanType;
}

const PlansSection = ({ defaultPlan = 'provider' }: PlansSectionProps) => {
  const [planType, setPlanType] = useState<PlanType>(defaultPlan);

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
          "description": "15 notas fiscais por mês com emissão simplificada",
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
          "description": "30 notas fiscais por mês - Plano mais escolhido",
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
            "price": "29.90",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31",
            "url": "https://nfsrapida.com.br/#planos"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "NFSRápida - Plano Premium",
          "description": "60 notas fiscais por mês para grandes volumes",
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
            "price": "49.90",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31",
            "url": "https://nfsrapida.com.br/#planos"
          }
        }
      }
    ]
  };

  // Schema para planos de contabilidade
  const accountingPlansSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "NFSRápida - Plano Básico Contabilidade",
          "description": "10 prestadores (CNPJs) e 100 NFS-e por mês",
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
            "price": "99.90",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31",
            "url": "https://nfsrapida.com.br/nfs-e-contabilidade-goiania#planos"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "NFSRápida - Plano Profissional Contabilidade",
          "description": "50 prestadores (CNPJs) e 500 NFS-e por mês",
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
            "price": "490.90",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31",
            "url": "https://nfsrapida.com.br/nfs-e-contabilidade-goiania#planos"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "NFSRápida - Plano Empresarial Contabilidade",
          "description": "100 prestadores (CNPJs) e 1000 NFS-e por mês",
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
            "price": "990.90",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31",
            "url": "https://nfsrapida.com.br/nfs-e-contabilidade-goiania#planos"
          }
        }
      }
    ]
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
              : 'Gestão centralizada para múltiplos CNPJs com condições especiais.'}
          </p>
        </MotionWrapper>

        {/* PRESTADORES DE SERVIÇO PLANS */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-8 sm:mb-12 ${planType === 'provider' ? 'block' : 'hidden'}`}>
          {/* Básico */}
          <MotionWrapper className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-1" direction="up" delay={0.1}>
            <h3 className="font-bold text-lg sm:text-xl text-white mb-1">Básico</h3>
            <p className="text-xs text-slate-400 mb-3 sm:mb-4">Ideal para pequenos negócios</p>
            <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-bold">R$ 19,90</span>
              <span className="text-slate-400 text-xs sm:text-sm">/mês</span>
            </div>
            
            <ul className="space-y-3 mb-8 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>15 notas fiscais por mês</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Emissão Simplificada</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Cancelamento de Notas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Envio de Nota por E-mail</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Limite de notas por CNPJ cadastrado</span>
              </li>
            </ul>
            <Link href="https://app.nfsrapida.com.br/auth/signup/escolher-tipo" className="block w-full py-3 border border-slate-600 text-white font-bold text-center rounded-xl hover:bg-slate-700 transition-colors text-sm">
              Começar Básico
            </Link>
          </MotionWrapper>

          {/* Profissional - Featured */}
          <MotionWrapper className="bg-white text-slate-900 rounded-3xl p-5 sm:p-6 border-4 border-primary shadow-2xl shadow-green-900/20 relative transform lg:scale-105 z-20" direction="up" delay={0.2}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 sm:px-4 py-1 rounded-full text-xs font-bold shadow-md">
              Mais escolhido
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-1">Profissional</h3>
            <p className="text-xs text-slate-500 mb-3 sm:mb-4">Para empresas em crescimento</p>
            <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl font-bold text-secondary">R$ 29,90</span>
              <span className="text-slate-500 text-xs sm:text-sm">/mês</span>
            </div>
            
            <ul className="space-y-3 mb-8 text-sm font-medium text-slate-700">
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>30 notas fiscais por mês</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>Emissão Simplificada</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>Cancelamento de Notas</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>Envio de Nota por E-mail</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>Limite de notas por CNPJ cadastrado</span>
              </li>
            </ul>
            <Link href="https://app.nfsrapida.com.br/auth/signup/escolher-tipo" className="block w-full py-4 bg-primary text-white font-bold text-center rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30 text-sm">
              Escolher Profissional
            </Link>
          </MotionWrapper>

          {/* Premium */}
          <MotionWrapper className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-1" direction="up" delay={0.3}>
            <h3 className="font-bold text-lg sm:text-xl text-white mb-1">Premium</h3>
            <p className="text-xs text-slate-400 mb-3 sm:mb-4">Para grandes volumes</p>
            <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-bold">R$ 49,90</span>
              <span className="text-slate-400 text-xs sm:text-sm">/mês</span>
            </div>
            
            <ul className="space-y-3 mb-8 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>60 notas fiscais por mês</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Emissão Simplificada</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Cancelamento de Notas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Envio de Nota por E-mail</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Limite de notas por CNPJ cadastrado</span>
              </li>
            </ul>
            <Link href="https://app.nfsrapida.com.br/auth/signup/escolher-tipo" className="block w-full py-3 border border-slate-600 text-white font-bold text-center rounded-xl hover:bg-slate-700 transition-colors text-sm">
              Escolher Premium
            </Link>
          </MotionWrapper>

          {/* Empresarial (Sob consulta) */}
          <MotionWrapper className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 sm:p-6 border-2 border-slate-600 hover:border-slate-500 transition-all hover:-translate-y-1" direction="up" delay={0.4}>
            <h3 className="font-bold text-lg sm:text-xl text-white mb-1">Personalizado</h3>
            <p className="text-xs text-slate-400 mb-3 sm:mb-4">Volume personalizado</p>
            <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl font-bold text-primary">Sob consulta</span>
            </div>
            
            <ul className="space-y-3 mb-8 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Quantidade customizada</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Disponível 24/7 todos os dias</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Cancelamento de notas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Envio automático por e-mail</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Suporte dedicado</span>
              </li>
            </ul>
            <Link href="#contato" className="block w-full py-3 border-2 border-primary text-primary font-bold text-center rounded-xl hover:bg-primary hover:text-white transition-colors text-sm">
              Falar com consultor
            </Link>
          </MotionWrapper>
        </div>

        {/* CONTABILIDADE PLANS */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-8 sm:mb-12 ${planType === 'accounting' ? 'block' : 'hidden'}`}>
          {/* Básico - Accounting */}
          <MotionWrapper className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-1" direction="up" delay={0.1}>
            <h3 className="font-bold text-lg sm:text-xl text-white mb-1">Básico</h3>
            <p className="text-xs text-slate-400 mb-3 sm:mb-4">Gestão completa para até 10 empresas</p>
            <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-bold">R$ 99,90</span>
              <span className="text-slate-400 text-xs sm:text-sm">/mês</span>
            </div>
            
            <ul className="space-y-3 mb-8 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>10 prestadores (CNPJs)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>100 NFS-e por mês</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Relatórios consolidados</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Livro Fiscal</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Gestão de Certificados</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>NFS-e adicionais: R$ 0,15/nota</span>
              </li>
            </ul>
            <Link href="#contato" className="block w-full py-3 border border-slate-600 text-white font-bold text-center rounded-xl hover:bg-slate-700 transition-colors text-sm">
              Assinar Plano
            </Link>
          </MotionWrapper>

           {/* Profissional - Accounting */}
           <MotionWrapper className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-1" direction="up" delay={0.2}>
            <h3 className="font-bold text-lg sm:text-xl text-white mb-1">Profissional</h3>
            <p className="text-xs text-slate-400 mb-3 sm:mb-4">Gestão completa para até 50 empresas</p>
            <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-bold">R$ 490,90</span>
              <span className="text-slate-400 text-xs sm:text-sm">/mês</span>
            </div>
            
            <ul className="space-y-3 mb-8 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>50 prestadores (CNPJs)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>500 NFS-e por mês</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Relatórios consolidados</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Suporte prioritário</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Gestão de Certificados</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>NFS-e adicionais: R$ 0,15/nota</span>
              </li>
            </ul>
            <Link href="#contato" className="block w-full py-3 border border-slate-600 text-white font-bold text-center rounded-xl hover:bg-slate-700 transition-colors text-sm">
              Assinar Plano
            </Link>
          </MotionWrapper>

          {/* Empresarial - Accounting - Featured */}
          <MotionWrapper className="bg-white text-slate-900 rounded-3xl p-5 sm:p-6 border-4 border-primary shadow-2xl shadow-green-900/20 relative transform lg:scale-105 z-20" direction="up" delay={0.3}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 sm:px-4 py-1 rounded-full text-xs font-bold shadow-md">
              Mais robusto
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-1">Empresarial</h3>
            <p className="text-xs text-slate-500 mb-3 sm:mb-4">Solução robusta para até 100 empresas</p>
            <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl font-bold text-secondary">R$ 990,90</span>
              <span className="text-slate-500 text-xs sm:text-sm">/mês</span>
            </div>
            
            <ul className="space-y-3 mb-8 text-sm font-medium text-slate-700">
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>100 prestadores (CNPJs)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>1000 NFS-e por mês</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>Relatórios consolidados</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>Suporte prioritário</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>Gestão de Certificados</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>NFS-e adicionais: R$ 0,15/nota</span>
              </li>
            </ul>
            <Link href="#contato" className="block w-full py-4 bg-primary text-white font-bold text-center rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30 text-sm">
              Assinar Plano
            </Link>
          </MotionWrapper>

          {/* Personalizado - Accounting */}
          <MotionWrapper className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 sm:p-6 border-2 border-slate-600 hover:border-slate-500 transition-all hover:-translate-y-1" direction="up" delay={0.4}>
            <h3 className="font-bold text-lg sm:text-xl text-white mb-1">Personalizado</h3>
            <p className="text-xs text-slate-400 mb-3 sm:mb-4">Para grandes contabilidades</p>
            <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl font-bold text-primary">Sob consulta</span>
            </div>
            
            <ul className="space-y-3 mb-8 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Acima de 100 empresas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Suporte prioritário</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Gerente de conta exclusivo</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Treinamento para a equipe</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Gestão de Certificados</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Migração assistida</span>
              </li>
            </ul>
            <Link href="#contato" className="block w-full py-3 border-2 border-primary text-primary font-bold text-center rounded-xl hover:bg-primary hover:text-white transition-colors text-sm">
              Falar com consultor
            </Link>
          </MotionWrapper>
        </div>

      </div>
    </section>
  );
};

export default PlansSection;

