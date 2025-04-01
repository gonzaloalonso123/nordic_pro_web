"use client";

import type React from "react";
import MobilePlatformHeader from "@/components/platform/mobile-platform-header";
import MobilePlatformNavbar from "@/components/platform/mobile-platform-navbar";
import { useMobile } from "@/hooks/use-mobile";
import PlatformHeader from "@/components/platform/platform-header";
import PlatformSidebar from "@/components/platform/platform-sidebar";

import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

function PlatformLayoutClient({ children }: { children: React.ReactNode }) {
  const isMobile = useMobile();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <div className="min-h-screen flex flex-col bg-gray-50">
          {isMobile ? (
            <>
              <MobilePlatformHeader />
              <main className="flex-1 pb-20 overflow-x-hidden">{children}</main>
              <MobilePlatformNavbar />
            </>
          ) : (
            <>
              <PlatformHeader />
              <div className="flex flex-1">
                <PlatformSidebar />
                <main className="flex-1 p-6">{children}</main>
              </div>
            </>
          )}
        </div>
      </body>
    </html>
  );
}

export default PlatformLayoutClient;
