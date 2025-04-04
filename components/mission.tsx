"use client";
import Image from "next/image";
import content from "@/data/content.json";
import { motion, AnimatePresence, useInView } from "framer-motion";
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

export default function Mission() {
  const { title, subtitle, features } = content.mission;
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  // Handle navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  // Auto-advance slides with pause on hover
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides
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

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
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

  return (
    <section
      id="mission"
      className="py-10 lg:py-24 relative overflow-hidden"
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background elements with improved animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>

      <div className="container px-4 md:px-6 mx-auto">
        {/* Section header - centered with improved responsive typography */}
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
                OUR MISSION
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat pb-6 bg-gradient-to-t from-[#005BBD] to-primary bg-clip-text text-transparent leading-tight"
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

        {/* Main carousel - centered */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          {/* Text navigation tabs - centered above carousel with improved responsive design */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 px-2 sticky top-4 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((feature, index) => (
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

          {/* Carousel container with progress indicator - SMALLER SIZE */}
          <motion.div
            className="relative overflow-hidden rounded-3xl shadow-xl shadow-primary/10 max-w-4xl mx-auto"
            variants={scaleIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Main carousel */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[16/9] w-full relative">
                    <Image
                      src={features[currentIndex].image || "/placeholder.svg"}
                      alt={features[currentIndex].title}
                      fill
                      className="object-contain object-center"
                      priority
                    />

                    {/* Enhanced overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                    <div className="max-w-3xl mx-auto text-center">
                      <span className="inline-block px-3 py-1 bg-primary/20 text-white text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
                        Mission {currentIndex + 1}/{features.length}
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
                          {features[currentIndex].title}
                        </h3>
                        <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                          {features[currentIndex].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Pagination indicators - centered with improved animation */}
          <div className="flex justify-center items-center mt-6 gap-3">
            <button
              onClick={prevSlide}
              className="  w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10 hover:bg-white/50 transition-colors"
              aria-label="Previous screen"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>

            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-gradient-to-r from-primary to-[#005BBD]"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
            <button
              onClick={nextSlide}
              className="   w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10 hover:bg-white/50 transition-colors"
              aria-label="Next screen"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>

        {/* Statistics section - enhanced with better responsive design and animations */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {[
            {
              icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
              value: "10+",
              label: "Years Experience",
              color: "from-primary/20 to-primary/5",
            },
            {
              icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
              value: "3+",
              label: "Pilot teams",
              color: "from-primary/20 to-primary/5",
            },
            {
              icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
              value: "5+",
              label: "Team Members",
              color: "from-primary/20 to-primary/5",
            },
            {
              icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
              value: "100%",
              label: "Client Satisfaction",
              color: "from-primary/20 to-primary/5",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br border border-primary/10 h-full flex flex-col items-center text-center relative z-10">
                <div
                  className={`text-primary w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-t from-[#005BBD] to-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-foreground/70">
                  {stat.label}
                </div>
              </div>

              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced animated background gradient */}
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
