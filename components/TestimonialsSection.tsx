import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    name: 'Budi Santoso',
    company: 'Warung Makan Bu Sari',
    quote: 'Sejak menggunakan website dari Credentia Studio, pemesanan katering online kami naik drastis. Penampilannya sangat profesional dan mudah digunakan pelanggan.',
    rating: 5,
  },
  {
    name: 'dr. Rina Wijaya',
    company: 'Klinik Sehat Bersama',
    quote: 'Sangat puas dengan hasilnya! Pasien kini bisa langsung melihat jadwal praktek dan booking via website. Proses pembuatannya juga cepat.',
    rating: 5,
  },
  {
    name: 'Ahmad Fauzi',
    company: 'CV Maju Properti',
    quote: 'Tampilan website sangat premium, membuat klien kami lebih percaya saat melihat katalog properti. Tim Credentia juga sangat ramah dan responsif.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-surface border-t border-ink-100">
      <div className="section-container">
        
        <div className="mb-16">
          <ScrollReveal><p className="section-label">Testimoni</p></ScrollReveal>
          <h2 className="section-title">
            <ScrollReveal as="span" delay={100}>Apa Kata Klien Kami</ScrollReveal>
          </h2>
        </div>

        {/* Clean editorial testimonial grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={300 + i * 150} className="bg-white border border-ink-100 p-10 rounded-2xl flex flex-col justify-between h-full">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-blue-primary" fill="currentColor" viewBox="0 0 20 20">
                      <title>Star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-ink-600 text-lg leading-relaxed mb-8 font-medium">
                  "{t.quote}"
                </p>
              </div>
              <div className="border-t border-ink-100 pt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-light text-blue-primary rounded-full flex items-center justify-center font-display font-bold text-lg">
                  {t.name.substring(0, 1)}
                </div>
                <div>
                  <p className="font-display font-bold text-ink-900 leading-tight">{t.name}</p>
                  <p className="text-ink-400 text-sm mt-0.5">{t.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  )
}
