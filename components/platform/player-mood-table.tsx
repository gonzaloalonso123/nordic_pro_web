import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, MessageSquare } from "lucide-react"

const players = [
  {
    id: 1,
    name: "Alex Johnson",
    position: "Midfielder",
    avatar: "/placeholder.svg?height=40&width=40&text=A",
    initials: "AJ",
    mood: {
      today: 5,
      yesterday: 4,
      trend: "up",
      streak: 7,
    },
    lastCheckIn: "Today, 8:32 AM",
    notes: "Feeling great! Ready for the game this weekend.",
  },
  {
    id: 2,
    name: "Maya Thompson",
    position: "Defender",
    avatar: "/placeholder.svg?height=40&width=40&text=M",
    initials: "MT",
    mood: {
      today: 4,
      yesterday: 4,
      trend: "stable",
      streak: 5,
    },
    lastCheckIn: "Today, 9:15 AM",
    notes: "Good practice yesterday, working on my defensive positioning.",
  },
  {
    id: 3,
    name: "Jacob Lee",
    position: "Forward",
    avatar: "/placeholder.svg?height=40&width=40&text=J",
    initials: "JL",
    mood: {
      today: 3,
      yesterday: 2,
      trend: "up",
      streak: 3,
    },
    lastCheckIn: "Today, 7:45 AM",
    notes: "Feeling better today. Ankle is still a bit sore but improving.",
  },
  {
    id: 4,
    name: "Emma Smith",
    position: "Goalkeeper",
    avatar: "/placeholder.svg?height=40&width=40&text=E",
    initials: "ES",
    mood: {
      today: 2,
      yesterday: 2,
      trend: "down",
      streak: 3,
    },
    lastCheckIn: "Today, 10:02 AM",
    notes: "Stressed about upcoming exams. Having trouble focusing at practice.",
  },
  {
    id: 5,
    name: "Noah Parker",
    position: "Midfielder",
    avatar: "/placeholder.svg?height=40&width=40&text=N",
    initials: "NP",
    mood: {
      today: 4,
      yesterday: 3,
      trend: "up",
      streak: 2,
    },
    lastCheckIn: "Yesterday, 8:15 PM",
    notes: "",
  },
]

export default function PlayerMoodTable() {
  const getMoodEmoji = (score: number) => {
    switch (score) {
      case 1:
        return "😞"
      case 2:
        return "😐"
      case 3:
        return "🙂"
      case 4:
        return "😀"
      case 5:
        return "🤩"
      default:
        return "❓"
    }
  }

  const getMoodColor = (score: number) => {
    switch (score) {
      case 1:
        return "bg-red-500"
      case 2:
        return "bg-amber-400"
      case 3:
        return "bg-primary"
      case 4:
      case 5:
        return "bg-green"
      default:
        return "bg-gray-400"
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left font-medium text-gray-500 py-3 px-4">Player</th>
            <th className="text-center font-medium text-gray-500 py-3 px-4">Today</th>
            <th className="text-center font-medium text-gray-500 py-3 px-4">Yesterday</th>
            <th className="text-center font-medium text-gray-500 py-3 px-4">Trend</th>
            <th className="text-center font-medium text-gray-500 py-3 px-4">Streak</th>
            <th className="text-left font-medium text-gray-500 py-3 px-4">Last Check-in</th>
            <th className="text-left font-medium text-gray-500 py-3 px-4">Notes</th>
            <th className="text-right font-medium text-gray-500 py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={player.avatar} alt={player.name} />
                    <AvatarFallback>{player.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{player.name}</div>
                    <div className="text-sm text-gray-500">{player.position}</div>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4 text-center">
                <div className="flex justify-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      player.mood.today >= 4
                        ? "bg-green/10 text-green"
                        : player.mood.today === 3
                          ? "bg-primary/10 text-primary"
                          : player.mood.today === 2
                            ? "bg-amber-100 text-amber-700"
                            : "bg-red-100 text-red-500"
                    }`}
                  >
                    {getMoodEmoji(player.mood.today)}
                  </div>
                </div>
              </td>
              <td className="py-3 px-4 text-center">
                <div className="flex justify-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-lg opacity-70 ${
                      player.mood.yesterday >= 4
                        ? "bg-green/10 text-green"
                        : player.mood.yesterday === 3
                          ? "bg-primary/10 text-primary"
                          : player.mood.yesterday === 2
                            ? "bg-amber-100 text-amber-700"
                            : "bg-red-100 text-red-500"
                    }`}
                  >
                    {getMoodEmoji(player.mood.yesterday)}
                  </div>
                </div>
              </td>
              <td className="py-3 px-4 text-center">
                <div className="flex justify-center">
                  {player.mood.trend === "up" && (
                    <div className="text-green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  {player.mood.trend === "down" && (
                    <div className="text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  {player.mood.trend === "stable" && (
                    <div className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </td>
              <td className="py-3 px-4 text-center">
                <div className="flex justify-center items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${getMoodColor(player.mood.today)}`}></div>
                  <span>{player.mood.streak} days</span>
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-gray-500">{player.lastCheckIn}</td>
              <td className="py-3 px-4 text-sm max-w-[200px] truncate">
                {player.notes || <span className="text-gray-400">No notes</span>}
              </td>
              <td className="py-3 px-4 text-right">
                <div className="flex justify-end gap-2">
                  <Button size="icon" variant="ghost">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

