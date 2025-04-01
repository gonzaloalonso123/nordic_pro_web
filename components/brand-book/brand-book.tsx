"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ColorPalette from "./color-palette";
import Typography from "./typography";
import LogoGuidelines from "./logo-guidelines";
import UIComponents from "./ui-components";
import ImageryGuidelines from "./imagery-guidelines";
import VoiceTone from "./voice-tone";
import Link from "next/link";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "logo", title: "Logo & Identity" },
  { id: "colors", title: "Color Palette" },
  { id: "typography", title: "Typography" },
  { id: "ui", title: "UI Components" },
  { id: "imagery", title: "Imagery & Photography" },
  { id: "voice", title: "Voice & Tone" },
];

export default function BrandBook() {
  const [activeSection, setActiveSection] = useState("intro");
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const nextSection = () => {
    const currentIndex = sections.findIndex(
      (section) => section.id === activeSection
    );
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].id);
    }
  };

  const prevSection = () => {
    const currentIndex = sections.findIndex(
      (section) => section.id === activeSection
    );
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h1 className="text-3xl font-bold font-montserrat text-primary mb-2">
                  NordicPro
                </h1>
                <p className="text-lg text-foreground/70">Brand Book</p>
              </div>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? "bg-primary text-white font-medium"
                        : "hover:bg-primary/10 text-foreground/70"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
                <Link
                  href="/email-templates"
                  className="block w-full text-left px-4 py-2 rounded-lg transition-colors hover:bg-primary/10 text-foreground/70"
                >
                  Email Templates
                </Link>
              </nav>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeSection === "intro" && (
                    <div>
                      <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">
                        Introduction
                      </h2>

                      <div className="mb-8">
                        <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                        <p className="text-foreground/80 mb-4">
                          NordicPro is dedicated to transforming youth sports by
                          prioritizing mental health, motivation, and team
                          management in one seamless platform. We believe that
                          talent isn't the problem—feeling unsupported is. Our
                          mission is to create an environment where young
                          athletes can thrive both mentally and physically.
                        </p>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-bold mb-3">Brand Values</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <h4 className="font-bold text-primary">
                              Holistic Support
                            </h4>
                            <p className="text-sm text-foreground/70">
                              We consider the whole athlete, not just their
                              performance.
                            </p>
                          </div>
                          <div className="bg-accent/5 p-4 rounded-lg">
                            <h4 className="font-bold text-accent">
                              Engagement
                            </h4>
                            <p className="text-sm text-foreground/70">
                              We create motivating experiences that keep
                              athletes connected.
                            </p>
                          </div>
                          <div className="bg-green/5 p-4 rounded-lg">
                            <h4 className="font-bold text-green">Well-being</h4>
                            <p className="text-sm text-foreground/70">
                              Mental health is the foundation of sustainable
                              performance.
                            </p>
                          </div>
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <h4 className="font-bold text-primary">
                              Simplicity
                            </h4>
                            <p className="text-sm text-foreground/70">
                              We make complex team management intuitive and
                              accessible.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">
                          Brand Personality
                        </h3>
                        <p className="text-foreground/80 mb-4">
                          NordicPro's brand personality is supportive, modern,
                          and empowering. We communicate with clarity and
                          warmth, balancing professionalism with
                          approachability. Our visual identity reflects this
                          through clean design, vibrant yet calming colors, and
                          imagery that celebrates both individual achievement
                          and team connection.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeSection === "logo" && <LogoGuidelines />}

                  {activeSection === "colors" && (
                    <ColorPalette onCopy={handleCopy} copied={copied} />
                  )}

                  {activeSection === "typography" && (
                    <Typography onCopy={handleCopy} copied={copied} />
                  )}

                  {activeSection === "ui" && <UIComponents />}

                  {activeSection === "imagery" && <ImageryGuidelines />}

                  {activeSection === "voice" && <VoiceTone />}
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex justify-between mt-12 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={prevSection}
                  disabled={activeSection === sections[0].id}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <Button
                  onClick={nextSection}
                  disabled={activeSection === sections[sections.length - 1].id}
                  className="flex items-center gap-2 bg-primary"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
