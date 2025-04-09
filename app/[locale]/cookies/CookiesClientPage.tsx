"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const defaultPrefs = {
  essential: true,
  statistics: false,
  marketing: false,
  functional: false,
};

export default function CookiesPage() {
  const t = useTranslations("cookies");
  const [preferences, setPreferences] = useState(defaultPrefs);

  useEffect(() => {
    const stored = localStorage.getItem("cookieConsent");
    if (stored) {
      try {
        setPreferences(JSON.parse(stored));
      } catch {}
    }
  }, []);

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    alert(t("saved")); // Replace with toast if desired
  };

  const handleReset = () => {
    setPreferences(defaultPrefs);
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-32 md:py-40">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t("pageTitle")}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("pageDescription")}
          </p>
        </div>

        {/* Cookie Categories */}
        <div className="grid gap-8 md:grid-cols-2">
          {t.raw("cookieCategories").map((category: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      category.required
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {category.required ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <span className="text-lg font-semibold">?</span>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>

                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    {t("cookiesUsed")}:
                  </h3>
                  <ul className="space-y-2">
                    {category.cookies.map((cookie: any, cIndex: number) => (
                      <li
                        key={cIndex}
                        className="text-sm bg-gray-50 p-3 rounded-md"
                      >
                        <div className="font-medium">{cookie.name}</div>
                        <div className="text-gray-500 mt-1">
                          {cookie.purpose}
                        </div>
                        <div className="text-gray-400 text-xs mt-1">
                          {t("duration")}: {cookie.duration}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to manage browser cookies */}
        <div className="prose prose-gray max-w-none mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("howToManage.title")}
          </h2>
          <p className="mb-4 text-gray-700">{t("howToManage.description")}</p>

          <div className="grid gap-4 md:grid-cols-2 mt-6">
            {t.raw("browsers").map((browser: any, index: number) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">{browser.name}</h3>
                <a
                  href={browser.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  {t("howToManage.learnMore")}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Preferences section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            {t("updatePreferencesTitle")}
          </h2>

          <div className="space-y-4">
            {["statistics", "marketing", "functional"].map((key) => (
              <div key={key} className="flex items-center justify-between">
                <span className="capitalize text-sm text-gray-800">
                  {t(key)}
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences[key as keyof typeof preferences]}
                    onChange={() =>
                      handleToggle(key as keyof typeof preferences)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-primary transition-all relative">
                    <div
                      className={`absolute left-1 top-1 h-3 w-3 rounded-full bg-white shadow-sm transition-transform ${
                        preferences[key as keyof typeof preferences]
                          ? "translate-x-5"
                          : ""
                      }`}
                    />
                  </div>
                </label>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={handleReset}>
              {t("reset")}
            </Button>
            <Button onClick={handleSave}>{t("savePreferences")}</Button>
          </div>
        </div>

        {/* Last updated */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <p className="text-sm text-gray-600">
            {t("lastUpdated")}: {t("lastUpdatedDate")}
          </p>
        </div>
      </div>
    </div>
  );
}
