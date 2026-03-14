'use client'
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const faqs = [
  {
    q: 'Berapa lama proses pembuatan website di Credentia Studio?',
    a: 'Waktu penyelesaian bervariasi. Untuk Landing Page sekitar 3-5 hari. Company Profile 5-7 hari. Toko Online atau sistem custom bisa memakan waktu 14 hari atau lebih tergantung kompleksitas.',
  },
  {
    q: 'Apakah saya perlu menyiapkan hosting dan domain?',
    a: 'Tidak perlu repot. Semua paket kami (kecuali layanan desain UI saja) sudah otomatis termasuk gratis Domain .com/.id dan Hosting berkualitas selama 1 tahun pertama.',
  },
  {
    q: 'Apakah saya bisa mengelola website sendiri nanti?',
    a: 'Tentu saja. Kami menggunakan sistem CMS (Content Management System) yang mudah digunakan. Kami juga akan memberikan panduan cara mengelola konten website Anda sendiri.',
  },
  {
    q: 'Bagaimana jika website saya bermasalah setelah selesai?',
    a: 'Tenang, kami memberikan garansi dan gratis layanan support (maintenance ringan) selama 1-6 bulan tergantung paket Anda. Setelah masa itu berakhir, ada paket maintenance lanjutan yang sangat terjangkau.',
  },
  {
    q: 'Apakah website saya akan muncul di Google?',
    a: 'Ya, struktur website kami sudah dirancang SEO-friendly sejak tahap pengembangan dasar. Kami juga mendaftarkan website Anda ke Google Search Console. Namun, untuk tampil di halaman pertama mungkin memerlukan optimasi SEO lanjutan.',
  },
  {
    q: 'Apa bedanya Credentia Studio dengan jasa website murah lainnya?',
    a: 'Kami tidak sekadar menjual "template jadi". Kami memikirkan struktur konten, navigasi user, branding, kecepatan akses, dan keamanan. Anda mendapatkan partner teknis, bukan sekadar tukang instal website.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-surface border-t border-ink-100">
      <div className="section-container">
        
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal><p className="section-label">FAQ</p></ScrollReveal>
          <h2 className="section-title">
            <ScrollReveal as="span" delay={100}>Frequently Asked Questions</ScrollReveal>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto border-t border-ink-200">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={200 + i * 100} className="border-b border-ink-200">
              <button
                className="w-full text-left py-6 px-2 flex justify-between items-center group focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <h3 className={`font-display font-bold text-xl transition-colors pr-8 ${
                  openIndex === i ? 'text-blue-primary' : 'text-ink-900 group-hover:text-blue-primary'
                }`}>
                  {faq.q}
                </h3>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                  openIndex === i 
                    ? 'border-blue-primary bg-blue-primary text-white rotate-45' 
                    : 'border-ink-200 text-ink-400 group-hover:border-blue-primary group-hover:text-blue-primary'
                }`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-64 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-ink-600 text-base leading-relaxed px-2">
                  {faq.a}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  )
}
