'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import navigationData from '@/data/navlinks.json';
import {
  AlignLeft,
  ChevronDown,
  ChevronRight,
  Heart,
  Play,
  ShoppingCart,
  User,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CartSidebar } from '../common/cart-sidebar';

const iconMap = {
  user: User,
  heart: Heart,
  play: Play,
};

export function NewNavBar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <>
      <header className='sticky top-0 h-[65px] sm:h-[70px] w-full z-50 inset-x-0 transition bg-white/75 backdrop-blur-lg shadow-navbar'>
        {/* Desktop Navigation */}
        <div className='hidden lg:block container h-full'>
          <div className='flex items-center justify-between h-full'>
            {/* Logo - Left side */}
            <div className='flex items-center pl-8'>
              <Link href='/'>
                <Image
                  src='/logo.webp'
                  className='w-[160px] h-auto'
                  alt='Logo'
                  width={160}
                  height={40}
                />
              </Link>
            </div>

            {/* Navigation Links + Cart - Right side */}
            <div className='flex items-center space-x-2'>
              {Object.entries(navigationData).map(([key, platform]) => (
                <div key={key} className='relative'>
                  <button
                    className='inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground bg-inherit h-9 px-3 group text-slate-800 font-medium text-base leading-none rounded-xl'
                    onMouseEnter={() => setHoveredItem(key)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {platform.name}
                    <ChevronDown className='relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180' />
                  </button>

                  {hoveredItem === key && (
                    <div
                      className='absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border z-50'
                      onMouseEnter={() => setHoveredItem(key)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className='p-4 space-y-2'>
                        {platform.services.map((service, index) => {
                          const IconComponent =
                            iconMap[service.icon as keyof typeof iconMap];
                          return (
                            <Link
                              key={index}
                              href={service.href}
                              className='flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors'
                            >
                              <div
                                className={`w-8 h-8 ${service.bgColor} rounded-full flex items-center justify-center`}
                              >
                                <IconComponent className='w-4 h-4 text-white' />
                              </div>
                              <div className='flex-1'>
                                <div className='font-medium text-sm text-gray-900'>
                                  {service.name}
                                </div>
                                <div className='text-gray-500 text-xs'>
                                  Starting from {service.price}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <Link href='/contact'>
                <button className='inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground bg-inherit h-9 px-3 text-slate-800 font-medium text-base leading-none rounded-xl'>
                  Contacts
                </button>
              </Link>

              <div className='pl-6'>
                <button
                  onClick={() => setCartOpen(true)}
                  className='w-10 h-10 justify-center items-center flex relative rounded-lg cursor-pointer hover:bg-gray-100 transition'
                >
                  <ShoppingCart className='w-[22px] h-[22px] text-slate-800' />
                  <div className='absolute top-1 right-0 rounded-md h-[15px] w-[15px] bg-gradient-to-tl from-orange-500 to-yellow-300 text-white font-extrabold text-[11px] flex justify-center items-center'>
                    0
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className='lg:hidden w-full h-full px-4 flex items-center justify-between'>
          <div>
            <button
              className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground bg-inherit w-auto p-0 h-auto z-[100] relative rounded-xl'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className='p-1.5'>
                {mobileMenuOpen ? (
                  <X className='w-6 h-6' />
                ) : (
                  <AlignLeft className='w-6 h-6' />
                )}
              </div>
            </button>

            {mobileMenuOpen && (
              <>
                <div
                  className='fixed inset-0 bg-black/40 z-40'
                  onClick={() => setMobileMenuOpen(false)}
                />
                <div className='absolute rounded-b-2xl top-0 left-0 w-full h-fit pt-[70px] bg-white shadow-navbar z-50 animate-in fade-in-0 slide-in-from-top-6'>
                  <div className='px-6 py-4 pt-0'>
                    <div className='pt-2 pb-3 text-muted-foreground uppercase text-sm font-medium'>
                      Our services
                    </div>
                    <div className='w-full space-y-2'>
                      {Object.entries(navigationData).map(([key, platform]) => (
                        <Collapsible
                          key={key}
                          open={openSections.includes(key)}
                        >
                          <CollapsibleTrigger asChild>
                            <button
                              onClick={() => toggleSection(key)}
                              className={`z-10 relative text-lg font-medium flex items-center justify-between p-3 bg-gradient-to-r ${platform.gradientFrom} ${platform.gradientTo} rounded-xl w-full`}
                            >
                              <div className='flex items-center'>
                                <Image
                                  src={platform.icon || '/placeholder.svg'}
                                  className='w-5 h-5 mr-1.5'
                                  alt={platform.name}
                                  width={20}
                                  height={20}
                                />
                                <div className='text-gray-800'>
                                  {platform.name}
                                </div>
                              </div>
                              <ChevronDown
                                className={`w-6 h-6 opacity-60 mr-2 z-10 transition-transform ${
                                  openSections.includes(key) ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className='space-y-1.5 pt-2 pb-2 px-3'>
                              {platform.services.map((service, index) => {
                                const IconComponent =
                                  iconMap[service.icon as keyof typeof iconMap];
                                return (
                                  <Link
                                    key={index}
                                    href={service.href}
                                    className={`w-full rounded-xl px-4 py-3 bg-gradient-to-r ${platform.gradientFrom} ${platform.gradientTo} flex items-center`}
                                  >
                                    <IconComponent className='w-4 h-4 mr-1.5 -mt-0.5 opacity-90 shrink-0' />
                                    <div className='z-10 text-[14px] font-medium text-gray-800'>
                                      {service.name}
                                    </div>
                                    <ChevronRight className='w-4 h-4 ml-auto z-10' />
                                  </Link>
                                );
                              })}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </div>
                    <div className='pt-6 pb-2 text-muted-foreground uppercase text-sm font-medium'>
                      Useful links
                    </div>
                    <div className='pb-4'>
                      <ul className='flex flex-col space-y-2 px-0.5'>
                        <Link href='/#faq'>
                          <li className='border-b pb-0.5 w-fit'>FAQ</li>
                        </Link>
                        <Link href='/contact'>
                          <li className='border-b pb-0.5 w-fit'>Contacts</li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className='z-[100] relative'>
            <Link href='/'>
              <Image
                src='/logo.webp'
                className='w-[160px] h-auto'
                alt='Logo'
                width={160}
                height={40}
              />
            </Link>
          </div>

          <div className='z-[100] relative'>
            <button
              onClick={() => setCartOpen(true)}
              className='w-10 h-10 justify-center items-center flex relative rounded-lg cursor-pointer hover:bg-gray-100 transition'
            >
              <ShoppingCart className='w-[22px] h-[22px] text-slate-800' />
              <div className='absolute top-1 right-0 rounded-md h-[15px] w-[15px] bg-gradient-to-tl from-orange-500 to-yellow-300 text-white font-extrabold text-[11px] flex justify-center items-center'>
                0
              </div>
            </button>
          </div>
        </div>
      </header>

      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
