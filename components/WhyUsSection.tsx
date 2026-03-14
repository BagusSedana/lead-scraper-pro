import ScrollReveal from './ScrollReveal'

const reasons = [
  {
    title: 'Desain Profesional',
    desc: 'Setiap website dirancang khusus untuk meningkatkan kredibilitas bisnis Anda, bukan template umum.',
  },
  {
    title: 'Mobile Friendly',
    desc: 'Website tampil optimal di semua perangkat — smartphone, tablet, dan komputer — tanpa kompromi.',
  },
  {
    title: 'SEO Friendly',
    desc: 'Struktur website kami dirancang sejak awal agar mudah ditemukan di Google oleh calon pelanggan.',
  },
  {
    title: 'Support & Maintenance',
    desc: 'Kami tetap mendampingi Anda setelah website selesai — bukan sekadar buat dan tinggal pergi.',
  },
]

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-ink-900 border-t border-ink-800 text-white">
      <div className="section-container">
        
        <div className="mb-16">
          <ScrollReveal><p className="section-label !text-blue-light">Keunggulan Kami</p></ScrollReveal>
          <h2 className="section-title-white max-w-2xl">
            <ScrollReveal as="span" delay={100}>Mengapa Memilih</ScrollReveal>
            <br />
            <ScrollReveal as="span" delay={200}><span className="text-blue-primary">Credentia Studio</span>?</ScrollReveal>
          </h2>
        </div>

        {/* Clean minimal grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-16 border-b border-ink-800">
          {reasons.map((r, i) => (
            <ScrollReveal key={i} delay={300 + i * 150} className="group border-t border-ink-600 pt-6">
              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-blue-primary transition-colors">
                {r.title}
              </h3>
              <p className="text-ink-400 text-sm leading-relaxed">{r.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA block */}
        <ScrollReveal delay={600} className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-blue-primary rounded-3xl p-10 lg:p-12 relative overflow-hidden">
          {/* subtle circle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10">
            <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 tracking-tight">
              Siap Memulai Perjalanan <br className="hidden md:block" />Digital Anda?
            </h3>
            <p className="text-white/80 max-w-md">
              Konsultasikan kebutuhan website bisnis Anda bersama kami — gratis, tanpa komitmen.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <a
              href="https://wa.me/6287701785344?text=Halo%20Credentia%20Studio%2C%20saya%20ingin%20konsultasi%20gratis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-ink-900 font-bold px-8 py-4 rounded-full hover:bg-ink-100 transition-colors shadow-xl shadow-ink-900/10"
            >
              Konsultasi Gratis Sekarang
            </a>
          </div>
        </ScrollReveal>
        
      </div>
    </section>
  )
}
