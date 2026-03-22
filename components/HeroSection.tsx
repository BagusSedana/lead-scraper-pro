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
            Bang Bisnis — Bali & International UMKM Digital Partner
          </span>
          <p className="hidden md:block max-w-xs text-white/70 text-sm leading-relaxed text-right">
            Membantu bisnis lokal di Bali & International go digital dengan website yang cepat, modern, dan menghasilkan pelanggan.
          </p>
        </div>

        {/* Giant headline area with sticker */}
        <div className="mb-10 relative">
          {/* Animated Sharper Jagged Sticker */}
          <div className="absolute -top-14 left-[48%] md:left-[44%] lg:left-[40%] z-20 hidden sm:block">
            <div className="animate-sticker relative">
              <div 
                className="bg-white text-blue-primary font-bold text-[10px] uppercase tracking-tighter px-4 py-4 shadow-xl flex flex-col items-center justify-center text-center w-24 h-24 transform backdrop-blur-sm bg-white/95"
                style={{ 
                  clipPath: "polygon(100% 50%, 96.19% 59.75%, 98.48% 70.22%, 89.1% 74.05%, 89.1% 84.15%, 78.43% 84.15%, 74.5% 93.3%, 64.95% 89.5%, 59.75% 96.19%, 50% 90%, 40.25% 96.19%, 35.05% 89.5%, 25.5% 93.3%, 21.57% 84.15%, 10.9% 84.15%, 10.9% 74.05%, 1.52% 70.22%, 3.81% 59.75%, 0% 50%, 3.81% 40.25%, 1.52% 29.78%, 10.9% 25.95%, 10.9% 15.85%, 21.57% 15.85%, 25.5% 6.7%, 35.05% 10.5%, 40.25% 3.81%, 50% 10%, 59.75% 3.81%, 64.95% 10.5%, 74.5% 6.7%, 78.43% 15.85%, 89.1% 15.85%, 89.1% 25.95%, 98.48% 29.78%, 96.19% 40.25%)",
                }}
              >
                <span>100%</span>
                <span>Digital</span>
              </div>
            </div>
          </div>

          <h1
            className="font-display font-bold text-white leading-none tracking-tight flex flex-col gap-2"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.04em', lineHeight: '1.1' }}
          >
            <ScrollReveal delay={100} as="span">Jasa Website</ScrollReveal>
            <ScrollReveal delay={200} as="span"><span className="text-white/90">& Landing Page</span></ScrollReveal>
            <ScrollReveal delay={300} as="span">Untuk UMKM yang Mau</ScrollReveal>
            <ScrollReveal delay={400} as="span">
              <span className="inline-block pb-4 text-white">
                Banyak Pelanggan
              </span>
            </ScrollReveal>
          </h1>
        </div>

        {/* Bottom row: CTA + mockup image area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-20 pb-16">

          {/* Left Content */}
          <div className="text-left">
            <p className="text-white/80 text-base leading-relaxed mb-8">
              Desain modern, loading cepat, fokus ke konversi. Cocok untuk F&B, jasa lokal, dan personal brand di Indonesia.
            </p>

            <ul className="space-y-4 mb-12">
              {[
                'Cocok untuk F&B, jasa, dan usaha lokal di Bali & International',
                'Desain simpel, mudah dikelola pemilik usaha',
                'Support sampai website muncul di Google & Gmaps',
              ].map((b, i) => (
                <ScrollReveal delay={500 + i * 150} key={i}>
                  <li className="flex items-center gap-2.5 text-white/85 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {b}
                  </li>
                </ScrollReveal>
              ))}
            </ul>

            <ScrollReveal delay={800} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6287701785344?text=Halo%20Bang%20Bisnis%2C%20saya%20ingin%20konsultasi%20gratis%20untuk%20usaha%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-primary font-bold text-base px-8 py-4 rounded-full hover:bg-blue-light transition-all hover:-translate-y-0.5 shadow-lg shadow-white/10"
              >
                Konsultasi Gratis via WhatsApp
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                Lihat Paket Harga
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


      </div>
    </section>
  )
}
