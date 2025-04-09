import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import CookieConsent from "@/components/cookie-consent";

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

export const metadata: Metadata = {
  title: "NordicPro - Where Performance Meets Well-being",
  description: "A platform for youth teams that puts mental health, motivation, and team management in one place.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string }; // Required if using [locale] segment
}) {
  const locale = await getLocale();
  // const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          {/* <CookieConsent /> */}
          <Footer />
        </div>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
