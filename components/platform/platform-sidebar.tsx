"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Calendar, Heart, Home, MessageSquare, Settings, Trophy, Users, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const menuItems = [
  { name: "Dashboard", href: "/platform", icon: Home },
  { name: "Team", href: "/platform/team", icon: Users },
  { name: "Mental Health", href: "/platform/mental-health", icon: Heart },
  { name: "Motivation", href: "/platform/motivation", icon: Trophy },
  { name: "Calendar", href: "/platform/calendar", icon: Calendar },
  { name: "Messages", href: "/platform/messages", icon: MessageSquare },
  { name: "Analytics", href: "/platform/analytics", icon: BarChart3 },
  { name: "Settings", href: "/platform/settings", icon: Settings },
]

export default function PlatformSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      <div
        className={cn(
          "bg-white border-r border-gray-200 h-[calc(100vh-4rem)] sticky top-16 transition-all duration-300 hidden md:block",
          collapsed ? "w-20" : "w-64",
        )}
      >
        <div className="p-4 flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
          </Button>
        </div>

        <nav className="px-3 py-2">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                      isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                    )}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    {!collapsed && <span>{item.name}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="absolute bottom-4 left-0 right-0 px-3">
          <div className={cn("bg-primary/5 rounded-lg p-4 border border-primary/10", collapsed ? "text-center" : "")}>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-2">
              <Trophy className="h-4 w-4" />
            </div>
            {!collapsed && (
              <>
                <h4 className="font-medium text-sm text-center mb-1">Pro Features</h4>
                <p className="text-xs text-gray-500 mb-2">Unlock advanced analytics and team insights.</p>
                <Button size="sm" className="w-full text-xs">
                  Upgrade
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile sidebar toggle */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <Button size="icon" className="h-12 w-12 rounded-full shadow-lg" onClick={() => setCollapsed(!collapsed)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile sidebar */}
      {!collapsed && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setCollapsed(true)}>
          <div className="bg-white w-64 h-full p-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <Link href="/platform" className="font-montserrat font-bold text-xl text-primary">
                NordicPro
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setCollapsed(true)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav>
              <ul className="space-y-1">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href
                  const Icon = item.icon

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                          isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                        )}
                        onClick={() => setCollapsed(true)}
                      >
                        <Icon className="h-5 w-5 flex-shrink-0" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

