import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NordicPro - Where Performance Meets Well-being",
  description:
    "A platform for youth teams that puts mental health, motivation, and team management in one place.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased `}
      >
        <main className="flex-1">
          {children} <Toaster />
        </main>
      </body>
    </html>
  );
}
