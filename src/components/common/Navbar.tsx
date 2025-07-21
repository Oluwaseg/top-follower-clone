"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();

  return (
    <nav className="p-4 bg-gray-100 flex justify-between items-center">
      <h1 className="font-bold">{t("brand")}</h1>
      <ul className="flex gap-4">
        <li><Link href="/about">{t("about")}</Link></li>
        <li><Link href="/instagram">{t("instagram")}</Link></li>
        <li><Link href="/tiktok">{t("tiktok")}</Link></li>
      </ul>
      <div className="ml-4">
        <LanguageSwitcher />
      </div>
    </nav>
  );
} 