'use client'
import { useEffect } from 'react'

export default function GoogleTranslate() {
  useEffect(() => {
    // Only add the script if it doesn't exist
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script')
      script.id = 'google-translate-script'
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)

      // @ts-expect-error Types for Google Translate are not installed
      window.googleTranslateElementInit = () => {
        // @ts-expect-error Types for Google Translate are not installed
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'id',
            includedLanguages: 'en,id',
            autoDisplay: false,
          },
          'google_translate_element'
        )
      }
    }
  }, [])

  return (
    <div id="google_translate_element" style={{ display: 'none', position: 'absolute', top: 0, left: 0, zIndex: -9999 }}></div>
  )
}
