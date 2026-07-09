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
    <main ref={mainRef} className="pt-32 min-h-[80vh] flex flex-col justify-center">
      {/* Cabeçalho da Página */}
      <section className="px-margin-mobile md:px-margin-desktop py-12">
        <div className="max-w-4xl">
          <p className="contato-header-subtitle font-label-caps text-primary mb-4 tracking-[0.3em] uppercase opacity-0">Inicie uma Conversa</p>
          <h1 className="contato-header-title font-display-xl text-4xl md:text-7xl leading-tight mb-8 opacity-0">
            Pronto para dar forma<br/><span className="font-normal text-secondary">ao seu novo espaço?</span>
          </h1>
        </div>
      </section>

      {/* Cartões de Contato Rápidos em Grid */}
      <section className="px-margin-mobile md:px-margin-desktop pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-outline-variant py-10">
          <div className="contact-card-item flex items-center gap-6 opacity-0">
            <span className="material-symbols-outlined text-primary text-3xl">mail</span>
            <div>
              <span className="text-[9px] text-secondary block uppercase font-mono-label">E-mail Comercial</span>
              <a className="font-body-md hover:text-primary transition-colors text-on-background" href="mailto:contato@genebra.arq.br">
                contato@genebra.arq.br
              </a>
            </div>
          </div>
          <div className="contact-card-item flex items-center gap-6 opacity-0">
            <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
            <div>
              <span className="text-[9px] text-secondary block uppercase font-mono-label">Estúdio Principal</span>
              <span className="font-body-md text-on-background text-sm">Av. Brig. Faria Lima, 3477 - São Paulo - SP</span>
            </div>
          </div>
          <div className="contact-card-item flex items-center gap-6 opacity-0">
            <span className="material-symbols-outlined text-primary text-3xl">call</span>
            <div>
              <span className="text-[9px] text-secondary block uppercase font-mono-label">Telefone</span>
              <a className="font-body-md hover:text-primary transition-colors text-on-background" href="tel:+5599999999999">
                +5599999999999
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
