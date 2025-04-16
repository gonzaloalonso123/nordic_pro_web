"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Video, Users, MoreHorizontal, MapPin } from "lucide-react";
import { format, addDays, addHours } from "date-fns";

// Sample data
const now = new Date();
const meetings = [
  {
    id: 1,
    title: "Team Strategy Meeting",
    description: "Review game plan for upcoming match",
    startTime: addHours(now, 1),
    duration: 30,
    type: "video",
    participants: 12,
    organizer: "Coach Sarah",
    organizerAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    title: "Individual Performance Review",
    description: "One-on-one session to discuss progress",
    startTime: addDays(now, 1),
    duration: 45,
    type: "video",
    participants: 2,
    organizer: "Coach Mike",
    organizerAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    title: "Team Building Workshop",
    description: "Activities to improve team cohesion",
    startTime: addDays(now, 2),
    duration: 120,
    type: "in-person",
    location: "Training Center, Room 3",
    participants: 18,
    organizer: "Team Captain",
    organizerAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    title: "Pre-Game Briefing",
    description: "Final preparations before the match",
    startTime: addDays(now, 3),
    duration: 60,
    type: "hybrid",
    location: "Conference Room A",
    participants: 15,
    organizer: "Coach Sarah",
    organizerAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    title: "Nutrition Workshop",
    description: "Learn about optimal nutrition for performance",
    startTime: addDays(now, 5),
    duration: 90,
    type: "video",
    participants: 20,
    organizer: "Nutritionist",
    organizerAvatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function MeetingsList() {
  const [expandedMeeting, setExpandedMeeting] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedMeeting(expandedMeeting === id ? null : id);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-primary/10 text-primary";
      case "in-person":
        return "bg-green/10 text-green";
      case "hybrid":
        return "bg-accent/10 text-accent";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-4">
      {meetings.map((meeting) => (
        <div key={meeting.id} className="border rounded-lg overflow-hidden transition-all duration-200">
          <div className="p-4 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-gray-50 rounded-lg">
              <span className="text-lg font-bold">{format(meeting.startTime, "d")}</span>
              <span className="text-sm text-gray-500">{format(meeting.startTime, "MMM")}</span>
            </div>

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="font-medium">{meeting.title}</h3>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={getTypeColor(meeting.type)}>
                    {meeting.type === "video" ? "Video Call" : meeting.type === "in-person" ? "In Person" : "Hybrid"}
                  </Badge>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => toggleExpand(meeting.id)}>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-1">{meeting.description}</p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>
                    {format(meeting.startTime, "h:mm a")} ({meeting.duration} min)
                  </span>
                </div>

                {meeting.location && (
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{meeting.location}</span>
                  </div>
                )}

                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{meeting.participants} participants</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Add to Calendar</span>
              </Button>
              {meeting.type !== "in-person" && (
                <Button size="sm" className="flex items-center gap-1">
                  <Video className="h-4 w-4" />
                  <span>Join</span>
                </Button>
              )}
            </div>
          </div>

          {expandedMeeting === meeting.id && (
            <div className="p-4 bg-gray-50 border-t">
              <div className="flex items-center gap-3 mb-3">
                <Avatar>
                  <AvatarImage src={meeting.organizerAvatar} alt={meeting.organizer} />
                  <AvatarFallback>
                    {meeting.organizer
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Organized by {meeting.organizer}</p>
                  <p className="text-xs text-gray-500">Created on {format(now, "MMMM d, yyyy")}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Button variant="outline" size="sm">
                  Edit Meeting
                </Button>
                <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                  Cancel Meeting
                </Button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
