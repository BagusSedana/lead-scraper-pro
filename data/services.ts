export interface ServiceData {
  slug: string;
  title: string;
  category: string;
  icon: string; // SVG path string or identifier
  shortDesc: string;
  heroHeadline: string;
  heroDesc: string;
  whyImportant: string[];
  features: {
    title: string;
    desc: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
}

export const servicesData: ServiceData[] = [
  {
    slug: 'website-company-profile',
    title: 'Website Company Profile',
    category: 'Branding & Kredibilitas',
    icon: 'M19 14l-7 7m0 0l-7-7m7 7V3',
    shortDesc: 'Website profesional untuk memperkenalkan bisnis dan meningkatkan kredibilitas brand Anda.',
    heroHeadline: 'Ubah Cara Klien Melihat Bisnis Anda dengan Company Profile Profesional',
    heroDesc: 'Kesan pertama adalah segalanya. Website Company Profile bukan sekadar brosur digital, melainkan representasi 24 jam tentang profesionalisme, nilai, dan skala bisnis Anda di mata dunia.',
    whyImportant: [
      'Lebih dari 80% calon klien akan mencari informasi perusahaan Anda di Google sebelum memutuskan untuk bekerja sama.',
      'Meningkatkan rasa percaya (trust) dari mitra B2B, investor, maupun calon karyawan.',
      'Memudahkan Anda saat melakukan pitching; cukup sertakan link website yang rapi dan responsif.'
    ],
    features: [
      {
        title: 'Desain Kustom Sesuai Identitas',
        desc: 'Kami tidak menggunakan template murahan. Setiap sudut website dirancang untuk mencerminkan keunikan brand Anda.'
      },
      {
        title: 'Struktur Informasi yang Jelas',
        desc: 'Informasi Sejarah, Visi Misi, Layanan, hingga Tim manajemen ditata agar mudah dipahami oleh pembaca.'
      },
      {
        title: 'Integrasi Dokumen Legal & Portfolio',
        desc: 'Sertakan company profile PDF yang dapat diunduh, serta galeri proyek terbaik Anda secara terorganisir.'
      }
    ],
    faq: [
      {
        q: 'Berapa lama proses pembuatan Website Company Profile?',
        a: 'Normalnya membutuhkan waktu 7-14 hari kerja tergantung kesiapan materi (teks dan gambar) dari pihak Anda.'
      },
      {
        q: 'Apakah saya bisa memperbarui kontennya sendiri nanti?',
        a: 'Tentu. Anda akan mendapatkan akses ke Dashboard yang user-friendly (CMS) untuk mengubah teks atau gambar tanpa perlu paham coding.'
      }
    ]
  },
  {
    slug: 'website-umkm',
    title: 'Website UMKM & Bisnis Lokal',
    category: 'Local SEO & Visibilitas',
    icon: 'M19 14l-7 7m0 0l-7-7m7 7V3',
    shortDesc: 'Website sederhana namun profesional untuk membantu bisnis lokal tampil lebih dipercaya.',
    heroHeadline: 'Bantu Pelanggan Lokal Menemukan Toko Anda di Internet',
    heroDesc: 'Jangan batasi pasar Anda hanya pada orang yang lewat di depan toko. Dengan Website UMKM yang teroptimasi Local SEO, bisnis Anda siap ditemukan oleh ribuan pelanggan potensial di kota Anda setiap hari.',
    whyImportant: [
      'Mendominasi pencarian lokal. Ketika seseorang mencari "Toko [Produk Anda] terdekat", website Anda siap muncul paling atas.',
      'Sangat krusial untuk persaingan di era digital, bahkan untuk bisnis berskala warung atau klinik kecil sekalipun.',
      'Menampilkan jam buka, lokasi Google Maps akurat, dan katalog produk yang selalu up-to-date.'
    ],
    features: [
      {
        title: 'Optimasi Google Business Profile',
        desc: 'Website Anda akan disinkronkan dan dioptimalkan bersamaan dengan profil Google Maps bisnis Anda.'
      },
      {
        title: 'Tombol WhatsApp Langsung',
        desc: 'Pengunjung tidak perlu mencatat nomor telepon. Satu klik, langsung terhubung ke admin WhatsApp Anda.'
      },
      {
        title: 'Katalog Produk Mudah Dikelola',
        desc: 'Tampilkan produk atau menu andalan Anda dengan rapi, lengkap dengan harga dan deksripsinya.'
      }
    ],
    faq: [
      {
        q: 'Bisnis saya kecil, apakah benar butuh website?',
        a: 'Sangat butuh, justru untuk membuktikan eksistensi dan agar konsumen tahu bisnis Anda nyata dan profesional.'
      },
      {
        q: 'Apakah biaya perpanjangan tahunannya mahal?',
        a: 'Tidak, biaya perpanjangan domain dan server sangat terjangkau, dirancang khusus untuk skala daya beli UMKM.'
      }
    ]
  },
  {
    slug: 'website-landing-page',
    title: 'Website Landing Page',
    category: 'Marketing & Konversi',
    icon: 'M19 14l-7 7m0 0l-7-7m7 7V3',
    shortDesc: 'Website khusus promosi produk atau campaign agar konversi meningkat.',
    heroHeadline: 'Ubah Pengunjung Biasa Menjadi Pembeli dengan Landing Page High-Conversion',
    heroDesc: 'Jangan buang-buang anggaran iklan Anda dengan mengarahkan traffic ke homepage yang membingungkan. Landing Page dirancang khusus dengan satu tujuan: membuat pengunjung mengklik tombol "Beli" atau "Daftar".',
    whyImportant: [
      'Menghilangkan distraksi. Tidak ada navigasi rumit, fokus 100% pada penawaran produk Anda.',
      'Dilengkapi dengan Copywriting persuasif yang memandu psikologi pembaca dari atas hingga ke tombol Call-To-Action di bawah.',
      'Mampu melacak (tracking) konversi iklan Meta Ads / Google Ads dengan sangat presisi melalui Pixel.'
    ],
    features: [
      {
        title: 'Copywriting Persuasif & Struktur Penjualan',
        desc: 'Penulisan yang menonjolkan fitur, manfaat, dan membunuh keraguan pembeli sebelum mereka bertanya.'
      },
      {
        title: 'Desain Ultra-Cepat & Ringan',
        desc: 'Landing page harus terbuka dalam hitungan kurang dari 2 detik agar pengunjung dari iklan tidak kabur menunggu.'
      },
      {
        title: 'A/B Testing Ready',
        desc: 'Struktur yang mudah diduplikasi jika Anda ingin melakukan eksperimen efektivitas iklan.'
      }
    ],
    faq: [
      {
        q: 'Apa bedanya Landing Page dengan Website biasa?',
        a: 'Website biasa memiliki banyak halaman dan informasi. Landing page hanya 1 halaman panjang yang sangat spesifik fokus menjual 1 jenis produk/layanan.'
      },
      {
        q: 'Apakah sudah termasuk pemasangan Pixel / Tag Manager?',
        a: 'Ya, kami akan memasangkan kode tracking dari platform iklan Anda secara gratis.'
      }
    ]
  },
  {
    slug: 'optimasi-seo',
    title: 'Optimasi SEO Dasar',
    category: 'Growth & Traffic',
    icon: 'M19 14l-7 7m0 0l-7-7m7 7V3',
    shortDesc: 'Struktur website yang dirancang agar mudah ditemukan di mesin pencari.',
    heroHeadline: 'Jangan Biarkan Website Anda Menjadi "Pulau Kosong" di Antara Jutaan Situs Lainnya',
    heroDesc: 'Website yang bagus tidak ada artinya jika tidak ada yang mengunjunginya. Dengan layanan Optimasi SEO Dasar, kami memastikan fondasi teknis website Anda disukai oleh algoritma Google.',
    whyImportant: [
      'Traffic organik (SEO) adalah trafik berkualitas terbaik secara jangka panjang, karena orang datang saat mereka benar-benar sedang mencari solusi.',
      'Hemat biaya iklan. Jika Anda peringkat pertama di Google secara organik, kunjungan tersebut 100% gratis.',
      'Membangun otoritas industri. Website di halaman pertama otomatis dianggap sebagai "Pakar" di bidangnya.'
    ],
    features: [
      {
        title: 'Technical SEO Audit & Fix',
        desc: 'Kami memperbaiki kecepatan halaman (Core Web Vitals), struktur heading (H1-H6), dan XML Sitemap.'
      },
      {
        title: 'Riset Kata Kunci Dasar',
        desc: 'Menemukan kata kunci dengan persaingan rendah namun pencarian yang stabil di bisnis Anda.'
      },
      {
        title: 'Optimasi Meta Tags & Image Alt',
        desc: 'Merapikan seluruh deskripsi halaman agar menggiurkan saat muncul di hasil pencarian Google.'
      }
    ],
    faq: [
      {
        q: 'Berapa lama sampai website saya muncul di halaman pertama?',
        a: 'SEO butuh waktu. Optimasi dasar ini menata fondasi. Umumnya perubahan peringkat organik mulai terlihat di bulan ke-2 hingga ke-4.'
      },
      {
        q: 'Apakah ada jaminan peringkat 1?',
        a: 'Tidak ada agensi kredibel yang berani menjamin posisi mutlak di Google karena algoritma berubah ratusan kali per tahun. Kami menjamin implementasi best-practices yang terbukti berhasil sejauh ini.'
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(s => s.slug === slug);
}
