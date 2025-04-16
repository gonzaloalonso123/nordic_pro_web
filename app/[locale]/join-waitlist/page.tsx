"use client";

import { useTranslations } from "next-intl";
import WaitlistForm from "@/components/waitlist-form";
import { CheckCircle } from "lucide-react";

export default function JoinWaitlistPage() {
  const t = useTranslations("waitlist");
  const benefits = t.raw("benefits") as string[];

  return (
    <div className="py-32 md:py-40">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-primary">
              {t("title")}
            </h1>
            <p className="text-xl text-foreground/70">{t("description")}</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              {t("subtitle")}
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <WaitlistForm />

          <div className="mt-12 text-center">
            <p className="text-foreground/70">
              {t("contact.text")}{" "}
              <a
                href="mailto:info@nordicpro.com"
                className="text-primary hover:underline"
              >
                {t("contact.cta")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
