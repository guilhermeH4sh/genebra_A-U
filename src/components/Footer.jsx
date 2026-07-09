import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-outline-variant/30 px-margin-mobile md:px-margin-desktop py-20 flex flex-col md:flex-row justify-between gap-12 text-secondary select-none">
      <div className="space-y-4">
        <Link to="/" className="font-display-xl text-2xl font-bold tracking-tighter text-on-background uppercase hover:text-primary transition-colors duration-300">
          GENEBRA
        </Link>
        <p className="font-body-md text-sm max-w-sm leading-relaxed">
          Esculpindo o silêncio e a luz em forma de espaços habitáveis. Arquitetura editorial de alto padrão.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-x-20 gap-y-10">
        <div>
          <span className="font-mono-label text-xs text-on-background block mb-6 uppercase tracking-wider">Navegação</span>
          <div className="flex flex-col gap-3 font-mono-label text-xs">
            <Link to="/projetos" className="hover:text-primary transition-colors">PROJETOS</Link>
            <Link to="/studio" className="hover:text-primary transition-colors">ESTÚDIO</Link>
            <Link to="/processo" className="hover:text-primary transition-colors">PROCESSO</Link>
            <Link to="/contato" className="hover:text-primary transition-colors">CONTATO</Link>
          </div>
        </div>
        <div>
          <span className="font-mono-label text-xs text-on-background block mb-6 uppercase tracking-wider">Social</span>
          <div className="flex flex-col gap-3 font-mono-label text-xs">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">INSTAGRAM</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LINKEDIN</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">PINTEREST</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
