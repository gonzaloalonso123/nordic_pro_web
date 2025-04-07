"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import content from "@/data/content.json";
import CTA from "./cta";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const { title, description, cta } = content.hero;

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInImage = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="relative pt-32 pb-28 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-50 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Text Section */}
          <motion.div
            className="flex flex-col justify-center space-y-8 max-w-2xl"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4 drop-shadow-md">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat tracking-tight leading-tight">
                Where{" "}
                <span className="bg-gradient-to-t from-[#005BBD] to-primary bg-clip-text text-transparent">
                  performance
                </span>{" "}
                meets{" "}
                <span className="bg-gradient-to-t from-[#005BBD] to-primary bg-clip-text text-transparent">
                  well-being
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70">
                {description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-12 py-7 text-lg"
              >
                <Link href="/join-waitlist">{cta}</Link>
              </Button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative lg:ml-auto w-full"
            variants={fadeInImage}
            initial="hidden"
            animate="visible"
          >
            <div className="relative h-[300px] w-full lg:h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/images/hero-image.webp"
                alt="Young soccer player kicking a ball"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>

            {/* Floating Tags */}
            <motion.div
              className="absolute -top-2 md:-top-6 left-10 md:-left-6 glass rounded-2xl p-2 md:p-4"
              variants={tagVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="font-normal text-sm md:text-base text-foreground/80">
                  Mental Health
                </span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-2 md:-bottom-6 -right-2 glass rounded-2xl p-2 md:p-4"
              variants={tagVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span className="font-normal text-sm md:text-base text-foreground/80">
                  Team Management
                </span>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-24 md:-left-20 glass rounded-2xl p-2 md:p-4"
              variants={tagVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <span className="font-normal text-sm md:text-base text-foreground/80">
                  Athlete retention
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
