import { Button } from "@/components/ui/button";
import Link from "next/link";
import content from "@/data/content.json";

export default function CTA() {
  const { title, description, button } = content.cta;

  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-primary">
            {title}
          </h2>
          <p className="text-xl mb-10 text-foreground/70 max-w-2xl mx-auto">
            {description}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-10 py-7 text-lg"
          >
            <Link href="/join-waitlist">{button}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
