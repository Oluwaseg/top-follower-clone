"use client";
import { useTranslations } from "next-intl";
export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <>
      
      <h1 className="p-8 text-2xl font-bold">{t("title")}</h1>
    </>
  );
} 
