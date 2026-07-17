import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import MagneticButton from './MagneticButton.jsx'

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Fecha o menu automaticamente quando a rota mudar
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Controla o scroll do Lenis ou do body ao abrir o menu mobile
  useEffect(() => {
    if (menuOpen) {
      if (window.lenis) window.lenis.stop()
      document.body.classList.add('overflow-hidden')
    } else {
      if (window.lenis) window.lenis.start()
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [menuOpen])

  const handleLogoClick = (e) => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      e.preventDefault()
      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 1.2 })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-background/80 backdrop-blur-lg border-b border-outline-variant/30 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6">
        
        {/* Logo com fonte Serifada Editorial */}
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="flex items-center gap-3 font-serif text-xl md:text-2xl font-bold tracking-tighter text-on-background uppercase hover:text-primary transition-colors duration-300 group z-[101]"
        >
          <svg className="w-8 h-8 fill-current text-primary group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100">
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
          <span>GENEBRA</span>
        </Link>

        {/* Links de navegação centralizados (Desktop) */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { to: '/projetos', label: 'Projetos' },
            { to: '/studio', label: 'Estúdio' },
            { to: '/processo', label: 'Processo' },
            { to: '/contato', label: 'Contato' }
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-mono-label text-xs uppercase tracking-widest transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-secondary hover:text-primary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Botão Magnético de Contato (Desktop) */}
        <div className="hidden md:block">
          <MagneticButton>
            <Link 
              to="/contato" 
              className="px-6 py-2.5 border border-primary text-primary font-mono-label text-[10px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300"
            >
              Contato
            </Link>
          </MagneticButton>
        </div>

        {/* Botão Hambúrguer para Mobile (Minimalista) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-center items-center gap-1.5 w-8 h-8 md:hidden z-[101] relative focus:outline-none"
          aria-label={menuOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          <span 
            className={`h-[1.5px] bg-on-background transition-all duration-300 ease-out ${
              menuOpen ? 'w-6 rotate-45 translate-y-[4px]' : 'w-6'
            }`}
          />
          <span 
            className={`h-[1.5px] bg-on-background transition-all duration-300 ease-out ${
              menuOpen ? 'w-6 -rotate-45 -translate-y-[4.5px]' : 'w-4 self-end'
            }`}
          />
        </button>
      </nav>

      {/* Menu Overlay Mobile */}
      <div 
        className={`fixed inset-0 z-[99] bg-background/98 backdrop-blur-xl md:hidden flex flex-col justify-center px-margin-mobile transition-all duration-500 ease-in-out ${
          menuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <div className="flex flex-col gap-8">
          {[
            { to: '/projetos', label: 'Projetos', number: '01' },
            { to: '/studio', label: 'Estúdio', number: '02' },
            { to: '/processo', label: 'Processo', number: '03' },
            { to: '/contato', label: 'Contato', number: '04' }
          ].map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-baseline gap-4 font-serif text-4xl uppercase tracking-tight transition-all duration-300 transform ${
                  menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                } ${
                  isActive ? 'text-primary' : 'text-on-background hover:text-primary'
                }`
              }
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <span className="font-mono text-xs text-secondary">{item.number}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Footer do Menu Mobile */}
        <div 
          className={`absolute bottom-12 left-margin-mobile right-margin-mobile flex justify-between items-end border-t border-outline-variant/30 pt-6 transition-all duration-500 delay-300 ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] text-secondary uppercase">E-mail</span>
            <a href="mailto:contato@genebra.arq.br" className="font-mono text-xs text-on-background hover:text-primary">contato@genebra.arq.br</a>
          </div>
          <span className="font-mono text-[8px] text-secondary">© {new Date().getFullYear()} GENEBRA</span>
        </div>
      </div>
    </>
  )
}
