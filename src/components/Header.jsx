import { Link, NavLink, useLocation } from 'react-router-dom'
import MagneticButton from './MagneticButton.jsx'

export default function Header() {
  const location = useLocation()

  const handleLogoClick = (e) => {
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
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-outline-variant/30 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6">
      
      {/* Logo com fonte Serifada Editorial */}
      <Link 
        to="/" 
        onClick={handleLogoClick}
        className="flex items-center gap-3 font-serif text-xl md:text-2xl font-bold tracking-tighter text-on-background uppercase hover:text-primary transition-colors duration-300 group"
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

      {/* Links de navegação centralizados */}
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

      {/* Botão Magnético de Contato */}
      <MagneticButton>
        <Link 
          to="/contato" 
          className="px-6 py-2.5 border border-primary text-primary font-mono-label text-[10px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300"
        >
          Contato
        </Link>
      </MagneticButton>

    </nav>
  )
}
