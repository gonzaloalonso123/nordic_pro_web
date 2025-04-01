import Link from "next/link"
import content from "@/data/content.json"

export default function Footer() {
  const { copyright, links } = content.footer

  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-muted/30"></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-montserrat font-bold text-2xl text-primary mb-4 inline-block">
              NordicPro
            </Link>
            <p className="text-sm text-foreground/60">{copyright}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex gap-6">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex gap-4">
              {/* Social icons */}
              {["twitter", "facebook", "instagram"].map((social, index) => (
                <Link
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social === "twitter" && (
                      <>
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </>
                    )}
                    {social === "facebook" && (
                      <>
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </>
                    )}
                    {social === "instagram" && (
                      <>
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </>
                    )}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

