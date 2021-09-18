import Nav from '../components/nav'
import Footer from '../components/footer'

    export default function Land() {
      return (
          
        <>
            <Nav />

            <div className="relative bg-indigo-400 md:bg-white overflow-hidden">
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
 <div className="max-w-md w-full space-y-8">
  <form className="mt-8 space-y-6" action="#" method="POST">
     <input type="hidden" name="remember" defaultValue="true" />
     <div className="rounded-md shadow-sm -space-y-px">
       <div>
         <label htmlFor="email-address" className="sr-only">
           Email address
         </label>
         <input
           id="email-address"
           name="email"
           type="email"
           autoComplete="email"
           required
           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
           placeholder="Email address"
         />
       </div>
       <div>
         <label htmlFor="password" className="sr-only">
           Password
         </label>
         <input
           id="password"
           name="password"
           type="password"
           autoComplete="current-password"
           required
           className="mt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
           placeholder="Password"
         />
       </div>
     </div>
     <div>

       <button
         type="submit"
         className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
       >
         <span className="absolute left-0 inset-y-0 flex items-center pl-3">
         </span>
         Saiba mais
       </button>
     </div>
   </form>
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
