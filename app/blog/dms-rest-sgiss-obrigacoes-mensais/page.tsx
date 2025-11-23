import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, CheckCircle, AlertTriangle, FileText, Users, Building2, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DMS e REST no SGISS: Entenda suas Obrigações Mensais em Goiânia | Guia 2025',
  description: 'Guia completo sobre DMS (Declaração Mensal de Serviços) e REST (Relação de Serviços Tomados) no SGISS Goiânia. Prazos, procedimentos e como evitar multas.',
  keywords: [
    'DMS SGISS Goiânia',
    'REST SGISS',
    'Declaração Mensal de Serviços',
    'Relação Serviços Tomados',
    'obrigações mensais ISS',
    'encerramento competência SGISS',
    'aceite tácito REST',
    'prazo DMS Goiânia',
    'declaração ISS Goiânia',
    'obrigações acessórias NFS-e',
    'SGISS prestadores',
    'SGISS tomadores',
  ],
  authors: [{ name: 'Equipe NFS Rápida' }],
  creator: 'NFS Rápida',
  publisher: 'NFS Rápida',
  alternates: {
    canonical: 'https://nfsrapida.com.br/blog/dms-rest-sgiss-obrigacoes-mensais',
  },
  openGraph: {
    title: 'DMS e REST no SGISS: Entenda suas Obrigações Mensais em Goiânia',
    description: 'Guia completo sobre DMS e REST no SGISS. Aprenda prazos, procedimentos e como cumprir suas obrigações mensais sem complicação.',
    url: 'https://nfsrapida.com.br/blog/dms-rest-sgiss-obrigacoes-mensais',
    siteName: 'NFS Rápida',
    locale: 'pt_BR',
    type: 'article',
    publishedTime: '2025-11-23T14:00:00-03:00',
    modifiedTime: '2025-11-23T14:00:00-03:00',
    authors: ['Equipe NFS Rápida'],
    tags: [
      'DMS',
      'REST',
      'SGISS',
      'Goiânia',
      'Obrigações Fiscais',
      'ISS',
      'Declaração Mensal',
    ],
    images: [
      {
        url: 'https://nfsrapida.com.br/nfsrapida.png',
        width: 1200,
        height: 630,
        alt: 'DMS e REST no SGISS Goiânia - Guia Completo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMS e REST no SGISS: Entenda suas Obrigações Mensais',
    description: 'Guia completo sobre DMS e REST no SGISS Goiânia. Prazos, procedimentos e checklist mensal.',
    images: ['https://nfsrapida.com.br/nfsrapida.png'],
    creator: '@nfsrapida',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Guias e Tutoriais',
};

export default function DMSRestSGISSObrigacoesMensais() {
  // Schema.org JSON-LD para Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "DMS e REST no SGISS: Entenda suas Obrigações Mensais em Goiânia",
    "alternativeHeadline": "Guia Completo sobre Declaração Mensal de Serviços e Relação de Serviços Tomados no SGISS",
    "description": "Guia completo sobre DMS (Declaração Mensal de Serviços) e REST (Relação de Serviços Tomados) no SGISS. Aprenda prazos, procedimentos e como evitar multas.",
    "image": {
      "@type": "ImageObject",
      "url": "https://nfsrapida.com.br/nfsrapida.png",
      "width": 1200,
      "height": 630
    },
    "datePublished": "2025-11-23T14:00:00-03:00",
    "dateModified": "2025-11-23T14:00:00-03:00",
    "author": {
      "@type": "Organization",
      "name": "NFS Rápida",
      "url": "https://nfsrapida.com.br",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nfsrapida.com.br/logo.png"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "NFS Rápida",
      "url": "https://nfsrapida.com.br",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nfsrapida.com.br/logo.png",
        "width": 600,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nfsrapida.com.br/blog/dms-rest-sgiss-obrigacoes-mensais"
    },
    "articleSection": "Guias e Tutoriais",
    "keywords": "DMS, REST, SGISS, Goiânia, obrigações mensais ISS, declaração mensal serviços, aceite tácito, encerramento competência",
    "wordCount": 3200,
    "inLanguage": "pt-BR",
    "isAccessibleForFree": true,
    "about": [
      {
        "@type": "Thing",
        "name": "DMS - Declaração Mensal de Serviços",
        "description": "Obrigação acessória mensal para prestadores de serviço em Goiânia"
      },
      {
        "@type": "Thing",
        "name": "REST - Relação de Serviços Tomados",
        "description": "Obrigação acessória mensal para tomadores de serviço em Goiânia"
      },
      {
        "@type": "Thing",
        "name": "SGISS Goiânia",
        "description": "Sistema de Gestão, Fiscalização e Arrecadação do ISSQN de Goiânia"
      }
    ]
  };

  // Schema.org JSON-LD para Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://nfsrapida.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://nfsrapida.com.br/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "DMS e REST no SGISS",
        "item": "https://nfsrapida.com.br/blog/dms-rest-sgiss-obrigacoes-mensais"
      }
    ]
  };

  // Schema.org JSON-LD para FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é DMS no SGISS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DMS (Declaração Mensal de Serviços) é a obrigação acessória que o prestador de serviços deve cumprir mensalmente para declarar todos os serviços prestados. No SGISS, a DMS foi automatizada: as NFS-e emitidas já alimentam automaticamente a declaração mensal. O contribuinte precisa apenas fazer o encerramento espontâneo da competência até o dia 5 do mês seguinte."
        }
      },
      {
        "@type": "Question",
        "name": "O que é REST no SGISS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "REST (Relação de Serviços Tomados) é a obrigação do tomador de serviços de declarar todos os serviços contratados, especialmente aqueles com retenção de ISS. No SGISS, para notas de prestadores de Goiânia, o sistema traz automaticamente as NFS-e para conferência. O tomador tem até o dia 5 do mês seguinte para aceitar ou recusar."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o prazo para encerrar a DMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O prazo para fazer o encerramento espontâneo da competência é até o dia 5 do mês subsequente à prestação dos serviços. Por exemplo, para serviços prestados em janeiro, o prazo é até 05 de fevereiro. Se não encerrar, o sistema pode encerrar automaticamente quando houver guia emitida."
        }
      },
      {
        "@type": "Question",
        "name": "O que é aceite tácito na REST?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aceite tácito é quando o tomador não se manifesta sobre as notas fiscais recebidas até o dia 5 do mês seguinte. Neste caso, o sistema considera automaticamente que o tomador aceita as notas e gera a guia de recolhimento do ISS retido, quando houver."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso fazer DMS se não emiti nenhuma nota no mês?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Mesmo sem movimento, você deve acessar o SGISS e gerar a Declaração de Não Movimento até o dia 5 do mês seguinte. Isso comprova à Prefeitura que você não teve atividade no período e evita multas por falta de declaração."
        }
      }
    ]
  };

  // Schema.org JSON-LD para HowTo
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Cumprir as Obrigações Mensais DMS e REST no SGISS",
    "description": "Passo a passo para cumprir corretamente as obrigações mensais de DMS e REST no SGISS Goiânia",
    "image": "https://nfsrapida.com.br/nfsrapida.png",
    "totalTime": "PT20M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "BRL",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Emitir todas as NFS-e do mês",
        "text": "Durante o mês, emita todas as suas notas fiscais normalmente. Elas alimentarão automaticamente a DMS.",
        "url": "https://nfsrapida.com.br/blog/dms-rest-sgiss-obrigacoes-mensais#como-fazer-dms"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Acessar o SGISS até o dia 5",
        "text": "Até o dia 5 do mês seguinte, acesse o SGISS com seu certificado digital ou CPF/senha.",
        "url": "https://nfsrapida.com.br/blog/dms-rest-sgiss-obrigacoes-mensais#prazos"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Fazer encerramento espontâneo (DMS)",
        "text": "Acesse Menu Guias de Recolhimento > Emissão de Guia > Tipo: Serviços Prestados. O sistema gerará DUAM, Declaração de Não Movimento ou Protocolo de Encerramento.",
        "url": "https://nfsrapida.com.br/blog/dms-rest-sgiss-obrigacoes-mensais#como-fazer-dms"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Conferir e aceitar notas tomadas (REST)",
        "text": "Se você é tomador, acesse Declaração de Serviços Contratados e confira as notas recebidas. Aceite ou recuse até o dia 5.",
        "url": "https://nfsrapida.com.br/blog/dms-rest-sgiss-obrigacoes-mensais#como-fazer-rest"
      }
    ]
  };

  // Schema.org JSON-LD para WebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://nfsrapida.com.br/blog/dms-rest-sgiss-obrigacoes-mensais",
    "url": "https://nfsrapida.com.br/blog/dms-rest-sgiss-obrigacoes-mensais",
    "name": "DMS e REST no SGISS: Entenda suas Obrigações Mensais em Goiânia",
    "description": "Guia completo sobre DMS e REST no SGISS. Aprenda prazos, procedimentos e como cumprir suas obrigações mensais sem complicação.",
    "inLanguage": "pt-BR",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://nfsrapida.com.br",
      "name": "NFS Rápida",
      "url": "https://nfsrapida.com.br"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://nfsrapida.com.br/nfsrapida.png",
      "width": 1200,
      "height": 630
    },
    "datePublished": "2025-11-23T14:00:00-03:00",
    "dateModified": "2025-11-23T14:00:00-03:00",
    "author": {
      "@type": "Organization",
      "name": "NFS Rápida"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NFS Rápida"
    }
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <article className="min-h-screen bg-slate-50 pb-20">
        {/* Article Header */}
        <header className="bg-secondary pt-20 pb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <Link href="/blog" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para o Blog
              </Link>
              
              <div className="flex items-center gap-4 text-sm text-blue-200 mb-6 flex-wrap">
                <span className="bg-blue-500/20 text-blue-100 px-3 py-1 rounded-full border border-blue-500/30">Guia Completo</span>
                <span className="bg-green-500/20 text-green-100 px-3 py-1 rounded-full border border-green-500/30">Obrigações Mensais</span>
                <time dateTime="2025-11-23" className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 23 Nov 2025</time>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 12 min de leitura</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                DMS e REST no SGISS: Entenda suas Obrigações Mensais em Goiânia
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Com a implementação do SGISS em Goiânia, as obrigações mensais de prestadores e tomadores de serviço mudaram significativamente. Este guia completo explica tudo sobre DMS (Declaração Mensal de Serviços) e REST (Relação de Serviços Tomados), incluindo prazos, procedimentos e como evitar multas.
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 -mt-10 relative z-20">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">

          {/* Conteúdo principal */}
          <div className="prose prose-lg max-w-none">
            
            {/* Seção 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600" />
                O Que é DMS (Declaração Mensal de Serviços)?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                A <strong>DMS (Declaração Mensal de Serviços)</strong> é a obrigação acessória que todo prestador 
                de serviços inscrito no Cadastro de Atividade Econômica (CAE) de Goiânia deve cumprir mensalmente 
                para declarar todos os serviços prestados no período.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 my-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                  Grande Novidade do SGISS: DMS Automatizada!
                </h3>
                
                <p className="text-gray-700 mb-4">
                  No sistema antigo, você precisava preencher manualmente a DMS em um sistema separado. 
                  <strong> Com o SGISS, isso mudou completamente!</strong>
                </p>

                <div className="bg-white rounded-lg p-6 mb-4">
                  <h4 className="font-bold text-green-800 mb-3">✅ Como Funciona Agora:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>As <strong>NFS-e emitidas já alimentam automaticamente</strong> a declaração mensal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Você <strong>não precisa mais preencher manualmente</strong> cada serviço prestado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Basta fazer o <strong>encerramento espontâneo da competência</strong> até o dia 5</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>O sistema gera automaticamente a <strong>DUAM</strong> ou <strong>Declaração de Não Movimento</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <p className="text-gray-800 font-semibold">
                    💡 <strong>Importante:</strong> Mesmo com a automatização, você ainda precisa acessar o sistema 
                    e fazer o encerramento até o prazo!
                  </p>
                </div>
              </div>
            </section>

            {/* Seção 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600 flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-600" />
                O Que é REST (Relação de Serviços Tomados)?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                A <strong>REST (Relação de Serviços Tomados)</strong> é a obrigação do <strong>tomador de serviços</strong> 
                de declarar todos os serviços contratados, especialmente aqueles em que houve retenção de ISS na fonte.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                <p className="text-gray-800">
                  <strong>Quem é o tomador?</strong> É a pessoa física ou jurídica que <strong>contrata</strong> o serviço. 
                  Por exemplo: se sua empresa contratou um contador, você é o tomador e o contador é o prestador.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Como a REST Funciona no SGISS</h3>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-gray-900">Notas de Prestadores de Goiânia</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>O sistema <strong>traz automaticamente</strong> as NFS-e para conferência</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Você tem até o <strong>dia 5</strong> para aceitar ou recusar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Sem manifestação = <strong>aceite tácito</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                    <h4 className="font-bold text-gray-900">Notas de Outros Municípios</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">!</span>
                      <span>Devem ser <strong>lançadas manualmente</strong> pelo tomador</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">!</span>
                      <span>Quando o ISS é <strong>devido a Goiânia</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">!</span>
                      <span>Prazo: até o <strong>dia 5</strong> do mês seguinte</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Seção 3 - Prazos */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-blue-600" />
                Prazos: Quando Fazer DMS e REST?
              </h2>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 my-8 border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <Clock className="w-7 h-7" />
                  Prazo Único: Até o Dia 5 do Mês Seguinte
                </h3>
                
                <p className="text-gray-700 mb-6">
                  Tanto a DMS quanto a REST devem ser cumpridas <strong>até o 5º dia do mês subsequente</strong> à prestação/tomada dos serviços.
                </p>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-4">📅 Exemplos Práticos:</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <p className="font-semibold text-gray-900">Serviços de Janeiro/2025</p>
                      <p className="text-gray-700 text-sm">Prazo: até <strong>05/02/2025</strong></p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-4">
                      <p className="font-semibold text-gray-900">Serviços de Fevereiro/2025</p>
                      <p className="text-gray-700 text-sm">Prazo: até <strong>05/03/2025</strong></p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-4">
                      <p className="font-semibold text-gray-900">Serviços de Março/2025</p>
                      <p className="text-gray-700 text-sm">Prazo: até <strong>05/04/2025</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  O que acontece se não cumprir o prazo?
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>DMS:</strong> O sistema pode encerrar automaticamente quando houver guia emitida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>REST:</strong> Ocorre o aceite tácito e a guia é gerada automaticamente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Possibilidade de <strong>multas e penalidades</strong> por descumprimento</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Seção 4 - Como Fazer DMS */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                Como Fazer o Encerramento Espontâneo da DMS
              </h2>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Passo a Passo:</h3>
                
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold text-gray-900">Acesse o SGISS</p>
                      <p className="text-gray-700 text-sm">Com certificado digital ou CPF + senha</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-gray-900">Navegue até o menu</p>
                      <p className="text-gray-700 text-sm"><strong>Guias de Recolhimento → Emissão de Guia</strong></p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-gray-900">Selecione o tipo</p>
                      <p className="text-gray-700 text-sm"><strong>"Serviços Prestados"</strong></p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <div>
                      <p className="font-semibold text-gray-900">Escolha a competência</p>
                      <p className="text-gray-700 text-sm">Mês/ano que deseja encerrar</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</span>
                    <div>
                      <p className="font-semibold text-gray-900">O sistema irá gerar:</p>
                      <ul className="text-gray-700 text-sm mt-2 space-y-1">
                        <li>• <strong>DUAM de recolhimento</strong> (se houver ISS a pagar)</li>
                        <li>• <strong>Declaração de Não Movimento</strong> (se não houver NFS-e)</li>
                        <li>• <strong>Protocolo de Encerramento</strong> (quando não há ISS devido ao prestador)</li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-green-50 border-2 border-green-300 rounded-lg p-5 text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <h4 className="font-bold text-gray-900 mb-2">DUAM de Recolhimento</h4>
                  <p className="text-sm text-gray-600">Quando há ISS a pagar pelo prestador</p>
                </div>

                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5 text-center">
                  <div className="text-4xl mb-3">📄</div>
                  <h4 className="font-bold text-gray-900 mb-2">Declaração Não Movimento</h4>
                  <p className="text-sm text-gray-600">Quando não houve emissão de NFS-e</p>
                </div>

                <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-5 text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <h4 className="font-bold text-gray-900 mb-2">Protocolo Encerramento</h4>
                  <p className="text-sm text-gray-600">Quando não há ISS devido (retenção/fora Goiânia)</p>
                </div>
              </div>
            </section>

            {/* Seção 5 - Como Fazer REST */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                Como Fazer a REST (Relação de Serviços Tomados)
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Para Notas de Prestadores de Goiânia:</h3>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold text-gray-900">Acesse o menu</p>
                      <p className="text-gray-700 text-sm"><strong>Declaração de Serviços Contratados → Consulta de Notas Tomadas</strong></p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-gray-900">Confira as notas</p>
                      <p className="text-gray-700 text-sm">O sistema traz automaticamente as NFS-e emitidas para sua empresa</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-gray-900">Aceite ou recuse</p>
                      <p className="text-gray-700 text-sm">Até o dia 5 do mês seguinte</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <div>
                      <p className="font-semibold text-gray-900">Guia gerada automaticamente</p>
                      <p className="text-gray-700 text-sm">Se houver ISS retido a recolher</p>
                    </div>
                  </li>
                </ol>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Para Notas de Outros Municípios:</h3>

              <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Quando o ISS é devido a Goiânia, você deve lançar manualmente:
                </p>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold text-gray-900">Acesse</p>
                      <p className="text-gray-700 text-sm"><strong>Declaração de Serviços Contratados → Incluir</strong></p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-gray-900">Selecione o modelo</p>
                      <p className="text-gray-700 text-sm"><strong>"Notas de Outros Municípios"</strong></p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-gray-900">Preencha os dados</p>
                      <p className="text-gray-700 text-sm">Número da nota, prestador, valor, etc.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h4 className="font-bold text-blue-800 mb-2">💡 Quando o ISS é devido a Goiânia?</h4>
                <p className="text-gray-700">
                  Quando o <strong>local da prestação do serviço</strong> é em Goiânia, mesmo que o prestador 
                  seja de outro município. Consulte a lista de serviços da LC 116/2003 para saber o local de 
                  incidência de cada serviço.
                </p>
              </div>
            </section>

            {/* Seção 6 - Aceite Tácito */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                O Que é Aceite Tácito?
              </h2>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 my-8 border-2 border-yellow-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⚠️ Atenção Tomadores!</h3>
                
                <p className="text-gray-700 mb-4">
                  <strong>Aceite tácito</strong> significa que se você <strong>não se manifestar</strong> sobre as 
                  notas fiscais recebidas até o dia 5 do mês seguinte, o sistema considerará automaticamente que 
                  você <strong>aceita as notas</strong>.
                </p>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">O que acontece com o aceite tácito:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>As notas são <strong>automaticamente aceitas</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>A <strong>guia de recolhimento é gerada</strong> (se houver ISS retido)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Você se torna <strong>responsável pelo pagamento</strong> do ISS retido</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Como Recusar uma Nota
                </h4>
                <p className="text-gray-700 mb-3">
                  Se você não reconhecer uma nota fiscal ou houver erro, você pode recusá-la:
                </p>
                <ol className="space-y-2 text-gray-700 text-sm">
                  <li>1. Acesse <strong>"Recusa ISS Notas Tomadas"</strong></li>
                  <li>2. Selecione a nota que deseja recusar</li>
                  <li>3. Apresente a <strong>justificativa</strong></li>
                  <li>4. Confirme a recusa</li>
                </ol>
                <p className="text-gray-700 mt-3 text-sm">
                  <strong>Importante:</strong> A recusa, se procedente, reverte a cobrança para o prestador.
                </p>
              </div>
            </section>

            {/* Seção 7 - Checklist */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                Checklist Mensal: Não Esqueça Nada!
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Checklist Prestador */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Para Prestadores</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-gray-700">Emitir todas as NFS-e do mês</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-gray-700">Acessar SGISS até dia 5</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-gray-700">Fazer encerramento espontâneo (DMS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-gray-700">Baixar DUAM ou Declaração de Não Movimento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-gray-700">Pagar DUAM até o vencimento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-gray-700">Arquivar comprovantes</span>
                    </li>
                  </ul>
                </div>

                {/* Checklist Tomador */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Para Tomadores</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-gray-700">Acessar SGISS até dia 5</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-gray-700">Consultar notas tomadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-gray-700">Aceitar ou recusar cada nota</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-gray-700">Lançar notas de outros municípios (se houver)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-gray-700">Baixar guia de ISS retido</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-gray-700">Pagar guia até o vencimento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA NFSRápida */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
                <h2 className="text-3xl font-bold mb-4">
                  🚀 Automatize suas Obrigações Mensais com o NFS Rápida
                </h2>
                <p className="text-lg mb-6 text-blue-50">
                  Chega de perder prazo! Com o <strong>NFS Rápida</strong>, você recebe lembretes automáticos 
                  e pode fazer tudo em poucos cliques.
                </p>

                <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">✨ Vantagens do NFS Rápida:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span className="text-sm">Lembretes automáticos de prazos</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span className="text-sm">Encerramento de DMS facilitado</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span className="text-sm">Controle de notas tomadas</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span className="text-sm">Relatórios mensais prontos</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span className="text-sm">Integração total com SGISS</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span className="text-sm">Suporte especializado</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/"
                    className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-center hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Conhecer o NFS Rápida
                  </Link>
                  <a 
                    href="https://wa.me/5562992285469?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20NFS%20Rápida%20e%20como%20facilitar%20minhas%20obrigações%20mensais"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </section>

            {/* Seção 8 - Perguntas Frequentes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                Perguntas Frequentes
              </h2>

              <div className="space-y-4">
                <details className="bg-white border border-gray-200 rounded-lg p-5 cursor-pointer hover:shadow-md transition-shadow">
                  <summary className="font-bold text-gray-900">
                    Preciso fazer DMS se não emiti nenhuma nota no mês?
                  </summary>
                  <p className="text-gray-700 mt-3">
                    Sim! Mesmo sem movimento, você deve acessar o SGISS e gerar a <strong>Declaração de Não Movimento</strong> 
                    até o dia 5 do mês seguinte. Isso comprova à Prefeitura que você não teve atividade no período e evita multas.
                  </p>
                </details>

                <details className="bg-white border border-gray-200 rounded-lg p-5 cursor-pointer hover:shadow-md transition-shadow">
                  <summary className="font-bold text-gray-900">
                    Sou MEI, preciso fazer DMS e REST?
                  </summary>
                  <p className="text-gray-700 mt-3">
                    Sim. MEIs também são obrigados a cumprir as obrigações acessórias no SGISS. A boa notícia é que o 
                    processo é o mesmo e igualmente automatizado para todos os contribuintes.
                  </p>
                </details>

                <details className="bg-white border border-gray-200 rounded-lg p-5 cursor-pointer hover:shadow-md transition-shadow">
                  <summary className="font-bold text-gray-900">
                    Posso fazer DMS e REST depois do dia 5?
                  </summary>
                  <p className="text-gray-700 mt-3">
                    Tecnicamente sim, mas você estará <strong>fora do prazo legal</strong> e sujeito a penalidades. 
                    O sistema pode fazer o encerramento automático (DMS) ou aceite tácito (REST), mas isso não isenta 
                    você de possíveis multas por atraso.
                  </p>
                </details>

                <details className="bg-white border border-gray-200 rounded-lg p-5 cursor-pointer hover:shadow-md transition-shadow">
                  <summary className="font-bold text-gray-900">
                    Meu contador pode fazer DMS e REST por mim?
                  </summary>
                  <p className="text-gray-700 mt-3">
                    Sim! Seu contador pode acessar o SGISS com procuração eletrônica e cumprir todas as obrigações em 
                    seu nome. Isso é muito comum e recomendado para quem não tem familiaridade com o sistema.
                  </p>
                </details>

                <details className="bg-white border border-gray-200 rounded-lg p-5 cursor-pointer hover:shadow-md transition-shadow">
                  <summary className="font-bold text-gray-900">
                    Qual a multa por não fazer DMS ou REST?
                  </summary>
                  <p className="text-gray-700 mt-3">
                    As multas variam conforme a legislação municipal e podem incluir multa por atraso na declaração, 
                    multa por não recolhimento do ISS no prazo, e juros. Consulte a legislação específica ou seu contador 
                    para valores atualizados.
                  </p>
                </details>
              </div>
            </section>

            {/* Conclusão */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                Conclusão
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                As obrigações mensais de <strong>DMS e REST</strong> no SGISS foram significativamente simplificadas 
                com a automatização do sistema. O principal desafio agora é <strong>não esquecer o prazo</strong> do 
                dia 5 de cada mês.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Para prestadores, a DMS ficou muito mais fácil: basta emitir as notas corretamente durante o mês e 
                fazer o encerramento espontâneo. Para tomadores, a REST também foi facilitada com o carregamento 
                automático das notas de prestadores de Goiânia.
              </p>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  <strong>💡 Dica Final:</strong> Crie um lembrete recorrente no seu calendário para o dia 1º de cada 
                  mês com o título "Fazer DMS/REST até dia 5". Isso garantirá que você nunca perca o prazo e mantenha 
                  sua empresa em dia com o fisco!
                </p>
              </div>
            </section>

            {/* Navegação entre posts */}
            <div className="border-t-2 border-gray-200 pt-8 mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Leia também:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link 
                  href="/blog/guia-completo-sgiss-goiania"
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-2">Guia Completo do SGISS Goiânia</h4>
                  <p className="text-sm text-gray-600">Tudo sobre o novo sistema de gestão de ISS</p>
                </Link>
                <Link 
                  href="/blog/como-cancelar-nfs-e-goiania"
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-2">Como Cancelar NFS-e em Goiânia</h4>
                  <p className="text-sm text-gray-600">Prazos e procedimentos para cancelamento</p>
                </Link>
              </div>
            </div>

          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
              NF
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">Equipe NFS Rápida</p>
              <p className="text-slate-500 text-xs">Especialistas em documentos fiscais eletrônicos e automação para prestadores de serviço em Goiânia.</p>
            </div>
          </div>

        </div>
      </div>
      </article>
    </>
  );
}

