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
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Faq() {
  const t = useTranslations("faq"); // Access 'faq' section
  const title = t("title");
  const questions = t.raw("questions") as {
    question: string;
    answer: string;
  }[]; // Type the questions array
  const contact = t.raw("contact") as { text: string; cta: string };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-primary">
            {title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto glass rounded-3xl p-8">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((item: any, index: any) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border-b border-foreground/10 last:border-0"
              >
                <AccordionTrigger className="text-lg font-medium py-6 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="mb-6 text-foreground/70">{contact.text}</p>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-8"
            >
              <Link href="#">{contact.cta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
