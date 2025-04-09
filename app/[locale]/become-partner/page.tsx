import PartnerForm from "@/components/partner-form";
import { CheckCircle } from "lucide-react";

export default function BecomePartnerPage() {
  return (
    <div className="py-32 md:py-40">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-primary">
              Partner with NordicPro
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Join us in transforming youth sports by prioritizing mental
              health, motivation, and team management.
            </p>
          </div>

          <div className="mb-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Why Partner With Us?
              </h2>
              <ul className="space-y-4">
                {[
                  "Early access to innovative platform features",
                  "Custom solutions tailored to your organization",
                  "Dedicated support and onboarding",
                  "Contribute to platform development",
                  "Special pricing for early partners",
                  "Co-marketing opportunities",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-accent">
                Partner Types
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Sports Clubs & Teams
                  </h3>
                  <p className="text-foreground/70">
                    Implement NordicPro across your organization to support
                    player well-being and streamline operations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Sports Associations
                  </h3>
                  <p className="text-foreground/70">
                    Offer NordicPro as a value-added service to your member
                    clubs and teams.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Educational Institutions
                  </h3>
                  <p className="text-foreground/70">
                    Support student-athletes with tools designed for their
                    unique challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <PartnerForm />

          <div className="mt-12 text-center">
            <p className="text-foreground/70">
              Have questions about partnerships? Contact our partnerships team
              at{" "}
              <a
                href="mailto:partnerships@nordicpro.com"
                className="text-primary hover:underline"
              >
                partnerships@nordicpro.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
