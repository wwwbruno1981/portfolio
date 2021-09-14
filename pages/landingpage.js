import Nav from '../components/nav'
import Footer from '../components/footer'

    export default function Land() {
      return (
          
        <>
            <Nav />

            <div className="relative bg-red-900 md:bg-white overflow-hidden">
                <div className="lmax-w-full">
                    <img
                    className="md:h-96 lg:w-full lg:h-full"
                    src="/assets/bgTECS.jpg"
                    alt="imagem"
                    /> 
                </div>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 mb-5 md:mb-0">
                <div className="sm:text-center lg:text-left">
                    <h1 className="mt-50 lg:absolute lg:inset-y-5 text-4xl font-extrabold text-yellow-300 sm:text-5xl md:text-5xl">
                    <p>INDÚSTRIA 4.0 PARA PEQUENAS E MÉDIAS EMPRESAS: POR QUE UTILIZAR?</p>
                    <span className="block text-white xl:inline sm:text-3xl md:sm:text-3xl">Dados armazenados em nuvem, inteligência artificial, robôs corporativos, sistemas, automação e diversas outras tecnologias: esse é o novo cenário industrial.</span>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Saiba mais...
                  </a>
                </div>
                </div>
                    </h1>
                    
                    </div>
                </main>
                <div className="g:right-0 lg:w-1/2 sm:text-center lg:text-left">
                    <a>

                    </a>
                </div>
            </div>
            <Footer />
         </>
      
        
      )
    }
