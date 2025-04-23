"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Partnership() {
  const t = useTranslations("partnership");
  const title = t("title");
  const subtitle = t("subtitle");
  const cta = t("cta");

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
      className="py-12 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary to-[#005BBD]"></div>

      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat mb-6"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-2xl mb-10 text-white/90"
          >
            {subtitle}
          </motion.p>

          <motion.div variants={cardVariants}>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-medium rounded-full px-10 py-7 text-lg transition-transform hover:scale-105"
            >
              <Link href="/become-partner">{cta}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
