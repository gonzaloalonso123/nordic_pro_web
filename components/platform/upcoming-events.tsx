import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const events = [
  {
    id: 1,
    title: "Team Practice",
    date: "Today",
    time: "4:00 PM - 5:30 PM",
    location: "Main Field",
    type: "practice",
  },
  {
    id: 2,
    title: "Team Meeting",
    date: "Tomorrow",
    time: "6:00 PM - 7:00 PM",
    location: "Club House",
    type: "meeting",
  },
  {
    id: 3,
    title: "Game vs Eagles",
    date: "Sat, May 4",
    time: "2:00 PM - 4:00 PM",
    location: "City Stadium",
    type: "game",
  },
  {
    id: 4,
    title: "Skills Training",
    date: "Mon, May 6",
    time: "4:00 PM - 5:30 PM",
    location: "Training Center",
    type: "practice",
  },
]

export default function UpcomingEvents() {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
              event.type === "practice"
                ? "bg-green/10 text-green"
                : event.type === "game"
                  ? "bg-accent/10 text-accent"
                  : "bg-primary/10 text-primary"
            }`}
          >
            {event.type === "practice" && <Users className="h-5 w-5" />}
            {event.type === "game" && <Calendar className="h-5 w-5" />}
            {event.type === "meeting" && <Users className="h-5 w-5" />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-medium truncate">{event.title}</h4>
              <Badge
                variant="outline"
                className={`ml-2 flex-shrink-0 ${
                  event.type === "practice"
                    ? "border-green/20 bg-green/10 text-green"
                    : event.type === "game"
                      ? "border-accent/20 bg-accent/10 text-accent"
                      : "border-primary/20 bg-primary/10 text-primary"
                }`}
              >
                {event.type}
              </Badge>
            </div>
            <div className="text-sm text-gray-500 space-y-1">
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
                <span className="truncate">
                  {event.date} • {event.time}
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                <span className="truncate">{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

