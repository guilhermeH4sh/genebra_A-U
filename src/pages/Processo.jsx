import React, { useEffect } from 'react'

export default function Processo() {
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
          <p className="font-label-caps text-primary mb-4 tracking-[0.3em] uppercase">Metodologia</p>
          <h1 className="font-display-xl text-5xl md:text-7xl leading-tight mb-8">
            A jornada do vazio<br/><span className="italic font-normal text-secondary">ao espaço habitado</span>
          </h1>
        </div>
      </section>

      {/* Etapas do Processo em Grafite e Cobre */}
      <section className="py-section-gap px-margin-desktop">
        <div className="max-w-5xl mx-auto divide-y divide-outline-variant">
          {/* Fase 1 */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 scroll-reveal">
            <div className="md:col-span-3">
              <span className="font-mono-label text-primary block mb-2">FASE 01 / 05</span>
              <h3 className="font-headline-lg text-2xl font-bold uppercase text-on-background">Diálogo</h3>
            </div>
            <div className="md:col-span-9 md:col-start-4">
              <h4 className="font-headline-lg text-xl mb-4 text-primary">Briefing & Leitura do Lugar</h4>
              <p className="text-secondary text-body-lg mb-6">
                Investigamos as reais necessidades e ambições estéticas do cliente. Em paralelo, realizamos um estudo topográfico e bioclimático rigoroso do terreno para entender a orientação solar, ventos predominantes e a narrativa existente no entorno.
              </p>
              <ul className="space-y-2 text-sm text-primary">
                <li>• Reuniões conceituais detalhadas</li>
                <li>• Análise bioclimática e topográfica</li>
                <li>• Definição do programa de necessidades</li>
              </ul>
            </div>
          </div>

          {/* Fase 2 */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="md:col-span-3">
              <span className="font-mono-label text-primary block mb-2">FASE 02 / 05</span>
              <h3 className="font-headline-lg text-2xl font-bold uppercase text-on-background">Conceito</h3>
            </div>
            <div className="md:col-span-9 md:col-start-4">
              <h4 className="font-headline-lg text-xl mb-4 text-primary">Estudos de Volumetria</h4>
              <p className="text-secondary text-body-lg mb-6">
                Desenvolvemos os primeiros esboços e estudos volumétricos. Criamos maquetes tridimensionais físicas ou digitais para testar proporções, relações de cheios e vazios e a entrada de luz. O conceito é refinado até atingir a simplicidade essencial desejada.
              </p>
              <ul className="space-y-2 text-sm text-primary">
                <li>• Imagens conceituais tridimensionais (3D)</li>
                <li>• Estudos de luz e insolação</li>
                <li>• Definição preliminar de materiais</li>
              </ul>
            </div>
          </div>

          {/* Fase 3 */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="md:col-span-3">
              <span className="font-mono-label text-primary block mb-2">FASE 03 / 05</span>
              <h3 className="font-headline-lg text-2xl font-bold uppercase text-on-background">Projeto</h3>
            </div>
            <div className="md:col-span-9 md:col-start-4">
              <h4 className="font-headline-lg text-xl mb-4 text-primary">Desenho Técnico & Executivo</h4>
              <p className="text-secondary text-body-lg mb-6">
                Aprovado o conceito, avançamos para o projeto executivo. Cada junção de materiais, detalhes de esquadrias ocultas e sistemas prediais são desenhados de forma a ficarem invisíveis, assegurando que o foco permaneça puramente na forma espacial.
              </p>
              <ul className="space-y-2 text-sm text-primary">
                <li>• Projeto executivo detalhado</li>
                <li>• Compatibilização estrutural e hidráulica</li>
                <li>• Detalhamento minucioso de marcenaria e acabamentos</li>
              </ul>
            </div>
          </div>

          {/* Fase 4 */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 scroll-reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="md:col-span-3">
              <span className="font-mono-label text-primary block mb-2">FASE 04 / 05</span>
              <h3 className="font-headline-lg text-2xl font-bold uppercase text-on-background">Material</h3>
            </div>
            <div className="md:col-span-9 md:col-start-4">
              <h4 className="font-headline-lg text-xl mb-4 text-primary">Acompanhamento e Obra</h4>
              <p className="text-secondary text-body-lg mb-6">
                Acompanhamos a execução da obra de perto. Garantimos que a textura do concreto aparente seja perfeita, que o alinhamento das pedras atenda ao projeto e que todas as especificações técnicas sejam rigorosamente seguidas pela construtora.
              </p>
              <ul className="space-y-2 text-sm text-primary">
                <li>• Visitas técnicas periódicas à obra</li>
                <li>• Alinhamento estrito com engenheiros e mestres de obra</li>
                <li>• Validação e controle de qualidade de acabamentos</li>
              </ul>
            </div>
          </div>

          {/* Fase 5 */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 scroll-reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="md:col-span-3">
              <span className="font-mono-label text-primary block mb-2">FASE 05 / 05</span>
              <h3 className="font-headline-lg text-2xl font-bold uppercase text-on-background">Espaço</h3>
            </div>
            <div className="md:col-span-9 md:col-start-4">
              <h4 className="font-headline-lg text-xl mb-4 text-primary">Entrega & Vivência</h4>
              <p className="text-secondary text-body-lg mb-6">
                O espaço físico é finalmente entregue ao morador ou usuário. Realizamos o ensaio fotográfico final e iniciamos a etapa de verificação de uso pós-ocupação, compreendendo como a luz e a volumetria respondem ao cotidiano real.
              </p>
              <ul className="space-y-2 text-sm text-primary">
                <li>• Entrega oficial das chaves e memorial técnico</li>
                <li>• Produção fotográfica de arquitetura</li>
                <li>• Avaliação de pós-ocupação após 6 meses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
