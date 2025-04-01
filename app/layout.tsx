import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import PlatformLayoutClient from "./PlatformLayoutClient.tsx";

export const metadata: Metadata = {
  title: "NordicPro Platform",
  description: "Mental health, motivation, and team management in one place.",
};

export default function PlatformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PlatformLayoutClient>{children}</PlatformLayoutClient>;
}
