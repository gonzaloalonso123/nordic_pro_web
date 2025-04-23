"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function CTA() {
  const t = useTranslations("cta");
  const title = t("title");
  const description = t("description");
  const button = t("button");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.section
      className="py-10 md:py-24 overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-3xl md:text-2xl lg:text-3xl font-bold font-montserrat pb-6 bg-gradient-to-t from-[#005BBD] to-primary bg-clip-text text-transparent leading-tight"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl mb-10 text-foreground/70 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          <motion.div variants={cardVariants}>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-10 py-7 text-lg transition-transform hover:scale-105"
            >
              <Link href="/join-waitlist">{button}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <style jsx global>{`
        .glass {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>
    </motion.section>
  );
}
