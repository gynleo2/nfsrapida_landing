import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { Calendar, ArrowRight, User } from 'lucide-react';
import MotionWrapper from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: "Blog NFSRápida | Notícias e Dicas sobre NFS-e em Goiânia",
  description: "Fique por dentro das novidades sobre emissão de Nota Fiscal de Serviço em Goiânia, mudanças na legislação e dicas para contadores e prestadores.",
  keywords: [
    "blog nfs-e",
    "notícias nota fiscal goiânia",
    "legislação iss goiânia",
    "sgiss goiânia",
    "reforma tributária",
    "abrasf 2.04",
    "emissão nfs-e",
    "dicas contabilidade",
  ],
  alternates: {
    canonical: "https://nfsrapida.com.br/blog/",
  },
  openGraph: {
    title: "Blog NFSRápida | Notícias e Dicas sobre NFS-e em Goiânia",
    description: "Fique por dentro das novidades sobre emissão de Nota Fiscal de Serviço em Goiânia, mudanças na legislação e dicas para contadores e prestadores.",
    url: "https://nfsrapida.com.br/blog/",
    siteName: "NFSRápida",
    images: [
      {
        url: "https://nfsrapida.com.br/nfsrapida.png",
        width: 1200,
        height: 630,
        alt: "Blog NFSRápida - NFS-e em Goiânia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog NFSRápida | Notícias e Dicas sobre NFS-e em Goiânia",
    description: "Fique por dentro das novidades sobre emissão de Nota Fiscal de Serviço em Goiânia.",
    images: ["https://nfsrapida.com.br/nfsrapida.png"],
  },
};

export default function BlogIndex() {
  const posts = [
    {
      slug: 'nfs-e-nacional-locacoes-2026',
      title: 'NFS-e Nacional Obrigatória em 2026: Aluguéis e Cessão de Direitos',
      excerpt: 'NFS-e Nacional será obrigatória a partir de 01/01/2026 incluindo locação de imóveis, bens móveis e cessão de direitos. Nota Técnica 005/2025, IBS, CBS, MEI, pessoas físicas. Guia completo sobre a Reforma Tributária e como se preparar.',
      date: '22 Nov 2025',
      dateISO: '2025-11-22T10:00:00-03:00',
      readTime: '12 min leitura',
      author: 'Equipe NFSRápida',
      category: 'Reforma Tributária'
    },
    {
      slug: 'guia-completo-sgiss-goiania',
      title: 'SGISS Goiânia: Guia Completo do Novo Sistema de Gestão de ISS',
      excerpt: 'Guia completo sobre o SGISS: como acessar, emitir NFS-e, declarar serviços (DMS e REST), gerar guias (DUAM) e cumprir todas as obrigações tributárias no novo sistema.',
      date: '21 Nov 2025',
      dateISO: '2025-11-21',
      readTime: '15 min leitura',
      author: 'Equipe NFSRápida',
      category: 'Guias'
    },
    {
      slug: 'novo-padrao-emissao-nfs-goiania',
      title: 'Novo Padrão de Emissão de Nota Fiscal de Serviços em Goiânia: O que Você Precisa Saber',
      excerpt: 'A Prefeitura de Goiânia regulamentou o novo Sistema de Gestão do ISS (SGISS). Entenda o que muda para prestadores de serviço e como se adequar ao fim do emissor gratuito.',
      date: '21 Nov 2025',
      dateISO: '2025-11-21',
      readTime: '8 min leitura',
      author: 'Equipe NFSRápida',
      category: 'Legislação'
    }
  ];

  // Schema.org JSON-LD para Blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog NFSRápida",
    "description": "Notícias, atualizações e dicas sobre emissão de notas fiscais e contabilidade em Goiânia",
    "url": "https://nfsrapida.com.br/blog",
    "publisher": {
      "@type": "Organization",
      "name": "NFSRápida",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nfsrapida.com.br/logo.png"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://nfsrapida.com.br/blog/${post.slug}`,
      "datePublished": post.dateISO,
      "dateModified": post.dateISO,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "NFSRápida",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nfsrapida.com.br/logo.png"
        }
      },
      "articleSection": post.category,
      "image": "https://nfsrapida.com.br/nfsrapida.png"
    }))
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
      }
    ]
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-32 pb-28 relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <div className="absolute top-[-15%] right-[10%] w-[500px] h-[500px] bg-primary/40 rounded-full blur-[120px] animate-pulse"></div>
           <div className="absolute bottom-[-15%] left-[5%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]"></div>
           <div className="absolute top-[30%] left-[50%] w-[350px] h-[350px] bg-green-500/25 rounded-full blur-[100px]"></div>
           <div className="absolute top-[50%] right-[20%] w-[250px] h-[250px] bg-yellow-400/20 rounded-full blur-[90px]"></div>
           {/* Grid Pattern Overlay */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <MotionWrapper direction="up">
            <div className="mb-8">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white border border-white/30 text-sm font-bold px-5 py-2 rounded-full uppercase tracking-wider">
                📰 Blog
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-primary bg-clip-text text-transparent drop-shadow-2xl">
                NFS
              </span>
              <span className="bg-gradient-to-r from-primary via-green-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-2xl">
                Rápida
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Notícias, atualizações e dicas sobre emissão de notas fiscais e contabilidade em Goiânia
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <MotionWrapper key={post.slug} direction="up" delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="h-full bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
                    {/* Category & Date */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-flex items-center bg-gradient-to-r from-primary to-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                        {post.category}
                      </span>
                      <div className="flex items-center text-slate-400 text-sm gap-2">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.dateISO}>{post.date}</time>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-base leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-slate-400">{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mt-6 group-hover:gap-3 transition-all duration-300">
                      <span>Ler artigo completo</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </article>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-green-600 to-emerald-600 relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
           <MotionWrapper direction="up">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 md:p-16 border border-white/50">
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-primary to-green-600 text-white text-sm font-bold px-5 py-2 rounded-full uppercase tracking-wider shadow-lg">
                    ⚡ Comece Agora
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                    Simplifique sua emissão de notas{' '}
                  </span>
                  <span className="bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent drop-shadow-sm">
                    hoje mesmo
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Não perca tempo com sistemas complicados. Comece a emitir suas notas fiscais de forma rápida e descomplicada.
                </p>
                <Link 
                  href="https://app.nfsrapida.com.br/" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:from-slate-800 hover:to-slate-900"
                >
                  Começar Teste Grátis
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <p className="text-sm text-slate-600 mt-6 font-medium">
                  ✓ Sem cartão de crédito &nbsp;•&nbsp; ✓ Cancele quando quiser &nbsp;•&nbsp; ✓ Suporte especializado
                </p>
              </div>
           </MotionWrapper>
        </div>
      </section>
      </div>
    </>
  );
}

