// import { Button } from '@/components/ui/button';
// import Image from 'next/image';

// export function TestimonySection() {
//   return (
//     <section className='px-10 py-16'>
//       <div className='container'>
//         <div className='shadow-xl rounded-3xl bg-gradient-to-r from-orange-400 to-pink-500 px-6 pt-12 pb-12 sm:px-14 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 md:grid md:grid-cols-2'>
//           <div>
//             {/* Star Rating */}
//             <div className='flex items-center space-x-2'>
//               <div className='flex -space-x-[1px] -mt-0.5'>
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     viewBox='0 0 18 18'
//                     aria-hidden='true'
//                     className='h-5 w-5 fill-yellow-300'
//                   >
//                     <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
//                   </svg>
//                 ))}
//               </div>
//               <div className='font-semibold text-xs sm:text-sm text-white'>
//                 <span className='font-extrabold mr-0.5'>4,9</span>
//                 /5 out of 376+ reviews
//               </div>
//             </div>

//             {/* Main Heading */}
//             <div className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
//               <h1 className='block'>
//                 Get guaranteed real and active followers in seconds!
//               </h1>
//               <h2 className='text-red-900'></h2>
//             </div>

//             {/* Description */}
//             <p className='mt-4 text-lg leading-6 text-orange-50 font-medium'>
//               Only the best quality. 100% risk-free and completely anonymous.
//               Immediate delivery.
//             </p>

//             {/* CTA Button */}
//             <Button className='mt-8 text-base px-6 py-3 font-medium text-red-600 transition-transform duration-300 bg-orange-100 border border-transparent shadow rounded-xl hover:text-red-500 hover:scale-95 hover:bg-orange-100'>
//               Choose a package
//             </Button>
//           </div>

//           {/* Image Section */}
//           <div className='relative w-full h-full hidden md:block'>
//             <Image
//               src='/man3.webp'
//               className='h-[350px] w-[350px] absolute top-1/2 left-[60%]'
//               style={{ transform: 'translate(-50%, -50%)' }}
//               alt='Robot'
//               width={350}
//               height={350}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function TestimonySection() {
  const t = useTranslations('testimony_section');

  return (
    <section className='px-10 py-16'>
      <div className='container'>
        <div className='shadow-xl rounded-3xl bg-gradient-to-r from-orange-400 to-pink-500 px-6 pt-12 pb-12 sm:px-14 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 md:grid md:grid-cols-2'>
          <div>
            {/* Star Rating */}
            <div className='flex items-center space-x-2'>
              <div className='flex -space-x-[1px] -mt-0.5'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox='0 0 18 18'
                    aria-hidden='true'
                    className='h-5 w-5 fill-yellow-300'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                ))}
              </div>
              <div className='font-semibold text-xs sm:text-sm text-white'>
                <span className='font-extrabold mr-0.5'>4,9</span>{' '}
                {t('rating_text')}
              </div>
            </div>
            {/* Main Heading */}
            <div className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              <h1 className='block'>{t('main_heading')}</h1>
              <h2 className='text-red-900'></h2>
            </div>
            {/* Description */}
            <p className='mt-4 text-lg leading-6 text-orange-50 font-medium'>
              {t('description')}
            </p>
            {/* CTA Button */}
            <Button className='mt-8 text-base px-6 py-3 font-medium text-red-600 transition-transform duration-300 bg-orange-100 border border-transparent shadow rounded-xl hover:text-red-500 hover:scale-95 hover:bg-orange-100'>
              {t('cta_button')}
            </Button>
          </div>
          {/* Image Section */}
          <div className='relative w-full h-full hidden md:block'>
            <Image
              src='/man3.webp'
              className='h-[350px] w-[350px] absolute top-1/2 left-[60%]'
              style={{ transform: 'translate(-50%, -50%)' }}
              alt='Robot'
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
