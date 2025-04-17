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
    <section
      id="faq"
      className="py-10 md:py-24 relative overflow-hidden w-full"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="drop-shadow-sm  text-3xl sm:text-4xl md:text-5xl  font-bold font-montserrat pb-6 bg-gradient-to-t from-[#005BBD] to-primary bg-clip-text text-transparent leading-tight">
            {title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto glass rounded-3xl p-8">
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
              size="lg"
              className=" text-white font-medium rounded-full px-10 py-3 text-lg"
            >
              <a href="mailto:info@nordicpro.se" className="">
                {contact.cta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
