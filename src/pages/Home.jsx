import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlueprintSlider from '../components/BlueprintSlider.jsx'

const FEATURED_PROJECT = {
  title: "Casa Brise",
  category: "residencial",
  categoryLabel: "Residencial",
  img: "assets/images/casa_brise.png",
  alt: "Fotografia de villa minimalista de concreto, Casa Brise."
}

export default function Home() {
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
    <main className="pt-20">
      {/* Seção Hero */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center overflow-hidden">
        <div className="relative z-10 text-center px-margin-mobile md:px-0">
          <p className="font-label-caps text-primary mb-6 tracking-[0.4em] uppercase animate-fadeIn">
            Uma Nova Linguagem da Forma
          </p>
          <h1 className="font-display-xl text-display-xl md:text-[120px] leading-none mb-12 tracking-tight animate-fadeInUp">
            ESCULPINDO O<br/><span className="italic font-normal text-secondary">SILÊNCIO</span>
          </h1>
          <div className="animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            <Link className="inline-flex items-center gap-4 group" to="/projetos">
              <span className="font-label-caps text-on-background border-b border-on-background/30 pb-2 group-hover:border-primary transition-all">
                Explorar Portfólio
              </span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>
        {/* Hero Bottom Stats */}
        <div className="absolute bottom-margin-desktop left-margin-desktop hidden lg:flex flex-col gap-2">
          <span className="font-mono-label text-secondary">FUNDADO EM 2024</span>
          <span className="font-mono-label text-secondary">SÃO PAULO / LONDRES</span>
        </div>
      </section>

      {/* Seção Filosofia (Estúdio) */}
      <section className="py-section-gap px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
        <div className="md:col-span-12 mb-12">
          <h2 className="font-label-caps text-primary tracking-[0.3em] uppercase">Filosofia</h2>
        </div>
        <div className="md:col-span-7 scroll-reveal">
          <h3 className="font-display-xl text-headline-lg md:text-[64px] leading-tight mb-8">
            Menos não é mais. <br/>
            <span className="text-secondary">Menos é o suficiente.</span>
          </h3>
        </div>
        <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <p className="font-body-lg text-body-lg text-secondary">
            Acreditamos que a arquitetura é a arte de subtrair o desnecessário até restar apenas o essencial. O espaço não é um vazio a ser preenchido, mas um material a ser esculpido.
          </p>
          <div className="mt-10 pt-10 border-t border-outline-variant">
            <span className="font-mono-label block mb-2 text-primary">01 — PRINCÍPIO</span>
            <p className="font-body-md text-on-background italic">"A qualidade de vida é determinada pela qualidade da luz que habita os nossos espaços."</p>
          </div>
          <Link to="/studio" className="mt-8 inline-flex items-center gap-2 group text-primary font-label-caps uppercase hover:text-on-background transition-colors">
            <span>Conheça o Estúdio</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
          </Link>
        </div>
      </section>

      {/* Seção Destaque Interativo */}
      <section className="px-margin-desktop pb-section-gap scroll-reveal">
        <div className="mb-12">
          <span className="font-mono-label text-primary block mb-2">02 — INTERATIVIDADE</span>
          <h2 className="font-display-xl text-3xl md:text-5xl uppercase">Estrutura Revelada</h2>
          <p className="text-secondary text-body-md mt-2 max-w-xl">
            Arraste o divisor sobre a obra em destaque para alternar entre a volumetria estrutural (desenho CAD) e a fotografia finalizada.
          </p>
        </div>
        <BlueprintSlider project={FEATURED_PROJECT} />
      </section>

      {/* Destaques do Portfólio */}
      <section className="px-margin-desktop pb-section-gap">
        <div className="flex justify-between items-end mb-20">
          <h2 className="font-display-xl text-headline-lg">Obras Selecionadas</h2>
          <Link to="/projetos" className="font-label-caps text-primary border-b border-primary/30 pb-2 hover:border-primary transition-all">
            Ver Todos
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Projeto 1 */}
          <Link to="/projetos" className="project-card group scroll-reveal block">
            <div className="aspect-[3/4] overflow-hidden mb-6 relative">
              <img className="hover-img-zoom w-full h-full object-cover" alt="Fotografia de villa minimalista de concreto, Casa Brise." src="assets/images/casa_brise.png"/>
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="font-label-caps text-primary text-[10px] mb-2 block uppercase">Residencial</span>
                <h4 className="font-headline-lg text-body-lg font-bold group-hover:text-primary transition-colors">Casa Brise</h4>
              </div>
              <span className="font-mono-label text-secondary">2023</span>
            </div>
          </Link>
          {/* Projeto 2 */}
          <Link to="/projetos" className="project-card group mt-12 scroll-reveal block" style={{ transitionDelay: '0.15s' }}>
            <div className="aspect-[3/4] overflow-hidden mb-6 relative">
              <img className="hover-img-zoom w-full h-full object-cover" alt="Sede comercial minimalista, Monolith HQ." src="assets/images/monolith_hq.png"/>
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="font-label-caps text-primary text-[10px] mb-2 block uppercase">Comercial</span>
                <h4 className="font-headline-lg text-body-lg font-bold group-hover:text-primary transition-colors">Monolith HQ</h4>
              </div>
              <span className="font-mono-label text-secondary">2022</span>
            </div>
          </Link>
          {/* Projeto 3 */}
          <Link to="/projetos" className="project-card group scroll-reveal block" style={{ transitionDelay: '0.3s' }}>
            <div className="aspect-[3/4] overflow-hidden mb-6 relative">
              <img className="hover-img-zoom w-full h-full object-cover" alt="Design de interiores do Minimal Loft." src="assets/images/minimal_loft.png"/>
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="font-label-caps text-primary text-[10px] mb-2 block uppercase">Interiores</span>
                <h4 className="font-headline-lg text-body-lg font-bold group-hover:text-primary transition-colors">Loft Minimalista</h4>
              </div>
              <span className="font-mono-label text-secondary">2024</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-section-gap px-margin-desktop border-b border-outline-variant">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <span className="material-symbols-outlined text-primary text-5xl mb-8">format_quote</span>
          <blockquote className="font-headline-lg text-headline-lg-mobile md:text-headline-lg italic mb-12 text-on-background">
            "A Genebra não constrói apenas estruturas; eles curam experiências. Nossa nova galeria é uma obra-prima de luz e proporção."
          </blockquote>
          <cite className="not-italic">
            <span className="font-label-caps text-on-background block tracking-[0.2em] font-bold">ELARA VANCE</span>
            <span className="font-mono-label text-secondary uppercase">Diretora, Fundação Obsidian</span>
          </cite>
        </div>
      </section>
    </main>
  )
}
