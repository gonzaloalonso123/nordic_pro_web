import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "../globals.css"
import PlatformHeader from "@/components/platform/platform-header"
import PlatformSidebar from "@/components/platform/platform-sidebar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "NordicPro Platform",
  description: "Mental health, motivation, and team management in one place.",
}

export default function PlatformLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
          <PlatformHeader />
          <div className="flex flex-1">
            <PlatformSidebar />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

