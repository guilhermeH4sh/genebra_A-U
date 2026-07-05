import React, { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  
  const followerRef = useRef(null)
  const dotRef = useRef(null)
  const coordsRef = useRef(null)
  const axisXRef = useRef(null)
  const axisYRef = useRef(null)
  
  const mouseRef = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
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

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    const updateHoverState = () => {
      const clickables = document.querySelectorAll(
        'a, button, input, select, textarea, [role="button"], .project-card, .clickable, select option'
      )
      
      const onEnter = () => setHovering(true)
      const onLeave = () => setHovering(false)
      
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })

      return () => {
        clickables.forEach((el) => {
          el.removeEventListener('mouseenter', onEnter)
          el.removeEventListener('mouseleave', onLeave)
        })
      }
    }

    let cleanupHover = updateHoverState()
    
    const observer = new MutationObserver(() => {
      cleanupHover()
      cleanupHover = updateHoverState()
    })
    
    observer.observe(document.body, { childList: true, subtree: true })

    let animationFrameId
    const render = () => {
      const speed = 0.15
      
      followerPos.current.x += (mouseRef.current.x - followerPos.current.x) * speed
      followerPos.current.y += (mouseRef.current.y - followerPos.current.y) * speed
      
      if (followerRef.current) {
        followerRef.current.style.left = `${followerPos.current.x}px`
        followerRef.current.style.top = `${followerPos.current.y}px`
      }
      
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseRef.current.x}px`
        dotRef.current.style.top = `${mouseRef.current.y}px`
      }

      if (coordsRef.current) {
        coordsRef.current.style.left = `${mouseRef.current.x}px`
        coordsRef.current.style.top = `${mouseRef.current.y}px`
      }

      if (axisXRef.current) {
        axisXRef.current.style.left = `${mouseRef.current.x}px`
      }
      if (axisYRef.current) {
        axisYRef.current.style.top = `${mouseRef.current.y}px`
      }

      animationFrameId = requestAnimationFrame(render)
    }
    
    render()

    return () => {
      window.removeEventListener('resize', checkDevice)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      cleanupHover()
      observer.disconnect()
      cancelAnimationFrame(animationFrameId)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [isMobile, isVisible])

  if (isMobile || !isVisible) return null

  return (
    <>
      {hovering && (
        <>
          <div ref={axisXRef} className="cad-cursor-axis-x" />
          <div ref={axisYRef} className="cad-cursor-axis-y" />
        </>
      )}
      
      <div 
        ref={followerRef} 
        className={`cad-cursor-follower ${hovering ? 'hovering' : ''}`}
      />
      
      <div 
        ref={dotRef} 
        className="cad-cursor-dot"
      />
      
      <div 
        ref={coordsRef} 
        className="cad-cursor-coords"
      >
        <span>X: {coords.x}</span>
        <span className="ml-2">Y: {coords.y}</span>
      </div>
    </>
  )
}
