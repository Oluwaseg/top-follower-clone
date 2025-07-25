'use client';

import { ArrowDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ProgressBar } from './progress-bar';
import { ReviewCard } from './review-card';
import { StarRating } from './star-rating';

interface ReviewDataItem {
  username: string;
  timeAgoKey: string;
  rating: number;
  sourceIcon: string;
  userImage?: string;
  reviewTextKey: string;
}

export function ReviewBlock() {
  const t = useTranslations('review_block');

  // Dummy data for demonstration
  const reviewsData: ReviewDataItem[] = [
    {
      username: 'alessiobianchi',
      timeAgoKey: 'time_ago.2_days_ago',
      rating: 5,
      sourceIcon: '/trustpilot.webp',
      userImage:
        'https://utfs.io/f/69017368-0b75-44c2-aee6-97f8b5de0f87-5sx85m.jpg',
      reviewTextKey: 'review_texts.alessio_bianchi',
    },
    {
      username: 'giorgiorossi87',
      timeAgoKey: 'time_ago.3_days_ago',
      rating: 5,
      sourceIcon: '/trustpilot.webp',
      reviewTextKey: 'review_texts.giorgio_rossi_87',
    },
    {
      username: 'marcoferrari92',
      timeAgoKey: 'time_ago.5_days_ago',
      rating: 5,
      sourceIcon: '/trustpilot.webp',
      reviewTextKey: 'review_texts.marco_ferrari_92',
    },
    {
      username: 'alessandrobianchi77',
      timeAgoKey: 'time_ago.5_days_ago',
      rating: 5,
      sourceIcon: '/trustpilot.webp',
      reviewTextKey: 'review_texts.alessandro_bianchi_77',
    },
    {
      username: 'Chiaramoretti',
      timeAgoKey: 'time_ago.7_days_ago',
      rating: 5,
      sourceIcon: '/trustpilot.webp',
      reviewTextKey: 'review_texts.chiara_moretti',
    },
    {
      username: 'lucarizzo90',
      timeAgoKey: 'time_ago.10_days_ago',
      rating: 5,
      sourceIcon: '/trustpilot.webp',
      reviewTextKey: 'review_texts.luca_rizzo_90',
    },
    {
      username: 'Filippoconte',
      timeAgoKey: 'time_ago.12_days_ago',
      rating: 5,
      sourceIcon: '/trustpilot.webp',
      reviewTextKey: 'review_texts.filippo_conte',
    },
    {
      username: 'lorenzomartini82',
      timeAgoKey: 'time_ago.15_days_ago',
      rating: 5,
      sourceIcon: '/trustpilot.webp',
      reviewTextKey: 'review_texts.lorenzo_martini_82',
    },
  ];

  // Dummy data for rating distribution
  const ratingDistribution = [
    { stars: 5, count: 316, percentage: 93 },
    { stars: 4, count: 42, percentage: 4 },
    { stars: 3, count: 11, percentage: 3 },
    { stars: 2, count: 3, percentage: 0 },
    { stars: 1, count: 1, percentage: 0 },
  ];

  return (
    <section
      data-aos='fade-up'
      id='reviewBlock'
      className='mt-12 px-12 py-20 aos-init aos-animate bg-[#FAFAFA]'
    >
      <div
        className='container space-y-2'
        style={{
          background:
            'radial-gradient(56.8% 50% at 50% 50%, #ffeccc 0, hsla(0, 0%, 100%, 0) 100%)',
        }}
      >
        {/* Hidden section (as per original HTML) */}
        <div className='space-y-2 hidden'>
          <div className='flex justify-center'>
            <span className='inline-flex rounded-full px-4 py-2 uppercase leading-6 tracking-[0.5px] text-indigo-600 w-fit bg-gradient-to-r from-indigo-400 to-indigo-600'>
              <span className='text-sm font-extrabold text-transparent bg-clip-text uppercase bg-gradient-to-r from-yellow-300 to-orange-500'>
                {t('customer_reviews_badge')}
              </span>
            </span>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='text-3xl md:text-4xl font-extrabold text-center'>
              {t.rich('over_reviews_speak_for_themselves', {
                count: 300,
                highlight: (chunks) => (
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400'>
                    {chunks}
                  </span>
                ),
              })}
            </h2>

            <p className='max-w-xl text-center mt-2'>
              {t.rich('service_description', {
                bold: (chunks) => <b className='font-semibold'>{chunks}</b>,
              })}
            </p>
          </div>
        </div>
        {/* Visible Customer Reviews Title */}
        <div>
          <h2 className='text-4xl md:text-4xl font-extrabold text-center'>
            {t('customer_reviews_title')}
          </h2>
        </div>
        {/* Overall Rating Card */}
        <div className='p-6'>
          {' '}
          {/* Removed section-gradient-2 and its inline style */}
          <div className='flex justify-center'>
            <div className='card-wrapper'>
              <div
                className='rounded-[20px] bg-white text-card-foreground p-6 sm:px-10 sm:py-8 w-full sm:min-w-[380px] flex flex-col sm:flex-row items-center justify-center'
                style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' }}
              >
                <div className='text-center space-y-1.5'>
                  <h3 className='text-3xl font-extrabold'>4.91</h3>
                  <div className='flex justify-center'>
                    <StarRating rating={5} fillColorClass='fill-[#FFC107]' />{' '}
                    {/* Assuming 4.91 is represented by 5 full stars visually */}
                  </div>
                  <div>
                    <b className='text-orange-500'>376+</b>{' '}
                    {t('reviews_remaining', { count: '' }).split(' ')[1]}{' '}
                    {/* Extracting 'reviews' part */}
                  </div>
                </div>
                <div
                  data-orientation='vertical'
                  role='none'
                  className='shrink-0 bg-border h-full w-[1px] hidden sm:block sm:h-28 sm:mx-6'
                ></div>
                <div
                  data-orientation='horizontal'
                  role='none'
                  className='shrink-0 bg-border h-[1px] block my-4 sm:hidden w-3/4'
                ></div>
                <div>
                  {ratingDistribution.map((item) => (
                    <div
                      key={item.stars}
                      className='flex items-center font-medium space-x-1 text-foreground/85'
                    >
                      <div className='w-4 text-right'>{item.stars}</div>
                      <StarRating
                        rating={1}
                        className='h-5 w-5'
                        fillColorClass='fill-black'
                        totalStars={1}
                      />{' '}
                      {/* Black star */}
                      <div className='px-2'>
                        <ProgressBar progress={item.percentage} />
                      </div>
                      <div>{item.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Individual Review Cards */}
        <div className='py-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {reviewsData.map((review, index) => (
            <ReviewCard
              key={index}
              username={review.username}
              timeAgo={t(review.timeAgoKey)}
              rating={review.rating}
              sourceIcon={review.sourceIcon}
              userImage={review.userImage}
              reviewText={t(review.reviewTextKey)}
            />
          ))}
        </div>
        {/* Show More Button */}
        <div className='flex flex-col items-center justify-center'>
          <button className='inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 rounded-xl text-base'>
            {t('show_more_button')}
            <ArrowDown className='h-4 w-4 ml-1.5' />
          </button>
          <div className='text-xs mt-1 text-foreground/70 hidden'>
            {t('reviews_remaining', { count: 300 })}
          </div>
        </div>
      </div>
    </section>
  );
}
