import Barra from './barra';

const callouts = [
  {
    name: 'Style',
    description: 'Landing Page',
    imageSrc: '/assets/bgTECS.jpg',
    imageAlt: 'imagem de landingpage.',
    href: '/landingpage',
  },
  {
    name: 'Style',
    description: 'Ecommerce',
    imageSrc: '/assets/bgECO.png',
    imageAlt: 'imafem de ecommerce.',
    href: '/ecommerce',
  },
  {
    name: 'Style',
    description: 'Em construção',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]
function Folder() {
        return (
          <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-10 lg:max-w-none">
             <Barra />
    
              <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {callouts.map((callout) => (
                  <div key={callout.name} className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href={callout.href}>
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-3xl font-semibold text-gray-900">{callout.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }
export default Folder