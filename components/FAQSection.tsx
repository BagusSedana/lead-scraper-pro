'use client'
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const faqs = [
  {
    q: 'Saya gaptek, apakah bakal ribet ngurus websitenya?',
    a: 'Tenang, gak ribet sama sekali. Kita bikin sistemnya simpel banget. Pas udah live, kita bakal ajarin cara ganti menu atau harga pake HP aja. Kalo mentok, tinggal chat kita!',
  },
  {
    q: 'Berapa lama website saya bisa live?',
    a: 'Normalnya pengerjaan 7-14 hari kerja setelah semua info (foto/menu) lengkap. Kita gak suka tunda-tunda kerjaan.',
  },
  {
    q: 'Bisa bantu daftarin ke Google Maps gak?',
    a: 'Bisa banget! Itu udah sepaket. Kita bantu hubungin titik Maps usaha kamu sama website barunya biar makin gampang dicari wisatawan.',
  },
  {
    q: 'Apakah bisa DP atau dicicil?',
    a: 'Bisa. Kita paham kebutuhan UMKM. Pembayaran bisa DP dulu, sisanya pas website udah siap tayang. Gak ada biaya tersembunyi.',
  },
  {
    q: 'Kalo belum ada domain/hosting gimana?',
    a: 'Gak perlu pusing. Semua paket kita udah gratis Domain (.com / .id) sama Hosting premium buat 1 tahun pertama. Kamu terima beres aja.',
  },
  {
    q: 'Bang Bisnis lokasinya di mana? Bisa ketemu?',
    a: 'Kita ada di Bali! Kalo mau ngobrol santai sambil ngopi buat jelasin konsep websitenya, kita atur jadwal aja. Chat aja dulu!',
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
                  openIndex === i ? 'text-accent-primary' : 'text-ink-900 group-hover:text-accent-primary'
                }`}>
                  {faq.q}
                </h3>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                  openIndex === i 
                    ? 'border-accent-primary bg-accent-primary text-white rotate-45' 
                    : 'border-ink-200 text-ink-400 group-hover:border-accent-primary group-hover:text-accent-primary'
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
