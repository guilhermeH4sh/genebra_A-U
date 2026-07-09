import React, { useEffect } from 'react'
import gsap from 'gsap'

export default function Preloader({ onReveal, onComplete }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      if (onReveal) onReveal()
      onComplete()
      return
    }

    const tl = gsap.timeline({
      onComplete: onComplete
    })

    // 1. Silêncio / Hold inicial (1.2 segundos para assentar a marca)
    tl.to({}, { duration: 1.2 })

    // 2. Montar o site em segundo plano no início do fade-out do loader
    tl.to({}, {
      duration: 0.1,
      onComplete: () => {
        if (onReveal) onReveal()
      }
    })

    // 3. Fade out lento da marca "GENEBRA"
    tl.to('.preloader-brand', {
      opacity: 0,
      duration: 1.2,
      ease: 'power2.inOut'
    })

    // 4. Fade out ultra lento da tela preta do preloader (2.0 segundos)
    tl.to('.preloader-overlay', {
      opacity: 0,
      duration: 2.0,
      ease: 'power2.inOut'
    }, '-=0.8') // Overlap com o sumiço do nome para suavidade máxima

    return () => {
      tl.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div 
      className="preloader-overlay flex items-center justify-center" 
      style={{ backgroundColor: '#0A0A0A', zIndex: 10100 }}
    >
      {/* Nome da Marca com tipografia editorial limpa e alto espaçamento */}
      <h2 className="preloader-brand flex items-center gap-4 font-serif text-3xl md:text-5xl font-bold text-on-background uppercase select-none">
        <svg className="w-12 h-12 fill-current text-primary animate-pulse" viewBox="0 0 100 100">
          <path d="M12 76 Q 50 68 88 76 Q 50 71 12 76 Z" />
          <path d="M28 73 L28 48 L39 42 L39 71 Z" />
          <line x1="31" y1="49" x2="31" y2="72" stroke="currentColor" strokeWidth="1.2" className="text-background" />
          <line x1="35" y1="47" x2="35" y2="72" stroke="currentColor" strokeWidth="1.2" className="text-background" />
          <path d="M41 71 L41 33 L52 25 L61 32 L61 71 Z" />
          <g className="fill-background">
            <rect x="46" y="34" width="9" height="2" />
            <rect x="46" y="38" width="9" height="2" />
            <rect x="46" y="42" width="9" height="2" />
            <rect x="46" y="46" width="9" height="2" />
            <rect x="46" y="50" width="9" height="2" />
            <rect x="46" y="54" width="9" height="2" />
            <rect x="46" y="58" width="9" height="2" />
            <rect x="46" y="62" width="9" height="2" />
            <rect x="46" y="66" width="9" height="2" />
          </g>
          <path d="M63 71 L63 43 L73 45 L73 71 Z" />
          <line x1="68" y1="45" x2="68" y2="72" stroke="currentColor" strokeWidth="1.2" className="text-background" />
        </svg>
        <span className="tracking-[0.3em]">GENEBRA</span>
      </h2>
    </div>
  )
}
