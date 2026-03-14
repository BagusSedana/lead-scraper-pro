import ScrollReveal from './ScrollReveal'

const problems = [
  {
    num: '01',
    title: 'Hanya Andalkan Medsos',
    desc: 'Bisnis hanya mengandalkan Instagram atau WhatsApp, tanpa kehadiran digital yang lebih profesional.',
  },
  {
    num: '02',
    title: 'Sulit Ditemukan di Google',
    desc: 'Pelanggan tidak bisa menemukan bisnis Anda di mesin pencari, sehingga kehilangan banyak potensi pelanggan baru.',
  },
  {
    num: '03',
    title: 'Tampilan Kurang Profesional',
    desc: 'Tanpa website yang baik, bisnis Anda terlihat kurang kredibel dibanding kompetitor yang sudah online.',
  },
  {
    num: '04',
    title: 'Informasi Tidak Terpusat',
    desc: 'Informasi produk, layanan, dan kontak tersebar di berbagai platform, membuat pelanggan bingung dan kehilangan kepercayaan.',
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-surface">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left: Sticky Headline */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <ScrollReveal><p className="section-label">Masalah Umum</p></ScrollReveal>
              <h2 className="section-title mb-6">
                <ScrollReveal as="span" delay={100}>Mengapa Banyak Bisnis</ScrollReveal><br />
                <ScrollReveal as="span" delay={200}><span className="text-blue-primary">Kurang Dipercaya</span></ScrollReveal><br />
                <ScrollReveal as="span" delay={300}>di Internet?</ScrollReveal>
              </h2>
              <ScrollReveal delay={400}>
                <p className="text-ink-600 text-lg leading-relaxed max-w-md mb-8">
                  Banyak bisnis memiliki produk atau layanan yang bagus, tetapi sulit mendapatkan kepercayaan pelanggan karena kehadiran digital yang kurang profesional.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={500} className="hidden lg:block p-6 bg-ink-900 rounded-2xl">
                <p className="text-white text-base">
                  Website profesional dapat menjadi fondasi kredibilitas bisnis Anda di dunia digital.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Right: Problem List (Editorial style) */}
          <div className="lg:col-span-7 lg:pl-12 space-y-0">
            {problems.map((p, i) => (
              <ScrollReveal delay={i * 100} key={i}>
                <div 
                  className={`card-editorial flex gap-6 sm:gap-8 group ${i === 0 ? 'border-t-0 pt-0' : ''}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border border-ink-200 flex items-center justify-center text-ink-400 font-display font-bold group-hover:border-blue-primary group-hover:text-blue-primary group-hover:bg-blue-light transition-colors">
                      {p.num}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-2xl text-ink-900 mb-3 group-hover:text-blue-primary transition-colors">{p.title}</h3>
                    <p className="text-ink-600 text-base leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            
            <ScrollReveal delay={400} className="lg:hidden mt-8 p-6 bg-ink-900 rounded-2xl">
              <p className="text-white text-base">
                Website profesional dapat menjadi fondasi kredibilitas bisnis Anda di dunia digital.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
