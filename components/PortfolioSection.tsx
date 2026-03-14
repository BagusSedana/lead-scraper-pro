import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

const portfolioItems = [
  {
    title: 'Cipta Bersama',
    industry: 'Supplier B2B',
    desc: 'Website company profile distributor daging premium dengan katalog dan sistem inquiry WhatsApp.',
    color: 'bg-red-100',
    href: '/portfolio/cipta-bersama',
    websiteUrl: 'https://cipta-bersama.vercel.app/'
  },
  {
    title: 'TravelJimb',
    industry: 'Travel & Pariwisata',
    desc: 'Landing page ultra-minimalis untuk biro perjalanan dengan fokus pada tingginya konversi reservasi.',
    color: 'bg-blue-100',
    href: '/portfolio/traveljimb',
    websiteUrl: 'https://traveljimb.vercel.app/'
  },
  {
    title: 'Klinik Sehat Bersama',
    industry: 'Kesehatan',
    desc: 'Website klinik kecantikan profesional dengan halaman layanan, dokter, dan booking online.',
    color: 'bg-teal-100',
    href: '#'
  },
  {
    title: 'Kursus Bahasa Inggris Bali',
    industry: 'Pendidikan',
    desc: 'Landing page kursus online dengan sistem pendaftaran dan testimoni siswa.',
    color: 'bg-yellow-100',
    href: '#'
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="section-container">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <ScrollReveal><p className="section-label">Karya Kami</p></ScrollReveal>
            <h2 className="section-title">
              <ScrollReveal delay={100} as="span">Portfolio Website Terpilih</ScrollReveal>
            </h2>
          </div>
          <ScrollReveal delay={200}>
            <a
              href="https://wa.me/6287701785344?text=Halo%2C%20saya%20ingin%20melihat%20portfolio%20Credentia%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Lihat Semua Portfolio
            </a>
          </ScrollReveal>
        </div>

        {/* Editorial visual grid: large images, text below */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {portfolioItems.map((item, i) => (
            <ScrollReveal key={i} delay={300 + i * 150} className="group">
              <Link href={item.href} className="block cursor-pointer">
                {/* Image block */}
                <div className={`relative w-full aspect-[4/3] ${item.color} rounded-2xl overflow-hidden mb-6 p-8 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-${item.color.split('-')[1]}-500/20`}>
                  <div className="w-full h-full bg-white rounded-xl shadow-xl border border-ink-100 flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                    {/* Fake header */}
                    <div className="h-8 bg-ink-100 border-b border-ink-200 flex items-center px-4 gap-1.5 mix-blend-multiply">
                      <div className="w-2 h-2 rounded-full bg-ink-300" />
                      <div className="w-2 h-2 rounded-full bg-ink-300" />
                      <div className="w-2 h-2 rounded-full bg-ink-300" />
                    </div>
                    {/* Fake body or Iframe */}
                    <div className="flex-1 relative overflow-hidden bg-surface">
                      {item.websiteUrl ? (
                         <iframe 
                           src={item.websiteUrl} 
                           className="absolute inset-0 w-[200%] h-[200%] border-0 pointer-events-none origin-top-left"
                           style={{ transform: 'scale(0.5)' }}
                           title={`Preview of ${item.title}`}
                           sandbox="allow-scripts allow-same-origin"
                         />
                      ) : (
                        <div className="p-4 w-full h-full opacity-20 bg-grid-slate-200">
                          <div className="h-4 bg-ink-400 rounded w-1/3 mb-4" />
                          <div className="h-3 bg-ink-300 rounded w-full mb-2" />
                          <div className="h-3 bg-ink-300 rounded w-5/6" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Text block */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-bold text-2xl text-ink-900 group-hover:text-blue-primary transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface border border-ink-200 text-ink-600">
                        {item.industry}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-ink-100 flex items-center justify-center text-ink-400 group-hover:bg-blue-primary group-hover:text-white transition-all -rotate-45 group-hover:rotate-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-ink-600 text-base leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  )
}
