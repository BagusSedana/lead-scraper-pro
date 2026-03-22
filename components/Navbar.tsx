'use client'
import { useState, useEffect } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-sm border-b border-ink-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <span className={`font-display font-bold text-base tracking-tight transition-colors ${
            scrolled ? 'text-ink-900' : 'text-white'
          }`}>
            bangbisnis
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-ink-600 hover:text-ink-900'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute left-4 right-4 -bottom-1 h-[2px] rounded-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${scrolled ? 'bg-blue-primary' : 'bg-white'}`} />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA & Language */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher scrolled={scrolled} />
          <a
            href="https://wa.me/6287701785344?text=Halo%20bangbisnis%2C%20saya%20ingin%20konsultasi%20gratis."
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 ${
              scrolled
                ? 'bg-blue-primary text-white hover:bg-blue-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-primary/30'
                : 'bg-white text-ink-900 hover:bg-ink-100 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20'
            }`}
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className={`w-5 h-5 ${scrolled ? 'text-ink-900' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className={`w-5 h-5 ${scrolled ? 'text-ink-900' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h10" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-ink-100 pb-4">
          <ul className="px-6 py-2 space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-medium text-ink-600 hover:text-ink-900 border-b border-ink-100 last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-2 flex justify-center">
              <LanguageSwitcher scrolled={true} />
            </li>
            <li className="pt-2">
              <a
                href="https://wa.me/6287701785344?text=Halo%20bangbisnis%2C%20saya%20ingin%20konsultasi%20gratis."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-primary text-white text-sm font-semibold px-4 py-3 rounded-full text-center"
              >
                Konsultasi Gratis
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
