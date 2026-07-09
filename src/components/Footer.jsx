import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-outline-variant/30 px-margin-mobile md:px-margin-desktop py-20 flex flex-col md:flex-row justify-between gap-12 text-secondary select-none">
      <div className="space-y-4">
        <Link 
          to="/" 
          className="flex items-center gap-3 font-serif text-2xl font-bold tracking-tighter text-on-background uppercase hover:text-primary transition-colors duration-300 group"
        >
          <svg className="w-8 h-8 fill-current text-primary group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100">
            <path d="M12 76 Q 50 68 88 76 Q 50 71 12 76 Z" />
            <path d="M28 73 L28 48 L39 42 L39 71 Z" />
            <line x1="31" y1="49" x2="31" y2="72" stroke="currentColor" strokeWidth="1.2" className="text-background" style={{ color: '#050505' }} />
            <line x1="35" y1="47" x2="35" y2="72" stroke="currentColor" strokeWidth="1.2" className="text-background" style={{ color: '#050505' }} />
            <path d="M41 71 L41 33 L52 25 L61 32 L61 71 Z" />
            <g style={{ fill: '#050505' }}>
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
            <line x1="68" y1="45" x2="68" y2="72" stroke="currentColor" strokeWidth="1.2" className="text-background" style={{ color: '#050505' }} />
          </svg>
          <span>GENEBRA</span>
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
            <a href="https://www.linkedin.com/in/guilhermeff45/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LINKEDIN</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">PINTEREST</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
