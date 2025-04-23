import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Download, Filter, Users } from "lucide-react"
import MentalHealthCheckin from "@/components/platform/mental-health-checkin"
import PlayerMoodTable from "@/components/platform/player-mood-table"

export default function MentalHealthPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold font-montserrat">Mental Health</h1>
          <p className="text-gray-500">Monitor and support your team's mental well-being</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
          <Button className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Team Check-in</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Daily Check-in</CardTitle>
            <CardDescription>Complete today's check-in to track your mood and well-being</CardDescription>
          </CardHeader>
          <CardContent>
            <MentalHealthCheckin />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Insights</CardTitle>
            <CardDescription>Current mental health status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Team Average</p>
                  <p className="text-2xl font-bold">4.2/5</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center text-green">
                  <span className="text-2xl">😀</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">Mood Distribution</p>
                <div className="space-y-2">
                  {[
                    { emoji: "🤩", label: "Amazing", count: 5, percentage: 25 },
                    { emoji: "😀", label: "Great", count: 8, percentage: 40 },
                    { emoji: "🙂", label: "Good", count: 4, percentage: 20 },
                    { emoji: "😐", label: "Okay", count: 2, percentage: 10 },
                    { emoji: "😞", label: "Low", count: 1, percentage: 5 },
                  ].map((mood) => (
                    <div key={mood.label} className="flex items-center">
                      <div className="w-8 text-center">{mood.emoji}</div>
                      <div className="flex-1 ml-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span>{mood.label}</span>
                          <span>
                            {mood.count} ({mood.percentage}%)
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full ${
                              mood.label === "Amazing" || mood.label === "Great"
                                ? "bg-green"
                                : mood.label === "Good"
                                  ? "bg-primary"
                                  : mood.label === "Okay"
                                    ? "bg-amber-400"
                                    : "bg-red-500"
                            }`}
                            style={{ width: `${mood.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">Check-in Completion</p>
                <div className="flex items-center">
                  <div className="w-full bg-gray-100 rounded-full h-2.5 mr-2">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">17 of 20 players completed today's check-in</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <Tabs defaultValue="all">
            <div className="flex items-center justify-between">
              <CardTitle>Player Mood Tracking</CardTitle>
              <TabsList>
                <TabsTrigger value="all">All Players</TabsTrigger>
                <TabsTrigger value="attention">Needs Attention</TabsTrigger>
                <TabsTrigger value="improving">Improving</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </CardHeader>
        <CardContent>
          <PlayerMoodTable />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 flex-shrink-0">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-medium text-amber-800 mb-1">Attention Needed</h4>
                <p className="text-sm text-amber-700 mb-2">
                  Emma S. has reported low mood scores for 3 consecutive days. Consider checking in with her.
                </p>
                <Button size="sm" variant="outline" className="border-amber-300 bg-amber-100 text-amber-800">
                  View Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Resources</CardTitle>
            <CardDescription>Mental health resources for your team</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary hover:underline flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  How to talk to athletes about mental health
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Recognizing signs of anxiety in young athletes
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Building team resilience through mental wellness
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Local mental health resources for youth athletes
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

