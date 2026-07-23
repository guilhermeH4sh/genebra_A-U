import React, { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Home from './pages/Home.jsx'
import Projetos from './pages/Projetos.jsx'
import Studio from './pages/Studio.jsx'
import Processo from './pages/Processo.jsx'
import Contato from './pages/Contato.jsx'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Helper para rolar para o topo automaticamente na troca de páginas
function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    // Rolar com o Lenis se disponível
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])
  
  return null
}

export default function App() {
  useEffect(() => {
    // Configurar e inicializar o Lenis para scroll suave
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing suave e natural
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      autoResize: true
    })

    // Sincronizar Lenis com GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Integrar Lenis com o ticker do GSAP para sincronização perfeita de quadros
    const updateTicker = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    window.lenis = lenis

    // Garantir que a classe loaded esteja no body imediatamente
    document.body.classList.add('loaded')
    document.body.classList.remove('lenis-stopped')

    return () => {
      lenis.destroy()
      gsap.ticker.remove(updateTicker)
      window.lenis = null
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
      
      {/* O site monta e carrega de forma instantânea sem telas de preloader */}
      <div 
        className="min-h-screen flex flex-col justify-between selection:bg-primary selection:text-on-primary font-body-md text-on-background bg-background relative overflow-hidden"
      >
        {/* Camada global de ruído tátil */}
        <div className="noise-overlay"></div>
        
        {/* Linhas guias de blueprint de segundo plano */}
        <div className="blueprint-grid-bg opacity-30"></div>
        
        {/* Cursor interativo customizado */}
        <CustomCursor />
        
        <Header />
        
        <div className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/processo" element={<Processo />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  )
}
