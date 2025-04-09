import ContactForm from "@/components/contact-form";
import { MapPin, Mail, Phone, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary">
          <span className="text-sm font-medium">Get in Touch</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about NordicPro? We're here to help. Reach out to our
          team and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl font-bold font-montserrat mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a
                    href="mailto:hello@nordicpro.io"
                    className="text-gray-800 font-medium hover:text-primary transition-colors"
                  >
                    hello@nordicpro.io
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <a
                    href="tel:+4712345678"
                    className="text-gray-800 font-medium hover:text-primary transition-colors"
                  >
                    +47 123 456 78
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Office</p>
                  <p className="text-gray-800 font-medium">
                    Innovasjonssenter Oslo
                    <br />
                    Nydalsveien 28
                    <br />
                    0484 Oslo, Norway
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Office Hours</p>
                  <p className="text-gray-800 font-medium">
                    Monday - Friday
                    <br />
                    9:00 AM - 5:00 PM CET
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-md p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
            <p className="mb-6">
              Stay updated with the latest news, features, and community events.
            </p>
            <Link
              href="/join-waitlist"
              className="inline-flex items-center group text-white font-medium"
            >
              Join our waitlist
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl font-bold font-montserrat mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
        <div className="aspect-video w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.9769670419195!2d10.7661!3d59.9436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDU2JzM3LjAiTiAxMMKwNDUnNTguMCJF!5e0!3m2!1sen!2sno!4v1617289157271!5m2!1sen!2sno"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="NordicPro Office Location"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* FAQ Link */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-4">Have more questions?</p>
        <Link
          href="/faq"
          className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 group"
        >
          Visit our FAQ page
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
