import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop py-gutter">
      <Link to="/" className="font-display-xl text-headline-lg tracking-tighter text-on-background uppercase hover:text-primary transition-colors duration-300">
        GENEBRA
      </Link>
      <div className="hidden md:flex items-center gap-10">
        <NavLink 
          to="/projetos" 
          className={({ isActive }) => 
            `font-body-lg text-body-lg transition-colors duration-300 ${
              isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary'
            }`
          }
        >
          Projetos
        </NavLink>
        <NavLink 
          to="/studio" 
          className={({ isActive }) => 
            `font-body-lg text-body-lg transition-colors duration-300 ${
              isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary'
            }`
          }
        >
          Estúdio
        </NavLink>
        <NavLink 
          to="/processo" 
          className={({ isActive }) => 
            `font-body-lg text-body-lg transition-colors duration-300 ${
              isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary'
            }`
          }
        >
          Processo
        </NavLink>
        <NavLink 
          to="/contato" 
          className={({ isActive }) => 
            `font-body-lg text-body-lg transition-colors duration-300 ${
              isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary'
            }`
          }
        >
          Contato
        </NavLink>
      </div>
      <Link to="/contato" className="px-6 py-2 border border-primary text-primary font-label-caps uppercase hover:bg-primary hover:text-on-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary">
        Orçamento
      </Link>
    </nav>
  )
}
