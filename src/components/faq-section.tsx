'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'Do you require my social media account password?',
    answer:
      'Absolutely NO! We will not access your account, nor will we ever ask for your password.',
  },
  {
    question: 'Am I at risk of being banned or penalized?',
    answer:
      'Absolutely not. Our services are of the highest quality and there is no risk of incurring bans or penalties on your social accounts.',
  },
  {
    question: 'When will you deliver my order?',
    answer:
      'After payment confirmation our team will immediately get to work on your account.',
  },
  {
    question: 'What if someone unfollows me?',
    answer:
      "Don't worry, with our service you have a guarantee. Since these are real and active users, it's possible that someone will stop following you. In that case, we will provide reintegration to your account without problems.",
  },
  {
    question: 'Why Us?',
    answer:
      'Simply because we are number 1 in Italy! The only ones to follow your account, to offer you quality services and 24/7 support.',
  },
];

export function FAQSection() {
  return (
    <section id='faq' className='py-16 bg-white'>
      <div className='container max-w-4xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center justify-center'>
            <span className='bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide'>
              FAQ
            </span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            We&apos;ve collected answers to the most frequently asked questions
            for you.
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <Accordion type='single' collapsible className='w-full space-y-4'>
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='border-none'
              >
                <AccordionTrigger className='text-left py-4 px-6 hover:no-underline text-gray-900 font-medium text-lg bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors [&[data-state=open]]:rounded-b-none'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4 text-gray-600 leading-relaxed bg-white rounded-b-lg border-t border-gray-200'>
                  <div className='pt-3'>{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
