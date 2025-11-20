import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import MotionWrapper from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: "Gestão de Emissão de Nota Fiscal de Serviço para Contabilidades em Goiânia | NFSRápida",
  description: "Sistema de gestão de emissão de nota fiscal de serviço eletrônica (NFS-e) para escritórios de contabilidade em Goiânia. Gerencie múltiplos clientes, relatórios consolidados e controle de certificados digitais.",
  keywords: [
    "emissão nota fiscal serviço contabilidade Goiânia",
    "NFS-e contabilidade Goiânia",
    "gestão NFS-e escritório contabilidade Goiânia",
    "sistema emissão nota fiscal contabilidade Goiânia",
    "emissão NFS-e múltiplos clientes Goiânia",
    "relatórios NFS-e contabilidade Goiânia",
    "gestão nota fiscal serviço contabilidade Goiânia",
    "sistema contabilidade emissão NFS-e Goiânia",
    "emissão nota fiscal serviço escritório contabilidade Goiânia",
    "controle NFS-e clientes Goiânia"
  ],
  openGraph: {
    title: "Gestão de Emissão de NFS-e para Contabilidades em Goiânia | NFSRápida",
    description: "Gerencie a emissão de NFS-e de todos os seus clientes prestadores de serviço em Goiânia. Relatórios consolidados e gestão centralizada.",
    url: "https://nfsrapida.com.br/nfs-e-contabilidade-goiania",
    siteName: "NFSRápida",
    images: [
      {
        url: "/logo.jpg",
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
    title: "Gestão de NFS-e para Contabilidades em Goiânia | NFSRápida",
    description: "Gerencie a emissão de NFS-e de todos os seus clientes em Goiânia. Relatórios consolidados.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "https://nfsrapida.com.br/nfs-e-contabilidade-goiania",
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
  Zap
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
    "description": "Sistema de gestão de emissão de NFS-e para escritórios de contabilidade em Goiânia. Gerencie múltiplos clientes em um só lugar. Relatórios consolidados, controle de certificados e inadimplência.",
    "image": "https://nfsrapida.com.br/logo.jpg",
    "screenshot": "https://nfsrapida.com.br/logo.jpg",
    "featureList": [
      "Gestão Centralizada de múltiplos CNPJs",
      "Relatórios consolidados de todos os clientes",
      "Controle de Certificados Digitais",
      "Controle de inadimplência de clientes",
      "Bloqueio de acesso por inadimplência",
      "Painel administrativo completo"
    ],
    "softwareVersion": "1.0",
    "author": {
      "@type": "Organization",
      "name": "NFSRápida"
    },
    "downloadUrl": "https://app.nfsrapida.com.br/auth/signup/escolher-tipo",
    "installUrl": "https://app.nfsrapida.com.br/auth/signup/escolher-tipo"
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
    "description": "Solução completa para escritórios de contabilidade gerenciarem a emissão de NFS-e dos seus clientes prestadores de serviço em Goiânia. Gestão centralizada, relatórios consolidados e controle de inadimplência.",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "99.90",
      "highPrice": "990.90",
      "priceCurrency": "BRL"
    }
  };

  // Schema FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Posso oferecer o sistema gratuitamente para meus clientes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Você tem total flexibilidade. Pode oferecer o emissor como um benefício gratuito (agregando valor aos honorários) ou cobrar uma mensalidade à parte pelo uso do sistema, transformando-o em uma nova fonte de receita para o escritório."
        }
      },
      {
        "@type": "Question",
        "name": "O sistema ajuda a reduzir a inadimplência?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Com certeza. Muitos escritórios condicionam o acesso ao emissor ao pagamento dos honorários. Como o cliente precisa emitir notas para faturar, ele prioriza o pagamento do contador para não ter o acesso suspenso. É uma ferramenta poderosa de negociação."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona a gestão de múltiplos CNPJs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No painel administrativo da contabilidade, você visualiza todos os seus clientes prestadores de serviço em uma lista organizada. Pode alternar entre eles com um clique, emitir notas em nome deles, gerar relatórios consolidados e controlar os certificados digitais de cada um."
        }
      },
      {
        "@type": "Question",
        "name": "Posso controlar quais clientes estão ativos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Você pode ativar ou desativar o acesso de qualquer cliente com um clique. Isso é útil para casos de inadimplência - se um cliente não pagar os honorários, você pode suspender temporariamente o acesso à emissão de notas dele."
        }
      },
      {
        "@type": "Question",
        "name": "Tem a função de clonar notas anteriores?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Com a funcionalidade de 'Clonar Nota', você pode copiar os dados de qualquer nota já emitida para gerar uma nova em segundos. Isso agiliza muito a emissão de notas recorrentes para os clientes do seu escritório."
        }
      },
      {
        "@type": "Question",
        "name": "Como funcionam os relatórios consolidados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Você pode gerar relatórios de todos os clientes de uma vez só, filtrando por período. O sistema mostra total de notas emitidas, faturamento total, tributos, e permite exportar tudo em Excel. Economiza horas de trabalho manual!"
        }
      },
      {
        "@type": "Question",
        "name": "E se exceder a quantidade de notas do plano?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A emissão não para! Seus clientes continuam emitindo normalmente. As notas que excederem a franquia do plano serão cobradas à parte no valor de R$ 0,15 por nota emitida. Tudo transparente e detalhado na fatura."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona o controle de certificados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O sistema monitora o vencimento dos certificados digitais de todos os seus clientes e envia alertas automáticos 30 dias antes do vencimento. Você pode renovar e fazer upload dos novos certificados de forma centralizada."
        }
      },
      {
        "@type": "Question",
        "name": "Posso oferecer isso como um serviço adicional?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Muitos escritórios de contabilidade cobram uma taxa mensal dos clientes pela gestão e emissão de NFS-e. É uma excelente forma de agregar valor aos seus serviços e aumentar o faturamento recorrente do escritório."
        }
      },
      {
        "@type": "Question",
        "name": "Como faço a migração dos meus clientes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É simples! Cadastre cada cliente no sistema, importe o certificado digital deles e sincronize com a Prefeitura. Não é necessário migrar notas antigas - elas continuam no sistema da prefeitura. A partir daí, emita as novas pelo NFSRápida."
        }
      },
      {
        "@type": "Question",
        "name": "Minha equipe pode usar o sistema?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Você pode criar múltiplos usuários para sua equipe acessar o sistema e gerenciar os clientes."
        }
      }
    ]
  };

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
    "description": "Sistema de gestão de NFS-e para escritórios de contabilidade em Goiânia. Gerencie múltiplos clientes em um só lugar.",
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
      
      {/* Schema FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                       href="https://app.nfsrapida.com.br/auth/signup/escolher-tipo" 
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
                title: "Gestão Centralizada",
                desc: "Acesse e gerencie todos os seus clientes prestadores de serviço em um único painel administrativo."
              },
              {
                icon: FileText,
                title: "Relatórios Unificados",
                desc: "Tire relatórios de faturamento e notas emitidas de todos os seus clientes de uma só vez. Adeus planilhas manuais."
              },
              {
                icon: Shield,
                title: "Controle de Certificados",
                desc: "Receba alertas automáticos sobre vencimento de certificados digitais dos seus clientes. Evite paradas na emissão."
              },
              {
                icon: PieChart,
                title: "Novo Serviço",
                desc: "Ofereça a emissão de NFS-e como um serviço adicional do seu escritório e aumente seu faturamento recorrente."
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
              href="https://app.nfsrapida.com.br/auth/signup/escolher-tipo" 
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

