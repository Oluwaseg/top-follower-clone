'use client';

import { FAQSection } from '@/components/faq-section';
import { HeroSection } from '@/components/Hero';
import { TestimonySection } from '@/components/Testimony-section';
import { WhyUsSection } from '@/components/why-us-section';

export default function LandingPage() {
  return (
    <main className=''>
      <HeroSection />
      <WhyUsSection />
      <FAQSection />
      <TestimonySection />
    </main>
  );
}
