import React, { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Projetos from './pages/Projetos.jsx'
import Studio from './pages/Studio.jsx'
import Processo from './pages/Processo.jsx'
import Contato from './pages/Contato.jsx'
import CustomCursor from './components/CustomCursor.jsx'

// Helper para rolar para o topo automaticamente na troca de páginas
function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="min-h-screen flex flex-col justify-between selection:bg-primary selection:text-on-primary font-body-md text-on-background bg-background relative overflow-hidden">
        <div className="noise-overlay"></div>
        
        {/* Grade técnica sutil no fundo global */}
        <div className="blueprint-grid-bg opacity-30"></div>
        <div className="blueprint-grid-bg-fine opacity-20"></div>
        
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
