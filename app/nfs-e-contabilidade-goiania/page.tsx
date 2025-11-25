import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import MotionWrapper from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: "NFS-e para Contabilidades em Goiânia | Gestão Multi-CNPJ - NFSRápida",
  description: "Sistema de gestão de NFS-e para contabilidades em Goiânia. Gerencie todos os clientes em um painel. Relatórios consolidados, controle de inadimplência, alertas de certificados. Monetize como serviço.",
  keywords: [
    "NFS-e contabilidade Goiânia",
    "gestão multi-CNPJ Goiânia",
    "sistema NFS-e escritório contabilidade",
    "relatórios consolidados NFS-e",
    "controle inadimplência contabilidade",
    "gestão certificados digitais",
    "emissão NFS-e múltiplos clientes",
    "SGISS contabilidade Goiânia",
    "monetizar emissão NFS-e",
    "painel administrativo contabilidade",
    "antes depois contabilidade NFS-e"
  ],
  openGraph: {
    title: "NFS-e para Contabilidades | Gestão Multi-CNPJ em Goiânia",
    description: "Gerencie todos os clientes em um painel. Relatórios consolidados em 1 clique. Controle de inadimplência. Monetize como serviço. Integrado com SGISS.",
    url: "https://nfsrapida.com.br/nfs-e-contabilidade-goiania/",
    siteName: "NFSRápida",
    images: [
      {
        url: "/nfsrapida.png",
        width: 1200,
        height: 630,
        alt: "NFSRápida - Gestão de NFS-e para Contabilidades em Goiânia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NFS-e para Contabilidades | Gestão Multi-CNPJ",
    description: "Todos os clientes em um painel. Relatórios consolidados. Controle inadimplência. Monetize como serviço.",
    images: ["/nfsrapida.png"],
  },
  alternates: {
    canonical: "https://nfsrapida.com.br/nfs-e-contabilidade-goiania/",
  },
};

import { 
  Check, 
  Shield, 
  FileText, 
  PieChart, 
  Users, 
  ArrowRight,
  Star,
  Briefcase,
  Award,
  AlertTriangle,
  Zap,
  TrendingUp,
  DollarSign,
  Gift,
  BarChart3,
  Bell,
  Calendar,
  Clock
} from 'lucide-react';
import UiMockup from '@/components/UiMockup';
import PlansSection from '@/components/PlansSection';
import FAQSection from '@/components/FAQSection';

export default function ContabilidadePage() {
  // Schema SoftwareApplication
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "NFSRápida para Contabilidades",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": [
      {
        "@type": "Offer",
        "name": "Plano Básico Contabilidade",
        "price": "99.90",
        "priceCurrency": "BRL",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://nfsrapida.com.br/nfs-e-contabilidade-goiania#planos",
        "description": "10 prestadores (CNPJs) e 100 NFS-e por mês. Ideal para escritórios pequenos.",
        "image": "https://nfsrapida.com.br/logo.jpg"
      },
      {
        "@type": "Offer",
        "name": "Plano Profissional Contabilidade",
        "price": "490.90",
        "priceCurrency": "BRL",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://nfsrapida.com.br/nfs-e-contabilidade-goiania#planos",
        "description": "50 prestadores (CNPJs) e 500 NFS-e por mês. Plano mais escolhido.",
        "image": "https://nfsrapida.com.br/logo.jpg"
      },
      {
        "@type": "Offer",
        "name": "Plano Empresarial Contabilidade",
        "price": "990.90",
        "priceCurrency": "BRL",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://nfsrapida.com.br/nfs-e-contabilidade-goiania#planos",
        "description": "100 prestadores (CNPJs) e 1000 NFS-e por mês. Para escritórios grandes.",
        "image": "https://nfsrapida.com.br/logo.jpg"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Sistema de gestão multi-CNPJ para contabilidades em Goiânia. Gerencie todos os clientes em um painel. Relatórios consolidados, controle de inadimplência, alertas de certificados. Monetize como serviço.",
    "image": "https://nfsrapida.com.br/logo.jpg",
    "screenshot": "https://nfsrapida.com.br/logo.jpg",
    "featureList": [
      "Gestão multi-CNPJ em um único painel",
      "Relatórios consolidados em 1 clique",
      "Controle de inadimplência com bloqueio de acesso",
      "Alertas automáticos de certificados (30 dias)",
      "Monetize como serviço adicional",
      "Integração automática com SGISS",
      "Economia de horas por semana",
      "Ofereça grátis ou cobre dos clientes"
    ],
    "softwareVersion": "1.0",
    "author": {
      "@type": "Organization",
      "name": "NFSRápida"
    },
    "downloadUrl": "https://app.nfsrapida.com.br/",
    "installUrl": "https://app.nfsrapida.com.br/"
  };

  // Schema BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nfsrapida.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "NFS-e para Contabilidade em Goiânia",
        "item": "https://nfsrapida.com.br/nfs-e-contabilidade-goiania"
      }
    ]
  };

  // Schema Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Gestão de Emissão de NFS-e para Contabilidades",
    "provider": {
      "@type": "Organization",
      "name": "NFSRápida",
      "url": "https://nfsrapida.com.br"
    },
    "areaServed": {
      "@type": "City",
      "name": "Goiânia",
      "containedIn": {
        "@type": "State",
        "name": "Goiás"
      }
    },
    "description": "Solução de gestão multi-CNPJ para contabilidades em Goiânia. Todos os clientes em um painel, relatórios consolidados, controle de inadimplência, monetização como serviço.",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "99.90",
      "highPrice": "990.90",
      "priceCurrency": "BRL"
    }
  };

  // Schema FAQPage - Gerado dinamicamente pelo componente FAQSection
  // Removido para evitar duplicação. O FAQ é passado como props para o componente.

  // Schema Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NFSRápida",
    "url": "https://nfsrapida.com.br",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nfsrapida.com.br/logo.jpg"
    },
    "description": "Sistema de gestão multi-CNPJ para contabilidades. Relatórios consolidados, controle de inadimplência, alertas de certificados. Monetize como serviço.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-62-98218-1715",
      "contactType": "Customer Service",
      "availableLanguage": "Portuguese"
    }
  };

  return (
    <>
      {/* Schema SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      
      {/* Schema BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Schema Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {/* Schema Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* HERO SECTION - Contabilidade */}
      <section className="relative bg-slate-900 pt-20 pb-16 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px]"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            <MotionWrapper className="lg:w-1/2 text-center lg:text-left" direction="right">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-8 animate-fade-in">
                <Briefcase className="w-4 h-4" />
                Para Contabilidades
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight text-balance">
                Gerencie a emissão de NFS-e dos seus clientes com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Eficiência Total</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Sistema para escritórios de contabilidade gerenciarem a emissão de NFS-e dos seus clientes prestadores de serviço em Goiânia. Centralize tudo em um só lugar.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link 
                  href="#planos" 
                  className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Ver Planos Empresariais
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="#contato" 
                  className="w-full sm:w-auto bg-white/5 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Falar com Especialista
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
                 <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> Gestão Multi-CNPJ
                 </div>
                 <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> Relatórios Consolidados
                 </div>
              </div>
            </MotionWrapper>

            <MotionWrapper className="lg:w-1/2 w-full relative" direction="left" delay={0.2}>
               <UiMockup />
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* SEÇÃO MUDANÇA (ALERTA) - SPLIT CARD DESIGN */}
      <section id="mudanca" className="py-16 md:py-20 bg-slate-950 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <MotionWrapper direction="up" className="max-w-5xl mx-auto">
            <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col md:flex-row relative group">
              
              {/* Border Gradient Highlight */}
              <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none z-20"></div>

              {/* Left Side: The Problem (Warning) */}
              <div className="md:w-3/5 p-6 md:p-12 relative bg-gradient-to-b from-red-500/5 to-transparent">
                 <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 text-red-400 font-bold mb-4 md:mb-6 bg-red-950/50 border border-red-500/20 px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">
                       <AlertTriangle className="w-3 h-3" />
                       Comunicado Importante
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                       O sistema gratuito da Prefeitura <span className="text-red-500">está acabando.</span>
                    </h2>

                    <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
                       A partir de <strong className="text-white">1º de dezembro de 2025</strong>, a emissão gratuita de NFS-e será descontinuada em Goiânia. Prestadores de serviço que não migrarem ficarão irregulares.
                    </p>
                 </div>
              </div>

              {/* Right Side: The Solution (Action) */}
              <div className="md:w-2/5 bg-slate-800/50 p-6 md:p-12 border-t md:border-t-0 md:border-l border-slate-800 flex flex-col justify-center relative">
                 {/* Green Glow */}
                 <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent pointer-events-none"></div>
                 
                 <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-bold text-primary uppercase tracking-wide">Recomendado</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                       Migre para o NFSRápida
                    </h3>

                    <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                       Sistema 100% homologado. Garanta sua conformidade fiscal agora mesmo.
                    </p>

                    <Link 
                       href="https://app.nfsrapida.com.br/" 
                       className="group w-full bg-primary text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40 flex items-center justify-center gap-2"
                    >
                       Começar Migração Grátis
                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>

            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* RECURSOS - Contabilidade */}
      <section id="recursos" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <MotionWrapper className="text-center mb-10 md:mb-16 max-w-7xl mx-auto" direction="up">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-bold mb-4 md:mb-6 shadow-sm">
              <Award className="w-4 h-4 text-blue-600" />
              Ferramentas de Gestão
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Potencialize a <span className="text-primary">gestão de NFS-e</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Pare de acessar o site da prefeitura para cada cliente. Gerencie a emissão de NFS-e de todos os seus clientes prestadores de serviço em Goiânia de forma centralizada.
            </p>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Gestão Multi-CNPJ",
                desc: "Acesse e gerencie todos os seus clientes prestadores de serviço em um único painel. Alterne entre CNPJs com 1 clique."
              },
              {
                icon: BarChart3,
                title: "Relatórios em 1 Clique",
                desc: "Gere relatórios consolidados de TODOS os clientes de uma vez: faturamento, notas emitidas, tributos. Exporta para Excel."
              },
              {
                icon: Bell,
                title: "Alertas de Certificados",
                desc: "Sistema monitora vencimento dos certificados digitais e avisa 30 dias antes. Nunca mais perca prazo de renovação."
              },
              {
                icon: PieChart,
                title: "Agregue Valor",
                desc: "Torne seu escritório mais completo oferecendo emissão de NFS-e. Ajuda a reter clientes e reduzir inadimplência."
              }
            ].map((resource, i) => (
              <MotionWrapper key={i} className="group bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-blue-500/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" direction="up" delay={i * 0.1}>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-600 transition-all duration-300">
                  <resource.icon className="w-6 h-6 md:w-7 md:h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{resource.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{resource.desc}</p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* MONETIZE ESTE SERVIÇO - Premium Design */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <MotionWrapper direction="up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6 shadow-sm border border-green-200">
              <TrendingUp className="w-4 h-4" />
              Nova Fonte de Receita
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Transforme a demanda em <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Receita Recorrente</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Não deixe dinheiro na mesa. Assuma o controle da emissão de notas dos seus clientes e escolha: criar uma <strong>nova linha de receita</strong> ou entregar um <strong>diferencial exclusivo</strong> que blinda sua carteira.
            </p>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Opção 1: Cobrar */}
            <MotionWrapper direction="up" delay={0.1}>
              <div className="group bg-white rounded-[2rem] p-8 md:p-10 border border-green-100 hover:border-green-300 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2 h-full overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Opção 1: Cobre pelo Serviço
                </h3>
                
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  Ofereça a emissão de NFS-e como um <strong>serviço adicional</strong> e cobre uma mensalidade à parte dos seus clientes.
                </p>

                <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 mb-8 border border-green-100 shadow-sm">
                  <p className="text-sm font-bold text-green-800 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Exemplo de Rentabilidade:
                  </p>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="flex justify-between items-center">
                      <span>10 clientes × R$ 29,90/mês</span>
                      <span className="font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">R$ 299,00/mês</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-500">
                      <span>Custo do plano (10 CNPJs × R$ 9,90)</span>
                      <span>- R$ 99,00</span>
                    </div>
                    <div className="border-t border-green-200 pt-3 flex justify-between items-center">
                      <span className="font-bold text-green-900">Lucro líquido</span>
                      <span className="font-bold text-lg text-green-700">R$ 200,00/mês</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Nova fonte de receita recorrente",
                    "Margem de lucro atrativa (~66%)",
                    "Serviço valorizado pelos clientes",
                    "Diferencial competitivo"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>

            {/* Opção 2: Oferecer Grátis */}
            <MotionWrapper direction="up" delay={0.2}>
              <div className="group bg-white rounded-[2rem] p-8 md:p-10 border border-blue-100 hover:border-blue-300 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 h-full overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Gift className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Opção 2: Ofereça como Benefício
                </h3>
                
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  Inclua o emissor <strong>gratuitamente</strong> como um benefício agregado aos seus honorários contábeis.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 mb-8 border border-blue-100 shadow-sm">
                  <p className="text-sm font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Vantagens Estratégicas:
                  </p>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="leading-relaxed">Agrega valor real aos honorários sem custo adicional para o cliente</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Shield className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="leading-relaxed">Ferramenta poderosa para reduzir a inadimplência do escritório</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Clientes mais satisfeitos e fiéis",
                    "Controle de inadimplência (suspende acesso)",
                    "Escritório mais completo e moderno",
                    "Menos concorrência por preço"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          </div>

          <MotionWrapper direction="up" delay={0.3} className="text-center mt-12">
            <p className="text-slate-500 text-lg font-medium">
              Você decide! Escolha a estratégia que melhor se encaixa no seu modelo de negócio.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* INADIMPLÊNCIA ZERO */}
      <section className="py-16 md:py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <MotionWrapper direction="up">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4 md:mb-6">
                  <Shield className="w-4 h-4" />
                  Controle Financeiro
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Reduza a <span className="text-primary">Inadimplência</span> do seu Escritório
                </h2>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                  Ofereça o emissor de notas como um benefício e tenha uma ferramenta poderosa de negociação. Se o cliente não pagar os honorários, você pode suspender o acesso à emissão de notas com um clique.
                </p>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base md:text-lg mb-1">Cliente Inadimplente?</h4>
                      <p className="text-sm md:text-base text-slate-400">Identifique facilmente clientes com honorários em atraso.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base md:text-lg mb-1">Bloqueio de Acesso</h4>
                      <p className="text-sm md:text-base text-slate-400">Desative a emissão de notas. O cliente regulariza para voltar a emitir.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base md:text-lg mb-1">Menos Cobrança Manual</h4>
                      <p className="text-sm md:text-base text-slate-400">Automatize a régua de cobrança e foque no crescimento.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 bg-slate-800 rounded-2xl p-8 border border-slate-700/50 shadow-2xl relative">
                 <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl -z-10 blur-xl opacity-50"></div>
                 
                 {/* Active Client */}
                 <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 mb-4 opacity-50">
                    <div className="flex items-center justify-between mb-2">
                       <div className="w-32 h-4 bg-slate-700 rounded"></div>
                       <div className="w-16 h-6 bg-green-500/20 rounded text-xs flex items-center justify-center text-green-400 font-bold">Ativo</div>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded mb-2"></div>
                    <div className="w-2/3 h-2 bg-slate-800 rounded"></div>
                 </div>

                 {/* Blocked Client */}
                 <div className="bg-slate-900 rounded-xl p-6 border border-red-500/30 relative overflow-hidden shadow-lg">
                    <div className="absolute right-0 top-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                       BLOQUEADO
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                       <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                          <Users className="w-5 h-5 text-slate-500" />
                       </div>
                       <div>
                          <div className="w-32 h-4 bg-slate-700 rounded mb-2"></div>
                          <div className="w-24 h-3 bg-slate-800 rounded"></div>
                       </div>
                    </div>
                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                       <p className="text-red-400 text-sm font-medium flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          Emissão suspensa. Contate o escritório.
                       </p>
                    </div>
                 </div>

                 {/* Active Client */}
                 <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 mt-4 opacity-50">
                    <div className="flex items-center justify-between mb-2">
                       <div className="w-32 h-4 bg-slate-700 rounded"></div>
                       <div className="w-16 h-6 bg-green-500/20 rounded text-xs flex items-center justify-center text-green-400 font-bold">Ativo</div>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded mb-2"></div>
                    <div className="w-2/3 h-2 bg-slate-800 rounded"></div>
                 </div>

              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ANTES vs DEPOIS - Premium Comparison */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <MotionWrapper direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Gestão <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Centralizada</span> em um Só Lugar
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Compare como é trabalhar sem e com o NFSRápida no seu dia a dia.
            </p>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* ANTES */}
            <MotionWrapper direction="up" delay={0.1}>
              <div className="group bg-red-50/50 rounded-[2rem] p-8 md:p-10 border border-red-100 hover:border-red-200 transition-all h-full relative overflow-hidden">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shadow-sm">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-1">Antes</p>
                    <h3 className="text-2xl font-bold text-slate-900">Caos Manual</h3>
                  </div>
                </div>

                <div className="space-y-5 mb-8">
                  {[
                    "Acessar site da prefeitura para cada cliente",
                    "Fazer login com certificado de cada CNPJ",
                    "Gerar relatórios manualmente, um por um",
                    "Controlar vencimento de certificados em planilha",
                    "Sem controle de inadimplência dos clientes",
                    "Trabalho repetitivo e propenso a erros"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
                      <div className="w-6 h-6 rounded-full bg-red-200/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-xs font-bold">✕</span>
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-white rounded-xl border border-red-100 shadow-sm flex items-center justify-between">
                  <span className="text-sm text-slate-500 font-medium">Tempo gasto/semana</span>
                  <span className="text-red-600 font-bold flex items-center gap-1">
                    <Clock className="w-4 h-4" /> Horas perdidas
                  </span>
                </div>
              </div>
            </MotionWrapper>

            {/* DEPOIS */}
            <MotionWrapper direction="up" delay={0.2}>
              <div className="group bg-white rounded-[2rem] p-8 md:p-10 border-2 border-blue-500/20 hover:border-blue-500 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 h-full relative overflow-hidden">
                {/* Background Shine */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">Depois</p>
                    <h3 className="text-2xl font-bold text-slate-900">Eficiência Total</h3>
                  </div>
                </div>

                <div className="space-y-5 mb-8 relative z-10">
                  {[
                    "Todos os clientes em um único painel",
                    "Alterna entre CNPJs com 1 clique",
                    "Relatórios consolidados de todos em 1 clique",
                    "Alertas automáticos de certificados (30 dias)",
                    "Controle total: ativa/desativa acesso",
                    "Economia real de tempo e recursos"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 shadow-sm flex items-center justify-between relative z-10">
                  <span className="text-sm text-slate-600 font-medium">Tempo gasto/semana</span>
                  <span className="text-blue-700 font-bold flex items-center gap-1">
                    <Zap className="w-4 h-4 fill-blue-700" /> Apenas minutos
                  </span>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* PLANOS - Set to Accounting by default */}
      <PlansSection defaultPlan="accounting" />

      {/* COMO COMEÇAR - 3 Passos Simples */}
      <section id="como-comecar" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <MotionWrapper className="text-center mb-10 md:mb-16 max-w-7xl mx-auto" direction="up">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-bold mb-4 md:mb-6 shadow-sm">
              <Zap className="w-4 h-4 text-blue-600" />
              Simples e Rápido
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Comece a emitir NFS-e em apenas 2 minutos
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Configure sua conta e emita sua primeira nota fiscal em poucos passos. Processo 100% online e descomplicado.
            </p>
          </MotionWrapper>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                number: "1",
                title: "Importe seu Certificado Digital",
                desc: "Faça upload do seu certificado A1 de forma segura. Seus dados são criptografados e protegidos."
              },
              {
                number: "2",
                title: "Sincronize com a Prefeitura",
                desc: "Nossa plataforma se conecta automaticamente com o sistema da Prefeitura de Goiânia para você."
              },
              {
                number: "3",
                title: "Emita em uma interface simplificada",
                desc: "Preencha os dados da nota em um formulário intuitivo e emita sua NFS-e em segundos."
              }
            ].map((step, i) => (
              <MotionWrapper key={i} className="relative group" direction="up" delay={i * 0.1}>
                <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-blue-500/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  {/* Número do passo */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-2xl md:text-3xl shadow-lg mb-6">
                    {step.number}
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>

          <MotionWrapper className="text-center mt-10 md:mt-12" direction="up" delay={0.3}>
            <Link 
              href="https://app.nfsrapida.com.br/" 
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Começar agora gratuitamente
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MotionWrapper>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection 
        faqs={[
          {
            question: "Posso oferecer o sistema gratuitamente para meus clientes?",
            answer: "Sim! Você tem total flexibilidade. Pode oferecer o emissor como um benefício gratuito (agregando valor aos honorários) ou cobrar uma mensalidade à parte pelo uso do sistema, transformando-o em uma nova fonte de receita para o escritório."
          },
          {
            question: "O sistema ajuda a reduzir a inadimplência?",
            answer: "Com certeza. Muitos escritórios condicionam o acesso ao emissor ao pagamento dos honorários. Como o cliente precisa emitir notas para faturar, ele prioriza o pagamento do contador para não ter o acesso suspenso. É uma ferramenta poderosa de negociação."
          },
          {
            question: "Como funciona a gestão de múltiplos CNPJs?",
            answer: "No painel administrativo da contabilidade, você visualiza todos os seus clientes prestadores de serviço em uma lista organizada. Pode alternar entre eles com um clique, emitir notas em nome deles, gerar relatórios consolidados e controlar os certificados digitais de cada um."
          },
          {
            question: "Posso controlar quais clientes estão ativos?",
            answer: "Sim! Você pode ativar ou desativar o acesso de qualquer cliente com um clique. Isso é útil para casos de inadimplência - se um cliente não pagar os honorários, você pode suspender temporariamente o acesso à emissão de notas dele."
          },
          {
            question: "Tem a função de clonar notas anteriores?",
            answer: "Sim! Com a funcionalidade de 'Clonar Nota', você pode copiar os dados de qualquer nota já emitida para gerar uma nova em segundos. Isso agiliza muito a emissão de notas recorrentes para os clientes do seu escritório."
          },
          {
            question: "Como funcionam os relatórios consolidados?",
            answer: "Você pode gerar relatórios de todos os clientes de uma vez só, filtrando por período. O sistema mostra total de notas emitidas, faturamento total, tributos, e permite exportar tudo em Excel. Economiza horas de trabalho manual!"
          },
          {
            question: "E se exceder a quantidade de notas do plano?",
            answer: "A emissão não para! Seus clientes continuam emitindo normalmente. As notas que excederem a franquia do plano serão cobradas à parte no valor de R$ 0,15 por nota emitida. Tudo transparente e detalhado na fatura."
          },
          {
            question: "Como funciona o controle de certificados?",
            answer: "O sistema monitora o vencimento dos certificados digitais de todos os seus clientes e envia alertas automáticos 30 dias antes do vencimento. Você pode renovar e fazer upload dos novos certificados de forma centralizada."
          },
          {
            question: "Posso oferecer isso como um serviço adicional?",
            answer: "Sim! Muitos escritórios de contabilidade cobram uma taxa mensal dos clientes pela gestão e emissão de NFS-e. É uma excelente forma de agregar valor aos seus serviços e aumentar o faturamento recorrente do escritório."
          },
          {
            question: "Como faço a migração dos meus clientes?",
            answer: "É simples! Cadastre cada cliente no sistema, importe o certificado digital deles e sincronize com a Prefeitura. Não é necessário migrar notas antigas - elas continuam no sistema da prefeitura. A partir daí, emita as novas pelo NFSRápida."
          },
          {
            question: "Minha equipe pode usar o sistema?",
            answer: "Sim! Você pode criar múltiplos usuários."
          }
        ]}
        title="Dúvidas de Contabilidades"
        subtitle="Respostas para escritórios que gerenciam múltiplos clientes"
      />

      {/* CTA FINAL */}
      <section id="contato" className="py-16 md:py-20 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Pronto para otimizar a gestão de NFS-e?
               </h2>
               <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-3xl mx-auto">
                  Fale com nosso time e descubra como o NFSRápida pode facilitar a emissão de NFS-e dos seus clientes prestadores de serviço em Goiânia.
               </p>
               <a 
                  href="https://wa.me/5562982181715" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
               >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                  Falar com nosso time
               </a>
            </div>
         </div>
      </section>
    </>
  );
}

