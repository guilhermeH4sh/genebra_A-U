import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import MagneticButton from '../components/MagneticButton.jsx'
import SEO from '../components/SEO.jsx'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    id: '01',
    title: 'Casa Brise',
    category: 'Residencial',
    year: '2023',
    img: 'assets/images/casa_brise.png',
    alt: 'Villa minimalista de concreto com brises de madeira.'
  },
  {
    id: '02',
    title: 'Monolith HQ',
    category: 'Comercial',
    year: '2022',
    img: 'assets/images/monolith_hq.png',
    alt: 'Sede comercial monolítica revestida em pedra escura.'
  },
  {
    id: '03',
    title: 'Loft Minimalista',
    category: 'Interiores',
    year: '2024',
    img: 'assets/images/minimal_loft.png',
    alt: 'Apartamento de conceito aberto com concreto e madeira clara.'
  },
  {
    id: '04',
    title: 'Residência Cume',
    category: 'Residencial',
    year: '2024',
    img: 'assets/images/residencia_cume.png',
    alt: 'Residência integrada ao topo de uma colina.'
  },
  {
    id: '05',
    title: 'Pavilhão Sombra',
    category: 'Comercial',
    year: '2025',
    img: 'assets/images/pavilhao_sombra.png',
    alt: 'Espaço multifuncional com estrutura metálica e vidro.'
  },
  {
    id: '06',
    title: 'Galeria Origami',
    category: 'Interiores',
    year: '2023',
    img: 'assets/images/galeria_origami.png',
    alt: 'Galeria de arte contemporânea com forro facetado.'
  }
]

const SERVICES = [
  {
    num: '01',
    title: 'Projeto Arquitetônico',
    desc: 'Criação de residências unifamiliares e edifícios comerciais com forte identidade autoral. Unimos estética refinada, funcionalidade e harmonia com o entorno para dar forma a espaços de convívio marcantes.'
  },
  {
    num: '02',
    title: 'Design de Interiores',
    desc: 'Curadoria de texturas, materiais e mobiliário sob medida para criar atmosferas sofisticadas e acolhedoras. Cada detalhe é desenhado para dialogar perfeitamente com a volumetria da arquitetura.'
  },
  {
    num: '03',
    title: 'Consultoria e Viabilidade',
    desc: 'Análise técnica de terrenos, códigos de obras locais e desenvolvimento de estudos preliminares para garantir que a visão arquitetônica seja viável, eficiente e sustentável desde o primeiro traço.'
  },
  {
    num: '04',
    title: 'Acompanhamento Estético',
    desc: 'Supervisão técnica detalhada durante as fases críticas de acabamento e detalhamento da obra. Garantimos que a execução de revestimentos, iluminação e marcenaria respeite rigorosamente o projeto.'
  }
]

// 1. SEÇÃO HERO - MEMOIZADA PARA EVITAR COMPORTAMENTO INESPERADO DO SPLITTYPE COM RE-RENDERS
const HeroSection = React.memo(() => {
  const heroImgContainerRef = useRef(null)
  const heroImgRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const heroImg = heroImgRef.current
    if (!heroImg) return

    // 1. Apenas a animação no scroll (Parallax)
    const parallaxTrigger = gsap.to(heroImg, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: heroImgContainerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })

    return () => {
      parallaxTrigger.scrollTrigger?.kill()
      parallaxTrigger.kill()
    }
  }, [])

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between px-margin-mobile md:px-margin-desktop pt-32 pb-16">
      <div>{/* Spacer */}</div>

      <div className="max-w-[90%] md:max-w-[80%] z-10">
        <div>
          <h1 
            className="text-huge font-bold uppercase text-on-background select-none leading-none"
          >
            Arquitetura que<br />escuta o espaço.
          </h1>
        </div>
        <p 
          className="mt-8 font-body-lg text-secondary text-lg md:text-xl max-w-xl leading-relaxed"
        >
          Projetamos silêncio, proporção e luz natural. Uma abordagem editorial focada no essencial do morar contemporâneo.
        </p>
      </div>

      {/* Parallax Image Hero */}
      <div className="absolute top-0 right-0 w-[45%] h-full opacity-10 md:opacity-35 pointer-events-none select-none overflow-hidden" ref={heroImgContainerRef}>
        <img 
          ref={heroImgRef}
          src="assets/images/residencia_cume.png" 
          alt="Desenho técnico de fachada integrada à montanha"
          className="w-full h-[120%] object-cover"
        />
      </div>

      {/* Scroll Indicator */}
      <div 
        className="hero-scroll-indicator flex items-center gap-4 select-none cursor-pointer"
        data-cursor="scroll"
        data-cursor-label="GO DOWN"
        onClick={() => {
          if (window.lenis) window.lenis.scrollTo('#manifesto', { duration: 1.2 })
        }}
      >
        <div className="w-[1px] h-12 bg-primary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-on-background animate-pulse"></div>
        </div>
        <span className="font-mono-label text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors">
          Scroll para explorar
        </span>
      </div>
    </section>
  )
})

