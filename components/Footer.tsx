'use client'

import { Linkedin, Mail } from 'lucide-react'
import { siteConfig, navLinks } from '@/lib/data'

function BehanceIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.109 1.891 0 .253-.018 1.044-.018 1.044h-8.405c.13 2.981 2.028 4.674 4.555 4.674 1.662 0 2.545-.865 2.951-1.433l-1.658-1.117c-.435.613-.995.998-1.951.998-1.446 0-2.436-1.252-2.436-3.022l-.005-.034h9.168c.01.208.017.409.017.614 0 .573-.05 1.111-.143 1.634zM15.898 9.965c.648-.018 1.472-.137 1.472-.137-.656-.318-1.354-.365-1.572-.365-2.128 0-3.042 1.953-3.049 3.312l4.149.004c-.006-.978-.268-2.03-1.002-2.814z" />
    </svg>
  )
}

const socialIcons = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
  { label: 'Behance', href: siteConfig.social.behance, icon: BehanceIcon },
  { label: 'Email', href: siteConfig.social.email, icon: Mail },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-inner px-6 md:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Name + copyright */}
          <div className="text-center md:text-left">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-display text-lg text-text hover:text-primary transition-colors duration-200 mb-1 block"
            >
              {siteConfig.name}
              <span className="text-primary">.</span>
            </button>
            <p className="font-sans text-xs text-text-muted">
              © {currentYear} {siteConfig.fullName} · All rights reserved
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-text-secondary hover:text-primary transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="font-sans text-xs text-text-muted">
            Designed & built with care · Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
