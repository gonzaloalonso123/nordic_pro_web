"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
  Stars,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Mission() {
  const t = useTranslations("mission"); // Access 'mission' section
  const title = t("title");
  const subtitle = t("subtitle");
  const label = t("label");
  const features = t.raw("features") as {
    title: string;
    description: string;
    image: string;
  }[]; // Type the features array
  const stats = t.raw("stats") as {
    icon: string;
    value: string;
    label: string;
  }[]; // Type the stats array
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "100px" });
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Handle navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };
  useEffect(() => {
    if (mobileCardRefs.current[currentIndex]) {
      mobileCardRefs.current[currentIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentIndex]);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };
  type IconName = "Star" | "Award" | "Users" | "Clock";

  const icons: Record<IconName, React.ElementType> = {
    Star,
    Award,
    Users,
    Clock,
  };

  return (
    <section
      id="mission"
      className="py-10 lg:py-24 relative overflow-hidden"
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>

      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="text-center mb-8 md:mb-12 max-w-6xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center justify-center mb-4 px-5 py-2 bg-primary/10 rounded-full"
          >
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Stars className="text-primary h-5 w-5" />
              </motion.div>
              <span className="text-sm font-semibold text-primary">
                {label}
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeIn}
            className="drop-shadow-sm  text-3xl sm:text-4xl md:text-5xl  font-bold font-montserrat pb-6 bg-gradient-to-t from-[#005BBD] to-primary bg-clip-text text-transparent leading-tight"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <motion.div
            className="hidden md:flex flex-wrap justify-center gap-2 mb-6 md:mb-8 px-2 sticky top-4 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((feature: any, index: any) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`px-3 sm:px-5 py-2 sm:py-3 rounded-full transition-all duration-200 flex items-center gap-2 text-sm sm:text-base ${
                  currentIndex === index
                    ? "bg-gradient-to-tr from-primary to-[#005BBD] text-white shadow-md"
                    : "bg-primary/5 hover:bg-primary/10 text-primary"
                }`}
                aria-label={`View ${feature.title}`}
              >
                {currentIndex === index && <CheckCircle className="w-4 h-4" />}
                <span className="font-medium">{feature.title}</span>
              </button>
            ))}
          </motion.div>

          <div className="hidden md:block">
            <motion.div
              className="relative overflow-hidden rounded-3xl shadow-xl max-w-4xl mx-auto"
              variants={scaleIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="grid grid-cols-5 min-h-[400px]">
                    <div className="col-span-3 relative">
                      <Image
                        src={features[currentIndex].image || "/placeholder.svg"}
                        alt={features[currentIndex].title}
                        fill
                        className="object-contain object-center"
                        priority
                      />

                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                        {currentIndex + 1}/{features.length}
                      </div>
                      <div className="absolute inset-y-0 left-4 flex items-center z-10">
                        <button
                          onClick={prevSlide}
                          className="w-10 h-10 rounded-full bg-primary/50 backdrop-blur-sm shadow-lg hover:bg-primary/90 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                          aria-label="Previous slide"
                        >
                          <ChevronLeft className="h-5 w-5 text-white" />
                        </button>
                      </div>
                      <div className="absolute inset-y-0 right-4 flex items-center z-10">
                        <button
                          onClick={nextSlide}
                          className="w-10 h-10 rounded-full bg-primary/50 backdrop-blur-sm shadow-lg hover:bg-primary/90 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                          aria-label="Next slide"
                        >
                          <ChevronRight className="h-5 w-5 text-white" />
                        </button>
                      </div>
                    </div>

                    <div className="col-span-2 bg-white dark:bg-gray-900 p-6 flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-2xl md:text-xl font-bold text-primary mb-2 text-center md:text-left">
                          {features[currentIndex].title}
                        </h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-primary to-[#005BBD] rounded-full text-center md:text-left"></div>
                      </div>

                      <p className="text-foreground/80 text-sm leading-relaxed flex-grow">
                        {features[currentIndex].description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Star className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-xs text-foreground/60">
                            Key mission initiative
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
            <div className="flex justify-center items-center mt-6 gap-2">
              {features.map((_: any, index: any) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-primary to-[#005BBD]"
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="md:hidden mt-8">
            <div className="space-y-6">
              {features.map((feature: any, index: any) => (
                <motion.div
                  key={index}
                  id={`mission-card-${index}`}
                  className={`bg-white rounded-xl shadow-md overflow-hidden border `}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: currentIndex === index ? 1 : 0.98,
                  }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                      {index + 1}/{features.length}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl md:text-xl font-bold text-primary mb-2 text-center md:text-left">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/70 text-center md:text-left">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {stats && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {stats.map((stat: any, index: any) => {
              const Icon = icons[stat.icon as IconName];

              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl hover:translate-y-[-5px] transition-all duration-300"
                >
                  <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br border border-primary/10 h-full flex flex-col items-center text-center relative z-10">
                    <div className="text-primary w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-6 h-6 sm:w-7 sm:h-7" />}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-t from-[#005BBD] to-primary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-foreground/70">
                      {stat.label}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
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
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
