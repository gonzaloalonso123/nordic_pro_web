"use client";
import Image from "next/image";
import content from "@/data/content.json";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

export default function Mission() {
  const { title, subtitle, features } = content.mission;

  return (
    <section id="mission" className="py-10 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-muted"></div>
        <div className="absolute top-0 left-0 -translate-y-[200px] -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl"></div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                key={index}
                className="overflow-hidden rounded-3xl flex flex-col shadow-xl shadow-primary/10"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className={`text-2xl font-bold font-montserrat text-center mb-4 ${
                      index % 2 === 0 ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-lg text-foreground/70 text-center">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
