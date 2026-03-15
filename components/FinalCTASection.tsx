import ScrollReveal from './ScrollReveal'

export default function FinalCTASection() {
  return (
    <section id="contact" className="bg-blue-primary relative overflow-hidden">
      {/* Background Abstract Pattern (Altuz Lab inspired texture) */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at right top, #FFFFFF, transparent 50%), radial-gradient(circle at left bottom, #FFFFFF, transparent 30%)',
        }}
      />
      
      <div className="section-container relative z-10 py-32 flex flex-col items-center text-center">
        
        <h2 
          className="font-display font-bold text-white mb-8 tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.0', letterSpacing: '-0.03em' }}
        >
          <ScrollReveal as="span" delay={100}>Siap Onlinekan</ScrollReveal>
          <br />
          <ScrollReveal as="span" delay={200}>Bisnismu di Bali?</ScrollReveal>
        </h2>
        
        <ScrollReveal delay={300}>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-12">
            Konsultasi Gratis via WhatsApp — Ceritakan bisnismu, kami bantu kasih saran website terbaik.
            <br />
            <span className="text-white font-bold mt-2 inline-block italic">Slot project bulan ini terbatas!</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/6287701785344?text=Halo%20Bang%20Bisnis%2C%20saya%20mau%20konsultasi%20buat%20bikin%20website%20usaha."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-primary font-bold px-10 py-5 rounded-full hover:bg-blue-light transition-all hover:scale-105 shadow-2xl shadow-white/20 text-lg"
          >
            Konsultasi Gratis via WhatsApp
          </a>
        </ScrollReveal>

        {/* Small trust indicator under button */}
        <ScrollReveal delay={500}>
          <div className="mt-8 flex items-center justify-center gap-3 text-white/50 text-sm font-medium">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Konsultasi 100% Gratis & Tanpa Biaya Tersembunyi
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
