import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, CheckCircle, AlertTriangle, XCircle, FileEdit, FileText, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Cancelar Nota Fiscal de Serviço Eletrônica em Goiânia | Guia Completo 2025',
  description: 'Guia completo sobre cancelamento de NFS-e em Goiânia após implementação do SGISS. Aprenda sobre prazos, carta de correção, substituição e documentação necessária.',
  keywords: [
    'cancelar NFS-e Goiânia',
    'cancelamento nota fiscal serviço',
    'SGISS Goiânia',
    'carta de correção NFS-e',
    'substituição nota fiscal',
    'cancelar nota fiscal eletrônica',
    'prazo cancelamento NFS-e',
    'processo administrativo nota fiscal',
    'ABRASF 2.04',
    'Instrução Normativa 16/2025',
    'como cancelar nota fiscal Goiânia',
    'NFS-e erro dados',
    'cancelamento nota serviço Goiânia',
  ],
  authors: [{ name: 'Equipe NFS Rápida' }],
  creator: 'NFS Rápida',
  publisher: 'NFS Rápida',
  alternates: {
    canonical: 'https://nfsrapida.com.br/blog/como-cancelar-nfs-e-goiania',
  },
  openGraph: {
    title: 'Como Cancelar Nota Fiscal de Serviço Eletrônica em Goiânia | Guia Completo',
    description: 'Guia completo sobre cancelamento de NFS-e em Goiânia. Entenda prazos, carta de correção, substituição e processo administrativo no novo SGISS.',
    url: 'https://nfsrapida.com.br/blog/como-cancelar-nfs-e-goiania',
    siteName: 'NFS Rápida',
    locale: 'pt_BR',
    type: 'article',
    publishedTime: '2025-11-23T10:00:00-03:00',
    modifiedTime: '2025-11-23T10:00:00-03:00',
    authors: ['Equipe NFS Rápida'],
    tags: [
      'Cancelamento NFS-e',
      'SGISS',
      'Goiânia',
      'Nota Fiscal Eletrônica',
      'Carta de Correção',
      'Substituição NFS-e',
      'Legislação Tributária',
    ],
    images: [
      {
        url: 'https://nfsrapida.com.br/nfsrapida.png',
        width: 1200,
        height: 630,
        alt: 'Como Cancelar NFS-e em Goiânia - Guia Completo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Como Cancelar Nota Fiscal de Serviço Eletrônica em Goiânia',
    description: 'Guia completo sobre cancelamento de NFS-e em Goiânia. Prazos, carta de correção e processo administrativo.',
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

export default function ComoCancelarNFSeGoiania() {
  // Schema.org JSON-LD para Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Como Cancelar Nota Fiscal de Serviço Eletrônica em Goiânia",
    "alternativeHeadline": "Guia Completo de Cancelamento e Substituição de NFS-e no SGISS Goiânia",
    "description": "Guia completo sobre cancelamento de NFS-e em Goiânia após implementação do SGISS. Aprenda sobre prazos, carta de correção, substituição e documentação necessária.",
    "image": {
      "@type": "ImageObject",
      "url": "https://nfsrapida.com.br/nfsrapida.png",
      "width": 1200,
      "height": 630
    },
    "datePublished": "2025-11-23T10:00:00-03:00",
    "dateModified": "2025-11-23T10:00:00-03:00",
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
      "@id": "https://nfsrapida.com.br/blog/como-cancelar-nfs-e-goiania"
    },
    "articleSection": "Guias e Tutoriais",
    "keywords": "cancelamento NFS-e, SGISS Goiânia, carta de correção, substituição nota fiscal, Instrução Normativa 16/2025, processo administrativo, prazo cancelamento",
    "wordCount": 2800,
    "inLanguage": "pt-BR",
    "isAccessibleForFree": true,
    "about": [
      {
        "@type": "Thing",
        "name": "Cancelamento de NFS-e",
        "description": "Processo de anulação de Nota Fiscal de Serviço Eletrônica em Goiânia"
      },
      {
        "@type": "Thing",
        "name": "Carta de Correção",
        "description": "Documento auxiliar para correção de erros simples na descrição de serviços"
      },
      {
        "@type": "Thing",
        "name": "Substituição de NFS-e",
        "description": "Processo de substituição de nota fiscal com dados incorretos"
      }
    ],
    "mentions": [
      {
        "@type": "Organization",
        "name": "Prefeitura de Goiânia",
        "url": "https://www.goiania.go.gov.br"
      },
      {
        "@type": "Thing",
        "name": "Instrução Normativa 16/2025",
        "description": "Legislação que regulamenta cancelamento e substituição de NFS-e em Goiânia"
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
        "name": "Como Cancelar NFS-e Goiânia",
        "item": "https://nfsrapida.com.br/blog/como-cancelar-nfs-e-goiania"
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
        "name": "Quando é necessário cancelar uma NFS-e?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O cancelamento da NFS-e pode ser necessário quando há emissão de nota com dados incorretos que não podem ser corrigidos por Carta de Correção, erro nos dados cadastrais do prestador ou tomador, incorreções na base de cálculo, alíquota ou código de serviço, serviço não executado, ou duplicidade de notas fiscais."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o prazo para cancelar uma NFS-e pelo próprio emitente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A NFS-e pode ser cancelada ou substituída pelo próprio emitente até o 5º dia do mês subsequente à emissão. Neste período, o processo pode ser realizado através do emissor utilizado para gerar a nota ou diretamente pelo SGISS."
        }
      },
      {
        "@type": "Question",
        "name": "O que é a Carta de Correção e quando pode ser usada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Carta de Correção pode ser utilizada apenas para corrigir erros simples na descrição dos serviços, gerando um documento auxiliar vinculado à NFS-e original. Ela NÃO pode ser usada para corrigir base de cálculo, alíquota, deduções, código de serviço, dados cadastrais, número ou data da nota."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a diferença entre cancelamento e substituição de NFS-e?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cancelamento é utilizado quando o serviço não foi executado ou a nota foi emitida de forma totalmente equivocada, anulando o documento sem gerar nova nota. Substituição é usada quando é necessário corrigir informações da nota, mas o serviço foi efetivamente prestado, gerando uma nova NFS-e em substituição à anterior."
        }
      },
      {
        "@type": "Question",
        "name": "Como cancelar NFS-e após o prazo de 5 dias?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Após o prazo de 5 dias do mês subsequente, é necessário protocolar um processo administrativo (SEI) em uma das lojas do Atende Fácil, com procuração (se não for sócio), a nota fiscal, formulário de cancelamento/substituição, declaração de não execução do serviço (para cancelamento) ou declaração de duplicidade (quando aplicável)."
        }
      }
    ]
  };

  // Schema.org JSON-LD para HowTo
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Cancelar NFS-e em Goiânia",
    "description": "Passo a passo para cancelar ou substituir Nota Fiscal de Serviço Eletrônica em Goiânia",
    "image": "https://nfsrapida.com.br/nfsrapida.png",
    "totalTime": "PT15M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "BRL",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Verificar se é possível usar Carta de Correção",
        "text": "Antes de cancelar, verifique se o erro pode ser corrigido com Carta de Correção (apenas para descrição de serviços).",
        "url": "https://nfsrapida.com.br/blog/como-cancelar-nfs-e-goiania#carta-correcao"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Verificar o prazo",
        "text": "Confirme se ainda está dentro do prazo de 5 dias do mês subsequente à emissão para cancelamento direto.",
        "url": "https://nfsrapida.com.br/blog/como-cancelar-nfs-e-goiania#prazos"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Cancelar pelo emissor ou SGISS",
        "text": "Se dentro do prazo, acesse o emissor utilizado ou o SGISS para realizar o cancelamento ou substituição.",
        "url": "https://nfsrapida.com.br/blog/como-cancelar-nfs-e-goiania#como-cancelar"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Protocolar processo administrativo (se necessário)",
        "text": "Se o prazo expirou, reúna a documentação necessária e protocole processo no Atende Fácil.",
        "url": "https://nfsrapida.com.br/blog/como-cancelar-nfs-e-goiania#processo-administrativo"
      }
    ]
  };

  // Schema.org JSON-LD para WebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://nfsrapida.com.br/blog/como-cancelar-nfs-e-goiania",
    "url": "https://nfsrapida.com.br/blog/como-cancelar-nfs-e-goiania",
    "name": "Como Cancelar Nota Fiscal de Serviço Eletrônica em Goiânia",
    "description": "Guia completo sobre cancelamento de NFS-e em Goiânia. Entenda prazos, carta de correção, substituição e processo administrativo no novo SGISS.",
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
    "datePublished": "2025-11-23T10:00:00-03:00",
    "dateModified": "2025-11-23T10:00:00-03:00",
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
            <Link href="/blog/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o Blog
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-blue-200 mb-6 flex-wrap">
              <span className="bg-blue-500/20 text-blue-100 px-3 py-1 rounded-full border border-blue-500/30">Guia Prático</span>
              <time dateTime="2025-11-23" className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 23 Nov 2025</time>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 min de leitura</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Como Cancelar Nota Fiscal de Serviço Eletrônica em Goiânia
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Com a implementação do novo Sistema de Gestão, Fiscalização e Arrecadação do ISSQN (SGISS) em Goiânia a partir de 1º de outubro de 2025, surgiram novas regras e procedimentos para o cancelamento de Notas Fiscais de Serviços Eletrônicas (NFS-e). Este guia completo explica tudo o que você precisa saber sobre o processo.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
          
          <div className="prose prose-slate prose-lg max-w-none">
            
            {/* Seção 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-blue-600" />
                Quando é Necessário Cancelar uma NFS-e?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                O cancelamento da NFS-e pode ser necessário em diversas situações, como:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border-l-4 border-red-500 rounded-lg p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Emissão de nota com dados incorretos</h3>
                      <p className="text-gray-700 text-sm">
                        Dados que não podem ser corrigidos por Carta de Correção
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-lg p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Erro nos dados cadastrais</h3>
                      <p className="text-gray-700 text-sm">
                        Do prestador ou tomador de serviços
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-lg p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Incorreções tributárias</h3>
                      <p className="text-gray-700 text-sm">
                        Na base de cálculo, alíquota ou código de serviço
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-lg p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Serviço não executado</h3>
                      <p className="text-gray-700 text-sm">
                        Quando o serviço não foi efetivamente prestado
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-lg p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Duplicidade de notas fiscais</h3>
                      <p className="text-gray-700 text-sm">
                        Emissão duplicada da mesma nota
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600 flex items-center gap-3">
                <FileEdit className="w-8 h-8 text-blue-600" />
                O Que Fazer em Caso de Dados Incorretos?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Antes de partir para o cancelamento, é importante entender que a NFS-e é um documento fiscal 
                <strong> inviolável</strong> devido à assinatura digital aplicada ao XML. Por isso, nem todas as 
                correções exigem cancelamento.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 my-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                  Carta de Correção: A Alternativa ao Cancelamento
                </h3>
                
                <p className="text-gray-700 mb-4">
                  Para erros simples na <strong>descrição dos serviços</strong>, você pode utilizar a 
                  <strong> Carta de Correção</strong>, que gera um documento auxiliar vinculado à NFS-e original. 
                  Este documento deve ser entregue ao tomador do serviço.
                </p>

                <div className="bg-white rounded-lg p-6 mb-4">
                  <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    A Carta de Correção NÃO pode ser utilizada para corrigir:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Base de cálculo, alíquota, deduções ou código de serviço</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Dados cadastrais do prestador ou do tomador</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Número ou data da nota</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Indicação de isenção, imunidade, local de incidência ou responsabilidade pelo recolhimento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>RPS (Recibo Provisório de Serviços)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <p className="text-gray-800 font-semibold">
                    ⚠️ Se o erro envolver qualquer um desses itens, o procedimento correto é o 
                    <strong> cancelamento ou substituição</strong> da NFS-e.
                  </p>
                </div>
              </div>
            </section>

            {/* Seção 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                Como Cancelar ou Substituir uma NFS-e
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 my-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-7 h-7 text-blue-600" />
                  Prazo para Cancelamento pelo Próprio Emitente
                </h3>
                
                <p className="text-gray-700 mb-4">
                  A NFS-e pode ser cancelada ou substituída pelo próprio emitente até o <strong>5º dia do mês 
                  subsequente à emissão</strong>. Neste período, o processo pode ser realizado através:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900">Pelo Emissor</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      Do emissor utilizado para gerar a nota
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900">Diretamente pelo SGISS</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      Através do portal oficial da Prefeitura
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Cancelamento Após o Prazo
                </h3>
                
                <p className="text-gray-700 mb-4">
                  Caso o prazo de 5 dias do mês subsequente já tenha expirado, será necessário protocolar um 
                  <strong> processo administrativo (SEI)</strong> em uma das lojas do <strong>Atende Fácil</strong>.
                </p>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">📋 Documentação Necessária:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Procuração</strong> (caso não seja o sócio ou responsável pela empresa)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>A nota fiscal</strong> que deseja cancelar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Formulário de cancelamento/substituição</strong> da Nota Fiscal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Declaração da não execução do serviço</strong> (no caso de cancelamento)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Declaração de duplicidade</strong> de Nota Fiscal (quando aplicável)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Seção 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                Diferença Entre Cancelamento e Substituição
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="w-8 h-8 text-red-600" />
                    <h3 className="text-2xl font-bold text-red-800">Cancelamento</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Utilizado quando o <strong>serviço não foi executado</strong> ou a nota foi emitida de forma 
                    totalmente equivocada.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-800 font-semibold mb-2">Resultado:</p>
                    <p className="text-gray-700 text-sm">
                      O documento é <strong>anulado</strong> sem gerar uma nova nota.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileEdit className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-blue-800">Substituição</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Utilizada quando é necessário <strong>corrigir informações</strong> da nota, mas o serviço foi 
                    efetivamente prestado.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-800 font-semibold mb-2">Resultado:</p>
                    <p className="text-gray-700 text-sm">
                      Uma <strong>nova NFS-e é gerada</strong> em substituição à anterior.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 5 - Base Legal */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                Base Legal
              </h2>
              
              <div className="bg-slate-100 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  Todo o processo de cancelamento e substituição está regulamentado pela:
                </p>
                <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="font-bold text-gray-900 mb-2 text-xl">
                    📜 Instrução Normativa nº 16/2025
                  </h3>
                  <p className="text-gray-700">
                    Publicada na <strong>Edição nº 8630 de 25 de setembro de 2025, página 53</strong>
                  </p>
                </div>
              </div>
            </section>

            {/* Seção 6 - Informações Importantes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                Informações Importantes
              </h2>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700">
                        O SGISS opera no <strong>padrão ABRASF 2.04</strong>, utilizado por centenas de municípios brasileiros
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700">
                        A numeração das NFS-e é <strong>sequencial e específica por estabelecimento</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700">
                        Todas as notas emitidas <strong>antes de 1º/10/2025</strong> permanecem no sistema anterior
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700">
                        O tomador pode verificar a autenticidade de qualquer NFS-e através do <strong>QR Code</strong> ou 
                        <strong> código de verificação</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 7 - Canais de Suporte */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                Canais de Suporte da Prefeitura
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-4 text-lg">
                    💬 Suporte Técnico (Sistema)
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <p className="font-semibold text-sm text-gray-600">E-mail:</p>
                      <a href="mailto:suporte.goiania@notacontrol.com.br" className="text-blue-600 hover:text-blue-800 underline">
                        suporte.goiania@notacontrol.com.br
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-600">Chat:</p>
                      <a href="https://www.notacontrol.com.br/portalnfse/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm">
                        notacontrol.com.br/portalnfse
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-600">Telefone:</p>
                      <p className="text-gray-900 font-semibold">(67) 3041-2075</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-100 rounded-xl p-6 border-2 border-slate-300">
                  <h3 className="font-bold text-slate-900 mb-4 text-lg">
                    📋 Dúvidas Tributárias
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <p className="font-semibold text-sm text-gray-600">E-mail:</p>
                      <a href="mailto:gernot.sefaz@goiania.gov.br" className="text-blue-600 hover:text-blue-800 underline">
                        gernot.sefaz@goiania.gov.br
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA NFSRápida */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
                <h2 className="text-3xl font-bold mb-4">
                  🚀 Simplifique a Gestão de suas NFS-e com o NFS Rápida
                </h2>
                <p className="text-lg mb-6 text-blue-50">
                  Sistema 100% integrado ao SGISS de Goiânia. Emita, cancele e substitua suas notas fiscais 
                  com facilidade e segurança.
                </p>

                <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">✨ Vantagens do NFS Rápida:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span className="text-sm">Cancelamento e substituição simplificados</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span className="text-sm">Integração total com SGISS ABRASF 2.04</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span className="text-sm">Interface intuitiva e fácil de usar</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span className="text-sm">Suporte especializado incluído</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span className="text-sm">Envio automático de XML e PDF por e-mail</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span className="text-sm">Acesso de qualquer dispositivo</span>
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
                    href="https://wa.me/5562992285469?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20NFS%20Rápida%20e%20cancelamento%20de%20NFS-e"
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

            {/* Conclusão */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                Conclusão
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                O cancelamento de NFS-e em Goiânia passou por mudanças significativas com o novo SGISS. A principal 
                orientação é <strong>agir rapidamente dentro dos primeiros 5 dias do mês seguinte à emissão</strong>, 
                quando o processo pode ser feito de forma simplificada. Após este prazo, será necessário abertura de 
                processo administrativo com documentação específica.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Lembre-se sempre de verificar se a correção necessária pode ser feita através da 
                <strong> Carta de Correção</strong>, evitando assim o processo mais complexo de cancelamento. 
                Em caso de dúvidas, consulte seu contador ou utilize os canais de suporte disponibilizados pela 
                Prefeitura de Goiânia.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  <strong>💡 Dica Final:</strong> Mantenha sempre um controle rigoroso das notas emitidas e revise 
                  os dados antes da emissão para evitar a necessidade de cancelamentos. A prevenção é sempre o melhor caminho!
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
                  href="/blog/novo-padrao-emissao-nfs-goiania"
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-2">Novo Padrão de Emissão de NFS-e</h4>
                  <p className="text-sm text-gray-600">Entenda as mudanças no padrão ABRASF 2.04</p>
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
              <p className="font-bold text-slate-900 text-sm">Equipe NFSRápida</p>
              <p className="text-slate-500 text-xs">Especialistas em documentos fiscais eletrônicos e automação para prestadores de serviço em Goiânia.</p>
            </div>
          </div>

        </div>
      </div>
      </article>
    </>
  );
}

