'use client'

import { aboutContent, siteConfig } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-inner">
        <p className="section-label">About Me</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="section-title mb-8">{aboutContent.headline}</h2>
            {aboutContent.bio.map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-base text-text-secondary leading-relaxed mb-5"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl border-2 border-primary/20 translate-x-4 translate-y-4"
              />
              <div className="relative bg-background rounded-3xl overflow-hidden aspect-[4/5] shadow-card">
                <img
                  src="/images/sweta.JPG"
                  alt={`${siteConfig.name} — UX & Product Designer`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-primary text-background rounded-2xl px-5 py-3 shadow-card">
                <div className="font-sans text-xs font-medium opacity-80 mb-0.5">Based in PA</div>
                <div className="font-sans text-sm font-semibold">Open to relocation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
