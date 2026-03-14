import ScrollReveal from './ScrollReveal'

const steps = [
  {
    title: 'Konsultasi Gratis',
    desc: 'Ceritakan masalah dan tujuan bisnis Anda. Kami akan memberikan saran strategi website terbaik.',
  },
  {
    title: 'Perencanaan',
    desc: 'Kami menyusun struktur website, konten, dan timeline pengerjaan yang transparan.',
  },
  {
    title: 'Desain & Development',
    desc: 'Proses kreatif pembuatan desain UI/UX dilanjutkan dengan tahap programming SEO-ready.',
  },
  {
    title: 'Revisi & Tes',
    desc: 'Anda mendapatkan kesempatan merevisi draft. Kami memastikan semua fitur berjalan sempurna.',
  },
  {
    title: 'Website Go Live',
    desc: 'Website Anda resmi online, cepat, profesional, dan siap mendatangkan pelanggan baru.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white border-t border-ink-100">
      <div className="section-container">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Intro */}
          <div className="lg:sticky lg:top-32 self-start">
            <ScrollReveal><p className="section-label">Proses Kerja</p></ScrollReveal>
            <h2 className="section-title mb-6 max-w-sm">
              <ScrollReveal as="span" delay={100}>Transparan &</ScrollReveal>
              <br />
              <ScrollReveal as="span" delay={200}><span className="text-blue-primary">Terstruktur</span></ScrollReveal>
            </h2>
            <ScrollReveal delay={300}>
              <p className="text-ink-600 text-lg leading-relaxed max-w-sm">
                Kami memastikan setiap tahap pembuatan website berjalan jelas, terukur, dan melibatkan Anda di setiap proses penting.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Process List (Editorial steps) */}
          <div className="space-y-12">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={200 + i * 150} className="flex gap-6 sm:gap-10 group">
                {/* Number */}
                <div className="font-display font-light text-5xl sm:text-6xl text-ink-200 group-hover:text-blue-primary transition-colors select-none leading-none pt-2 sm:pt-0">
                  0{i + 1}
                </div>
                {/* Content */}
                <div>
                  <h3 className="font-display font-bold text-2xl text-ink-900 mb-3 group-hover:text-blue-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-ink-600 text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}
