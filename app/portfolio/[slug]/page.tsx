import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FinalCTASection from '@/components/FinalCTASection'
import ScrollReveal from '@/components/ScrollReveal'
import { getPortfolioBySlug } from '@/data/portfolio'

export default function PortfolioDetail({ params }: { params: { slug: string } }) {
  const portfolio = getPortfolioBySlug(params.slug)
  
  if (!portfolio) {
    notFound()
  }

  return (
    <>
      {/* We need the Navbar, but from here, links like #home might not redirect properly if they are just hash links. For now assuming Navbar links use basic routing, or the user can use the back button below. */}
      <Navbar />
      <main className="pt-24 md:pt-32 pb-0">
        
        {/* Hero Header */}
        <section className="section-container mb-16 md:mb-24">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="mb-8">
                <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-blue-primary transition-colors group">
                  <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Kembali ke Beranda
                </a>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-ink-100 text-ink-700 tracking-wider uppercase">
                  Case Study
                </span>
                <span className="text-sm font-medium text-ink-500">{portfolio.year}</span>
              </div>
            </ScrollReveal>
            
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-ink-900 leading-[1.1] mb-6 tracking-tight">
              <ScrollReveal as="span" delay={100}>{portfolio.title}</ScrollReveal>
            </h1>
            
            <ScrollReveal delay={200}>
              <p className="text-xl text-ink-600 leading-relaxed max-w-3xl">
                {portfolio.summary}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Hero Image / Mockup Area */}
        <section className="section-container mb-20 md:mb-32">
          <ScrollReveal delay={300}>
            <div className={`w-full aspect-[16/9] md:aspect-[21/9] ${portfolio.color} rounded-3xl overflow-hidden relative flex items-center justify-center p-8 md:p-16`}>
              <div className="w-full max-w-5xl h-full bg-white rounded-t-2xl shadow-2xl border border-ink-100 flex flex-col overflow-hidden transform translate-y-8 md:translate-y-16">
                 {/* Fake browser header */}
                 <div className="h-10 bg-ink-100 border-b border-ink-200 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="mx-auto w-1/2 max-w-sm h-5 bg-white rounded flex items-center px-3 justify-center text-[10px] text-ink-400 font-mono">
                      {portfolio.websiteUrl.replace('https://', '')}
                    </div>
                 </div>
                 {/* Live Website Iframe */}
                 <div className="flex-1 bg-surface relative overflow-hidden">
                    <iframe 
                      src={portfolio.websiteUrl} 
                      className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                      title={`Preview of ${portfolio.client} website`}
                      sandbox="allow-scripts allow-same-origin"
                    />
                 </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Main Content Grid */}
        <section className="section-container mb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Sidebar: Metadata */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <div className="bg-surface border border-ink-100 rounded-2xl p-8 sticky top-32">
                  <h3 className="font-display font-bold text-xl mb-6 text-ink-900 border-b border-ink-100 pb-4">Project Overview</h3>
                  
                  <dl className="space-y-6">
                    <div>
                      <dt className="text-sm text-ink-500 mb-1">Klien</dt>
                      <dd className="font-semibold text-ink-900">{portfolio.client}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-ink-500 mb-1">Industri</dt>
                      <dd className="font-semibold text-ink-900">{portfolio.industry}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-ink-500 mb-1">Layanan</dt>
                      <dd className="font-semibold text-ink-900">Custom Website Development, UI/UX Design</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-ink-500 mb-1">Live URL</dt>
                      <dd>
                        <a href={portfolio.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-primary font-semibold hover:underline break-all">
                          {portfolio.websiteUrl}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Content: Details */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-ink-600 prose-ul:text-ink-600">
                
                <ScrollReveal delay={100}>
                  <h2 className="text-3xl text-ink-900 mb-4 mt-0">Tantangan Klien</h2>
                  <p className="leading-relaxed mb-12">
                    {portfolio.challenge}
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <h2 className="text-3xl text-ink-900 mb-4">Solusi Credentia Studio</h2>
                  <ul className="space-y-4 mb-12 list-none pl-0">
                    {portfolio.solution.map((item, idx) => (
                      <li key={idx} className="flex gap-4 items-start">
                         <div className="w-6 h-6 rounded-full bg-blue-light/30 text-blue-primary flex items-center justify-center flex-shrink-0 mt-1 pb-0.5">
                            <span className="text-sm font-bold">✓</span>
                         </div>
                         <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>

              </div>
              
              {/* Results Data Grid */}
              <ScrollReveal delay={300}>
                <div className="mt-16 border-t border-ink-100 pt-12">
                  <h3 className="font-display font-bold text-2xl text-ink-900 mb-8">Hasil & Dampak</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {portfolio.results.map((res, idx) => (
                      <div key={idx} className="bg-ink-900 rounded-2xl p-6 text-white border border-ink-800">
                        <p className="text-ink-400 text-sm mb-2">{res.label}</p>
                        <p className="font-display font-bold text-4xl">{res.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Testimonial Quote */}
              {portfolio.testimonial && (
                <ScrollReveal delay={400}>
                  <div className="mt-16 bg-surface p-10 md:p-12 rounded-3xl border border-ink-100 relative">
                    <svg className="w-12 h-12 text-ink-200 absolute top-8 left-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="relative z-10 text-xl md:text-2xl text-ink-900 font-medium leading-relaxed mb-6 pt-4 px-4 md:px-8">
                      "{portfolio.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4 px-4 md:px-8">
                       <div className="w-12 h-12 bg-ink-200 rounded-full" />
                       <div>
                         <p className="font-bold text-ink-900">{portfolio.testimonial.author}</p>
                         <p className="text-sm text-ink-500">{portfolio.testimonial.role}</p>
                       </div>
                    </div>
                  </div>
                </ScrollReveal>
              )}

            </div>
          </div>
        </section>

        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
