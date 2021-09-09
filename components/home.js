import Nav from './nav';
import Image from 'next/image';

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   const posts = await res.json()
 
 return {
     props: {
       posts,
     },
   }
 }

export default function Index({posts}) {
  return (
    <div>
     <Nav />  
    
     <div className="relative bg-white overflow-hidden">
        <div className="max-w-7x1 mx-auto">
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8 z-10 pb-8 bg-red-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/1">
  <img
     className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
     src="/assets/bgBTC.jpg"
     alt=""
     width={1000} 
     height={1000}
    /> 
</div>
    

     
     <main className=" relative mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
       <div className="sm:text-center lg:text-left">
         <h1 className="text-4xl tracking-tight font-extrabold text-yellow-400 sm:text-5xl md:text-5xl">
           <span className="block xl:inline">Consulta no Banco de Dados Postgreesql</span>{' '}
           <span className="block text-yellow-400 xl:inline">Usando API</span>
         </h1>
         

         <div className="min-h-full flex justify-center text-opacity-50 bg-transparent py-12 px-4 sm:px-6 lg:px-8">
 <div className="max-w-md w-full space-y-8">
   <div>
   
     <h2 className="mt-6 text-center text-3xl font-extrabold text-yellow-400">Digite um nome e um número de telefone</h2>
     <p className="mt-2 text-center text-sm text-gray-600">
     {' '}
     </p>
   </div>
   

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
         Sign in
       </button>
     </div>
   </form>
 </div>
</div>
 </div>
     </main>
   </div>
 </div>
 <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
  <img
     className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
     src="/assets/bgTI.png"
     alt=""
   />
</div>
</div>
    </div>
  )
}