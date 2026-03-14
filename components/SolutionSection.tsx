import ScrollReveal from './ScrollReveal'

const advantages = [
  {
    title: 'Desain Modern & Profesional',
    desc: 'Setiap website kami dirancang secara custom sesuai identitas bisnis Anda, bukan template biasa.',
  },
  {
    title: 'Struktur SEO-Friendly',
    desc: 'Dari awal, website dibangun dengan struktur yang memudahkan Google mengindeks dan menampilkan bisnis Anda.',
  },
  {
    title: 'Tampilan Optimal di Semua Perangkat',
    desc: 'Website tampil sempurna di smartphone, tablet, maupun komputer desktop tanpa kompromi.',
  },
  {
    title: 'Sistem Mudah Dikelola',
    desc: 'Anda dapat memperbarui konten website sendiri dengan mudah, tanpa membutuhkan keahlian teknis.',
  },
]

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 bg-white">
      <div className="section-container">
        
        <div className="max-w-3xl mb-16">
          <ScrollReveal><p className="section-label">Solusi Kami</p></ScrollReveal>
          <h2 className="section-title mb-6">
            <ScrollReveal as="span" delay={100}>Kami Membantu Bisnis Anda</ScrollReveal> <br className="hidden md:block" />
            <ScrollReveal as="span" delay={200}><span className="text-blue-primary">Terlihat Lebih Profesional</span> di Internet</ScrollReveal>
          </h2>
          <ScrollReveal delay={300}>
            <p className="text-ink-600 text-lg leading-relaxed mb-8">
              Kami merancang website yang tidak hanya terlihat menarik, tetapi juga membantu meningkatkan kepercayaan pelanggan dan memperkuat kehadiran digital bisnis Anda.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <a
              href="https://wa.me/6287701785344?text=Halo%20Credentia%20Studio%2C%20saya%20ingin%20konsultasi%20gratis."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Mulai Konsultasi Gratis
            </a>
          </ScrollReveal>
        </div>

        {/* Advantages Grid - Editorial Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {advantages.map((a, i) => (
            <ScrollReveal key={i} delay={300 + i * 150} className="group border-t border-ink-900 pt-6">
              {/* Checkmark circle */}
              <div className="w-10 h-10 rounded-full bg-blue-primary flex items-center justify-center mb-6 ring-4 ring-blue-light">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="font-display font-bold text-xl text-ink-900 mb-3 group-hover:text-blue-primary transition-colors">
                {a.title}
              </h3>
              <p className="text-ink-600 text-sm leading-relaxed">{a.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
