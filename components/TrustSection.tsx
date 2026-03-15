import ScrollReveal from './ScrollReveal'

const stats = [
  { num: '5+', label: 'Bisnis Terbantu' },
  { num: '100%', label: 'Klien Puas' },
  { num: '7–14 Hari', label: 'Pengerjaan' },
  { num: '24/7', label: 'Support' },
]

const CiptaBersama = () => (
  <svg width="150" height="32" viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-ink-400 group-hover:text-ink-900 transition-colors duration-300">
    <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <text x="38" y="22" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor" letterSpacing="-0.5">Cipta Bersama</text>
  </svg>
)

const TravelJimb = () => (
  <svg width="130" height="32" viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-ink-400 group-hover:text-ink-900 transition-colors duration-300">
    <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M10 20L16 10L22 20H10Z" fill="currentColor"/>
    <text x="38" y="22" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor" letterSpacing="-0.5">TravelJimb</text>
  </svg>
)

const BerkahLaundry = () => (
  <svg width="160" height="32" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-ink-400 group-hover:text-ink-900 transition-colors duration-300">
    <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="16" cy="16" r="2" fill="currentColor"/>
    <text x="38" y="22" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor" letterSpacing="-0.5">Berkah Laundry</text>
  </svg>
)

const KopiSenja = () => (
  <svg width="130" height="32" viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-ink-400 group-hover:text-ink-900 transition-colors duration-300">
    <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M12 20C12 20 16 24 20 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <text x="38" y="22" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor" letterSpacing="-0.5">Kopi Senja</text>
  </svg>
)

const TechNesia = () => (
  <svg width="130" height="32" viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-ink-400 group-hover:text-ink-900 transition-colors duration-300">
    <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="currentColor" fillOpacity="0.2"/>
    <rect x="11" y="11" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2.5"/>
    <text x="38" y="22" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor" letterSpacing="-0.5">TechNesia</text>
  </svg>
)

const logos = [CiptaBersama, TravelJimb, BerkahLaundry, KopiSenja, TechNesia]

export default function TrustSection() {
  return (
    <section id="trust" className="bg-white py-12 border-b border-ink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <ScrollReveal><p className="section-label mb-2">Social Proof</p></ScrollReveal>
            <h2 className="section-title">
              <ScrollReveal delay={100} as="span">Dipercaya oleh</ScrollReveal>
              <br />
              <ScrollReveal delay={200} as="span">Berbagai Bisnis</ScrollReveal>
            </h2>
          </div>
          <ScrollReveal delay={300}>
            <p className="max-w-sm text-ink-600 text-sm leading-relaxed md:text-right">
              Lebih dari <strong className="text-ink-900">5+ bisnis</strong> telah mempercayakan pembuatan website profesional mereka kepada bangbisnis.
            </p>
          </ScrollReveal>
        </div>

        {/* Stats — editorial horizontal with standard grid borders */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-ink-100 rounded-2xl overflow-hidden mb-10">
          {stats.map((s, i) => (
            <ScrollReveal 
              key={i} 
              delay={400 + i * 150} 
              className={`h-full ${i % 2 === 0 ? 'bg-white' : 'bg-surface'} border-r border-b border-ink-100`}
            >
              <div
                className="group p-6 flex flex-col gap-1 h-full cursor-default"
              >
                <p className="font-display font-bold text-3xl md:text-4xl text-ink-900 tracking-tight transition-transform duration-300 group-hover:-translate-y-1">{s.num}</p>
                <p className="text-ink-400 text-sm transition-colors duration-300 group-hover:text-blue-primary">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Marquee Logos */}
        <div className="border-t border-ink-100 pt-8 pb-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ScrollReveal delay={500}><p className="text-ink-400 text-xs uppercase tracking-widest mb-6 text-center">Dipercaya oleh Perusahaan & UMKM Berkembang</p></ScrollReveal>
          
          <div className="flex w-[200%] gap-16 group">
            <div className="flex w-1/2 shrink-0 animate-marquee space-x-16 justify-around items-center">
              {logos.map((Logo, index) => (
                <div key={index} className="flex-shrink-0 cursor-pointer">
                  <Logo />
                </div>
              ))}
            </div>
            {/* Duplicate track for seamless infinite scroll */}
            <div className="flex w-1/2 shrink-0 animate-marquee space-x-16 justify-around items-center" aria-hidden="true">
              {logos.map((Logo, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 cursor-pointer">
                  <Logo />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
