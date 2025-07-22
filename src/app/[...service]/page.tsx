import { ServicePage } from '@/components/shared/service-page';
import servicesData from '@/data/services.json';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    service: string[];
  }>;
  searchParams: Promise<{
    premium?: string;
  }>;
}

export default async function DynamicServicePage({
  params,
  searchParams,
}: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const servicePath = resolvedParams.service.join('-');
  const isPremium = resolvedSearchParams.premium === 'true';

  // Get service data from JSON
  const serviceData = servicesData[servicePath as keyof typeof servicesData];

  if (!serviceData) {
    notFound();
  }

  return <ServicePage serviceData={serviceData} isPremium={isPremium} />;
}

// Generate static params for all services
export function generateStaticParams() {
  const serviceKeys = Object.keys(servicesData);

  return serviceKeys.map((service) => ({
    service: service.split('-'),
  }));
}
