"use client";

import type React from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";
import { sendPartnerEmail } from "@/lib/email-service";
import emailjs from "@emailjs/browser";
import { addCollaborator } from "@/lib/firebase";

export type FormStatus = "idle" | "loading" | "success" | "error";

export default function PartnerForm({
  status,
  setStatus,
}: {
  status: FormStatus;
  setStatus: (s: FormStatus) => void;
}) {
  const t = useTranslations("partnerForm");
  const [formData, setFormData] = useState({
    contactName: "",
    email: "",
    phone: "",
    organizationName: "",
    organizationType: "",
    website: "",
    teamCount: "",
    playerCount: "",
    partnershipGoals: [] as string[],
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_PARTNER_TEMPLATE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_PARTNER_TEMPLATE_ID;

  if (!EMAILJS_USER_ID || !EMAILJS_SERVICE_ID || !EMAILJS_PARTNER_TEMPLATE_ID) {
    throw new Error("Missing EmailJS configuration");
  }
  emailjs.init(EMAILJS_USER_ID);

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => {
      if (prev.partnershipGoals.includes(goal)) {
        return {
          ...prev,
          partnershipGoals: prev.partnershipGoals.filter((g) => g !== goal),
        };
      } else {
        return { ...prev, partnershipGoals: [...prev.partnershipGoals, goal] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      if (
        !formData.contactName ||
        !formData.email ||
        !formData.organizationName ||
        !formData.organizationType
      ) {
        throw new Error("Please fill out all required fields");
      }
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }
      const templateParams = {
        to_name: formData.contactName,
        to_email: formData.email,
        from_name: "NordicPro Team",
        phone: formData.phone,
        organization_name: formData.organizationName,
        organization_type: formData.organizationType,
        website: formData.website,
        team_count: formData.teamCount,
        player_count: formData.playerCount,
        partnership_goals: formData.partnershipGoals.join(", "),
        message: formData.message,
        reply_to: "support@nordicpro.com",
      };
      await emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_PARTNER_TEMPLATE_ID, templateParams)
        .then((_) => addCollaborator(formData));
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
        <h3 className="text-2xl font-bold mb-4">{t("success.title")}</h3>
        <p className="text-foreground/70 mb-6">{t("success.message1")}</p>
        <p className="text-foreground/70 mb-6">{t("success.message2")}</p>
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
          <p className="font-medium">
            {t("errors.errorPrefix")} {errorMessage}
          </p>
        </div>
      )}

      <div className="space-y-6">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">{t("sections.contactInfo")}</h4>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="contactName" className="text-foreground">
                {t("fields.contactName")}{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="contactName"
                placeholder={t("placeholders.contactName")}
                value={formData.contactName}
                onChange={(e) =>
                  setFormData({ ...formData, contactName: e.target.value })
                }
                required
                className="rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                {t("fields.email")} <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={t("placeholders.email")}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                {t("fields.phone")}
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder={t("placeholders.phone")}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">
            {t("sections.organizationDetails")}
          </h4>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="organizationName" className="text-foreground">
                {t("fields.organizationName")}{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="organizationName"
                placeholder={t("placeholders.organizationName")}
                value={formData.organizationName}
                onChange={(e) =>
                  setFormData({ ...formData, organizationName: e.target.value })
                }
                required
                className="rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organizationType" className="text-foreground">
                {t("fields.organizationType")}{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.organizationType}
                onValueChange={(value) =>
                  setFormData({ ...formData, organizationType: value })
                }
                required
              >
                <SelectTrigger id="organizationType" className="rounded-lg">
                  <SelectValue
                    placeholder={t("placeholders.organizationType")}
                  />
                </SelectTrigger>
                <SelectContent className="z-50 bg-white">
                  <SelectItem value="sports-club">
                    {t("organizationTypes.sportsClub")}
                  </SelectItem>
                  <SelectItem value="school">
                    {t("organizationTypes.school")}
                  </SelectItem>
                  <SelectItem value="youth-organization">
                    {t("organizationTypes.youthOrganization")}
                  </SelectItem>
                  <SelectItem value="sports-association">
                    {t("organizationTypes.sportsAssociation")}
                  </SelectItem>
                  <SelectItem value="community-center">
                    {t("organizationTypes.communityCenter")}
                  </SelectItem>
                  <SelectItem value="other">
                    {t("organizationTypes.other")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="text-foreground">
                {t("fields.website")}
              </Label>
              <Input
                id="website"
                type="url"
                placeholder={t("placeholders.website")}
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">
            {t("sections.partnershipGoals")}
          </h4>
          <p className="text-sm text-foreground/70">
            {t("partnershipGoalsDescription")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Improve player retention",
              "Support mental health",
              "Enhance team management",
              "Increase player engagement",
              "Reduce administrative work",
              "Access to analytics and insights",
              "Early platform access",
              "Custom features for our organization",
            ].map((goal) => (
              <div key={goal} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`goal-${goal}`}
                  checked={formData.partnershipGoals.includes(goal)}
                  onChange={() => handleGoalToggle(goal)}
                  className="rounded text-primary focus:ring-primary"
                />
                <Label htmlFor={`goal-${goal}`} className="cursor-pointer">
                  {t(`partnershipGoals.${goal.replace(/\s+/g, "")}`)}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground">
            {t("fields.additionalInfo")}
          </Label>
          <Textarea
            id="message"
            placeholder={t("placeholders.additionalInfo")}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="rounded-lg min-h-[120px]"
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
              {t("submitButton.loading")}
            </>
          ) : (
            t("submitButton.default")
          )}
        </Button>

        <p className="text-sm text-foreground/60 text-center">
          {t("agreement")}
        </p>
      </div>
    </form>
  );
}
