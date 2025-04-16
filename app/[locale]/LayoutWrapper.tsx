"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookie-consent";
import MinimalHeader from "@/components/minimal-header";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isMinimal =
    pathname?.startsWith("/sv/join-waitlist") ||
    pathname?.startsWith("/sv/become-partner") ||
    pathname?.startsWith("/en/join-waitlist") ||
    pathname?.startsWith("/en/become-partner");

  return (
    <div className="flex flex-col min-h-screen">
      {isMinimal ? <MinimalHeader /> : <Header />}
      <main className="flex-1">{children}</main>
      {!isMinimal && <CookieConsent />}
      {!isMinimal && <Footer />}
    </div>
  );
}
