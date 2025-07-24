'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useTranslations } from 'next-intl';

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
          <SheetTitle>{t('your_cart')}</SheetTitle>
        </SheetHeader>

        <div className='flex-1 flex flex-col items-center justify-center p-8 text-center mt-8'>
          <div className='mb-6'>
            <div className='w-32 h-32 mx-auto bg-gray-100 rounded-lg flex items-center justify-center'>
              <div className='text-4xl'>🛒</div>
            </div>
          </div>
          <h3 className='text-lg font-semibold mb-2'>
            {t('empty')}
          </h3>
          <p className='text-gray-600 mb-6'>
            {t('choose')}
          </p>
          <Button className='bg-orange-500 hover:bg-orange-600'>
            {t('back_to_shop')}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
