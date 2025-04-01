import { CheckCircle } from "lucide-react"
import content from "@/data/content.json"
import { Card } from "./ui/card"

export default function Features() {
  const { title, subtitle, list } = content.features

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-muted/30 max-w-6xl mx-auto">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-primary">{title}</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {list.map((feature, index) => (
            <Card key={index} className="relative p-10 hover:shadow-xl transition-all hover:-translate-y-1"> 
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {index === 0 && (
                      <>
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        <></>
                        <path d="M8 9h8"></path>
                        <path d="M8 13h6"></path>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <path d="M12 2v4"></path>
                        <path d="M12 18v4"></path>
                        <path d="m4.93 4.93 2.83 2.83"></path>
                        <path d="m16.24 16.24 2.83 2.83"></path>
                        <path d="M2 12h4"></path>
                        <path d="M18 12h4"></path>
                        <path d="m4.93 19.07 2.83-2.83"></path>
                        <path d="m16.24 7.76 2.83-2.83"></path>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13z"></path>
                        <circle cx="12" cy="8" r="2"></circle>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                        <line x1="3" x2="21" y1="9" y2="9"></line>
                        <line x1="9" x2="9" y1="21" y2="9"></line>
                      </>
                    )}
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-montserrat text-primary">{feature.title}</h3>
              </div>

              <ul className="space-y-4 pl-4">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

