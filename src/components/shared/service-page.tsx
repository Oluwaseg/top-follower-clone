'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';

import { LiveDeliveryTicker } from '@/components/shared/live-delivery-ticker';
import Image from 'next/image';
import { TestimonySection } from '../Testimony-section';
import { FAQSection } from '../faq-section';
import { WhyUsSection } from '../why-us-section';

interface Package {
  amount: number;
  bonus: number;
  price: number;
  originalPrice: number;
}

interface ServiceData {
  title: string;
  badge: string;
  serviceType: string;
  liveDeliveries: Array<{
    amount: string;
    action: string;
    time: string;
  }>;
  variants?: {
    european: {
      name: string;
      flag: string;
      features: string[];
      packages: Package[];
    };
    italian: {
      name: string;
      flag: string;
      features: string[];
      packages: Package[];
    };
  };
  packages?: Package[];
  features: Array<{
    emoji: string;
    text: string;
    highlight?: string;
  }>;
}

interface ServicePageProps {
  serviceData: ServiceData;
  isPremium?: boolean;
}

export function ServicePage({
  serviceData,
  isPremium = false,
}: ServicePageProps) {
  const [selectedVariant, setSelectedVariant] = useState<
    'european' | 'italian'
  >(isPremium ? 'italian' : 'european');
  const [selectedPackage, setSelectedPackage] = useState(0);

  const hasVariants = serviceData.variants !== undefined;
  const currentVariant = hasVariants
    ? serviceData.variants![selectedVariant]
    : null;
  const packages = hasVariants
    ? currentVariant!.packages
    : serviceData.packages!;
  const currentPackage = packages[selectedPackage];

  // Platform-specific styling
  const getBadgeStyles = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'instagram':
        return {
          badgeClass: 'bg-gradient-to-r from-orange-100 to-yellow-100',
          textClass:
            'text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text',
        };
      case 'tiktok':
        return {
          badgeClass: 'bg-gradient-to-r from-purple-100 to-pink-100',
          textClass:
            'text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text',
        };
      case 'youtube':
        return {
          badgeClass: 'bg-gradient-to-r from-red-100 to-orange-100',
          textClass:
            'text-transparent bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text',
        };
      case 'facebook':
        return {
          badgeClass: 'bg-gradient-to-r from-blue-100 to-indigo-100',
          textClass:
            'text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text',
        };
      default:
        return {
          badgeClass: 'bg-gradient-to-r from-orange-100 to-yellow-100',
          textClass:
            'text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text',
        };
    }
  };

  const badgeStyles = getBadgeStyles(serviceData.badge);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='flex justify-center px-6 py-10 relative'>
        {/* Background Gradient */}
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
          ></div>
        </div>

        <div className='relative z-10 pt-2 w-full md:w-fit'>
          {/* Badge */}
          <div className='flex justify-center'>
            <Badge
              className={`inline-flex rounded-full px-4 py-2 uppercase leading-6 tracking-[0.5px] text-indigo-600 w-fit border-0 ${badgeStyles.badgeClass}`}
            >
              <span
                className={`text-sm font-extrabold uppercase ${badgeStyles.textClass}`}
              >
                {serviceData.badge}
              </span>
            </Badge>
          </div>

          {/* Title */}
          <h1 className='text-[32px] leading-10 mt-1 font-bold text-center md:text-4xl text-gray-900 w-full md:w-[576px]'>
            {serviceData.title}
          </h1>

          {/* Live Delivery Ticker */}
          <div className='mt-6 flex justify-center'>
            <LiveDeliveryTicker deliveries={serviceData.liveDeliveries} />
          </div>

          {/* Variant Selection - Only for Instagram and TikTok */}
          {hasVariants && serviceData.variants && (
            <div className='flex justify-center mb-3 mt-6'>
              <div className='grid grid-cols-2 w-full px-3 sm:px-4 gap-x-2'>
                {/* European Variant */}
                <label
                  className={`rounded-2xl border p-1 bg-white/50 backdrop-blur-lg transition ease-in-out duration-100 cursor-pointer relative ${
                    selectedVariant === 'european'
                      ? 'ring-[3px] ring-orange-500'
                      : ''
                  }`}
                  onClick={() => setSelectedVariant('european')}
                >
                  <div className='w-full rounded-xl px-3 py-2 sm:py-3 bg-[#F3F4F6] font-medium flex sm:items-center text-left'>
                    <Image
                      src={
                        serviceData.variants.european.flag || '/placeholder.svg'
                      }
                      className='rounded-full w-5 h-5 mr-2.5 mt-[3px] sm:mt-0'
                      alt='EU Flag'
                      width={20}
                      height={20}
                    />
                    <span>{serviceData.variants.european.name}</span>
                  </div>
                  <div className='pl-2 pr-4 pt-2 pb-4 sm:pb-6 text-sm sm:text-[15px] text-foreground/90 space-y-1.5 font-medium text-left'>
                    {serviceData.variants.european.features.map(
                      (feature, index) => (
                        <div key={index} className='flex sm:items-center'>
                          <Check className='w-4 h-4 mr-1.5 mt-0.5 sm:mt-0' />
                          <div>{feature}</div>
                        </div>
                      )
                    )}
                  </div>
                  <button
                    type='button'
                    className={`peer h-6 w-6 shrink-0 rounded-[10px] border-2 border-gray-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 absolute right-2 bottom-2 ${
                      selectedVariant === 'european'
                        ? 'bg-[#FA7703] border-[#FA7703] text-primary-foreground'
                        : ''
                    }`}
                  >
                    {selectedVariant === 'european' && (
                      <Check className='h-4 w-4 text-white' strokeWidth={3.5} />
                    )}
                  </button>
                </label>

                {/* Italian Variant */}
                <label
                  className={`rounded-2xl border p-1 bg-white/50 backdrop-blur-lg transition ease-in-out duration-100 cursor-pointer relative ${
                    selectedVariant === 'italian'
                      ? 'ring-[3px] ring-orange-500'
                      : ''
                  }`}
                  onClick={() => setSelectedVariant('italian')}
                >
                  <div className='w-full rounded-xl p-3 bg-[#FFEED5] py-2 sm:py-3 font-medium flex sm:items-center text-left btn-shine overflow-hidden relative'>
                    <Image
                      src={
                        serviceData.variants.italian.flag || '/placeholder.svg'
                      }
                      className='rounded-full w-5 h-5 mr-2.5 mt-[3px] sm:mt-0 z-10'
                      alt='Italy Flag'
                      width={20}
                      height={20}
                    />
                    <div className='z-10'>
                      <b>{serviceData.variants.italian.name.split(' ')[0]}</b>{' '}
                      {serviceData.variants.italian.name
                        .split(' ')
                        .slice(1)
                        .join(' ')}
                    </div>
                  </div>
                  <div className='pl-2 pr-4 pt-2 pb-4 sm:pb-6 text-sm sm:text-[15px] text-foreground/90 space-y-1.5 font-medium text-left'>
                    {serviceData.variants.italian.features.map(
                      (feature, index) => (
                        <div key={index} className='flex sm:items-center'>
                          <Check
                            className='w-4 h-4 mr-1.5 mt-0.5 sm:mt-0 text-orange-500'
                            strokeWidth={3}
                          />
                          <div>{feature}</div>
                        </div>
                      )
                    )}
                  </div>
                  <button
                    type='button'
                    className={`peer h-6 w-6 shrink-0 rounded-[10px] border-2 border-gray-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 absolute right-2 bottom-2 ${
                      selectedVariant === 'italian'
                        ? 'bg-[#FA7703] border-[#FA7703] text-primary-foreground'
                        : ''
                    }`}
                  >
                    {selectedVariant === 'italian' && (
                      <Check className='h-4 w-4 text-white' strokeWidth={3.5} />
                    )}
                  </button>
                </label>
              </div>
            </div>
          )}

          {/* Order Card - Added more spacing with mt-8 for non-variant services */}
          <div className={hasVariants ? 'mt-0' : 'mt-8'}>
            <Card className='rounded-[20px] bg-white shadow-lg w-full md:w-[576px] px-4 py-6'>
              <CardContent className='p-6 pt-0 px-0 w-full'>
                <h2 className='text-center text-lg md:text-xl font-semibold text-gray-700'>
                  Amount :
                </h2>

                {/* Package Selection */}
                <div className='flex flex-wrap items-center justify-center gap-3 mt-4 w-full'>
                  {packages.map((pkg, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPackage(index)}
                      className={`w-[83px] sm:w-1/6 px-1 h-[70px] py-2 text-center border rounded-xl relative transition-[transform,background-color] duration-150 ease-[cubic-bezier(.165,.84,.44,1)] hover:-translate-y-[2px] ${
                        selectedPackage === index
                          ? 'bg-gradient-to-br from-orange-600 ring-1 ring-orange-500 to-orange-400 border-orange-500 -translate-y-[2px] text-white'
                          : 'border-gray-200/40 bg-[#f7f7f7] hover:bg-white hover:border-gray-200/40 text-gray-800'
                      }`}
                    >
                      <div className='font-bold text-lg -mt-0.5'>
                        {pkg.amount.toLocaleString()}
                      </div>
                      <div
                        className={`text-[10px] md:text-[11px] -ml-0.5 text-nowrap -mt-0.5 font-semibold ${
                          selectedPackage === index
                            ? 'text-white'
                            : pkg.bonus > 0
                            ? 'text-green-600'
                            : 'text-gray-600'
                        }`}
                      >
                        {pkg.bonus > 0
                          ? `+${pkg.bonus} free`
                          : serviceData.serviceType}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Pricing */}
                <div className='mt-6'>
                  <div className='mx-auto w-fit relative'>
                    <div className='font-extrabold text-[33px] sm:text-4xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-yellow-500 drop-shadow'>
                      €{currentPackage.price}
                    </div>
                    <div className='absolute -top-1 left-[105%] line-through w-fit font-semibold text-muted-foreground'>
                      €{currentPackage.originalPrice}
                    </div>
                  </div>
                </div>

                {/* Continue Button */}
                <div className='flex justify-center mt-5'>
                  <Button className='z-[5] relative rounded-xl px-8 py-6 text-md text-white shadow-md hover:shadow-lg transition duration-150 bg-orange-500 hover:bg-orange-600 w-fit font-semibold hover:scale-[0.97]'>
                    Continues
                    <ArrowRight className='ml-1.5 w-4 h-4 mt-[1px]' />
                  </Button>
                </div>

                {/* Savings */}
                <div className='mt-4 flex justify-center'>
                  <div className='flex items-center space-x-1.5'>
                    <div className='w-auto h-auto rounded-full bg-green-100 p-1'>
                      <Check
                        className='w-4 h-4 text-green-500'
                        strokeWidth={3}
                      />
                    </div>
                    <div className='font-semibold text-foreground/75'>
                      Save{' '}
                      <span className='text-green-500 font-bold'>
                        €
                        {(
                          currentPackage.originalPrice - currentPackage.price
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Card */}
          <div className='mt-4 flex justify-center w-full'>
            <Card className='rounded-[20px] bg-white shadow-lg min-w-full w-full md:w-[576px] px-6 md:px-8 py-6'>
              <div className='space-y-1 mt-1 font-medium text-[15px]'>
                {serviceData.features.map((feature, index) => (
                  <div key={index} className='flex items-center space-x-1'>
                    <div className='text-base leading-none w-8 h-8 flex items-center justify-center shrink-0'>
                      {feature.emoji}
                    </div>
                    <div className='mt-0'>
                      {feature.text}{' '}
                      {feature.highlight && (
                        <span className='text-orange-500 font-bold'>
                          {feature.highlight}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Trustpilot */}
          <div className='mt-4 w-full md:w-[576px]'>
            <div className='flex flex-col justify-center items-center mt-6'>
              <Image
                className='h-7'
                src='/trustpilot.svg'
                alt='Trustpilot'
                width={120}
                height={28}
              />
              <div className='flex items-center'>
                <span className='font-medium text-xl mt-2 mr-2'>
                  4.9 <span className='opacity-70'>|</span>
                </span>
                <Image
                  className='h-[24px] mt-2'
                  src='/stars-5.svg'
                  alt='5 Stars'
                  width={120}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyUsSection />
      <FAQSection />
      <TestimonySection />
    </div>
  );
}
