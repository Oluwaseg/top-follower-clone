import { NextRequest, NextResponse } from "next/server";
const locales = ["en", "fr"];
const defaultLocale = "en";

function getPreferredLocale(req: NextRequest) {
  // 1. Check cookie
  const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale;

  // 2. Check Accept-Language header
  const lang = req.headers.get("accept-language");
  if (!lang) return defaultLocale;
  const preferred = lang.split(",")[0].split("-")[0];
  return locales.includes(preferred) ? preferred : defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isMissingLocale = locales.every(locale => !pathname.startsWith(`/${locale}`));
  if (isMissingLocale) {
    const locale = getPreferredLocale(req);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }
} 