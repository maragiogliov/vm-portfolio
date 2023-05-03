/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon,MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import './Hero.css';
import Block1 from '../Block1/Block1'
import Block3 from '../Block3/Block3';
import Block4 from '../Block4/Block4';
import Block5 from '../Block5/Block5';
import Block7 from '../Block7/Block7';
import BlockIGP from '../BlockIGP/BlockIGP'
import Animation2 from '../Animation2/Animation2';
import Contact from '../Contact/Contact'

const navigation = [
  { name: 'Shop', href: '#' },
  { name: 'Farm', href: '#' },
  { name: 'Subscriptions', href: '#' },
  { name: 'Articles', href: '#' },
  { name: 'Story', href: '#' },
]

const logoai = new URL ("../../assets/[removal.ai]_tmp-63af34fbbaf9d.png",import.meta.url)

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="">
      <div className=" inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      </div>
      
      <div className="h-16 px-6 lg:px-8">
        <div className='flex-row align-center justify-center'>
          <nav className="  flex h-16  items-center align-center justify-between" aria-label="Global">
         
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>



              <a href="#" className=" flex items-center justify-center">
                <h1>COLLE DEGLI ELIMI</h1>
              </a>
 
            
           
            <div className="  hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div className=' flex '>

<MagnifyingGlassIcon className='Magnify'  />

<ShoppingCartIcon className='ShoppingCart'  />
</div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-16" src={logoai} alt="logo" />

                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      <main >
        <Block1/>
        <Block7/>
        <Block5/>
        <Block3 />
        <Animation2/>
        <BlockIGP/>
        <Block4/>


      </main>
    </div>
  )
}
