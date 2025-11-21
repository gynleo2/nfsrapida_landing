import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import MotionWrapper from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: "Fim do Emissor Gratuito de NFS-e em Goiânia | Novo Padrão SGISS 2025",
  description: "A partir de 01/12/2025, o emissor gratuito de NFS-e será descontinuado. Entenda o novo padrão SGISS, o modelo ABRASF 2.04 da Reforma Tributária e como migrar para um sistema homologado.",
  keywords: [
    "fim emissor gratuito NFS-e Goiânia",
    "SGISS Goiânia",
    "padrão ABRASF 2.04",
    "Decreto 2.824/2025 Goiânia",
    "Reforma Tributária NFS-e",
    "Lei Complementar 214/2025",
    "mudança emissão NFS-e Goiânia",
    "prazo emissão nota fiscal serviço Goiânia",
    "migração NFS-e Goiânia",
    "novo padrão NFS-e Goiânia 2025"
  ],
  authors: [{ name: "NFSRápida" }],
  creator: "NFSRápida",
  publisher: "NFSRápida",
  category: "Notícias Fiscais",
  openGraph: {
    title: "Fim do Emissor Gratuito de NFS-e em Goiânia | Novo Padrão SGISS",
    description: "Entenda o novo padrão SGISS, o modelo ABRASF 2.04 da Reforma Tributária e como migrar até 01/12/2025.",
    url: "https://nfsrapida.com.br/fim-emissor-gratuito-goiania/",
    siteName: "NFSRápida",
    images: [
      {
        url: "/nfsrapida.png",
        width: 1200,
        height: 630,
        alt: "Fim do Emissor Gratuito de NFS-e em Goiânia",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fim do Emissor Gratuito de NFS-e em Goiânia | Novo Padrão SGISS",
    description: "Entenda o novo padrão SGISS e ABRASF 2.04. Migre até 01/12/2025.",
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
    canonical: "https://nfsrapida.com.br/fim-emissor-gratuito-goiania/",
  },
};

import { 
  AlertTriangle, 
  Clock, 
  X, 
  Check, 
  ArrowRight, 
  Calendar,
  AlertCircle,
  Info
} from 'lucide-react';
import FAQSection from '@/components/FAQSection';

export default function MudancaGoianiaPage() {
  // Schema Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Fim do Emissor Gratuito de NFS-e em Goiânia | Novo Padrão SGISS e ABRASF 2.04",
    "description": "A partir de 01/12/2025, o emissor gratuito de NFS-e será descontinuado. Entenda o novo padrão SGISS, o modelo ABRASF 2.04 da Reforma Tributária e como migrar.",
    "image": {
      "@type": "ImageObject",
      "url": "https://nfsrapida.com.br/nfsrapida.png",
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Organization",
      "name": "NFSRápida",
      "url": "https://nfsrapida.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NFSRápida",
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
      "@id": "https://nfsrapida.com.br/fim-emissor-gratuito-goiania"
    },
    "articleBody": "A Prefeitura de Goiânia anunciou oficialmente que o emissor gratuito de Nota Fiscal de Serviço Eletrônica (NFS-e) será descontinuado a partir de 01/12/2025. O novo sistema SGISS (Sistema de Gestão, Fiscalização e Arrecadação do ISS), regulamentado pelo Decreto nº 2.824/2025, adota o padrão nacional ABRASF 2.04. Essa mudança faz parte das adequações à Reforma Tributária (Lei Complementar nº 214/2025). Prestadores de serviço que não migrarem para um sistema homologado ficarão irregulares.",
    "keywords": "NFS-e Goiânia, SGISS, ABRASF 2.04, Reforma Tributária, Decreto 2.824/2025, migração NFS-e",
    "articleSection": "Notícias Fiscais",
    "inLanguage": "pt-BR",
    "wordCount": 2500,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".article-body"]
    }
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
        "name": "Fim do Emissor Gratuito em Goiânia",
        "item": "https://nfsrapida.com.br/fim-emissor-gratuito-goiania"
      }
    ]
  };

  // Schema Event - Data importante
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Fim do Emissor Gratuito de NFS-e em Goiânia",
    "description": "Data limite para migração do emissor gratuito de NFS-e da Prefeitura de Goiânia para sistemas homologados pagos. Após 30/11/2025, será necessário usar sistemas pagos homologados.",
    "startDate": "2025-11-30T23:59:59-03:00",
    "endDate": "2025-12-01T00:00:00-03:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Goiânia",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Goiânia",
        "addressRegion": "GO",
        "addressCountry": "BR"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Prefeitura de Goiânia",
      "url": "https://www.goiania.go.gov.br"
    },
    "isAccessibleForFree": false,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "19.90",
      "priceCurrency": "BRL",
      "url": "https://nfsrapida.com.br/fim-emissor-gratuito-goiania",
      "validFrom": "2024-11-21"
    }
  };

  // Schema FAQPage - Gerado dinamicamente pelo componente FAQSection
  // Removido para evitar duplicação. O FAQ é passado como props para o componente.

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
      "url": "https://nfsrapida.com.br/fim-emissor-gratuito-goiania"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Sistema de emissão de Nota Fiscal de Serviço Eletrônica (NFS-e) para Goiânia. Homologado no padrão SGISS e ABRASF 2.04.",
    "featureList": [
      "Emissão de NFS-e em 30 segundos",
      "Compatível com SGISS e ABRASF 2.04",
      "Certificado digital integrado",
      "Envio automático por e-mail",
      "Sincronização com Prefeitura"
    ],
    "screenshot": "https://nfsrapida.com.br/nfsrapida.png"
  };

  // Schema WebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Fim do Emissor Gratuito de NFS-e em Goiânia | Novo Padrão SGISS",
    "description": "A partir de 01/12/2025, o emissor gratuito de NFS-e será descontinuado. Entenda o novo padrão SGISS, o modelo ABRASF 2.04 da Reforma Tributária e como migrar para um sistema homologado.",
    "url": "https://nfsrapida.com.br/fim-emissor-gratuito-goiania",
    "inLanguage": "pt-BR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "NFSRápida",
      "url": "https://nfsrapida.com.br"
    },
    "about": {
      "@type": "Thing",
      "name": "Reforma Tributária NFS-e Goiânia",
      "description": "Mudança no sistema de emissão de notas fiscais de serviço em Goiânia"
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
          "name": "Fim do Emissor Gratuito em Goiânia"
        }
      ]
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Fim do Emissor Gratuito de NFS-e em Goiânia"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://nfsrapida.com.br/nfsrapida.png",
      "width": 1200,
      "height": 630
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2"]
    }
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
    "description": "Sistema de emissão de Nota Fiscal de Serviço Eletrônica (NFS-e) para Goiânia. Alternativa ao emissor gratuito descontinuado.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-62-98218-1715",
      "contactType": "Customer Service",
      "availableLanguage": "Portuguese",
      "areaServed": "BR",
      "contactOption": "TollFree"
    },
    "sameAs": [
      "https://wa.me/5562982181715"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Goiânia",
      "addressRegion": "GO",
      "addressCountry": "BR"
    }
  };

  return (
    <>
      {/* Schema Article/NewsArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Schema BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Schema Event - Data Importante */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      
      {/* Schema Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
      
      {/* HERO / ALERT HEADER */}
      <section className="relative bg-slate-900 pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden text-white">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/20 rounded-full blur-[80px] md:blur-[120px]"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-900/20 rounded-full blur-[80px] md:blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6 md:mb-8 uppercase tracking-wider animate-pulse">
              <AlertTriangle className="w-4 h-4" />
              Comunicado Urgente
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-9 leading-tight text-white">
              A partir de 01/12/2025, emitir NFS-e em Goiânia <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-200 underline underline-offset-8 decoration-red-500/30">não será mais gratuito!</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium mb-4">
              O emissor gratuito da Prefeitura será descontinuado. Entenda as mudanças do novo padrão SGISS e evite ficar irregular.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
              <Calendar className="w-4 h-4" />
              Prazo final: 30 de novembro de 2025
            </div>
          </div>
        </div>
      </section>

      {/* O QUE MUDOU */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <MotionWrapper direction="up">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Info className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                O que mudou?
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                A Prefeitura de Goiânia anunciou oficialmente que o emissor gratuito de Nota Fiscal de Serviço Eletrônica (NFS-e) será descontinuado a partir de <strong>01/12/2025</strong>. O sistema anterior, que permitia a emissão gratuita de notas diretamente pelo portal da Prefeitura, não estará mais disponível.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 md:p-6 rounded-r-lg mb-6">
                <p className="text-slate-700 mb-4">
                  Essa mudança faz parte das adequações à <strong>Reforma Tributária (Lei Complementar nº 214/2025)</strong>, que exige a padronização dos sistemas fiscais em todo o país através do novo padrão <strong>ABRASF 2.04</strong>.
                </p>
                <p className="text-slate-700 text-sm">
                  O novo sistema SGISS (Sistema de Gestão, Fiscalização e Arrecadação do ISS) foi regulamentado pelo <strong>Decreto nº 2.824/2025</strong> e representa um marco na modernização da gestão fiscal de Goiânia.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-4 md:p-6 rounded-lg">
                <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Período de Transição
                </h3>
                <p className="text-amber-800 text-sm">
                  De 01/10 a 30/11/2025, você pode usar o emissor gratuito "Nota Eletrônica" fornecido pela empresa Nota Control Tecnologia LTDA. Após essa data, será necessário contratar um sistema emissor homologado.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* COMO ISSO AFETA VOCÊ */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <MotionWrapper direction="up" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">
                Como isso afeta você?
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                Se você é prestador de serviços em Goiânia, precisará adotar um sistema emissor próprio compatível com o padrão <strong>ABRASF 2.04</strong> para continuar emitindo NFS-e. A Prefeitura passa a ser apenas receptora e integradora das informações fiscais, não mais emissora.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                Sem um sistema homologado, você não conseguirá:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8 md:mb-10">
                {[
                  "Formalizar suas vendas",
                  "Receber de clientes corporativos",
                  "Manter sua regularidade fiscal",
                  "Comprovar seu faturamento"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-red-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <X className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* A SOLUÇÃO */}
      <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-green-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
         
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  A solução está aqui: <span className="text-primary">NFS Rápida</span>
               </h2>
               <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-3">
                  Sistema 100% homologado e adaptado ao novo padrão SGISS e ABRASF 2.04. Enquanto outros sistemas cobram de R$ 0,50 a R$ 40,00 por nota, o NFS Rápida oferece a melhor relação custo-benefício do mercado.
               </p>
               <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-300 px-4 py-2 rounded-lg text-sm">
                  <Check className="w-4 h-4" />
                  Compatível com o novo padrão nacional
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-center">
               <MotionWrapper direction="right" className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Por que escolher o NFS Rápida?</h3>
                  {[
                     { title: "Homologado no novo padrão", desc: "100% compatível com SGISS e padrão ABRASF 2.04 exigido pela Reforma Tributária" },
                     { title: "Emissão em 30 segundos", desc: "Interface simples e intuitiva. Emita suas notas em poucos cliques, de qualquer lugar" },
                     { title: "Economia garantida", desc: "Planos a partir de R$ 19,90/mês. Mais barato que um café por mês" },
                     { title: "Sem instabilidades", desc: "Diferente do sistema antigo, funciona perfeitamente mesmo no fim do mês" },
                     { title: "Suporte especializado", desc: "Equipe pronta para ajudar na migração e no dia a dia" }
                  ].map((feat, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                           <Check className="w-4 h-4 text-white" />
                        </div>
                        <div>
                           <h4 className="font-bold text-white">{feat.title}</h4>
                           <p className="text-slate-400 text-sm">{feat.desc}</p>
                        </div>
                     </div>
                  ))}
               </MotionWrapper>

               <MotionWrapper direction="left" delay={0.2}>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 text-center">
                     <h3 className="text-xl sm:text-2xl font-bold mb-2">Não espere até 01/12/2025!</h3>
                     <p className="text-slate-300 mb-8">O prazo está correndo.</p>
                     
                     <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 mb-8 text-left">
                        <p className="font-bold text-red-300 mb-4 flex items-center gap-2">
                           <AlertCircle className="w-5 h-5" /> Riscos de deixar para a última hora:
                        </p>
                        <ul className="space-y-2 text-sm text-slate-200">
                           <li>• Dificuldades para migrar e adaptar seus processos</li>
                           <li>• Filas de atendimento e sistemas sobrecarregados</li>
                           <li>• Risco de ficar sem emitir NFS-e e perder clientes</li>
                           <li>• Problemas de instabilidade no período de transição</li>
                        </ul>
                     </div>

                     <Link 
                        href="https://app.nfsrapida.com.br/" 
                        className="block w-full bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-lg shadow-green-500/30 hover:-translate-y-1 mb-4"
                     >
                        Fazer a transição agora
                     </Link>
                     <p className="text-xs text-slate-400">
                        Garanta tranquilidade para o seu negócio!
                     </p>
                  </div>
               </MotionWrapper>
            </div>
         </div>
      </section>

      {/* BENEFÍCIOS DO NOVO SISTEMA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <MotionWrapper direction="up">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 text-center">
                Benefícios do Novo Sistema SGISS
              </h2>
              <p className="text-center text-slate-600 mb-8 md:mb-12">
                Apesar da mudança exigir adaptação, o novo padrão traz melhorias importantes
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    icon: "🚀", 
                    title: "Mais Estabilidade", 
                    desc: "Sem travamentos e lentidão no fim do mês, que eram comuns no sistema antigo" 
                  },
                  { 
                    icon: "🔗", 
                    title: "Integração Nacional", 
                    desc: "Conexão com Simples Nacional, Receita Federal e outros sistemas federais" 
                  },
                  { 
                    icon: "📊", 
                    title: "Mais Transparência", 
                    desc: "Acompanhamento em tempo real das suas obrigações fiscais" 
                  },
                  { 
                    icon: "⚡", 
                    title: "Processos Automatizados", 
                    desc: "Declarações e guias geradas automaticamente pelo sistema" 
                  },
                  { 
                    icon: "🛡️", 
                    title: "Segurança Jurídica", 
                    desc: "Conformidade com a Reforma Tributária e legislação nacional" 
                  },
                  { 
                    icon: "🌐", 
                    title: "Padrão Nacional", 
                    desc: "Mais de 2.550 municípios já adotaram, representando 70% da população" 
                  }
                ].map((benefit, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">{benefit.icon}</div>
                    <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-600">{benefit.desc}</p>
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
            question: "Quando exatamente o emissor gratuito será descontinuado?",
            answer: "A partir de 1º de dezembro de 2025, o emissor gratuito de NFS-e da Prefeitura de Goiânia será oficialmente descontinuado. Após essa data, será necessário usar um sistema emissor homologado e pago."
          },
          {
            question: "Por que a Prefeitura está acabando com o sistema gratuito?",
            answer: "A mudança faz parte das adequações à Reforma Tributária (Lei Complementar nº 214/2025), que exige a padronização dos sistemas fiscais através do padrão ABRASF 2.04. O novo sistema SGISS (Sistema de Gestão, Fiscalização e Arrecadação do ISS) foi criado pelo Decreto nº 2.824/2025. Municípios que não se adequarem até 2026 poderão ter repasses federais suspensos."
          },
          {
            question: "O que acontece se eu não migrar até o prazo?",
            answer: "Se você não migrar para um sistema pago até 01/12/2025, não conseguirá mais emitir NFS-e. Isso significa que não poderá formalizar suas vendas, receber de clientes corporativos, manter regularidade fiscal nem comprovar seu faturamento. Sua empresa ficará irregular."
          },
          {
            question: "Quanto vou pagar para emitir NFS-e?",
            answer: "No NFSRápida, os planos começam em R$ 19,90/mês para 15 notas. É muito mais barato do que outros sistemas que cobram de R$ 0,50 a R$ 40,00 por nota emitida. Com nosso plano básico, você paga menos de R$ 1,33 por nota."
          },
          {
            question: "É difícil fazer a migração?",
            answer: "Não! A migração para o NFSRápida é muito simples e leva menos de 2 minutos. Você só precisa: 1) Criar sua conta, 2) Importar seu certificado digital A1, 3) Sincronizar com a Prefeitura (automático). Pronto! Já pode emitir no novo padrão SGISS. Não precisa migrar notas antigas, pois elas ficam armazenadas no sistema da Prefeitura."
          },
          {
            question: "Posso testar antes de assinar?",
            answer: "Sim! Oferecemos 7 dias de teste completamente grátis com 10 notas fiscais inclusas. Não é necessário cadastrar cartão de crédito. Você testa tudo e só assina se gostar."
          },
          {
            question: "E se eu deixar para migrar na última hora?",
            answer: "Não recomendamos! Deixar para a última hora pode causar: dificuldades para migrar seus dados, filas de atendimento, sistemas sobrecarregados, risco de ficar sem poder emitir notas e perda de clientes. O sistema antigo tinha instabilidades, principalmente no fim do mês. O ideal é migrar com antecedência para ter tempo de se adaptar ao novo padrão SGISS."
          },
          {
            question: "O que é o SGISS e quais os benefícios?",
            answer: "O SGISS (Sistema de Gestão, Fiscalização e Arrecadação do ISS) é a nova plataforma que reúne todas as operações relacionadas ao ISS em Goiânia. Os benefícios incluem: maior estabilidade (sem travamentos no fim do mês), integração com sistemas nacionais (Simples Nacional, Receita Federal), mais transparência na arrecadação, e processos mais automatizados. Mais de 2.550 municípios já adotaram esse padrão nacional."
          },
          {
            question: "Outros prestadores já estão migrando?",
            answer: "Sim! Centenas de prestadores de serviço de Goiânia já migraram para o NFSRápida. Quanto antes você migrar, mais tranquilo será o processo e menos riscos você corre de ter problemas no dia a dia do seu negócio."
          }
        ]}
        title="Dúvidas sobre a Mudança"
        subtitle="Tudo que você precisa saber sobre o fim do emissor gratuito"
      />

      {/* CTA RODAPÉ */}
      <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
         </div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <MotionWrapper direction="up" className="max-w-4xl mx-auto text-center">
               <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 md:mb-8 backdrop-blur-sm">
                  <Check className="w-4 h-4 text-primary" />
                  Solução Completa e Segura
               </div>

               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                  Garanta a emissão de NFS-e com <span className="text-primary">economia</span> e <span className="text-blue-400">praticidade</span>
               </h2>
               
               <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                  Não deixe para a última hora. Escolha o plano ideal e continue emitindo NFS-e em Goiânia sem interrupções.
               </p>

               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                  <Link 
                     href="/nfs-e-prestadores-goiania/" 
                     className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-[0_0_40px_-10px_rgba(16,194,12,0.5)] hover:shadow-[0_0_60px_-15px_rgba(16,194,12,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3 group"
                  >
                     Sou Prestador
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                     href="/nfs-e-contabilidade-goiania/" 
                     className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                     Sou Contador
                     <ArrowRight className="w-5 h-5" />
                  </Link>
               </div>
               
               <p className="mt-8 text-sm text-slate-500">
                  Teste grátis por 7 dias. Sem compromisso.
               </p>
            </MotionWrapper>
         </div>
      </section>
    </>
  );
}

