import WaitlistForm from "@/components/waitlist-form";

export default function JoinWaitlistPage() {
  return (
    <div className="py-32 md:py-40">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-primary">
              Join the NordicPro Waitlist
            </h1>
            <p className="text-xl text-foreground/70">
              Be among the first to experience our platform when we launch. Fill
              out the form below to secure your spot.
            </p>
          </div>

          <WaitlistForm />

          <div className="mt-12 text-center">
            <p className="text-foreground/70">
              Have questions? Contact us at{" "}
              <a
                href="mailto:info@nordicpro.com"
                className="text-primary hover:underline"
              >
                info@nordicpro.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
