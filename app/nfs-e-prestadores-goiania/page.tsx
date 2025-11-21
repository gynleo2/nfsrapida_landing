import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import MotionWrapper from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: "NFS-e para Prestadores em Goiânia | Sem ERP, Clone Notas - NFSRápida",
  description: "Sistema completo de NFS-e para prestadores em Goiânia. Não precisa de ERP. Clone notas recorrentes em 2 cliques. XML e PDF automático por email. Integrado com SGISS. Teste grátis 7 dias.",
  keywords: [
    "emissão nota fiscal serviço goiânia",
    "NFS-e prestador serviço Goiânia",
    "emissor NFS-e sem ERP Goiânia",
    "clonar nota fiscal Goiânia",
    "sistema NFS-e prestadores Goiânia",
    "emissão NFS-e celular Goiânia",
    "nota fiscal serviço sem ERP",
    "SGISS Goiânia prestadores",
    "emissor nota fiscal independente Goiânia",
    "NFS-e online prestador Goiânia",
    "XML PDF automático NFS-e"
  ],
  openGraph: {
    title: "NFS-e para Prestadores em Goiânia | Sem ERP, Clone Notas",
    description: "Não precisa de ERP. Clone notas em 2 cliques. XML e PDF automático. Integrado com SGISS. Funciona no celular. Teste grátis 7 dias.",
    url: "https://nfsrapida.com.br/nfs-e-prestadores-goiania",
    siteName: "NFSRápida",
    images: [
      {
        url: "/nfsrapida.png",
        width: 1200,
        height: 630,
        alt: "NFSRápida - Emissão de NFS-e para Prestadores em Goiânia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NFS-e para Prestadores | Sem ERP, Clone Notas",
    description: "Sistema completo sem ERP. Clone notas, XML/PDF automático. Teste grátis 7 dias.",
    images: ["/nfsrapida.png"],
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
    canonical: "https://nfsrapida.com.br/nfs-e-prestadores-goiania",
  },
};

import { 
  Check, 
  Shield, 
  FileText, 
  AlertTriangle, 
  Clock, 
  ArrowRight,
  Star,
  Zap,
  LayoutDashboard,
  Smartphone,
  Copy,
  Mail,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import UiMockup from '@/components/UiMockup';
import PlansSection from '@/components/PlansSection';
import FAQSection from '@/components/FAQSection';

export default function PrestadoresPage() {
  // Schema SoftwareApplication
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "NFSRápida para Prestadores de Serviço",
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
        "url": "https://nfsrapida.com.br/nfs-e-prestadores-goiania#planos",
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
        "url": "https://nfsrapida.com.br/nfs-e-prestadores-goiania#planos",
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
        "url": "https://nfsrapida.com.br/nfs-e-prestadores-goiania#planos",
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
    "description": "Sistema completo de NFS-e para prestadores em Goiânia. Não precisa de ERP. Clone notas recorrentes em 2 cliques. Envio automático de XML e PDF. Integrado com SGISS.",
    "image": "https://nfsrapida.com.br/logo.jpg",
    "screenshot": "https://nfsrapida.com.br/logo.jpg",
    "featureList": [
      "Não precisa de ERP ou sistema complexo",
      "Clone notas recorrentes em 2 cliques",
      "Envio automático de XML e PDF por email",
      "Integração automática com SGISS",
      "Funciona no celular e tablet sem instalar",
      "Interface super simples e direta",
      "Sistema 100% independente e completo"
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
        "name": "NFS-e para Prestadores em Goiânia",
        "item": "https://nfsrapida.com.br/nfs-e-prestadores-goiania"
      }
    ]
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
    "description": "Sistema completo de NFS-e para prestadores em Goiânia. Não precisa de ERP. Clone notas, XML/PDF automático. Integrado com SGISS.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-62-98218-1715",
      "contactType": "Customer Service",
      "availableLanguage": "Portuguese"
    }
  };

  // Schema LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NFSRápida",
    "image": "https://nfsrapida.com.br/logo.jpg",
    "url": "https://nfsrapida.com.br/nfs-e-prestadores-goiania",
    "telephone": "+55-62-98218-1715",
    "priceRange": "R$ 19,90 - R$ 49,90",
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
    "description": "Sistema completo sem ERP para emissão de NFS-e em Goiânia. Clone notas, XML/PDF automático, integrado com SGISS.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planos para Prestadores de Serviço",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emissão de NFS-e para Prestadores",
            "description": "Sistema completo para prestadores de serviço emitirem NFS-e em Goiânia"
          }
        }
      ]
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
      
      {/* HERO SECTION - Prestadores */}
      <section className="relative bg-secondary pt-20 pb-16 md:pt-40 md:pb-32 overflow-hidden">
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
                Emita sua Nota Fiscal de Serviço <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">Super Rápido</span>
              </h1>
              
              <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Sparkles className="w-4 h-4" />
                Não precisa de ERP • Sistema completo e independente
              </div>
              
              <p className="text-base sm:text-lg text-blue-100 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Sistema 100% integrado com o SGISS da Prefeitura de Goiânia. Feito exclusivamente para prestadores de serviço. Abandone a burocracia e emita suas notas em segundos.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link 
                  href="https://app.nfsrapida.com.br/auth/signup/escolher-tipo" 
                  className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-[0_0_40px_-10px_rgba(16,194,12,0.5)] hover:shadow-[0_0_60px_-15px_rgba(16,194,12,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Começar teste grátis
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/fim-emissor-gratuito-goiania" 
                  className="w-full sm:w-auto bg-white/5 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Entenda a mudança
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-blue-200/80">
                 <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" /> 7 dias grátis
                 </div>
                 <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" /> Sem cartão
                 </div>
                 <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" /> Cancelamento fácil
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

      {/* DESTAQUE CLONE E EMAIL - Premium Cards */}
      <section className="py-20 md:py-28 bg-white relative">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50/80 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/80 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Clone de Notas */}
              <MotionWrapper direction="up" delay={0.1}>
                <div className="group relative bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2 h-full overflow-hidden">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Copy className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="px-4 py-1.5 bg-green-100 rounded-full">
                        <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Recurso Premium</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 group-hover:text-green-700 transition-colors">
                      Clone Notas Recorrentes
                    </h3>
                    
                    <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                      Emite notas para os mesmos clientes todo mês? Use a função <strong>Clonar Nota</strong> e reaproveite todos os dados em 2 cliques!
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 font-bold shadow-sm">1</div>
                          <p className="text-sm font-medium text-slate-700">Encontre a nota anterior no histórico</p>
                        </div>
                        <div className="w-px h-4 bg-slate-200 ml-4"></div>
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 font-bold shadow-sm">2</div>
                          <p className="text-sm font-medium text-slate-700">Clique no botão "Clonar"</p>
                        </div>
                        <div className="w-px h-4 bg-slate-200 ml-4"></div>
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center shadow-md shadow-green-500/30">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                          <p className="text-sm font-bold text-slate-900">Pronto! Nova nota emitida em segundos</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-green-700 font-bold bg-green-50 p-3 rounded-xl">
                      <Zap className="w-5 h-5" />
                      <span className="text-sm">Economize até 90% do tempo em notas recorrentes</span>
                    </div>
                  </div>
                </div>
              </MotionWrapper>

              {/* Envio Automático */}
              <MotionWrapper direction="up" delay={0.2}>
                <div className="group relative bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 h-full overflow-hidden">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Mail className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="px-4 py-1.5 bg-blue-100 rounded-full">
                        <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">Automático</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                      XML e PDF por Email
                    </h3>
                    
                    <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                      Assim que você emite a nota, seu cliente recebe automaticamente um email com o <strong>PDF da nota</strong> e o <strong>arquivo XML</strong>.
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-500 relative overflow-hidden">
                      {/* Email Mockup */}
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-1">
                            <p className="font-bold text-slate-900 text-sm truncate">Para: cliente@email.com</p>
                            <span className="text-xs text-slate-400">Agora</span>
                          </div>
                          <p className="text-xs text-slate-500 mb-3 font-medium">Assunto: NFS-e Nº 12345 - Sua Empresa</p>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center gap-2 bg-white border border-slate-200 p-2 rounded-lg shadow-sm">
                              <div className="w-6 h-8 bg-red-50 rounded flex items-center justify-center border border-red-100">
                                <span className="text-[8px] font-bold text-red-500">PDF</span>
                              </div>
                              <div className="min-w-0">
                                <p className="text-[10px] font-bold text-slate-700 truncate">nfse-12345.pdf</p>
                                <p className="text-[8px] text-slate-400">145 KB</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 bg-white border border-slate-200 p-2 rounded-lg shadow-sm">
                              <div className="w-6 h-8 bg-green-50 rounded flex items-center justify-center border border-green-100">
                                <span className="text-[8px] font-bold text-green-500">XML</span>
                              </div>
                              <div className="min-w-0">
                                <p className="text-[10px] font-bold text-slate-700 truncate">nfse-12345.xml</p>
                                <p className="text-[8px] text-slate-400">12 KB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-blue-700 font-bold bg-blue-50 p-3 rounded-xl">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm">Zero trabalho manual • Cliente recebe na hora</span>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* VOCÊ SÓ PRECISA EMITIR NFS-E - Compact Version */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <MotionWrapper direction="up">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 text-green-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Zap className="w-4 h-4" />
                Sem ERP • 100% Independente
              </div>
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Você só precisa <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">emitir NFS-e</span>
              </h2>
              
              {/* Subheading */}
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Não um sistema complicado. O NFSRápida é focado 100% em emissão de notas. Simples, direto e eficiente.
              </p>

              {/* Benefits - Compact Grid */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { icon: CheckCircle, title: "Zero complexidade" },
                  { icon: Zap, title: "Tudo integrado" },
                  { icon: Smartphone, title: "Funciona no celular" },
                  { icon: Shield, title: "100% independente" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">{item.title}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link 
                href="https://app.nfsrapida.com.br/auth/signup/escolher-tipo" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-primary transition-all shadow-[0_0_40px_-10px_rgba(16,194,12,0.6)] hover:shadow-[0_0_60px_-10px_rgba(16,194,12,0.8)] hover:-translate-y-1"
              >
                Começar teste grátis
                <ArrowRight className="w-5 h-5" />
              </Link>
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
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Começar agora gratuitamente
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MotionWrapper>
        </div>
      </section>

      {/* PLANOS */}
      <PlansSection />

      {/* BENEFÍCIOS (TESTE GRÁTIS) */}
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
      <section id="recursos" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
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
                icon: Copy,
                title: "Clone Notas",
                desc: "Serviços recorrentes? Clone uma nota anterior em 2 cliques e reaproveite todos os dados do cliente e serviço."
              },
              {
                icon: Smartphone,
                title: "Funciona no celular",
                desc: "Site totalmente responsivo. Emita notas de qualquer lugar pelo seu smartphone ou tablet, sem precisar instalar nada."
              },
              {
                icon: Mail,
                title: "XML e PDF por Email",
                desc: "Seu cliente recebe automaticamente a nota em PDF e o arquivo XML por e-mail. Zero trabalho manual."
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
            question: "Posso clonar notas anteriores?",
            answer: "Sim! Use a função 'Clonar Nota' para duplicar instantaneamente uma nota já emitida. Ideal para serviços recorrentes. Copia todos os dados do tomador e serviço, permitindo emitir uma nova nota em segundos, apenas atualizando a data se necessário."
          },
          {
            question: "Quanto tempo leva para começar a emitir?",
            answer: "Você pode começar a emitir suas NFS-e em menos de 2 minutos! Basta fazer seu cadastro, importar seu certificado digital A1 e nossa plataforma sincroniza automaticamente com a Prefeitura de Goiânia. Em seguida, já pode emitir sua primeira nota."
          },
          {
            question: "Qual plano é ideal para mim?",
            answer: "Depende do volume de notas que você emite por mês. Plano Básico (R$ 19,90) para até 15 notas/mês é ideal para freelancers. Plano Profissional (R$ 29,90) para até 30 notas/mês é o mais escolhido. Plano Premium (R$ 49,90) para até 60 notas/mês para quem emite mais. Você pode mudar de plano a qualquer momento."
          },
          {
            question: "E se eu já uso o sistema da prefeitura?",
            answer: "Ótimo! A migração é muito simples. Com o NFSRápida você terá uma interface muito mais intuitiva, poderá emitir pelo celular, terá envio automático por e-mail e não precisará mais depender do sistema da prefeitura. Seus dados fiscais continuam os mesmos."
          },
          {
            question: "Posso emitir nota para cliente de fora de Goiânia?",
            answer: "Sim! Você pode emitir NFS-e para clientes de qualquer cidade do Brasil. O que importa é que sua empresa (prestadora) esteja cadastrada em Goiânia. O tomador do serviço pode ser de qualquer lugar."
          },
          {
            question: "Como funciona o envio automático por e-mail?",
            answer: "Assim que você emite uma nota fiscal, o sistema envia automaticamente um e-mail para o cliente com o PDF da nota e o arquivo XML. Você não precisa fazer nada manual."
          },
          {
            question: "O que acontece se meu certificado digital vencer?",
            answer: "O sistema avisa você com antecedência quando seu certificado está próximo do vencimento. Quando vencer, basta renovar o certificado com a Autoridade Certificadora e fazer o upload do novo certificado no sistema. Simples assim!"
          }
        ]}
        title="Dúvidas de Prestadores"
        subtitle="Respostas rápidas para quem quer emitir NFS-e em Goiânia"
      />

      {/* CONTATO */}
      <section id="contato" className="py-16 md:py-20 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Ainda tem dúvidas?
               </h2>
               <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                  Nossa equipe especializada em Nota Fiscal de Serviço Eletrônica em Goiânia está pronta para te ajudar.
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

