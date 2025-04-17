import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import LayoutWrapper from "./LayoutWrapper";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string }; // Required if using [locale] segment
}) {
  const locale = await getLocale();
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <div>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </NextIntlClientProvider>
    </div>
  );
}
