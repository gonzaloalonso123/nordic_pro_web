"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Partnership() {
  const t = useTranslations("partnership"); // Access 'partnership' section
  const title = t("title");
  const subtitle = t("subtitle");
  const cta = t("cta");

  return (
    <section className="py-12 my-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary to-[#005BBD]  opacity-90"></div>
      <div className="absolute inset-0 -z-10 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay"></div>

      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="drop-shadow-sm text-4xl md:text-5xl font-bold font-montserrat mb-6">
            {title}
          </h2>
          <p className="text-2xl mb-10 text-white/90">{subtitle}</p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-medium rounded-full px-10 py-7 text-lg"
          >
            <Link href="/become-partner">{cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
