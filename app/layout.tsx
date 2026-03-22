import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import GoogleTranslate from '@/components/GoogleTranslate'

export const metadata: Metadata = {
  title: 'bangbisnis — Jasa Pembuatan Website Profesional untuk Bisnis',
  description: 'bangbisnis membantu bisnis membangun kredibilitas digital melalui website profesional yang meningkatkan kepercayaan pelanggan dan memperkuat identitas brand. SEO-friendly, mobile-ready.',
  keywords: 'jasa pembuatan website profesional, website bisnis, website company profile, website UMKM, landing page, SEO, bangbisnis',
  openGraph: {
    title: 'bangbisnis — Website Profesional untuk Bisnis Anda',
    description: 'Kami merancang website yang membantu bisnis terlihat profesional, dipercaya pelanggan, dan mudah ditemukan di Google.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'bangbisnis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'bangbisnis — Website Profesional untuk Bisnis Anda',
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
              "name": "bangbisnis",
              "description": "Jasa pembuatan website profesional untuk bisnis dan UMKM Indonesia",
              "url": "https://bangbisnis.com",
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
      <body>
        {/* Safe Google Translate Initialization */}
        <GoogleTranslate />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
