import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: '#16a34a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nfsrapida.com.br'),
  title: "NFSRápida - Emissão de Nota Fiscal de Serviço em Goiânia | NFS-e Online",
  description: "Sistema homologado para emissão de nota fiscal de serviço eletrônica (NFS-e) em Goiânia. Emita NFS-e rápido e fácil. Teste grátis por 7 dias. Ideal para prestadores de serviço e contabilidades.",
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/favicon/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/favicon/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/favicon/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/favicon/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/favicon/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicon/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicon/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicon/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
  },
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
    url: "https://nfsrapida.com.br/",
    siteName: "NFSRápida",
    title: "NFSRápida - Emissão de Nota Fiscal de Serviço em Goiânia",
    description: "Sistema homologado para emissão de nota fiscal de serviço eletrônica (NFS-e) em Goiânia. Emita NFS-e rápido e fácil. Teste grátis por 7 dias.",
    images: [
      {
        url: "/nfsrapida.png",
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
    images: ["/nfsrapida.png"],
  },
  alternates: {
    canonical: "https://nfsrapida.com.br/",
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
    "logo": "https://nfsrapida.com.br/logo.png",
    "description": "Sistema homologado para emissão de NFS-e (Nota Fiscal de Serviço Eletrônica) em Goiânia",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Eng. Atílio Correia Lima, Qd. 83 Lt. 8",
      "addressLocality": "Goiânia",
      "addressRegion": "GO",
      "postalCode": "74425-030",
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
    "image": "https://nfsrapida.com.br/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Eng. Atílio Correia Lima, Qd. 83 Lt. 8",
      "addressLocality": "Goiânia",
      "addressRegion": "GO",
      "postalCode": "74425-030",
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
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        
        {/* Android/Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.webmanifest" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-22HLWF9D89"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-22HLWF9D89');
            `,
          }}
        />
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

