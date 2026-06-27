import React, { useState, useEffect } from 'react'

const PROJETOS_DATA = [
  {
    id: 1,
    title: "Casa Brise",
    category: "residencial",
    categoryLabel: "Residencial",
    year: "2023",
    img: "assets/images/casa_brise.png",
    alt: "Fotografia de villa minimalista de concreto, Casa Brise."
  },
  {
    id: 2,
    title: "Monolith HQ",
    category: "comercial",
    categoryLabel: "Comercial",
    year: "2022",
    img: "assets/images/monolith_hq.png",
    alt: "Sede comercial minimalista, Monolith HQ."
  },
  {
    id: 3,
    title: "Loft Minimalista",
    category: "interiores",
    categoryLabel: "Interiores",
    year: "2024",
    img: "assets/images/minimal_loft.png",
    alt: "Design de interiores do Minimal Loft."
  },
  {
    id: 4,
    title: "Residência Cume",
    category: "residencial",
    categoryLabel: "Residencial",
    year: "2024",
    img: "assets/images/residencia_cume.png",
    alt: "Residência Cume"
  },
  {
    id: 5,
    title: "Pavilhão Sombra",
    category: "comercial",
    categoryLabel: "Comercial",
    year: "2025",
    img: "assets/images/pavilhao_sombra.png",
    alt: "Pavilhão Sombra"
  },
  {
    id: 6,
    title: "Galeria Origami",
    category: "interiores",
    categoryLabel: "Interiores",
    year: "2023",
    img: "assets/images/galeria_origami.png",
    alt: "Galeria Origami"
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
    <main className="pt-32 min-h-screen">
      {/* Cabeçalho da Página */}
      <section className="px-margin-desktop py-12">
        <div className="max-w-4xl">
          <p className="font-label-caps text-primary mb-4 tracking-[0.3em] uppercase">Nosso Portfólio</p>
          <h1 className="font-display-xl text-5xl md:text-7xl leading-tight mb-8">
            Marcas no espaço,<br/><span class="italic font-normal text-secondary">esculpidas no tempo</span>
          </h1>
        </div>
      </section>

      {/* Filtros de Projetos Nítidos */}
      <section className="px-margin-desktop mb-12">
        <div className="flex flex-wrap gap-4 border-b border-outline-variant pb-6">
          {['all', 'residencial', 'comercial', 'interiores'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-label-caps tracking-wider uppercase transition-colors ${
                activeCategory === cat
                  ? 'text-primary border-b border-primary pb-1'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              {cat === 'all' ? 'Todos' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grade de Projetos */}
      <section className="px-margin-desktop pb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card group scroll-reveal block" 
              style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                <img 
                  className="hover-img-zoom w-full h-full object-cover" 
                  alt={project.alt} 
                  src={project.img}
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-label-caps text-primary text-[10px] mb-2 block uppercase">{project.categoryLabel}</span>
                  <h4 className="font-headline-lg text-body-lg font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                </div>
                <span className="font-mono-label text-secondary">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
