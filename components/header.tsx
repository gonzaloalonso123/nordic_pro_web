"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("header"); // Access 'header' section from translations
  const logo = t("logo");
  const cta = t("cta");
  const navigation = t.raw("navigation") as { label: string; href: string }[];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Handle smooth scrolling to sections
  const handleNavigation = (e: any, href: any) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Check if the user is on mobile or desktop
    const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
    const headerHeight = isMobile ? 50 : 0; // Set header height based on device type

    // If we're not on the home page and the link is to a section
    if (pathname !== "/" && href.startsWith("/#")) {
      // Navigate to home page first
      router.push("/");

      // Then scroll to the section after a small delay
      setTimeout(() => {
        const sectionId = href.split("#")[1];
        const section = document.getElementById(sectionId);

        if (section) {
          const yOffset = -headerHeight - 20; // Extra offset for better visibility
          const y =
            section.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }
      }, 300);
    }
    // If we're already on the home page and it's a section link
    else if (href.startsWith("#") || href.startsWith("/#")) {
      const sectionId = href.replace("/#", "").replace("#", "");
      const section = document.getElementById(sectionId);

      if (section) {
        const yOffset = -headerHeight;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }
    // Regular navigation
    else {
      router.push(href);
    }
  };

  // Animation variants for the header
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for the mobile menu
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { delay: 0.2, duration: 0.3 },
    },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 400,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.4,
      },
    }),
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 z-40 w-full backdrop-blur-md bg-white/80 shadow-sm "
      >
        <div className="container px-4 md:px-8 flex h-20 items-center justify-between">
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
            {navigation.map((item: any, index: any) => (
              <a
                key={index}
                href={item.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
                onClick={(e) => handleNavigation(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-10 py-3 text-lg"
            >
              <Link href="/join-waitlist">{cta}</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button - Always visible above the menu */}
          <Button
            className="md:hidden bg-accent hover:bg-accent/90 text-white rounded-full p-2 relative z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </motion.header>

      {/* Mobile Menu - Separate from header, covers entire viewport */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop - covers entire page */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 shadow-xl flex flex-col"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col h-full overflow-y-auto">
                <div className="p-6 border-b flex justify-between items-center">
                  <Image
                    src="/images/nordic-pro-logo.png"
                    alt="Logo"
                    width={150}
                    height={70}
                    priority
                  />
                  {/* Close button inside the menu panel */}
                  <Button
                    className="bg-accent hover:bg-accent/90 text-white rounded-full p-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <nav className="flex-1 flex flex-col p-6">
                  {navigation.map((item: any, index: any) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <a
                        href={item.href}
                        className="block py-4 text-xl text-center text-foreground/80 hover:text-primary font-medium transition-colors border-b border-gray-100"
                        onClick={(e) => handleNavigation(e, item.href)}
                      >
                        {item.label}
                      </a>
                    </motion.div>
                  ))}
                </nav>

                <div className="p-6 mt-auto">
                  <motion.div
                    variants={menuItemVariants}
                    custom={navigation.length}
                    initial="hidden"
                    animate="visible"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full py-6 text-lg w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/join-waitlist">{cta}</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
