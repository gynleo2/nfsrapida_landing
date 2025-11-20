import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nfsrapida.com.br'),
  title: "NFSRápida - Emissão de Nota Fiscal de Serviço em Goiânia | NFS-e Online",
  description: "Sistema homologado para emissão de nota fiscal de serviço eletrônica (NFS-e) em Goiânia. Emita NFS-e rápido e fácil. Teste grátis por 7 dias. Ideal para prestadores de serviço e contabilidades.",
  keywords: [
    "emissão nota fiscal serviço goiânia",
    "NFS-e Goiânia",
    "NFS-e Goiânia",
    "emissor nota fiscal serviço goiânia",
    "nota fiscal serviço eletrônica goiânia",
    "sistema emissão NFS-e Goiânia",
    "emissão nota fiscal prestador serviço goiânia",
    "NFS-e online Goiânia",
    "emissor NFS-e Goiânia",
    "nota fiscal serviço Goiânia"
  ],
  authors: [{ name: "NFSRápida" }],
  creator: "NFSRápida",
  publisher: "NFSRápida",
  themeColor: '#16a34a',
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nfsrapida.com.br",
    siteName: "NFSRápida",
    title: "NFSRápida - Emissão de Nota Fiscal de Serviço em Goiânia",
    description: "Sistema homologado para emissão de nota fiscal de serviço eletrônica (NFS-e) em Goiânia. Emita NFS-e rápido e fácil. Teste grátis por 7 dias.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "NFSRápida - Emissão de NFS-e em Goiânia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NFSRápida - Emissão de Nota Fiscal de Serviço em Goiânia",
    description: "Sistema homologado para emissão de NFS-e em Goiânia. Teste grátis por 7 dias.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "https://nfsrapida.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NFSRápida",
    "legalName": "Direct Consultoria Comercial",
    "url": "https://nfsrapida.com.br",
    "logo": "https://nfsrapida.com.br/logo.jpg",
    "description": "Sistema homologado para emissão de NFS-e (Nota Fiscal de Serviço Eletrônica) em Goiânia",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Goiânia",
      "addressRegion": "GO",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-62-98218-1715",
      "contactType": "customer service",
      "availableLanguage": "Portuguese",
      "areaServed": "BR"
    },
    "sameAs": [
      "https://app.nfsrapida.com.br"
    ],
    "taxID": "31.437.761/0001-39"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NFSRápida",
    "image": "https://nfsrapida.com.br/logo.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Goiânia",
      "addressRegion": "GO",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-16.6869",
      "longitude": "-49.2648"
    },
    "url": "https://nfsrapida.com.br",
    "telephone": "+55-62-98218-1715",
    "priceRange": "R$ 19,90 - R$ 990,90",
    "openingHours": "Mo-Su 00:00-23:59",
    "paymentAccepted": "Credit Card, Debit Card, Bank Transfer, PIX",
    "currenciesAccepted": "BRL"
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}

