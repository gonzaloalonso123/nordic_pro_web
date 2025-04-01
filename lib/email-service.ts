"use server";

import emailjs from "@emailjs/browser";

// Initialize EmailJS with your user ID
// In a real app, this would be in an environment variable
const EMAILJS_USER_ID = "your_emailjs_user_id";
const EMAILJS_SERVICE_ID = "your_emailjs_service_id";
const EMAILJS_WAITLIST_TEMPLATE_ID = "your_emailjs_waitlist_template_id";
const EMAILJS_PARTNER_TEMPLATE_ID = "your_emailjs_partner_template_id";

// Initialize EmailJS
emailjs.init(EMAILJS_USER_ID);

type WaitlistFormData = {
  name: string;
  email: string;
  role: string;
  teamSize: string;
  interests: string[];
  message: string;
};

type PartnerFormData = {
  contactName: string;
  email: string;
  phone: string;
  organizationName: string;
  organizationType: string;
  website: string;
  teamCount: string;
  playerCount: string;
  partnershipGoals: string[];
  message: string;
};

export async function sendWaitlistEmail(formData: WaitlistFormData) {
  try {
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

    // Send the confirmation email to the user
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_WAITLIST_TEMPLATE_ID,
      templateParams
    );

    // In a real app, you would also want to store this information in a database
    // and potentially send a notification to your team

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email. Please try again later.");
  }
}

export async function sendPartnerEmail(formData: PartnerFormData) {
  try {
    // Prepare the template parameters
    const templateParams = {
      to_name: formData.contactName,
      to_email: formData.email,
      from_name: "NordicPro Partnerships Team",
      organization_name: formData.organizationName,
      organization_type: formData.organizationType,
      website: formData.website || "Not provided",
      phone: formData.phone || "Not provided",
      team_count: formData.teamCount || "Not specified",
      player_count: formData.playerCount || "Not specified",
      partnership_goals:
        formData.partnershipGoals.join(", ") || "None specified",
      message: formData.message || "No additional information provided",
      reply_to: "partnerships@nordicpro.com",
    };

    // Send the confirmation email to the user
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_PARTNER_TEMPLATE_ID,
      templateParams
    );

    // In a real app, you would also want to store this information in a database
    // and send a notification to your partnerships team

    return { success: true };
  } catch (error) {
    console.error("Error sending partner email:", error);
    throw new Error("Failed to send email. Please try again later.");
  }
}
