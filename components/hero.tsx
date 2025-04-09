"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero"); // Access the 'hero' section from JSON

  const title = t("title");
  const description = t("description");
  const cta = t("cta");
  const tags = [
    { label: t("tags.0.label"), delay: t.raw("tags.0.delay") },
    { label: t("tags.1.label"), delay: t.raw("tags.1.delay") },
    { label: t("tags.2.label"), delay: t.raw("tags.2.delay") },
  ];

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInImage = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.3, x: -100, rotate: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delayChildren: 0.4,
        staggerChildren: 0.3,
        bounce: 0.4,
      },
    },
  };
  return (
    <section className="relative pt-32 pb-28 md:pt-40 md:pb-0 overflow-hidden">
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
                {title.split(" ")[0]}{" "}
                <span className="bg-gradient-to-t from-[#005BBD] to-primary bg-clip-text text-transparent">
                  {title.split(" ")[1]}
                </span>{" "}
                {title.split(" ")[2]}{" "}
                <span className="bg-gradient-to-t from-[#005BBD] to-primary bg-clip-text text-transparent">
                  {title.split(" ")[3]}
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

            {/* Render Floating Tags Dynamically from JSON */}
            {tags && (
              <>
                {/* Tag 1: Mental Health */}
                <motion.div
                  className="absolute -top-2 md:-top-6 left-10 md:-left-6 glass rounded-2xl p-2 md:p-4"
                  initial={{ opacity: 0, scale: 0.3, x: -100, rotate: -30 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    delay: tags[0].delay,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="font-normal text-sm md:text-base text-foreground/80">
                      {tags[0].label}
                    </span>
                  </div>
                </motion.div>

                {/* Tag 2: Team Management */}
                <motion.div
                  className="absolute -bottom-2 md:bottom-10 -right-2 glass rounded-2xl p-2 md:p-4"
                  initial={{ opacity: 0, scale: 0.3, x: -100, rotate: -20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    delay: tags[1].delay,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span className="font-normal text-sm md:text-base text-foreground/80">
                      {tags[1].label}
                    </span>
                  </div>
                </motion.div>

                {/* Tag 3: Athlete Retention */}
                <motion.div
                  className="absolute bottom-24 md:-left-20 glass rounded-2xl p-2 md:p-4"
                  initial={{ opacity: 0, scale: 0.3, y: 50, rotate: -20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    delay: tags[2].delay,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="font-normal text-sm md:text-base text-foreground/80">
                      {tags[2].label}
                    </span>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
