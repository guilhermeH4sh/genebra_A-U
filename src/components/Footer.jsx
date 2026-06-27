import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant px-margin-desktop py-16 flex flex-col md:flex-row justify-between gap-12 text-secondary">
      <div>
        <Link to="/" className="font-display-xl text-headline-lg tracking-tighter text-on-background uppercase hover:text-primary transition-colors duration-300">
          GENEBRA
        </Link>
        <p className="mt-4 font-body-md max-w-sm">
          Esculpindo silêncio e luz em forma de espaços habitados. Arquitetura autoral de alto padrão.
        </p>
      </div>
      
      <div className="flex gap-16">
        <div>
          <span className="font-label-caps text-xs text-on-background block mb-4 uppercase">Explorar</span>
          <div className="flex flex-col gap-2 font-body-md">
            <Link to="/projetos" className="hover:text-primary transition-colors">Projetos</Link>
            <Link to="/studio" className="hover:text-primary transition-colors">Estúdio</Link>
            <Link to="/processo" className="hover:text-primary transition-colors">Processo</Link>
            <Link to="/contato" className="hover:text-primary transition-colors">Contato</Link>
          </div>
        </div>
        <div>
          <span className="font-label-caps text-xs text-on-background block mb-4 uppercase">Contato</span>
          <div className="flex flex-col gap-2 font-body-md">
            <a href="mailto:contato@genebra.arq.br" className="hover:text-primary transition-colors">contato@genebra.arq.br</a>
            <a href="tel:+5599999999999" className="hover:text-primary transition-colors">+5599999999999</a>
            <span className="text-xs">São Paulo / SP</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
