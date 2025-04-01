"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";
import { sendWaitlistEmail } from "@/lib/email-service";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    teamSize: "",
    interests: [] as string[],
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => {
      if (prev.interests.includes(interest)) {
        return {
          ...prev,
          interests: prev.interests.filter((i) => i !== interest),
        };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Basic validation
      if (!formData.name || !formData.email || !formData.role) {
        throw new Error("Please fill out all required fields");
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      // Send email using EmailJS
      await sendWaitlistEmail(formData);

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4">You're on the list!</h3>
        <p className="text-foreground/70 mb-6">
          Thank you for joining our waitlist. We've sent a confirmation to your
          email. We'll keep you updated on our launch and may reach out for
          early access opportunities.
        </p>
        <div className="space-y-4">
          <p className="font-medium">Share NordicPro with others:</p>
          <div className="flex justify-center gap-4">
            {["twitter", "facebook", "linkedin"].map((platform) => (
              <Button
                key={platform}
                variant="outline"
                className="rounded-full h-12 w-12 p-0"
                onClick={() => {
                  // Share URLs would be implemented here
                  window.open(
                    `https://${platform}.com/share?url=${encodeURIComponent(
                      window.location.href
                    )}`,
                    "_blank"
                  );
                }}
              >
                <span className="sr-only">Share on {platform}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {platform === "twitter" && (
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  )}
                  {platform === "facebook" && (
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  )}
                  {platform === "linkedin" && (
                    <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </>
                  )}
                </svg>
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-6 text-primary">
        Join the Waitlist
      </h3>

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          <p className="font-medium">Error: {errorMessage}</p>
        </div>
      )}

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-foreground">
            Your Role <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={formData.role}
            onValueChange={(value) => setFormData({ ...formData, role: value })}
            className="flex flex-wrap gap-4"
            required
          >
            {["Coach", "Club Administrator"].map((role) => (
              <div key={role} className="flex items-center space-x-2">
                <RadioGroupItem value={role} id={`role-${role}`} />
                <Label htmlFor={`role-${role}`} className="cursor-pointer">
                  {role}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="teamSize" className="text-foreground">
            Team Size
          </Label>
          <Select
            value={formData.teamSize}
            onValueChange={(value) =>
              setFormData({ ...formData, teamSize: value })
            }
          >
            <SelectTrigger id="teamSize" className="rounded-lg">
              <SelectValue placeholder="Select team size" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="1-10">1-10 players</SelectItem>
              <SelectItem value="11-20">11-20 players</SelectItem>
              <SelectItem value="21-50">21-50 players</SelectItem>
              <SelectItem value="51-100">51-100 players</SelectItem>
              <SelectItem value="100+">100+ players</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-foreground">
            What interests you most about NordicPro?
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Mental Health Support",
              "Team Management",
              "Player Motivation",
              "Communication Tools",
              "Performance Analytics",
              "Early Access",
            ].map((interest) => (
              <div key={interest} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`interest-${interest}`}
                  checked={formData.interests.includes(interest)}
                  onChange={() => handleInterestToggle(interest)}
                  className="rounded text-primary focus:ring-primary"
                />
                <Label
                  htmlFor={`interest-${interest}`}
                  className="cursor-pointer"
                >
                  {interest}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground">
            Additional Information
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us more about your team and what you're looking for..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="rounded-lg min-h-[100px]"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-accent hover:bg-accent/90 text-white font-medium rounded-full py-6 text-lg"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Join Waitlist"
          )}
        </Button>

        <p className="text-sm text-foreground/60 text-center">
          By joining, you agree to receive updates about NordicPro. We respect
          your privacy and will never share your information.
        </p>
      </div>
    </form>
  );
}
