const ids = [
    {
        id:'01',
       img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
      name: 'Certo',
      description: 'Get a better understanding of where your traffic is coming from.',
      alt: 'Man looking at item at a store',
      
    },
]
function Folder() {
        return (
        <div class="flex flex-wrap md:flex-wrap justify-center md:justify-center">
                    
            {ids.map((item) => (
                  
                  <div class="my-2 md:my-2 mx-2 max-w-md bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl md:w-80  border-2 border-red-700 border-opacity-75 md:border-opacity-50">
                   <div class="md:flex-wap">
                     <div class="md:flex-shrink-0">
                       <img 
                       key={item.id}  
                       src={item.img}
                       alt={item.alt}
                       class="h-48 w-full object-cover md:w-full md:h-48"/>
                       </div>
                     <div class="p-8">
                       <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.name}</div>
                       <a href={item.href} class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{item.description}</a>
                       <button
                           type="submit"
                           className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 my-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                         >
                           <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                           </span>
                           Sign in
                         </button> </div>
                   </div>
                  </div>
                  
              ))}              
        </div>   
      )
    }
export default Folder