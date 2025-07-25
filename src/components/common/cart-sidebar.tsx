'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const t = useTranslations('cart');

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side='right' className='w-80'>
        <SheetHeader>
          <SheetTitle className='text-xl font-semibold'>
            {t('your_cart')}
          </SheetTitle>
        </SheetHeader>

        <div className='flex-1 flex flex-col items-center justify-center p-6 text-center mt-8'>
          {/* Illustration */}
          <div className='mb-8 w-full max-w-xs'>
            <Image
              src='/empty-cart-illustration.svg'
              alt='Empty cart illustration'
              width={300}
              height={300}
              className='w-full h-auto'
            />
          </div>

          {/* Text Content */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-900'>
              {"You've got your cart completely empty..."}
            </h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              {t('choose')}
            </p>
          </div>

          {/* Button */}
          <div className='mt-8 w-full'>
            <Button
              className='w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 rounded-lg border-0'
              onClick={onClose}
            >
              {'Return to the store'}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
