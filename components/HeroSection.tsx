import ScrollReveal from './ScrollReveal'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-blue-primary min-h-screen flex flex-col relative overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-between max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-0">

        {/* Top row: label + description */}
        <div className="flex items-start justify-between gap-8 mb-12">
          <span className="text-white/60 text-xs font-medium tracking-widest uppercase pt-1">
            Jasa Website Profesional
          </span>
          <p className="hidden md:block max-w-xs text-white/70 text-sm leading-relaxed text-right">
            Membangun kepercayaan bisnis Anda melalui website profesional yang meningkatkan kredibilitas digital.
          </p>
        </div>

        {/* Giant headline */}
        <div className="mb-10">
          <h1
            className="font-display font-bold text-white leading-none tracking-tight flex flex-col gap-2"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', letterSpacing: '-0.04em', lineHeight: '1.05' }}
          >
            <ScrollReveal delay={100} as="span">Website</ScrollReveal>
            <ScrollReveal delay={200} as="span"><span className="text-white/90">Profesional</span></ScrollReveal>
            <ScrollReveal delay={300} as="span">yang Membangun</ScrollReveal>
            <ScrollReveal delay={400} as="span">
              <span
                className="inline-block pb-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Kepercayaan
              </span>
            </ScrollReveal>
          </h1>
        </div>

        {/* Bottom row: CTA + mockup image area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-20 pb-32">

          {/* Left Content */}
          <div className="text-left">
            <p className="text-white/70 text-sm leading-relaxed mb-8 md:hidden">
              Membangun kepercayaan bisnis Anda melalui website profesional yang meningkatkan kredibilitas digital.
            </p>

            <ul className="space-y-4 mb-12">
              {[
                'Desain profesional & modern',
                'SEO-friendly dari awal',
                'Mobile-ready di semua perangkat',
              ].map((b, i) => (
                <ScrollReveal delay={500 + i * 150} key={i}>
                  <li className="flex items-center gap-2.5 text-white/80 text-sm">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {b}
                  </li>
                </ScrollReveal>
              ))}
            </ul>

            <ScrollReveal delay={800} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6287701785344?text=Halo%20Credentia%20Studio%2C%20saya%20ingin%20konsultasi%20gratis."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-ink-900 font-semibold text-sm px-6 py-3 rounded-full hover:bg-ink-100 transition-colors"
              >
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi Gratis
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                Lihat Portfolio
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Mockup image panel — floats to edge like Altuz Lab */}
          <ScrollReveal delay={1000} className="hidden lg:block relative flex-1 self-end" style={{ minHeight: '380px' }}>
            {/* Browser mockup floating at bottom */}
            <div
              className="absolute bottom-0 right-0 rounded-t-2xl overflow-hidden shadow-2xl"
              style={{ width: '520px', background: '#0F1F3D' }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-ink-900/80 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-md px-3 py-1.5 text-xs text-white/50">
                    credentiastudio.com
                  </div>
                </div>
              </div>
              {/* Fake webpage content */}
              <div className="p-8" style={{ background: 'linear-gradient(160deg, #0F1F3D 0%, #162952 100%)' }}>
                {/* Hero simulation */}
                <div className="mb-6">
                  <div className="h-2 bg-white/20 rounded w-20 mb-4" />
                  <div className="h-8 bg-white/80 rounded-lg w-4/5 mb-2" />
                  <div className="h-8 bg-blue-primary/80 rounded-lg w-3/5 mb-4" />
                  <div className="h-3 bg-white/20 rounded w-full mb-1.5" />
                  <div className="h-3 bg-white/20 rounded w-4/5 mb-6" />
                  <div className="flex gap-3">
                    <div className="h-9 w-32 bg-white rounded-full" />
                    <div className="h-9 w-24 bg-white/20 rounded-full border border-white/30" />
                  </div>
                </div>
                {/* Stats strip */}
                <div className="flex gap-6 pt-5 border-t border-white/10">
                  {['30+', '100%', '14 Hari'].map((s, i) => (
                    <div key={i}>
                      <div className="text-white font-bold text-sm">{s}</div>
                      <div className="h-2 bg-white/20 rounded w-14 mt-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute top-8 right-10 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-ink-900">SEO Score</p>
                <p className="text-xs text-ink-400">100 / 100</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats strip at very bottom of blue section */}
        <div className="border-t border-white/10 py-6 flex flex-wrap gap-8 mt-0">
          {[
            { num: '30+', label: 'Bisnis Terbantu' },
            { num: '100%', label: 'Klien Puas' },
            { num: '3–14 Hari', label: 'Pengerjaan' },
            { num: '24/7', label: 'Support' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="font-display font-bold text-white text-2xl tracking-tight">{s.num}</span>
              <span className="text-white/50 text-xs uppercase tracking-widest">{s.label}</span>
              {i < 3 && <div className="hidden sm:block w-px h-5 bg-white/20 ml-4" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
