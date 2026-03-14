import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FinalCTASection from '@/components/FinalCTASection'
import ScrollReveal from '@/components/ScrollReveal'
import { getServiceBySlug } from '@/data/services'

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-0 bg-surface">
        
        {/* Breadcrumb & Intro */}
        <section className="section-container mb-16 md:mb-24">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="mb-8">
                <a href="/#services" className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-blue-primary transition-colors group">
                  <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Kembali ke Layanan
                </a>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 tracking-wider uppercase">
                  Layanan Kami
                </span>
                <span className="text-sm font-medium text-ink-500">{service.category}</span>
              </div>
            </ScrollReveal>
            
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-ink-900 leading-[1.15] mb-6 tracking-tight">
              <ScrollReveal as="span" delay={100}>{service.heroHeadline}</ScrollReveal>
            </h1>
            
            <ScrollReveal delay={200}>
              <p className="text-xl text-ink-600 leading-relaxed max-w-3xl">
                {service.heroDesc}
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={300} className="mt-10">
              <a
                href={`https://wa.me/6287701785344?text=Halo%20Credentia%20Studio%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20layanan%20${service.title}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Konsultasi Gratis Sekarang
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Diagonal Separator */}
        <div className="w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }} />

        <div className="bg-white">
          <section className="section-container py-20">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
              
              {/* Left Column: Why Important & Content */}
              <div className="lg:col-span-8">
                
                {/* Why Important */}
                <ScrollReveal>
                  <div className="mb-16">
                    <h2 className="font-display font-bold text-3xl text-ink-900 mb-8 flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-blue-100 text-blue-primary flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Mengapa Ini Penting?
                    </h2>
                    <ul className="space-y-6">
                      {service.whyImportant.map((point, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                           <div className="w-6 h-6 rounded-full bg-blue-primary text-white flex items-center justify-center flex-shrink-0 mt-0.5 pb-0.5">
                              <span className="text-sm font-bold">✓</span>
                           </div>
                           <p className="text-ink-700 leading-relaxed text-lg">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Features */}
                <ScrollReveal delay={200}>
                  <div className="mb-16">
                    <h2 className="font-display font-bold text-3xl text-ink-900 mb-8 flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-teal-100 text-teal-600 flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Apa yang Anda Dapatkan
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-8">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="bg-surface p-6 rounded-2xl border border-ink-100">
                          <h4 className="font-display font-bold text-lg text-ink-900 mb-3">{feat.title}</h4>
                          <p className="text-ink-600 leading-relaxed text-sm">{feat.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
                
              </div>

              {/* Right Sidebar: FAQ */}
              <div className="lg:col-span-4">
                <ScrollReveal delay={300}>
                  <div className="bg-ink-900 text-white rounded-3xl p-8 sticky top-32">
                    <h3 className="font-display font-bold text-2xl mb-8 border-b border-ink-800 pb-4">Tanya Jawab</h3>
                    <div className="space-y-8">
                      {service.faq.map((f, i) => (
                        <div key={i}>
                          <h4 className="font-bold text-white mb-2 text-lg leading-snug">Q: {f.q}</h4>
                          <p className="text-ink-400 text-sm leading-relaxed">A: {f.a}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-12 pt-8 border-t border-ink-800">
                      <p className="text-ink-400 text-sm mb-4">Masih punya pertanyaan lain?</p>
                      <a
                        href={`https://wa.me/6287701785344?text=Halo%20Credentia%20Studio%2C%20saya%20punya%20pertanyaan%20mengenai%20${service.title}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-ink-900 font-bold px-6 py-3 rounded-full hover:bg-ink-100 transition-colors w-full text-center text-sm"
                      >
                        Chat via WhatsApp
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </section>
        </div>

        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
