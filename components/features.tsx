"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  LineChart,
  Trophy,
  Heart,
  Users,
  Stars,
} from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("features");
  const title = t("title");
  const subtitle = t("subtitle");
  const label = t("label");
  const list = t.raw("list") as {
    title: string;
    icon: string;
    items: { text: string; description: string }[];
  }[];
  const [activeFeature, setActiveFeature] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = () => {
    setDirection("forward");
    setActiveFeature((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection("backward");
    setActiveFeature((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      setDirection("forward");
      handleNext();
    }
    if (touchEnd - touchStart > 75) {
      setDirection("backward");
      handlePrev();
    }
  };

  // Feature icons mapping
  const featureIcons = ["LineChart", "Trophy", "Heart", "Users"];
  const renderIcon = (iconName: string, className = "h-6 w-6") => {
    switch (iconName) {
      case "LineChart":
        return <LineChart className={className} />;
      case "Trophy":
        return <Trophy className={className} />;
      case "Heart":
        return <Heart className={className} />;
      case "Users":
        return <Users className={className} />;
      default:
        return <LineChart className={className} />;
    }
  };

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

  const carouselVariants = {
    hidden: (direction: "forward" | "backward") => ({
      opacity: 0,
      x: direction === "forward" ? 50 : -50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: (direction: "forward" | "backward") => ({
      opacity: 0,
      x: direction === "forward" ? -50 : 50,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section id="features" className="pt-10 lg:py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 justify-center mb-4 px-5 py-2 bg-primary/10 rounded-full w-fit mx-auto"
          >
            <Stars className="text-primary h-5 w-5" />
            <span className="text-sm font-semibold text-primary">{label}</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold font-montserrat pb-6 bg-gradient-to-t from-[#005BBD] to-primary bg-clip-text text-transparent"
          >
            {title.split("—")[0]}
            <br />
            {title.split("—")[1]}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Mobile View */}
        {isMobile && (
          <motion.div
            className="mb-12"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative" ref={carouselRef}>
              <div
                className="relative overflow-hidden rounded-2xl pb-4"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeFeature}
                    custom={direction}
                    variants={carouselVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="bg-white rounded-3xl shadow-lg p-6 border border-primary/10 h-[300px]"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-primary to-[#005BBD] text-white shadow-md">
                        {renderIcon(featureIcons[activeFeature])}
                      </div>
                      <h3 className="text-xl font-bold font-montserrat">
                        {list[activeFeature].title}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {list[activeFeature].items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: itemIndex * 0.1 }}
                        >
                          <CheckCircle className="h-5 w-5 text-secondary/70 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">
                            {item.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex gap-2 justify-center items-center mt-2">
                <button
                  onClick={handlePrev}
                  className="mr-4 md:mr-0 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center border border-gray-100"
                  aria-label="Previous feature"
                >
                  <ChevronLeft className="h-5 w-5 text-primary" />
                </button>
                {list.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeFeature === index
                        ? "w-8 bg-gradient-to-r from-primary to-[#005BBD]"
                        : "w-2 bg-gray-300"
                    }`}
                    onClick={() => {
                      setDirection(
                        index > activeFeature ? "forward" : "backward"
                      );
                      setActiveFeature(index);
                    }}
                    aria-label={`Go to feature ${index + 1}`}
                  />
                ))}
                <button
                  onClick={handleNext}
                  className="ml-4 md:ml-0 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center border border-gray-100"
                  aria-label="Next feature"
                >
                  <ChevronRight className="h-5 w-5 text-primary" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Desktop View */}
        {!isMobile && (
          <motion.div
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Feature navigation */}
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                {list.map((feature, index) => {
                  const isActive = activeFeature === index;
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      className={`relative rounded-xl p-6 cursor-pointer transition-all ${
                        isActive
                          ? "bg-white shadow-lg border border-primary/10"
                          : "hover:bg-white/50 hover:shadow-md"
                      }`}
                      onClick={() => {
                        setDirection(
                          index > activeFeature ? "forward" : "backward"
                        );
                        setActiveFeature(index);
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-br from-primary to-[#005BBD] text-white shadow-md"
                              : "bg-gradient-to-br from-primary/10 to-[#005BBD]/10 text-primary"
                          }`}
                        >
                          {renderIcon(featureIcons[index])}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold font-montserrat mb-2">
                            {feature.title}
                          </h3>
                          <ul className="space-y-2">
                            {feature.items
                              .slice(0, isActive ? 3 : 1)
                              .map((item, itemIndex) => (
                                <motion.li
                                  key={itemIndex}
                                  className="flex items-start gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 + itemIndex * 0.1 }}
                                >
                                  <CheckCircle className="h-5 w-5 text-secondary/70 flex-shrink-0 mt-0.5" />
                                  <span className="text-foreground/80">
                                    {item.text}
                                  </span>
                                </motion.li>
                              ))}
                          </ul>
                          {!isActive && feature.items.length > 1 && (
                            <motion.button
                              className="mt-2 text-primary flex items-center text-sm font-medium"
                              whileHover={{ x: 5 }}
                            >
                              See more <ChevronRight className="h-4 w-4 ml-1" />
                            </motion.button>
                          )}
                        </div>
                      </div>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-16 bg-gradient-to-b from-primary to-[#005BBD] rounded-r-full"
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            exit={{ opacity: 0, scaleY: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Feature visualization */}
            <motion.div className="order-1 lg:order-2" variants={cardVariants}>
              <div className="relative">
                <AnimatePresence mode="wait" custom={direction}>
                  {list.map(
                    (feature, index) =>
                      activeFeature === index && (
                        <motion.div
                          key={index}
                          custom={direction}
                          variants={carouselVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <div className="relative bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-primary/10 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-10 -translate-y-10"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full translate-x-6 translate-y-6"></div>
                            <div className="relative">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[#005BBD] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                                  {renderIcon(featureIcons[index], "h-5 w-5")}
                                </div>
                                <h3 className="text-2xl font-bold font-montserrat text-primary">
                                  {feature.title}
                                </h3>
                              </div>
                              <div className="space-y-6">
                                {feature.items.map((item, itemIndex) => (
                                  <motion.div
                                    key={itemIndex}
                                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: itemIndex * 0.1 }}
                                  >
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-[#005BBD]/20 flex items-center justify-center text-primary flex-shrink-0">
                                      {itemIndex + 1}
                                    </div>
                                    <div>
                                      <p className="font-medium">{item.text}</p>
                                      <p className="text-sm text-foreground/60 mt-1">
                                        {item.description}
                                      </p>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
                <div className="flex justify-center mt-6 gap-2">
                  {list.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeFeature === index
                          ? "w-8 bg-gradient-to-r from-primary to-[#005BBD]"
                          : "w-2 bg-gray-300"
                      }`}
                      onClick={() => {
                        setDirection(
                          index > activeFeature ? "forward" : "backward"
                        );
                        setActiveFeature(index);
                      }}
                      aria-label={`Go to feature ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
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
