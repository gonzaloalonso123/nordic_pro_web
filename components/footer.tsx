"use client";

import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function Footer() {
  const t = useTranslations("footer");
  const links = t.raw("links") as { label: string; href: string }[];
  const copyright = t("copyright");

  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split("/")[1] || "en";

  // Handle language switch
  const handleLanguageChange = (locale: string) => {
    const newPath = pathname.replace(/^\/[^/]+/, `/${locale}`);
    router.push(newPath);
  };

  // Group links for better organization
  const mainLinks = links.slice(0, 4);
  const legalLinks = links.slice(4);
  useEffect(() => {
    console.log(legalLinks);
  });

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="container  pt-16 pb-8 relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and about section */}
          <div className="flex flex-col space-y-4 md:-mt-4">
            <Link href={`/${currentLocale}`} className="inline-block">
              <Image
                src="/images/nordic-pro-logo.png"
                alt="NordicPro Logo"
                width={180}
                height={80}
                className="h-auto"
                priority
              />
            </Link>

            {/* Contact info */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center  gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@nordicpro.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Uppsala, Sweden</span>
              </div>
            </div>
            <div className="flex justify-start pt-4">
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    currentLocale === "en"
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-primary/10"
                  }`}
                >
                  <span className="flex-shrink-0">🇬🇧</span>
                  <span>English</span>
                </button>
                <button
                  onClick={() => handleLanguageChange("sv")}
                  className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    currentLocale === "sv"
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-primary/10"
                  }`}
                >
                  <span className="flex-shrink-0">🇸🇪</span>
                  <span>Svenska</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main links */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900 mb-5 text-lg">
              {t("ui.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {mainLinks.map((link, index) => (
                <li key={`main-link-${index}`}>
                  <Link
                    href={`/${currentLocale}${link.href}`}
                    className="text-gray-600 hover:text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900 mb-5 text-lg">
              {t("ui.legal") || "Legal"}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={`legal-link-${index}`}>
                  <Link
                    href={`/${currentLocale}${link.href}`}
                    className="text-gray-600 hover:text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter and social */}
          <div className="flex flex-col space-y-5">
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
              {t("ui.stayUpdated") || "Stay Updated"}
            </h3>
            <p className="text-sm text-gray-600">
              {t("ui.newsletterText") ||
                "Subscribe to our newsletter for the latest updates."}
            </p>

            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder={t("ui.emailPlaceholder") || "Your email"}
                className="px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
              />
              <Button
                size="lg"
                className=" text-white font-medium rounded-full px-7 py-3 text-md"
              >
                {t("ui.subscribe") || "Subscribe"}
              </Button>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                {t("ui.connectWithUs")}
              </h3>
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -3, scale: 1.05 }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -3, scale: 1.05 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 relative">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">{copyright}</p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              {t("ui.madeWith") || "Made with ❤️ by NordicPro"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
