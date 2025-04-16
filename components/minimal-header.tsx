"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function MinimalHeader() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [showConfirm, setShowConfirm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const confirmMessage =
    locale === "sv"
      ? "Är du säker på att du vill lämna sidan?"
      : "Are you sure you want to leave?";

  const backToHomeLabel = locale === "sv" ? "Till startsidan" : "Back to Home";

  // 📱 Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🚫 Disable scroll when popup is open
  useEffect(() => {
    if (showConfirm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showConfirm]);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const confirmLeave = () => {
    router.push(`/${locale}`);
  };

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/80 shadow-sm"
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center">
            <Image
              src="/images/nordic-pro-logo.png"
              alt="NordicPro Logo"
              width={190}
              height={90}
              priority
              className="object-contain"
            />
          </div>

          <button
            onClick={handleBackClick}
            className="flex items-center text-primary border border-primary px-3 py-2 rounded-md text-sm hover:bg-primary/5"
          >
            <ArrowLeft className="w-4 h-4" />
            {!isMobile && <span className="ml-2">{backToHomeLabel}</span>}
          </button>
        </div>
      </motion.header>

      {/* Full-page Confirm Dialog */}
      {showConfirm && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="w-full max-w-xl bg-white border border-gray-200 shadow-xl rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100">
                <AlertTriangle className="h-7 w-7 text-yellow-600" />
              </div>

              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">
                {locale === "sv"
                  ? "Är du säker på att du vill lämna sidan?"
                  : "Are you sure you want to leave?"}
              </h2>
            </div>

            <div className="flex justify-center gap-3">
              <Button
                variant="default"
                onClick={() => setShowConfirm(false)}
                className="text-sm px-4 py-2"
              >
                {locale === "sv" ? "Stanna kvar" : "Stay"}
              </Button>
              <Button
                onClick={confirmLeave}
                className="text-sm px-4 py-2 bg-red-500 text-white hover:bg-red-600"
              >
                {locale === "sv" ? "Lämna sidan" : "Leave"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
