'use client';

import { FAQSection } from '@/components/faq-section';
import { TestimonySection } from '@/components/Testimony-section';
import { WhyUsSection } from '@/components/why-us-section';

export default function LandingPage() {
  return (
    <main className=''>
      {/* <Navbar />
      <Hero /> */}
      <WhyUsSection />
      <FAQSection />
      <TestimonySection />
    </main>
  );
}
