import React, { useState, useRef, useEffect } from 'react'

export default function BlueprintSlider({ project }) {
  const [sliderPos, setSliderPos] = useState(50) // porcentagem (0 a 100)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(percentage)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('touchend', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove, { passive: false })
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchend', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [isDragging])

  return (
    <div 
      ref={containerRef}
      className="relative select-none overflow-hidden aspect-[16/10] md:aspect-[21/9] w-full h-[55vh] md:h-[70vh] border border-outline-variant bg-[#06060c]"
    >
      {/* 1. CAMADA INFERIOR: BLUEPRINT TÉCNICO */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Imagem Filtrada Estilo Blueprint */}
        <img 
          src={project.img} 
          alt={project.alt} 
          className="absolute inset-0 w-full h-full object-cover blueprint-image-layer pointer-events-none"
        />
        
        {/* Malha de Grade Técnica */}
        <div className="blueprint-grid-bg absolute inset-0"></div>
        <div className="blueprint-grid-bg-fine absolute inset-0"></div>
        
        {/* Linhas e Cotas Arquitetônicas em SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none text-primary/40 font-mono" xmlns="http://www.w3.org/2000/svg">
          {/* Eixo de coordenadas e reticulado */}
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
          <line x1="85%" y1="0" x2="85%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
          
          {/* Cota Horizontal Principal */}
          <g className="text-[10px]">
            <line x1="15%" y1="90%" x2="80%" y2="90%" stroke="#E29A67" strokeWidth="1" />
            <line x1="15%" y1="88%" x2="15%" y2="92%" stroke="#E29A67" strokeWidth="1" />
            <line x1="80%" y1="88%" x2="80%" y2="92%" stroke="#E29A67" strokeWidth="1" />
            <text x="47%" y="88%" fill="#E29A67" textAnchor="middle" letterSpacing="0.1em">DIM: 32.40m</text>
          </g>

          {/* Cota Vertical Principal */}
          <g className="text-[10px]">
            <line x1="5%" y1="25%" x2="5%" y2="75%" stroke="#E29A67" strokeWidth="1" />
            <line x1="4%" y1="25%" x2="6%" y2="25%" stroke="#E29A67" strokeWidth="1" />
            <line x1="4%" y1="75%" x2="6%" y2="75%" stroke="#E29A67" strokeWidth="1" />
            <text x="7%" y="51%" fill="#E29A67" textAnchor="start" transform="rotate(-90 40 510)" letterSpacing="0.1em">H: 14.85m</text>
          </g>
          
          {/* Eixos de Projeto (A, B, 1, 2) */}
          <circle cx="10%" cy="10%" r="10" fill="#0E0E0E" stroke="#E29A67" strokeWidth="1" />
          <text x="10%" y="11.5%" fill="#E29A67" textAnchor="middle" fontSize="9" fontWeight="bold">A</text>
          
          <circle cx="85%" cy="10%" r="10" fill="#0E0E0E" stroke="#E29A67" strokeWidth="1" />
          <text x="85%" y="11.5%" fill="#E29A67" textAnchor="middle" fontSize="9" fontWeight="bold">B</text>

          {/* Ângulos e Marcações de Bússola */}
          <g className="translate-x-[90%] translate-y-[20%] text-[8px] opacity-70">
            <circle cx="0" cy="0" r="24" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <line x1="-30" y1="0" x2="30" y2="0" stroke="currentColor" strokeWidth="0.5" />
            <line x1="0" y1="-30" x2="0" y2="30" stroke="currentColor" strokeWidth="0.5" />
            <text x="0" y="-26" fill="currentColor" textAnchor="middle">N</text>
            <text x="0" y="32" fill="currentColor" textAnchor="middle">S</text>
          </g>

          {/* Dados Técnicos CAD HUD */}
          <text x="12%" y="25%" fill="currentColor" className="text-[9px] tracking-widest uppercase">PROJ_REF: {project.title.replace(/\s+/g, '_').toUpperCase()}</text>
          <text x="12%" y="29%" fill="currentColor" className="text-[9px] tracking-widest uppercase">ESCALA: 1:125</text>
          <text x="12%" y="33%" fill="currentColor" className="text-[9px] tracking-widest uppercase">COORD: 23°32'S / 46°38'W</text>
        </svg>
      </div>

      {/* 2. CAMADA SUPERIOR: FOTO REAL REVELADA */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ width: `${sliderPos}%` }}
      >
        <img 
          src={project.img} 
          alt={project.alt} 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current ? containerRef.current.clientWidth : '100vw', maxWidth: 'none' }}
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* HUD de legenda flutuante */}
      <div className="absolute bottom-6 left-6 z-20 bg-surface/90 border border-outline-variant px-4 py-2 pointer-events-none backdrop-blur-sm">
        <span className="font-mono-label text-primary text-[9px] tracking-widest block uppercase">{project.categoryLabel}</span>
        <h3 className="font-headline-lg text-lg text-on-surface uppercase">{project.title}</h3>
      </div>

      <div className="absolute bottom-6 right-6 z-20 bg-surface/90 border border-outline-variant px-4 py-2 pointer-events-none backdrop-blur-sm font-mono text-[9px] text-secondary flex gap-4">
        <span>FOTOGRAFIA RENDER</span>
        <span>|</span>
        <span className="text-primary font-bold">DESENHO ESTRUTURAL (CAD)</span>
      </div>

      {/* 3. DIVIDER DO SLIDER COM ALÇA DE ARRASTO */}
      <div 
        className="absolute top-0 bottom-0 z-30 w-[1px] bg-primary cursor-ew-resize"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-primary bg-background flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-ew-resize">
          <span className="material-symbols-outlined text-primary text-md select-none">swap_horiz</span>
        </div>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[9px] bg-primary text-background px-1 uppercase tracking-wider font-bold">
          SLIDE
        </div>
      </div>
    </div>
  )
}
