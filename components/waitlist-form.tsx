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
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import { addWaiter } from "@/lib/firebase";
import { FormStatus } from "@/app/[locale]/join-waitlist/page";

const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? "";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_WAITLIST_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_WAITLIST_TEMPLATE_ID ?? "";

// Initialize EmailJS
emailjs.init(EMAILJS_USER_ID);

export default function WaitlistForm({
  status,
  setStatus,
}: {
  status: FormStatus;
  setStatus: (s: FormStatus) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    teamSize: "",
    interests: [] as string[],
    message: "",
  });

  const t = useTranslations("waitlistForm");
  const [errorMessage, setErrorMessage] = useState("");
  const teamSizeOptions = t.raw("teamSize.options") as {
    value: string;
    label: string;
  }[];

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
      if (!formData.name || !formData.email || !formData.role) {
        throw new Error(t("error.missingFields"));
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error(t("error.invalidEmail"));
      }

      // Prepare the template parameters
      const templateParams = {
        to_name: formData.name,
        to_email: formData.email,
        from_name: "NordicPro Team",
        role: formData.role,
        team_size: formData.teamSize || "Not specified",
        interests: formData.interests.join(", ") || "None specified",
        message: formData.message || "No additional information provided",
        reply_to: "support@nordicpro.com",
      };
      await emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_WAITLIST_TEMPLATE_ID, templateParams)
        .then((_) => addWaiter(formData));

      await sendWaitlistEmail(formData);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
      console.log(error);
      setErrorMessage(
        error instanceof Error ? error.message : t("errors.generic")
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
        <h3 className="text-2xl font-bold mb-4"> {t("confirmation.title")}</h3>
        <p className="text-foreground/70 mb-6">{t("confirmation.body")}</p>
        <Button
          className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-8 py-3"
          onClick={() => (window.location.href = "/")}
        >
          {t("success.returnButton")}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-6 text-primary">{t("title")}</h3>

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          <p className="font-medium">Error: {errorMessage}</p>
        </div>
      )}

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              {t("name.label")} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder={t("name.placeholder")}
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
              {t("email.label")} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder={t("email.placeholder")}
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
            {t("role.label")} <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={formData.role}
            onValueChange={(value) => setFormData({ ...formData, role: value })}
            className="flex flex-wrap gap-4"
            required
          >
            {t.raw("role.options").map((role: string) => (
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
            {t("teamSize.label")}
          </Label>
          <Select
            value={formData.teamSize}
            onValueChange={(value) =>
              setFormData({ ...formData, teamSize: value })
            }
          >
            <SelectTrigger id="teamSize" className="rounded-lg">
              <SelectValue placeholder={t("teamSize.placeholder")} />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {teamSizeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-foreground">{t("interests.label")}</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {t.raw("interests.options").map((interest: string) => (
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
            {t("message.label")}
          </Label>
          <Textarea
            id="message"
            placeholder={t("message.placeholder")}
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
              {t("submit.loading")}
            </>
          ) : (
            t("submit.button")
          )}
        </Button>

        <p className="text-sm text-foreground/60 text-center">
          {t("disclaimer")}
        </p>
      </div>
    </form>
  );
}
