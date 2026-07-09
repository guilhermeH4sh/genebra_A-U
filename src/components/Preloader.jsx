import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onReveal, onComplete }) {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    // Verificar se o usuário prefere movimento reduzido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setPercent(100)
      if (onReveal) onReveal()
      onComplete()
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // Revelar o site de fundo antes da cortina subir
        if (onReveal) onReveal()

        // Cortina subindo ao terminar
        const curtainTl = gsap.timeline({
          onComplete: onComplete
        })

        // Wipe animation
        curtainTl.to('.preloader-overlay', {
          y: '-100%',
          duration: 1.0,
          ease: 'power4.inOut'
        })
      }
    })

    // Animação de entrada dos caracteres
    tl.fromTo('.preloader-char',
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, stagger: 0.08, duration: 1.0, ease: 'power4.out' }
    )

    // Contador discreto 0-100%
    const counterObj = { value: 0 }
    tl.to(counterObj, {
      value: 100,
      duration: 3.5, // Aumentado de 2.0 para 3.5 para desacelerar o contador
      ease: 'power3.inOut',
      onUpdate: () => {
        setPercent(Math.floor(counterObj.value))
      }
    }, '-=0.5')

    // Tempo de permanência estático (hold) em 100% antes de iniciar a transição
    tl.to({}, { duration: 1.2 })

    // Sumir com as letras antes de subir a cortina
    tl.to('.preloader-char', {
      y: '-100%',
      opacity: 0,
      stagger: 0.04,
      duration: 0.8, // Aumentado de 0.6 para 0.8 para saída mais dramática
      ease: 'power4.in'
    })

    return () => {
      tl.kill()
    }
  }, [onComplete])

  return (
    <div className="preloader-overlay">
      {/* Container de Letras com Overflow Hidden */}
      <div className="overflow-hidden flex select-none">
        {"GENEBRA".split("").map((char, index) => (
          <span
            key={index}
            className="preloader-char inline-block font-display-xl text-6xl md:text-8xl font-bold tracking-tight text-on-background"
            style={{ display: 'inline-block' }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Contador Discreto no Canto */}
      <div className="absolute bottom-12 right-12 md:right-20 md:bottom-20 font-mono-label text-secondary text-sm tracking-widest select-none">
        {String(percent).padStart(3, '0')}%
      </div>
      
      {/* Elemento decorativo técnico minimalista */}
      <div className="absolute bottom-12 left-12 md:left-20 md:bottom-20 font-mono-label text-xs text-primary/45 tracking-wider select-none">
        STUDIO DE ARQUITETURA
      </div>
    </div>
  )
}
