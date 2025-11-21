import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import MotionWrapper from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: "Melhor Sistema de Emissão de NFS-e em Goiânia 2025 | NFSRápida",
  description: "Descubra o melhor sistema para emitir Nota Fiscal de Serviço em Goiânia. Comparativo completo, recursos essenciais, integração SGISS e preços. Guia definitivo para prestadores e contabilidades.",
  keywords: [
    "melhor sistema NFS-e Goiânia",
    "sistema emissão nota fiscal Goiânia",
    "comparativo sistemas NFS-e",
    "emissor NFS-e homologado SGISS",
    "sistema nota fiscal prestadores",
    "melhor emissor NFS-e 2025",
    "sistema NFS-e contabilidade",
    "preço sistema nota fiscal",
    "recursos sistema NFS-e",
    "escolher emissor nota fiscal",
    "sistema integrado SGISS",
    "NFS-e sem ERP Goiânia",
    "emissor nota fiscal responsivo",
    "sistema NFS-e barato",
    "melhor custo benefício NFS-e"
  ],
  authors: [{ name: "NFSRápida" }],
  creator: "NFSRápida",
  publisher: "NFSRápida",
  category: "Comparativo",
  openGraph: {
    title: "Melhor Sistema de Emissão de NFS-e em Goiânia 2025",
    description: "Comparativo completo dos sistemas de NFS-e: recursos, preços, integração SGISS. Descubra qual é o melhor para prestadores e contabilidades.",
    url: "https://nfsrapida.com.br/melhor-sistema-nfs-goiania/",
    siteName: "NFSRápida",
    images: [
      {
        url: "/nfsrapida.png",
        width: 1200,
        height: 630,
        alt: "Melhor Sistema de Emissão de NFS-e em Goiânia",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhor Sistema de Emissão de NFS-e em Goiânia 2025",
    description: "Comparativo completo: recursos, preços, integração SGISS. Guia definitivo para escolher o melhor sistema.",
    images: ["/nfsrapida.png"],
    creator: "@nfsrapida",
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
    canonical: "https://nfsrapida.com.br/melhor-sistema-nfs-goiania/",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

import { 
  Check, 
  Shield, 
  Zap,
  CheckCircle,
  XCircle,
  Star,
  Smartphone,
  LayoutDashboard,
  Copy,
  Mail,
  AlertCircle,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Award,
  Target,
  ArrowRight,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import UiMockup from '@/components/UiMockup';
import PlansSection from '@/components/PlansSection';
import FAQSection from '@/components/FAQSection';

export default function MelhorSistemaPage() {
  // Schema Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Melhor Sistema de Emissão de NFS-e em Goiânia 2025 | Guia Completo",
    "description": "Comparativo completo dos melhores sistemas de emissão de NFS-e em Goiânia. Recursos essenciais, preços, integração SGISS e como escolher o ideal para prestadores e contabilidades.",
    "image": {
      "@type": "ImageObject",
      "url": "https://nfsrapida.com.br/nfsrapida.png",
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Organization",
      "name": "NFSRápida",
      "url": "https://nfsrapida.com.br",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nfsrapida.com.br/logo.jpg",
        "width": 250,
        "height": 60
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "NFSRápida",
      "url": "https://nfsrapida.com.br",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nfsrapida.com.br/logo.jpg",
        "width": 250,
        "height": 60
      }
    },
    "datePublished": "2024-11-21",
    "dateModified": "2024-11-21",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nfsrapida.com.br/melhor-sistema-nfs-goiania"
    },
    "articleSection": "Comparativos",
    "keywords": "melhor sistema NFS-e Goiânia, comparativo sistemas NFS-e, emissor homologado SGISS, sistema especializado, custo-benefício",
    "about": {
      "@type": "Thing",
      "name": "Sistema de Emissão de NFS-e",
      "description": "Software para emissão de Nota Fiscal de Serviço Eletrônica"
    },
    "inLanguage": "pt-BR",
    "wordCount": 2500,
    "proficiencyLevel": "Beginner",
    "educationalLevel": "Beginner",
    "learningResourceType": "Comparativo"
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
        "name": "Melhor Sistema NFS-e Goiânia",
        "item": "https://nfsrapida.com.br/melhor-sistema-nfs-goiania"
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
      "availableLanguage": "Portuguese"
    }
  };

  // Schema SoftwareApplication
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "NFSRápida",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "19.90",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "url": "https://nfsrapida.com.br/melhor-sistema-nfs-goiania",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Melhor sistema de emissão de NFS-e para Goiânia integrado com SGISS. Especializado, simples e com o melhor custo-benefício do mercado.",
    "featureList": [
      "Integração automática com SGISS",
      "Interface simples e intuitiva",
      "Clone notas em 2 cliques",
      "Envio automático de XML e PDF por email",
      "Gestão multi-CNPJ para contabilidades",
      "Melhor custo-benefício (a partir de R$ 19,90/mês)",
      "Sistema responsivo para mobile"
    ],
    "screenshot": "https://nfsrapida.com.br/nfsrapida.png"
  };

  // Schema WebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Melhor Sistema de Emissão de NFS-e em Goiânia 2025",
    "description": "Comparativo completo dos melhores sistemas de NFS-e em Goiânia. Recursos essenciais, preços, integração SGISS e como escolher o ideal.",
    "url": "https://nfsrapida.com.br/melhor-sistema-nfs-goiania",
    "inLanguage": "pt-BR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "NFSRápida",
      "url": "https://nfsrapida.com.br"
    },
    "about": {
      "@type": "Thing",
      "name": "Sistema de Emissão de NFS-e",
      "description": "Comparativo e guia para escolher o melhor sistema de emissão de Nota Fiscal de Serviço Eletrônica em Goiânia"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://nfsrapida.com.br/nfsrapida.png",
      "width": 1200,
      "height": 630
    }
  };

  return (
    <>
      {/* Schema Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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

      {/* Schema SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Schema WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16 pb-16 md:pt-40 md:pb-24 overflow-hidden text-white">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px]"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6 md:mb-8">
              <Award className="w-4 h-4" />
              Guia Comparativo 2025
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-white">
              Melhor Sistema de Emissão de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">NFS-e em Goiânia</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
              Descubra qual é o melhor sistema para emitir Nota Fiscal de Serviço em Goiânia. Comparativo completo com recursos essenciais, preços e como escolher o ideal para você.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="https://app.nfsrapida.com.br/" 
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Testar grátis por 7 dias
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              Sem cartão de crédito • 10 notas inclusas
            </p>
          </div>
        </div>
      </section>

      {/* CRITÉRIOS ESSENCIAIS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <MotionWrapper direction="up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <Target className="w-4 h-4" />
                  Critérios de Avaliação
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  O Que Torna um Sistema de NFS-e o Melhor?
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Avaliamos os sistemas com base nos critérios mais importantes para prestadores e contabilidades
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Homologação SGISS",
                    desc: "Sistema deve ser oficialmente homologado pela Prefeitura de Goiânia e integrado com o SGISS.",
                    priority: "Essencial"
                  },
                  {
                    icon: Zap,
                    title: "Facilidade de Uso",
                    desc: "Interface intuitiva e simples. Você não deve precisar de treinamento complexo para emitir uma nota.",
                    priority: "Muito Importante"
                  },
                  {
                    icon: DollarSign,
                    title: "Custo-Benefício",
                    desc: "Preço justo com recursos adequados. Evite pagar por funcionalidades que você não vai usar.",
                    priority: "Muito Importante"
                  },
                  {
                    icon: Smartphone,
                    title: "Acesso Mobile",
                    desc: "Sistema responsivo que funciona perfeitamente em smartphones e tablets.",
                    priority: "Importante"
                  },
                  {
                    icon: Clock,
                    title: "Agilidade na Emissão",
                    desc: "Recursos como clone de notas e preenchimento automático que economizam tempo.",
                    priority: "Importante"
                  },
                  {
                    icon: Users,
                    title: "Suporte e Atendimento",
                    desc: "Suporte rápido e eficiente quando você precisar de ajuda.",
                    priority: "Importante"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                          item.priority === 'Essencial' ? 'bg-red-100 text-red-700' :
                          item.priority === 'Muito Importante' ? 'bg-orange-100 text-orange-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {item.priority}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* RECURSOS ESSENCIAIS */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <MotionWrapper direction="up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
                  <Star className="w-4 h-4 fill-current" />
                  Recursos Indispensáveis
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                  6 Recursos que o Melhor Sistema Deve Ter
                </h2>
                <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                  Estes são os recursos essenciais que você deve procurar ao escolher seu sistema emissor
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {[
                  {
                    icon: CheckCircle,
                    title: "Facilidade de Uso",
                    desc: "Interface intuitiva e simples. Você não deve precisar de treinamento complexo para emitir uma nota fiscal.",
                    color: "blue"
                  },
                  {
                    icon: Smartphone,
                    title: "Funciona no Celular",
                    desc: "Sistema responsivo que funciona bem em smartphones e tablets. Emita notas de qualquer lugar.",
                    color: "purple"
                  },
                  {
                    icon: LayoutDashboard,
                    title: "Adequado à sua Necessidade",
                    desc: "Muitos prestadores não precisam de ERPs complexos. Escolha uma solução específica para NFS-e.",
                    color: "green"
                  },
                  {
                    icon: Zap,
                    title: "Integração com SGISS",
                    desc: "Sistema homologado e integrado automaticamente com o SGISS da Prefeitura de Goiânia.",
                    color: "orange"
                  },
                  {
                    icon: Copy,
                    title: "Clone de Notas",
                    desc: "Copie notas anteriores para emissões recorrentes. Economize tempo com clientes frequentes.",
                    color: "cyan"
                  },
                  {
                    icon: Mail,
                    title: "Envio Automático",
                    desc: "PDF e XML enviados automaticamente por e-mail para o cliente, sem trabalho manual.",
                    color: "pink"
                  }
                ].map((item, i) => (
                  <div key={i} className="group relative bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:-translate-y-1 hover:bg-white/15">
                    <div className={`absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br ${
                      item.color === 'blue' ? 'from-blue-400/30 to-blue-600/30' :
                      item.color === 'purple' ? 'from-purple-400/30 to-purple-600/30' :
                      item.color === 'green' ? 'from-green-400/30 to-green-600/30' :
                      item.color === 'orange' ? 'from-orange-400/30 to-orange-600/30' :
                      item.color === 'cyan' ? 'from-cyan-400/30 to-cyan-600/30' :
                      'from-pink-400/30 to-pink-600/30'
                    } rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                      item.color === 'blue' ? 'from-blue-400 to-blue-600' :
                      item.color === 'purple' ? 'from-purple-400 to-purple-600' :
                      item.color === 'green' ? 'from-green-400 to-green-600' :
                      item.color === 'orange' ? 'from-orange-400 to-orange-600' :
                      item.color === 'cyan' ? 'from-cyan-400 to-cyan-600' :
                      'from-pink-400 to-pink-600'
                    } flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform relative z-10`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-sm text-blue-100 leading-relaxed relative z-10">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-md border-2 border-amber-400/40 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-amber-500/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-amber-100 mb-2">Evite Sistemas Complexos Desnecessários</h4>
                    <p className="text-sm md:text-base text-amber-50 leading-relaxed">
                      Se você só precisa emitir notas fiscais, <strong className="text-white">evite contratar ERPs completos</strong>. Eles são caros, difíceis de usar e possuem recursos que você nunca vai utilizar. Para a maioria dos prestadores de serviço, um <strong className="text-white">sistema especializado em NFS-e</strong> é mais adequado, econômico e fácil de usar.
                    </p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* COMPARATIVO DE TIPOS */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <MotionWrapper direction="up">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Sistema Especializado vs ERP Completo
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Entenda as diferenças e escolha o mais adequado para seu negócio
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Sistema Especializado */}
                <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                      <ThumbsUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Sistema Especializado</h3>
                      <p className="text-sm text-green-600 font-medium">Recomendado para maioria</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      "Focado apenas em emissão de NFS-e",
                      "Interface simples e intuitiva",
                      "Preço acessível (a partir de R$ 19,90/mês)",
                      "Rápido de aprender e usar",
                      "Suporte especializado em NFS-e",
                      "Ideal para prestadores sem ERP"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-sm font-bold text-green-900 mb-1">Melhor para:</p>
                    <p className="text-sm text-green-800">Prestadores de serviço que precisam apenas emitir notas fiscais de forma rápida e simples.</p>
                  </div>
                </div>

                {/* ERP Completo */}
                <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center shadow-lg">
                      <ThumbsDown className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">ERP Completo</h3>
                      <p className="text-sm text-slate-600 font-medium">Para empresas maiores</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      { text: "Muitos recursos desnecessários", negative: true },
                      { text: "Interface complexa e confusa", negative: true },
                      { text: "Preço alto (R$ 200 a R$ 1.000+/mês)", negative: true },
                      { text: "Requer treinamento extenso", negative: true },
                      { text: "Suporte genérico", negative: true },
                      { text: "Controle completo de estoque, financeiro, etc.", negative: false }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        {item.negative ? (
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                        )}
                        <span className="text-sm text-slate-700">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-sm font-bold text-slate-900 mb-1">Melhor para:</p>
                    <p className="text-sm text-slate-700">Empresas que precisam de gestão completa (estoque, financeiro, vendas, etc.).</p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* POR QUE NFSRÁPIDA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <MotionWrapper direction="up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <Award className="w-4 h-4" />
                  Por Que Escolher o NFSRápida
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  O Sistema Mais Completo e Acessível de Goiânia
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Desenvolvido especificamente para prestadores de serviço e contabilidades de Goiânia
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  {
                    icon: DollarSign,
                    title: "Melhor Custo-Benefício",
                    desc: "A partir de R$ 19,90/mês para 15 notas. Menos de R$ 1,33 por nota emitida.",
                    highlight: "Planos a partir de R$ 19,90"
                  },
                  {
                    icon: Zap,
                    title: "Emissão em 30 Segundos",
                    desc: "Clone notas recorrentes em 2 cliques. Envio automático de PDF e XML por email.",
                    highlight: "Clone em 2 cliques"
                  },
                  {
                    icon: Users,
                    title: "Ideal para Contabilidades",
                    desc: "Gerencie múltiplos CNPJs em um só lugar. Controle de certificados digitais e relatórios.",
                    highlight: "Multi-CNPJ incluído"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-primary hover:shadow-xl transition-all">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-green-600 flex items-center justify-center mb-4 shadow-lg">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                      {item.highlight}
                    </div>
                  </div>
                ))}
              </div>

              <UiMockup />
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <PlansSection />

      {/* FAQ */}
      <FAQSection 
        faqs={[
          {
            question: "Qual é o melhor sistema para emitir NFS-e em Goiânia?",
            answer: "O melhor sistema depende da sua necessidade. Para prestadores que precisam apenas emitir notas fiscais, sistemas especializados como o NFSRápida são mais adequados: simples, baratos e com recursos focados. ERPs completos são indicados apenas para empresas que precisam de gestão completa (estoque, financeiro, etc.)."
          },
          {
            question: "Quanto custa um bom sistema de NFS-e?",
            answer: "Sistemas especializados custam entre R$ 19,90 e R$ 149,90/mês. ERPs completos custam de R$ 200 a R$ 1.000+/mês. O NFSRápida oferece o melhor custo-benefício com planos a partir de R$ 19,90/mês para 15 notas (menos de R$ 1,33 por nota)."
          },
          {
            question: "Preciso de um ERP completo para emitir NFS-e?",
            answer: "Não! A maioria dos prestadores não precisa de ERP completo. Se você só precisa emitir notas fiscais, um sistema especializado é mais adequado, econômico e fácil de usar. ERPs são caros, complexos e possuem recursos que você nunca vai utilizar."
          },
          {
            question: "O que é mais importante em um sistema de NFS-e?",
            answer: "Os critérios essenciais são: 1) Homologação SGISS (obrigatório), 2) Facilidade de uso, 3) Custo-benefício justo, 4) Acesso mobile, 5) Recursos que economizam tempo (clone de notas), 6) Suporte eficiente."
          },
          {
            question: "O NFSRápida funciona no celular?",
            answer: "Sim! O NFSRápida é totalmente responsivo e funciona perfeitamente em smartphones e tablets. Você pode emitir notas de qualquer lugar, a qualquer hora."
          },
          {
            question: "Como funciona o clone de notas?",
            answer: "O clone permite copiar uma nota anterior em 2 cliques. Ideal para clientes recorrentes ou serviços repetidos. Você só precisa ajustar a data e o valor (se necessário) e emitir. Economiza muito tempo!"
          },
          {
            question: "Qual a diferença entre NFSRápida e outros sistemas?",
            answer: "O NFSRápida é especializado em Goiânia, com integração nativa com SGISS. Oferece o melhor custo-benefício (a partir de R$ 19,90/mês), recursos que economizam tempo (clone em 2 cliques), interface simples e suporte especializado. Não é um ERP genérico adaptado."
          },
          {
            question: "Posso testar antes de assinar?",
            answer: "Sim! Oferecemos 7 dias grátis com 10 notas inclusas. Sem cartão de crédito. Teste todos os recursos e veja se o sistema atende suas necessidades antes de decidir."
          }
        ]}
        title="Dúvidas sobre Escolha de Sistema de NFS-e"
        subtitle="Respostas para as principais perguntas sobre como escolher o melhor sistema"
      />

      {/* CTA FINAL */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-green-600 text-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto text-center">
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Experimente o Melhor Sistema de NFS-e de Goiânia
               </h2>
               <p className="text-base sm:text-lg md:text-xl text-green-50 mb-8 sm:mb-10 max-w-2xl mx-auto">
                  Teste grátis por 7 dias e descubra por que somos a escolha de centenas de prestadores e contabilidades.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                     href="https://app.nfsrapida.com.br/" 
                     className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                     Começar teste grátis agora
                     <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a 
                     href="https://wa.me/5562982181715" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-800 transition-all"
                  >
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                     </svg>
                     Falar com especialista
                  </a>
               </div>
               <p className="text-sm text-green-100 mt-6">
                  7 dias grátis • 10 notas inclusas • Sem cartão de crédito
               </p>
            </div>
         </div>
      </section>
    </>
  );
}

