"use client";

import { Button } from "@/components/ui/button";
import { Video, MapPin, Clock } from "lucide-react";
import { format, addHours, addDays, isToday } from "date-fns";

// Sample data
const now = new Date();
const allMeetings = [
  {
    id: 1,
    title: "Team Strategy Meeting",
    startTime: addHours(now, 1),
    duration: 30,
    type: "video",
  },
  {
    id: 2,
    title: "Individual Performance Review",
    startTime: addDays(now, 1),
    duration: 45,
    type: "video",
  },
  {
    id: 3,
    title: "Team Building Workshop",
    startTime: addDays(now, 2),
    duration: 120,
    type: "in-person",
    location: "Training Center",
  },
  {
    id: 4,
    title: "Pre-Game Briefing",
    startTime: addHours(now, 4),
    duration: 60,
    type: "hybrid",
    location: "Conference Room A",
  },
  {
    id: 5,
    title: "Nutrition Workshop",
    startTime: addDays(now, 5),
    duration: 90,
    type: "video",
  },
];

export default function UpcomingMeetings({ today = false }) {
  // Filter meetings based on the 'today' prop
  const meetings = today ? allMeetings.filter((meeting) => isToday(meeting.startTime)) : allMeetings.slice(0, 3);

  return (
    <div className="space-y-4">
      {meetings.length > 0 ? (
        meetings.map((meeting) => (
          <div key={meeting.id} className="border rounded-lg p-3">
            <h3 className="font-medium">{meeting.title}</h3>

            <div className="flex items-center text-sm text-gray-500 mt-2">
              <Clock className="h-4 w-4 mr-1" />
              <span>
                {format(meeting.startTime, "h:mm a")} ({meeting.duration} min)
              </span>
            </div>

            {meeting.location && (
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{meeting.location}</span>
              </div>
            )}

            <div className="mt-3">
              {meeting.type !== "in-person" && (
                <Button size="sm" className="w-full flex items-center justify-center gap-1">
                  <Video className="h-4 w-4" />
                  <span>Join Meeting</span>
                </Button>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-6 text-gray-500">
          <p>No meetings scheduled for today</p>
        </div>
      )}
    </div>
  );
}
