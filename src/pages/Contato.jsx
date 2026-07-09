import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contato() {
  const mainRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. ENTRADA DO CABEÇALHO HERO
      const tl = gsap.timeline()
      tl.fromTo('.contato-header-subtitle',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      tl.fromTo('.contato-header-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: 0.1 },
        '-=0.6'
      )

      // 2. STAGGER DOS CARTÕES DE CONTATO
      tl.fromTo('.contact-card-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
        '-=0.5'
      )

    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="pt-32 min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="blueprint-grid-bg opacity-30 pointer-events-none"></div>

      {/* Cabeçalho da Página */}
      <section className="px-margin-mobile md:px-margin-desktop py-12 relative z-10">
        <div className="max-w-4xl">
          <p className="contato-header-subtitle font-label-caps text-primary mb-4 tracking-[0.3em] uppercase opacity-0">Inicie uma Conversa</p>
          <h1 className="contato-header-title font-display-xl text-4xl md:text-7xl leading-tight mb-8 opacity-0">
            Pronto para dar forma<br/><span className="font-normal text-secondary">ao seu novo espaço?</span>
          </h1>
        </div>
      </section>

      {/* Cartões de Contato Rápidos em Grid */}
      <section className="px-margin-mobile md:px-margin-desktop pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card E-mail */}
          <a 
            href="mailto:contato@genebra.arq.br"
            className="contact-card-item group block p-8 border border-outline-variant/30 bg-surface-container-low/40 backdrop-blur-md hover:border-primary/40 hover:bg-surface-container-low/80 transition-all duration-500 opacity-0 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
            <div className="flex items-center gap-5 mb-4">
              <div className="w-12 h-12 flex items-center justify-center border border-outline-variant/40 group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <span className="text-[10px] text-secondary group-hover:text-primary tracking-[0.2em] uppercase font-mono-label transition-colors duration-300">E-mail Comercial</span>
            </div>
            <span className="font-serif text-lg md:text-xl text-on-background group-hover:translate-x-1.5 block transition-transform duration-300">
              contato@genebra.arq.br
            </span>
          </a>

          {/* Card Endereço */}
          <div 
            className="contact-card-item group p-8 border border-outline-variant/30 bg-surface-container-low/40 backdrop-blur-md hover:border-primary/40 hover:bg-surface-container-low/80 transition-all duration-500 opacity-0 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
            <div className="flex items-center gap-5 mb-4">
              <div className="w-12 h-12 flex items-center justify-center border border-outline-variant/40 group-hover:text-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <span className="text-[10px] text-secondary tracking-[0.2em] uppercase font-mono-label">Estúdio Principal</span>
            </div>
            <span className="font-serif text-lg md:text-xl text-on-background block">
              Av. Brig. Faria Lima, 3477 - SP
            </span>
          </div>

          {/* Card Telefone */}
          <a 
            href="tel:+5599999999999"
            className="contact-card-item group block p-8 border border-outline-variant/30 bg-surface-container-low/40 backdrop-blur-md hover:border-primary/40 hover:bg-surface-container-low/80 transition-all duration-500 opacity-0 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
            <div className="flex items-center gap-5 mb-4">
              <div className="w-12 h-12 flex items-center justify-center border border-outline-variant/40 group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <span className="text-[10px] text-secondary group-hover:text-primary tracking-[0.2em] uppercase font-mono-label transition-colors duration-300">Telefone</span>
            </div>
            <span className="font-serif text-lg md:text-xl text-on-background group-hover:translate-x-1.5 block transition-transform duration-300">
              +55 99999-9999
            </span>
          </a>

        </div>
      </section>
    </main>
  )
}
