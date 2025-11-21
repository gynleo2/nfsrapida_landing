import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock, CheckCircle, AlertTriangle, Shield, ArrowLeft, FileText } from 'lucide-react';
import MotionWrapper from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: "Fim do Emissor Gratuito em Goiânia: Novo Padrão NFS-e 2025 | NFSRápida",
  description: "A Prefeitura de Goiânia encerrou o emissor gratuito. Entenda o novo padrão SGISS, o modelo ABRASF 2.04 e qual a melhor alternativa para emitir suas notas fiscais.",
  keywords: [
    "emissor gratuito goiânia",
    "sgiss goiânia",
    "abrasf 2.04",
    "nfs-e goiânia 2025",
    "decreto 2824/2025",
    "nota fiscal serviço goiânia",
    "iss goiânia",
    "emissão nfs-e",
    "reforma tributária",
    "lei complementar 214/2025",
  ],
  alternates: {
    canonical: "https://nfsrapida.com.br/blog/novo-padrao-emissao-nfs-goiania/",
  },
  openGraph: {
    title: "Fim do Emissor Gratuito em Goiânia: Novo Padrão NFS-e 2025",
    description: "Entenda o novo padrão SGISS e evite problemas fiscais com o fim do emissor gratuito da Prefeitura de Goiânia.",
    url: "https://nfsrapida.com.br/blog/novo-padrao-emissao-nfs-goiania/",
    siteName: "NFSRápida",
    images: [
      {
        url: "https://nfsrapida.com.br/nfsrapida.png",
        width: 1200,
        height: 630,
        alt: "Novo Padrão NFS-e Goiânia 2025",
      },
    ],
    locale: "pt_BR",
    type: "article",
    publishedTime: "2025-11-21T09:00:00.000Z",
    modifiedTime: "2025-11-21T09:00:00.000Z",
    authors: ["NFSRápida"],
    tags: [
      "NFS-e",
      "Goiânia",
      "SGISS",
      "ABRASF",
      "Legislação",
      "ISS",
      "Nota Fiscal",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fim do Emissor Gratuito em Goiânia: Novo Padrão NFS-e 2025",
    description: "Entenda o novo padrão SGISS e evite problemas fiscais.",
    images: ["https://nfsrapida.com.br/nfsrapida.png"],
    creator: "@nfsrapida",
  },
};

