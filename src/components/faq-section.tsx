/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';

export function FAQSection() {
  const t = useTranslations('faq_section');
  const faqData = t.raw('questions'); // Get the raw array of questions

  return (
    <section id='faq' className='py-16 bg-white'>
      <div className='container max-w-4xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center justify-center'>
            <span className='bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide'>
              {t('tag')}
            </span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4'>
            {t('title')}
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>{t('description')}</p>
        </div>
        <div className='max-w-4xl mx-auto'>
          <Accordion type='single' collapsible className='w-full space-y-4'>
            {faqData.map((faq: any, index: number) => (
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
