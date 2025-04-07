"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Stars } from "lucide-react";

// Import app screen components
import CalendarScreen from "./app-screens/calendar-screen";
import MotivationScreen from "./app-screens/motivation-screen";
import MentalHealthScreen from "./app-screens/mental-health-screen";
import TeamManagementScreen from "./app-screens/team-management-screen";

const appScreens = [
  {
    title: "Team Calendar",
    description:
      "Schedule practices, games, and events with an intuitive team calendar.",
    component: CalendarScreen,
    color: "from-primary/20 to-primary/5",
    popoutElements: [
      {
        type: "notification",
        content: "Practice today at 4 PM",
        position: { top: "15%", right: "-5%" },
        rotation: "3deg",
      },
      {
        type: "event",
        content: "Game vs. Eagles",
        position: { bottom: "20%", left: "-8%" },
        rotation: "-5deg",
      },
    ],
  },
  {
    title: "Player Motivation",
    description:
      "Gamified challenges and rewards to keep players engaged and motivated.",
    component: MotivationScreen,
    color: "from-accent/20 to-accent/5",
    popoutElements: [
      {
        type: "badge",
        content: "Team Spirit Award",
        position: { top: "10%", right: "-10%" },
        rotation: "5deg",
      },
      {
        type: "progress",
        content: "85% to next level",
        position: { bottom: "15%", left: "-12%" },
        rotation: "-3deg",
      },
    ],
  },
  {
    title: "Mental Health Check-in",
    description:
      "Quick mood tracking and wellness tools to support player well-being.",
    component: MentalHealthScreen,
    color: "from-green/20 to-green/5",
    popoutElements: [
      {
        type: "mood",
        content: "Feeling great today!",
        position: { top: "12%", left: "-10%" },
        rotation: "-4deg",
      },
      {
        type: "insight",
        content: "Rest is improving your performance",
        position: { bottom: "18%", right: "-8%" },
        rotation: "3deg",
      },
    ],
  },
  {
    title: "Team Management",
    description:
      "Streamlined tools for coaches to manage rosters, attendance, and communication.",
    component: TeamManagementScreen,
    color: "from-primary/20 to-primary/5",
    popoutElements: [
      {
        type: "message",
        content: "Coach: Great practice everyone!",
        position: { top: "15%", left: "-12%" },
        rotation: "-3deg",
      },
      {
        type: "stats",
        content: "92% attendance this month",
        position: { bottom: "20%", right: "-10%" },
        rotation: "4deg",
      },
    ],
  },
];

export default function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? appScreens.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === appScreens.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const activeScreen = appScreens[activeIndex];
  const ScreenComponent = activeScreen.component;

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
            <span className="text-sm font-bold text-primary">Platform</span>
          </div>
          <h2 className="drop-shadow-sm text-4xl md:text-5xl font-bold font-montserrat mb-6 text-primary">
            Experience NordicPro
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Get a glimpse of our innovative platform designed to transform youth
            sports teams.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative max-w-5xl mx-auto perspective-1000"
        >
          {/* Main screen display */}
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`relative bg-gradient-to-b ${activeScreen.color} rounded-3xl p-6 md:p-10 shadow-xl`}
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {activeScreen.title}
                  </h3>
                  <p className="text-lg text-foreground/70 mb-6">
                    {activeScreen.description}
                  </p>

                  <div className="flex gap-2">
                    {appScreens.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === activeIndex ? "bg-primary" : "bg-primary/30"
                        }`}
                        aria-label={`View ${appScreens[index].title}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-1/2 order-1 md:order-2 relative">
                  {/* Phone mockup with screen */}
                  <div className="relative mx-auto w-[280px] h-[580px] rounded-[40px] border-[14px] border-foreground/80 shadow-lg overflow-hidden bg-white transform rotate-y-5 rotate-z-2 perspective-1000">
                    <div className="absolute top-0 w-[120px] h-[30px] left-1/2 -translate-x-1/2 bg-foreground/80 rounded-b-[14px]"></div>
                    <div className="h-full w-full overflow-hidden rounded-[30px]">
                      <ScreenComponent />
                    </div>
                  </div>

                  {/* 3D pop-out elements */}
                  {!isMobile &&
                    activeScreen.popoutElements.map((element, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5, z: -20 }}
                        animate={{ opacity: 1, scale: 1, z: 30 }}
                        transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                        className="absolute glass rounded-xl p-3 shadow-lg z-10 transform"
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
                            <div className="w-8 h-8 rounded-full bg-green flex items-center justify-center text-white">
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
                            <div className="w-8 h-8 rounded-full bg-green flex items-center justify-center text-white">
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
                            <div className="w-8 h-8 rounded-full bg-green flex items-center justify-center text-white">
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
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10 hover:bg-primary/5 transition-colors"
            aria-label="Previous screen"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10 hover:bg-primary/5 transition-colors"
            aria-label="Next screen"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
