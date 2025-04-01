import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Award, Clock, Heart, Shield, Star, Trophy, Zap } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "Team Spirit",
    description: "Completed 30 consecutive days of mood check-ins",
    icon: Heart,
    color: "bg-green/10 text-green",
    date: "Apr 15, 2023",
    players: [
      {
        id: 1,
        name: "Alex J.",
        avatar: "/placeholder.svg?height=32&width=32&text=A",
        initials: "AJ",
      },
      {
        id: 2,
        name: "Maya T.",
        avatar: "/placeholder.svg?height=32&width=32&text=M",
        initials: "MT",
      },
    ],
  },
  {
    id: 2,
    title: "Goal Machine",
    description: "Scored 10 goals in a single month",
    icon: Trophy,
    color: "bg-accent/10 text-accent",
    date: "Mar 28, 2023",
    players: [
      {
        id: 1,
        name: "Alex J.",
        avatar: "/placeholder.svg?height=32&width=32&text=A",
        initials: "AJ",
      },
    ],
  },
  {
    id: 3,
    title: "Perfect Attendance",
    description: "Attended 20 consecutive practices",
    icon: Star,
    color: "bg-primary/10 text-primary",
    date: "Mar 10, 2023",
    players: [
      {
        id: 2,
        name: "Maya T.",
        avatar: "/placeholder.svg?height=32&width=32&text=M",
        initials: "MT",
      },
      {
        id: 3,
        name: "Jacob L.",
        avatar: "/placeholder.svg?height=32&width=32&text=J",
        initials: "JL",
      },
      {
        id: 5,
        name: "Noah P.",
        avatar: "/placeholder.svg?height=32&width=32&text=N",
        initials: "NP",
      },
    ],
  },
  {
    id: 4,
    title: "Team Player",
    description: "Received 5 teammate recognitions",
    icon: Shield,
    color: "bg-amber-100 text-amber-700",
    date: "Feb 22, 2023",
    players: [
      {
        id: 4,
        name: "Emma S.",
        avatar: "/placeholder.svg?height=32&width=32&text=E",
        initials: "ES",
      },
    ],
  },
  {
    id: 5,
    title: "Rising Star",
    description: "Improved performance metrics by 30% in one month",
    icon: Zap,
    color: "bg-purple-100 text-purple-700",
    date: "Feb 5, 2023",
    players: [
      {
        id: 3,
        name: "Jacob L.",
        avatar: "/placeholder.svg?height=32&width=32&text=J",
        initials: "JL",
      },
    ],
  },
]

export default function PlayerAchievements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {achievements.map((achievement) => (
        <div key={achievement.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
          <div className="flex items-start gap-3 mb-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${achievement.color}`}>
              <achievement.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold">{achievement.title}</h3>
              <p className="text-sm text-gray-500">{achievement.description}</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{achievement.date}</span>
            </div>
            <div className="flex items-center">
              <Award className="h-3 w-3 mr-1" />
              <span>50 points</span>
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500 mb-2">Earned by:</div>
            <div className="flex -space-x-2 overflow-hidden">
              {achievement.players.map((player) => (
                <Avatar key={player.id} className="h-8 w-8 border-2 border-white">
                  <AvatarImage src={player.avatar} alt={player.name} />
                  <AvatarFallback>{player.initials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

