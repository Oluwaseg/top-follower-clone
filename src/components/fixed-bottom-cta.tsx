'use client';

import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FixedBottomCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className='bottom-0 left-0 w-full h-auto flex justify-center z-[20] fixed'>
      <div className='w-full'>
        <div className='bg-white/75 backdrop-blur-md shadow-navbar h-full w-full justify-center items-center py-3 pb-3 flex fade-in'>
          <div>
            <Button
              onClick={scrollToTop}
              className='z-[5] relative rounded-xl px-8 py-6 text-white font-medium shadow-md hover:shadow-lg transition duration-150 bg-orange-500 hover:bg-orange-600 hover:scale-[0.97] w-auto text-lg'
            >
              <div className='transition-all duration-300 ease-in-out button-shine-gradient group-hover:opacity-0 rounded-xl'></div>
              Choose a service
              <ArrowUp className='w-5 h-5 ml-2' />
            </Button>
            <p className='text-center mt-1 text-sm hidden'>
              <span className='text-[13px] hidden'>🎉</span>
              The discount expires{' '}
              <b className='px-[4px] py-[2px] rounded-md bg-[#f5f5f5]'>in</b>
              <b className='px-[4px] py-[2px] rounded-md bg-[#f5f5f5]'>
                00:02
              </b>{' '}
              <b className='px-[4px] py-[2px] rounded-md bg-[#f5f5f5]'>:</b>{' '}
              <b className='px-[4px] py-[2px] rounded-md bg-[#f5f5f5]'>47</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
