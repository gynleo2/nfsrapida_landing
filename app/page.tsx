import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import MotionWrapper from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: "Emissão de Nota Fiscal de Serviço em Goiânia | NFS-e Online - NFSRápida",
  description: "Emita nota fiscal de serviço eletrônica (NFS-e) em Goiânia de forma rápida e fácil. Sistema homologado para prestadores de serviço e contabilidades. Teste grátis por 7 dias com 10 notas inclusas.",
  keywords: [
    "emissão nota fiscal serviço goiânia",
    "NFS-e Goiânia",
    "NFS-e Goiânia",
    "emissor nota fiscal serviço goiânia",
    "nota fiscal serviço eletrônica goiânia",
    "sistema emissão NFS-e Goiânia",
    "emissão nota fiscal prestador serviço goiânia",
    "NFS-e online Goiânia",
    "emissor NFS-e Goiânia",
    "nota fiscal serviço Goiânia",
    "emissão NFS-e Goiânia",
    "como emitir nota fiscal serviço goiânia"
  ],
  openGraph: {
    title: "Emissão de Nota Fiscal de Serviço em Goiânia | NFS-e Online - NFSRápida",
    description: "Emita nota fiscal de serviço eletrônica (NFS-e) em Goiânia de forma rápida e fácil. Sistema homologado. Teste grátis por 7 dias.",
    url: "https://nfsrapida.com.br",
    siteName: "NFSRápida",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "NFSRápida - Emissão de NFS-e em Goiânia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emissão de Nota Fiscal de Serviço em Goiânia | NFS-e Online",
    description: "Emita NFS-e em Goiânia de forma rápida e fácil. Teste grátis por 7 dias.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nfsrapida.com.br",
  },
};
import { 
  Check, 
  Shield, 
  FileText, 
  AlertTriangle, 
  Clock, 
  Zap, 
  ArrowRight,
  Star,
  LayoutDashboard,
  Smartphone,
  Lock
} from 'lucide-react';
import UiMockup from '@/components/UiMockup';
import PlansSection from '@/components/PlansSection';

