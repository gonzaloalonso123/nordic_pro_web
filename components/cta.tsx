"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function CTA() {
  const t = useTranslations("cta"); // Access 'cta' section
  const title = t("title");
  const description = t("description");
  const button = t("button");

  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-primary">
            {title}
          </h2>
          <p className="text-xl mb-10 text-foreground/70 max-w-2xl mx-auto">
            {description}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-10 py-7 text-lg"
          >
            <Link href="/join-waitlist">{button}</Link>
          </Button>
        </div>
      </div>
      {/* Enhanced animated background gradient - inspired by features component */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
    </section>
  );
}
