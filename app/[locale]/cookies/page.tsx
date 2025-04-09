import { getTranslations } from "next-intl/server";
import CookiesClientPage from "./CookiesClientPage";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "cookies" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function CookiesPage() {
  return <CookiesClientPage />;
}
