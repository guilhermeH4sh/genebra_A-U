import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MagneticButton from './MagneticButton.jsx'

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-outline-variant/30 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6">
      
      {/* Logo com fonte Serifada Editorial */}
      <Link 
        to="/" 
        className="font-display-xl text-xl md:text-2xl font-bold tracking-tighter text-on-background uppercase hover:text-primary transition-colors duration-300"
      >
        GENEBRA
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
