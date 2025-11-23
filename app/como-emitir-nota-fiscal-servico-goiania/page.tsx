import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import MotionWrapper from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: "Como Emitir NFS-e em Goiânia em 4 Passos | Guia SGISS 2025",
  description: "Aprenda a emitir NFS-e em Goiânia em 4 passos simples. Sistema homologado SGISS, certificado digital, sem ERP. Guia completo com requisitos e dicas para escolher o melhor sistema. Tutorial atualizado 2025.",
  keywords: [
    "como emitir nota fiscal serviço goiânia",
    "emitir NFS-e goiânia 4 passos",
    "sistema homologado SGISS Goiânia",
    "escolher sistema NFS-e Goiânia",
    "emitir NFS-e sem ERP",
    "certificado digital NFS-e Goiânia",
    "requisitos NFS-e Goiânia",
    "integração SGISS Goiânia",
    "tutorial NFS-e prestadores",
    "MEI não afetado Goiânia",
    "clone nota fiscal Goiânia",
    "sistema emissor responsivo",
    "substituto tributário Goiânia",
    "dicas escolher emissor NFS-e",
    "sistema especializado NFS-e"
  ],
  authors: [{ name: "NFSRápida" }],
  creator: "NFSRápida",
  publisher: "NFSRápida",
  category: "Tutorial",
  openGraph: {
    title: "Como Emitir NFS-e em Goiânia em 4 Passos | Guia SGISS 2025",
    description: "Aprenda em 4 passos: sistema homologado SGISS, certificado digital, requisitos e dicas para escolher o melhor emissor. Guia completo atualizado.",
    url: "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania/",
    siteName: "NFSRápida",
    images: [
      {
        url: "/nfsrapida.png",
        width: 1200,
        height: 630,
        alt: "Como Emitir NFS-e em Goiânia em 4 Passos - Guia Completo",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Como Emitir NFS-e em Goiânia em 4 Passos",
    description: "Sistema homologado SGISS, certificado digital, requisitos e dicas. Guia completo 2025.",
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
  Users,
  Smartphone,
  LayoutDashboard,
  Copy,
  Mail
} from 'lucide-react';
import UiMockup from '@/components/UiMockup';
import PlansSection from '@/components/PlansSection';
import FAQSection from '@/components/FAQSection';

export default function ComoEmitirPage() {
  // Schema HowTo - Passo a Passo Completo
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Emitir NFS-e em Goiânia em 4 Passos",
    "description": "Aprenda a emitir NFS-e em Goiânia em 4 passos simples: escolha sistema homologado SGISS, certificado digital, preenchimento e emissão. Guia completo com requisitos e dicas.",
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
        "name": "Escolha um Sistema Emissor Homologado com o SGISS",
        "text": "IMPORTANTE: Apenas sistemas homologados com o SGISS da Prefeitura de Goiânia podem emitir notas fiscais. Existem diversos sistemas disponíveis no mercado, incluindo ERPs completos e sistemas especializados. Para prestadores que não possuem ERP, recomendamos sistemas dedicados que sejam especializados em Goiânia e totalmente integrados com o SGISS. Verifique se o sistema oferece interface intuitiva, funciona em dispositivos móveis, possui recursos como clone de notas recorrentes e envio automático de XML e PDF por e-mail. Teste grátis antes de contratar para garantir que atende suas necessidades.",
        "url": "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania#passo-a-passo",
        "image": "https://nfsrapida.com.br/nfsrapida.png",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Verifique se o sistema é homologado com o SGISS da Prefeitura"
          },
          {
            "@type": "HowToDirection",
            "text": "Avalie se você precisa de um ERP completo ou apenas um emissor"
          },
          {
            "@type": "HowToDirection",
            "text": "Prefira sistemas com interface intuitiva e responsiva"
          },
          {
            "@type": "HowToDirection",
            "text": "Verifique recursos como clone de notas e envio automático"
          },
          {
            "@type": "HowToDirection",
            "text": "Teste grátis antes de assinar"
          }
        ]
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Certificado Digital A1 - Obtenha e Configure",
        "text": "O certificado digital A1 é obrigatório para emitir NFS-e em Goiânia. Caso ainda não possua, adquira um certificado digital A1 em uma Autoridade Certificadora credenciada pela ICP-Brasil (custo médio de R$ 150 a R$ 250 por ano). O certificado A1 é mais prático que o A3 pois fica armazenado no computador e não requer token ou cartão. Após escolher o sistema emissor, faça o upload do arquivo .pfx do seu certificado digital e informe a senha. O sistema validará automaticamente o certificado e buscará seus dados cadastrais junto à Prefeitura. Guarde o arquivo .pfx e a senha em local seguro. Lembre-se de renovar o certificado com pelo menos 30 dias de antecedência para evitar interrupção na emissão de notas.",
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
          },
          {
            "@type": "HowToDirection",
            "text": "Faça upload do arquivo .pfx no sistema emissor"
          },
          {
            "@type": "HowToDirection",
            "text": "Informe a senha do certificado"
          },
          {
            "@type": "HowToDirection",
            "text": "Aguarde a validação automática do sistema"
          }
        ]
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Preencha os Dados da Nota Fiscal",
        "text": "Agora é hora de preencher as informações da nota fiscal. Primeiro, informe os dados do tomador (cliente): CPF ou CNPJ, nome ou razão social, endereço completo e e-mail para receber a nota. Em seguida, preencha a descrição detalhada do serviço prestado - seja claro e específico sobre o que foi realizado. Informe o valor total do serviço e a data de competência (quando o serviço foi prestado). Selecione o código de serviço correto da lista de serviços municipais. Se houver retenções de impostos (IRRF, PIS, COFINS, CSLL, INSS), marque as opções correspondentes e informe os valores retidos. Verifique se o tomador é Substituto Tributário consultando o site da Prefeitura - se for, marque a opção de ISS retido. Para clientes recorrentes, use a função de clone de notas anteriores para economizar tempo - basta ajustar o valor e a data. Revise todos os dados com atenção antes de prosseguir para a emissão, pois erros podem causar rejeição da nota.",
        "url": "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania#passo-a-passo",
        "image": "https://nfsrapida.com.br/nfsrapida.png",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Informe CPF ou CNPJ do tomador (cliente)"
          },
          {
            "@type": "HowToDirection",
            "text": "Preencha nome, endereço e e-mail do cliente"
          },
          {
            "@type": "HowToDirection",
            "text": "Descreva detalhadamente o serviço prestado"
          },
          {
            "@type": "HowToDirection",
            "text": "Informe o valor total e a data de competência"
          },
          {
            "@type": "HowToDirection",
            "text": "Selecione o código de serviço correto"
          },
          {
            "@type": "HowToDirection",
            "text": "Marque retenções de impostos se houver (IRRF, PIS, COFINS, CSLL, INSS)"
          },
          {
            "@type": "HowToDirection",
            "text": "Verifique se o tomador é Substituto Tributário"
          },
          {
            "@type": "HowToDirection",
            "text": "Use clone de notas para clientes recorrentes"
          },
          {
            "@type": "HowToDirection",
            "text": "Revise todos os dados antes de emitir"
          }
        ]
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Emita e Envie a NFS-e",
        "text": "Após revisar cuidadosamente todos os dados preenchidos, clique no botão 'Emitir'. O sistema enviará a nota para o SGISS da Prefeitura de Goiânia, que validará as informações e autorizará a emissão em poucos segundos. A nota é gerada instantaneamente com um número único e enviada automaticamente por e-mail para o cliente com o arquivo PDF (para visualização) e o arquivo XML (para escrituração contábil). Você também pode baixar esses arquivos a qualquer momento no sistema. Pronto! Sua nota está emitida, registrada na Prefeitura e enviada ao cliente. O sistema mantém um histórico completo de todas as notas emitidas para consulta futura.",
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
            "text": "Aguarde a validação do SGISS (poucos segundos)"
          },
          {
            "@type": "HowToDirection",
            "text": "A nota é enviada automaticamente por e-mail com PDF e XML"
          },
          {
            "@type": "HowToDirection",
            "text": "PDF e XML ficam disponíveis para download no sistema"
          },
          {
            "@type": "HowToDirection",
            "text": "Consulte o histórico de notas emitidas quando necessário"
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
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
              Aprenda passo a passo tudo que você precisa saber para emitir NFS-e em Goiânia de forma rápida, segura e dentro das normas fiscais.
            </p>
          </div>
        </div>
      </section>

      {/* PASSO A PASSO */}
      <section id="passo-a-passo" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <MotionWrapper direction="up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Como Emitir NFS-e em Goiânia em 4 Passos
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-10">
                Siga este guia completo para começar a emitir suas notas fiscais de serviço em Goiânia de forma simples e rápida.
              </p>
              
              {/* Passos */}
              <div className="space-y-6">
                {[
                  {
                    number: "1",
                    title: "Escolha um Sistema Emissor Homologado com o SGISS",
                    desc: "IMPORTANTE: Apenas sistemas homologados com o SGISS da Prefeitura de Goiânia podem emitir notas fiscais. Existem diversos sistemas disponíveis no mercado, incluindo ERPs completos e sistemas especializados. Para prestadores que não possuem ERP, recomendamos sistemas dedicados como o NFSRápida, que é especializado em Goiânia e totalmente integrado com o SGISS. Verifique se o sistema oferece interface intuitiva, funciona em dispositivos móveis, possui recursos como clone de notas recorrentes e envio automático de XML e PDF por e-mail. Teste grátis antes de contratar para garantir que atende suas necessidades.",
                    icon: CheckCircle,
                    highlight: true
                  },
                  {
                    number: "2",
                    title: "Certificado Digital A1 - Obtenha e Configure",
                    desc: "O certificado digital A1 é obrigatório para emitir NFS-e em Goiânia. Caso ainda não possua, adquira um certificado digital A1 em uma Autoridade Certificadora credenciada pela ICP-Brasil (custo médio de R$ 150 a R$ 250 por ano). O certificado A1 é mais prático que o A3 pois fica armazenado no computador e não requer token ou cartão. Após escolher o sistema emissor, faça o upload do arquivo .pfx do seu certificado digital e informe a senha. O sistema validará automaticamente o certificado e buscará seus dados cadastrais junto à Prefeitura. Guarde o arquivo .pfx e a senha em local seguro. Lembre-se de renovar o certificado com pelo menos 30 dias de antecedência para evitar interrupção na emissão de notas.",
                    icon: Shield
                  },
                  {
                    number: "3",
                    title: "Preencha os Dados da Nota Fiscal",
                    desc: "Agora é hora de preencher as informações da nota fiscal. Primeiro, informe os dados do tomador (cliente): CPF ou CNPJ, nome ou razão social, endereço completo e e-mail para receber a nota. Em seguida, preencha a descrição detalhada do serviço prestado - seja claro e específico sobre o que foi realizado. Informe o valor total do serviço e a data de competência (quando o serviço foi prestado). Selecione o código de serviço correto da lista de serviços municipais. Se houver retenções de impostos (IRRF, PIS, COFINS, CSLL, INSS), marque as opções correspondentes e informe os valores retidos. Verifique se o tomador é Substituto Tributário consultando o site da Prefeitura - se for, marque a opção de ISS retido. Para clientes recorrentes, use a função de clone de notas anteriores para economizar tempo - basta ajustar o valor e a data. Revise todos os dados com atenção antes de prosseguir para a emissão, pois erros podem causar rejeição da nota.",
                    icon: FileText
                  },
                  {
                    number: "4",
                    title: "Emita e Envie a NFS-e",
                    desc: "Após revisar cuidadosamente todos os dados preenchidos, clique no botão 'Emitir'. O sistema enviará a nota para o SGISS da Prefeitura de Goiânia, que validará as informações e autorizará a emissão em poucos segundos. A nota é gerada instantaneamente com um número único e enviada automaticamente por e-mail para o cliente com o arquivo PDF (para visualização) e o arquivo XML (para escrituração contábil). Você também pode baixar esses arquivos a qualquer momento no sistema. Pronto! Sua nota está emitida, registrada na Prefeitura e enviada ao cliente. O sistema mantém um histórico completo de todas as notas emitidas para consulta futura.",
                    icon: CheckCircle
                  }
                ].map((step, i) => (
                  <div key={i} className={`bg-gradient-to-br p-4 sm:p-6 md:p-8 rounded-2xl border-2 transition-all ${
                    step.highlight 
                      ? 'from-amber-50 to-orange-50 border-orange-300 hover:border-orange-400 shadow-lg' 
                      : 'from-slate-50 to-blue-50 border-blue-100 hover:border-blue-300'
                  }`}>
                    <div className="flex items-start gap-3 sm:gap-4 mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-base sm:text-lg md:text-xl flex-shrink-0">
                        {step.number}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 flex-1 min-w-0 pt-0.5 sm:pt-1">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
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
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                Antes de começar a emitir suas notas fiscais, você precisa garantir que possui os seguintes requisitos e seguir as orientações abaixo:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Certificado Digital A1",
                    desc: "Obrigatório para emitir NFS-e em Goiânia através de qualquer sistema externo. Sempre confira a validade e renove com antecedência de 30 dias.",
                    required: true
                  },
                  {
                    title: "CNPJ e Inscrição Municipal",
                    desc: "Empresa registrada na Prefeitura de Goiânia com CNPJ ativo e Inscrição Municipal na Secretaria de Finanças.",
                    required: true
                  },
                  {
                    title: "Sistema Emissor Homologado",
                    desc: "Software autorizado pela Prefeitura, integrado com SGISS.",
                    required: true
                  },
                  {
                    title: "Dados do Cliente Corretos",
                    desc: "Revise CPF/CNPJ, endereço e e-mail do tomador antes de emitir a nota.",
                    required: true
                  },
                  {
                    title: "Consulta de Substituto Tributário",
                    desc: "Verifique no site da Prefeitura se o tomador é Substituto Tributário antes de emitir.",
                    required: true
                  },
                  {
                    title: "Retenções de Impostos",
                    desc: "Se houver retenção de impostos (IRRF, PIS, COFINS, CSLL, INSS), informe corretamente.",
                    required: true
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 md:p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-green-100">
                      <CheckCircle className="w-5 h-5 text-green-600" />
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

      {/* DICAS PARA ESCOLHER SISTEMA */}
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
                  Guia de Escolha
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                  Como Escolher o Sistema Ideal para Emitir NFS-e
                </h2>
                <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                  Considere estes pontos importantes ao escolher seu sistema emissor
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

      {/* MEI NÃO É AFETADO */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-200/30 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-200/30 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <MotionWrapper direction="up">
              <div className="group relative bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-green-500/20">
                {/* Decorative corner badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                  ✓ Informação Importante
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Icon */}
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-xl shadow-green-500/30 group-hover:scale-105 transition-transform duration-300">
                      <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-green-400 animate-ping opacity-20"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      MEI - Microempreendedor Individual
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                      MEI <span className="text-green-600">não é afetado</span>
                    </h2>
                    
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
                      A mudança <strong className="text-green-700">não afeta os Microempreendedores Individuais (MEIs)</strong>, que já emitem suas notas fiscais por uma plataforma nacional específica. Como o MEI nunca esteve vinculado ao sistema municipal, sua rotina de emissão permanece exatamente a mesma.
                    </p>
                    
                    {/* Additional info boxes */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl border border-green-100">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-green-900">Rotina inalterada</span>
                      </div>
                      <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl border border-green-100">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-green-900">Plataforma nacional</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection 
        faqs={[
          {
            question: "Quais são os 4 passos para emitir NFS-e em Goiânia?",
            answer: "Os 4 passos são: 1) Escolha um sistema emissor homologado com o SGISS, 2) Obtenha e importe seu certificado digital A1 (o sistema sincroniza automaticamente com a Prefeitura), 3) Preencha os dados da nota fiscal (tomador, serviço, valor, retenções), 4) Emita e envie automaticamente por e-mail. Todo o processo leva menos de 2 minutos após a configuração inicial."
          },
          {
            question: "Como escolher o melhor sistema para emitir NFS-e?",
            answer: "Considere: facilidade de uso (interface intuitiva), funciona no celular (responsivo), adequado à sua necessidade (evite ERPs complexos se só precisa emitir notas), integração automática com SGISS, recursos como clone de notas e envio automático de PDF/XML por e-mail. Para prestadores sem ERP, sistemas especializados são mais adequados e econômicos."
          },
          {
            question: "Preciso ter certificado digital para emitir NFS-e?",
            answer: "Sim! O certificado digital A1 é obrigatório para emitir NFS-e em Goiânia através de qualquer sistema externo. Ele garante a autenticidade e validade jurídica da nota fiscal. Você pode adquirir em qualquer Autoridade Certificadora credenciada por R$ 150 a R$ 250/ano. Lembre-se de renovar com 30 dias de antecedência."
          },
          {
            question: "O que é necessário para emitir NFS-e em Goiânia?",
            answer: "Você precisa de: certificado digital A1 válido, CNPJ ativo em Goiânia com inscrição municipal, sistema emissor homologado com SGISS, dados corretos do cliente, verificar se o tomador é substituto tributário, e informar corretamente as retenções de impostos (IRRF, PIS, COFINS, CSLL, INSS)."
          },
          {
            question: "MEI precisa seguir esses passos para emitir nota em Goiânia?",
            answer: "Não! MEI (Microempreendedor Individual) não é afetado por essas mudanças. MEIs já emitem suas notas fiscais por uma plataforma nacional específica e nunca estiveram vinculados ao sistema municipal. A rotina de emissão do MEI permanece exatamente a mesma."
          },
          {
            question: "Como saber se o tomador é Substituto Tributário?",
            answer: "Antes de emitir a nota, consulte o cadastro do tomador no site da Prefeitura de Goiânia. Informe o CNPJ do tomador e verifique se ele consta como Substituto Tributário. Se for, você deve marcar ISS retido na nota. Informar incorretamente causa rejeição da nota fiscal.",
            link: {
              url: "https://www.goiania.go.gov.br/sistemas/sccae/asp/sccae00010r0.asp",
              text: "Acessar consulta da Prefeitura"
            }
          },
          {
            question: "Preciso de um ERP completo para emitir NFS-e?",
            answer: "Não! Muitos prestadores não precisam de ERPs complexos, apenas emitir NFS-e. ERPs completos são caros e difíceis de usar. Para a maioria dos prestadores de serviço, um sistema especializado em NFS-e é mais adequado, econômico e fácil de usar. Evite pagar por recursos desnecessários."
          },
          {
            question: "Quanto custa emitir NFS-e em Goiânia?",
            answer: "Com o fim do emissor gratuito, você precisará de um sistema pago. No NFSRápida, os planos começam em R$ 19,90/mês para 15 notas (menos de R$ 1,33 por nota). Muito mais barato que sistemas que cobram de R$ 0,50 a R$ 40,00 por nota emitida."
          }
        ]}
        title="Dúvidas Frequentes sobre Emissão de NFS-e em Goiânia"
        subtitle="Respostas atualizadas para as principais perguntas sobre como emitir NFS-e"
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
                     href="https://app.nfsrapida.com.br/" 
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

