import { Button } from "@/components/ui/button";
import Link from "next/link";
import content from "@/data/content.json";

export default function Partnership() {
  const { title, subtitle, cta } = content.partnership;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-accent opacity-90"></div>
      <div className="absolute inset-0 -z-10 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay"></div>

      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            {title}
          </h2>
          <p className="text-2xl mb-10 text-white/90">{subtitle}</p>
          <Button
            asChild
            size="lg"
            className="bg-white text-accent hover:bg-white/90 font-medium rounded-full px-10 py-7 text-lg"
          >
            <Link href="/become-partner">{cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
