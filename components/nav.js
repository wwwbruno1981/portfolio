import {Disclosure} from '@headlessui/react'
import {MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Tecnologias do Site', href: '/site' },
    { name: 'Curriculo', href: '/curriculo' },
    
  ]
  
  function Nav() {
    return (
      <div>
        <Disclosure as="nav" className="shadow-2xl bg-gradient-to-r from-red-700 via-red-900 to-red-700">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <p className="underline md:underline ml-3 font-medium  text-white text-3xl truncate">
                        <span>|Portfólio|</span>
                        </p> 
                    </div>
                       <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item) => (
                              <Link 
                              key={item.name}
                              href={item.href}
                            >
                              <a className="font-medium text-white hover:text-indgo-500"
                            >
                                 {item.name}
                               </a>
                               </Link>
                         ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between h-16">
                    {/* Whatzapp button */}
                    <div className="flex items-center">
                     <div className="flex-shrink-0">
                       <a href="#"> <img
                          className="h-8 w-8 mx-auto"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoU04QfrAKPPZaBAQZb7zkvCNmvMf7HcxLXw&usqp=CAU"
                          alt="Workflow"
                        /></a>
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
  
              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                          
                         <Link 
                         key={item.name}
                         href={item.href}
                       >
                         <a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50"
                       >
                            {item.name}
                          </a>
                          </Link>
                        ))}
                   </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">Portfólio</div>
           
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        </div>
    )
  }
  export default Nav