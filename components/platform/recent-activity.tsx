import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle, Clock, XCircle } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "check-in",
    user: {
      name: "Maya T.",
      avatar: "/placeholder.svg?height=32&width=32&text=M",
      initials: "MT",
    },
    action: "completed a mood check-in",
    mood: "Great",
    time: "10 minutes ago",
  },
  {
    id: 2,
    type: "attendance",
    user: {
      name: "Jacob L.",
      avatar: "/placeholder.svg?height=32&width=32&text=J",
      initials: "JL",
    },
    action: "was marked absent",
    time: "2 hours ago",
  },
  {
    id: 3,
    type: "check-in",
    user: {
      name: "Emma S.",
      avatar: "/placeholder.svg?height=32&width=32&text=E",
      initials: "ES",
    },
    action: "completed a mood check-in",
    mood: "Okay",
    time: "3 hours ago",
  },
  {
    id: 4,
    type: "attendance",
    user: {
      name: "Noah P.",
      avatar: "/placeholder.svg?height=32&width=32&text=N",
      initials: "NP",
    },
    action: "was marked present",
    time: "Yesterday",
  },
  {
    id: 5,
    type: "check-in",
    user: {
      name: "Alex J.",
      avatar: "/placeholder.svg?height=32&width=32&text=A",
      initials: "AJ",
    },
    action: "completed a mood check-in",
    mood: "Amazing",
    time: "Yesterday",
  },
]

export default function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm">
              <span className="font-medium">{activity.user.name}</span> {activity.action}
              {activity.type === "check-in" && (
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                    activity.mood === "Amazing"
                      ? "bg-green/10 text-green"
                      : activity.mood === "Great"
                        ? "bg-primary/10 text-primary"
                        : activity.mood === "Okay"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-gray-100"
                  }`}
                >
                  {activity.mood}
                </span>
              )}
            </p>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <Clock className="h-3 w-3 mr-1" />
              {activity.time}
            </div>
          </div>
          {activity.type === "attendance" && (
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                activity.action.includes("present") ? "bg-green/10 text-green" : "bg-red-100 text-red-500"
              }`}
            >
              {activity.action.includes("present") ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <XCircle className="h-4 w-4" />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

