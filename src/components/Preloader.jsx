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
      <h2 className="preloader-brand font-display-xl text-3xl md:text-5xl font-bold tracking-[0.4em] text-on-background uppercase select-none">
        GENEBRA
      </h2>
    </div>
  )
}
