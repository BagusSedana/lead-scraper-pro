'use client'
import { useEffect, useState } from 'react'

export default function LanguageSwitcher({ scrolled }: { scrolled: boolean }) {
  const [lang, setLang] = useState('id')

  useEffect(() => {
    // Validasi bahasa saat ini dari cookie
    const checkCookie = () => {
      let isEn = false;
      if (typeof document !== 'undefined') {
        if (document.cookie.includes('googtrans=/id/en') || document.cookie.includes('googtrans=/auto/en')) {
          isEn = true;
        }
      }
      setLang(isEn ? 'en' : 'id')
    }
    
    checkCookie()
  }, [])

  const switchLanguage = (targetLang: 'id' | 'en') => {
    if (targetLang === lang) return
    
    if (targetLang === 'en') {
      document.cookie = "googtrans=/id/en; path=/;";
      document.cookie = "googtrans=/id/en; domain=" + window.location.hostname + "; path=/;";
    } else {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=" + window.location.hostname + "; path=/;";
      
      const hostParts = window.location.hostname.split('.');
      if (hostParts.length >= 2) {
          const mainDomain = '.' + hostParts.slice(-2).join('.');
          document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=" + mainDomain + "; path=/;";
      }
    }
    
    window.location.reload()
  }

  return (
    <div className={`flex items-center gap-0.5 p-1 rounded-full border transition-colors ${scrolled ? 'border-ink-200 bg-ink-50' : 'border-white/20 bg-white/10 backdrop-blur-sm'}`}>
      <button 
        onClick={() => switchLanguage('id')}
        className={`px-3 py-1.5 text-[11px] font-bold rounded-full transition-all tracking-wider ${
          lang === 'id' 
            ? 'bg-blue-primary text-white shadow-sm' 
            : scrolled ? 'text-ink-600 hover:text-ink-900' : 'text-white/70 hover:text-white'
        }`}
      >
        ID
      </button>
      <button 
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1.5 text-[11px] font-bold rounded-full transition-all tracking-wider ${
          lang === 'en' 
            ? 'bg-blue-primary text-white shadow-sm' 
            : scrolled ? 'text-ink-600 hover:text-ink-900' : 'text-white/70 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  )
}
