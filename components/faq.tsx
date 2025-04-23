"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Faq() {
  const t = useTranslations("faq");
  const title = t("title");
  const questions = t.raw("questions") as {
    question: string;
    answer: string;
  }[];
  const contact = t.raw("contact") as { text: string; cta: string };

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
      id="faq"
      className="py-10 md:py-24 relative overflow-hidden w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container px-4 md:px-6">
        <motion.div className="text-center mb-10" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat pb-6 bg-gradient-to-t from-[#005BBD] to-primary bg-clip-text text-transparent leading-tight">
            {title}
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto glass rounded-3xl p-8"
          variants={cardVariants}
        >
          <Accordion type="single" collapsible className="w-full">
            {questions.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <AccordionItem
                  value={`item-${index + 1}`}
                  className="border-b border-foreground/10 last:border-0"
                >
                  <AccordionTrigger className="text-lg font-medium py-6 text-left hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div className="mt-12 text-center" variants={cardVariants}>
            <p className="mb-6 text-foreground/70">{contact.text}</p>
            <Button
              asChild
              size="lg"
              className="text-white font-medium rounded-full px-10 py-3 text-lg transition-transform hover:scale-105"
            >
              <a href="mailto:info@nordicpro.se">{contact.cta}</a>
            </Button>
          </motion.div>
        </motion.div>
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
