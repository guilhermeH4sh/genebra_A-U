import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [cursorType, setCursorType] = useState('default') // 'default' | 'link' | 'project' | 'scroll'
  const [cursorLabel, setCursorLabel] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Detectar toque ou tela menor que md
    const checkDevice = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
      setIsMobile(isTouch)
      if (!isTouch) {
        document.documentElement.classList.add('custom-cursor-active')
      } else {
        document.documentElement.classList.remove('custom-cursor-active')
      }
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    if (isMobile) return

    const cursor = cursorRef.current
    if (!cursor) return

    // Configurar GSAP quickTo para mover o cursor de forma instantânea e leve
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.05, ease: 'power1.out' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.05, ease: 'power1.out' })

    // Estado inicial de posicionamento para evitar "pulo"
    gsap.set(cursor, { xPercent: -50, yPercent: -50 })

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true)
      xTo(e.clientX)
      yTo(e.clientY)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    // Escutar eventos de hover em elementos específicos
    const handleMouseOver = (e) => {
      // Procurar element mais próximo com data-cursor ou links normais
      const target = e.target.closest('[data-cursor], a, button, select, textarea, [role="button"]')
      
      if (!target) {
        setCursorType('default')
        setCursorLabel('')
        return
      }

      // Se for um link ou botão genérico
      if (target.matches('a, button, select, textarea, [role="button"]')) {
        setCursorType('link')
        setCursorLabel('')
      }

      // Se tiver data-cursor explícito
      const dataCursor = target.getAttribute('data-cursor')
      if (dataCursor) {
        setCursorType(dataCursor) // ex: 'project' ou 'scroll'
        
        const label = target.getAttribute('data-cursor-label')
        if (label) {
          setCursorLabel(label)
        }
      }
    }

    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('resize', checkDevice)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseover', handleMouseOver)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [isMobile, isVisible])

  if (isMobile) return null

  // Mapear tipos de cursor para classes CSS
  const getCursorClass = () => {
    switch (cursorType) {
      case 'link':
        return 'hovering-link'
      case 'project':
        return 'hovering-project'
      case 'scroll':
        return 'hovering-scroll'
      default:
        return ''
    }
  }

  return (
    <div
      ref={cursorRef}
      className={`circular-cursor ${getCursorClass()}`}
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: 'none',
        position: 'fixed',
        left: 0,
        top: 0
      }}
    >
      <span className="cursor-label">{cursorLabel}</span>
    </div>
  )
}
