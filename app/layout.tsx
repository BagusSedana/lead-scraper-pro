import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Credentia Studio — Jasa Pembuatan Website Profesional untuk Bisnis',
  description: 'Credentia Studio membantu bisnis membangun kredibilitas digital melalui website profesional yang meningkatkan kepercayaan pelanggan dan memperkuat identitas brand. SEO-friendly, mobile-ready.',
  keywords: 'jasa pembuatan website profesional, website bisnis, website company profile, website UMKM, landing page, SEO, Credentia Studio',
  openGraph: {
    title: 'Credentia Studio — Website Profesional untuk Bisnis Anda',
    description: 'Kami merancang website yang membantu bisnis terlihat profesional, dipercaya pelanggan, dan mudah ditemukan di Google.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Credentia Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credentia Studio — Website Profesional untuk Bisnis Anda',
    description: 'Jasa pembuatan website profesional untuk UMKM dan bisnis lokal Indonesia.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Credentia Studio",
              "description": "Jasa pembuatan website profesional untuk bisnis dan UMKM Indonesia",
              "url": "https://credentiastudio.com",
              "telephone": "+62",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID"
              },
              "sameAs": [],
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "IDR",
                "lowPrice": "2990000",
                "highPrice": "8990000"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
