"use client";

import { useTranslations } from "next-intl";

export default function TermsPageClient() {
  const t = useTranslations("terms");

  return (
    <div className="container max-w-4xl mx-auto px-4 py-32 md:py-40">
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="prose prose-gray max-w-none">
          {t.raw("sections").map((section: any, index: number) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              {section.content.map((paragraph: string, pIndex: number) => (
                <p key={pIndex} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-sm text-gray-600">
              {t("lastUpdated")}: {t("lastUpdatedDate")}
            </p>
            <p className="text-sm text-gray-600 mt-2">{t("contactInfo")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
