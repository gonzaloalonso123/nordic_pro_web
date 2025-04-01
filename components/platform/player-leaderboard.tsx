import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const players = [
  {
    id: 1,
    name: "Alex J.",
    avatar: "/placeholder.svg?height=40&width=40&text=A",
    initials: "AJ",
    points: 520,
    rank: 1,
    change: "up",
  },
  {
    id: 2,
    name: "Maya T.",
    avatar: "/placeholder.svg?height=40&width=40&text=M",
    initials: "MT",
    points: 485,
    rank: 2,
    change: "stable",
  },
  {
    id: 3,
    name: "Jacob L.",
    avatar: "/placeholder.svg?height=40&width=40&text=J",
    initials: "JL",
    points: 450,
    rank: 3,
    change: "up",
  },
  {
    id: 4,
    name: "Emma S.",
    avatar: "/placeholder.svg?height=40&width=40&text=E",
    initials: "ES",
    points: 420,
    rank: 4,
    change: "down",
  },
  {
    id: 5,
    name: "Noah P.",
    avatar: "/placeholder.svg?height=40&width=40&text=N",
    initials: "NP",
    points: 385,
    rank: 5,
    change: "up",
  },
]

export default function PlayerLeaderboard() {
  return (
    <div className="space-y-3">
      {players.map((player) => (
        <div
          key={player.id}
          className={`flex items-center p-2 rounded-lg ${player.rank === 1 ? "bg-primary/5" : "hover:bg-gray-50"}`}
        >
          <div
            className={`w-6 h-6 flex items-center justify-center font-bold text-sm ${
              player.rank === 1
                ? "text-primary"
                : player.rank === 2
                  ? "text-gray-700"
                  : player.rank === 3
                    ? "text-amber-700"
                    : "text-gray-500"
            }`}
          >
            {player.rank}
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-100 mx-2 overflow-hidden">
            <Avatar>
              <AvatarImage src={player.avatar} alt={player.name} />
              <AvatarFallback>{player.initials}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1">
            <span className="font-medium">{player.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="font-medium text-gray-900">{player.points}</div>
            {player.change === "up" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-green"
              >
                <path
                  fillRule="evenodd"
                  d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {player.change === "down" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-red-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

