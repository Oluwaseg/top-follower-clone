import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
  // 1. Try cookie
  const cookieStore = await cookies();
  let locale = cookieStore.get('NEXT_LOCALE')?.value;

  // 2. Fallback to Accept-Language header
  if (!locale) {
    const headerStore = await headers();
    const acceptLang = headerStore.get('accept-language');
    locale = acceptLang?.split(',')[0].split('-')[0];
  }

  // 3. Fallback to 'en' if not detected or not supported
  if (!locale || !['en', 'fr'].includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
}); 