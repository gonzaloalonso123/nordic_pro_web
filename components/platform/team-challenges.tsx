import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Award, Calendar, Clock, Trophy, Users } from "lucide-react"

const challenges = [
  {
    id: 1,
    title: "Perfect Attendance",
    description: "Attend 5 consecutive practices",
    progress: 80,
    current: 4,
    target: 5,
    type: "team",
    deadline: "3 days left",
    reward: "100 team points",
    icon: Users,
  },
  {
    id: 2,
    title: "Goal Scorer",
    description: "Score 10 goals in matches this month",
    progress: 60,
    current: 6,
    target: 10,
    type: "individual",
    deadline: "2 weeks left",
    reward: "Achievement badge + 50 points",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Team Spirit",
    description: "Complete 50 mood check-ins as a team",
    progress: 72,
    current: 36,
    target: 50,
    type: "team",
    deadline: "1 week left",
    reward: "Team celebration + 200 points",
    icon: Award,
  },
  {
    id: 4,
    title: "Upcoming: Tournament Ready",
    description: "Prepare for the upcoming tournament with special training sessions",
    progress: 0,
    current: 0,
    target: 3,
    type: "team",
    deadline: "Starts in 2 weeks",
    reward: "Tournament kit + 300 points",
    icon: Calendar,
    upcoming: true,
  },
]

export default function TeamChallenges() {
  return (
    <div className="space-y-6">
      {challenges.map((challenge) => (
        <div
          key={challenge.id}
          className={`border rounded-lg p-4 ${challenge.upcoming ? "bg-gray-50 border-dashed" : "bg-white"}`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                challenge.type === "team" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
              }`}
            >
              <challenge.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="font-bold text-lg">{challenge.title}</h3>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      challenge.type === "team" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                    }`}
                  >
                    {challenge.type}
                  </span>
                  <span className="text-xs flex items-center text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {challenge.deadline}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{challenge.description}</p>

              {!challenge.upcoming && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>
                      Progress: {challenge.current}/{challenge.target}
                    </span>
                    <span>{challenge.progress}%</span>
                  </div>
                  <Progress value={challenge.progress} className="h-2" />
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-4">
                <div className="text-sm">
                  <span className="text-gray-500">Reward:</span> <span className="font-medium">{challenge.reward}</span>
                </div>
                {challenge.upcoming ? (
                  <Button variant="outline" size="sm">
                    Remind Me
                  </Button>
                ) : (
                  <Button size="sm">View Details</Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

