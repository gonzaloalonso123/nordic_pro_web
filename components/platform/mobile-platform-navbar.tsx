"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Heart, Home, Trophy, Users } from "lucide-react";

export default function MobilePlatformNavbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/platform", icon: Home },
    { name: "Team", href: "/platform/team", icon: Users },
    { name: "Wellness", href: "/platform/mental-health", icon: Heart },
    { name: "Motivation", href: "/platform/motivation", icon: Trophy },
    { name: "Calendar", href: "/platform/calendar", icon: Calendar },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
      <nav className="flex justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center py-2 px-3 ${
                isActive ? "text-primary" : "text-gray-500"
              }`}
            >
              <div
                className={`p-1 rounded-full ${
                  isActive ? "bg-primary/10" : ""
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
