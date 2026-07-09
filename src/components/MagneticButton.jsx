import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MagneticButton({ children, className = "", ...props }) {
  const containerRef = useRef(null)
  const itemRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const item = itemRef.current
    if (!container || !item) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      
      // Centro do container
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Distância do cursor em relação ao centro
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY

      // Força de atração (limitar deslocamento máximo a 15px)
      const strength = 0.35
      const moveX = distanceX * strength
      const moveY = distanceY * strength

      gsap.to(item, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      // Retorna suavemente para a posição inicial
      gsap.to(item, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)'
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className={`magnetic-wrap p-4 -m-4 ${className}`} {...props}>
      <div ref={itemRef} className="magnetic-item">
        {children}
      </div>
    </div>
  )
}
