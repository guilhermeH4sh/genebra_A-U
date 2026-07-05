import React, { useEffect } from 'react'
import ScopeArchitect from '../components/ScopeArchitect.jsx'

export default function Contato() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="pt-32">
      {/* Cabeçalho da Página */}
      <section className="px-margin-desktop py-12">
        <div className="max-w-4xl">
          <p className="font-label-caps text-primary mb-4 tracking-[0.3em] uppercase">Inicie uma Conversa</p>
          <h1 className="font-display-xl text-5xl md:text-7xl leading-tight mb-8">
            Pronto para dar forma<br/><span className="italic font-normal text-secondary">ao seu novo espaço?</span>
          </h1>
        </div>
      </section>

      {/* Cartões de Contato Rápidos em Grid */}
      <section className="px-margin-desktop pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-outline-variant py-10">
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-primary text-3xl">mail</span>
            <div>
              <span className="text-[9px] text-secondary block uppercase font-mono-label">E-mail Comercial</span>
              <a className="font-body-md hover:text-primary transition-colors text-on-background" href="mailto:contato@genebra.arq.br">
                contato@genebra.arq.br
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
            <div>
              <span className="text-[9px] text-secondary block uppercase font-mono-label">Estúdio Principal</span>
              <span className="font-body-md text-on-background text-sm">Av. Brig. Faria Lima, 3477 - São Paulo - SP</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
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

      {/* Seção Principal: Simulador e Calculadora de Viabilidade ScopeArchitect */}
      <section className="px-margin-desktop pb-section-gap pt-12 scroll-reveal">
        <div className="mb-12">
          <span className="font-mono-label text-primary block mb-2">ESTUDO DE CASO E VIABILIDADE</span>
          <h2 className="font-display-xl text-3xl md:text-5xl uppercase">Configurar Projeto Preliminar</h2>
          <p className="text-secondary text-body-md mt-2 max-w-2xl">
            Ajuste a maquete digital interativa abaixo. Nossos sistemas calculam as estimativas de investimento e complexidade técnica em tempo real.
          </p>
        </div>
        
        <ScopeArchitect onFormSubmit={(data) => {
          console.log("Briefing de projeto recebido com sucesso:", data)
        }} />
      </section>
    </main>
  )
}
