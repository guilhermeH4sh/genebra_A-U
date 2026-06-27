import React, { useEffect } from 'react'

export default function Studio() {
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
      {/* Manifesto do Estúdio */}
      <section className="px-margin-desktop py-12">
        <div className="max-w-4xl">
          <p className="font-label-caps text-primary mb-4 tracking-[0.3em] uppercase">Quem Somos</p>
          <h1 className="font-display-xl text-5xl md:text-7xl leading-tight mb-8">
            Espaços pautados pela<br/><span className="italic font-normal text-secondary">clareza e verdade material</span>
          </h1>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-section-gap px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-5 scroll-reveal">
          <h2 className="font-label-caps text-primary tracking-[0.2em] mb-6 uppercase">A Fundação</h2>
          <h3 className="font-display-xl text-4xl mb-8">Unindo a precisão técnica e a liberdade poética.</h3>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-between scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <p className="font-body-lg text-body-lg text-secondary mb-6">
            Fundado em 2024, o Genebra surge do desejo de criar uma arquitetura que responda ao excesso do mundo contemporâneo. Diante do ruído, escolhemos a sobriedade. Diante da decoração artificial, celebramos a textura honesta do concreto, do metal, da pedra e da madeira.
          </p>
          <p className="font-body-lg text-body-lg text-secondary">
            Nossa prática engloba projetos residenciais de alto padrão, edifícios comerciais icônicos e design de interiores refinados, mantendo sempre a mesma busca incessante por proporções ideais e pela entrada precisa de luz natural.
          </p>
        </div>
      </section>

      {/* Filosofia & Princípios em Grafite */}
      <section className="bg-surface-container-low py-section-gap px-margin-desktop border-y border-outline-variant">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="font-label-caps text-primary tracking-[0.3em] mb-4 uppercase">Valores Primordiais</h2>
            <h3 className="font-display-xl text-4xl">Como moldamos a nossa prática</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Princípio 1 */}
            <div className="p-8 border border-outline-variant bg-surface scroll-reveal">
              <span className="font-mono-label text-primary block mb-4">01 / SUBTRAÇÃO</span>
              <h4 className="font-headline-lg text-2xl mb-4">Essencialismo</h4>
              <p className="text-secondary">Eliminamos tudo aquilo que compete com a essência do espaço. Cada linha possui uma função estrutural ou poética explícita.</p>
            </div>
            {/* Princípio 2 */}
            <div className="p-8 border border-outline-variant bg-surface scroll-reveal" style={{ transitionDelay: '0.2s' }}>
              <span className="font-mono-label text-primary block mb-4">02 / LUZ E SOMBRA</span>
              <h4 className="font-headline-lg text-2xl mb-4">Atmosfera</h4>
              <p className="text-secondary">Trabalhamos a luz como um material tangível. A luz esculpe os volumes internos e cria atmosferas que se transformam ao longo do dia.</p>
            </div>
            {/* Princípio 3 */}
            <div className="p-8 border border-outline-variant bg-surface scroll-reveal" style={{ transitionDelay: '0.4s' }}>
              <span className="font-mono-label text-primary block mb-4">03 / VERDADE</span>
              <h4 className="font-headline-lg text-2xl mb-4">Honestidade Material</h4>
              <p className="text-secondary">Os materiais são aplicados em seu estado mais autêntico. Não escondemos imperfeições naturais, nós as valorizamos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prêmios & Reconhecimento */}
      <section className="py-section-gap px-margin-desktop">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-label-caps text-primary tracking-[0.2em] mb-12 text-center uppercase">Reconhecimento</h2>
          <div className="divide-y divide-outline-variant">
            <div className="py-6 flex justify-between items-center scroll-reveal">
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">trophy</span>
                <div>
                  <h4 className="font-headline-lg text-xl text-on-background">Prêmio de Arquitetura Contemporânea</h4>
                  <p className="text-sm text-secondary">Categoria Edifício Residencial — Casa Brise</p>
                </div>
              </div>
              <span className="font-mono-label text-primary">2025</span>
            </div>
            <div className="py-6 flex justify-between items-center scroll-reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
                <div>
                  <h4 className="font-headline-lg text-xl text-on-background">Bienal de Arquitetura Minimalista</h4>
                  <p className="text-sm text-secondary">Destaque em Design de Interiores — Loft Minimalista</p>
                </div>
              </div>
              <span className="font-mono-label text-primary">2024</span>
            </div>
            <div className="py-6 flex justify-between items-center scroll-reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">military_tech</span>
                <div>
                  <h4 className="font-headline-lg text-xl text-on-background">Prêmio Green Design Internacional</h4>
                  <p className="text-sm text-secondary">Sustentabilidade e Estruturas de Vanguarda — Monolith HQ</p>
                </div>
              </div>
              <span className="font-mono-label text-primary">2023</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
