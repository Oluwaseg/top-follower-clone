"use client";
import { useTranslations } from "next-intl";
export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="p-8 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold">{t("title")}</h2>
      <p className="text-gray-600">{t("subtitle")}</p>
    </section>
  );
} 