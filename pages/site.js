import Nav from '../components/nav'
import Footer from '../components/footer'

        const features = [
          {
            name: 'HTML5 / XLM',
            description:
              'HTML – Permite adicionar conteúdos em uma página através de marcação de textos. É a estrutura óssea de um site.',
            icon: '/icon/iconHTML.png',
          },
          {
            name: 'TAILWIND CSS',
            description:
              'Tailwind CSS fornecer as ferramentas (utility classes) para eu criar meus componentes (ao invés de fornecer os componentes já prontos).',
            icon: '/icon/iconTAILWIND.png',
          },
          {
            name: 'JAVSCRIPT / ES6',
            description:
              'JavaScript – Controla o comportamento dos elementos de uma página, executando funções dinâmicos dos conteúdos, animações, aplicativos e interações em geral.',
            icon: '/icon/iconJS.png',
          },
          {
            name: 'NEXT JS',
            description:
              'Next.js – é um framework para React. O que isso quer dizer? O React é uma biblioteca Javascript para construção de interfaces e o Next é considerado um framework pois adiciona várias funcionalidades em cima do React.',
            icon: '/icon/iconNEXT.png',
          },
        
        ]
      const featuresHost = [
          {
            name: 'GITHUB',
            description:
              'O Github – é uma plataforma para gerenciar seu código remoto (na nuvem) utilizando o Git como sistema de versionamento de controle.',
            icon: '/icon/iconGIT.png',
          },
          {
            name: 'VERCEL',
            description:
              'A Vercel – é uma plataforma voltada para a hospedagem de aplicações de uma forma bem simples e rápida.',
            icon: '/icon/iconVERCEL.png',
          },
        ]
function Site() {
    return (
       <>
        <Nav />  
<div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Atualizado em 10/09/2021</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tecnologias para FrontEnd (Responsivo)
          </p>
         
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <img
                       src={feature.icon}
                       className="h-15 w-13" aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tecnologias para Hospedagem
          </p>
         </div>
         <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresHost.map((featuresHost) => (
              <div key={featuresHost.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <img
                       src={featuresHost.icon}
                       className="h-15 w-13" aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{featuresHost.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{featuresHost.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
 <Footer />
      </>
    )
}
export default Site