// 2. SEÇÃO MANIFESTO - MEMOIZADA PARA EVITAR RE-RENDER CONFLICTS
const ManifestoSection = React.memo(() => {
  const manifestoTextRef = useRef(null)
  const statsSectionRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (manifestoTextRef.current && !prefersReducedMotion) {
      const splitManifesto = new SplitType(manifestoTextRef.current, { types: 'lines' })
      
      splitManifesto.lines.forEach((line) => {
        const wrapper = document.createElement('div')
        wrapper.className = 'split-line'
        line.parentNode.insertBefore(wrapper, line)
        wrapper.appendChild(line)
      })

      gsap.fromTo(splitManifesto.lines,
        { y: '105%' },
        {
          y: '0%',
          duration: 1.2,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: manifestoTextRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )
    }

    if (statsSectionRef.current) {
      const stats = [
        { selector: '#stat-years', end: 12 },
        { selector: '#stat-projects', end: 40 },
        { selector: '#stat-awards', end: 5 }
      ]

      const countTl = gsap.timeline({
        scrollTrigger: {
          trigger: statsSectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })

      stats.forEach((stat) => {
        const counterObj = { value: 0 }
        countTl.to(counterObj, {
          value: stat.end,
          duration: prefersReducedMotion ? 0.2 : 2.0,
          ease: 'power3.out',
          onUpdate: () => {
            const el = document.querySelector(stat.selector)
            if (el) el.innerText = Math.floor(counterObj.value)
          }
        }, 0)
      })
    }
  }, [])

  return (
    <section id="manifesto" className="px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-outline-variant relative">
      <div className="lg:col-span-4">
        <span className="font-mono-label text-xs text-primary uppercase tracking-[0.25em]">01 // MANIFESTO</span>
      </div>
      
      <div className="lg:col-span-8 space-y-12">
        <h3 
          ref={manifestoTextRef} 
          className="font-display-xl text-3xl md:text-5xl leading-tight font-light text-on-background"
        >
          Projetar não é preencher o vazio, mas esculpir a luz. Criamos estruturas silenciosas que respeitam a passagem do tempo, onde a matéria se submete à proporção e ao silêncio.
        </h3>
        
        {/* Estatísticas com Count-up */}
        <div ref={statsSectionRef} className="grid grid-cols-3 gap-8 pt-12 border-t border-outline-variant select-none">
          <div>
            <span id="stat-years" className="font-display-xl text-4xl md:text-6xl font-bold text-primary">0</span>
            <p className="font-mono-label text-[10px] md:text-xs text-secondary uppercase mt-2">Anos de Estúdio</p>
          </div>
          <div>
            <span id="stat-projects" className="font-display-xl text-4xl md:text-6xl font-bold text-primary">0</span>
            <p className="font-mono-label text-[10px] md:text-xs text-secondary uppercase mt-2">Obras Concluídas</p>
          </div>
          <div>
            <span id="stat-awards" className="font-display-xl text-4xl md:text-6xl font-bold text-primary">0</span>
            <p className="font-mono-label text-[10px] md:text-xs text-secondary uppercase mt-2">Prêmios Nacionais</p>
          </div>
        </div>
      </div>
    </section>
  )
})

