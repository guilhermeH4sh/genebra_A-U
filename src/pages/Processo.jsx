import React, { useState, useEffect } from 'react'
import BlueprintCanvas from '../components/BlueprintCanvas.jsx'

const PHASES_DATA = [
  {
    num: 1,
    tag: "FASE 01 / 05",
    title: "Diálogo",
    subtitle: "Briefing & Leitura do Lugar",
    description: "Investigamos as reais necessidades e ambições estéticas do cliente. Em paralelo, realizamos um estudo topográfico e bioclimático rigoroso do terreno para entender a orientação solar, ventos predominantes e a narrativa existente no entorno.",
    bullets: [
      "Reuniões conceituais detalhadas",
      "Análise bioclimática e topográfica",
      "Definição do programa de necessidades"
    ]
  },
  {
    num: 2,
    tag: "FASE 02 / 05",
    title: "Conceito",
    subtitle: "Estudos de Volumetria",
    description: "Desenvolvemos os primeiros esboços e estudos volumétricos. Criamos maquetes tridimensionais físicas ou digitais para testar proporções, relações de cheios e vazios e a entrada de luz. O conceito é refinado até atingir a simplicidade essencial desejada.",
    bullets: [
      "Imagens conceituais tridimensionais (3D)",
      "Estudos de luz e insolação",
      "Definição preliminar de materiais"
    ]
  },
  {
    num: 3,
    tag: "FASE 03 / 05",
    title: "Projeto",
    subtitle: "Desenho Técnico & Executivo",
    description: "Aprovado o conceito, avançamos para o projeto executivo. Cada junção de materiais, detalhes de esquadrias ocultas e sistemas prediais são desenhados de forma a ficarem invisíveis, assegurando que o foco permaneça puramente na forma espacial.",
    bullets: [
      "Projeto executivo detalhado",
      "Compatibilização estrutural e hidráulica",
      "Detalhamento minucioso de marcenaria e acabamentos"
    ]
  },
  {
    num: 4,
    tag: "FASE 04 / 05",
    title: "Material",
    subtitle: "Acompanhamento e Obra",
    description: "Acompanhamos a execução da obra de perto. Garantimos que a textura do concreto aparente seja perfeita, que o alinhamento das pedras atenda ao projeto e que todas as especificações técnicas sejam rigorosamente seguidas pela construtora.",
    bullets: [
      "Visitas técnicas periódicas à obra",
      "Alinhamento estrito com engenheiros e mestres de obra",
      "Validação e controle de qualidade de acabamentos"
    ]
  },
  {
    num: 5,
    tag: "FASE 05 / 05",
    title: "Espaço",
    subtitle: "Entrega & Vivência",
    description: "O espaço físico é finalmente entregue ao morador ou usuário. Realizamos o ensaio fotográfico final e iniciamos a etapa de verificação de uso pós-ocupação, compreendendo como a luz e a volumetria respondem ao cotidiano real.",
    bullets: [
      "Entrega oficial das chaves e memorial técnico",
      "Produção fotográfica de arquitetura",
      "Avaliação de pós-ocupação após 6 meses"
    ]
  }
]

export default function Processo() {
  const [activePhase, setActivePhase] = useState(1)

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

  const currentPhaseData = PHASES_DATA.find(p => p.num === activePhase)

  return (
    <main className="pt-32">
      {/* Cabeçalho da Página */}
      <section className="px-margin-desktop py-12">
        <div className="max-w-4xl">
          <p className="font-label-caps text-primary mb-4 tracking-[0.3em] uppercase">Metodologia</p>
          <h1 className="font-display-xl text-5xl md:text-7xl leading-tight mb-8">
            A jornada do vazio<br/><span className="italic font-normal text-secondary">ao espaço habitado</span>
          </h1>
        </div>
      </section>

      {/* Prancha Interativa de Metodologia */}
      <section className="py-section-gap px-margin-desktop">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Coluna Esquerda: Timeline e Detalhes da Fase */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Seletor horizontal de fases */}
            <div className="flex justify-between items-center border-b border-outline-variant pb-6">
              {PHASES_DATA.map((p) => (
                <button
                  key={p.num}
                  onClick={() => setActivePhase(p.num)}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  <span className={`font-mono text-xs mb-2 transition-colors ${
                    activePhase === p.num ? 'text-primary font-bold' : 'text-secondary group-hover:text-primary'
                  }`}>
                    0{p.num}
                  </span>
                  <div className={`w-8 h-[2px] transition-all duration-300 ${
                    activePhase === p.num ? 'bg-primary scale-x-125' : 'bg-outline-variant group-hover:bg-primary/50'
                  }`}></div>
                  <span className={`hidden md:block font-label-caps text-[9px] uppercase mt-2 tracking-wider transition-colors ${
                    activePhase === p.num ? 'text-primary' : 'text-secondary opacity-60 group-hover:text-primary'
                  }`}>
                    {p.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Conteúdo Detalhado da Fase Ativa */}
            <div key={activePhase} className="space-y-6 animate-fadeIn">
              <span className="font-mono-label text-primary tracking-widest">{currentPhaseData.tag}</span>
              <h2 className="font-display-xl text-3xl md:text-5xl uppercase">{currentPhaseData.title}</h2>
              <h3 className="font-headline-lg text-lg md:text-xl text-primary font-bold">{currentPhaseData.subtitle}</h3>
              
              <p className="text-secondary text-body-lg leading-relaxed">
                {currentPhaseData.description}
              </p>

              <div className="pt-6 border-t border-outline-variant">
                <span className="font-mono-label block mb-4 text-[10px] text-primary">ENTREGÁVEIS E ATIVIDADES</span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentPhaseData.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-on-surface">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Coluna Direita: Prancha Técnica Digital (BlueprintCanvas) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex justify-center scroll-reveal">
            <BlueprintCanvas phase={activePhase} />
          </div>

        </div>
      </section>
    </main>
  )
}
