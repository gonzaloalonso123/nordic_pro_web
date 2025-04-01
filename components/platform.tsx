import Image from "next/image";
import content from "@/data/content.json";

export default function Platform() {
  const { title, description, stats } = content.platform;

  return (
    <section className="py-10 lg:py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="relative py-6">
              <div className="absolute -inset-4 rounded-3xl -z-10"></div>
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden">
                <Image
                  src="/images/girl-football.webp"
                  alt="Platform visualization"
                  fill
                  className="object-cover"
                />
              </div>

              {stats.slice(0, 2).map((stat, index) => (
                <div
                  key={index}
                  className="absolute glass rounded-2xl p-4"
                  style={{
                    top: index === 0 ? "-10%" : "auto",
                    right: index === 0 ? "10%" : "auto",
                    bottom: index === 1 ? "-10%" : "auto",
                    left: index === 1 ? "10%" : "auto",
                  }}
                >
                  <div className="font-bold text-primary text-2xl">
                    {stat.value}
                  </div>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary">
              {title}
            </h2>

            <div className="space-y-4">
              {description.map((paragraph, index) => (
                <p key={index} className="text-lg text-foreground/70">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.slice(2, 4).map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-6">
                  <div className="font-bold text-primary text-3xl mb-2">
                    {stat.value}
                  </div>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
