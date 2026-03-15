'use client'
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const plans = [
  {
    name: 'Profil Usaha',
    price: '2.490',
    desc: 'Bikin bisnismu dipercaya pelanggan & wisatawan dengan info lengkap online.',
    popular: false,
    features: [
      'Desain modern & mobile-friendly',
      'Info menu, layanan, & jam buka',
      'Tombol WhatsApp selalu standby',
      'Integrasi Google Maps & Instagram',
      'Gratis Domain & Hosting 1 Tahun',
      'Bantu input menu/produk sampai live',
    ],
  },
  {
    name: 'Landing Page Promo',
    price: '3.990',
    desc: 'Halaman khusus buat fokus jualan 1 paket/promo biar banjir orderan via WA.',
    popular: true,
    features: [
      'Desain high-conversion (fokus closing)',
      'Copywriting persuasif (jago jualan)',
      'Form order atau direct chat WhatsApp',
      'Pasang Tracking Google/Meta Ads',
      'Gratis Domain & Hosting 1 Tahun',
      'Optimasi Page Speed (Loading Ngebut)',
    ],
  },
  {
    name: 'Custom UMKM',
    price: 'Hubungi',
    desc: 'Punya kebutuhan khusus? Mau fitur lebih lengkap? Kita ngobrol santai aja.',
    popular: false,
    features: [
      'Desain eksklusif sesuai request',
      'Fitur custom (katalog, galeri, dll)',
      'Setting Google My Business PRO',
      'Foto produk sederhana (area Bali)',
      'Maintenance & Update Bulanan',
      'Konsultasi strategis digital GRATIS',
    ],
  },
]

const addonsList = [
  {
    title: 'Maintenance Bulanan',
    desc: 'Update plugin, backup rutin, dan keamanan teknis.',
    price: 'Rp500Rb / bln',
  },
  {
    title: 'Update Konten',
    desc: 'Upload artikel, ganti banner, atau update produk kecil.',
    price: 'Rp1Jt / bln',
  },
  {
    title: 'Optimasi SEO Lanjutan',
    desc: 'Riset keyword & perbaikan teknis mendalam per bulan.',
    price: 'Hubungi Kami',
  },
  {
    title: 'Perpanjangan Tahunan',
    desc: 'Perpanjangan Domain + Hosting Premium setelah tahun ke-1.',
    price: 'Mulai Rp990Rb',
  },
]

