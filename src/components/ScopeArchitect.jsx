import React, { useState, useEffect } from 'react'

export default function ScopeArchitect({ onFormSubmit }) {
  const [terrain, setTerrain] = useState('plano') // plano, declive, aclive
  const [material, setMaterial] = useState('concreto') // concreto, madeira, aco
  const [style, setStyle] = useState('minimalista') // minimalista, brutalista, flutuante
  const [size, setSize] = useState(350) // m2
  const [floors, setFloors] = useState(2) // 1, 2, 3
  
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Cálculos dinâmicos
  const [estimations, setEstimations] = useState({
    costMin: 0,
    costMax: 0,
    timeline: 0,
    complexity: 1.0,
    structuralClass: 'Classe A'
  })

  useEffect(() => {
    // Definir custo base por m2
    let baseCostM2 = 5200 // Minimalista concreto base
    if (style === 'brutalista') baseCostM2 = 6000
    if (style === 'flutuante') baseCostM2 = 6800

    // Modificador de material
    let materialMultiplier = 1.0
    if (material === 'aco') materialMultiplier = 1.25 // Aço Corten é mais caro
    if (material === 'madeira') materialMultiplier = 1.15 // Madeira carbonizada shou sugi ban

    // Modificador de terreno
    let terrainMultiplier = 1.0
    if (terrain === 'declive' || terrain === 'aclive') terrainMultiplier = 1.2 // Mais fundação / contenção

    // Modificador de pavimentos
    let floorMultiplier = 1.0
    if (floors === 3) floorMultiplier = 1.15

    const estimatedM2Cost = baseCostM2 * materialMultiplier * terrainMultiplier * floorMultiplier
    
    const costMin = Math.round((size * estimatedM2Cost) * 0.9)
    const costMax = Math.round((size * estimatedM2Cost) * 1.1)

    // Prazo de projeto (meses)
    let baseTimeline = 4
    if (size > 300) baseTimeline += 1
    if (size > 600) baseTimeline += 2
    if (style === 'flutuante') baseTimeline += 1
    if (terrain !== 'plano') baseTimeline += 1

    // Complexidade
    const complexity = (terrainMultiplier * materialMultiplier * floorMultiplier).toFixed(2)

    setEstimations({
      costMin,
      costMax,
      timeline: baseTimeline,
      complexity,
      structuralClass: style === 'flutuante' ? 'Classe Especial (Balanço)' : terrain !== 'plano' ? 'Classe B (Fundações Especiais)' : 'Classe A (Convencional)'
    })

  }, [terrain, material, style, size, floors])

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    if (onFormSubmit) {
      onFormSubmit({
        contactName,
        contactEmail,
        terrain,
        material,
        style,
        size,
        floors,
        estimations
      })
    }
  }

  // Renderizar maquete volumétrica em SVG baseada nos estados
  const renderVolumetricMockup = () => {
    // Coordenadas base do terreno
    let groundYLeft = 300
    let groundYRight = 300
    
    if (terrain === 'declive') {
      groundYLeft = 240
      groundYRight = 340
    } else if (terrain === 'aclive') {
      groundYLeft = 340
      groundYRight = 240
    }

    // Escalonamento de largura pelo tamanho
    const minSize = 150
    const maxSize = 1000
    const sizeRatio = (size - minSize) / (maxSize - minSize)
    const widthOffset = 40 + sizeRatio * 60 // Adiciona largura ao bloco

    // Configuração de espessura e estilo de linhas
    let strokeColor = '#F5F5F5'
    let strokeWidth = '1.5'
    let fillOpacity = '0.03'
    let borderDash = '0'

    if (style === 'brutalista') {
      strokeColor = '#A3A3A3'
      strokeWidth = '2.5'
      fillOpacity = '0.1'
    } else if (style === 'flutuante') {
      strokeColor = '#E29A67'
      strokeWidth = '1.5'
      fillOpacity = '0.02'
      borderDash = '2,2'
    }

    // Cor das linhas do terreno
    const groundColor = 'rgba(226, 154, 103, 0.4)'

    // Desenhar pavimentos
    const floorHeight = 45
    const drawBlock = (index) => {
      const yShift = index * floorHeight
      // Pontos isométricos para o bloco
      const p1 = { x: 200 - widthOffset, y: 220 - yShift }
      const p2 = { x: 200, y: 250 - yShift }
      const p3 = { x: 200 + widthOffset, y: 220 - yShift }
      const p4 = { x: 200, y: 190 - yShift }
      
      const p1Top = { x: p1.x, y: p1.y - floorHeight }
      const p2Top = { x: p2.x, y: p2.y - floorHeight }
      const p3Top = { x: p3.x, y: p3.y - floorHeight }
      const p4Top = { x: p4.x, y: p4.y - floorHeight }

      // Se for estilo flutuante e for o primeiro bloco no terreno acidentado, ele fica elevado
      const isFloatingCantilever = style === 'flutuante' && index > 0

      return (
        <g key={`block-${index}`} className="transition-all duration-500">
          {/* Fundações/Pilares sob o bloco */}
          {index === 0 && (
            <g stroke="#E29A67" strokeWidth="1" strokeDasharray="3,3">
              {/* Pilares esquerdos */}
              <line x1={p1.x} y1={p1.y} x2={p1.x} y2={terrain === 'declive' ? 260 : terrain === 'aclive' ? 320 : 300} />
              {/* Pilares centrais */}
              <line x1={p2.x} y1={p2.y} x2={p2.x} y2={300 + (terrain === 'declive' ? 20 : terrain === 'aclive' ? -20 : 0)} />
              {/* Pilares direitos */}
              <line x1={p3.x} y1={p3.y} x2={p3.x} y2={terrain === 'declive' ? 320 : terrain === 'aclive' ? 260 : 300} />
            </g>
          )}

          {/* Se for estilo flutuante e segundo andar, faz um balanço (desloca o bloco superior ligeiramente) */}
          <g 
            stroke={strokeColor} 
            strokeWidth={strokeWidth} 
            strokeDasharray={borderDash} 
            fill="currentColor" 
            fillOpacity={fillOpacity}
            transform={isFloatingCantilever ? 'translate(25, -5)' : ''}
          >
            {/* Base do bloco */}
            <path d={`M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} L ${p4.x} ${p4.y} Z`} />
            
            {/* Lados verticais do bloco */}
            <line x1={p1.x} y1={p1.y} x2={p1Top.x} y2={p1Top.y} />
            <line x1={p2.x} y1={p2.y} x2={p2Top.x} y2={p2Top.y} />
            <line x1={p3.x} y1={p3.y} x2={p3Top.x} y2={p3Top.y} />
            <line x1={p4.x} y1={p4.y} x2={p4Top.x} y2={p4Top.y} />
            
            {/* Topo do bloco */}
            <path d={`M ${p1Top.x} ${p1Top.y} L ${p2Top.x} ${p2Top.y} L ${p3Top.x} ${p3Top.y} L ${p4Top.x} ${p4Top.y} Z`} />
            
            {/* Detalhe interno do vidro nos painéis (se for minimalista) */}
            {style === 'minimalista' && (
              <g stroke="rgba(255,255,255,0.15)" strokeWidth="0.8">
                <line x1={(p1.x + p2.x)/2} y1={(p1.y + p2.y)/2} x2={(p1Top.x + p2Top.x)/2} y2={(p1Top.y + p2Top.y)/2} />
                <line x1={(p2.x + p3.x)/2} y1={(p2.y + p3.y)/2} x2={(p2Top.x + p3Top.x)/2} y2={(p2Top.y + p3Top.y)/2} />
              </g>
            )}
          </g>
        </g>
      )
    }

    return (
      <svg className="w-full h-full text-on-surface" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Grid Técnico de Fundo */}
        <g opacity="0.1" stroke="currentColor" strokeWidth="0.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`lh-${i}`} x1="0" y1={40 + i * 40} x2="400" y2={40 + i * 40} />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`lv-${i}`} x1={40 + i * 40} y1="0" x2={40 + i * 40} y2="400" />
          ))}
        </g>

        {/* Linhas de Cota Altura e Largura */}
        <g stroke="#E29A67" strokeWidth="0.8" className="font-mono text-[8px] text-primary">
          {/* Cota Horizontal de Largura */}
          <line x1={200 - widthOffset} y1="360" x2={200 + widthOffset} y2="360" />
          <line x1={200 - widthOffset} y1="356" x2={200 - widthOffset} y2="364" />
          <line x1={200 + widthOffset} y1="356" x2={200 + widthOffset} y2="364" />
          <text x="200" y="372" fill="#E29A67" textAnchor="middle">COMPR. {Math.round(20 + sizeRatio * 20)}m</text>

          {/* Cota Vertical de Altura */}
          <line x1="50" y1={250} x2="50" y2={250 - floors * floorHeight} />
          <line x1="46" y1={250} x2="54" y2={250} />
          <line x1="46" y1={250 - floors * floorHeight} x2="54" y2={250 - floors * floorHeight} />
          <text x="42" y={250 - (floors * floorHeight) / 2} fill="#E29A67" textAnchor="middle" transform={`rotate(-90 42 ${250 - (floors * floorHeight) / 2})`} className="origin-center">ALT. {floors * 3.2}m</text>
        </g>

        {/* Desenho do Terreno Dinâmico */}
        <path 
          d={`M 0 ${groundYLeft} Q 200 ${(groundYLeft+groundYRight)/2} 400 ${groundYRight}`} 
          stroke={groundColor} 
          strokeWidth="2" 
          fill="none" 
          className="transition-all duration-500"
        />
        
        {/* Curvas adicionais do terreno abaixo */}
        <path 
          d={`M 0 ${groundYLeft + 30} Q 200 ${(groundYLeft+groundYRight)/2 + 30} 400 ${groundYRight + 30}`} 
          stroke={groundColor} 
          strokeWidth="0.5" 
          strokeDasharray="4,4"
          fill="none" 
          className="transition-all duration-500"
          opacity="0.5"
        />

        {/* Blocos de Edifício Stackados */}
        {Array.from({ length: floors }).map((_, i) => drawBlock(i))}

        {/* Eixo de Referência HUD */}
        <text x="380" y="30" fill="currentColor" className="font-mono text-[9px] text-right" textAnchor="end">VOLUMETRIA // PERSPECTIVA</text>
        <text x="380" y="42" fill="#E29A67" className="font-mono text-[8px] text-right" textAnchor="end">ESTILO: {style.toUpperCase()}</text>
        <text x="380" y="54" fill="currentColor" className="font-mono text-[8px] text-right opacity-60" textAnchor="end">EST. ESTRUTURA: {estimations.structuralClass.toUpperCase()}</text>
      </svg>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
      {/* Coluna Esquerda: Configurador de Briefing */}
      <div className="lg:col-span-6 space-y-8 bg-surface p-8 border border-outline-variant">
        <h3 className="font-display-xl text-2xl text-on-surface uppercase border-b border-outline-variant pb-4">Simulador de Projeto</h3>
        
        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <span className="material-symbols-outlined text-primary text-6xl animate-bounce">check_circle</span>
            <h4 className="font-display-xl text-xl text-on-background">Configuração Recebida!</h4>
            <p className="text-secondary font-body-md max-w-sm mx-auto">
              Nossa equipe já recebeu as especificações da maquete e os cálculos de viabilidade. Entraremos em contato para apresentar a proposta técnica completa.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-6 px-6 py-2 border border-primary text-primary font-label-caps uppercase hover:bg-primary hover:text-on-primary transition-all duration-300"
            >
              Simular Novo Projeto
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Terreno */}
            <div>
              <label className="block font-label-caps text-secondary uppercase text-[10px] mb-3">Topografia do Terreno</label>
              <div className="grid grid-cols-3 gap-3">
                {['plano', 'declive', 'aclive'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTerrain(t)}
                    className={`py-2 px-3 border font-label-caps text-[10px] uppercase transition-all ${
                      terrain === t
                        ? 'border-primary text-primary bg-primary/5'
                        : 'border-outline-variant text-secondary hover:border-primary/50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Estilo */}
            <div>
              <label className="block font-label-caps text-secondary uppercase text-[10px] mb-3">Conceito Arquitetônico</label>
              <div className="grid grid-cols-3 gap-3">
                {['minimalista', 'brutalista', 'flutuante'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStyle(s)}
                    className={`py-2 px-3 border font-label-caps text-[10px] uppercase transition-all ${
                      style === s
                        ? 'border-primary text-primary bg-primary/5'
                        : 'border-outline-variant text-secondary hover:border-primary/50'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Material Principal */}
            <div>
              <label className="block font-label-caps text-secondary uppercase text-[10px] mb-3">Material Estrutural Dominante</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'concreto', label: 'Concreto' },
                  { id: 'aco', label: 'Aço Corten' },
                  { id: 'madeira', label: 'Mad. Carbonizada' }
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMaterial(m.id)}
                    className={`py-2 px-2 border font-label-caps text-[9px] uppercase transition-all ${
                      material === m.id
                        ? 'border-primary text-primary bg-primary/5'
                        : 'border-outline-variant text-secondary hover:border-primary/50'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Número de Pavimentos */}
            <div>
              <label className="block font-label-caps text-secondary uppercase text-[10px] mb-3">Pavimentos</label>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFloors(f)}
                    className={`py-2 px-3 border font-label-caps text-[10px] transition-all ${
                      floors === f
                        ? 'border-primary text-primary bg-primary/5'
                        : 'border-outline-variant text-secondary hover:border-primary/50'
                    }`}
                  >
                    {f} {f === 1 ? 'Pavimento' : 'Pavimentos'}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Área Construída (Tamanho) */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-label-caps text-secondary uppercase text-[10px]">Área de Construção</label>
                <span className="font-mono text-xs text-primary font-bold">{size} m²</span>
              </div>
              <input
                type="range"
                min="150"
                max="1000"
                step="25"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full accent-primary bg-outline-variant h-1 rounded"
              />
              <div className="flex justify-between text-[9px] text-secondary font-mono mt-1">
                <span>150 m²</span>
                <span>500 m²</span>
                <span>1000 m²</span>
              </div>
            </div>

            {/* Dados de Contato para envio do lead */}
            <div className="pt-4 border-t border-outline-variant space-y-4">
              <label className="block font-label-caps text-secondary uppercase text-[10px] -mb-1">Seus dados para envio de estudo</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome Completo"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="bg-transparent border-b border-outline-variant py-2 focus:border-primary text-sm focus:ring-0 text-on-surface"
                  required
                />
                <input
                  type="email"
                  placeholder="E-mail Comercial"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="bg-transparent border-b border-outline-variant py-2 focus:border-primary text-sm focus:ring-0 text-on-surface"
                  required
                />
              </div>
            </div>

            {/* Botão enviar */}
            <button
              type="submit"
              className="w-full py-4 border border-primary text-primary font-label-caps uppercase hover:bg-primary hover:text-on-primary transition-all duration-300 tracking-wider text-[11px]"
            >
              Enviar Briefing & Maquete
            </button>
          </form>
        )}
      </div>

      {/* Coluna Direita: Painel com a maquete em tempo real e os resultados de viabilidade */}
      <div className="lg:col-span-6 flex flex-col gap-8 justify-between">
        {/* Painel da Maquete */}
        <div className="aspect-square bg-surface border border-outline-variant relative overflow-hidden flex items-center justify-center p-6 rounded shadow-lg">
          <div className="absolute top-4 left-4 font-mono text-[8px] text-secondary tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span>MODEL_RENDERER // ACTIVE</span>
          </div>
          <div className="w-full h-full">
            {renderVolumetricMockup()}
          </div>
        </div>

        {/* Painel de Resultados Técnicos */}
        <div className="bg-surface p-6 border border-outline-variant font-mono space-y-4">
          <h4 className="font-label-caps text-primary text-[10px] uppercase tracking-widest border-b border-outline-variant pb-2">Resultados da Viabilidade Técnica</h4>
          
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-secondary text-[9px] block">ESTIMATIVA DE INVESTIMENTO</span>
              <span className="text-primary font-bold text-sm md:text-md">
                {formatCurrency(estimations.costMin)} — {formatCurrency(estimations.costMax)}
              </span>
            </div>
            
            <div>
              <span className="text-secondary text-[9px] block">COMPLEXIDADE ESTRUTURAL</span>
              <span className="text-on-surface font-bold text-sm">{estimations.complexity}x</span>
            </div>

            <div>
              <span className="text-secondary text-[9px] block">CRONOGRAMA DE PROJETO (EST.)</span>
              <span className="text-on-surface font-bold text-sm">{estimations.timeline} Meses</span>
            </div>

            <div>
              <span className="text-secondary text-[9px] block">TIPO DE FUNDAÇÃO</span>
              <span className="text-on-surface font-bold text-xs">{estimations.structuralClass}</span>
            </div>
          </div>
          <p className="text-[8px] text-secondary leading-normal pt-2 border-t border-outline-variant">
            *Estes cálculos são automáticos e preliminares. O projeto executivo determinará o orçamento definitivo com base em ensaios de solo (sondagem SPT) e cálculos estruturais.
          </p>
        </div>
      </div>
    </div>
  )
}