// 3. SEÇÃO DEPOIMENTO - MEMOIZADA
const QuoteSection = React.memo(() => {
  useEffect(() => {
    gsap.fromTo('.depoimento-container',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.depoimento-container',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, [])

  return (
    <section className="bg-[#050505] py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop border-t border-outline-variant flex flex-col items-center">
      <div className="depoimento-container opacity-0 max-w-4xl text-center space-y-10">
        <span className="material-symbols-outlined text-primary text-5xl select-none">
          format_quote
        </span>
        <blockquote className="font-display-xl text-2xl md:text-4xl italic text-on-background leading-relaxed">
          "A equipe da Genebra não desenha apenas estruturas; eles materializam silêncio e luz em forma de espaço. Nossa nova galeria é um manifesto à proporção contemporânea."
        </blockquote>
        <div className="space-y-1">
          <cite className="font-mono-label text-xs uppercase tracking-widest text-on-background not-italic font-bold">
            ELARA VANCE
          </cite>
          <p className="font-mono-label text-[10px] text-secondary uppercase tracking-wider">
            Diretora Geral, Fundação Obsidian
          </p>
        </div>
      </div>
    </section>
  )
})

export default function Home() {
  const mainRef = useRef(null)
  
  // Referências para o scroll horizontal (Portfolio)
  const portfolioSectionRef = useRef(null)
  const portfolioTrackRef = useRef(null)
  
  // Imagem de preview que segue o cursor nos projetos
  const [activePreviewImg, setActivePreviewImg] = useState('')
  const [previewActive, setPreviewActive] = useState(false)
  const [activeModalProject, setActiveModalProject] = useState(null)
  const previewRef = useRef(null)

  // Accordion de Serviços
  const [activeService, setActiveService] = useState(0)
  const serviceContentRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // PIN E SCROLL HORIZONTAL (PORTFÓLIO)
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        if (portfolioTrackRef.current && portfolioSectionRef.current) {
          const track = portfolioTrackRef.current
          const scrollWidth = track.scrollWidth - window.innerWidth

          gsap.to(track, {
            x: -scrollWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: portfolioSectionRef.current,
              pin: true,
              scrub: 0.8,
              start: 'top top',
              end: () => `+=${scrollWidth}`,
              invalidateOnRefresh: true
            }
          })
        }
      })

      mm.add('(max-width: 767px)', () => {
        // Revelações simples verticais no mobile
        gsap.utils.toArray('.mobile-project-reveal').forEach((item) => {
          gsap.fromTo(item,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1.0,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
              }
            }
          )
        })
      })

      // CTA / CONTATO REVEAL
      gsap.fromTo('.cta-title-reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )

    }, mainRef)

    return () => ctx.revert()
  }, [])

  // Gerenciar as animações do acordeão de Serviços via GSAP
  useEffect(() => {
    SERVICES.forEach((_, index) => {
      const element = serviceContentRefs.current[index]
      if (!element) return

      if (activeService === index) {
        gsap.to(element, {
          height: 'auto',
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      } else {
        gsap.to(element, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      }
    })
  }, [activeService])

  // Gerenciar abertura/fechamento do Modal Lightbox e pausar Lenis
  useEffect(() => {
    if (activeModalProject) {
      if (window.lenis) window.lenis.stop()
      
      // Animação de entrada do Lightbox
      gsap.fromTo('.lightbox-image',
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, ease: 'power3.out', overwrite: 'auto' }
      )
    } else {
      if (window.lenis) window.lenis.start()
    }
  }, [activeModalProject])

  // Inicializar o posicionamento e escala iniciais da prévia de imagem
  useEffect(() => {
    if (previewRef.current) {
      gsap.set(previewRef.current, { xPercent: -50, yPercent: -50, scale: 0.8, opacity: 0 })
    }
  }, [])

  // Controlar a exibição da prévia (escala e fade) via GSAP
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || window.innerWidth < 768) return

    const preview = previewRef.current
    if (!preview) return

    if (previewActive) {
      gsap.to(preview, {
        opacity: 1,
        scale: 1,
        duration: 0.2, // Acelera o fade-in do preview
        ease: 'power1.out',
        overwrite: 'auto'
      })
    } else {
      gsap.to(preview, {
        opacity: 0,
        scale: 0.8,
        duration: 0.15, // Acelera o fade-out do preview
        ease: 'power1.in',
        overwrite: 'auto'
      })
    }
  }, [previewActive])

  // Lógica do preview de imagem seguindo o cursor continuamente (Desktop)
  const handleMouseMove = (e) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || window.innerWidth < 768) return

    if (previewRef.current) {
      gsap.to(previewRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.12, // Reduz o lag do seguidor de 0.35s para 0.12s
        ease: 'power1.out',
        overwrite: 'auto'
      })
    }
  }

  return (
    <main ref={mainRef} className="bg-background" onMouseMove={handleMouseMove}>
      <SEO 
        title="Genebra | Arquitetura Editorial & Design Minimalista" 
        description="Estúdio autoral de arquitetura contemporânea e design de interiores de luxo em São Paulo. Projetos residenciais, comerciais e de interiores com iluminação natural e sobriedade estética."
        path="/"
        image="assets/images/casa_brise.png"
      />
      
      {/* 1. SEÇÃO HERO */}
      <HeroSection />

      {/* 2. SEÇÃO MANIFESTO / SOBRE */}
      <ManifestoSection />

      {/* 3. SEÇÃO PROJETOS / PORTFÓLIO (SCROLL HORIZONTAL NO DESKTOP) */}
      <section 
        ref={portfolioSectionRef} 
        id="portfolio" 
        className="relative bg-[#050505] overflow-hidden border-t border-outline-variant"
      >
        {/* Cursor Image Preview (Elemento flutuante no desktop, ocultado no CSS em mobile) */}
        <div 
          ref={previewRef} 
          className="cursor-image-preview"
        >
          {activePreviewImg && (
            <img src={activePreviewImg} alt="Preview do projeto selecionado" />
          )}
        </div>

        {/* Desktop Runway Container (Scroll Horizontal) */}
        <div className="hidden md:flex h-screen items-center">
          <div 
            ref={portfolioTrackRef} 
            className="flex items-center pl-margin-desktop h-full select-none"
          >
            {/* Slide de Introdução da Seção */}
            <div className="w-[30vw] shrink-0 flex flex-col justify-center pr-16 border-r border-outline-variant h-full">
              <span className="font-mono-label text-xs text-primary uppercase tracking-[0.25em] mb-6">02 // OBRAS SELECIONADAS</span>
              <h2 className="text-huge-sub font-bold uppercase leading-none text-on-background">
                Estúdio<br />Editorial.
              </h2>
              <p className="text-secondary font-body-md mt-6 text-sm max-w-xs leading-relaxed">
                Passe o cursor sobre os nomes dos projetos para revelar sua volumetria estrutural.
              </p>
            </div>

            {/* Projetos Slides */}
            {PROJECTS.map((project) => (
              <div 
                key={project.id}
                className="w-[45vw] shrink-0 flex flex-col justify-center px-16 border-r border-outline-variant h-full relative group cursor-pointer"
                data-cursor="project"
                data-cursor-label="VER"
                onMouseEnter={() => {
                  setActivePreviewImg(project.img)
                  setPreviewActive(true)
                }}
                onMouseLeave={() => {
                  setPreviewActive(false)
                }}
                onClick={() => {
                  setActiveModalProject(project)
                }}
              >
                <div className="space-y-6">
                  <span className="font-mono-label text-xs text-secondary">{project.id} /</span>
                  <h3 className="font-display-xl text-5xl lg:text-7xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex justify-between items-center text-secondary font-mono-label text-xs pt-4 border-t border-outline-variant/30">
                    <span>CATEGORIA: {project.category.toUpperCase()}</span>
                    <span>ANO: {project.year}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Slide de fechamento */}
            <div className="w-[30vw] shrink-0 flex flex-col justify-center px-16 h-full">
              <h3 className="font-display-xl text-3xl uppercase text-primary leading-tight">
                Seu projeto pode estar aqui.
              </h3>
              <div className="mt-8">
                <Link 
                  to="/contato" 
                  className="font-label-caps text-xs text-on-background border-b border-on-background pb-2 hover:text-primary hover:border-primary transition-colors"
                >
                  Entrar em contato
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (Scroll vertical normal) */}
        <div className="flex md:hidden flex-col px-margin-mobile py-20 space-y-16">
          <div className="mb-8">
            <span className="font-mono-label text-xs text-primary uppercase tracking-[0.25em] mb-4 block">02 // OBRAS SELECIONADAS</span>
            <h2 className="font-display-xl text-4xl font-bold uppercase leading-none text-on-background">
              Projetos<br />Destaque
            </h2>
          </div>

          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="mobile-project-reveal flex flex-col space-y-4 border-b border-outline-variant/50 pb-8 cursor-pointer"
              onClick={() => {
                setActiveModalProject(project)
              }}
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-start pt-2">
                <div>
                  <span className="font-mono-label text-[10px] text-primary uppercase block mb-1">{project.category}</span>
                  <h4 className="font-display-xl text-2xl font-bold text-on-background">{project.title}</h4>
                </div>
                <span className="font-mono-label text-xs text-secondary">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEÇÃO SERVIÇOS (ACORDEÃO MINIMALISTA) */}
      <section id="servicos" className="px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-outline-variant">
        <div className="lg:col-span-4">
          <span className="font-mono-label text-xs text-primary uppercase tracking-[0.25em]">03 // SERVIÇOS</span>
          <h2 className="font-display-xl text-3xl md:text-4xl uppercase font-bold text-on-background mt-4 leading-none">
            Arquitetura<br />de precisão.
          </h2>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-outline-variant">
            {SERVICES.map((service, index) => {
              const isOpen = activeService === index
              return (
                <div 
                  key={service.num}
                  className="border-b border-outline-variant py-8 cursor-pointer select-none"
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => {
                    // Também abre no hover se for desktop para interatividade premium
                    if (window.innerWidth >= 768) {
                      setActiveService(index)
                    }
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                      <span className="font-mono-label text-sm text-secondary">{service.num}</span>
                      <h3 className={`font-display-xl text-xl md:text-2xl font-medium transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-on-background'}`}>
                        {service.title}
                      </h3>
                    </div>
                    {/* Indicador Minimalista */}
                    <div className="relative w-4 h-4 flex items-center justify-center">
                      <div className="absolute w-4 h-[1px] bg-secondary"></div>
                      <div 
                        className="absolute w-[1px] h-4 bg-secondary transition-transform duration-300"
                        style={{ transform: isOpen ? 'rotate(90deg) scaleY(0)' : 'rotate(0deg)' }}
                      ></div>
                    </div>
                  </div>

                  {/* Corpo do Acordeão */}
                  <div 
                    ref={(el) => (serviceContentRefs.current[index] = el)}
                    className="overflow-hidden opacity-0"
                    style={{ height: 0 }}
                  >
                    <p className="pt-6 font-body-md text-secondary text-sm md:text-base max-w-2xl leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DEPOIMENTO (CITAÇÃO ÚNICA EDITORIAL) */}
      <QuoteSection />

      {/* 6. SEÇÃO CTA FINAL / CONTATO */}
      <section id="contato" className="cta-section px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap flex flex-col justify-between min-h-[80vh] relative">
        <div className="max-w-4xl space-y-8 z-10">
          <span className="font-mono-label text-xs text-primary uppercase tracking-[0.25em]">04 // CONTATO</span>
          <h2 className="cta-title-reveal text-huge font-bold uppercase text-on-background leading-none select-none">
            Vamos desenhar<br />seu próximo espaço?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-16 z-10 border-t border-outline-variant/30 mt-12">
          {/* E-mail / WhatsApp Gigante */}
          <div className="md:col-span-8 space-y-6">
            <div className="flex flex-col gap-4">
              <MagneticButton>
                <a 
                  href="mailto:contato@genebra.arq" 
                  className="font-display-xl text-3xl md:text-5xl font-bold text-on-background hover:text-primary transition-colors inline-block"
                >
                  contato@genebra.arq
                </a>
              </MagneticButton>
              <br />
              <MagneticButton>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-display-xl text-2xl md:text-4xl font-bold text-secondary hover:text-primary transition-colors inline-block"
                >
                  +55 (11) 99999-9999
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Localização e Ano */}
          <div className="md:col-span-4 flex flex-col justify-end text-left md:text-right font-mono-label text-xs text-secondary space-y-2">
            <span>SÃO PAULO / LONDRES</span>
            <span>DISPONÍVEL GLOBALMENTE</span>
            <span className="text-primary font-bold">GENEBRA ARCHITECTS © {new Date().getFullYear()}</span>
          </div>
        </div>
      </section>

      {/* Lightbox Modal para Projetos */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-[10200] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 cursor-pointer select-none"
          onClick={() => setActiveModalProject(null)}
        >
          {/* Botão Fechar Minimalista */}
          <div className="absolute top-8 right-8 md:top-12 md:right-12 flex items-center gap-2 text-secondary hover:text-primary transition-colors">
            <span className="font-mono-label text-xs tracking-widest uppercase">Fechar</span>
            <span className="material-symbols-outlined text-2xl">close</span>
          </div>

          <div 
            className="max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Evitar fechamento ao clicar na imagem
          >
            <img 
              src={activeModalProject.img} 
              alt={activeModalProject.alt} 
              className="lightbox-image max-w-full max-h-[65vh] object-contain border border-outline-variant/30"
            />
            <div className="w-full text-center mt-6 space-y-2">
              <span className="font-mono-label text-xs text-primary uppercase tracking-widest block">
                {activeModalProject.category}
              </span>
              <h3 className="font-display-xl text-xl md:text-3xl text-on-background uppercase font-bold tracking-tight">
                {activeModalProject.title}
              </h3>
              <p className="font-mono-label text-[10px] text-secondary">
                PROJETO SELECIONADO // ANO {activeModalProject.year}
              </p>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}
