import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import MotionWrapper from '@/components/MotionWrapper';

export const metadata: Metadata = {
  title: "Como Emitir Nota Fiscal de Serviço em Goiânia | Passo a Passo 2025",
  description: "Guia completo: aprenda como emitir NFS-e em Goiânia em 7 passos simples. Requisitos, certificado digital, liberação de RPS e erros comuns. Tutorial atualizado 2025 para prestadores de serviço.",
  keywords: [
    "como emitir nota fiscal serviço goiânia",
    "passo a passo emissão NFS-e Goiânia",
    "emitir NFS-e Goiânia",
    "tutorial nota fiscal serviço Goiânia",
    "guia emissão NFS-e Goiânia",
    "como fazer nota fiscal serviço Goiânia",
    "emissão nota fiscal eletrônica Goiânia",
    "requisitos emissão NFS-e Goiânia",
    "certificado digital NFS-e Goiânia",
    "liberar RPS Goiânia",
    "RPS prefeitura Goiânia",
    "sistema emissor NFS-e Goiânia",
    "erros comuns emissão nota fiscal Goiânia",
    "substituto tributário Goiânia",
    "emitir nota fiscal prestador serviço Goiânia"
  ],
  openGraph: {
    title: "Como Emitir Nota Fiscal de Serviço em Goiânia | Passo a Passo 2025",
    description: "Aprenda como emitir NFS-e em Goiânia em 7 passos. Certificado digital, liberação RPS, requisitos e erros comuns. Guia completo atualizado.",
    url: "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania",
    siteName: "NFSRápida",
    images: [
      {
        url: "/logo.jpg",
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
    title: "Como Emitir NFS-e em Goiânia | Passo a Passo 2025",
    description: "Aprenda em 7 passos: certificado digital, liberação RPS, requisitos e mais. Guia completo atualizado.",
    images: ["/logo.jpg"],
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
    canonical: "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania",
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
  HelpCircle
} from 'lucide-react';
import UiMockup from '@/components/UiMockup';
import PlansSection from '@/components/PlansSection';
import FAQSection from '@/components/FAQSection';

export default function ComoEmitirPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Emitir Nota Fiscal de Serviço em Goiânia",
    "description": "Guia completo passo a passo sobre como emitir nota fiscal de serviço eletrônica (NFS-e) em Goiânia. Inclui requisitos, certificado digital, liberação de RPS e erros comuns.",
    "image": "https://nfsrapida.com.br/logo.jpg",
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "BRL",
      "value": "19.90"
    },
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
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Obtenha um Certificado Digital A1",
        "text": "Adquira um certificado digital A1 em uma Autoridade Certificadora credenciada. O certificado é obrigatório para emissão de NFS-e em Goiânia.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Escolha um Sistema Emissor Homologado",
        "text": "Selecione um sistema emissor de NFS-e homologado pela Prefeitura de Goiânia, como o NFSRápida.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Importe seu Certificado Digital",
        "text": "Faça upload do seu certificado digital A1 no sistema emissor de forma segura.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Sincronize com a Prefeitura",
        "text": "O sistema se conecta automaticamente com a Prefeitura de Goiânia para validar seus dados.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "Libere o Lote de RPS na Prefeitura",
        "text": "Acesse o site da Prefeitura de Goiânia e libere um lote de RPS (Recibo Provisório de Serviços) para permitir a emissão via webservice.",
        "position": 5
      },
      {
        "@type": "HowToStep",
        "name": "Preencha os Dados da Nota",
        "text": "Informe os dados do tomador do serviço, descrição do serviço prestado, valor e demais informações fiscais.",
        "position": 6
      },
      {
        "@type": "HowToStep",
        "name": "Emita a NFS-e",
        "text": "Revise os dados e emita a nota fiscal. O sistema envia automaticamente por e-mail para o cliente.",
        "position": 7
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Certificado Digital A1"
      },
      {
        "@type": "HowToTool",
        "name": "Sistema Emissor Homologado"
      }
    ]
  };

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
        "name": "Como Emitir NFS-e",
        "item": "https://nfsrapida.com.br/como-emitir-nota-fiscal-servico-goiania"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto custa emitir NFS-e em Goiânia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Com o fim do emissor gratuito em 01/12/2025, você precisará de um sistema pago. No NFSRápida, os planos começam em R$ 19,90/mês para 15 notas (menos de R$ 1,33 por nota)."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso ter certificado digital para emitir NFS-e?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! O certificado digital A1 é obrigatório para emitir NFS-e em Goiânia através de sistemas externos. Ele funciona como uma assinatura digital que garante a autenticidade e validade jurídica da nota fiscal."
        }
      },
      {
        "@type": "Question",
        "name": "O que é RPS e por que preciso liberar na Prefeitura?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RPS significa Recibo Provisório de Serviços. Para emitir NFS-e através de sistemas externos, você deve liberar um lote de RPS no site da Prefeitura de Goiânia. Acesse o portal ISSNet, vá em 'Solicitação de Documentos Fiscais' e libere a quantidade desejada (recomendamos 1000 ou 3000)."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo leva para começar a emitir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Com o NFSRápida, você pode começar a emitir em menos de 2 minutos. Basta criar sua conta, importar seu certificado digital e sincronizar com a Prefeitura (processo automático)."
        }
      }
    ]
  };

  return (
    <>
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

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#passo-a-passo" 
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-[0_0_40px_-10px_rgba(16,194,12,0.5)] hover:shadow-[0_0_60px_-15px_rgba(16,194,12,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Ver Passo a Passo
                <ArrowRight className="w-5 h-5" />
              </Link>              
            </div>
          </div>
        </div>
      </section>

      {/* O QUE É NFS-E */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <MotionWrapper direction="up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">                
                O que é NFS-e?
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                A <strong>Nota Fiscal de Serviço Eletrônica (NFS-e)</strong> é um documento digital que comprova a prestação de serviços e substitui a nota fiscal em papel. Em Goiânia, a emissão de NFS-e é obrigatória para todos os prestadores de serviços cadastrados no município.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 md:p-6 rounded-r-lg">
                <p className="text-slate-700 font-medium">
                  <strong>Importante:</strong> A NFS-e é fundamental para a regularidade fiscal do seu negócio e para comprovar o faturamento da sua empresa.
                </p>
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
                Antes de começar a emitir suas notas fiscais, você precisa garantir que possui os seguintes requisitos:
              </p>
              
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
                    desc: "Software autorizado pela Prefeitura para emissão",
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

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 md:p-6">
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-yellow-900 mb-2">Mudança Importante</h4>
                    <p className="text-sm text-yellow-800 leading-relaxed">
                      A partir de <strong>01/12/2025</strong>, o emissor gratuito da Prefeitura de Goiânia será descontinuado. Você precisará de um sistema emissor pago e homologado para continuar emitindo NFS-e.
                    </p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* PASSO A PASSO */}
      <section id="passo-a-passo" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <MotionWrapper direction="up" className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-bold mb-4 md:mb-6 shadow-sm">
                <Zap className="w-6 h-4 text-blue-600" />
                Passo a Passo
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                Como Emitir sua NFS-e em <span className="text-primary">7 Passos Simples</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
                Siga este guia detalhado e comece a emitir suas notas fiscais em poucos minutos
              </p>
            </MotionWrapper>

            <div className="space-y-6 md:space-y-8">
              {[
                {
                  number: "1",
                  title: "Obtenha um Certificado Digital A1",
                  desc: "O certificado digital é obrigatório para emitir NFS-e em Goiânia através de qualquer sistema externo (como NFSRápida, ERP, etc). Ele funciona como uma identidade eletrônica da sua empresa e garante a autenticidade das notas. Você precisa adquirir um certificado A1 (arquivo digital) em uma Autoridade Certificadora credenciada. O custo médio é de R$ 150 a R$ 250 por ano.",
                  tips: [
                    "Obrigatório para sistemas externos - não é necessário apenas no sistema da própria Prefeitura",
                    "Escolha uma AC credenciada pela ICP-Brasil",
                    "O certificado A1 é mais prático que o A3 para emissão de NFS-e",
                    "Guarde o arquivo .pfx e a senha em local seguro"
                  ]
                },
                {
                  number: "2",
                  title: "Escolha um Sistema Emissor Homologado",
                  desc: "Com o fim do emissor gratuito, você precisa contratar um sistema emissor homologado pela Prefeitura de Goiânia. O NFSRápida é uma opção especializada, simples e com o melhor custo-benefício do mercado.",
                  tips: [
                    "Verifique se o sistema é homologado pela Prefeitura",
                    "Prefira sistemas com interface intuitiva",
                    "Teste grátis antes de assinar"
                  ]
                },
                {
                  number: "3",
                  title: "Importe seu Certificado Digital",
                  desc: "Após escolher o sistema, faça o upload do seu certificado digital A1. O sistema armazena de forma criptografada e segura. Você precisará informar a senha do certificado.",
                  tips: [
                    "O certificado fica armazenado de forma criptografada",
                    "Você receberá alertas antes do vencimento",
                    "Renovação é simples: basta fazer novo upload"
                  ]
                },
                {
                  number: "4",
                  title: "Sincronize com a Prefeitura de Goiânia",
                  desc: "O sistema se conecta automaticamente com a Prefeitura para validar seus dados cadastrais e configurar as alíquotas de impostos. Esse processo é automático e leva poucos segundos.",
                  tips: [
                    "A sincronização é automática",
                    "Seus dados fiscais são validados em tempo real",
                    "Não é necessário configurar manualmente"
                  ]
                },
                {
                  number: "5",
                  title: "Libere o Lote de RPS na Prefeitura",
                  desc: "Para emitir notas fiscais em sistemas externos (como o NFSRápida), é necessário liberar um lote de RPS (Recibo Provisório de Serviços) no site da Prefeitura de Goiânia. Esse é um passo obrigatório e você só precisa fazer uma vez ou quando o lote acabar.",
                  tips: [
                    "Acesse: https://www.issnetonline.com.br/goiania/",
                    "Após o login, vá em: Solicitação de Documentos Fiscais > Solicitação",
                    "Selecione: RPS - Recibos Provisórios de Serviços",
                    "Informe a quantidade: 1000 ou 3000 notas",
                    "Clique no botão verde para confirmar a solicitação"
                  ],
                  hasImage: true
                },
                {
                  number: "6",
                  title: "Preencha os Dados da Nota Fiscal",
                  desc: "Agora é hora de emitir! Preencha um formulário simples com: dados do cliente (tomador), descrição do serviço prestado, valor, data de competência e informações de retenção de impostos se houver.",
                  tips: [
                    "Salve clientes frequentes para reutilizar dados",
                    "Use a função 'Clonar Nota' para serviços recorrentes",
                    "Revise os dados antes de emitir"
                  ]
                },
                {
                  number: "7",
                  title: "Emita e Envie a NFS-e",
                  desc: "Revise todos os dados e clique em 'Emitir'. A nota é gerada instantaneamente e enviada automaticamente por e-mail para o cliente com o PDF e o arquivo XML. Pronto! Sua nota está emitida e registrada na Prefeitura.",
                  tips: [
                    "O envio por e-mail é automático",
                    "Você pode reenviar a nota quantas vezes quiser",
                    "O XML fica disponível para download"
                  ]
                }
              ].map((step, i) => (
                <MotionWrapper key={i} direction="up" delay={i * 0.1}>
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 p-6 md:p-8">
                      {/* Número */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-2xl md:text-3xl shadow-lg">
                          {step.number}
                        </div>
                      </div>
                      
                      {/* Conteúdo */}
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                        
                        {/* Dicas */}
                        <div className="bg-white rounded-lg p-4 border border-blue-100">
                          <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2 flex items-center gap-1">
                            <Star className="w-3 h-3" /> {step.hasImage ? "Passo a passo detalhado:" : "Dicas importantes:"}
                          </p>
                          <ul className="space-y-1.5">
                            {step.tips.map((tip, j) => (
                              <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                          
                          {/* Imagem colapsável */}
                          {step.hasImage && (
                            <details className="mt-4">
                              <summary className="cursor-pointer text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-2 py-2 px-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                <HelpCircle className="w-4 h-4" />
                                Ver exemplo visual (clique para expandir)
                              </summary>
                              <div className="mt-3 border-2 border-blue-200 rounded-lg overflow-hidden">
                                <img 
                                  src="/liberar_rps.png" 
                                  alt="Exemplo de como liberar RPS no site da Prefeitura de Goiânia" 
                                  className="w-full h-auto"
                                />
                              </div>
                            </details>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>

            <MotionWrapper className="text-center mt-12" direction="up" delay={0.6}>
              <div className="bg-gradient-to-br from-primary to-green-600 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Pronto para começar?
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Com o NFSRápida, você segue todos esses passos em menos de 2 minutos e começa a emitir suas notas fiscais imediatamente.
                </p>
                <Link 
                  href="https://app.nfsrapida.com.br/auth/signup/escolher-tipo" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-1"
                >
                  Começar teste grátis agora
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-sm text-blue-100 mt-4">
                  7 dias grátis • Sem cartão de crédito • Cancelamento fácil
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ERROS COMUNS */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <MotionWrapper direction="up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
                Erros Comuns ao Emitir NFS-e
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                Evite esses erros frequentes que podem causar problemas na emissão ou rejeição da nota fiscal:
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    error: "Certificado Digital Vencido",
                    solution: "Sempre verifique a validade do certificado. Renove com antecedência de 30 dias."
                  },
                  {
                    error: "Dados do Tomador Incorretos",
                    solution: "Confira CPF/CNPJ, endereço e e-mail do cliente antes de emitir."
                  },
                  {
                    error: "Código CNAE, Item LC 116/2003 ou Código Tributário não cadastrado",
                    solution: "Verifique se os códigos informados (CNAE, Item da LC 116/2003 ou Código Tributário Municipal) estão cadastrados na Prefeitura para o CNPJ do emissor. Códigos não cadastrados causarão rejeição da nota."
                  },
                  {
                    error: "Erro na Retenção de ISS - Substituto Tributário",
                    solution: "Antes de emitir, consulte se o tomador é Substituto Tributário no cadastro da Prefeitura. Se for Substituto, marque ISS retido. Se não for, não marque a retenção. Informar incorretamente causa rejeição.",
                    link: {
                      url: "https://www.goiania.go.gov.br/sistemas/sccae/asp/sccae00010r0.asp",
                      text: "Consultar cadastro na Prefeitura"
                    }
                  },
                  {
                    error: "Não Informar Retenções Corretamente",
                    solution: "Se houver retenção de impostos (IRRF, PIS, COFINS, CSLL, INSS), informe corretamente para evitar problemas fiscais."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 md:p-6 border border-red-100 hover:border-red-200 transition-all">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-1">{item.error}</h4>
                        <p className="text-sm text-slate-600 flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Solução:</strong> {item.solution}</span>
                        </p>
                        {item.link && (
                          <a 
                            href={item.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
                          >
                            {item.link.text}
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* VANTAGENS DO NFSRÁPIDA */}
      <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <MotionWrapper direction="up" className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Por que usar o <span className="text-primary">NFSRápida</span>?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                Criamos o sistema mais simples e eficiente para emissão de NFS-e em Goiânia
              </p>
            </MotionWrapper>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  icon: Zap,
                  title: "Emissão em 30 segundos",
                  desc: "Interface intuitiva que permite emitir notas em poucos cliques. Nada de formulários complicados."
                },
                {
                  icon: Shield,
                  title: "100% Homologado",
                  desc: "Sistema aprovado e integrado com a Prefeitura de Goiânia. Total conformidade fiscal."
                },
                {
                  icon: Clock,
                  title: "Função Clonar Nota",
                  desc: "Emita notas recorrentes em 2 cliques. Copie dados de notas anteriores automaticamente."
                },
                {
                  icon: FileText,
                  title: "Envio Automático",
                  desc: "Cliente recebe a nota por e-mail automaticamente. PDF e XML enviados na hora."
                },
                {
                  icon: CheckCircle,
                  title: "Funciona no Celular",
                  desc: "Emita de qualquer lugar pelo smartphone. Não precisa instalar nada."
                },
                {
                  icon: Star,
                  title: "Suporte Especializado",
                  desc: "Equipe pronta para ajudar via WhatsApp durante todo o horário comercial."
                }
              ].map((item, i) => (
                <MotionWrapper key={i} direction="up" delay={i * 0.1}>
                  <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-primary/50 transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                      <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                    <p className="text-sm md:text-base text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <PlansSection />

      {/* FAQ */}
      <FAQSection 
        faqs={[
          {
            question: "Quanto custa emitir NFS-e em Goiânia?",
            answer: "Com o fim do emissor gratuito em 01/12/2025, você precisará de um sistema pago. No NFSRápida, os planos começam em R$ 19,90/mês para 15 notas (menos de R$ 1,33 por nota). Muito mais barato que sistemas que cobram de R$ 0,50 a R$ 40,00 por nota emitida."
          },
           {
             question: "Preciso ter certificado digital para emitir NFS-e?",
             answer: "Sim! O certificado digital A1 é obrigatório para emitir NFS-e em Goiânia através de qualquer sistema externo (como NFSRápida, ERP, etc). Sistema externo é qualquer site que não seja o da própria Prefeitura. Ele funciona como uma assinatura digital que garante a autenticidade e validade jurídica da nota fiscal. Você pode adquirir em qualquer Autoridade Certificadora credenciada."
           },
          {
            question: "O que é RPS e por que preciso liberar na Prefeitura?",
            answer: "RPS significa Recibo Provisório de Serviços. Como a emissão de NFS-e via webservice (sistemas como o NFSRápida) precisa de autorização prévia, você deve liberar um lote de RPS no site da Prefeitura. É um processo simples: acesse o portal ISSNet, vá em 'Solicitação de Documentos Fiscais', escolha 'RPS - Recibos Provisórios de Serviços' e informe a quantidade desejada (recomendamos 1000 ou 3000). Você só precisa fazer isso uma vez ou quando o lote estiver acabando."
          },
          {
            question: "Quanto tempo leva para começar a emitir?",
            answer: "Com o NFSRápida, você pode começar a emitir em menos de 2 minutos! Basta: 1) Criar sua conta, 2) Importar seu certificado digital, 3) Sincronizar com a Prefeitura (automático). Pronto! Já pode emitir sua primeira nota."
          },
          {
            question: "Posso emitir nota para cliente de outra cidade?",
            answer: "Sim! Você pode emitir NFS-e para clientes de qualquer cidade do Brasil ou até do exterior. O que importa é que sua empresa (prestadora) esteja cadastrada em Goiânia. O tomador do serviço pode ser de qualquer lugar."
          },
          {
            question: "O que acontece se eu errar ao emitir uma nota?",
            answer: "Se você identificar o erro antes de transmitir, basta corrigir os dados. Se a nota já foi emitida, você precisará cancelá-la (dentro do prazo legal) e emitir uma nova nota correta. O NFSRápida facilita esse processo."
          },
          {
            question: "Como funciona a função de clonar nota?",
            answer: "A função 'Clonar Nota' permite copiar todos os dados de uma nota já emitida para criar uma nova em segundos. É perfeita para serviços recorrentes - você clona a nota anterior, ajusta apenas a data se necessário, e emite. Economia de tempo garantida!"
          },
          {
            question: "Posso emitir NFS-e pelo celular?",
            answer: "Sim! O NFSRápida é totalmente responsivo e funciona perfeitamente em smartphones e tablets. Você pode emitir suas notas de qualquer lugar, sem precisar instalar nenhum aplicativo. Basta acessar pelo navegador."
          },
          {
            question: "O que é o código de serviço e como escolher?",
            answer: "O código de serviço identifica o tipo de atividade prestada e determina a alíquota do ISS. O NFSRápida já traz a lista completa de códigos de serviços de Goiânia. Você seleciona o que corresponde ao seu serviço e o sistema aplica automaticamente a alíquota correta."
          },
          {
            question: "Como saber se o tomador é Substituto Tributário?",
            answer: "Antes de emitir a nota, você deve consultar o cadastro do tomador no site da Prefeitura de Goiânia. Informe o CNPJ do tomador e verifique se ele consta como Substituto Tributário. Se for, você deve marcar ISS retido na nota. Se não for, não deve marcar. Informar incorretamente causa rejeição da nota fiscal.",
            link: {
              url: "https://www.goiania.go.gov.br/sistemas/sccae/asp/sccae00010r0.asp",
              text: "Acessar consulta da Prefeitura"
            }
          },
          {
            question: "Preciso guardar as notas emitidas?",
            answer: "Sim! É obrigatório guardar as notas fiscais por 5 anos. No NFSRápida, todas as suas notas ficam armazenadas na nuvem e você pode acessá-las a qualquer momento. Pode também exportar relatórios e fazer backup dos XMLs."
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

