export interface PortfolioData {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  websiteUrl: string;
  color: string;
  heroImage: string;
  summary: string;
  challenge: string;
  solution: string[];
  results: { label: string; value: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const portfolios: PortfolioData[] = [
  {
    slug: 'cipta-bersama',
    title: 'Transformasi Digital Supplier Daging B2B Terbesar di Jakarta',
    client: 'Cipta Bersama',
    industry: 'F&B Supplier',
    year: '2024',
    websiteUrl: 'https://cipta-bersama.vercel.app',
    color: 'bg-red-100',
    heroImage: '/cb.png', // Fallback to their logo or a generic mockup if needed later
    summary: 'Membangun kehadiran digital profesional untuk Cipta Bersama, distributor daging premium B2B di Jakarta, guna meyakinkan mitra bisnis skala besar (hotel, restoran) dengan sekali pandang.',
    challenge: 'Sebagai supplier daging B2B skala besar yang melayani hotel dan restoran sejak 2008, Cipta Bersama sebelumnya tidak memiliki representasi digital yang sepadan dengan skala operasi mereka. Calon mitra seringkali meminta Company Profile resmi, namun profil dalam bentuk PDF terkesan kuno dan sulit diperbarui. Mereka membutuhkan platform yang dapat memamerkan sertifikasi halal, standar cold-chain -18°C, dan katalog prime cuts mereka (Wagyu, Lamb, Tenderloin) dengan cara yang modern dan instan.',
    solution: [
      'Pembuatan Website Company Profile B2B Premium dengan desain "Dark & Elegant" untuk menonjolkan kesan eksklusif dari produk daging premium mereka.',
      'Struktur konten yang dirancang khusus untuk audiens restoran dan hotel (B2B), dengan penekanan pada kapabilitas operasional (Cold Chain & Halal Certified).',
      'Integrasi tombol WhatsApp instan ("Pesan Sekarang" & "Konsultasi") untuk mempercepat proses inquiry dari calon mitra.',
      'Optimasi SEO on-page dengan menargetkan kata kunci spesifik seperti "Supplier Daging Premium Jakarta" dan "Wholesale Lamb & Beef".',
      'Desain responsif yang memastikan katalog produk terlihat menggiurkan dan jelas meski diakses dari layar smartphone oleh para Executive Chef.'
    ],
    results: [
      { label: 'Peningkatan Inquiry Harian', value: '+45%' },
      { label: 'Waktu Muat Website', value: '< 1.5s' },
      { label: 'Kesan Profesional (Survei Mitra)', value: '98%' },
    ],
    testimonial: {
      quote: 'Website baru kami benar-benar mengubah cara calon klien melihat kami. Sekarang, mengirim portofolio ke jajaran manajemen hotel menjadi sangat mudah dan meyakinkan.',
      author: 'Manajemen',
      role: 'Cipta Bersama'
    }
  },
  {
    slug: 'traveljimb',
    title: 'Tampilan Baru yang Minimalis untuk Agen Travel Modern',
    client: 'TravelJimb',
    industry: 'Pariwisata',
    year: '2023',
    websiteUrl: 'https://traveljimb.vercel.app',
    color: 'bg-blue-100',
    heroImage: '', // Placeholder
    summary: 'Revamp total identitas visual digital TravelJimb menjadi landing page yang sangat bernapas minimalis modern yang berfokus pada kemudahan reservasi paket perjalanan.',
    challenge: 'Di era di mana calon wisatawan dibombardir dengan ratusan penawaran paket liburan yang visualnya terlalu ramai dan membingungkan, TravelJimb ingin tampil beda. Mereka menginginkan sebuah landing page yang menenangkan, berkelas, dan langsung pada intinya (to-the-point) tanpa distraksi visual, sehingga calon pelanggan dapat langsung fokus pada destinasi dan tombol pemesanan.',
    solution: [
      'Pengembangan Landing Page dengan pendekatan Ultra-Minimalis, memanfaatkan ruang kosong (white-space) ekstensif untuk memberi "napas" pada visual destinasi.',
      'Penyederhanaan alur pengguna (User Flow): Dari melihat destinasi eksotis hingga menekan tombol reservasi WhatsApp hanya dalam maksimal 3 kali scroll.',
      'Tipografi bold dan bersih sebagai elemen desain utama, menggantikan elemen grafis yang tidak esensial.',
      'Optimasi performa ekstrim (Skor Lighthouse 99+) berkat aset yang sangat ringan dan ketiadaan library UI yang berat.',
      'Penerapan animasi transisi mikro yang sangat halus saat di-scroll, memberikan kesan premium tanpa mengorbankan kecepatan.'
    ],
    results: [
      { label: 'Conversion Rate', value: '+30%' },
      { label: 'Bounce Rate', value: '-25%' },
      { label: 'Kecepatan Halaman (Mobile)', value: 'Score 99' },
    ]
  }
];

export function getPortfolioBySlug(slug: string): PortfolioData | undefined {
  return portfolios.find(p => p.slug === slug);
}
