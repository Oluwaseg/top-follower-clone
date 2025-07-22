'use client';

import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

interface DeliveryItem {
  amount: string;
  action: string;
  time: string;
}

interface LiveDeliveryTickerProps {
  deliveries: DeliveryItem[];
}

export function LiveDeliveryTicker({ deliveries }: LiveDeliveryTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % deliveries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [deliveries.length]);

  const currentDelivery = deliveries[currentIndex];

  return (
    <div className='px-4 h-[54px] overflow-hidden rounded-xl w-full max-w-[330px] md:w-[360px] md:max-w-[360px] flex items-center space-x-2 bg-gradient-to-b from-emerald-100/80 to-emerald-50/80 border-emerald-100 border'>
      <div
        className='w-full h-full transform transition-transform duration-500'
        style={{ transform: `translateY(0px)` }}
      >
        <div className='text-sm h-[54px] font-medium text-foreground/80 items-center flex w-full'>
          <span className='relative flex mr-2 h-2.5 w-2.5'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
            <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500'></span>
          </span>
          <div className='flex items-center justify-between w-full font-normal text-[13px] md:text-sm text-emerald-900'>
            <div className='text-nowrap'>
              <span className='font-semibold'>{currentDelivery.amount}</span>{' '}
              <span className='deliver-text'>{currentDelivery.action}</span>
            </div>
            <div className='ml-auto flex items-center space-x-1.5'>
              <div className='rounded-full w-[19px] h-[19px] p-[3px] bg-white shadow-md'>
                <Check
                  className='w-full h-full text-green-500'
                  strokeWidth={4.5}
                />
              </div>
              <div>{currentDelivery.time}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
