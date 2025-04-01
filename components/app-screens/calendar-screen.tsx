export default function CalendarScreen() {
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();

  // Generate calendar days
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  ).getDay();

  const days = [];
  // Add empty cells for days before the 1st of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Events data
  const events = [
    {
      id: 1,
      day: 8,
      type: "practice",
      title: "Team Practice",
      time: "16:00 - 17:30",
      location: "Main Field",
    },
    {
      id: 2,
      day: 12,
      type: "game",
      title: "Game vs Eagles",
      time: "14:00 - 16:00",
      location: "City Stadium",
    },
    {
      id: 3,
      day: 15,
      type: "practice",
      title: "Skills Training",
      time: "16:00 - 17:30",
      location: "Training Center",
    },
    {
      id: 4,
      day: today.getDate(),
      type: "practice",
      title: "Team Practice",
      time: "16:00 - 17:30",
      location: "Main Field",
    },
    {
      id: 5,
      day: 22,
      type: "meeting",
      title: "Team Meeting",
      time: "18:00 - 19:00",
      location: "Club House",
    },
    {
      id: 6,
      day: 26,
      type: "game",
      title: "Game vs Hawks",
      time: "15:00 - 17:00",
      location: "Away Field",
    },
  ];

  // Get events for today
  const todayEvents = events.filter((event) => event.day === today.getDate());

  // Get upcoming events
  const upcomingEvents = events
    .filter((event) => event.day >= today.getDate())
    .sort((a, b) => a.day - b.day)
    .slice(0, 3);

  return (
    <div className="flex flex-col h-full bg-white text-foreground font-sans">
      {/* App header */}
      <div className="px-4 py-6 border-b">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-primary">NordicPro</h1>
            <p className="text-sm text-foreground/60">Team Calendar</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Month selector */}
      <div className="px-4 py-3 flex justify-between items-center">
        <h2 className="text-lg font-bold">
          {currentMonth} {currentYear}
        </h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="px-4 py-2">
        <div className="grid grid-cols-7 text-center text-xs text-foreground/60 mb-2">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
            <div key={i} className="py-1">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-sm">
          {days.map((day, i) => {
            const hasEvent = day && events.some((event) => event.day === day);
            const isToday = day === today.getDate();

            return (
              <div
                key={i}
                className={`aspect-square flex flex-col items-center justify-center rounded-full relative
                    ${
                      isToday
                        ? "bg-primary text-white font-bold"
                        : day
                        ? "hover:bg-gray-100"
                        : ""
                    }
                    ${!day ? "text-transparent" : "cursor-pointer"}
                  `}
              >
                {day}
                {hasEvent && !isToday && (
                  <div className="absolute bottom-1 w-1 h-1 rounded-full bg-primary"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Today's events */}
      {todayEvents.length > 0 && (
        <div className="px-4 py-3">
          <h3 className="text-md font-bold mb-2">Today</h3>
          {todayEvents.map((event) => (
            <div
              key={event.id}
              className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-3 mb-2"
            >
              <div className="flex justify-between">
                <h4 className="font-bold">{event.title}</h4>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    event.type === "practice"
                      ? "bg-green/20 text-green"
                      : event.type === "game"
                      ? "bg-accent/20 text-accent"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>
              <div className="text-sm text-foreground/70 mt-1">
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {event.time}
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upcoming events */}
      <div className="px-4 py-3 flex-1">
        <h3 className="text-md font-bold mb-2">Upcoming</h3>
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="border-b border-gray-100 py-3 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex flex-col items-center justify-center">
              <span className="text-xs text-foreground/60">
                {currentMonth.slice(0, 3)}
              </span>
              <span className="text-sm font-bold">{event.day}</span>
            </div>
            <div className="flex-1">
              <h4 className="font-medium">{event.title}</h4>
              <p className="text-xs text-foreground/60">
                {event.time} • {event.location}
              </p>
            </div>
            <div
              className={`w-2 h-2 rounded-full ${
                event.type === "practice"
                  ? "bg-green"
                  : event.type === "game"
                  ? "bg-accent"
                  : "bg-primary"
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Bottom navigation */}
      <div className="px-4 py-3 border-t flex justify-around">
        <button className="flex flex-col items-center text-foreground/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
            <line x1="16" x2="16" y1="2" y2="6"></line>
            <line x1="8" x2="8" y1="2" y2="6"></line>
            <line x1="3" x2="21" y1="10" y2="10"></line>
          </svg>
          <span className="text-xs mt-1">Calendar</span>
        </button>
        <button className="flex flex-col items-center text-foreground/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
          <span className="text-xs mt-1">Notes</span>
        </button>
        <button className="flex flex-col items-center text-foreground/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="10" r="3"></circle>
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
          </svg>
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
}
