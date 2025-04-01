import Image from "next/image";
import content from "@/data/content.json";
import { Card } from "./ui/card";

export default function Mission() {
  const { title, subtitle, features } = content.mission;

  return (
    <section id="mission" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-muted"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-primary">
            {title}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                <div
                  className={index % 2 === 0 ? "order-1" : "order-1 md:order-2"}
                >
                  <Card className="relative h-[300px] md:h-[380px] rounded-3xl overflow-hidden bg-white">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </Card>
                </div>
                <div
                  className={index % 2 === 0 ? "order-2" : "order-2 md:order-1"}
                >
                  <h3
                    className={`text-2xl font-bold font-montserrat text-center xl:text-left mb-4 ${
                      index % 2 === 0 ? "text-primary" : "text-accent"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-lg text-foreground/70 text-center xl:text-left">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
