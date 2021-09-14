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
    
     <div className="relative bg-red-900 md:bg-white overflow-hidden">
        <div className="max-w-full">
     
  <img
     className="w-full sm:h-full md:h-96 lg:w-full lg:h-full"
     src="/assets/bgTI.png"
     alt="imagem"
    
    /> 
</div>
     <main className=" mx-auto max-w-7xl px-4 sm:px-6">
       <div className="sm:text-center lg:text-left">
         <h1 className="lg:absolute lg:inset-y-20 lg:right-0 lg:w-1/2 text-4xl tracking-tight font-extrabold text-yellow-400 sm:text-5xl md:text-5xl">
         <p>Olá, seja bem vindo!</p>
           <p>Meu nome é Bruno</p>
           <span className="block text-3xl text-white xl:inline">Conheça um pouco do meu trabalho.</span>
         </h1>
         
 </div>
     </main>
   </div>
 </div>

  )
}