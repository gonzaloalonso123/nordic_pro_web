import Link from "next/link";
import { Button } from "@/components/ui/button";
import content from "@/data/content.json";

export default function Header() {
  const { logo, navigation, cta } = content.header;

  return (
    <header className="fixed top-0 z-50 w-full glass">
      <div className="container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-montserrat font-bold text-2xl text-primary"
        >
          {logo}
        </Link>
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
            className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-10 py-7 text-lg"
          >
            <Link href="/join-waitlist">{cta}</Link>
          </Button>
        </nav>
        <Button className="md:hidden bg-accent text-white rounded-full aspect-square p-2">
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
      </div>
    </header>
  );
}
