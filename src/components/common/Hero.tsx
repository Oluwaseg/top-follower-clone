'use client';

import { ChevronRight, Heart, Play, Users } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const platforms = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: '/instagram2.webp',
    active: true,
    services: [
      {
        name: 'Instagram Followers',
        icon: Users,
        href: '/instagram-followers',
      },
      { name: 'Like Instagram', icon: Heart, href: '/instagram-likes' },
      { name: 'Instagram Views', icon: Play, href: '/instagram-views' },
    ],
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: '/tiktok.webp',
    active: false,
    services: [
      { name: 'TikTok Followers', icon: Users, href: '/tiktok-followers' },
      { name: 'Like TikTok', icon: Heart, href: '/tiktok-likes' },
      { name: 'TikTok Views', icon: Play, href: '/tiktok-views' },
    ],
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: '/youtube2.webp',
    active: false,
    services: [
      {
        name: 'YouTube Subscribers',
        icon: Users,
        href: '/youtube-subscribers',
      },
      { name: 'YouTube Likes', icon: Heart, href: '/youtube-likes' },
      { name: 'YouTube Views', icon: Play, href: '/youtube-views' },
    ],
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: '/facebook.png',
    active: false,
    services: [
      { name: 'Facebook Followers', icon: Users, href: '/facebook-followers' },
      { name: 'Facebook Likes', icon: Heart, href: '/facebook-likes' },
      { name: 'Facebook Views', icon: Play, href: '/facebook-views' },
    ],
  },
];

const features = [
  { emoji: '⚡️', text: 'Immediate Delivery' },
  { emoji: '🔒', text: '100% Satisfaction Guaranteed or Your Money Back' },
  { emoji: '🥇', text: 'The best quality on the market' },
  { emoji: '💳', text: 'Apple Pay, Google Pay and credit card' },
  { emoji: '🇮🇹', text: '100% ITALIAN service' },
];

const featureKeys = [
  'immediate_delivery',
  'satisfaction',
  'best_quality',
  'payment_methods',
  'italian_service'
];

export function Hero() {
  const [activePlatform, setActivePlatform] = useState('instagram');
  const t = useTranslations('hero');
  const tf = useTranslations('hero.features');
  const currentPlatform =
    platforms.find((p) => p.id === activePlatform) || platforms[0];

  return (
    <section className='pt-12 sm:pt-16 pb-[100px] sm:pb-[120px] relative'>
      {/* Background gradient */}
      <div
        className='absolute inset-x-0 overflow-hidden -top-[200px] z-0 transform-gpu blur-3xl sm:-top-[400px] opacity-80'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#e6bd29] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className='container relative z-10 max-w-4xl mx-auto px-4'>
        {/* Overlay pattern */}
        <Image
          alt='hero overlay pattern'
          width={1728}
          height={949}
          className='absolute inset-0 z-[-9] object-cover object-center h-[500px] my-auto mx-auto opacity-30'
          src='/overlay.svg'
        />

        {/* Main heading */}
        <div className='mx-auto max-w-4xl sm:mt-6'>
          <h1 className='text-3xl sm:text-[45px] font-extrabold text-center text-gray-900/95 leading-[38px] sm:leading-[53px]'>
            <span dangerouslySetInnerHTML={{ __html: t('main_heading') }} />
          </h1>
          <div className='mx-auto max-w-2xl'>
            <p className='mt-4 sm:mt-6 text-base sm:text-lg font-medium sm:leading-[24px] leading-snug text-gray-600 text-center'>
              {t('subheading')}
            </p>
          </div>
        </div>

        {/* Platform tabs */}
        <div className='sm:w-fit mx-2 sm:mx-auto mt-6 sm:mt-6 grid grid-cols-4 sm:flex gap-2'>
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className={`relative cursor-pointer ${
                activePlatform !== platform.id
                  ? 'opacity-40 hover:opacity-70 transition'
                  : ''
              }`}
              onClick={() => setActivePlatform(platform.id)}
            >
              <div
                className={`rounded-2xl border-[3px] p-2.5 bg-white ${
                  activePlatform === platform.id
                    ? 'border-orange-500 shadow-md'
                    : 'border-gray-300'
                }`}
              >
                <Image
                  src={platform.icon || '/placeholder.svg'}
                  width={64}
                  height={64}
                  className='w-auto sm:w-16 h-auto rounded-lg'
                  alt={platform.name}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Services for active platform */}
        <div className='p-2 mt-2'>
          <div className='rounded-2xl bg-gradient-to-b p-3 mx-auto max-w-xl from-orange-100/70 to-orange-100/20'>
            <div className='grid grid-cols-1 gap-2'>
              {currentPlatform.services.map((service, index) => (
                <a
                  key={index}
                  className='rounded-2xl shadow-sm p-3 bg-white hover:bg-gray-100 transition duration-200 flex items-center relative'
                  href={service.href}
                >
                  <div className='flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl shrink-0'>
                    <service.icon className='w-6 h-6 text-white shrink-0' />
                  </div>
                  <div className='ml-3 mr-6 overflow-hidden'>
                    <h3 className='font-medium leading-[1.1]'>
                      {service.name}
                    </h3>
                  </div>
                  <div
                    className='absolute top-1/2 right-[4px]'
                    style={{ transform: 'translateY(-50%)' }}
                  >
                    <ChevronRight className='w-10 h-10 opacity-50' />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Features card */}
        <div className='w-full md:w-[576px] mx-auto mt-3'>
          <div className='rounded-[20px] bg-white shadow-lg px-6 sm:px-8 py-6 font-medium'>
            <div className='space-y-1.5 mt-1 font-medium text-[15px]'>
              {featureKeys.map((key, index) => (
                <div key={index} className='flex items-center space-x-1'>
                  {/* You may want to map emoji by key if needed */}
                  <div className='mt-0'>{tf(key)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className='flex justify-center mt-4'>
          <div className='flex flex-col justify-center items-center mt-6'>
            <Image
              className='h-7'
              src='/trustpilot.svg'
              alt='Trustpilot'
              width={100}
              height={28}
            />
            <div className='flex items-center'>
              <span className='font-medium text-xl mt-2 mr-2'>
                4.9 <span className='opacity-70'>|</span>
              </span>
              <Image
                className='h-[24px] mt-2'
                src='/stars-5.svg'
                alt='5 stars'
                width={120}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