export default function PricingSection() {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])

  const toggleAddon = (title: string) => {
    setSelectedAddons(prev => 
      prev.includes(title) 
        ? prev.filter(a => a !== title)
        : [...prev, title]
    )
  }

  const getAddonsWaLink = () => {
    if (selectedAddons.length === 0) return '#'
    const text = `Halo Bang Bisnis, saya tertarik untuk menambahkan layanan Add-on berikut ke website saya:%0A- ${selectedAddons.join('%0A- ')}`
    return `https://wa.me/6287701785344?text=${text}`
  }

  return (
    <section id="pricing" className="py-24 bg-white border-t border-ink-100">
      <div className="section-container">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal><p className="section-label">Harga Transparan</p></ScrollReveal>
          <h2 className="section-title mb-6"><ScrollReveal as="span" delay={100}>Paket Investasi Website</ScrollReveal></h2>
          <ScrollReveal delay={200}>
            <p className="text-ink-600 text-lg leading-relaxed">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Harga jelas di depan, tanpa biaya tersembunyi.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <ScrollReveal
              key={i}
              delay={300 + i * 150}
              className={`relative flex flex-col p-10 rounded-2xl transition-all duration-300 ${
                p.popular
                  ? 'bg-ink-900 border border-ink-800 shadow-2xl scale-105 z-10'
                  : 'bg-white border border-ink-100'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <span className="bg-blue-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Paling Diminati
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`font-display font-bold text-2xl mb-2 ${p.popular ? 'text-white' : 'text-ink-900'}`}>
                  {p.name}
                </h3>
                <p className={`text-sm leading-relaxed h-10 ${p.popular ? 'text-white/70' : 'text-ink-500'}`}>
                  {p.desc}
                </p>
              </div>

              <div className="mb-8 border-b border-ink-200 pb-8 border-opacity-30">
                <p className={`text-sm ${p.popular ? 'text-white/70' : 'text-ink-500'} mb-1`}>Mulai dari</p>
                <div className="flex items-baseline gap-1">
                  {p.price === 'Hubungi' ? (
                    <span className={`font-display font-bold text-4xl tracking-tight ${p.popular ? 'text-white' : 'text-ink-900'}`}>Kami</span>
                  ) : (
                    <>
                      <span className={`font-bold ${p.popular ? 'text-white/50' : 'text-ink-400'}`}>Rp</span>
                      <span className={`font-display font-bold text-5xl tracking-tight ${p.popular ? 'text-white' : 'text-ink-900'}`}>
                        {p.price}
                      </span>
                      <span className={`font-bold ${p.popular ? 'text-white/50' : 'text-ink-400'}`}>.000</span>
                    </>
                  )}
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-10">
                {p.features.map((f, j) => (
                  <li key={j} className="flex gap-3 items-start">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${p.popular ? 'text-blue-light' : 'text-blue-primary'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${p.popular ? 'text-white/80' : 'text-ink-700'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/6287701785344?text=Halo%20Bang%20Bisnis%2C%20saya%20tertarik%20dengan%20paket%20${p.name}.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full flex items-center justify-center gap-2.5 transition-all duration-300 ${
                  p.popular
                    ? 'bg-blue-primary hover:bg-blue-hover text-white font-bold py-4 rounded-full shadow-lg shadow-blue-primary/20'
                    : 'btn-outline border-ink-100 hover:border-ink-900 py-4'
                }`}
              >
                <span className="font-semibold">{p.price === 'Hubungi' ? 'Konsultasi Sekarang' : `Pilih Paket ${p.name}`}</span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="mt-20 border-t border-ink-100 pt-16">
          <div className="text-center mb-10">
            <ScrollReveal delay={600}><h3 className="font-display font-bold text-2xl text-ink-900 mb-4">Layanan Tambahan (Add-ons)</h3></ScrollReveal>
            <ScrollReveal delay={700}>
              <p className="text-ink-600 text-sm max-w-2xl mx-auto">
                Optimalkan website Anda dengan layanan tambahan yang dapat disesuaikan dengan kebutuhan spesifik bisnis.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addonsList.map((addon, aIdx) => {
              const isSelected = selectedAddons.includes(addon.title)
              return (
                <ScrollReveal key={aIdx} delay={800 + aIdx * 100}>
                  <div 
                    onClick={() => toggleAddon(addon.title)}
                    className={`border p-6 rounded-xl relative group cursor-pointer transition-all duration-300 h-full flex flex-col ${
                      isSelected 
                        ? 'border-accent-primary bg-accent-light/30 shadow-md shadow-accent-primary/10 -translate-y-1' 
                        : 'border-ink-100 bg-surface hover:border-accent-primary/50 hover:shadow-md'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-display font-bold text-ink-900 pr-6">{addon.title}</h4>
                      <div className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors mt-0.5 ${
                        isSelected ? 'bg-accent-primary border-accent-primary' : 'border-ink-200 bg-white group-hover:border-accent-primary/50'
                      }`}>
                        {isSelected && (
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <p className="text-ink-500 text-xs leading-relaxed mb-4 flex-grow">{addon.desc}</p>
                    <p className="text-blue-primary font-semibold text-sm mt-auto">{addon.price}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Dynamic Checkout Button for Addons */}
          {selectedAddons.length > 0 && (
            <div className="mt-12 text-center animate-fade-up">
              <a
                href={getAddonsWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 shadow-lg shadow-blue-primary/20 text-base"
              >
                <span>Pesan {selectedAddons.length} Fitur Tambahan via WA</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          )}
        </div>

        {/* Note underneath */}
        <div className="mt-16 text-center">
          <p className="text-ink-500 text-sm">
            Butuh fitur khusus atau bingung memilih paket?{' '}
            <a 
              href="https://wa.me/6287701785344?text=Halo%20Bang%20Bisnis%2C%20saya%20ingin%20konsultasi%20mengenai%20paket%20website%20yang%20cocok%20untuk%20bisnis%20saya." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-primary font-bold hover:underline"
            >
              Konsultasikan dengan kami
            </a>
          </p>
        </div>
        
      </div>
    </section>
  )
}
