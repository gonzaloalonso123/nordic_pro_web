import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "sv"],

  // Used when no locale matches
  defaultLocale: "sv",
});
