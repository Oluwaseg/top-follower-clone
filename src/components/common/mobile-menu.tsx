'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, Facebook, Instagram, Play, Youtube } from 'lucide-react';
import { useState } from 'react';

export function MobileMenu() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className='p-4'>
      <h3 className='text-gray-500 text-sm font-medium mb-4'>OUR SERVICES</h3>

      <div className='space-y-2'>
        <Collapsible open={openSections.includes('instagram')}>
          <CollapsibleTrigger asChild>
            <Button
              variant='ghost'
              onClick={() => toggleSection('instagram')}
              className='flex items-center justify-between w-full p-3 bg-orange-50 hover:bg-orange-100 h-auto'
            >
              <div className='flex items-center gap-3'>
                <Instagram className='w-5 h-5 text-orange-500' />
                <span className='font-medium'>Instagram</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openSections.includes('instagram') ? 'rotate-180' : ''
                }`}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className='mt-2 ml-8 space-y-2'>
            <Button
              variant='ghost'
              className='flex items-center gap-2 p-2 w-full justify-start h-auto'
            >
              <Badge className='w-6 h-6 bg-orange-500 hover:bg-orange-500 rounded flex items-center justify-center p-0'>
                <span className='text-white text-xs'>👤</span>
              </Badge>
              <span className='text-sm'>Italian Instagram Followers 🇮🇹</span>
            </Button>
            <Button
              variant='ghost'
              className='flex items-center gap-2 p-2 w-full justify-start h-auto'
            >
              <Badge className='w-6 h-6 bg-orange-500 hover:bg-orange-500 rounded flex items-center justify-center p-0'>
                <span className='text-white text-xs'>👤</span>
              </Badge>
              <span className='text-sm'>Instagram Followers</span>
            </Button>
            <Button
              variant='ghost'
              className='flex items-center gap-2 p-2 w-full justify-start h-auto'
            >
              <Badge className='w-6 h-6 bg-orange-500 hover:bg-orange-500 rounded flex items-center justify-center p-0'>
                <span className='text-white text-xs'>❤️</span>
              </Badge>
              <span className='text-sm'>Like Instagram</span>
            </Button>
            <Button
              variant='ghost'
              className='flex items-center gap-2 p-2 w-full justify-start h-auto'
            >
              <Badge className='w-6 h-6 bg-orange-500 hover:bg-orange-500 rounded flex items-center justify-center p-0'>
                <Play className='w-3 h-3 text-white' />
              </Badge>
              <span className='text-sm'>Instagram Views</span>
            </Button>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={openSections.includes('tiktok')}>
          <CollapsibleTrigger asChild>
            <Button
              variant='ghost'
              onClick={() => toggleSection('tiktok')}
              className='flex items-center justify-between w-full p-3 bg-gray-50 hover:bg-gray-100 h-auto'
            >
              <div className='flex items-center gap-3'>
                <div className='w-5 h-5 bg-black rounded flex items-center justify-center'>
                  <span className='text-white text-xs'>T</span>
                </div>
                <span className='font-medium'>TikTok</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openSections.includes('tiktok') ? 'rotate-180' : ''
                }`}
              />
            </Button>
          </CollapsibleTrigger>
        </Collapsible>

        <Collapsible open={openSections.includes('youtube')}>
          <CollapsibleTrigger asChild>
            <Button
              variant='ghost'
              onClick={() => toggleSection('youtube')}
              className='flex items-center justify-between w-full p-3 bg-red-50 hover:bg-red-100 h-auto'
            >
              <div className='flex items-center gap-3'>
                <Youtube className='w-5 h-5 text-red-500' />
                <span className='font-medium'>YouTube</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openSections.includes('youtube') ? 'rotate-180' : ''
                }`}
              />
            </Button>
          </CollapsibleTrigger>
        </Collapsible>

        <Collapsible open={openSections.includes('facebook')}>
          <CollapsibleTrigger asChild>
            <Button
              variant='ghost'
              onClick={() => toggleSection('facebook')}
              className='flex items-center justify-between w-full p-3 bg-blue-50 hover:bg-blue-100 h-auto'
            >
              <div className='flex items-center gap-3'>
                <Facebook className='w-5 h-5 text-blue-500' />
                <span className='font-medium'>Facebook</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openSections.includes('facebook') ? 'rotate-180' : ''
                }`}
              />
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </div>

      <div className='mt-8'>
        <h3 className='text-gray-500 text-sm font-medium mb-4'>USEFUL LINKS</h3>
        <div className='space-y-2'>
          <Button variant='ghost' className='w-full justify-start p-2'>
            FAQ
          </Button>
          <Button variant='ghost' className='w-full justify-start p-2'>
            Contatti
          </Button>
        </div>
      </div>
    </div>
  );
}
