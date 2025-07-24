'use client';

import { useCountdown } from '@/hooks/use-countdown';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function Banner() {
  const [targetDate] = useState(
    () => new Date(Date.now() + 24 * 60 * 60 * 1000)
  );
  const { hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div
      className='w-full h-14 z-50 bg-cover bg-scroll bg-center bg-no-repeat flex'
      style={{ backgroundImage: 'url(/bg-bar.jpg)' }}
    >
      <div className='max-w-screen w-full h-full px-2 sm:px-4'>
        <div className='flex items-center justify-center h-full space-x-4'>
          <Image
            alt='Confetti'
            width={50}
            height={36}
            className='hidden text-transparent relative left-[-5px] top-[-12px] saturate-150'
            src='/banner-confetti.webp'
            style={{ color: 'transparent' }}
          />

          <div className='z-10 hidden drop-shadow rounded-full bg-white/30 px-4 py-1.5 font-inter font-bold text-xs text-slate-100 sm:flex animate-pulse items-center justify-center uppercase'>
            <Clock className='mr-1.5 text-yellow-300 font-bold w-5 h-5' />
            <span>Special offer</span>
          </div>

          <div className='z-10 flex items-center justify-center font-extrabold text-sm text-slate-100'>
            <p className='leading-[15px]'>5% OFF, DISCOUNT CODE: TOP5</p>
            <div className='px-4'>
              <div className='grid grid-flow-col gap-2 text-center'>
                <div className='flex flex-col py-1 px-2.5 bg-slate-100 rounded-lg text-indigo-600 justify-center items-center'>
                  <span className='countdown text-sm font-extrabold text-[#4C39FF]'>
                    {hours.toString().padStart(2, '0')}
                  </span>
                  <span className='text-[11px] uppercase text-gray-700 -mt-0.5'>
                    hours
                  </span>
                </div>
                <div className='flex flex-col py-1 px-2.5 bg-slate-100 rounded-lg text-indigo-600 justify-center items-center'>
                  <span className='countdown text-sm font-extrabold text-[#4C39FF]'>
                    {minutes.toString().padStart(2, '0')}
                  </span>
                  <span className='text-[11px] uppercase text-gray-700 -mt-0.5'>
                    min
                  </span>
                </div>
                <div className='flex flex-col py-1 px-2.5 bg-slate-100 rounded-lg text-indigo-600 justify-center items-center'>
                  <span className='countdown text-sm font-extrabold text-[#4C39FF]'>
                    {seconds.toString().padStart(2, '0')}
                  </span>
                  <span className='text-[11px] uppercase text-gray-700 -mt-0.5'>
                    sec
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Image
            alt='Confetti'
            width={50}
            height={36}
            className='hidden text-transparent relative left-[-5px] top-[-12px] saturate-150'
            src='/banner-confetti.webp'
            style={{
              color: 'transparent',
              transform: 'rotateY(180deg)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
