import { getTranslations } from "next-intl/server";
import TermsPageClient from "./TermsPageClient";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "terms" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function TermsPage() {
  return <TermsPageClient />;
}
