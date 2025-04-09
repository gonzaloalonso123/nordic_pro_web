"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const t = useTranslations("cookies");
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    statistics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem("cookieConsent");
    if (!stored) {
      setTimeout(() => setIsVisible(true), 1000);
    } else {
      try {
        setPreferences(JSON.parse(stored));
      } catch {
        setIsVisible(true);
      }
    }
  }, []);

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem("cookieConsent", JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const acceptAll = () =>
    savePreferences({
      essential: true,
      statistics: true,
      marketing: true,
      functional: true,
    });

  const essentialOnly = () =>
    savePreferences({
      essential: true,
      statistics: false,
      marketing: false,
      functional: false,
    });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 24 }}
          className="fixed bottom-6 left-6 right-6 z-50"
        >
          <div className=" mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200/60 bg-white/80 backdrop-blur-md p-6 shadow-xl transition-all">
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
              >
                <X className="h-5 w-5" />
              </button>

              {showSettings ? (
                <>
                  <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                    {t("manageCookies")}
                  </h3>
                  <div className="mt-6 divide-y divide-gray-200/50">
                    {(
                      [
                        "essential",
                        "statistics",
                        "marketing",
                        "functional",
                      ] as const
                    ).map((key) => (
                      <div
                        key={key}
                        className="flex items-center justify-between py-4"
                      >
                        <span className="text-sm text-gray-800 capitalize">
                          {t(key)}
                        </span>
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            checked={preferences[key]}
                            onChange={() => togglePreference(key)}
                            className="sr-only peer"
                          />
                          <div className="peer h-5 w-10 rounded-full bg-gray-300 peer-checked:bg-primary transition-all relative">
                            <div
                              className={`absolute h-4 w-4 rounded-full bg-white shadow-sm top-0.5 left-0.5 transition-transform ${
                                preferences[key] ? "translate-x-5" : ""
                              }`}
                            />
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-between">
                    <Button
                      variant="ghost"
                      className="text-sm text-gray-500 hover:text-gray-700"
                      onClick={() => setShowSettings(false)}
                    >
                      {t("back")}
                    </Button>
                    <Button
                      onClick={() => savePreferences(preferences)}
                      className="text-sm px-6"
                    >
                      {t("savePreferences")}
                    </Button>
                  </div>
                </>
              ) : (
                <div className="grid gap-6  items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      {t("title")}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {t("description")}{" "}
                      <Link
                        href={`/${currentLocale}/cookies`}
                        className="text-primary underline hover:opacity-80"
                      >
                        {t("learnMore")}
                      </Link>
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-end gap-2">
                    <Button
                      onClick={() => setShowSettings(true)}
                      variant="outline"
                      className="w-full text-sm border-gray-300"
                    >
                      {t("managePreferences")}
                    </Button>
                    <Button
                      onClick={acceptAll}
                      className="w-full text-sm bg-primary hover:bg-primary/90 text-white"
                    >
                      {t("acceptAll")}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
