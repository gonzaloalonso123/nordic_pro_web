"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export default function MobilePlatformHeader() {
  const [notifications, setNotifications] = useState(3);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex h-14 items-center justify-between px-4">
        {isSearchOpen ? (
          <div className="flex items-center w-full gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsSearchOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search..."
                className="pl-9 h-9 w-full"
                autoFocus
              />
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[80%] sm:w-[350px] p-0">
                  <SheetHeader className="h-14 border-b px-4 flex flex-row items-center">
                    <SheetTitle className="font-montserrat font-bold text-xl text-primary">
                      NordicPro
                    </SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    <div className="px-4 py-3 border-b">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage
                            src="/placeholder.svg?height=48&width=48&text=JD"
                            alt="John Doe"
                          />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">John Doe</div>
                          <div className="text-sm text-gray-500">
                            Head Coach
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav className="px-2 py-3">
                      {[
                        { name: "Dashboard", href: "/platform", icon: "home" },
                        { name: "Team", href: "/platform/team", icon: "users" },
                        {
                          name: "Mental Health",
                          href: "/platform/mental-health",
                          icon: "heart",
                        },
                        {
                          name: "Motivation",
                          href: "/platform/motivation",
                          icon: "trophy",
                        },
                        {
                          name: "Calendar",
                          href: "/platform/calendar",
                          icon: "calendar",
                        },
                        {
                          name: "Messages",
                          href: "/platform/messages",
                          icon: "message-square",
                        },
                        {
                          name: "Analytics",
                          href: "/platform/analytics",
                          icon: "bar-chart-3",
                        },
                        {
                          name: "Settings",
                          href: "/platform/settings",
                          icon: "settings",
                        },
                      ].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
                        >
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
                            className="text-gray-500"
                          >
                            {item.icon === "home" && (
                              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            )}
                            {item.icon === "users" && (
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            )}
                            {item.icon === "users" && (
                              <circle cx="9" cy="7" r="4"></circle>
                            )}
                            {item.icon === "users" && (
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            )}
                            {item.icon === "users" && (
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            )}
                            {item.icon === "heart" && (
                              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                            )}
                            {item.icon === "trophy" && (
                              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                            )}
                            {item.icon === "trophy" && (
                              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                            )}
                            {item.icon === "trophy" && (
                              <path d="M4 22h16"></path>
                            )}
                            {item.icon === "trophy" && (
                              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                            )}
                            {item.icon === "trophy" && (
                              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                            )}
                            {item.icon === "trophy" && (
                              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                            )}
                            {item.icon === "calendar" && (
                              <rect
                                width="18"
                                height="18"
                                x="3"
                                y="4"
                                rx="2"
                                ry="2"
                              ></rect>
                            )}
                            {item.icon === "calendar" && (
                              <line x1="16" x2="16" y1="2" y2="6"></line>
                            )}
                            {item.icon === "calendar" && (
                              <line x1="8" x2="8" y1="2" y2="6"></line>
                            )}
                            {item.icon === "calendar" && (
                              <line x1="3" x2="21" y1="10" y2="10"></line>
                            )}
                            {item.icon === "message-square" && (
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            )}
                            {item.icon === "bar-chart-3" && (
                              <path d="M3 3v18h18"></path>
                            )}
                            {item.icon === "bar-chart-3" && (
                              <path d="M18 17V9"></path>
                            )}
                            {item.icon === "bar-chart-3" && (
                              <path d="M13 17V5"></path>
                            )}
                            {item.icon === "bar-chart-3" && (
                              <path d="M8 17v-3"></path>
                            )}
                            {item.icon === "settings" && (
                              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                            )}
                            {item.icon === "settings" && (
                              <circle cx="12" cy="12" r="3"></circle>
                            )}
                          </svg>
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </nav>
                    <div className="px-4 pt-4 mt-4 border-t">
                      <Button
                        variant="outline"
                        className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                          <polyline points="16 17 21 12 16 7"></polyline>
                          <line x1="21" x2="9" y1="12" y2="12"></line>
                        </svg>
                        Log out
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <Link
                href="/platform"
                className="font-montserrat font-bold text-xl text-primary"
              >
                NordicPro
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 relative"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5 text-gray-600" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 relative"
                onClick={() => setNotifications(0)}
              >
                <Bell className="h-5 w-5 text-gray-600" />
                {notifications > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </Button>
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src="/placeholder.svg?height=36&width=36&text=JD"
                  alt="John Doe"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
