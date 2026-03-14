import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    title: 'Website Company Profile',
    slug: 'website-company-profile',
    desc: 'Website profesional untuk memperkenalkan bisnis dan meningkatkan kredibilitas brand Anda di mata pelanggan.',
    highlight: false,
  },
  {
    title: 'Website UMKM & Bisnis Lokal',
    slug: 'website-umkm',
    desc: 'Website sederhana namun profesional untuk membantu bisnis lokal tampil lebih dipercaya pelanggan.',
    highlight: true,
  },
  {
    title: 'Website Landing Page',
    slug: 'website-landing-page',
    desc: 'Website khusus untuk promosi produk atau campaign marketing agar konversi pelanggan meningkat.',
    highlight: false,
  },
  {
    title: 'Optimasi SEO Dasar',
    slug: 'optimasi-seo',
    desc: 'Struktur website yang dirancang agar mudah ditemukan di mesin pencari dan mendatangkan pelanggan organik.',
    highlight: true,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-surface border-t border-ink-100">
      <div className="section-container">
        
        <div className="mb-16">
          <ScrollReveal><p className="section-label">Layanan Kami</p></ScrollReveal>
          <h2 className="section-title max-w-2xl">
            <ScrollReveal delay={100} as="span">Solusi Website Profesional</ScrollReveal>
            <br />
            <ScrollReveal delay={200} as="span"><span className="text-ink-400">untuk Bisnis Anda</span></ScrollReveal>
          </h2>
        </div>

        {/* Services Grid matching Altuz Lab style (mixed white and blue cards) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <ScrollReveal
              key={i}
              delay={300 + i * 150}
              className={`group p-10 rounded-2xl flex flex-col items-start transition-all duration-300 ${
                s.highlight
                  ? 'bg-blue-primary text-white shadow-xl shadow-blue-primary/20 hover:-translate-y-1'
                  : 'bg-white border border-ink-100 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-16 ${
                  s.highlight ? 'bg-white text-blue-primary' : 'bg-ink-900 text-white'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              <div className="mt-auto">
                <h3 className={`font-display font-bold text-2xl mb-4 tracking-tight ${
                  s.highlight ? 'text-white' : 'text-ink-900'
                }`}>
                  {s.title}
                </h3>
                <p className={`text-base leading-relaxed mb-8 max-w-sm ${
                  s.highlight ? 'text-white/80' : 'text-ink-600'
                }`}>
                  {s.desc}
                </p>
                <Link
                  href={`/layanan/${s.slug}`}
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${
                    s.highlight ? 'text-white' : 'text-blue-primary'
                  }`}
                >
                  Pelajari Lebih Lanjut
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M17 7H7M17 7v10" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
