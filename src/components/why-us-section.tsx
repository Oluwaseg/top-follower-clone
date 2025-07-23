import { Clock, Shield, Star, Users } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Immediate delivery',
    description:
      'We process and activate all orders immediately after receiving payment. No waiting times.',
  },
  {
    icon: Shield,
    title: 'Lifetime warranty',
    description:
      "We offer a lifetime guarantee on all our services. If there's a problem, we'll replace it at no cost.",
  },
  {
    icon: Users,
    title: 'Real and active users',
    description:
      'Real and active users will guarantee you high organic reach and increased popularity.',
  },
  {
    icon: Star,
    title: 'The best quality in Italy',
    description:
      'An organic promotion service optimized to improve the SEO of your account and posts.',
  },
];

export function WhyUsSection() {
  return (
    <section className='py-[70px] sm:py-[80px] px-4 sm:px-16 bg-[#FAFAFA]'>
      <div className='container max-w-6xl mx-auto space-y-2'>
        <div className='flex justify-center'>
          <span className='inline-flex rounded-full px-4 py-2 uppercase leading-6 tracking-[0.5px] text-orange-600 w-fit bg-gradient-to-r from-orange-50 to-orange-50 border border-orange-100'>
            <span className='text-sm font-extrabold bg-orange-400/80 bg-clip-text text-transparent uppercase'>
              Why us?
            </span>
          </span>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-center'>
            We are the{' '}
            <span className='bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent'>
              best
            </span>{' '}
            shop in Italy
          </h2>
          <p className='max-w-xl text-center mt-2 text-gray-600'>
            Trusted by over 300,000 users and with over 5 million orders, we
            have received a 4.9 out of 5 rating from our customers.
          </p>
        </div>
        <div
          className='pt-12 pb-12'
          style={{
            background:
              'radial-gradient(43% 55% at 50% 50%, #ffeccc 0, hsla(0, 0%, 100%, 0) 100%)',
          }}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {features.map((feature, index) => (
              <div key={index} className='h-full'>
                <div className='rounded-[20px] bg-white text-card-foreground shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1),0_2px_10px_-2px_rgba(0,0,0,0.04)] h-full p-6'>
                  <div className='flex items-center'>
                    <div className='rounded-xl w-12 h-12 flex items-center shrink-0 justify-center bg-gradient-to-b from-orange-100 to-orange-50'>
                      <feature.icon className='w-8 h-8 text-orange-600' />
                    </div>
                    <h3 className='text-[21px] font-semibold leading-none tracking-tight ml-3'>
                      {feature.title}
                    </h3>
                  </div>
                  <div className='mt-3 text-[17px] text-slate-600'>
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
