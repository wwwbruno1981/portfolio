
const callouts = [
    {
      name: 'Desk and Office',
      imageSrc: '/assets/bgBLACK.jpg',
      imageAlt: 'imagem blackfreeday.',
      href: '#',
    },
  ]
  
  export default function Banner() {
    return (
      <div className="bg-black">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-full mx-auto py-2 sm:py-24 lg:py-2 lg:max-w-none">
            
            <div className="lg:space-y-0 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      
                    </a>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }