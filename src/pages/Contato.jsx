import React, { useEffect, useState } from 'react'

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'residencial',
    budget: 'low',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        projectType: 'residencial',
        budget: 'low',
        message: ''
      })
    }, 4000)
  }

  return (
    <main className="pt-32">
      {/* Cabeçalho da Página */}
      <section className="px-margin-desktop py-12">
        <div className="max-w-4xl">
          <p className="font-label-caps text-primary mb-4 tracking-[0.3em] uppercase">Inicie uma Conversa</p>
          <h1 className="font-display-xl text-5xl md:text-7xl leading-tight mb-8">
            Pronto para dar forma<br/><span className="italic font-normal text-secondary">ao seu novo espaço?</span>
          </h1>
        </div>
      </section>

      {/* Formulário & Detalhes de Contato */}
      <section className="py-12 px-margin-desktop pb-section-gap grid grid-cols-1 lg:grid-cols-2 gap-32">
        {/* Esquerda: Info de Contato */}
        <div className="scroll-reveal">
          <p className="font-body-lg text-secondary mb-12">
            Seja para uma residência privativa exclusiva ou um edifício comercial icônico, estamos prontos para receber o seu projeto. Preencha o briefing preliminar ao lado para iniciarmos o diálogo.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <span className="material-symbols-outlined text-primary">mail</span>
              <div>
                <span className="text-xs text-secondary block uppercase font-mono-label">E-mail Comercial</span>
                <a className="font-body-lg hover:text-primary transition-colors text-on-background" href="mailto:contato@genebra.arq.br">
                  contato@genebra.arq.br
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <span className="text-xs text-secondary block uppercase font-mono-label">Estúdio Principal</span>
                <span className="font-body-lg text-on-background">Av. Brigadeiro Faria Lima, 3477 - Itaim Bibi, São Paulo - SP</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="material-symbols-outlined text-primary">call</span>
              <div>
                <span className="text-xs text-secondary block uppercase font-mono-label">Telefone</span>
                <a className="font-body-lg hover:text-primary transition-colors text-on-background" href="tel:+5599999999999">
                  +5599999999999
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Direita: Formulário de Briefing com fundo perceptível */}
        <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          {submitted ? (
            <div className="bg-surface p-10 border border-primary text-center space-y-6">
              <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
              <h3 className="font-display-xl text-2xl text-on-background font-bold">Mensagem Enviada!</h3>
              <p className="text-secondary font-body-md">Agradecemos o contato. Retornaremos sua solicitação em até 48 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12 bg-surface p-10 border border-outline-variant">
              <div className="relative">
                <input 
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary transition-colors text-body-lg text-on-background" 
                  id="name" 
                  placeholder=" " 
                  type="text" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <label className="absolute top-4 left-0 font-label-caps text-secondary uppercase transition-all duration-300 peer-placeholder-shown:text-body-lg peer-placeholder-shown:normal-case peer-focus:top-[-20px] peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-[-20px] peer-[:not(:placeholder-shown)]:text-[10px]" htmlFor="name">
                  Nome Completo
                </label>
              </div>
              <div className="relative">
                <input 
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary transition-colors text-body-lg text-on-background" 
                  id="email" 
                  placeholder=" " 
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label className="absolute top-4 left-0 font-label-caps text-secondary uppercase transition-all duration-300 peer-placeholder-shown:text-body-lg peer-placeholder-shown:normal-case peer-focus:top-[-20px] peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-[-20px] peer-[:not(:placeholder-shown)]:text-[10px]" htmlFor="email">
                  Endereço de E-mail
                </label>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-label-caps text-secondary uppercase text-[10px] mb-3" htmlFor="projectType">
                    Tipo de Projeto
                  </label>
                  <select 
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary text-on-background text-sm cursor-pointer" 
                    id="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                  >
                    <option className="bg-surface" value="residencial">Residencial de Alto Padrão</option>
                    <option className="bg-surface" value="comercial">Comercial / Corporativo</option>
                    <option className="bg-surface" value="interiores">Interiores / Corporativos</option>
                    <option className="bg-surface" value="outro">Outros Segmentos</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-caps text-secondary uppercase text-[10px] mb-3" htmlFor="budget">
                    Investimento Previsto
                  </label>
                  <select 
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary text-on-background text-sm cursor-pointer" 
                    id="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option className="bg-surface" value="low">Até R$ 800.000</option>
                    <option className="bg-surface" value="medium">R$ 800.000 a R$ 2.000.000</option>
                    <option className="bg-surface" value="high">Acima de R$ 2.000.000</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <textarea 
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary transition-colors text-body-lg text-on-background resize-none overflow-hidden" 
                  id="message" 
                  placeholder=" " 
                  rows="2" 
                  value={formData.message}
                  onChange={(e) => {
                    handleInputChange(e)
                    e.target.style.height = 'auto'
                    e.target.style.height = e.target.scrollHeight + 'px'
                  }}
                  required
                ></textarea>
                <label className="absolute top-4 left-0 font-label-caps text-secondary uppercase transition-all duration-300 peer-placeholder-shown:text-body-lg peer-placeholder-shown:normal-case peer-focus:top-[-20px] peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-[-20px] peer-[:not(:placeholder-shown)]:text-[10px]" htmlFor="message">
                  Escreva sobre suas ideias para a obra...
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full py-6 border border-primary text-primary font-label-caps uppercase hover:bg-primary hover:text-on-primary transition-all duration-500 tracking-widest focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Enviar Solicitação
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
