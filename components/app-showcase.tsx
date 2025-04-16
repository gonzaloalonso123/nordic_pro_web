"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CheckCircle, ChevronLeft, ChevronRight, Stars } from "lucide-react";
import Image from "next/image";
import { useMobile } from "@/hooks/use-mobile";
import { useTranslations } from "next-intl";

export default function AppShowcase() {
  const t = useTranslations("appShowcase"); // Access 'appShowcase' section
  const title = t("title");
  const subtitle = t("subtitle");
  const label = t("label");
  const screens = t.raw("screens") as {
    title: string;
    description: string;
    image: string;
  }[];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Define background colors for each screen
  const backgroundColors = [
    "from-purple-50 to-purple-100",
    "from-blue-50 to-blue-100",
    "from-green-50 to-green-100",
    "from-amber-50 to-amber-100",
  ];
  const popoutText = t.raw("popouts") as string[][];

  // Define pop-out elements for each screen
  const popoutElements = [
    [
      {
        type: "event",
        content: popoutText[0][0],
        position: { top: "10%", right: "-20%" },
        rotation: "5deg",
      },
      {
        type: "notification",
        content: popoutText[0][1],
        position: { bottom: "12%", left: "-20%" },
        rotation: "-3deg",
      },
    ],
    [
      {
        type: "badge",
        content: popoutText[1][0],
        position: { top: "15%", left: "-15%" },
        rotation: "-5deg",
      },
      {
        type: "progress",
        content: popoutText[1][1],
        position: { bottom: "10%", right: "0%" },
        rotation: "3deg",
      },
    ],
    [
      {
        type: "mood",
        content: popoutText[2][0],
        position: { top: "10%", right: "-20%" },
        rotation: "4deg",
      },
      {
        type: "insight",
        content: popoutText[2][1],
        position: { bottom: "15%", left: "-15%" },
        rotation: "-4deg",
      },
    ],
    [
      {
        type: "message",
        content: popoutText[3][0],
        position: { top: "15%", left: "-20%" },
        rotation: "-3deg",
      },
      {
        type: "stats",
        content: popoutText[3][1],
        position: { bottom: "10%", right: "-15%" },
        rotation: "5deg",
      },
    ],
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }

    if (touchEnd - touchStart > 75) {
      handlePrev();
    }
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const activeScreen = screens[activeIndex];
  const activeColor = backgroundColors[activeIndex];
  const activePopouts = popoutElements[activeIndex];

  return (
    <section
      id="app-showcase"
      className="py-10 lg:py-24 relative overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center space-x-2 justify-center mb-4 px-5 py-2 bg-primary/10 rounded-full w-fit mx-auto">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Stars className="text-primary h-5 w-5" />
            </motion.div>{" "}
            <span className="text-sm font-bold text-primary">{label}</span>
          </div>
          <h2 className="drop-shadow-sm text-4xl md:text-5xl font-bold font-montserrat mb-6 text-primary">
            {title}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative max-w-5xl mx-auto perspective-1000"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main screen display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -50 }}
                transition={{ duration: 0.4 }}
                className={`relative bg-gradient-to-b ${activeColor} rounded-3xl p-6 md:p-10 shadow-xl`}
              >
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="w-full md:w-1/2 order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      {activeScreen.title}
                    </h3>
                    <p className="text-lg text-foreground/70 mb-6">
                      {activeScreen.description}
                    </p>
                  </div>

                  <div className="w-full md:w-1/2 order-1 md:order-2 relative">
                    {/* Phone mockup with screen */}
                    <div className="h-[300px] md:h-[400px] w-full overflow-hidden rounded-[30px]">
                      {/* Display the image from the JSON data */}
                      <Image
                        src={
                          activeScreen.image ||
                          "/placeholder.svg?height=580&width=280"
                        }
                        alt={activeScreen.title}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>

                    {/* 3D pop-out elements */}
                    {!isMobile &&
                      activePopouts.map((element, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.5, z: -20 }}
                          animate={{ opacity: 1, scale: 1, z: 30 }}
                          transition={{
                            delay: 0.3 + index * 0.2,
                            duration: 0.5,
                          }}
                          className="absolute glass rounded-xl p-3 shadow-lg z-10 transform backdrop-blur-sm bg-white/80 border border-white/20"
                          style={{
                            ...element.position,
                            transform: `rotate(${element.rotation}) translateZ(40px)`,
                          }}
                        >
                          <div className="flex items-center gap-2">
                            {element.type === "notification" && (
                              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                                </svg>
                              </div>
                            )}
                            {element.type === "event" && (
                              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <rect
                                    width="18"
                                    height="18"
                                    x="3"
                                    y="4"
                                    rx="2"
                                    ry="2"
                                  ></rect>
                                  <line x1="16" x2="16" y1="2" y2="6"></line>
                                  <line x1="8" x2="8" y1="2" y2="6"></line>
                                  <line x1="3" x2="21" y1="10" y2="10"></line>
                                </svg>
                              </div>
                            )}
                            {element.type === "badge" && (
                              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="12" cy="8" r="7"></circle>
                                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                </svg>
                              </div>
                            )}
                            {element.type === "progress" && (
                              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M20 20V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v16"></path>
                                  <path d="M2 6h18"></path>
                                  <path d="M2 12h18"></path>
                                  <path d="M2 18h18"></path>
                                  <path d="M2 20h18"></path>
                                </svg>
                              </div>
                            )}
                            {element.type === "mood" && (
                              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                  <line x1="9" x2="9.01" y1="9" y2="9"></line>
                                  <line x1="15" x2="15.01" y1="9" y2="9"></line>
                                </svg>
                              </div>
                            )}
                            {element.type === "insight" && (
                              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                              </div>
                            )}
                            {element.type === "message" && (
                              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                              </div>
                            )}
                            {element.type === "stats" && (
                              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M3 3v18h18"></path>
                                  <path d="m19 9-5 5-4-4-3 3"></path>
                                </svg>
                              </div>
                            )}
                            <span className="text-sm font-medium">
                              {element.content}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10 hover:bg-primary/5 transition-colors border border-gray-100"
              aria-label="Previous screen"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>

            <div className="flex gap-2 items-center">
              {screens.map((_: any, index: any) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-gradient-to-r from-primary to-[#005BBD]"
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`View ${screens[index].title}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10 hover:bg-primary/5 transition-colors border border-gray-100"
              aria-label="Next screen"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
