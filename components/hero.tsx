import { Button } from "@/components/ui/button";
import Image from "next/image";
import content from "@/data/content.json";
import CTA from "./cta";
import Link from "next/link";

export default function Hero() {
  const { title, description, cta } = content.hero;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-8 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat tracking-tight leading-tight ">
                Where{" "}
                <span className="bg-gradient-to-t from-[#005BBD] to-primary bg-clip-text text-transparent">
                  performance
                </span>{" "}
                meets{" "}
                <span className="bg-gradient-to-t from-[#005BBD] to-primary bg-clip-text text-transparent">
                  well-being
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70">
                {description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-12 py-7 text-lg"
              >
                <Link href="/join-waitlist">{cta}</Link>
              </Button>
            </div>
          </div>

          <div className="relative lg:ml-auto w-full">
            <div className="relative h-[500px] w-full lg:h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/images/hero-image.webp"
                alt="Young soccer player kicking a ball"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>

            <div className="absolute -top-6 -left-6 glass rounded-2xl p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="font-medium">Mental Health</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span className="font-medium">Team Management</span>
              </div>
            </div>
            <div className="absolute bottom-8 -left-20 glass rounded-2xl p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <span className="font-medium">Athlete retention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
