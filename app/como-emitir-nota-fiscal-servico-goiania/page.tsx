import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import MotionWrapper from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: "Como Emitir NFS-e em Goiânia | Guia Completo SGISS 2025",
  description: "Guia completo: como emitir NFS-e em Goiânia com integração SGISS. Passo a passo com certificado digital, sistema sem ERP, clone de notas. Para prestadores e contabilidades. Tutorial 2025 atualizado.",
  keywords: [
    "como emitir nota fiscal serviço goiânia",
    "passo a passo emissão NFS-e Goiânia",
    "SGISS Goiânia tutorial",
    "emitir NFS-e sem ERP",
    "certificado digital NFS-e Goiânia",
    "sistema emissor SGISS Goiânia",
    "integração SGISS Goiânia",
    "tutorial NFS-e prestadores",
    "guia NFS-e contabilidade",
    "clone nota fiscal Goiânia",
    "XML PDF automático NFS-e",
    "requisitos emissão NFS-e Goiânia",
    "substituto tributário Goiânia",
    "emissor gratuito Goiânia fim",
    "gestão multi-CNPJ Goiânia"
  ],
  authors: [{ name: "NFSRápida" }],
  creator: "NFSRápida",
  publisher: "NFSRápida",
  category: "Tutorial",
  openGraph: {
    title: "Como Emitir NFS-e em Goiânia | Guia Completo SGISS 2025",
    description: "Guia completo com integração SGISS. Passo a passo: certificado digital, sistema sem ERP, clone notas. Para prestadores e contabilidades. Tutorial atualizado 2025.",
    url: "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania/",
    siteName: "NFSRápida",
    images: [
      {
        url: "/nfsrapida.png",
        width: 1200,
        height: 630,
        alt: "Como Emitir Nota Fiscal de Serviço em Goiânia - Guia Passo a Passo",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Como Emitir NFS-e em Goiânia | Guia SGISS 2025",
    description: "Guia completo: integração SGISS, sem ERP, clone notas. Para prestadores e contabilidades.",
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
    canonical: "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania/",
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
  CheckCircle,
  XCircle,
  Info,
  BookOpen,
  AlertCircle,
  HelpCircle,
  Briefcase,
  Users
} from 'lucide-react';
import UiMockup from '@/components/UiMockup';
import PlansSection from '@/components/PlansSection';
import FAQSection from '@/components/FAQSection';

export default function ComoEmitirPage() {
  // Schema HowTo - Passo a Passo Completo
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Emitir NFS-e em Goiânia com Integração SGISS",
    "description": "Guia completo passo a passo sobre como emitir NFS-e em Goiânia com integração SGISS. Inclui certificado digital, sistema sem ERP, clone de notas, XML/PDF automático. Para prestadores e contabilidades.",
    "image": {
      "@type": "ImageObject",
      "url": "https://nfsrapida.com.br/nfsrapida.png",
      "width": 1200,
      "height": 630
    },
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "BRL",
      "value": "19.90"
    },
    "prepTime": "PT5M",
    "performTime": "PT2M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Certificado Digital A1"
      },
      {
        "@type": "HowToSupply",
        "name": "CNPJ ativo em Goiânia"
      },
      {
        "@type": "HowToSupply",
        "name": "Inscrição Municipal"
      },
      {
        "@type": "HowToSupply",
        "name": "Sistema Emissor Homologado"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Certificado Digital A1"
      },
      {
        "@type": "HowToTool",
        "name": "Sistema Emissor NFSRápida"
      },
      {
        "@type": "HowToTool",
        "name": "Portal ISSNet Goiânia"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Obtenha um Certificado Digital A1",
        "text": "O certificado digital é obrigatório para emitir NFS-e em Goiânia através de qualquer sistema externo (como NFSRápida, ERP, etc). Ele funciona como uma identidade eletrônica da sua empresa e garante a autenticidade das notas. Você precisa adquirir um certificado A1 (arquivo digital) em uma Autoridade Certificadora credenciada. O custo médio é de R$ 150 a R$ 250 por ano.",
        "url": "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania#passo-a-passo",
        "image": "https://nfsrapida.com.br/nfsrapida.png",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Escolha uma Autoridade Certificadora credenciada pela ICP-Brasil"
          },
          {
            "@type": "HowToDirection",
            "text": "Opte pelo certificado A1 (mais prático para emissão de NFS-e)"
          },
          {
            "@type": "HowToDirection",
            "text": "Guarde o arquivo .pfx e a senha em local seguro"
          }
        ]
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Escolha um Sistema Emissor Homologado com Integração SGISS",
        "text": "Com o fim do emissor gratuito em 01/12/2025, você precisa contratar um sistema emissor homologado e integrado com SGISS. O NFSRápida é especializado em Goiânia, não requer ERP, tem clone de notas e o melhor custo-benefício do mercado.",
        "url": "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania#passo-a-passo",
        "image": "https://nfsrapida.com.br/nfsrapida.png",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Verifique se o sistema é homologado pela Prefeitura"
          },
          {
            "@type": "HowToDirection",
            "text": "Prefira sistemas com interface intuitiva"
          },
          {
            "@type": "HowToDirection",
            "text": "Teste grátis antes de assinar"
          }
        ]
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Importe seu Certificado Digital",
        "text": "Após escolher o sistema, faça o upload do seu certificado digital A1. O sistema armazena de forma criptografada e segura. Você precisará informar a senha do certificado.",
        "url": "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania#passo-a-passo",
        "image": "https://nfsrapida.com.br/nfsrapida.png",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Faça upload do arquivo .pfx do certificado"
          },
          {
            "@type": "HowToDirection",
            "text": "Informe a senha do certificado"
          },
          {
            "@type": "HowToDirection",
            "text": "O certificado fica armazenado de forma criptografada"
          }
        ]
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Sincronize com a Prefeitura de Goiânia",
        "text": "O sistema se conecta automaticamente com a Prefeitura para validar seus dados cadastrais e configurar as alíquotas de impostos. Esse processo é automático e leva poucos segundos.",
        "url": "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania#passo-a-passo",
        "image": "https://nfsrapida.com.br/nfsrapida.png",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "A sincronização é automática após importar o certificado"
          },
          {
            "@type": "HowToDirection",
            "text": "Seus dados fiscais são validados em tempo real"
          },
          {
            "@type": "HowToDirection",
            "text": "Não é necessário configurar manualmente"
          }
        ]
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Preencha os Dados da Nota Fiscal",
        "text": "Preencha um formulário simples com: dados do cliente (tomador), descrição do serviço prestado, valor, data de competência e informações de retenção de impostos se houver.",
        "url": "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania#passo-a-passo",
        "image": "https://nfsrapida.com.br/nfsrapida.png",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Informe os dados do tomador (cliente)"
          },
          {
            "@type": "HowToDirection",
            "text": "Descreva o serviço prestado"
          },
          {
            "@type": "HowToDirection",
            "text": "Informe o valor e retenções de impostos"
          },
          {
            "@type": "HowToDirection",
            "text": "Revise os dados antes de emitir"
          }
        ]
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Emita e Envie a NFS-e",
        "text": "Revise todos os dados e clique em 'Emitir'. A nota é gerada instantaneamente e enviada automaticamente por e-mail para o cliente com o PDF e o arquivo XML. Pronto! Sua nota está emitida e registrada na Prefeitura.",
        "url": "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania#passo-a-passo",
        "image": "https://nfsrapida.com.br/nfsrapida.png",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Revise todos os dados preenchidos"
          },
          {
            "@type": "HowToDirection",
            "text": "Clique em 'Emitir'"
          },
          {
            "@type": "HowToDirection",
            "text": "A nota é enviada automaticamente por e-mail"
          },
          {
            "@type": "HowToDirection",
            "text": "PDF e XML ficam disponíveis para download"
          }
        ]
      }
    ]
  };

  // Schema Article - Para aparecer como artigo educacional
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Como Emitir NFS-e em Goiânia com Integração SGISS | Guia Completo 2025",
    "description": "Guia completo atualizado com integração SGISS: aprenda como emitir NFS-e em Goiânia. Sistema sem ERP, clone de notas, XML/PDF automático. Para prestadores e contabilidades. Tutorial 2025.",
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
      "@id": "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania"
    },
    "articleSection": "Tutoriais",
    "keywords": "emitir NFS-e Goiânia, SGISS Goiânia, sistema sem ERP, clone nota fiscal, certificado digital, tutorial NFS-e, gestão multi-CNPJ, XML PDF automático",
    "about": {
      "@type": "Thing",
      "name": "Nota Fiscal de Serviço Eletrônica",
      "description": "Documento fiscal eletrônico para prestação de serviços"
    },
    "inLanguage": "pt-BR",
    "wordCount": 3000,
    "proficiencyLevel": "Beginner",
    "educationalLevel": "Beginner",
    "learningResourceType": "Tutorial"
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
        "name": "Como Emitir NFS-e em Goiânia",
        "item": "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania"
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
    },
    "sameAs": [
      "https://wa.me/5562982181715"
    ]
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
      "url": "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Sistema de emissão de NFS-e para Goiânia integrado com SGISS. Sem ERP, clone notas, XML/PDF automático. Para prestadores e contabilidades.",
    "featureList": [
      "Integração automática com SGISS",
      "Não precisa de ERP ou sistema complexo",
      "Clone notas recorrentes em 2 cliques",
      "Envio automático de XML e PDF por email",
      "Gestão multi-CNPJ para contabilidades",
      "Certificado digital integrado e seguro",
      "Interface simples e intuitiva"
    ],
    "screenshot": "https://nfsrapida.com.br/nfsrapida.png",
    "softwareVersion": "2.0",
    "releaseNotes": "Atualizado para o novo padrão SGISS e ABRASF 2.04 da Reforma Tributária"
  };

  // Schema WebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Como Emitir NFS-e em Goiânia com Integração SGISS | Guia Completo 2025",
    "description": "Guia completo: como emitir NFS-e em Goiânia com integração SGISS. Sistema sem ERP, clone notas, XML/PDF automático. Para prestadores e contabilidades. Tutorial 2025.",
    "url": "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania",
    "inLanguage": "pt-BR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "NFSRápida",
      "url": "https://nfsrapida.com.br"
    },
    "about": {
      "@type": "Thing",
      "name": "Emissão de NFS-e em Goiânia com SGISS",
      "description": "Tutorial completo sobre como emitir NFS-e em Goiânia com integração SGISS. Sistema sem ERP, clone notas, para prestadores e contabilidades"
    },
    "breadcrumb": {
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
          "name": "Como Emitir NFS-e em Goiânia"
        }
      ]
    },
    "mainEntity": {
      "@type": "HowTo",
      "name": "Como Emitir Nota Fiscal de Serviço em Goiânia"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://nfsrapida.com.br/nfsrapida.png",
      "width": 1200,
      "height": 630
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", "#passo-a-passo"]
    }
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
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
          },
          "price": "19.90",
          "priceCurrency": "BRL",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <>
      {/* Schema HowTo - Passo a Passo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      
      {/* Schema Article - Artigo Educacional */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Schema BreadcrumbList - Navegação */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Schema Organization - Organização */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Schema LocalBusiness - Negócio Local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Schema WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      
      {/* Schema SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16 pb-16 md:pt-40 md:pb-24 overflow-hidden text-white">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px]"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6 md:mb-8">
              <BookOpen className="w-4 h-4" />
              Guia Completo 2025
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-white">
              Como Emitir Nota Fiscal de Serviço em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">Goiânia</span>
            </h1>
            
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Shield className="w-4 h-4" />
              Sistema integrado com SGISS da Prefeitura
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
              Aprenda passo a passo tudo que você precisa saber para emitir NFS-e em Goiânia de forma rápida, segura e dentro das normas fiscais.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="https://app.nfsrapida.com.br/auth/signup/escolher-tipo" 
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-[0_0_40px_-10px_rgba(16,194,12,0.5)] hover:shadow-[0_0_60px_-15px_rgba(16,194,12,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Começar Teste Grátis
                <ArrowRight className="w-5 h-5" />
              </Link>              
            </div>
          </div>
        </div>
      </section>

      {/* PASSO A PASSO */}
      <section id="passo-a-passo" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <MotionWrapper direction="up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Passo a Passo: Como Emitir NFS-e em Goiânia
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-10">
                Siga este guia completo para começar a emitir suas notas fiscais de serviço em Goiânia de forma simples e rápida.
              </p>
              
              {/* Passos */}
              <div className="space-y-6">
                {[
                  {
                    number: "1",
                    title: "Obtenha um Certificado Digital A1",
                    desc: "O certificado digital é obrigatório para emitir NFS-e em Goiânia através de qualquer sistema externo. Ele funciona como uma identidade eletrônica da sua empresa. Você precisa adquirir um certificado A1 (arquivo digital) em uma Autoridade Certificadora credenciada. O custo médio é de R$ 150 a R$ 250 por ano.",
                    icon: Shield
                  },
                  {
                    number: "2",
                    title: "Escolha um Sistema Emissor Homologado",
                    desc: "Com o fim do emissor gratuito, você precisa contratar um sistema emissor homologado pela Prefeitura de Goiânia. O NFSRápida é especializado em Goiânia, integrado automaticamente com o SGISS, e não requer ERP. Sistema completo e independente com o melhor custo-benefício do mercado.",
                    icon: CheckCircle
                  },
                  {
                    number: "3",
                    title: "Importe seu Certificado Digital",
                    desc: "Após escolher o sistema, faça o upload do seu certificado digital A1. O sistema armazena de forma criptografada e segura. Você precisará informar a senha do certificado.",
                    icon: FileText
                  },
                  {
                    number: "4",
                    title: "Sincronize com o SGISS da Prefeitura",
                    desc: "O NFSRápida se conecta automaticamente com o SGISS (Sistema de Gestão de ISS) da Prefeitura de Goiânia para validar seus dados cadastrais e configurar as alíquotas de impostos. Esse processo é automático e leva poucos segundos. Você não precisa acessar o site da prefeitura.",
                    icon: Zap
                  },
                  {
                    number: "5",
                    title: "Preencha os Dados da Nota Fiscal",
                    desc: "Preencha um formulário simples com: dados do cliente (tomador), descrição do serviço prestado, valor, data de competência e informações de retenção de impostos se houver.",
                    icon: FileText
                  },
                  {
                    number: "6",
                    title: "Emita e Envie a NFS-e",
                    desc: "Revise todos os dados e clique em 'Emitir'. A nota é gerada instantaneamente e enviada automaticamente por e-mail para o cliente com o PDF e o arquivo XML. Pronto! Sua nota está emitida e registrada na Prefeitura.",
                    icon: CheckCircle
                  }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-blue-50 p-6 md:p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>


      {/* PARA CONTABILIDADES - Premium Feature Card */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <MotionWrapper direction="up">
              <div className="group bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-blue-100 relative overflow-hidden hover:shadow-blue-500/10 transition-all duration-500">
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-[2.5rem] transition-colors duration-500 pointer-events-none"></div>
                
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Left: Icon/Image */}
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-600/30 group-hover:scale-105 transition-transform duration-500 rotate-3 group-hover:rotate-0">
                      <Briefcase className="w-10 h-10 md:w-14 md:h-14 text-white" />
                    </div>
                    {/* Floating badges */}
                    <div className="absolute -bottom-4 -right-4 bg-white px-3 py-1.5 rounded-lg shadow-lg border border-blue-50 flex items-center gap-1.5 animate-bounce-slow">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs font-bold text-slate-700">Multi-CNPJ</span>
                    </div>
                  </div>
                  
                  {/* Right: Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-wide">
                      <Users className="w-3 h-3" />
                      Área Exclusiva para Contadores
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                      Escritórios de Contabilidade:<br />
                      <span className="text-blue-600">Gerencie Múltiplos Clientes</span>
                    </h2>
                    
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                      Se você é contador, o NFSRápida permite que você centralize a emissão de NFS-e de <strong>todos os seus clientes prestadores de serviço</strong> em um único painel administrativo.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {[
                        {
                          icon: Users,
                          title: "Gestão Centralizada",
                          desc: "Alterne entre clientes com 1 clique"
                        },
                        {
                          icon: FileText,
                          title: "Relatórios em Lote",
                          desc: "Faturamento e impostos consolidados"
                        },
                        {
                          icon: Shield,
                          title: "Inadimplência Zero",
                          desc: "Controle de acesso por pagamento"
                        },
                        {
                          icon: Star,
                          title: "Nova Receita",
                          desc: "Monetize o emissor como serviço"
                        }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 hover:bg-blue-50 hover:border-blue-100 transition-colors group/item">
                          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover/item:bg-blue-600 transition-colors">
                            <item.icon className="w-5 h-5 text-blue-600 group-hover/item:text-white transition-colors" />
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                            <p className="text-xs text-slate-500 group-hover/item:text-blue-700/70">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link 
                      href="/nfs-e-contabilidade-goiania/"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 w-full md:w-auto justify-center"
                    >
                      Conhecer Solução para Contadores
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* REQUISITOS */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <MotionWrapper direction="up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
                Requisitos para Emitir NFS-e em Goiânia
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                Antes de começar a emitir suas notas fiscais, você precisa garantir que possui os seguintes requisitos:
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">💡 Integração Automática com SGISS</h4>
                    <p className="text-sm text-blue-800 leading-relaxed">
                      O NFSRápida se integra automaticamente com o <strong>SGISS (Sistema de Gestão de ISS)</strong> da Prefeitura de Goiânia. Você não precisa acessar o site da prefeitura - tudo é feito pelo sistema de forma automática e transparente.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    title: "Certificado Digital A1",
                    desc: "Obrigatório para emitir NFS-e em Goiânia através de qualquer sistema externo (como NFSRápida, ERP, etc).",
                    required: true
                  },
                  {
                    title: "CNPJ Ativo em Goiânia",
                    desc: "Empresa registrada na Prefeitura de Goiânia",
                    required: true
                  },
                  {
                    title: "Inscrição Municipal",
                    desc: "Cadastro ativo na Secretaria de Finanças",
                    required: true
                  },
                  {
                    title: "Sistema Emissor Homologado",
                    desc: "Software autorizado pela Prefeitura, integrado com SGISS",
                    required: true
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${item.required ? 'bg-green-100' : 'bg-slate-100'}`}>
                      {item.required ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <Info className="w-5 h-5 text-slate-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4 md:p-6">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-green-900 mb-2">MEI não é afetado</h4>
                    <p className="text-sm text-green-800 leading-relaxed">
                      A mudança <strong>não afeta os Microempreendedores Individuais (MEIs)</strong>, que já emitem suas notas fiscais por uma plataforma nacional específica. Como o MEI nunca esteve vinculado ao sistema municipal, sua rotina de emissão permanece exatamente a mesma.
                    </p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* DICAS IMPORTANTES */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <MotionWrapper direction="up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Dicas Importantes para Emitir NFS-e
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: AlertCircle,
                    title: "Verifique o Certificado",
                    desc: "Sempre confira a validade do certificado digital. Renove com antecedência de 30 dias."
                  },
                  {
                    icon: CheckCircle,
                    title: "Confira os Dados do Cliente",
                    desc: "Revise CPF/CNPJ, endereço e e-mail do tomador antes de emitir a nota."
                  },
                  {
                    icon: Info,
                    title: "Consulte Substituto Tributário",
                    desc: "Verifique no site da Prefeitura se o tomador é Substituto Tributário antes de emitir."
                  },
                  {
                    icon: FileText,
                    title: "Informe Retenções Corretamente",
                    desc: "Se houver retenção de impostos (IRRF, PIS, COFINS, CSLL, INSS), informe corretamente."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-blue-100 hover:border-blue-300 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>



      {/* FAQ */}
      <FAQSection 
        faqs={[
          {
            question: "Preciso ter certificado digital para emitir NFS-e?",
            answer: "Sim! O certificado digital A1 é obrigatório para emitir NFS-e em Goiânia através de qualquer sistema externo (como NFSRápida, ERP, etc). Ele funciona como uma assinatura digital que garante a autenticidade e validade jurídica da nota fiscal. Você pode adquirir em qualquer Autoridade Certificadora credenciada."
          },
          {
            question: "Quanto tempo leva para começar a emitir?",
            answer: "Com o NFSRápida, você pode começar a emitir em menos de 2 minutos! Basta: 1) Criar sua conta, 2) Importar seu certificado digital, 3) Sincronizar com a Prefeitura (automático). Pronto! Já pode emitir sua primeira nota."
          },
          {
            question: "Posso emitir nota para cliente de outra cidade?",
            answer: "Sim! Você pode emitir NFS-e para clientes de qualquer cidade do Brasil ou até do exterior. O que importa é que sua empresa (prestadora) esteja cadastrada em Goiânia."
          },
          {
            question: "O que acontece se eu errar ao emitir uma nota?",
            answer: "Se você identificar o erro antes de transmitir, basta corrigir os dados. Se a nota já foi emitida, você precisará cancelá-la (dentro do prazo legal) e emitir uma nova nota correta."
          },
          {
            question: "Como saber se o tomador é Substituto Tributário?",
            answer: "Antes de emitir a nota, consulte o cadastro do tomador no site da Prefeitura de Goiânia. Informe o CNPJ do tomador e verifique se ele consta como Substituto Tributário. Se for, você deve marcar ISS retido na nota. Se não for, não deve marcar. Informar incorretamente causa rejeição da nota fiscal.",
            link: {
              url: "https://www.goiania.go.gov.br/sistemas/sccae/asp/sccae00010r0.asp",
              text: "Acessar consulta da Prefeitura"
            }
          },
          {
            question: "Quanto custa emitir NFS-e em Goiânia?",
            answer: "Com o fim do emissor gratuito, você precisará de um sistema pago. No NFSRápida, os planos começam em R$ 19,90/mês para 15 notas (menos de R$ 1,33 por nota). Muito mais barato que sistemas que cobram de R$ 0,50 a R$ 40,00 por nota emitida."
          }
        ]}
        title="Dúvidas Frequentes"
        subtitle="Respostas para as principais perguntas sobre emissão de NFS-e em Goiânia"
      />

      {/* CTA FINAL */}
      <section className="py-16 md:py-20 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Pronto para emitir suas NFS-e?
               </h2>
               <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                  Comece agora mesmo a emitir suas notas fiscais de serviço em Goiânia de forma simples, rápida e segura.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                     href="https://app.nfsrapida.com.br/auth/signup/escolher-tipo" 
                     className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                     Começar teste grátis
                     <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a 
                     href="https://wa.me/5562982181715" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-all"
                  >
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                     </svg>
                     Tirar dúvidas
                  </a>
               </div>
               <p className="text-sm text-slate-500 mt-6">
                  7 dias grátis com 10 notas inclusas • Sem cartão de crédito
               </p>
            </div>
         </div>
      </section>
    </>
  );
}

