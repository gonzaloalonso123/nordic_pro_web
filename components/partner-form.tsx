"use client";

import type React from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { addCollaborator } from "@/lib/firebase";

type FormStatus = "idle" | "loading" | "success" | "error";

const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? "";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_WAITLIST_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_PARTNER_TEMPLATE_ID ?? "";

emailjs.init(EMAILJS_USER_ID);

export default function PartnerForm() {
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

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
      if (!formData.contactName || !formData.email || !formData.organizationName || !formData.organizationType) {
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

      emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_WAITLIST_TEMPLATE_ID, templateParams)
        .then((_) => addCollaborator(formData));
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : t("errors.generic")
      );
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
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
        <h3 className="text-2xl font-bold mb-4">Partnership Request Received!</h3>
        <p className="text-foreground/70 mb-6">
          Thank you for your interest in partnering with NordicPro. We've received your information and a member of our
          team will be in touch within 2 business days to discuss next steps.
        </p>
        <p className="text-foreground/70 mb-6">
          We're excited about the possibility of working together to support youth athletes and teams.
        </p>
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
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-primary">Partner Application</h3>

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
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
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
                onValueChange={(value) => setFormData({ ...formData, organizationType: value })}
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
                <SelectContent className="bg-white">
                  <SelectItem value="sports-club">Sports Club</SelectItem>
                  <SelectItem value="school">School</SelectItem>
                  <SelectItem value="youth-organization">Youth Organization</SelectItem>
                  <SelectItem value="sports-association">Sports Association</SelectItem>
                  <SelectItem value="community-center">Community Center</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
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
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">
            {t("sections.partnershipGoals")}
          </h4>
          <h4 className="text-lg font-semibold">Team Information</h4>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="teamCount" className="text-foreground">
                Number of Teams
              </Label>
              <Select
                value={formData.teamCount}
                onValueChange={(value) => setFormData({ ...formData, teamCount: value })}
              >
                <SelectTrigger id="teamCount" className="rounded-lg">
                  <SelectValue placeholder="Select number of teams" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="1-5">1-5 teams</SelectItem>
                  <SelectItem value="6-10">6-10 teams</SelectItem>
                  <SelectItem value="11-20">11-20 teams</SelectItem>
                  <SelectItem value="21-50">21-50 teams</SelectItem>
                  <SelectItem value="50+">50+ teams</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="playerCount" className="text-foreground">
                Total Number of Players
              </Label>
              <Select
                value={formData.playerCount}
                onValueChange={(value) => setFormData({ ...formData, playerCount: value })}
              >
                <SelectTrigger id="playerCount" className="rounded-lg">
                  <SelectValue placeholder="Select number of players" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="1-50">1-50 players</SelectItem>
                  <SelectItem value="51-100">51-100 players</SelectItem>
                  <SelectItem value="101-250">101-250 players</SelectItem>
                  <SelectItem value="251-500">251-500 players</SelectItem>
                  <SelectItem value="500+">500+ players</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Partnership Goals</h4>
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
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
          By submitting this form, you agree to be contacted by the NordicPro team regarding partnership opportunities.
        </p>
      </div>
    </form>
  );
}
