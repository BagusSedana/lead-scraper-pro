import ScrollReveal from './ScrollReveal'

const solutions = [
  {
    title: 'Website Profil Usaha',
    desc: 'Bikin warung, salon, atau jasa lokal kamu tampil profesional. Berisi info usaha, jam buka, lokasi Maps, dan tombol WhatsApp.',
  },
  {
    title: 'Landing Page Promo',
    desc: 'Cocok buat promo paket menu, treatment, atau event. Fokus ke 1 tujuan: biar calon pelanggan langsung chat/booking.',
  },
  {
    title: 'Paket Go Digital Simple',
    desc: 'Gak pake ribet. Website + bantuan pasang link di Instagram dan Google Maps biar usahamu gampang dicari orang.',
  },
  {
    title: 'Support Premium',
    desc: 'Gak bisa edit website? Capek upload menu? Kita bantu urus isinya. Kamu tinggal fokus ke jualan dan layani pembeli.',
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
              href="https://wa.me/6287701785344?text=Halo%20Bang%20Bisnis%2C%20saya%20tertarik%20dengan%20paket%20website%20untuk%20usaha%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              Pesan Website Sekarang
            </a>
          </ScrollReveal>
        </div>

        {/* Advantages Grid - Editorial Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {solutions.map((a, i) => (
            <ScrollReveal key={i} delay={300 + i * 150} className="group border-t border-ink-900 pt-6">
              {/* Checkmark circle */}
              <div className="w-10 h-10 rounded-full bg-accent-primary flex items-center justify-center mb-6 shadow-lg shadow-accent-primary/20">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="font-display font-bold text-xl text-ink-900 mb-3 group-hover:text-accent-primary transition-colors">
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
