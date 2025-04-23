import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ChevronRight, Clock, Users, Calendar, AlertTriangle } from "lucide-react"
import TeamMoodChart from "@/components/platform/team-mood-chart"
import UpcomingEvents from "@/components/platform/upcoming-events"
import TeamAttendance from "@/components/platform/team-attendance"
import RecentActivity from "@/components/platform/recent-activity"

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold font-montserrat">Dashboard</h1>
          <p className="text-gray-500">Welcome back, Coach John</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Take Attendance</span>
          </Button>
          <Button className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Team Check-in</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Team Mood</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">4.2/5</p>
                <p className="text-sm text-green flex items-center">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                        clipRule="evenodd"
                      />
                    </svg>
                    8% from last week
                  </span>
                </p>
              </div>
              <div className="flex gap-1">
                {["😞", "😐", "🙂", "😀", "🤩"].map((emoji, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-lg ${
                      index === 3 ? "bg-green text-white" : "bg-gray-100"
                    }`}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Team Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">92%</p>
                <p className="text-sm text-green flex items-center">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                        clipRule="evenodd"
                      />
                    </svg>
                    3% from last month
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green flex items-center justify-center text-white">
                  <Users className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">18/20</p>
                  <p className="text-gray-500">players</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold">Practice Today</p>
                <p className="text-sm text-gray-500 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  4:00 PM - 5:30 PM
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Calendar className="h-5 w-5" />
              </div>
            </div>
            <Button variant="link" className="p-0 h-auto mt-2 text-primary flex items-center">
              View calendar
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Team Mood Trends</CardTitle>
            <CardDescription>Average mood score over the past 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <TeamMoodChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <UpcomingEvents />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <Tabs defaultValue="all">
              <div className="flex items-center justify-between">
                <CardTitle>Recent Activity</CardTitle>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="check-ins">Check-ins</TabsTrigger>
                  <TabsTrigger value="attendance">Attendance</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Attendance</CardTitle>
            <CardDescription>Last 5 practices</CardDescription>
          </CardHeader>
          <CardContent>
            <TeamAttendance />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 flex-shrink-0">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-medium text-amber-800 mb-1">Attention Needed</h4>
                <p className="text-sm text-amber-700 mb-2">
                  3 players have reported low mood scores for 3 consecutive days. Consider checking in with them.
                </p>
                <Button size="sm" variant="outline" className="border-amber-300 bg-amber-100 text-amber-800">
                  View Players
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

