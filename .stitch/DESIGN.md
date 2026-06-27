# Sistema de Design: Genebra Arquitetura & Urbanismo

Este documento define os tokens do design system do site **Genebra Arquitetura & Urbanismo**, otimizados para alto contraste e acessibilidade conformidade WCAG AA ou superior.

## Cores

O projeto utiliza uma paleta escura de alto contraste, unindo minimalismo contemporâneo e legibilidade confortável:

| Nome | Código Hex | Papel / Uso |
| :--- | :--- | :--- |
| **Fundo (Background)** | `#0E0E0E` | Preto profundo e uniforme para base sólida |
| **Superfície (Surface)** | `#161616` | Grafite escuro para blocos, cards e menus, garantindo visibilidade |
| **Texto Principal** | `#F5F5F5` | Off-white para títulos e textos principais (Contraste > 15:1) |
| **Texto Secundário** | `#A3A3A3` | Cinza médio para subtítulos e parágrafos de apoio (Contraste > 6:1) |
| **Destaque (Primary)** | `#E29A67` | Cobre sofisticado para elementos de interação (hovers, links ativos e detalhes) |
| **Bordas (Outline)** | `#2A2A2A` | Cinza nítido para divisórias e contornos bem perceptíveis |

## Tipografia

- **Playfair Display**: Destinada a títulos principais e expressões poéticas de arquitetura.
- **Montserrat**: Destinada a parágrafos, botões e labels técnicos, assegurando legibilidade confortável.
- **Space Grotesk**: Utilizada para metadados e badges técnicos.

## Espaçamento & Bordas

- **Unit**: `8px`
- **Gutter**: `24px`
- **Margin Desktop**: `80px`
- **Section Gap**: `160px`
- **Border Radius**: `0.25rem` (padrão nítido) a `full` (indicadores circulares)

## Elementos de Interação & Feedback

- **Botões:** Possuem estados de hover onde o contorno cobre (`#E29A67`) preenche o fundo inteiramente, invertendo a cor do texto para o preto profundo (`#0E0E0E`), gerando excelente resposta visual.
- **Navegação:** A barra superior é sólida (`#161616`) e delimitada por uma borda inferior nítida (`#2A2A2A`), assegurando que os links permaneçam totalmente visíveis e legíveis em qualquer ponto da rolagem.