import HeroButtons from '@/components/HeroButtons';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  // Schema WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NFSRápida",
    "url": "https://nfsrapida.com.br",
    "description": "Sistema de emissão de NFS-e em Goiânia. Homologado pela Prefeitura para prestadores de serviço e contabilidades.",
    "inLanguage": "pt-BR",
    "publisher": {
      "@type": "Organization",
      "name": "NFSRápida",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nfsrapida.com.br/logo.jpg"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://nfsrapida.com.br/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Schema SoftwareApplication
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "NFSRápida",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": [
      {
        "@type": "Offer",
        "name": "Plano Básico",
        "price": "19.90",
        "priceCurrency": "BRL",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://nfsrapida.com.br/#planos",
        "description": "15 notas fiscais por mês. Ideal para freelancers e pequenos prestadores.",
        "image": "https://nfsrapida.com.br/logo.jpg"
      },
      {
        "@type": "Offer",
        "name": "Plano Profissional",
        "price": "29.90",
        "priceCurrency": "BRL",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://nfsrapida.com.br/#planos",
        "description": "30 notas fiscais por mês. Plano mais escolhido.",
        "image": "https://nfsrapida.com.br/logo.jpg"
      },
      {
        "@type": "Offer",
        "name": "Plano Premium",
        "price": "49.90",
        "priceCurrency": "BRL",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://nfsrapida.com.br/#planos",
        "description": "60 notas fiscais por mês. Para quem emite mais.",
        "image": "https://nfsrapida.com.br/logo.jpg"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Sistema homologado para emissão de NFS-e em Goiânia. Ideal para Prestadores de Serviço e Contabilidades. Emita suas notas fiscais em 30 segundos.",
    "screenshot": "https://nfsrapida.com.br/logo.jpg",
    "image": "https://nfsrapida.com.br/logo.jpg",
    "featureList": [
      "Emissão de NFS-e em 30 segundos",
      "Envio automático por e-mail",
      "Interface intuitiva e moderna",
      "Funciona no celular e tablet",
      "Sistema 100% homologado pela Prefeitura de Goiânia",
      "Função clonar nota para serviços recorrentes",
      "Suporte via WhatsApp"
    ],
    "softwareVersion": "1.0",
    "applicationSubCategory": "Fiscal Software",
    "author": {
      "@type": "Organization",
      "name": "NFSRápida"
    },
    "downloadUrl": "https://app.nfsrapida.com.br/auth/signup/escolher-tipo",
    "installUrl": "https://app.nfsrapida.com.br/auth/signup/escolher-tipo"
  };

  // Schema Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NFSRápida",
    "url": "https://nfsrapida.com.br",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nfsrapida.com.br/logo.jpg",
      "width": 250,
      "height": 60
    },
    "description": "Sistema de emissão de Nota Fiscal de Serviço Eletrônica (NFS-e) para Goiânia. Simples, rápido e homologado pela Prefeitura.",
    "areaServed": {
      "@type": "City",
      "name": "Goiânia",
      "containedIn": {
        "@type": "State",
        "name": "Goiás"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-62-98218-1715",
      "contactType": "Customer Service",
      "availableLanguage": "Portuguese",
      "areaServed": "BR"
    },
    "sameAs": [
      "https://wa.me/5562982181715"
    ]
  };

  // Schema LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NFSRápida",
    "image": "https://nfsrapida.com.br/logo.jpg",
    "url": "https://nfsrapida.com.br",
    "telephone": "+55-62-98218-1715",
    "priceRange": "R$ 19,90 - R$ 149,90",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Eng. Atílio Correia Lima, Qd. 83 Lt. 8",
      "addressLocality": "Goiânia",
      "addressRegion": "GO",
      "postalCode": "74425-030",
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "City",
      "name": "Goiânia"
    },
    "description": "Sistema de emissão de NFS-e para Goiânia. Homologado pela Prefeitura, simples e com o melhor custo-benefício.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Emissão de NFS-e",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emissão de NFS-e Goiânia",
            "description": "Sistema completo para emissão de Nota Fiscal de Serviço Eletrônica em Goiânia"
          }
        }
      ]
    }
  };

  // Schema FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como emitir NFS-e em Goiânia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Com o NFSRápida você emite NFS-e em 3 passos simples: 1) Importe seu certificado digital A1, 2) Nossa plataforma sincroniza automaticamente com a Prefeitura de Goiânia, 3) Preencha os dados da nota em um formulário intuitivo e emita em segundos. Todo o processo é 100% online."
        }
      },
      {
        "@type": "Question",
        "name": "Posso clonar notas anteriores?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Com a funcionalidade de 'Clonar Nota', você pode copiar todos os dados de uma nota já emitida para gerar uma nova em segundos. É ideal para quem emite notas recorrentes para os mesmos clientes. Emissão ultra rápida em 2 cliques."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso de certificado digital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! O certificado digital A1 é obrigatório para emitir NFS-e em Goiânia através de qualquer sistema externo (como NFSRápida, ERP, etc). Sistema externo é qualquer site que não seja o da própria Prefeitura. O NFSRápida aceita certificados A1 (arquivo digital) que você faz upload de forma segura na plataforma."
        }
      },
      {
        "@type": "Question",
        "name": "O sistema funciona no celular?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! O NFSRápida é totalmente responsivo e funciona perfeitamente em smartphones e tablets. Você pode emitir suas notas fiscais de qualquer lugar, sem precisar instalar nenhum aplicativo. Basta acessar pelo navegador."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona o teste grátis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Você tem 7 dias de teste completamente grátis com 10 notas fiscais inclusas. Não é necessário cadastrar cartão de crédito. Basta se cadastrar, importar seu certificado digital e começar a emitir. Se gostar, escolhe um plano. Se não gostar, não paga nada."
        }
      },
      {
        "@type": "Question",
        "name": "Posso cancelar a qualquer momento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Não temos fidelidade. Você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas. O cancelamento é instantâneo e pode ser feito pelo próprio painel do sistema."
        }
      },
      {
        "@type": "Question",
        "name": "O que acontece se eu exceder o limite de notas do meu plano?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se você atingir o limite de notas do seu plano, pode fazer upgrade para um plano superior a qualquer momento ou comprar pacotes avulsos de notas adicionais. O sistema avisa quando você está próximo do limite."
        }
      },
      {
        "@type": "Question",
        "name": "Meus dados estão seguros?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Utilizamos criptografia de ponta a ponta para proteger todos os seus dados, incluindo certificado digital e informações fiscais. Nossos servidores são homologados e seguem todas as normas de segurança da informação."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês oferecem suporte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Todos os planos incluem suporte via WhatsApp e e-mail. Nossa equipe está pronta para ajudar você com qualquer dúvida sobre emissão de NFS-e em Goiânia, durante o horário comercial."
        }
      }
    ]
  };

  return (
    <>
      {/* Schema WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      {/* Schema SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      
      {/* Schema Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Schema LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Schema FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* HERO SECTION - Dark Theme for Impact */}
      <section className="relative bg-secondary pt-16 pb-16 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px]"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            <MotionWrapper className="lg:w-1/2 text-center lg:text-left" direction="right">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-8 animate-fade-in">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Emissão de NFS-e em Goiânia
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight text-balance">
                Solução em Nota Fiscal de Serviço <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">para Goiânia</span>
              </h1>
              
              <p className="text-base sm:text-lg text-blue-100 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Sistema especializado para emissão de NFS-e em Goiânia. Ideal para Prestadores de Serviço e Contabilidades que gerenciam múltiplos clientes.
              </p>

              <HeroButtons />              
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
                       className="group w-full bg-primary text-white px-6 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-center hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40 flex items-center justify-center gap-2"
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

      {/* COMO COMEÇAR - 3 Passos Simples */}
      <section id="como-comecar" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <MotionWrapper className="text-center mb-10 md:mb-16 max-w-7xl mx-auto" direction="up">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-bold mb-4 md:mb-6 shadow-sm">
              <Zap className="w-4 h-4 text-blue-600" />
              Simples e Rápido
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Comece a emitir NFS-e em <span className="text-primary">apenas 2 minutos</span>
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
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Começar agora gratuitamente
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MotionWrapper>
        </div>
      </section>

      {/* PLANOS - Price Cards */}
      <PlansSection />

      {/* BENEFÍCIOS (TESTE GRÁTIS) - CTA Final */}
      <section id="beneficios" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <MotionWrapper className="bg-gradient-to-br from-secondary via-blue-900 to-secondary rounded-3xl shadow-2xl overflow-hidden relative" direction="up">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-0">
                {/* Left Side */}
                <div className="p-8 md:p-16 flex flex-col justify-center text-white">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 w-fit">
                    <Star className="w-4 h-4 text-yellow-300" />
                    Teste Grátis de Verdade
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                    7 dias grátis com 10 notas inclusas
                  </h2>
                  
                  <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed">
                    Você não precisa colocar cartão de crédito. Basta se cadastrar, importar seu certificado digital e começar a emitir NFS-e em Goiânia.
                  </p>
                  
                  <div className="space-y-4 mb-8 md:mb-10">
                     {[
                        "Sem fidelidade. Cancele quando quiser",
                        "Dados 100% seguros e criptografados",
                        "Suporte incluso durante todo o teste"
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                           <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-white" />
                           </div>
                           <span>{item}</span>
                        </div>
                     ))}
                  </div>

                  <Link 
                     href="https://app.nfsrapida.com.br/auth/signup/escolher-tipo" 
                     className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 md:px-10 py-3 md:py-5 rounded-full font-bold text-sm sm:text-lg hover:bg-green-600 transition-all shadow-[0_0_40px_-10px_rgba(16,194,12,0.5)] hover:shadow-[0_0_60px_-15px_rgba(16,194,12,0.6)] hover:-translate-y-1 w-full sm:w-fit"
                  >
                     <span className="sm:hidden">Testar grátis</span>
                     <span className="hidden sm:inline">Quero testar grátis agora</span>
                     <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Right Side */}
                <div className="bg-white/5 backdrop-blur-sm p-8 md:p-16 flex flex-col justify-center items-center text-center border-l border-white/10">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mb-6 border border-white/20">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Garantia de Satisfação</h3>
                  <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-6 max-w-sm">
                    Junte-se a centenas de prestadores de serviço de Goiânia que já migraram para o NFSRápida
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                     {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                     ))}
                  </div>
                  <p className="text-blue-200 text-sm">Avaliação 5 estrelas</p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* RECURSOS - Modern Grid */}
      <section id="recursos" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <MotionWrapper className="text-center mb-10 md:mb-16 max-w-7xl mx-auto" direction="up">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-bold mb-4 md:mb-6 shadow-sm">
              <Star className="w-4 h-4 text-blue-600" />
              Recursos Essenciais
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Tudo para emitir <span className="text-primary">NFS-e em Goiânia</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Sistema focado exclusivamente na emissão de Nota Fiscal de Serviço Eletrônica para prestadores de serviço de Goiânia. Simples, rápido e homologado.
            </p>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: LayoutDashboard,
                title: "Painel Intuitivo",
                desc: "Nada de menus confusos. Tudo que você precisa está a um clique de distância em um painel limpo e organizado."
              },
              {
                icon: Clock,
                title: "Emissão Rápida",
                desc: "Emita uma nota nova reaproveitando dados antigos num piscar de olhos."
              },
              {
                icon: Smartphone,
                title: "Funciona no celular",
                desc: "Site totalmente responsivo. Emita notas de qualquer lugar pelo seu smartphone ou tablet, sem precisar instalar nada."
              },
              {
                icon: FileText,
                title: "Envio automático",
                desc: "Seu cliente recebe a nota e o XML por e-mail automaticamente assim que você emite. Zero trabalho manual."
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

      {/* FAQ */}
      <FAQSection 
        faqs={[
          {
            question: "Como emitir NFS-e em Goiânia?",
            answer: "Com o NFSRápida você emite NFS-e em 3 passos simples: 1) Importe seu certificado digital A1, 2) Nossa plataforma sincroniza automaticamente com a Prefeitura de Goiânia, 3) Preencha os dados da nota em um formulário intuitivo e emita em segundos. Todo o processo é 100% online."
          },
          {
            question: "Posso clonar notas anteriores?",
            answer: "Sim! Com a funcionalidade de 'Clonar Nota', você pode copiar todos os dados de uma nota já emitida para gerar uma nova em segundos. É ideal para quem emite notas recorrentes para os mesmos clientes. Emissão ultra rápida em 2 cliques."
          },
          {
            question: "Preciso de certificado digital?",
            answer: "Sim! O certificado digital A1 é obrigatório para emitir NFS-e em Goiânia através de qualquer sistema externo (como NFSRápida, ERP, etc). Sistema externo é qualquer site que não seja o da própria Prefeitura. O NFSRápida aceita certificados A1 (arquivo digital) que você faz upload de forma segura na plataforma."
          },
          {
            question: "O sistema funciona no celular?",
            answer: "Sim! O NFSRápida é totalmente responsivo e funciona perfeitamente em smartphones e tablets. Você pode emitir suas notas fiscais de qualquer lugar, sem precisar instalar nenhum aplicativo. Basta acessar pelo navegador."
          },
          {
            question: "Como funciona o teste grátis?",
            answer: "Você tem 7 dias de teste completamente grátis com 10 notas fiscais inclusas. Não é necessário cadastrar cartão de crédito. Basta se cadastrar, importar seu certificado digital e começar a emitir. Se gostar, escolhe um plano. Se não gostar, não paga nada."
          },
          {
            question: "Posso cancelar a qualquer momento?",
            answer: "Sim! Não temos fidelidade. Você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas. O cancelamento é instantâneo e pode ser feito pelo próprio painel do sistema."
          },
          {
            question: "O que acontece se eu exceder o limite de notas do meu plano?",
            answer: "Se você atingir o limite de notas do seu plano, pode fazer upgrade para um plano superior a qualquer momento ou comprar pacotes avulsos de notas adicionais. O sistema avisa quando você está próximo do limite."
          },
          {
            question: "Meus dados estão seguros?",
            answer: "Sim! Utilizamos criptografia de ponta a ponta para proteger todos os seus dados, incluindo certificado digital e informações fiscais. Nossos servidores são homologados e seguem todas as normas de segurança da informação."
          },
          {
            question: "Vocês oferecem suporte?",
            answer: "Sim! Todos os planos incluem suporte via WhatsApp e e-mail. Nossa equipe está pronta para ajudar você com qualquer dúvida sobre emissão de NFS-e em Goiânia, durante o horário comercial."
          }
        ]}
        title="Perguntas Frequentes"
        subtitle="Tire suas dúvidas sobre emissão de NFS-e em Goiânia"
      />

      {/* CONTATO */}
      <section id="contato" className="py-16 md:py-20 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Ainda tem dúvidas sobre a migração?
               </h2>
               <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                  Nossa equipe especializada em Nota Fiscal de Serviço Eletrônica em Goiânia está pronta para te ajudar. Resposta rápida por WhatsApp.
               </p>
               <a 
                  href="https://wa.me/5562982181715" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
               >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                  <span className="sm:hidden">Falar no WhatsApp</span>
                  <span className="hidden sm:inline">Falar com nosso time no WhatsApp</span>
               </a>
            </div>
         </div>
      </section>
    </>
  );
}
