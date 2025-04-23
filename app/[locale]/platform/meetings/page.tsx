import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Video, Users, Clock } from "lucide-react";
import MeetingsList from "@/components/platform/meetings-list";
import UpcomingEvents from "@/components/platform/upcoming-events";

export default function MeetingsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold font-montserrat">Meetings</h1>
          <p className="text-gray-500">Schedule and join team meetings</p>
        </div>
        <div className="flex gap-3">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            <span>Schedule Meeting</span>
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="recurring">Recurring</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Meetings</CardTitle>
              <CardDescription>All your upcoming team meetings</CardDescription>
            </CardHeader>
            <CardContent>
              <MeetingsList />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Quick Join</CardTitle>
              <CardDescription>Join your next meeting</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Team Strategy Meeting</h3>
                      <p className="text-sm text-gray-500">Starting in 10 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4" />
                    <span>30 min</span>
                    <span className="mx-2">•</span>
                    <Users className="h-4 w-4" />
                    <span>12 participants</span>
                  </div>
                  <Button className="w-full">Join Now</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>Your meetings for today</CardDescription>
            </CardHeader>
            <CardContent>
              <UpcomingEvents today={true} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
