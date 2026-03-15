import ScrollReveal from './ScrollReveal'

const reasons = [
  {
    title: 'Paham Kebutuhan Lokal',
    desc: 'Kami bukan agency luar yang kaku. Kami paham kondisi UMKM di Bali dan wisatawan yang jadi targetmu.',
  },
  {
    title: 'Bisa Ketemu Santai',
    desc: 'Mau jelasin detail sambil ngopi di Bali? Bisa. Kami bantu jelasin pake bahasa sederhana, tanpa jargon teknis.',
  },
  {
    title: 'Google Maps Ready',
    desc: 'Bukan cuma dapet website, kita bantu pastiin link website terpasang rapi di Google Business & Maps kamu.',
  },
  {
    title: 'Harga Jujur UMKM',
    desc: 'Paket fleksibel sesuai budget. Mulai dari yang simpel dulu, nanti bisa di-upgrade pas bisnismu makin laku.',
  },
]

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-ink-900 border-t border-ink-800 text-white">
      <div className="section-container">
        
        <div className="mb-16">
          <ScrollReveal><p className="section-label-accent !text-accent-primary">Kenapa Kami?</p></ScrollReveal>
          <h2 className="section-title-white max-w-2xl">
            <ScrollReveal as="span" delay={100}>Kenapa UMKM Bali</ScrollReveal>
            <br />
            <ScrollReveal as="span" delay={200}>Pilih <span className="text-accent-primary">Bang Bisnis</span>?</ScrollReveal>
          </h2>
        </div>

        {/* Clean minimal grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-16 border-b border-ink-800">
          {reasons.map((r, i) => (
            <ScrollReveal key={i} delay={300 + i * 150} className="group border-t border-ink-600 pt-6">
              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-accent-primary transition-colors">
                {r.title}
              </h3>
              <p className="text-ink-400 text-sm leading-relaxed">{r.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA block */}
        <ScrollReveal delay={600} className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-accent-primary rounded-3xl p-10 lg:p-12 relative overflow-hidden shadow-2xl shadow-accent-primary/20">
          {/* subtle circle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10">
            <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 tracking-tight">
              Siap Bikin Bisnismu <br className="hidden md:block" />Lebih Berkelas?
            </h3>
            <p className="text-white/90 max-w-md">
              Chat kami sekarang. Ceritakan bisnismu — kami bantu rekomendasikan tipe website yang paling pas + estimasi biaya.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <a
              href="https://wa.me/6287701785344?text=Halo%20Bang%20Bisnis%2C%20saya%20tertarik%20konsultasi%20untuk%20level%20up%20bisnis%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-ink-900 font-bold px-8 py-4 rounded-full hover:bg-ink-100 transition-all hover:scale-105 shadow-xl"
            >
              Chat WhatsApp Sekarang
            </a>
          </div>
        </ScrollReveal>
        
      </div>
    </section>
  )
}
