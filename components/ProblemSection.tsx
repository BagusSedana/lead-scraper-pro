import ScrollReveal from './ScrollReveal'

const problems = [
  {
    num: '01',
    title: 'Hanya Andalkan Instagram',
    desc: 'Banyak usaha di Bali cuma punya IG. Padahal saat turis cari di Google, bisnis yang punya website resmi jauh lebih dipercaya.',
  },
  {
    num: '02',
    title: 'Ghaib di Google Maps',
    desc: 'Bisa muncul di Maps itu wajib, tapi punya website di profil Gmaps bikin usaha kamu prioritas dan terlihat lebih niat bisnis.',
  },
  {
    num: '03',
    title: 'Chat Masuk Berantakan',
    desc: 'Tanpa website, kamu harus jelasin menu/harga berkali-kali di WA. Link website bikin info rapi dan kamu tinggal terima pesanan.',
  },
  {
    num: '04',
    title: 'Kalah Saing sama Pendatang',
    desc: 'Bisnis baru yang punya website tampak lebih elit dan sering dipilih pelanggan dibanding bisnis lama yang tidak go digital.',
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-surface">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left: Sticky Headline */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <ScrollReveal><p className="section-label-accent">Fakta Lapangan</p></ScrollReveal>
              <h2 className="section-title mb-6">
                <ScrollReveal as="span" delay={100}>Kenapa UMKM Bali</ScrollReveal><br />
                <ScrollReveal as="span" delay={200}><span className="text-accent-primary">Butuh Website,</span></ScrollReveal><br />
                <ScrollReveal as="span" delay={300}>Bukan Cuma IG?</ScrollReveal>
              </h2>
              <ScrollReveal delay={400}>
                <p className="text-ink-600 text-lg leading-relaxed max-w-md mb-8">
                  Wisatawan dan pembeli sekarang cek online dulu (Google Maps, Website) sebelum memutuskan datang atau pesan. Jangan sampai bisnismu terlewatkan.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={500} className="hidden lg:block p-6 bg-ink-900 rounded-2xl">
                <p className="text-white text-base">
                  Website profesional dapat menjadi fondasi kredibilitas bisnis Anda di dunia digital.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Right: Problem List (Editorial style) */}
          <div className="lg:col-span-7 lg:pl-12 space-y-0">
            {problems.map((p, i) => (
              <ScrollReveal delay={i * 100} key={i}>
                <div 
                  className={`card-editorial flex gap-6 sm:gap-8 group ${i === 0 ? 'border-t-0 pt-0' : ''}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border border-ink-200 flex items-center justify-center text-ink-400 font-display font-bold group-hover:border-blue-primary group-hover:text-blue-primary group-hover:bg-blue-light transition-colors">
                      {p.num}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-2xl text-ink-900 mb-3 group-hover:text-accent-primary transition-colors">{p.title}</h3>
                    <p className="text-ink-600 text-base leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            
            <ScrollReveal delay={400} className="lg:hidden mt-8 p-6 bg-ink-900 rounded-2xl">
              <p className="text-white text-base">
                Website profesional dapat menjadi fondasi kredibilitas bisnis Anda di dunia digital.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
