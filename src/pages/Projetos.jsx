import React, { useState, useEffect } from 'react'
import SEO from '../components/SEO.jsx'

const PROJETOS_DATA = [
  {
    id: 1,
    title: "Casa Brise",
    category: "residencial",
    categoryLabel: "Residencial",
    year: "2023",
    img: "assets/images/casa_brise.png",
    alt: "Fotografia da Casa Brise, villa residencial minimalista em concreto aparente e painéis de madeira."
  },
  {
    id: 2,
    title: "Monolith HQ",
    category: "comercial",
    categoryLabel: "Comercial",
    year: "2022",
    img: "assets/images/monolith_hq.png",
    alt: "Fachada monolítica escura do edifício comercial Monolith HQ com arquitetura corporativa autoral."
  },
  {
    id: 3,
    title: "Loft Minimalista",
    category: "interiores",
    categoryLabel: "Interiores",
    year: "2024",
    img: "assets/images/minimal_loft.png",
    alt: "Design de interiores contemporâneo em loft integrado com acabamento em concreto e madeira nobre."
  },
  {
    id: 4,
    title: "Residência Cume",
    category: "residencial",
    categoryLabel: "Residencial",
    year: "2024",
    img: "assets/images/residencia_cume.png",
    alt: "Residência Cume, projeto residencial de alto padrão perfeitamente integrado ao topo da montanha."
  },
  {
    id: 5,
    title: "Pavilhão Sombra",
    category: "comercial",
    categoryLabel: "Comercial",
    year: "2025",
    img: "assets/images/pavilhao_sombra.png",
    alt: "Estrutura contemporânea em vidro e perfis metálicos do Pavilhão Sombra."
  },
  {
    id: 6,
    title: "Galeria Origami",
    category: "interiores",
    categoryLabel: "Interiores",
    year: "2023",
    img: "assets/images/galeria_origami.png",
    alt: "Projeto de arquitetura de interiores com iluminação cênica e forro esculpido em forma de origami."
  }
]

export default function Projetos() {
  const [activeCategory, setActiveCategory] = useState('all')

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

    const timer = setTimeout(() => {
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el)
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [activeCategory])

  const filteredProjects = activeCategory === 'all' 
    ? PROJETOS_DATA 
    : PROJETOS_DATA.filter(p => p.category === activeCategory)

  return (
    <main className="pt-32 min-h-screen relative overflow-hidden">
      <SEO 
        title="Projetos | Genebra Arquitetura Editorial" 
        description="Explore o portfólio autoral de projetos residenciais, comerciais e de interiores desenvolvidos pelo estúdio Genebra em São Paulo."
        path="/#/projetos"
        image="assets/images/casa_brise.png"
      />
      {/* Background blueprint grid */}
      <div className="blueprint-grid-bg opacity-30 pointer-events-none"></div>

      {/* Cabeçalho da Página */}
      <section className="px-margin-mobile md:px-margin-desktop py-12 relative z-10">
        <div className="max-w-4xl">
          <p className="font-label-caps text-primary mb-4 tracking-[0.3em] uppercase">Nosso Portfólio</p>
          <h1 className="font-display-xl text-5xl md:text-7xl leading-tight mb-8">
            Marcas no espaço,<br/><span className="font-normal text-secondary">esculpidas no tempo</span>
          </h1>
        </div>
      </section>

      {/* Filtros de Projetos Nítidos */}
      <section className="px-margin-mobile md:px-margin-desktop mb-16 relative z-10">
        <div className="flex flex-wrap gap-3 md:gap-4 border-b border-outline-variant/30 pb-6">
          {['all', 'residencial', 'comercial', 'interiores'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 font-label-caps text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? 'text-on-primary bg-primary border-primary font-bold shadow-[0_4px_20px_rgba(212,106,67,0.25)]'
                  : 'text-secondary border-outline-variant/50 hover:border-primary/50 hover:text-primary bg-surface-container-low/40'
              }`}
            >
              {cat === 'all' ? 'Todos' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grade de Projetos */}
      <section className="px-margin-mobile md:px-margin-desktop pb-section-gap relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card group scroll-reveal block" 
              style={{ transitionDelay: `${(index % 3) * 0.15}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 relative border border-outline-variant/30">
                <img 
                  className="hover-img-zoom w-full h-full object-cover" 
                  alt={project.alt} 
                  src={project.img}
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <span className="font-label-caps text-primary text-[10px] mb-1.5 block uppercase tracking-[0.15em]">{project.categoryLabel}</span>
                  <h4 className="font-serif text-lg md:text-xl font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h4>
                </div>
                <span className="font-mono-label text-secondary text-xs">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
