"use client";
import { useTranslations } from "next-intl";
import Navbar from "@/components/common/Navbar";

export default function InstagramPage() {
  const t = useTranslations("instagram");
  return (
    <>
      <Navbar />
      <h1 className="p-8 text-2xl font-bold">{t("title")}</h1>
    </>
  );
} 