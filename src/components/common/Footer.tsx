import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='z-10 border-t border-gray-200 bg-white/50 py-8 mb-24'>
      <div className='container px-8 lg:px-20 pt-4'>
        <div className='md:flex md:justify-between'>
          {/* Left Section - Logo and Description */}
          <div className='space-y-4 w-full md:w-auto md:text-left'>
            <div className='w-fit mx-auto md:mx-0'>
              <Link href='/'>
                <Image
                  src='/logo.webp'
                  className='w-[180px] h-auto'
                  alt='Logo'
                  width={180}
                  height={45}
                />
              </Link>
            </div>
            <p className='max-w-xs mx-auto md:mx-0 text-[15px] text-gray-600 text-center md:text-left'>
              A modern online tool to increase the popularity of your social
              networks.
            </p>
            <div className='rounded-xl border bg-gray-50 hover:bg-gray-100 border-1 flex items-center w-fit px-3 py-2 text-xs mx-auto md:mx-0'>
              <span className='relative flex ml-0.5 mr-2.5 h-3 w-3'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex h-3 w-3 rounded-full bg-green-500'></span>
              </span>
              All services working
            </div>
          </div>

          {/* Right Section - Links Grid */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-8 text-center md:text-left mt-8 md:mt-0'>
            <div></div>

            {/* Our Services */}
            <div>
              <h3 className='text-lg font-semibold text-gray-900'>
                Our services
              </h3>
              <ul className='mt-4 space-y-1'>
                <li>
                  <Link
                    href='/all#instagram'
                    className='text-sm text-gray-600 hover:text-gray-900'
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href='/all#tiktok'
                    className='text-sm text-gray-600 hover:text-gray-900'
                  >
                    TikTok
                  </Link>
                </li>
                <li>
                  <Link
                    href='/all#youtube'
                    className='text-sm text-gray-600 hover:text-gray-900'
                  >
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link
                    href='/all#facebook'
                    className='text-sm text-gray-600 hover:text-gray-900'
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className='text-lg font-semibold text-gray-900'>
                Useful links
              </h3>
              <ul className='mt-4 space-y-1'>
                <li>
                  <Link
                    href='/reviews'
                    className='text-sm text-gray-600 hover:text-gray-900'
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href='/tos'
                    className='text-sm text-gray-600 hover:text-gray-900'
                  >
                    Terms and conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href='/privacy-policy'
                    className='text-sm text-gray-600 hover:text-gray-900'
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className='text-lg font-semibold text-gray-900'>
                Contact us
              </h3>
              <ul className='mt-4 space-y-1'>
                <li>
                  <Link
                    href='/contact'
                    className='text-sm text-gray-600 hover:text-gray-900'
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-14 mb-4'></div>

        {/* Payment Methods and Security */}
        <div className='md:flex items-center justify-between'>
          {/* Payment Methods */}
          <div className='flex items-center justify-center md:justify-start space-x-1'>
            <Image
              alt='PayPal'
              width={45}
              height={28}
              className='h-auto w-[45px]'
              src='/payment-logos/paypal.svg'
            />
            <Image
              alt='Visa'
              width={45}
              height={28}
              className='h-auto w-[45px]'
              src='/payment-logos/visa.svg'
            />
            <Image
              alt='MasterCard'
              width={45}
              height={28}
              className='h-auto w-[45px]'
              src='/payment-logos/mastercard.svg'
            />
            <Image
              alt='American Express'
              width={45}
              height={28}
              className='h-auto w-[45px]'
              src='/payment-logos/american-express.svg'
            />
            <Image
              alt='Apple Pay'
              width={45}
              height={28}
              className='h-auto w-[45px]'
              src='/payment-logos/apple-pay.svg'
            />
            <Image
              alt='Google Pay'
              width={45}
              height={28}
              className='h-auto w-[45px]'
              src='/payment-logos/google-pay.svg'
            />
          </div>

          {/* Security Badges */}
          <div className='flex items-center justify-center md:justify-end space-x-1 mt-2 md:mt-0'>
            <Image
              alt='Verified By Visa'
              width={45}
              height={28}
              className='h-auto w-[45px]'
              src='/payment-logos/verified.svg'
            />
            <Image
              alt='Norton'
              width={45}
              height={28}
              className='h-auto w-[45px]'
              src='/payment-logos/norton.svg'
            />
          </div>
        </div>

        {/* Bottom Links and Copyright */}
        <div className='text-center sm:flex sm:justify-between sm:text-left mt-4'>
          <div className='space-x-1 text-sm text-gray-500'>
            <span>
              <Link href='/reviews' className='hover:text-gray-800'>
                Reviews
              </Link>
              <span className='ml-1'>·</span>
            </span>
            <span>
              <Link href='/tos' className='hover:text-gray-800'>
                Terms and Conditions
              </Link>
              <span className='ml-1'>·</span>
            </span>
            <span>
              <Link href='/privacy-policy' className='hover:text-gray-800'>
                Privacy Policy
              </Link>
            </span>
          </div>
          <p className='mt-4 text-sm text-gray-500 sm:order-first sm:mt-0'>
            © 2025 TopFollower - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
