import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Filter, Calendar, ArrowUpRight, TrendingUp, TrendingDown, Users, Activity } from "lucide-react";
import TeamPerformanceChart from "@/components/platform/team-performance-chart";
import PlayerProgressChart from "@/components/platform/player-progress-chart";
import TopPerformersTable from "@/components/platform/top-performers-table";
import AttendanceRateChart from "@/components/platform/attendance-rate-chart";

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold font-montserrat">Analytics</h1>
          <p className="text-gray-500">Track team and player performance metrics</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Last 30 Days</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Team Performance</p>
                <h3 className="text-2xl font-bold mt-1">87%</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-xs font-medium">+5.2%</span>
                </div>
              </div>
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Activity className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Attendance Rate</p>
                <h3 className="text-2xl font-bold mt-1">92%</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-xs font-medium">+2.1%</span>
                </div>
              </div>
              <div className="h-10 w-10 bg-green/10 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Avg. Mood Score</p>
                <h3 className="text-2xl font-bold mt-1">7.8</h3>
                <div className="flex items-center mt-1 text-red-500">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span className="text-xs font-medium">-0.3</span>
                </div>
              </div>
              <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Activity className="h-5 w-5 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Completed Goals</p>
                <h3 className="text-2xl font-bold mt-1">24/30</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-xs font-medium">+4</span>
                </div>
              </div>
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Team Performance Trends</CardTitle>
            <CardDescription>Performance metrics over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <TeamPerformanceChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Player Progress</CardTitle>
            <CardDescription>Individual player improvement</CardDescription>
          </CardHeader>
          <CardContent>
            <PlayerProgressChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attendance Rate</CardTitle>
            <CardDescription>Practice and game attendance</CardDescription>
          </CardHeader>
          <CardContent>
            <AttendanceRateChart />
          </CardContent>
        </Card>
      </div>

      {/* Top Performers */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performers</CardTitle>
          <CardDescription>Players with the highest performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <TopPerformersTable />
        </CardContent>
      </Card>
    </div>
  );
}
