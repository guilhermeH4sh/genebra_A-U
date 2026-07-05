import React from 'react'

export default function BlueprintCanvas({ phase }) {
  // Renderiza um SVG diferente baseado na fase atual (1 a 5)
  // Cada SVG é desenhado com caminhos que possuem a classe .animate-draw para efeito de animação de desenho técnico.
  
  const renderSVG = () => {
    switch (phase) {
      case 1: // Diálogo: Análise do Lugar, Curvas de Nível e Insolação
        return (
          <svg key="phase1" className="w-full h-full text-primary/80" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Linhas de Grade de Fundo */}
            <g opacity="0.3" stroke="currentColor" strokeWidth="0.5">
              <line x1="50" y1="0" x2="50" y2="400" strokeDasharray="3,3" />
              <line x1="150" y1="0" x2="150" y2="400" strokeDasharray="3,3" />
              <line x1="250" y1="0" x2="250" y2="400" strokeDasharray="3,3" />
              <line x1="350" y1="0" x2="350" y2="400" strokeDasharray="3,3" />
              <line x1="0" y1="50" x2="400" y2="50" strokeDasharray="3,3" />
              <line x1="0" y1="150" x2="400" y2="150" strokeDasharray="3,3" />
              <line x1="0" y1="250" x2="400" y2="250" strokeDasharray="3,3" />
              <line x1="0" y1="350" x2="400" y2="350" strokeDasharray="3,3" />
            </g>
            
            {/* Curvas de Nível (Topografia) */}
            <path d="M 0 380 Q 100 370 200 320 T 400 300" stroke="currentColor" strokeWidth="1" className="animate-draw" />
            <path d="M 0 320 Q 120 310 220 250 T 400 220" stroke="currentColor" strokeWidth="1" className="animate-draw" style={{ animationDelay: '0.2s' }} />
            <path d="M 0 260 Q 140 250 240 180 T 400 140" stroke="currentColor" strokeWidth="1" className="animate-draw" style={{ animationDelay: '0.4s' }} />
            
            {/* Rosa dos Ventos e Eixo Norte */}
            <g transform="translate(80, 100)" stroke="currentColor" strokeWidth="1">
              <circle cx="0" cy="0" r="30" strokeDasharray="2,2" />
              <line x1="0" y1="-45" x2="0" y2="45" className="animate-draw" />
              <line x1="-45" y1="0" x2="45" y2="0" className="animate-draw" />
              <path d="M 0 -45 L 6 -15 L -6 -15 Z" fill="currentColor" />
              <text x="0" y="-50" fill="currentColor" className="font-mono text-[9px]" textAnchor="middle">N</text>
              <text x="0" y="55" fill="currentColor" className="font-mono text-[8px]" textAnchor="middle">SUL</text>
            </g>

            {/* Trajetória Solar (Arco) */}
            <path d="M 50 300 A 180 150 0 0 1 350 300" stroke="#E29A67" strokeWidth="1.5" strokeDasharray="4,4" className="animate-draw" />
            
            {/* Sol da Manhã e Tarde */}
            <circle cx="110" cy="180" r="8" fill="#0E0E0E" stroke="#E29A67" strokeWidth="1" />
            <line x1="110" y1="168" x2="110" y2="160" stroke="#E29A67" strokeWidth="0.8" />
            <line x1="98" y1="180" x2="90" y2="180" stroke="#E29A67" strokeWidth="0.8" />
            <line x1="102" y1="172" x2="96" y2="166" stroke="#E29A67" strokeWidth="0.8" />
            <text x="110" y="200" fill="#E29A67" className="font-mono text-[7px]" textAnchor="middle">SOL_MANHÃ (09:00)</text>
            
            <circle cx="290" cy="180" r="8" fill="none" stroke="#E29A67" strokeWidth="1" />
            <text x="290" y="200" fill="#E29A67" className="font-mono text-[7px]" textAnchor="middle">SOL_TARDE (16:00)</text>

            {/* Vetores de Vento */}
            <g transform="translate(250, 80)" stroke="currentColor" strokeWidth="1">
              <path d="M 0 0 L 60 -20 M 60 -20 L 50 -22 M 60 -20 L 52 -12" className="animate-draw" />
              <path d="M -10 20 L 50 0 M 50 0 L 40 -2 M 50 0 L 42 8" className="animate-draw" style={{ animationDelay: '0.3s' }} />
              <text x="25" y="-25" fill="currentColor" className="font-mono text-[8px]">VENTOS ALÍSEOS</text>
            </g>

            {/* Cotas e Textos HUD */}
            <rect x="20" y="340" width="130" height="40" fill="#0E0E0E" stroke="currentColor" strokeWidth="0.5" />
            <text x="30" y="355" fill="currentColor" className="font-mono text-[9px] font-bold">ANAL_CLIMÁTICA</text>
            <text x="30" y="365" fill="currentColor" className="font-mono text-[7px] opacity-70">LATITUDE: -23.5505</text>
            <text x="30" y="373" fill="currentColor" className="font-mono text-[7px] opacity-70">LONGITUDE: -46.6333</text>
          </svg>
        )
      case 2: // Conceito: Estudos de Volumetria e Extrusão Isométrica
        return (
          <svg key="phase2" className="w-full h-full text-primary/80" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2" stroke="currentColor" strokeWidth="0.5">
              {/* Grid Isométrico Base */}
              <line x1="0" y1="200" x2="400" y2="400" />
              <line x1="0" y1="100" x2="400" y2="300" />
              <line x1="0" y1="0" x2="400" y2="200" />
              <line x1="0" y1="300" x2="200" y2="400" />
              
              <line x1="400" y1="200" x2="0" y2="400" />
              <line x1="400" y1="100" x2="0" y2="300" />
              <line x1="400" y1="0" x2="0" y2="200" />
              <line x1="400" y1="300" x2="200" y2="400" />
            </g>

            {/* Caixa Isométrica Principal (Conceito de Casa) */}
            {/* Bloco Térreo */}
            <g stroke="#E29A67" strokeWidth="1.5">
              {/* Base */}
              <path d="M 120 280 L 220 330 L 320 280 L 220 230 Z" className="animate-draw" />
              {/* Verticais */}
              <line x1="120" y1="280" x2="120" y2="200" className="animate-draw" />
              <line x1="220" y1="330" x2="220" y2="250" className="animate-draw" />
              <line x1="320" y1="280" x2="320" y2="200" className="animate-draw" />
              {/* Topo */}
              <path d="M 120 200 L 220 250 L 320 200 L 220 150 Z" className="animate-draw" />
            </g>

            {/* Bloco Superior Flutuante (Balanço Arquitetônico / Cantilever) */}
            <g stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" opacity="0.6">
              <path d="M 170 225 L 270 275 L 370 225 L 270 175 Z" />
              <line x1="170" y1="225" x2="170" y2="130" />
              <line x1="270" y1="275" x2="270" y2="180" />
              <line x1="370" y1="225" x2="370" y2="130" />
            </g>
            <g stroke="currentColor" strokeWidth="1.5">
              <path d="M 170 130 L 270 180 L 370 130 L 270 80 Z" className="animate-draw" style={{ animationDelay: '0.5s' }} />
            </g>

            {/* Vetor de Extrusão / Setas de Força */}
            <g stroke="#E29A67" strokeWidth="1">
              <path d="M 220 230 L 220 150" className="animate-draw" />
              <path d="M 270 175 L 270 80" className="animate-draw" style={{ animationDelay: '0.8s' }} />
              <path d="M 216 160 L 220 150 L 224 160" fill="none" />
              <path d="M 266 95 L 270 80 L 274 95" fill="none" />
              <text x="280" y="110" fill="#E29A67" className="font-mono text-[8px]">EXTRUSÃO +6.20m</text>
            </g>

            {/* Anotações de Design */}
            <text x="50" y="80" fill="currentColor" className="font-mono text-[9px] uppercase">Estudo de Cheios e Vazios</text>
            <text x="50" y="95" fill="currentColor" className="font-mono text-[7px] opacity-70">Relação de balanço: 1/3 da base</text>
            <text x="50" y="105" fill="currentColor" className="font-mono text-[7px] opacity-70">Orientação do volume: Norte-Nordeste</text>
          </svg>
        )
      case 3: // Projeto: Desenho Técnico Executivo e Detalhamento de Planta
        return (
          <svg key="phase3" className="w-full h-full text-primary/80" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Grid de Projeto Retangular Fino */}
            <g opacity="0.2" stroke="currentColor" strokeWidth="0.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`h-${i}`} x1="0" y1={40 + i * 40} x2="400" y2={40 + i * 40} />
              ))}
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`v-${i}`} x1={40 + i * 40} y1="0" x2={40 + i * 40} y2="400" />
              ))}
            </g>

            {/* Desenho de Paredes (Planta Baixa) */}
            <g stroke="currentColor" strokeWidth="3" strokeLinecap="square">
              {/* Perímetro Externo */}
              <path d="M 80 80 L 320 80 L 320 320 L 80 320 Z" className="animate-draw" />
            </g>
            <g stroke="#0E0E0E" strokeWidth="1">
              {/* Preenchimento interno para simular concreto cortado */}
              <path d="M 80 80 L 320 80 L 320 320 L 80 320 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
            </g>

            {/* Paredes Internas */}
            <g stroke="currentColor" strokeWidth="2">
              <line x1="200" y1="80" x2="200" y2="200" className="animate-draw" style={{ animationDelay: '0.3s' }} />
              <line x1="80" y1="200" x2="200" y2="200" className="animate-draw" style={{ animationDelay: '0.4s' }} />
            </g>

            {/* Abertura de Porta (Arco de projeção) */}
            <g stroke="#E29A67" strokeWidth="1">
              <line x1="140" y1="200" x2="140" y2="160" className="animate-draw" style={{ animationDelay: '0.6s' }} />
              <path d="M 140 160 A 40 40 0 0 1 180 200" strokeDasharray="3,3" className="animate-draw" style={{ animationDelay: '0.8s' }} />
              <text x="120" y="190" fill="#E29A67" className="font-mono text-[8px]">P1 (80x210)</text>
            </g>

            {/* Símbolos de Pilares (Hachuras quadradas) */}
            <rect x="76" y="76" width="8" height="8" fill="#E29A67" />
            <rect x="316" y="76" width="8" height="8" fill="#E29A67" />
            <rect x="316" y="316" width="8" height="8" fill="#E29A67" />
            <rect x="76" y="316" width="8" height="8" fill="#E29A67" />
            <rect x="196" y="76" width="8" height="8" fill="currentColor" />
            <rect x="196" y="196" width="8" height="8" fill="currentColor" />

            {/* Linhas de Cota de Projeto */}
            <g stroke="#E29A67" strokeWidth="0.8" className="text-[8px] font-mono text-primary">
              {/* Cota horizontal superior */}
              <line x1="80" y1="50" x2="320" y2="50" className="animate-draw" />
              <line x1="80" y1="46" x2="80" y2="54" />
              <line x1="320" y1="46" x2="320" y2="54" />
              <text x="200" y="44" fill="#E29A67" textAnchor="middle">8.00m</text>

              {/* Cota de subdivisão */}
              <line x1="80" y1="230" x2="200" y2="230" strokeDasharray="1,1" />
              <text x="140" y="225" fill="#E29A67" textAnchor="middle">4.00m</text>
            </g>

            {/* Selo Técnico do Desenho */}
            <rect x="220" y="270" width="90" height="40" fill="#0E0E0E" stroke="currentColor" strokeWidth="0.5" />
            <text x="225" y="282" fill="currentColor" className="font-mono text-[7px] font-bold">PLANTA LAYOUT</text>
            <text x="225" y="292" fill="currentColor" className="font-mono text-[6px]">ESC: 1:50  |  REV: 02</text>
            <text x="225" y="302" fill="currentColor" className="font-mono text-[6px]">COD: GE-01-PR-03</text>
          </svg>
        )
      case 4: // Material: Detalhe de Encontro de Materiais e Junta Construtiva
        return (
          <svg key="phase4" className="w-full h-full text-primary/80" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Desenho de Detalhamento Construtivo Escala Ampliada */}
            {/* Bloco de Concreto Aparente (Esquerda) */}
            <rect x="30" y="100" width="120" height="200" fill="none" stroke="currentColor" strokeWidth="1" className="animate-draw" />
            <path d="M 30 100 L 150 300" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="3,3" />
            {/* Hachuras de concreto (pequenos triângulos e pontilhados) */}
            <g opacity="0.4" fill="currentColor">
              <path d="M 60 140 L 64 140 L 62 144 Z" />
              <path d="M 110 220 L 114 220 L 112 224 Z" />
              <path d="M 80 260 L 84 260 L 82 264 Z" />
              <circle cx="50" cy="180" r="1.5" />
              <circle cx="120" cy="140" r="1" />
              <circle cx="90" cy="190" r="1" />
              <circle cx="60" cy="250" r="1.5" />
            </g>
            <text x="90" y="200" fill="currentColor" className="font-mono text-[9px]" textAnchor="middle">CONCRETO APARENTE</text>

            {/* Perfil Metálico de Encontro (Meio - Aço Corten ou Carbono) */}
            <rect x="150" y="100" width="30" height="200" fill="#E29A67" fillOpacity="0.2" stroke="#E29A67" strokeWidth="1.5" className="animate-draw" />
            <line x1="165" y1="100" x2="165" y2="300" stroke="#E29A67" strokeWidth="0.5" strokeDasharray="4,4" />
            <text x="165" y="85" fill="#E29A67" className="font-mono text-[8px]" textAnchor="middle">PERFIL METÁLICO U 75x150</text>

            {/* Painel de Vidro Duplo Insulado (Direita) */}
            <rect x="180" y="120" width="10" height="160" fill="none" stroke="currentColor" strokeWidth="1" className="animate-draw" />
            <rect x="195" y="120" width="10" height="160" fill="none" stroke="currentColor" strokeWidth="1" className="animate-draw" />
            <line x1="190" y1="130" x2="190" y2="270" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />
            <text x="215" y="200" fill="currentColor" className="font-mono text-[8px] tracking-wider" transform="rotate(90 215 200)">VIDRO LAMINADO 12mm</text>

            {/* Detalhe de Junta de Vedação (Silicone Elastômero) */}
            <circle cx="172" cy="150" r="4" fill="#0E0E0E" stroke="#E29A67" strokeWidth="1" />
            <line x1="172" y1="150" x2="260" y2="150" stroke="#E29A67" strokeWidth="0.8" strokeDasharray="2,2" className="animate-draw" />
            <text x="265" y="153" fill="#E29A67" className="font-mono text-[8px]">JUNTA ELASTÓMERA 8mm</text>

            {/* Parafuso de Ancoragem Inox */}
            <g transform="translate(135, 250)">
              <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="1.5" className="animate-draw" />
              <rect x="-5" y="-5" width="5" height="10" fill="currentColor" />
              <line x1="40" y1="-8" x2="40" y2="8" stroke="currentColor" strokeWidth="2" />
              <text x="50" y="3" fill="currentColor" className="font-mono text-[8px]">INSERT INOX M12</text>
            </g>
            
            {/* Círculo de Destaque Técnico */}
            <circle cx="165" cy="200" r="85" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8,8" />
            <text x="165" y="295" fill="currentColor" className="font-mono text-[8px] opacity-60" textAnchor="middle">CUPULA DE JUNTA ESTRUTURAL</text>
          </svg>
        )
      case 5: // Espaço: Perspectiva Humana, Luz e Ângulo Visual
        return (
          <svg key="phase5" className="w-full h-full text-primary/80" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Linhas de Perspectiva com Ponto de Fuga */}
            <circle cx="200" cy="180" r="2" fill="#E29A67" />
            <text x="200" y="172" fill="#E29A67" className="font-mono text-[7px]" textAnchor="middle">PONTO_FUGA (VP)</text>
            
            <g opacity="0.2" stroke="currentColor" strokeWidth="0.5">
              <line x1="200" y1="180" x2="0" y2="0" />
              <line x1="200" y1="180" x2="400" y2="0" />
              <line x1="200" y1="180" x2="0" y2="400" />
              <line x1="200" y1="180" x2="400" y2="400" />
              <line x1="200" y1="180" x2="0" y2="180" />
              <line x1="200" y1="180" x2="400" y2="180" />
            </g>

            {/* Desenho do Espaço Perspectivado (Corredor Minimalista) */}
            <g stroke="currentColor" strokeWidth="1">
              {/* Teto e Chão linhas de encontro */}
              <line x1="120" y1="140" x2="280" y2="140" className="animate-draw" />
              <line x1="120" y1="220" x2="280" y2="220" className="animate-draw" />
              <line x1="120" y1="140" x2="120" y2="220" className="animate-draw" />
              <line x1="280" y1="140" x2="280" y2="220" className="animate-draw" />

              {/* Paredes de Projeção em direção ao observador */}
              <line x1="120" y1="140" x2="0" y2="80" className="animate-draw" />
              <line x1="120" y1="220" x2="0" y2="280" className="animate-draw" />
              <line x1="280" y1="140" x2="400" y2="80" className="animate-draw" />
              <line x1="280" y1="220" x2="400" y2="280" className="animate-draw" />
            </g>

            {/* Feixe de Luz Natural Rasgando o Teto (Claraboia/Zenital) */}
            <path d="M 0 80 L 150 140 L 180 180 L 0 240 Z" fill="#E29A67" fillOpacity="0.08" />
            <line x1="150" y1="140" x2="0" y2="240" stroke="#E29A67" strokeWidth="1" strokeDasharray="3,3" className="animate-draw" />
            <text x="80" y="130" fill="#E29A67" className="font-mono text-[8px] tracking-widest" transform="rotate(18 80 130)">LUZ_ZENITAL</text>

            {/* Silhueta Humana para Proporção Escala (Modulor de Le Corbusier style) */}
            <g transform="translate(240, 160)" stroke="currentColor" strokeWidth="1">
              {/* Cabeça */}
              <circle cx="0" cy="15" r="4" fill="#0E0E0E" className="animate-draw" />
              {/* Tronco */}
              <line x1="0" y1="19" x2="0" y2="38" className="animate-draw" />
              {/* Braços */}
              <path d="M -8 24 L 0 21 L 8 24" className="animate-draw" />
              {/* Pernas */}
              <line x1="0" y1="38" x2="-4" y2="58" className="animate-draw" />
              <line x1="0" y1="38" x2="4" y2="58" className="animate-draw" />
              {/* Linha de Cota de Altura Humana */}
              <line x1="16" y1="11" x2="16" y2="58" stroke="#E29A67" strokeWidth="0.5" />
              <line x1="13" y1="11" x2="19" y2="11" stroke="#E29A67" strokeWidth="0.5" />
              <line x1="13" y1="58" x2="19" y2="58" stroke="#E29A67" strokeWidth="0.5" />
              <text x="24" y="38" fill="#E29A67" className="font-mono text-[7px]">1.80m (MÓDULO)</text>
            </g>

            {/* Anotação Visual da Perspectiva */}
            <text x="50" y="320" fill="currentColor" className="font-mono text-[9px] uppercase">Relação Atmosférica e Escala</text>
            <text x="50" y="335" fill="currentColor" className="font-mono text-[7px] opacity-70">Aberturas calibradas para conforto visual</text>
            <text x="50" y="345" fill="currentColor" className="font-mono text-[7px] opacity-70">Proporção áurea de enquadramento da paisagem</text>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="w-full aspect-square md:w-[400px] md:h-[400px] bg-[#0E0E0E] border border-outline-variant p-6 flex items-center justify-center relative overflow-hidden technical-card rounded shadow-xl">
      <div className="absolute top-3 left-4 font-mono text-[8px] text-secondary tracking-widest flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
        <span>HUD_BOARD // LIVE_DRAFT</span>
      </div>
      <div className="absolute top-3 right-4 font-mono text-[8px] text-secondary">
        <span>Fase 0{phase}</span>
      </div>
      <div className="w-full h-full mt-2">
        {renderSVG()}
      </div>
    </div>
  )
}
