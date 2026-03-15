'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/data'

export default function CaseStudyHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md shadow-header'
          : 'bg-transparent'
      }`}
    >
      <div className="container-inner px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <div>
            <Link
              href="/"
              className="font-display text-xl text-text hover:text-primary transition-colors duration-200"
            >
              {siteConfig.name}
              <span className="text-primary">.</span>
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <Link
              href="/#work"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200"
            >
              <ArrowLeft size={14} />
              Back to Work
            </Link>
            <Link
              href="/#contact"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
