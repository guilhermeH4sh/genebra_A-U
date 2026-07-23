import { useEffect } from 'react'

export default function SEO({ 
  title = 'Genebra | Arquitetura Editorial', 
  description = 'Estúdio autoral de arquitetura contemporânea e design de interiores de luxo em São Paulo.',
  path = '',
  image = 'assets/images/casa_brise.png'
}) {
  useEffect(() => {
    // 1. Atualizar Título da Página
    document.title = title

    // Helper para criar ou atualizar meta tags
    const updateMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector)
      if (element) {
        element.setAttribute(attribute, value)
      } else {
        element = document.createElement('meta')
        const key = selector.includes('[name=') ? 'name' : 'property'
        const keyName = selector.match(/\[(?:name|property)="?([^"]+)"?\]/)?.[1]
        if (keyName) {
          element.setAttribute(key, keyName)
          element.setAttribute(attribute, value)
          document.head.appendChild(element)
        }
      }
    }

    // 2. Meta Description
    updateMetaTag('meta[name="description"]', 'content', description)
    updateMetaTag('meta[name="title"]', 'content', title)

    // 3. Canonical Link
    const fullUrl = `https://genebra.arq.br${path}`
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', fullUrl)
    } else {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      canonicalLink.setAttribute('href', fullUrl)
      document.head.appendChild(canonicalLink)
    }

    // 4. Open Graph Meta Tags
    updateMetaTag('meta[property="og:title"]', 'content', title)
    updateMetaTag('meta[property="og:description"]', 'content', description)
    updateMetaTag('meta[property="og:url"]', 'content', fullUrl)
    updateMetaTag('meta[property="og:image"]', 'content', `https://genebra.arq.br/${image.replace(/^\//, '')}`)

    // 5. Twitter Meta Tags
    updateMetaTag('meta[property="twitter:title"]', 'content', title)
    updateMetaTag('meta[property="twitter:description"]', 'content', description)
    updateMetaTag('meta[property="twitter:url"]', 'content', fullUrl)
    updateMetaTag('meta[property="twitter:image"]', 'content', `https://genebra.arq.br/${image.replace(/^\//, '')}`)

  }, [title, description, path, image])

  return null
}
