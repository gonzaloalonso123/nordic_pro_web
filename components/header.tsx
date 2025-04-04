"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import content from "@/data/content.json";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { logo, navigation, cta } = content.header;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation variants for the entire header
  const headerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: "0%", transition: { duration: 0.5 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="fixed top-0 z-50 w-full glass"
      >
        <div className="container flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-montserrat font-bold text-2xl text-primary"
          >
            <Image
              src="/images/nordic-pro-logo.png"
              alt="Logo"
              width={190}
              height={90}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-10 py-3 text-lg"
            >
              <Link href="/join-waitlist">{cta}</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden bg-accent text-white rounded-full p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-end"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div className="w-2/3 bg-white h-full flex flex-col py-8 px-6 shadow-lg">
                  <div className="flex justify-between items-center mb-8">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <Image
                        src="/images/nordic-pro-logo.png"
                        alt="Logo"
                        width={150}
                        height={70}
                        priority
                      />
                    </Link>
                    <Button
                      className="bg-accent text-white rounded-full p-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" x2="6" y1="6" y2="18" />
                        <line x1="6" x2="18" y1="6" y2="18" />
                      </svg>
                    </Button>
                  </div>

                  <nav className="flex flex-col gap-4">
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="text-xl text-foreground/80 hover:text-primary font-medium transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Button
                      asChild
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-10 py-3 text-lg mt-6"
                    >
                      <Link href="/join-waitlist">{cta}</Link>
                    </Button>
                  </nav>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
