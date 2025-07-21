"use client";
import { useTransition } from "react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
];

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    // Reload the page to apply the new language
    startTransition(() => {
      window.location.reload();
    });
  };

  // Try to get the current locale from the cookie or browser
  let currentLocale = "en";
  if (typeof document !== "undefined") {
    const match = document.cookie.match(/NEXT_LOCALE=([^;]+)/);
    if (match) {
      currentLocale = match[1];
    } else if (navigator.language) {
      const lang = navigator.language.split("-")[0];
      if (LANGUAGES.some(l => l.code === lang)) currentLocale = lang;
    }
  }

  return (
    <select
      className="border rounded px-2 py-1"
      value={currentLocale}
      onChange={handleChange}
      disabled={isPending}
      aria-label="Select language"
    >
      {LANGUAGES.map(lang => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
} 