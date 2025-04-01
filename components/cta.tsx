import { Button } from "@/components/ui/button";
import Link from "next/link";
import content from "@/data/content.json";

export default function CTA() {
  const { title, description, button } = content.cta;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-muted"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

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
