import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NFS-e Nacional Obrigatória em 2026: Aluguéis e Cessão de Direitos | Guia Completo',
  description: 'NFS-e Nacional será obrigatória a partir de 01/01/2026 incluindo locação de imóveis, bens móveis e cessão de direitos. Nota Técnica 005/2025, IBS, CBS, MEI, pessoas físicas. Saiba como se preparar para a Reforma Tributária.',
  keywords: [
    'NFS-e nacional 2026',
    'nota fiscal aluguel imóvel',
    'locação bens móveis NFS-e',
    'cessão direitos nota fiscal',
    'reforma tributária 2026',
    'IBS CBS locação',
    'nota técnica 005 2025',
    'NFS-e obrigatória municípios',
    'aluguel pessoa física nota fiscal',
    'MEI NFS-e 2026',
    'LC 214 2025',
    'SGISS Goiânia',
    'emissão nota fiscal locação',
    'portal NFS-e nacional',
    'receita federal NFS-e',
    'como emitir nota fiscal aluguel',
    'NFS-e prestadores serviço',
    'contabilidade Goiânia',
  ],
  authors: [{ name: 'Equipe NFS Rápida' }],
  creator: 'NFS Rápida',
  publisher: 'NFS Rápida',
  alternates: {
    canonical: 'https://nfsrapida.com.br/blog/nfs-e-nacional-locacoes-2026',
  },
  openGraph: {
    title: 'NFS-e Nacional Obrigatória em 2026: Aluguéis e Cessão de Direitos | Guia Completo',
    description: 'Guia completo sobre a NFS-e Nacional obrigatória a partir de 2026. Entenda as mudanças para locação de imóveis, bens móveis, cessão de direitos, IBS, CBS e Reforma Tributária. Saiba quem será impactado e como se preparar.',
    url: 'https://nfsrapida.com.br/blog/nfs-e-nacional-locacoes-2026',
    siteName: 'NFS Rápida',
    locale: 'pt_BR',
    type: 'article',
    publishedTime: '2025-11-22T10:00:00-03:00',
    modifiedTime: '2025-11-22T10:00:00-03:00',
    authors: ['Equipe NFS Rápida'],
    tags: [
      'NFS-e Nacional',
      'Reforma Tributária',
      'Locação Imóveis',
      'IBS',
      'CBS',
      'Nota Técnica 005',
      'Goiânia',
      'SGISS',
      'MEI',
      'Prestadores de Serviço',
    ],
    images: [
      {
        url: 'https://nfsrapida.com.br/nfsrapida.png',
        width: 1200,
        height: 630,
        alt: 'NFS-e Nacional Obrigatória em 2026 - Aluguéis e Cessão de Direitos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NFS-e Nacional Obrigatória em 2026: Aluguéis e Cessão de Direitos',
    description: 'Guia completo sobre a NFS-e Nacional obrigatória a partir de 2026. Entenda as mudanças para locação, cessão de direitos, IBS, CBS e como se preparar.',
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
  category: 'Reforma Tributária',
};

export default function NFSeNacionalLocacoes2026() {
  // Schema.org JSON-LD para Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "NFS-e Nacional será Obrigatória em 2026 e Incluirá Aluguéis e Cessão de Direitos",
    "description": "Guia completo sobre a NFS-e Nacional obrigatória a partir de 2026, incluindo locação de imóveis, bens móveis e cessão de direitos. Entenda as mudanças da Reforma Tributária, IBS, CBS e como se preparar.",
    "image": "https://nfsrapida.com.br/nfsrapida.png",
    "datePublished": "2025-11-22T10:00:00-03:00",
    "dateModified": "2025-11-22T10:00:00-03:00",
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
      "@id": "https://nfsrapida.com.br/blog/nfs-e-nacional-locacoes-2026"
    },
    "articleSection": "Reforma Tributária",
    "keywords": "NFS-e nacional 2026, nota fiscal aluguel, locação imóveis, cessão direitos, reforma tributária, IBS, CBS, nota técnica 005, SGISS Goiânia",
    "wordCount": 3500,
    "inLanguage": "pt-BR",
    "about": [
      {
        "@type": "Thing",
        "name": "NFS-e Nacional",
        "description": "Nota Fiscal de Serviço eletrônica de padrão nacional"
      },
      {
        "@type": "Thing",
        "name": "Reforma Tributária",
        "description": "Mudanças no sistema tributário brasileiro com IBS e CBS"
      },
      {
        "@type": "Thing",
        "name": "Locação de Imóveis",
        "description": "Aluguel de bens imóveis e emissão de nota fiscal"
      }
    ],
    "mentions": [
      {
        "@type": "Organization",
        "name": "Receita Federal do Brasil",
        "url": "https://www.gov.br/receitafederal"
      },
      {
        "@type": "Organization",
        "name": "Confederação Nacional de Municípios",
        "alternateName": "CNM"
      },
      {
        "@type": "Organization",
        "name": "Sebrae",
        "url": "https://www.sebrae.com.br"
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
        "name": "NFS-e Nacional 2026",
        "item": "https://nfsrapida.com.br/blog/nfs-e-nacional-locacoes-2026"
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
        "name": "O que é a NFS-e Nacional?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Nota Fiscal de Serviço eletrônica (NFS-e) Nacional é o documento fiscal digital que registra a prestação de serviços em um formato único válido em todos os municípios do Brasil. Diferentemente do modelo antigo, em que cada prefeitura tinha seu próprio sistema, a NFS-e padrão nacional unifica esse processo, simplificando a vida das empresas que antes precisavam lidar com regras e sistemas diferentes em cada cidade."
        }
      },
      {
        "@type": "Question",
        "name": "Quando a NFS-e Nacional se torna obrigatória?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A NFS-e Nacional se torna obrigatória a partir de 1º de janeiro de 2026 para serviços em geral. Para operações de locação e cessão de direitos, a implementação será gradual ao longo de 2026, com data específica ainda a ser divulgada no Portal da NFS-e."
        }
      },
      {
        "@type": "Question",
        "name": "Quais operações de locação serão afetadas pela NFS-e Nacional?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Serão afetadas: (1) Locação de bens imóveis (aluguéis de casas, apartamentos, salas comerciais), (2) Locação de bens móveis (aluguel de máquinas, veículos, equipamentos), e (3) Cessão de direitos sobre bens materiais e imateriais (software, direitos autorais, marcas, patentes, franquias, direitos de imagem)."
        }
      },
      {
        "@type": "Question",
        "name": "Pessoas físicas que alugam imóveis precisarão emitir NFS-e?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apenas pessoas físicas locadoras de maior porte. A tributação via IBS/CBS incidirá se a pessoa física: (1) recebeu acima de R$ 240 mil em aluguéis no ano anterior E possui mais de 3 imóveis alugados, OU (2) ultrapassar R$ 288 mil em aluguéis no próprio ano-calendário. Locadores abaixo desses patamares continuam isentos dos novos tributos."
        }
      },
      {
        "@type": "Question",
        "name": "O que são IBS e CBS na Reforma Tributária?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IBS (Imposto sobre Bens e Serviços) e CBS (Contribuição sobre Bens e Serviços) são os novos tributos criados na Reforma Tributária do Consumo. A partir de 2026, eles passarão a incidir sobre locações de imóveis e outras operações, substituindo gradualmente tributos como ISS, PIS e Cofins até 2033."
        }
      },
      {
        "@type": "Question",
        "name": "Como MEIs devem se preparar para a NFS-e Nacional?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Os MEIs já adotaram a NFS-e nacional desde 2023. Para 2026, devem: (1) familiarizar-se com o Portal Nacional da NFS-e, (2) verificar se realizarão atividades de locação/cessão que exigirão nota fiscal, e (3) manter-se atualizados sobre as novas regras através do Sebrae e Receita Federal."
        }
      },
      {
        "@type": "Question",
        "name": "Onde encontrar informações oficiais sobre a NFS-e Nacional?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As principais fontes oficiais são: Portal da NFS-e Nacional (gov.br/nfse), Lei Complementar nº 214/2025, Nota Técnica SE/CGNFS-e nº 005/2025, comunicados da Receita Federal, orientações da CNM (Confederação Nacional de Municípios) e materiais educativos do Sebrae."
        }
      }
    ]
  };

  // Schema.org JSON-LD para HowTo
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como se Preparar para a NFS-e Nacional em 2026",
    "description": "Guia passo a passo para empresas e profissionais se prepararem para a obrigatoriedade da NFS-e Nacional",
    "image": "https://nfsrapida.com.br/nfsrapida.png",
    "totalTime": "PT2H",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Verifique a adesão de seu município",
        "text": "Certifique-se de que a prefeitura da sua cidade está integrada ao sistema nacional da NFS-e. A maioria dos municípios já está em processo de convênio.",
        "url": "https://nfsrapida.com.br/blog/nfs-e-nacional-locacoes-2026#preparacao"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Cadastre-se e teste o Portal NFS-e",
        "text": "Acesse o Portal Nacional da NFS-e (nfse.gov.br) e familiarize-se com a emissão de notas. Para MEIs, há um app mobile específico.",
        "url": "https://nfsrapida.com.br/blog/nfs-e-nacional-locacoes-2026#preparacao"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Atualize seus sistemas e treinamentos",
        "text": "Converse com fornecedores de software para garantir integração com o novo layout da NFS-e. Treine sua equipe para operar o sistema unificado.",
        "url": "https://nfsrapida.com.br/blog/nfs-e-nacional-locacoes-2026#preparacao"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Acompanhe os prazos oficiais",
        "text": "Fique atento aos comunicados da Receita Federal e prefeituras sobre datas específicas de implementação para locações e cessões.",
        "url": "https://nfsrapida.com.br/blog/nfs-e-nacional-locacoes-2026#preparacao"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Busque orientação profissional",
        "text": "Consulte materiais do Sebrae, contadores especializados e sindicatos para orientação específica sobre sua situação.",
        "url": "https://nfsrapida.com.br/blog/nfs-e-nacional-locacoes-2026#preparacao"
      }
    ]
  };

  // Schema.org JSON-LD para WebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://nfsrapida.com.br/blog/nfs-e-nacional-locacoes-2026",
    "url": "https://nfsrapida.com.br/blog/nfs-e-nacional-locacoes-2026",
    "name": "NFS-e Nacional Obrigatória em 2026: Aluguéis e Cessão de Direitos",
    "description": "Guia completo sobre a NFS-e Nacional obrigatória a partir de 2026, incluindo locação de imóveis, bens móveis e cessão de direitos",
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
    "datePublished": "2025-11-22T10:00:00-03:00",
    "dateModified": "2025-11-22T10:00:00-03:00",
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
              <span className="bg-blue-500/20 text-blue-100 px-3 py-1 rounded-full border border-blue-500/30">Reforma Tributária</span>
              <time dateTime="2025-11-22" className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 22 Nov 2025</time>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 12 min de leitura</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              NFS-e Nacional será Obrigatória em 2026 e Incluirá Aluguéis e Cessão de Direitos
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Parte da modernização tributária, a Nota Fiscal de Serviços eletrônica (NFS-e) terá uso obrigatório em todo o país a partir de 2026. A medida unifica a emissão de notas de serviço entre os municípios e passará a abranger operações como aluguel de bens e licenciamento de direitos.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              📄 O que é a NFS-e Nacional?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>Nota Fiscal de Serviço eletrônica (NFS-e)</strong> é o documento fiscal digital que 
              registra a prestação de serviços. Diferentemente do modelo antigo – em que cada prefeitura tinha 
              um sistema e modelo próprio de nota –, a <strong>NFS-e padrão nacional unifica esse processo em 
              todo o Brasil</strong>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Isso significa que haverá um <strong>único formato de nota de serviço válido em todos os municípios</strong>, 
              simplificando a vida das empresas que antes precisavam lidar com regras e sistemas diferentes em cada cidade.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6 my-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Objetivo da Padronização</h3>
              <p className="text-gray-700 mb-4">
                A criação de um padrão nacional de NFS-e busca <strong>reduzir a burocracia e o chamado 
                "custo Brasil"</strong>, tornando as obrigações fiscais mais simples e baratas para os empreendedores.
              </p>
              
              <div className="bg-red-50 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-gray-900 mb-2">📊 Situação Atual (Antes de 2026):</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>Cerca de <strong>5.569 legislações diferentes</strong> de ISS</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>Modelos variados de notas de serviço em cada município</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>Dificuldade para empresas que atuam em várias cidades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>Custos elevados com múltiplos sistemas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">✅ Com a NFS-e Nacional (A partir de 2026):</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Um único formato nacional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Maior padronização e transparência</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Eficiência na fiscalização tributária</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Redução de custos operacionais</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Com a NFS-e nacional, espera-se maior padronização, transparência e eficiência na fiscalização 
              tributária – benefícios ressaltados inclusive pela <strong>Confederação Nacional de Municípios (CNM)</strong>.
            </p>
          </section>

          {/* Seção 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              📅 O que Muda a Partir de 2026?
            </h2>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 my-6 border border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Data Crucial: 1º de Janeiro de 2026</h3>
              <p className="text-gray-700 mb-4">
                A partir de <strong>1º de janeiro de 2026</strong>, todas as prefeituras deverão estar integradas 
                ao sistema nacional da NFS-e. Isso é determinado pela <strong>Lei Complementar nº 214/2025</strong> 
                (primeira fase da Reforma Tributária).
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-800 font-semibold mb-2">🚨 Penalidade para Municípios:</p>
                <p className="text-gray-700">
                  Municípios que não aderirem deixarão de receber <strong>transferências voluntárias da União</strong>.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Na prática, significa que a <strong>emissão da NFS-e nacional torna-se obrigatória em todo o país 
              em 2026</strong> – substituindo os sistemas locais. A Receita Federal vem orientando as prefeituras 
              nesse processo de adesão para evitar problemas.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6 my-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Adesão dos Municípios</h3>
              <p className="text-gray-700 mb-3">
                Até agosto de 2025, mais de <strong>1.463 municípios</strong> já tinham firmado convênio para 
                adotar o modelo nacional.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>💡 Para as empresas:</strong> Em vez de usar uma nota diferente em cada cidade, 
                  bastará utilizar o portal unificado da NFS-e (ou sistemas integrados a ele) para emitir 
                  suas notas fiscais de serviço.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-3">🔄 Conexão com a Reforma Tributária</h3>
              <p className="text-gray-700 mb-3">
                A mudança também faz parte da transição para os novos tributos <strong>IBS</strong> (Imposto sobre 
                Bens e Serviços) e <strong>CBS</strong> (Contribuição sobre Bens e Serviços), criados na Reforma 
                Tributária do Consumo.
              </p>
              <div className="bg-white rounded-lg p-4 mt-3">
                <p className="text-gray-700 mb-2">
                  <strong>Mudança importante:</strong> Atualmente, aluguéis não são considerados serviços tributados 
                  pelo ISS e pessoas físicas locadoras pagam apenas Imposto de Renda sobre esses rendimentos.
                </p>
                <p className="text-gray-700">
                  <strong>A partir de 2026:</strong> A locação passa a ser considerada operação onerosa com bens, 
                  também sujeita à CBS e ao IBS, exigindo a emissão de documento fiscal eletrônico.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              🏢 Locações e Cessão de Direitos: Quais Operações Serão Afetadas?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              No último dia <strong>19 de novembro de 2025</strong>, o Comitê Gestor da NFS-e publicou a 
              <strong> Nota Técnica nº 005/2025</strong> formalizando a adoção da NFS-e Nacional para:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5 text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="font-bold text-gray-900 mb-2">Locação de Bens Imóveis</h3>
                <p className="text-sm text-gray-600">Aluguéis de imóveis</p>
              </div>
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-5 text-center">
                <div className="text-4xl mb-3">🚗</div>
                <h3 className="font-bold text-gray-900 mb-2">Locação de Bens Móveis</h3>
                <p className="text-sm text-gray-600">Equipamentos, veículos etc.</p>
              </div>
              <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-5 text-center">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="font-bold text-gray-900 mb-2">Cessão de Direitos</h3>
                <p className="text-sm text-gray-600">Bens materiais e imateriais</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Em termos simples, além de serviços tradicionais, o sistema de nota fiscal eletrônica englobará 
              <strong> contratos de aluguel e licenciamento de bens ou direitos</strong>.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6 my-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Operações Abrangidas pela Mudança</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">🏠 Aluguel de Imóveis</h4>
                  <p className="text-gray-700 mb-2">
                    Contratos de locação de casas, apartamentos, salas comerciais etc., que passarão a ser 
                    documentados via NFS-e.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">🚗 Aluguel de Bens Móveis</h4>
                  <p className="text-gray-700 mb-2">
                    Como aluguel de máquinas, veículos, equipamentos em geral.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">💻 Licenciamento ou Cessão de Bens Intangíveis</h4>
                  <ul className="space-y-2 text-gray-700 mt-2">
                    <li>• <strong>Software:</strong> Licença de uso de programas</li>
                    <li>• <strong>Direitos autorais:</strong> Cessão de direitos sobre obras intelectuais</li>
                    <li>• <strong>Marcas e patentes:</strong> Pagamento de royalties pelo uso de propriedade industrial</li>
                    <li>• <strong>Franquias:</strong> Taxa de franquia e royalties</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">📄 Concessão de Direitos sobre Bens</h4>
                  <ul className="space-y-2 text-gray-700 mt-2">
                    <li>• <strong>Usufruto:</strong> Direito de uso e recebimento de frutos de um imóvel alheio</li>
                    <li>• <strong>Direito de superfície:</strong> Cessão do direito de usar terreno/alicerce</li>
                    <li>• <strong>Servidões:</strong> Como direito de passagem</li>
                    <li>• <strong>Direitos de imagem e nome:</strong> Cessão do direito de uso da imagem/voz de uma pessoa</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
              <p className="text-gray-800">
                <strong>📌 Resumo:</strong> Todo tipo de contrato de locação, arrendamento, licenciamento ou 
                cessão onerosa de bens e direitos deverá, no futuro próximo, ser acobertado por uma Nota Fiscal 
                eletrônica de serviços.
              </p>
            </div>
          </section>

          {/* Seção 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              👥 Quem Será Impactado?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A obrigatoriedade da NFS-e nacional abrange uma variedade de contribuintes e situações:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
                  Empresas Prestadoras de Serviços em Geral
                </h3>
                <p className="text-gray-700 ml-11">
                  Qualquer empresa que emita notas de serviço, independentemente do porte, terá de usar o padrão 
                  nacional. Isso inclui empresas que alugam bens próprios ou exploram direitos (ex: imobiliárias, 
                  locadoras de veículos, empresas de licenciamento etc.).
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-600 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
                  Microempreendedores Individuais (MEI)
                </h3>
                <div className="ml-11">
                  <p className="text-gray-700 mb-3">
                    Os MEIs já adotaram recentemente a NFS-e nacional – desde 2023, todos os MEIs do país passaram 
                    a emitir suas notas de serviço pelo sistema unificado.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>💡 Para o MEI:</strong> Se você já usa o emissor nacional, pouca coisa muda, a não 
                      ser que passe a realizar atividades de locação/cessão. Vale lembrar que a partir de 2024 o 
                      MEI também ficou obrigado a emitir nota fiscal em todas as suas operações.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-purple-600 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
                  Pessoas Físicas Locadoras ou Concedentes de Direitos
                </h3>
                <div className="ml-11">
                  <p className="text-gray-700 mb-3">
                    Pela primeira vez, alguns indivíduos que alugam bens poderão ter que emitir nota fiscal 
                    eletrônica e recolher tributos sobre essas operações.
                  </p>
                  
                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-3">
                    <p className="font-bold text-gray-900 mb-2">⚠️ Importante: Nem todos estarão sujeitos!</p>
                    <p className="text-gray-700 mb-3">
                      A tributação via IBS/CBS incidirá apenas sobre locadores de maior porte. De acordo com as 
                      regras da LC 214/2025, só haverá cobrança se a pessoa física atender a <strong>pelo menos 
                      um dos critérios</strong>:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-yellow-600 font-bold mr-2">•</span>
                        <span>Recebeu acima de <strong>R$ 240 mil</strong> em aluguéis no ano anterior <strong>E</strong> possui mais de <strong>3 imóveis alugados</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 font-bold mr-2">•</span>
                        <span>Ultrapassar <strong>R$ 288 mil</strong> em aluguéis no próprio ano-calendário</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>✅ Locadores abaixo desses patamares:</strong> Continuam isentos dos novos tributos, 
                      recolhendo apenas o Imposto de Renda via carnê-leão como hoje.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-orange-600 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">4</span>
                  Administradoras de Bens e Imobiliárias
                </h3>
                <p className="text-gray-700 ml-11">
                  Empresas que administram aluguel de terceiros ou intermediam cessão de direitos também precisarão 
                  se adequar, já que estarão emitindo notas em nome de seus clientes locadores ou licenciantes 
                  dentro do novo padrão fiscal.
                </p>
              </div>

              <div className="bg-white border-l-4 border-indigo-600 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">5</span>
                  Prefeituras Municipais
                </h3>
                <p className="text-gray-700 ml-11">
                  As administrações municipais precisaram adequar seus sistemas e aderir ao convênio nacional para 
                  viabilizar a emissão das notas pelos contribuintes locais. Órgãos como a Receita Federal e a CNM 
                  vêm apoiando tecnicamente os municípios nessa transição.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              ⏰ Quando Passam a Valer as Notas para Aluguel e Direitos?
            </h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-3">⚠️ Atenção: Implementação Gradual!</h3>
              <p className="text-gray-700 mb-3">
                Apesar de a obrigatoriedade geral da NFS-e nacional começar em <strong>janeiro de 2026</strong>, 
                no caso específico das operações de locação e cessão de direitos haverá um <strong>cronograma próprio</strong>.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              A Nota Técnica 005/2025 do Comitê Gestor trouxe as definições técnicas para essas operações, porém 
              deixou claro que a implementação <strong>não será imediata em janeiro</strong>.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 my-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📅 Cronograma de Implementação</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">01</span>
                    <h4 className="font-bold text-gray-900">Janeiro de 2026</h4>
                  </div>
                  <p className="text-gray-700 ml-13">
                    Serão implementadas apenas as mudanças previstas na <strong>versão anterior (NT 004)</strong> 
                    do layout da NFS-e. A NFS-e nacional se torna obrigatória para serviços em geral.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">02</span>
                    <h4 className="font-bold text-gray-900">Data Futura (a ser divulgada)</h4>
                  </div>
                  <p className="text-gray-700 ml-13">
                    As evoluções da <strong>versão 005</strong> – que incluem os módulos de locação – ficarão 
                    para uma fase posterior de 2026, ainda sem data definida. A data será divulgada no 
                    <strong> Portal NFS-e</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-3">✅ O que Isso Significa para Você?</h3>
              <p className="text-gray-700 mb-3">
                Esta informação serve para tranquilizar os contribuintes que atuam com essas atividades:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Até que o novo sistema específico esteja disponível, <strong>nada muda no procedimento atual</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Quem já emite algum documento fiscal de locação pode continuar fazendo como de costume</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Quem atualmente apenas cobra via contrato, recibo ou boleto também poderá continuar com esse método por enquanto</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
              <p className="text-gray-800">
                <strong>💡 Fique Atento:</strong> Uma vez divulgado o cronograma, será importante que os envolvidos 
                fiquem atentos à data de início da obrigatoriedade da nota para locações/cessões – possivelmente 
                anunciada com antecedência no Portal da NFS-e (gov.br/nfse) e pelos órgãos fazendários.
              </p>
            </div>
          </section>

          {/* Seção 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              ✅ Como se Preparar para a Mudança?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Faltando pouco tempo para 2026, empresas e profissionais devem desde já se preparar para operar 
              dentro do novo padrão de nota fiscal eletrônica. Aqui estão algumas dicas e orientações:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">1</span>
                  Verifique a Adesão de seu Município
                </h3>
                <p className="text-gray-700 ml-13">
                  Certifique-se de que a prefeitura da sua cidade está integrada ao sistema nacional da NFS-e. 
                  A maioria dos municípios já está em processo de convênio, mas se você atua em uma localidade 
                  muito pequena que eventualmente não aderiu, fique atento – pela lei, eles terão que aderir, 
                  e a não adesão pode impactar a emissão de notas e até repasses de recursos.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-600 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">2</span>
                  Cadastre-se e Teste o Portal NFS-e
                </h3>
                <div className="ml-13">
                  <p className="text-gray-700 mb-3">
                    O governo federal disponibiliza o <strong>Portal Nacional da NFS-e</strong> (nfse.gov.br) e 
                    aplicativos gratuitos para emissão de notas.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>💡 Dica:</strong> Se você ainda não o utilizou, vale a pena cadastrar sua empresa 
                      ou MEI no portal e familiarizar-se com a emissão de uma nota por lá. Para MEIs, há inclusive 
                      um app mobile específico e guia de uso simplificado em parceria com o Sebrae.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-purple-600 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">3</span>
                  Atualize seus Sistemas e Treinamentos
                </h3>
                <div className="ml-13">
                  <p className="text-gray-700 mb-3">
                    Empresas que usam sistemas próprios ou ERPs devem conversar com seus fornecedores de software 
                    para garantir que a integração com o novo layout da NFS-e esteja sendo implementada.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Muitos sistemas já estão adequando o XML da nota para incluir os campos de IBS/CBS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Treine sua equipe financeira/fiscal para operar o novo sistema unificado</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-l-4 border-orange-600 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">4</span>
                  Acompanhe os Prazos Oficiais
                </h3>
                <div className="ml-13">
                  <p className="text-gray-700 mb-3">
                    Fique de olho nas notícias dos órgãos fiscais. Mudanças de última hora no cronograma podem 
                    ocorrer, e detalhes sobre quando exatamente começará a exigência de NFS-e para aluguéis e 
                    direitos serão divulgados no Portal NFS-e.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>📢 Fontes oficiais:</strong> Assinar boletins da Receita Federal ou verificar 
                      comunicados da sua prefeitura pode evitar surpresas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-red-600 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">5</span>
                  Busque Orientação e Suporte
                </h3>
                <div className="ml-13">
                  <p className="text-gray-700 mb-3">
                    Órgãos como o <strong>Sebrae</strong> estão engajados em esclarecer essas novidades para os 
                    pequenos negócios. Em novembro, o Sebrae realizou uma live com auditores da Receita justamente 
                    para tirar dúvidas sobre as mudanças no CNPJ e na NFS-e em 2026.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Procure materiais didáticos, cartilhas ou atendimentos oferecidos pelo Sebrae</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Contadores e sindicatos (como a Fenacon) têm divulgado análises detalhadas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Não hesite em consultar um profissional de contabilidade de confiança</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 my-6 border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">💬 Palavra do Coordenador da Receita Federal</h3>
              <blockquote className="text-gray-700 italic border-l-4 border-blue-600 pl-4">
                "Os municípios devem se adequar até 1º de janeiro de 2026, mas é importante eles já irem se 
                familiarizando com o sistema, usando a plataforma. Para os empreendedores, o objetivo é oferecer 
                uma plataforma única onde o cidadão consiga emitir as notas da maneira mais fácil possível."
              </blockquote>
              <p className="text-sm text-gray-600 mt-2">
                — Hermano Toscano, Coordenador do projeto NFS-e na Receita Federal
              </p>
            </div>
          </section>

          {/* Seção 7 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              🏛️ O que Dizem os Órgãos Oficiais
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A implementação da NFS-e nacional conta com posicionamentos favoráveis de diversas entidades oficiais:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-600">
                <div className="flex items-start mb-3">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-bold mr-4">
                    Receita Federal
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  A Receita Federal, responsável pelo ambiente nacional do sistema, tem divulgado comunicados 
                  ressaltando os benefícios e a necessidade de adesão.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-700">
                    Em nota de agosto, a Receita destacou que a obrigatoriedade do padrão nacional visa 
                    <strong> simplificar o cotidiano das empresas e reduzir custos redundantes</strong>. 
                    Também alertou as prefeituras sobre o prazo legal, para que nenhuma fique de fora e 
                    arrisque perder recursos federais.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 border-l-4 border-green-600">
                <div className="flex items-start mb-3">
                  <div className="bg-green-600 text-white rounded-lg px-4 py-2 font-bold mr-4">
                    CNM
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Confederação Nacional de Municípios</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  A CNM vem apoiando a iniciativa junto às cidades. A entidade publicou nota técnica e promove 
                  eventos para orientar os gestores municipais sobre o convênio com a plataforma nacional.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-700 mb-2">
                    <strong>Ganhos destacados pela CNM:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Maior eficiência na arrecadação</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Melhor controle de sonegação</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Ferramentas modernas de gestão tributária local</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Preparação para a partilha dos novos impostos IBS/CBS</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6 border-l-4 border-purple-600">
                <div className="flex items-start mb-3">
                  <div className="bg-purple-600 text-white rounded-lg px-4 py-2 font-bold mr-4">
                    Sebrae
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  O Sebrae atua na ponta dos pequenos negócios. Em parceria com a Receita, o Sebrae tem divulgado 
                  informações acessíveis e capacitações.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <blockquote className="text-gray-700 italic border-l-4 border-purple-600 pl-4">
                    "O Sebrae tem sido um grande parceiro nessa simplificação e para dar um salto de qualidade 
                    nos nossos serviços para o cidadão."
                  </blockquote>
                  <p className="text-sm text-gray-600 mt-2">
                    — Carlos Nacif, Auditor da Receita Federal
                  </p>
                  <p className="text-gray-700 mt-3">
                    Há um esforço conjunto para que mesmo os microempreendedores individuais e pequenas empresas 
                    estejam informados e preparados para emitir a NFS-e.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 my-6 border border-indigo-200">
              <h3 className="font-bold text-gray-900 mb-3">📌 Mensagem das Autoridades</h3>
              <p className="text-gray-700">
                A padronização da nota fiscal de serviço é um passo importante da modernização tributária. 
                Espera-se <strong>mais simplicidade para quem paga imposto</strong> e <strong>mais eficácia 
                para quem fiscaliza</strong>. A inclusão de aluguéis e cessão de direitos no escopo fiscal 
                reforça que nenhuma atividade ficará à margem da documentação eletrônica, fortalecendo o 
                controle e a justiça fiscal.
              </p>
            </div>
          </section>

          {/* Seção 8 - CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-4">
                🚀 NFS Rápida: Sua Solução para a NFS-e em Goiânia
              </h2>
              <p className="text-lg mb-6 text-blue-50">
                Prepare-se para as mudanças de 2026 com o <strong>NFS Rápida</strong>! Sistema completo, 
                integrado com o SGISS de Goiânia e totalmente preparado para a NFS-e nacional.
              </p>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">✨ Por que escolher o NFS Rápida?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <div>
                      <p className="font-semibold">Integração Total com SGISS</p>
                      <p className="text-sm text-blue-100">Sistema totalmente integrado com a Prefeitura de Goiânia</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <div>
                      <p className="font-semibold">Preparado para 2026</p>
                      <p className="text-sm text-blue-100">Já adequado às novas exigências da NFS-e nacional</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <div>
                      <p className="font-semibold">Simples e Fácil</p>
                      <p className="text-sm text-blue-100">Interface intuitiva para prestadores e contabilidades</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <div>
                      <p className="font-semibold">Suporte Especializado</p>
                      <p className="text-sm text-blue-100">Equipe pronta para ajudar você</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-center hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  Conhecer o NFS Rápida
                </Link>
                <a 
                  href="https://wa.me/5562992285469?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20NFS%20Rápida%20e%20as%20mudanças%20da%20NFS-e%20nacional%20para%202026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Seção 9 - Datas Importantes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              📅 Datas Importantes
            </h2>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border border-red-200">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-600 text-white rounded-lg px-4 py-2 font-bold mr-4 flex-shrink-0">
                    01/01/2026
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Início da Obrigatoriedade Geral</p>
                    <p className="text-gray-700">
                      A NFS-e padrão nacional se torna obrigatória para serviços em geral em todo o Brasil.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-600 text-white rounded-lg px-4 py-2 font-bold mr-4 flex-shrink-0">
                    2026
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Locações e Cessão de Direitos</p>
                    <p className="text-gray-700">
                      As operações de locação e cessão de direitos têm implementação prevista ao longo de 2026, 
                      com <strong>data exata ainda a ser anunciada oficialmente</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-600 text-white rounded-lg px-4 py-2 font-bold mr-4 flex-shrink-0">
                    2026
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">IBS/CBS - Fase Experimental</p>
                    <p className="text-gray-700">
                      Contribuintes acima dos limites de receita de aluguel deverão estar atentos à incidência 
                      de IBS/CBS já em 2026, embora as alíquotas desses impostos sejam experimentais no primeiro 
                      ano de transição.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
              <p className="text-gray-800">
                <strong>📢 Fique Informado:</strong> Para mais detalhes e atualizações, consulte o 
                <strong> Portal da NFS-e Nacional</strong> no site do gov.br, a Receita Federal e canais 
                de informação do Sebrae.
              </p>
            </div>
          </section>

          {/* Seção 10 - Referências */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              📚 Referências Oficiais
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Para quem quiser se aprofundar, vale a leitura das seguintes fontes oficiais:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Lei Complementar nº 214/2025</strong> - Estabelece a obrigatoriedade da NFS-e nacional e os novos tributos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Nota Técnica SE/CGNFS-e nº 005/2025</strong> - Disponível no Portal NFS-e (gov.br/nfse)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Comunicados da Receita Federal</strong> - Orientações sobre prazos e implementação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Orientações da CNM</strong> - Confederação Nacional de Municípios sobre o tema</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Materiais do Sebrae</strong> - Guias e capacitações para pequenos negócios</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Navegação entre posts */}
          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Leia também:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/blog/novo-padrao-emissao-nfs-goiania"
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-gray-900 mb-2">Novo Padrão de Emissão de NFS-e em Goiânia</h4>
                <p className="text-sm text-gray-600">Entenda as mudanças no sistema de emissão de notas fiscais</p>
              </Link>
              <Link 
                href="/blog/guia-completo-sgiss-goiania"
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-gray-900 mb-2">Guia Completo do SGISS Goiânia</h4>
                <p className="text-sm text-gray-600">Tudo sobre o sistema de gestão de ISS da capital</p>
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
