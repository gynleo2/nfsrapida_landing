import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock, CheckCircle, AlertTriangle, Shield, ArrowLeft, ExternalLink, FileText, Users, Building2, Smartphone, Lock } from 'lucide-react';
import MotionWrapper from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: "Guia Completo SGISS Goiânia 2025: Como Usar o Novo Sistema de ISS",
  description: "Aprenda tudo sobre o SGISS: acesso, emissão de NFS-e ABRASF 2.04, DMS, REST e DUAM. Guia atualizado com passo a passo completo para prestadores de serviço em Goiânia.",
  alternates: {
    canonical: "https://nfsrapida.com.br/blog/guia-completo-sgiss-goiania/",
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
  openGraph: {
    title: "Guia Completo SGISS Goiânia 2025: Como Usar o Novo Sistema de ISS",
    description: "Aprenda tudo sobre o SGISS: acesso, emissão de NFS-e ABRASF 2.04, DMS, REST e DUAM. Guia atualizado com passo a passo completo para prestadores de serviço.",
    url: "https://nfsrapida.com.br/blog/guia-completo-sgiss-goiania/",
    siteName: "NFSRápida",
    images: [
      {
        url: "https://nfsrapida.com.br/nfsrapida.png",
        width: 1200,
        height: 630,
        alt: "Guia Completo SGISS Goiânia 2025 - Sistema de Gestão de ISS com ABRASF 2.04",
      },
    ],
    locale: "pt_BR",
    type: "article",
    publishedTime: "2024-11-21T10:00:00.000Z",
    modifiedTime: "2024-11-21T10:00:00.000Z",
    authors: ["NFSRápida"],
    section: "Guias e Tutoriais",
    tags: [
      "SGISS",
      "NFS-e",
      "Goiânia",
      "ISS",
      "ABRASF 2.04",
      "Legislação Tributária",
      "DMS",
      "REST",
      "DUAM",
      "Nota Fiscal Eletrônica",
      "Prestadores de Serviço",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guia Completo SGISS Goiânia 2025: Como Usar o Novo Sistema de ISS",
    description: "Aprenda tudo sobre o SGISS: acesso, emissão de NFS-e ABRASF 2.04, DMS, REST e DUAM. Guia completo atualizado.",
    images: ["https://nfsrapida.com.br/nfsrapida.png"],
    creator: "@nfsrapida",
    site: "@nfsrapida",
  },
};

export default function SGISSGuiaCompleto() {
  // Schema.org JSON-LD para Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Guia Completo SGISS Goiânia 2025: Como Usar o Novo Sistema de ISS",
    "alternativeHeadline": "SGISS Goiânia: Guia Completo do Novo Sistema de Gestão de ISS",
    "description": "Guia completo sobre o SGISS - novo sistema de gestão do ISS em Goiânia. Aprenda como acessar, emitir NFS-e, declarar serviços e cumprir todas as obrigações tributárias.",
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
      "url": "https://nfsrapida.com.br",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nfsrapida.com.br/logo.png",
        "width": 250,
        "height": 60
      }
    },
    "datePublished": "2024-11-21T10:00:00-03:00",
    "dateModified": "2024-11-21T10:00:00-03:00",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nfsrapida.com.br/blog/guia-completo-sgiss-goiania"
    },
    "articleSection": "Guias e Tutoriais",
    "keywords": "SGISS, NFS-e, Goiânia, ABRASF 2.04, ISS, DMS, REST, DUAM, Nota Fiscal Eletrônica, Prestadores de Serviço",
    "wordCount": 4200,
    "inLanguage": "pt-BR",
    "isAccessibleForFree": true,
    "about": {
      "@type": "Thing",
      "name": "SGISS - Sistema de Gestão de ISS de Goiânia"
    }
  };

  // Schema.org JSON-LD para Breadcrumb
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
        "name": "Blog",
        "item": "https://nfsrapida.com.br/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Guia Completo SGISS Goiânia",
        "item": "https://nfsrapida.com.br/blog/guia-completo-sgiss-goiania"
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
        "name": "O que é o SGISS Goiânia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O SGISS é o novo ambiente oficial da Prefeitura de Goiânia para receber e validar XMLs de NFS-e (padrão ABRASF 2.04), registrar serviços prestados, tomados e retenções de ISS, manter o Livro Fiscal Eletrônico do ISS, gerar guias de recolhimento (DUAM) e receber declarações especiais."
        }
      },
      {
        "@type": "Question",
        "name": "Como acessar o SGISS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Existem duas formas de acesso: com certificado digital e-CNPJ (acesso imediato) ou com CPF + senha (necessário fazer primeiro acesso e validar identidade por upload de documentos ou certificado e-CPF)."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona a emissão de NFS-e no SGISS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Prefeitura não tem mais emissor próprio permanente. O contribuinte deve usar um emissor externo compatível com ABRASF 2.04, gerar a NFS-e e enviar o XML para o SGISS que realiza a validação."
        }
      },
      {
        "@type": "Question",
        "name": "O que é a DMS e como funciona no SGISS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A DMS (Declaração Mensal de Serviços) não é mais necessária em sistema separado. As NFS-e emitidas já alimentam automaticamente a declaração mensal. O contribuinte tem até o dia 5 de cada mês para fazer o encerramento espontâneo da competência."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona a REST no SGISS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A REST (Relação de Serviços Tomados) é responsabilidade do tomador. Para notas de prestadores de Goiânia, o sistema traz automaticamente as NFS-e para conferência. O tomador tem até o dia 5 do mês seguinte para aceitar ou recusar. Notas de outros municípios devem ser lançadas manualmente."
        }
      }
    ]
  };

  // Schema.org JSON-LD para HowTo
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como se adaptar ao SGISS Goiânia",
    "description": "Passo a passo completo para se adaptar ao novo Sistema de Gestão de ISS de Goiânia",
    "image": "https://nfsrapida.com.br/nfsrapida.png",
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "BRL",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Verificar certificado digital",
        "text": "Verifique se você já possui e-CNPJ ou e-CPF ativo. Certificados digitais permitem acesso imediato ao sistema.",
        "url": "https://nfsrapida.com.br/blog/guia-completo-sgiss-goiania#como-acessar"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Fazer primeiro acesso ao SGISS",
        "text": "Acesse o SGISS e faça o primeiro acesso se for usar CPF + senha. Complete a validação de identidade.",
        "url": "https://nfsrapida.com.br/blog/guia-completo-sgiss-goiania#como-acessar"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Escolher emissor de NFS-e",
        "text": "Use o emissor gratuito nos primeiros 60 dias ou contrate um sistema compatível com ABRASF 2.04.",
        "url": "https://nfsrapida.com.br/blog/guia-completo-sgiss-goiania#nfs-e"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Configurar sistema emissor",
        "text": "Configure seu sistema ou emissor para envio de XML ao SGISS.",
        "url": "https://nfsrapida.com.br/blog/guia-completo-sgiss-goiania#nfs-e"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Adaptar rotina fiscal",
        "text": "Adapte a rotina para encerrar a competência até o dia 5, conferir e aceitar/recusar notas tomadas, e emitir e pagar as guias (DUAM).",
        "url": "https://nfsrapida.com.br/blog/guia-completo-sgiss-goiania#dms-rest"
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Revisar casos específicos",
        "text": "Revise com seu contador casos específicos como Simples, retenções, construção civil, planos de saúde, salão parceiro e bancos.",
        "url": "https://nfsrapida.com.br/blog/guia-completo-sgiss-goiania#casos-especificos"
      }
    ]
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

      <article className="min-h-screen bg-slate-50 pb-20">
      {/* Article Header */}
      <header className="bg-secondary pt-26 pb-20 relative overflow-hidden">
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
              <span className="bg-blue-500/20 text-blue-100 px-3 py-1 rounded-full border border-blue-500/30">Guia Completo</span>
              <time dateTime="2024-11-21" className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 21 Nov 2024</time>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 15 min de leitura</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              SGISS Goiânia: Guia Completo do Novo Sistema de Gestão de ISS 2025
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              A partir de 1º de outubro de 2025, todos os contribuintes de ISS em Goiânia passam a utilizar o SGISS. Este guia completo reúne tudo que você precisa saber sobre acesso, emissão de NFS-e no padrão ABRASF 2.04, DMS, REST, DUAM e muito mais.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
          
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-lg mb-6">
              A partir de 1º de outubro de 2025, a Prefeitura de Goiânia implementou uma mudança significativa na gestão tributária municipal. O <strong>SGISS – Sistema de Gestão, Fiscalização e Arrecadação do ISSQN</strong> chegou para modernizar e centralizar todas as obrigações fiscais relacionadas ao Imposto Sobre Serviços.
            </p>
            <p className="mb-6">
              Este artigo reúne, em linguagem direta, as principais informações para empresas, contadores, planos de saúde, salões parceiros, bancos e demais contribuintes que precisam se adaptar ao novo modelo.
            </p>

            {/* Índice */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-xl">
              <h3 className="text-blue-900 font-bold text-lg flex items-center gap-2 mt-0 mb-4">
                <FileText className="w-5 h-5" />
                Índice do Guia
              </h3>
              <nav>
                <ol className="text-blue-800 m-0 text-sm space-y-2 list-decimal pl-5">
                  <li><a href="#o-que-e" className="hover:text-primary hover:underline transition-colors">O que é o SGISS Goiânia?</a></li>
                  <li><a href="#quem-usa" className="hover:text-primary hover:underline transition-colors">Quem é obrigado a usar o SGISS?</a></li>
                  <li><a href="#como-acessar" className="hover:text-primary hover:underline transition-colors">Como acessar o novo SGISS</a></li>
                  <li><a href="#nfs-e" className="hover:text-primary hover:underline transition-colors">NFS-e em Goiânia a partir de outubro de 2025</a></li>
                  <li><a href="#dms-rest" className="hover:text-primary hover:underline transition-colors">DMS, REST e obrigações mensais</a></li>
                  <li><a href="#duam" className="hover:text-primary hover:underline transition-colors">Emissão e gestão de guias (DUAM)</a></li>
                  <li><a href="#cancelamento" className="hover:text-primary hover:underline transition-colors">Cancelamento, substituição e carta de correção</a></li>
                  <li><a href="#casos-especificos" className="hover:text-primary hover:underline transition-colors">Casos específicos por segmento</a></li>
                  <li><a href="#verificacao" className="hover:text-primary hover:underline transition-colors">Verificação de autenticidade e consultas</a></li>
                  <li><a href="#suporte" className="hover:text-primary hover:underline transition-colors">Suporte e canais de atendimento</a></li>
                  <li><a href="#passo-a-passo" className="hover:text-primary hover:underline transition-colors">Passo a passo para se adaptar</a></li>
                </ol>
              </nav>
            </div>

            <h2 className="prose-h2" id="o-que-e">1. O que é o SGISS Goiânia?</h2>
            <p className="mb-6">
              O SGISS é o novo ambiente oficial da Prefeitura de Goiânia que centraliza todas as operações relacionadas ao ISS em uma única plataforma integrada. Com ele, o cumprimento da obrigação principal (pagamento do imposto) e das obrigações acessórias passa a ser feito de forma integrada e mais simples.
            </p>
            
            <h3 className="prose-h3">Principais funcionalidades do SGISS</h3>
            <ul className="list-none pl-0 space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Receber e validar XMLs de NFS-e</strong> no padrão ABRASF 2.04</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Registrar serviços prestados, tomados e retenções de ISS</strong> (REST e declarações)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Manter o Livro Fiscal Eletrônico do ISS</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Gerar automaticamente guias de recolhimento (DUAM)</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Receber declarações especiais</strong> (Construção Civil, Cartórios, Cooperativas, Bancos, Planos de Saúde etc.)</span>
              </li>
            </ul>

            <div className="bg-slate-100 p-6 rounded-xl my-6">
              <p className="text-slate-700 font-semibold mb-2 flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Acesso ao SGISS:
              </p>
              <a href="https://www.issnetonline.com.br/goiania/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-700 font-bold underline">
                https://www.issnetonline.com.br/goiania/
              </a>
            </div>

            <h2 className="prose-h2" id="quem-usa">2. Quem é obrigado a usar o SGISS?</h2>
            <p className="mb-6">
              Devem utilizar o novo sistema <strong>todos os contribuintes de ISS inscritos no Cadastro de Atividade Econômica (CAE)</strong> da Prefeitura de Goiânia, incluindo:
            </p>
            <ul className="list-none pl-0 space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span>Prestadores de serviços em geral</span>
              </li>
              <li className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span>Responsáveis e substitutos tributários</span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span>Tomadores com obrigação de reter ISS</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span>Contadores que representam empresas</span>
              </li>
            </ul>

            <h2 className="prose-h2" id="como-acessar">3. Como acessar o novo SGISS</h2>
            <p className="mb-6">
              O SGISS oferece duas formas de acesso, pensadas para atender diferentes perfis de usuários:
            </p>

            <h3 className="prose-h3 flex items-center gap-2">
              <Lock className="w-6 h-6 text-blue-600" />
              3.1. Acesso com certificado digital e-CNPJ
            </h3>
            <p className="mb-6">
              Quem possui <strong>e-CNPJ (ICP-Brasil)</strong> tem acesso imediato ao SGISS. Não é necessário fazer "primeiro acesso" para entrar com o certificado.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6 rounded-r-xl">
              <p className="text-yellow-800 m-0 text-sm">
                <strong>Observação:</strong> Se o contribuinte quiser acessar pelo smartphone/app, será necessário habilitar também o login por CPF + senha.
              </p>
            </div>

            <h3 className="prose-h3 flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-blue-600" />
              3.2. Acesso com CPF + senha
            </h3>
            <p className="mb-6">
              Disponível a partir de 01/10/2025. Para criar seu acesso:
            </p>
            <ol className="space-y-3 mb-6">
              <li>Clique em <strong>"Primeiro acesso ao Sistema"</strong> na tela inicial do SGISS</li>
              <li>Preencha seus dados e crie uma senha (apenas números)</li>
              <li>Valide sua identidade por um dos meios:
                <ul className="mt-2 ml-6 space-y-2">
                  <li><strong>Upload de documentos pessoais (PDF)</strong> – sujeito à validação manual pela Prefeitura</li>
                  <li><strong>Certificado digital e-CPF</strong> – validação automática e imediata</li>
                </ul>
              </li>
            </ol>
            <p className="mb-6">
              Depois da aprovação, você receberá um e-mail de liberação e poderá acessar com:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Login:</strong> CPF (sem pontos ou traço)</li>
              <li><strong>Senha:</strong> a que você cadastrou</li>
            </ul>
            <p className="mb-6">
              Em caso de esquecimento, use a opção <strong>"Esqueci a Senha"</strong> na tela de login.
            </p>

            <h2 className="prose-h2" id="nfs-e">4. NFS-e em Goiânia a partir de 1º de outubro de 2025</h2>
            <p className="mb-6">
              A mudança mais sentida na rotina do contribuinte é a forma de emissão da Nota Fiscal de Serviços Eletrônica (NFS-e).
            </p>

            <h3 className="prose-h3">4.1. Fim do emissor próprio da Prefeitura</h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-xl">
              <h4 className="text-red-800 font-bold text-lg flex items-center gap-2 mt-0 mb-2">
                <AlertTriangle className="w-5 h-5" />
                Mudança Importante
              </h4>
              <p className="text-red-700 m-0">
                A Prefeitura <strong>não terá mais emissor próprio permanente</strong>. Em vez disso, o contribuinte deverá usar um emissor externo compatível com o padrão ABRASF 2.04.
              </p>
            </div>

            <p className="mb-6">
              Durante o período de transição, está disponível:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Emissor gratuito "Nota Eletrônica"</strong> – disponível por 60 dias, de 01/10/2025 a 30/11/2025</li>
              <li>Link: <a href="https://www.notaeletronica.com.br/goiania" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-700 underline">https://www.notaeletronica.com.br/goiania</a></li>
            </ul>
            <p className="mb-6">
              Após esse período, será <strong>obrigatório utilizar um emissor próprio ou contratado</strong>, desde que compatível com o padrão ABRASF 2.04. Saiba mais sobre <Link href="/fim-emissor-gratuito-goiania/" className="text-primary hover:text-green-700 underline font-semibold">o fim do emissor gratuito em Goiânia</Link>.
            </p>

            <h3 className="prose-h3">4.2. Como funciona o envio do XML para o SGISS</h3>
            <p className="mb-6">
              Independentemente do emissor escolhido, o processo é:
            </p>
            <ol className="space-y-3 mb-6">
              <li>A NFS-e é gerada no emissor</li>
              <li>O XML da nota é enviado ao SGISS, que realiza a validação</li>
              <li>As notas podem ser consultadas no próprio portal do SGISS</li>
            </ol>

            <h3 className="prose-h3">4.3. Numeração, modelo e prazo de consulta</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>O modelo adotado é o <strong>ABRASF 2.04</strong>, com numeração sequencial por estabelecimento iniciando em "01" para o novo formato</li>
              <li>As NFS-e poderão ser consultadas e reimpressas por <strong>prazo indeterminado</strong> (salvo alteração futura da Secretaria de Finanças)</li>
              <li>Notas emitidas antes de 01/10/2025 continuarão disponíveis no sistema anterior, não no SGISS</li>
            </ul>

            <h3 className="prose-h3">4.4. Emissão com vários serviços</h3>
            <p className="mb-6">
              Em regra, cada serviço deve ter sua própria NFS-e.
            </p>
            <p className="mb-6">
              <strong>Exceção:</strong> Serviços do mesmo subitem da lista de serviços, para o mesmo tomador, podem ser consolidados na mesma nota, detalhando tudo na descrição.
            </p>

            <h3 className="prose-h3">4.5. Data retroativa</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>É possível emitir NFS-e com data de competência retroativa de até <strong>365 dias</strong></li>
              <li>Não é permitido emitir nota com data anterior ao início das atividades no cadastro municipal</li>
            </ul>

            {/* Hook Promocional NFSRápida */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 my-10 border-2 border-green-200 relative overflow-hidden group shadow-lg">
               <div className="absolute top-0 right-0 bg-green-100 w-40 h-40 rounded-bl-full opacity-40 transition-transform group-hover:scale-110"></div>
               <div className="flex items-start gap-3 mb-4 relative z-10">
                 <div className="bg-green-600 p-2 rounded-lg">
                   <Shield className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Solução Recomendada</span>
                 </div>
               </div>
               <h3 className="text-green-900 font-bold text-2xl mb-3 relative z-10">NFSRápida: Emissor 100% Homologado para o SGISS</h3>
               <p className="text-green-800 mb-4 relative z-10 text-base leading-relaxed">
                 Sistema totalmente adaptado ao novo padrão ABRASF 2.04. Emita suas notas fiscais em 30 segundos, sem complicação. Mais barato que um café por mês e com suporte incluso.
               </p>
               <ul className="space-y-2 mb-6 relative z-10">
                 <li className="flex items-center gap-2 text-green-800 text-sm">
                   <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                   <span>7 dias grátis com 10 notas inclusas</span>
                 </li>
                 <li className="flex items-center gap-2 text-green-800 text-sm">
                   <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                   <span>Interface simples e intuitiva</span>
                 </li>
                 <li className="flex items-center gap-2 text-green-800 text-sm">
                   <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                   <span>Funciona no celular, tablet e computador</span>
                 </li>
                 <li className="flex items-center gap-2 text-green-800 text-sm">
                   <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                   <span>Sem fidelidade, cancele quando quiser</span>
                 </li>
                 <li className="flex items-center gap-2 text-green-800 text-sm">
                   <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                   <span>Integração automática com o SGISS</span>
                 </li>
               </ul>
               <Link href="https://app.nfsrapida.com.br/" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all relative z-10 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                 Começar Teste Grátis Agora
                 <ArrowRight className="w-5 h-5" />
               </Link>
            </div>

            <h2 className="prose-h2" id="dms-rest">5. DMS, REST e obrigações mensais dentro do SGISS</h2>
            <p className="mb-6">
              Uma das grandes mudanças é que o SGISS automatiza parte das declarações que antes eram feitas separadamente.
            </p>

            <h3 className="prose-h3">5.1. DMS – Declaração Mensal de Serviços</h3>
            <p className="mb-6">
              <strong>Excelente notícia:</strong> Não é mais necessário gerar a DMS em sistema separado!
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>As NFS-e emitidas já alimentam automaticamente a declaração mensal</li>
              <li>O contribuinte tem até o <strong>dia 5 de cada mês</strong> para fazer o encerramento espontâneo da competência</li>
              <li>Se não encerrar, o sistema pode encerrar automaticamente quando houver guia emitida, gerando o débito respectivo</li>
            </ul>

            <h4 className="prose-h4">Como fazer o encerramento espontâneo</h4>
            <p className="mb-6">
              Acesse: <strong>Menu Guias de Recolhimento &gt; Emissão de Guia &gt; Tipo: "Serviços Prestados"</strong>
            </p>
            <p className="mb-6">
              O SGISS pode gerar:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>DUAM de recolhimento</strong> (quando houver ISS a pagar)</li>
              <li><strong>Declaração de Não Movimento</strong> (se não houver NFS-e na competência)</li>
              <li><strong>Protocolo de Encerramento</strong> (quando todas as notas não gerarem ISS devido ao prestador – por retenção, serviços fora de Goiânia etc.)</li>
            </ul>

            <h3 className="prose-h3">5.2. REST – Relação de Serviços Tomados</h3>
            <p className="mb-6">
              A REST é responsabilidade do <strong>tomador de serviços</strong>.
            </p>

            <h4 className="prose-h4">Para notas emitidas por prestadores estabelecidos em Goiânia</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>O sistema traz automaticamente as NFS-e disponíveis para conferência</li>
              <li>O tomador tem até o <strong>dia 5 do mês seguinte</strong> para:
                <ul className="mt-2 ml-6 space-y-1">
                  <li>Aceitar as notas (de forma espontânea)</li>
                  <li>Ou recusar o ISS de notas retidas que não reconhecer</li>
                </ul>
              </li>
              <li>Se não houver manifestação, o sistema realiza o <strong>aceite tácito</strong> e gera a guia de recolhimento quando houver ISS devido</li>
            </ul>

            <h4 className="prose-h4">Notas de outros municípios</h4>
            <p className="mb-6">
              Quando o ISS é devido a Goiânia, devem ser lançadas manualmente pelo tomador em:
            </p>
            <p className="mb-6">
              <strong>Declaração de Serviços Contratados &gt; Incluir &gt; Modelo "Notas de Outros Municípios"</strong>
            </p>

            <h2 className="prose-h2" id="duam">6. Emissão e gestão de guias (DUAM)</h2>
            <p className="mb-6">
              O <strong>Documento Único de Arrecadação Municipal (DUAM)</strong> pode ser:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Gerado manualmente pelo contribuinte a qualquer momento</li>
              <li>Ou emitido automaticamente pelo sistema, até 5 dias antes do vencimento</li>
            </ul>

            <h3 className="prose-h3">Três formas de emissão de guia</h3>
            <ol className="space-y-3 mb-6">
              <li><strong>Por lote</strong> – uma guia para todos os documentos da competência</li>
              <li><strong>Por seleção</strong> – o usuário escolhe quais NFS-e irão compor a guia</li>
              <li><strong>Por documento</strong> – uma guia por NFS-e</li>
            </ol>

            <h3 className="prose-h3">Reemissão de guias</h3>
            <p className="mb-6">
              Acesse: <strong>Guias de Recolhimento &gt; Reemissão de Guias</strong>
            </p>

            <h2 className="prose-h2" id="cancelamento">7. Cancelamento, substituição e carta de correção da NFS-e</h2>
            <p className="mb-6">
              A NFS-e é um documento fiscal assinado digitalmente, portanto <strong>não pode ser alterada após a emissão</strong>.
            </p>

            <h3 className="prose-h3">7.1. Carta de Correção</h3>
            <p className="mb-6">
              Pode ser utilizada <strong>somente para corrigir a descrição dos serviços</strong>, gerando um documento auxiliar vinculado à nota, que deve ser encaminhado ao tomador.
            </p>
            <p className="mb-6">
              <strong>Não pode ser usada para alterar:</strong>
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Base de cálculo, alíquota, deduções ou código de serviço</li>
              <li>Dados cadastrais do prestador ou tomador</li>
              <li>Número ou data da nota</li>
              <li>Local de incidência, isenção, imunidade ou responsabilidade pelo imposto</li>
            </ul>

            <h3 className="prose-h3">7.2. Cancelamento e substituição</h3>
            <p className="mb-6">
              O próprio emitente pode cancelar ou substituir a NFS-e <strong>até o 5º dia do mês subsequente à data de emissão</strong>, usando o emissor ou o SGISS.
            </p>
            <p className="mb-6">
              <strong>Depois desse prazo</strong>, é necessário abrir processo administrativo (SEI) em uma loja do Atende Fácil, com:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Procuração (se for representante)</li>
              <li>A NFS-e a ser cancelada</li>
              <li>Formulário de cancelamento/substituição</li>
              <li>Declaração de não execução do serviço (para cancelamento)</li>
              <li>Ou declaração de duplicidade, quando for o caso</li>
            </ul>

            <h2 className="prose-h2" id="casos-especificos">8. Casos específicos: Simples, planos, construção civil, salão parceiro, bancos</h2>

            <h3 className="prose-h3">8.1. Optantes pelo Simples Nacional</h3>
            <p className="mb-6">
              <strong>Quando o ISS não é retido pelo tomador:</strong>
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>O campo alíquota na NFS-e pode ficar em branco</li>
              <li>Se o prestador optar por preencher, a responsabilidade pelos valores é exclusivamente dele</li>
            </ul>
            <p className="mb-6">
              <strong>Quando o ISS é retido pelo tomador:</strong>
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>O preenchimento da alíquota é obrigatório</li>
            </ul>
            <p className="mb-6">
              O recolhimento continua sendo via <strong>DAS do Simples Nacional</strong>.
            </p>

            <h3 className="prose-h3">8.2. Planos de saúde</h3>
            <p className="mb-6">
              Podem abater da base de cálculo os serviços enquadrados nos <strong>subitens 4.22 e 4.23 da LC 116/2003</strong>, desde que devidamente declarados como serviços contratados e em conformidade com a <strong>IN 14/2025</strong>. Para mais detalhes, veja nosso artigo sobre <Link href="/nfs-e-contabilidade-goiania/" className="text-primary hover:text-green-700 underline font-semibold">NFS-e e contabilidade em Goiânia</Link>.
            </p>

            <h3 className="prose-h3">8.3. Construção civil – subitens 7.02 e 7.05</h3>
            <p className="mb-6">
              Prestadores desses subitens:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Devem emitir NFS-e e podem abater os valores das mercadorias produzidas fora do local da prestação, sujeitas a ICMS</li>
              <li>Devem cadastrar obras e NF-e de materiais no sistema</li>
              <li>Devem indicar, na emissão da NFS-e, quais NF-e serão usadas para abatimento</li>
              <li>Seguir as regras da <strong>IN 19/2025</strong></li>
            </ul>

            <h3 className="prose-h3">8.4. Salão parceiro</h3>
            <p className="mb-6">
              Estabelecimentos enquadrados na legislação de salão parceiro:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Devem emitir NFS-e</li>
              <li>Podem abater da base de cálculo os valores pagos aos profissionais-parceiros</li>
              <li>Os profissionais devem ser cadastrados no sistema</li>
              <li>Os abatimentos seguem regras da <strong>IN 15/2025</strong> e dependem de os serviços estarem corretamente declarados como contratados</li>
            </ul>

            <h3 className="prose-h3">8.5. Bancos e instituições financeiras</h3>
            <p className="mb-6">
              Devem entregar a <strong>DES-IF – Declaração Eletrônica de Serviços de Instituições Financeiras</strong>, versão 3.2 ABRASF, conforme <strong>IN 17/2025</strong>.
            </p>

            <h2 className="prose-h2" id="verificacao">9. Verificação de autenticidade e consultas de notas</h2>
            <p className="mb-6">
              O tomador pode verificar a validade da NFS-e:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Escaneando o <strong>QR Code</strong> no DANFS-e</li>
              <li>Ou inserindo o <strong>código de verificação</strong> nos links oficiais do sistema</li>
            </ul>

            <h3 className="prose-h3">Consultas de notas recebidas</h3>
            <p className="mb-6">
              Acesse: <strong>Declaração de Serviços Contratados &gt; Consulta de Notas Tomadas</strong>
            </p>
            <p className="mb-6">
              Filtros disponíveis: número da nota, CNPJ/CPF do prestador, datas etc.
            </p>

            <h3 className="prose-h3">Recusa de documentos</h3>
            <p className="mb-6">
              Se o tomador não reconhecer um documento com ISS retido:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Pode utilizar o módulo <strong>"Recusa ISS Notas Tomadas"</strong>, apresentando justificativa</li>
              <li>A recusa, se procedente, reverte a cobrança para o prestador</li>
            </ul>

            <h2 className="prose-h2" id="suporte">10. Suporte e canais de atendimento</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h3 className="text-blue-900 font-bold text-lg mt-0 mb-4">Para dúvidas de uso do sistema</h3>
              <p className="text-blue-800 mb-3 text-sm">(problemas de acesso, erros de tela, funcionalidades)</p>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li><strong>E-mail:</strong> suporte.goiania@notacontrol.com.br</li>
                <li><strong>Chat:</strong> <a href="https://www.notacontrol.com.br/portalnfse/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-700 underline">https://www.notacontrol.com.br/portalnfse/</a></li>
                <li><strong>Telefone:</strong> (67) 3041-2075</li>
              </ul>
            </div>

            <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 my-6">
              <h3 className="text-slate-900 font-bold text-lg mt-0 mb-4">Para dúvidas tributárias</h3>
              <p className="text-slate-700 mb-3 text-sm">(interpretação da legislação, enquadramentos, regras de ISS)</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li><strong>E-mail:</strong> gernot.sefaz@goiania.gov.br</li>
              </ul>
            </div>

            <h2 className="prose-h2" id="passo-a-passo">11. Passo a passo resumido para se adaptar ao SGISS</h2>
            <ol className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="bg-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</span>
                <div>
                  <strong>Verifique se você já possui e-CNPJ ou e-CPF ativo</strong>
                  <p className="text-slate-600 text-sm mt-1">Certificados digitais permitem acesso imediato ao sistema</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</span>
                <div>
                  <strong>Acesse o SGISS e faça o primeiro acesso</strong>
                  <p className="text-slate-600 text-sm mt-1">(se for usar CPF + senha)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</span>
                <div>
                  <strong>Escolha o emissor de NFS-e</strong>
                  <p className="text-slate-600 text-sm mt-1">Use o gratuito nos primeiros 60 dias ou contrate um sistema compatível com ABRASF 2.04</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">4</span>
                <div>
                  <strong>Configure seu sistema ou emissor</strong>
                  <p className="text-slate-600 text-sm mt-1">Para envio de XML ao SGISS</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">5</span>
                <div>
                  <strong>Adapte a rotina para:</strong>
                  <ul className="text-slate-600 text-sm mt-2 space-y-1 ml-4 list-disc">
                    <li>Encerrar a competência até o dia 5</li>
                    <li>Conferir e aceitar/recusar notas tomadas</li>
                    <li>Emitir e pagar as guias (DUAM)</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">6</span>
                <div>
                  <strong>Revise com seu contador casos específicos</strong>
                  <p className="text-slate-600 text-sm mt-1">(Simples, retenções, construção civil, planos, salão parceiro, bancos)</p>
                </div>
              </li>
            </ol>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-xl">
              <h3 className="text-green-800 font-bold text-lg flex items-center gap-2 mt-0 mb-2">
                <CheckCircle className="w-5 h-5" />
                Pronto para começar!
              </h3>
              <p className="text-green-700 m-0">
                Com essas ações, sua empresa estará pronta para operar normalmente no novo ambiente tributário da Prefeitura de Goiânia.
              </p>
            </div>

            <h2 className="prose-h2">Legislação de Referência</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-sm">
              <li><strong>DECRETO Nº 2.824/2025:</strong> Regulamenta o SGISS</li>
              <li><strong>IN Nº 14/2025:</strong> Declaração Eletrônica das Cooperativas e Planos de Saúde</li>
              <li><strong>IN Nº 15/2025:</strong> Declaração Eletrônica de Salão Parceiro</li>
              <li><strong>IN Nº 16/2025:</strong> Cancelamento e substituição de NFS-e</li>
              <li><strong>IN Nº 17/2025:</strong> Declaração Eletrônica de Serviços de Instituições Financeiras (DES-IF)</li>
              <li><strong>IN Nº 19/2025:</strong> Declaração Eletrônica de Serviços de Construção Civil</li>
            </ul>

            <h2 className="prose-h2">Conclusão</h2>
            <p className="mb-6">
              O SGISS representa um avanço significativo na gestão tributária de Goiânia, trazendo mais transparência, automação e integração aos processos fiscais. Embora exija um período de adaptação, o sistema foi desenhado para simplificar o dia a dia dos contribuintes a médio e longo prazo.
            </p>
            <p className="mb-6">
              A plataforma anterior apresentava instabilidades, principalmente no fim do mês. O novo formato promete emissão mais ágil, estável e acessível, além de melhor combate à sonegação fiscal com cruzamento automático de dados.
            </p>
            <p className="mb-6">
              Aproveite o período de transição para se familiarizar com a plataforma, configurar seus acessos e escolher o emissor de NFS-e mais adequado ao seu negócio. Para mais informações sobre <Link href="/como-emitir-nota-fiscal-servico-goiania/" className="text-primary hover:text-green-700 underline font-semibold">como emitir nota fiscal de serviço em Goiânia</Link>, confira nossos outros guias. Em caso de dúvidas, não hesite em utilizar os canais de suporte disponibilizados pela Prefeitura.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-xl">
              <h3 className="text-yellow-800 font-bold text-lg flex items-center gap-2 mt-0 mb-2">
                <AlertTriangle className="w-5 h-5" />
                Lembre-se
              </h3>
              <p className="text-yellow-700 m-0">
                O prazo de 60 dias com emissor gratuito termina em <strong>30/11/2025</strong>. Planeje-se para ter uma solução definitiva implementada antes dessa data!
              </p>
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

      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Link 
          href="https://app.nfsrapida.com.br/" 
          className="flex items-center justify-between bg-primary text-white p-4 rounded-xl shadow-2xl shadow-green-900/20"
        >
          <span className="font-bold text-sm">Emita NFS-e sem complicação</span>
          <div className="bg-white/20 p-2 rounded-lg">
            <ArrowRight className="w-5 h-5" />
          </div>
        </Link>
      </div>
      </article>
    </>
  );
}

