import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Filter, Plus, Trophy, Users } from "lucide-react";
import PlayerLeaderboard from "@/components/platform/player-leaderboard";
import TeamChallenges from "@/components/platform/team-challenges";
import PlayerAchievements from "@/components/platform/player-achievements";

export default function MotivationPage() {
  return (
    <div className="max-w-7xl mx-auto w-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 w-screen">
        <div>
          <h1 className="text-2xl font-bold font-montserrat">Motivation</h1>
          <p className="text-gray-500">
            Gamified challenges and rewards to keep players engaged
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            <span>Create Challenge</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 w-screen">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Active Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold">5</p>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Trophy className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Team Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold">1,250</p>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Award className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Engagement Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold">87%</p>
              <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center text-green">
                <Users className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Team Challenges</CardTitle>
            <CardDescription>
              Active and upcoming challenges for your team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TeamChallenges />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leaderboard</CardTitle>
            <CardDescription>Top performers this week</CardDescription>
          </CardHeader>
          <CardContent>
            <PlayerLeaderboard />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <Tabs defaultValue="all">
            <div className="flex items-center justify-between">
              <CardTitle>Player Achievements</CardTitle>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="locked">Locked</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </CardHeader>
        <CardContent>
          <PlayerAchievements />
        </CardContent>
      </Card>
    </div>
  );
}
