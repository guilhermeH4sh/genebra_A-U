import React, { useEffect, useRef } from 'react'
import SEO from '../components/SEO.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Studio() {
  const mainRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. MANIFESTO ENTRADA HERO
      const tl = gsap.timeline()
      tl.fromTo('.manifesto-subtitle',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      tl.fromTo('.manifesto-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' },
        '-=0.5'
      )

      // 2. NOSSA HISTÓRIA / FUNDAÇÃO
      gsap.fromTo('.fundacao-left',
        { opacity: 0, x: -30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1.0, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.fundacao-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )

      gsap.fromTo('.fundacao-right',
        { opacity: 0, x: 30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1.0, 
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.fundacao-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )

      // 3. VALORES PRIMORDIAIS
      gsap.fromTo('.valores-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.valores-section',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )

      gsap.fromTo('.valores-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.valores-cards-container',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )

      // 4. RECONHECIMENTO (PRÊMIOS)
      gsap.fromTo('.premio-row',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.premios-list',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )

    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="pt-32 min-h-screen relative overflow-hidden">
      <SEO 
        title="Estúdio | Genebra Arquitetura Editorial" 
        description="Conheça a história, filosofia de essência e princípios fundamentais do estúdio de arquitetura Genebra em São Paulo."
        path="/#/studio"
        image="assets/images/casa_brise.png"
      />
      {/* Background blueprint grid */}
      <div className="blueprint-grid-bg opacity-30 pointer-events-none"></div>

      {/* Manifesto do Estúdio */}
      <section className="px-margin-mobile md:px-margin-desktop py-12 relative z-10">
        <div className="max-w-4xl">
          <p className="manifesto-subtitle font-label-caps text-primary mb-4 tracking-[0.3em] uppercase opacity-0">Quem Somos</p>
          <h1 className="manifesto-title font-display-xl text-5xl md:text-7xl leading-tight mb-8 opacity-0">
            Espaços pautados pela<br/><span className="font-normal text-secondary">clareza e verdade material</span>
          </h1>
        </div>
      </section>

      {/* Nossa História */}
      <section className="fundacao-section py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter relative z-10">
        <div className="fundacao-left lg:col-span-5 opacity-0">
          <h2 className="font-label-caps text-primary tracking-[0.2em] mb-6 uppercase">A Fundação</h2>
          <h3 className="font-display-xl text-4xl mb-8">Unindo a precisão técnica e a liberdade poética.</h3>
        </div>
        <div className="fundacao-right lg:col-span-6 lg:col-start-7 flex flex-col justify-between opacity-0">
          <p className="font-body-lg text-body-lg text-secondary mb-6 leading-relaxed">
            Fundado em 2024, o Genebra surge do desejo de criar uma arquitetura que responda ao excesso do mundo contemporâneo. Diante do ruído, escolhemos a sobriedade. Diante da decoração artificial, celebramos a textura honesta do concreto, do metal, da pedra e da madeira.
          </p>
          <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
            Nossa prática engloba projetos residenciais de alto padrão, edifícios comerciais icônicos e design de interiores refinados, mantendo sempre a mesma busca incessante por proporções ideais e pela entrada precisa de luz natural.
          </p>
        </div>
      </section>

      {/* Filosofia & Princípios em Grafite */}
      <section className="valores-section bg-surface-container-low/40 backdrop-blur-md py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop border-y border-outline-variant/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="valores-title text-center mb-20 opacity-0">
            <h2 className="font-label-caps text-primary tracking-[0.3em] mb-4 uppercase">Valores Primordiais</h2>
            <h3 className="font-display-xl text-4xl">Como moldamos a nossa prática</h3>
          </div>
          
          <div className="valores-cards-container grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Princípio 1 */}
            <div className="valores-card p-8 border border-outline-variant/30 bg-surface/50 backdrop-blur-sm opacity-0 transition-all duration-500 hover:border-primary/40 hover:bg-surface-container-low/60 hover:-translate-y-1">
              <span className="font-mono-label text-primary block mb-4">01 / SUBTRAÇÃO</span>
              <h4 className="font-headline-lg text-2xl mb-4">Essencialismo</h4>
              <p className="text-secondary leading-relaxed">Eliminamos tudo aquilo que compete com a essência do espaço. Cada linha possui uma função estrutural ou poética explícita.</p>
            </div>
            {/* Princípio 2 */}
            <div className="valores-card p-8 border border-outline-variant/30 bg-surface/50 backdrop-blur-sm opacity-0 transition-all duration-500 hover:border-primary/40 hover:bg-surface-container-low/60 hover:-translate-y-1">
              <span className="font-mono-label text-primary block mb-4">02 / LUZ E SOMBRA</span>
              <h4 className="font-headline-lg text-2xl mb-4">Atmosfera</h4>
              <p className="text-secondary leading-relaxed">Trabalhamos a luz como um material tangível. A luz esculpe os volumes internos e cria atmosferas que se transformam ao longo do dia.</p>
            </div>
            {/* Princípio 3 */}
            <div className="valores-card p-8 border border-outline-variant/30 bg-surface/50 backdrop-blur-sm opacity-0 transition-all duration-500 hover:border-primary/40 hover:bg-surface-container-low/60 hover:-translate-y-1">
              <span className="font-mono-label text-primary block mb-4">03 / VERDADE</span>
              <h4 className="font-headline-lg text-2xl mb-4">Honestidade Material</h4>
              <p className="text-secondary leading-relaxed">Os materiais são aplicados em seu estado mais autêntico. Não escondemos imperfeições naturais, nós as valorizamos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prêmios & Reconhecimento */}
      <section className="py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-label-caps text-primary tracking-[0.2em] mb-12 text-center uppercase">Reconhecimento</h2>
          <div className="premios-list divide-y divide-outline-variant/20 border-y border-outline-variant/20">
            
            <div className="premio-row group py-6 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center opacity-0 hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300 shrink-0">trophy</span>
                <div>
                  <h4 className="font-headline-lg text-lg md:text-xl text-on-background group-hover:text-primary transition-colors duration-300">Prêmio de Arquitetura Contemporânea</h4>
                  <p className="text-xs md:text-sm text-secondary">Categoria Edifício Residencial — Casa Brise</p>
                </div>
              </div>
              <span className="font-mono-label text-primary font-bold sm:self-center self-start pl-[44px] sm:pl-0">2025</span>
            </div>

            <div className="premio-row group py-6 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center opacity-0 hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300 shrink-0">workspace_premium</span>
                <div>
                  <h4 className="font-headline-lg text-lg md:text-xl text-on-background group-hover:text-primary transition-colors duration-300">Bienal de Arquitetura Minimalista</h4>
                  <p className="text-xs md:text-sm text-secondary">Destaque em Design de Interiores — Loft Minimalista</p>
                </div>
              </div>
              <span className="font-mono-label text-primary font-bold sm:self-center self-start pl-[44px] sm:pl-0">2024</span>
            </div>

            <div className="premio-row group py-6 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center opacity-0 hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300 shrink-0">military_tech</span>
                <div>
                  <h4 className="font-headline-lg text-lg md:text-xl text-on-background group-hover:text-primary transition-colors duration-300">Prêmio Green Design Internacional</h4>
                  <p className="text-xs md:text-sm text-secondary">Sustentabilidade e Estruturas de Vanguarda — Monolith HQ</p>
                </div>
              </div>
              <span className="font-mono-label text-primary font-bold sm:self-center self-start pl-[44px] sm:pl-0">2023</span>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
