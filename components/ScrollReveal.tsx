'use client'
import { useEffect, useRef, useState, ElementType } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'span'
  style?: React.CSSProperties
}

export default function ScrollReveal({ children, className = '', delay = 0, as = 'div', style = {} }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (domRef.current) observer.unobserve(domRef.current)
          }
        })
      },
      {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1,
      }
    )

    if (domRef.current) observer.observe(domRef.current)
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current)
    }
  }, [])

  const Tag = as as ElementType

  return (
    <Tag
      ref={domRef}
      className={`transition-all duration-[800ms] ease-out ${as === 'span' ? 'inline-block' : 'block'} transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  )
}