export default function ArticlePost() {
  // Schema.org JSON-LD para Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Novo Padrão de Emissão de Nota Fiscal de Serviços em Goiânia: O que Você Precisa Saber",
    "description": "A Prefeitura de Goiânia regulamentou o novo Sistema de Gestão do ISS (SGISS). Entenda o que muda para prestadores de serviço e como se adequar ao fim do emissor gratuito.",
    "image": "https://nfsrapida.com.br/nfsrapida.png",
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
        "url": "https://nfsrapida.com.br/logo.png"
      }
    },
    "datePublished": "2025-11-21T09:00:00.000Z",
    "dateModified": "2025-11-21T09:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nfsrapida.com.br/blog/novo-padrao-emissao-nfs-goiania"
    },
    "articleSection": "Legislação",
    "keywords": "SGISS, NFS-e, Goiânia, ABRASF 2.04, Decreto 2824/2025, ISS, Nota Fiscal de Serviço",
    "wordCount": 2500,
    "inLanguage": "pt-BR"
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
        "name": "Novo Padrão de Emissão de NFS-e em Goiânia",
        "item": "https://nfsrapida.com.br/blog/novo-padrao-emissao-nfs-goiania"
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
        "name": "O que é o SGISS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O SGISS (Sistema de Gestão, Fiscalização e Arrecadação do ISS) é uma plataforma online que reúne todas as operações relacionadas ao ISS em Goiânia. Por meio dela, empresas e profissionais terão acesso a ferramentas de fiscalização e acompanhamento de suas obrigações tributárias."
        }
      },
      {
        "@type": "Question",
        "name": "Quando termina o emissor gratuito da Prefeitura de Goiânia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A partir de 1º de dezembro de 2025, a Prefeitura de Goiânia deixará de emitir gratuitamente a Nota Fiscal de Serviços Eletrônica (NFS-e). Quem não tiver migrado para um sistema próprio ou comercial não conseguirá emitir notas fiscais."
        }
      },
      {
        "@type": "Question",
        "name": "O que é o padrão ABRASF 2.04?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O ABRASF 2.04 é o modelo nacional de Nota Fiscal de Serviços Eletrônica (NFS-e), desenvolvido pela Associação Brasileira das Secretarias de Finanças das Capitais. Esse padrão define a estrutura técnica e campos obrigatórios para integração entre os sistemas de emissão e os fiscos municipais."
        }
      },
      {
        "@type": "Question",
        "name": "MEI é afetado pela mudança?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. A mudança não afeta os Microempreendedores Individuais (MEIs), que já emitem suas notas fiscais por uma plataforma nacional específica. Como o MEI nunca esteve vinculado ao sistema municipal, sua rotina de emissão permanece exatamente a mesma."
        }
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
            
            <div className="flex items-center gap-4 text-sm text-blue-200 mb-6">
              <span className="bg-blue-500/20 text-blue-100 px-3 py-1 rounded-full border border-blue-500/30">Legislação</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 21 Nov 2025</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min de leitura</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Novo Padrão de Emissão de Nota Fiscal de Serviços em Goiânia: O que Você Precisa Saber
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Decreto nº 2.824/2025 criou o SGISS e mudou as regras para emissão de NFS-e em Goiânia. Entenda o que muda, os prazos e como se adaptar ao novo padrão nacional.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
          
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="mb-6">
              A Prefeitura de Goiânia regulamentou, por meio do <strong>Decreto nº 2.824/2025</strong>, a criação do Sistema de Gestão, Fiscalização e Arrecadação do ISS (SGISS). A medida representa um marco na modernização da gestão do Imposto Sobre Serviços de Qualquer Natureza (ISS) e traz novidades importantes para os contribuintes, especialmente em relação à emissão da Nota Fiscal de Serviços Eletrônica (NFS-e).
            </p>

            {/* Índice */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-xl">
              <h3 className="text-blue-900 font-bold text-lg flex items-center gap-2 mt-0 mb-4">
                <FileText className="w-5 h-5" />
                Índice do Artigo
              </h3>
              <nav>
                <ol className="text-blue-800 m-0 text-sm space-y-2 list-decimal pl-5">
                  <li><a href="#principais-mudancas" className="hover:text-primary hover:underline transition-colors">As Principais Mudanças</a></li>
                  <li><a href="#padrao-abrasf" className="hover:text-primary hover:underline transition-colors">O Padrão ABRASF 2.04</a></li>
                  <li><a href="#o-que-e-sgiss" className="hover:text-primary hover:underline transition-colors">O que é o SGISS?</a></li>
                  <li><a href="#beneficios" className="hover:text-primary hover:underline transition-colors">Benefícios Esperados</a></li>
                  <li><a href="#periodo-teste" className="hover:text-primary hover:underline transition-colors">Período de Teste Gratuito</a></li>
                  <li><a href="#apos-teste" className="hover:text-primary hover:underline transition-colors">O que Fazer Após o Período de Teste</a></li>
                  <li><a href="#nao-afetados" className="hover:text-primary hover:underline transition-colors">Quem Não é Afetado pela Mudança</a></li>
                  <li><a href="#como-preparar" className="hover:text-primary hover:underline transition-colors">Como as Empresas Devem se Preparar</a></li>
                  <li><a href="#integracao-nacional" className="hover:text-primary hover:underline transition-colors">Integração Nacional e Perspectivas</a></li>
                  <li><a href="#conclusao" className="hover:text-primary hover:underline transition-colors">Considerações Finais</a></li>
                </ol>
              </nav>
            </div>

            <h2 className="prose-h2" id="principais-mudancas">As Principais Mudanças</h2>
            <p className="mb-6">
              A partir de 1º de outubro de 2025, entrou em vigor o SGISS, que concentra em uma única plataforma as obrigações tributárias relacionadas ao ISS em Goiânia. A mudança mais significativa é que <strong>não haverá mais emissor próprio da Prefeitura</strong> para a Nota Fiscal de Serviços Eletrônica.
            </p>
            <p className="mb-6">
              O sistema anterior, que permitia a emissão gratuita de notas diretamente pelo portal da Prefeitura, será descontinuado. A partir de outubro, os contribuintes utilizarão emissores próprios ou sistemas comerciais integrados ao padrão nacional, dando mais autonomia para empresas e prestadores de serviços escolherem a ferramenta que melhor se adapte à sua rotina.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-xl">
              <h3 className="text-red-800 font-bold text-lg flex items-center gap-2 mt-0 mb-2">
                <AlertTriangle className="w-5 h-5" />
                Atenção ao Prazo
              </h3>
              <p className="text-red-700 m-0 text-base">
                A partir de <strong>1º de dezembro de 2025</strong>, a Prefeitura de Goiânia deixará de emitir gratuitamente a Nota Fiscal de Serviços Eletrônica (NFS-e). Quem não tiver migrado para um sistema próprio ou comercial não conseguirá emitir notas fiscais.
              </p>
            </div>

            <h2 className="prose-h2" id="padrao-abrasf">O Padrão ABRASF 2.04</h2>
            <p className="mb-6">
              Goiânia adotou o modelo nacional de Nota Fiscal de Serviços Eletrônica (NFS-e), o <strong>ABRASF 2.04</strong>, desenvolvido pela Associação Brasileira das Secretarias de Finanças das Capitais. Esse padrão define a estrutura técnica e campos obrigatórios para integração entre os sistemas de emissão e os fiscos municipais.
            </p>
            <p className="mb-6">
              A mudança atende à <strong>Lei Complementar nº 214/2025</strong>, uma das normas regulamentadoras da Reforma Tributária, que impõe a padronização do sistema de emissão de notas fiscais em todo o país. Municípios que não se adequarem até 2026 poderão ser penalizados com a suspensão de repasses de transferências voluntárias da União.
            </p>

            <h2 className="prose-h2" id="o-que-e-sgiss">O que é o SGISS?</h2>
            <p className="mb-6">
              O SGISS é uma plataforma online que reúne todas as operações relacionadas ao ISS em Goiânia. Por meio dela, empresas e profissionais terão acesso a ferramentas de fiscalização e acompanhamento de suas obrigações tributárias.
            </p>
            <p className="mb-6">
              O sistema permitirá a entrega das declarações acessórias, como Declaração de Serviços Prestados (DMS), Relação de Serviços Tomados (REST), geração de guias (DUAM) e integração de informações fiscais, tornando o processo mais automatizado e centralizado.
            </p>
            <p className="mb-6">
              A Prefeitura passa a ter um papel diferente: ela deixa de ser a emissora e passa a ser a receptora e integradora das informações fiscais, dentro do padrão definido nacionalmente.
            </p>

            <h2 className="prose-h2" id="beneficios">Benefícios Esperados</h2>
            <p className="mb-6">
              Com a implantação do SGISS, a Prefeitura busca:
            </p>
            <ul className="list-none pl-0 space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>Reduzir burocracias e simplificar processos</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>Aumentar a transparência na arrecadação do ISS</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>Melhorar o combate à sonegação fiscal com cruzamento automático de dados</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>Dar mais segurança jurídica aos contribuintes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>Resolver problemas de instabilidade do sistema antigo, especialmente no fim do mês</span>
              </li>
            </ul>
            <p className="mb-6">
              A plataforma anterior apresentava instabilidades, principalmente no fim do mês, quando havia aumento no volume de acessos. O novo formato promete emissão mais ágil, estável e acessível.
            </p>

            <h2 className="prose-h2" id="periodo-teste">Período de Teste Gratuito</h2>
            <p className="mb-6">
              Os contribuintes podem utilizar o emissor gratuito "Nota Eletrônica" durante o período de adaptação, de <strong>01/10 a 30/11/2025</strong>. Esse período de 60 dias foi estabelecido para que empresas e prestadores de serviços possam se cadastrar e adaptar suas rotinas ao novo sistema.
            </p>
            <p className="mb-6">
              A empresa Nota Control Tecnologia LTDA, contratada pela Prefeitura, fornecerá o emissor grátis das notas até o final de novembro, conforme o prazo estabelecido.
            </p>

            <h2 className="prose-h2" id="apos-teste">O que Fazer Após o Período de Teste</h2>
            <p className="mb-6">
              A partir de dezembro, a Prefeitura de Goiânia deixará de emitir gratuitamente a Nota Fiscal de Serviços Eletrônica (NFS-e). Os contribuintes terão duas opções principais:
            </p>
            
            <h3 className="prose-h3">1. Adotar um Emissor de Mercado</h3>
            <p className="mb-6">
              Após o período de teste, os contribuintes devem adotar um emissor de mercado compatível com o padrão ABRASF 2.04, modelo definitivo estabelecido pela legislação municipal.
            </p>
            <p className="mb-6">
              Os contribuintes precisarão buscar soluções para emitir notas fiscais.
            </p>

            <h3 className="prose-h3">2. Utilizar Sistemas Próprios de Gestão</h3>
            <p className="mb-6">
              Empresas de médio e grande portes que já utilizam softwares de gestão fiscal próprios (ERPs) precisarão apenas garantir que seus emissores estejam adequados ao novo modelo nacional. A Prefeitura dará todo suporte às empresas que precisarem integrar seus sistemas atuais ao novo layout.
            </p>

            {/* Hook Promocional NFSRápida */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 my-10 border-2 border-green-200 relative overflow-hidden group shadow-lg">
               <div className="absolute top-0 right-0 bg-green-100 w-40 h-40 rounded-bl-full opacity-40 transition-transform group-hover:scale-110"></div>
               <div className="flex items-start gap-3 mb-4 relative z-10">
                 <div className="bg-green-600 p-2 rounded-lg">
                   <Shield className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Recomendado</span>
                 </div>
               </div>
               <h3 className="text-green-900 font-bold text-2xl mb-3 relative z-10">NFSRápida: A Alternativa Ideal para Goiânia</h3>
               <p className="text-green-800 mb-4 relative z-10 text-base leading-relaxed">
                 Sistema 100% homologado e adaptado ao novo padrão SGISS. Emita suas notas fiscais em 30 segundos, sem complicação. Mais barato que um café por mês e com suporte incluso.
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
                   <span>Funciona no celular e tablet</span>
                 </li>
                 <li className="flex items-center gap-2 text-green-800 text-sm">
                   <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                   <span>Sem fidelidade, cancele quando quiser</span>
                 </li>
               </ul>
               <Link href="https://app.nfsrapida.com.br/" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all relative z-10 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                 Começar Teste Grátis Agora
                 <ArrowRight className="w-5 h-5" />
               </Link>
            </div>

            <h2 className="prose-h2" id="nao-afetados">Quem Não é Afetado pela Mudança</h2>
            <p className="mb-6">
              A mudança não afeta os <strong>Microempreendedores Individuais (MEIs)</strong>, que já emitem suas notas fiscais por uma plataforma nacional específica. Como o MEI nunca esteve vinculado ao sistema municipal, sua rotina de emissão permanece exatamente a mesma.
            </p>

            <h2 className="prose-h2" id="como-preparar">Como as Empresas Devem se Preparar</h2>
            <p className="mb-6">
              O período de adequação exige planejamento imediato. Cada contribuinte será responsável por utilizar um sistema emissor próprio ou solução contratada. Algumas orientações importantes:
            </p>
            <ol className="space-y-4 mb-6">
              <li>
                <strong>Consulte o FAQ oficial:</strong> A Prefeitura de Goiânia disponibilizou um FAQ completo com as principais orientações sobre o funcionamento do SGISS, incluindo instruções de acesso, prazos e canais de suporte, disponível em issnetonline.com.br/goiania.
              </li>
              <li>
                <strong>Avalie suas necessidades:</strong> Empresas que já usam sistemas de gestão empresarial (ERP) poderão integrar a emissão da NFS-e diretamente em seus processos. Quem ainda não tem essa estrutura precisará buscar uma ferramenta confiável e adaptada ao novo padrão.
              </li>
              <li>
                <strong>Busque suporte:</strong> A Prefeitura oferece suporte com tutoriais, equipes de atendimento no Atende Fácil e postos de apoio junto aos profissionais da contabilidade.
              </li>
              <li>
                <strong>Prepare sua equipe:</strong> A presidente do CRCGO destaca que a adaptação exigirá esforços das empresas: "Será preciso revisar sistemas, capacitar equipes e ajustar processos internos".
              </li>
            </ol>

            <h2 className="prose-h2" id="integracao-nacional">Integração Nacional e Perspectivas</h2>
            <p className="mb-6">
              O novo modelo trará maior integração entre os sistemas da prefeitura e plataformas como a Rede Nacional para a Simplificação do Registro e da Legalização de Empresas e Negócios (Rede SIM), o Simples Nacional e a Juceg.
            </p>
            <p className="mb-6">
              Mais de 2.550 municípios já formalizaram convênio com a Receita Federal, abrangendo cerca de 70% da população. A expectativa é que o modelo unificado reduza custos, integre os fiscos e traga mais transparência ao sistema tributário brasileiro.
            </p>

            <h2 className="prose-h2" id="conclusao">Considerações Finais</h2>
            <p className="mb-6">
              A implantação do SGISS representa uma transformação importante na gestão fiscal de Goiânia. Embora a mudança traga desafios, especialmente para pequenos negócios, ela posiciona o município em conformidade com as diretrizes nacionais da Reforma Tributária e promete maior eficiência, estabilidade e segurança jurídica para todos os contribuintes.
            </p>
            <p className="mb-6">
              O período de transição gratuito até 30 de novembro de 2025 é a oportunidade para que empresas e profissionais se adaptem sem contratempos. Não deixe para última hora: busque informações, escolha seu emissor e prepare sua equipe para a nova realidade fiscal de Goiânia.
            </p>
          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
              NF
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">Equipe NFSRápida</p>
              <p className="text-slate-500 text-xs">Especialistas em documentos fiscais eletrônicos e automação para prestadores de serviço.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Sticky Bottom CTA for Mobile/Desktop */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Link 
          href="https://app.nfsrapida.com.br/" 
          className="flex items-center justify-between bg-primary text-white p-4 rounded-xl shadow-2xl shadow-green-900/20 animate-fade-in-up"
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

