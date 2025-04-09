import { getTranslations } from "next-intl/server";
import PrivacyPageClient from "./PrivacyPageClient";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "privacy" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
