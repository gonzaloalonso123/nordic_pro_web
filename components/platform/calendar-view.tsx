// Generate calendar data
const generateCalendarData = () => {
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  // Get the first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
  const startingDayOfWeek = firstDayOfMonth.getDay() // 0 = Sunday, 1 = Monday, etc.

  // Get the number of days in the month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // Create calendar grid (6 weeks x 7 days)
  const calendarGrid = []
  let dayCounter = 1

  for (let week = 0; week < 6; week++) {
    const weekDays = []

    for (let day = 0; day < 7; day++) {
      if (week === 0 && day < startingDayOfWeek) {
        // Empty cells before the first day of the month
        weekDays.push({ day: null, isToday: false, events: [] })
      } else if (dayCounter > daysInMonth) {
        // Empty cells after the last day of the month
        weekDays.push({ day: null, isToday: false, events: [] })
      } else {
        // Regular day cells
        const isToday = dayCounter === today.getDate()

        // Add some sample events
        const events = []

        // Team practice on Mondays and Wednesdays
        if ((dayCounter % 7 === 1 || dayCounter % 7 === 3) && dayCounter < 28) {
          events.push({
            id: `practice-${dayCounter}`,
            title: "Team Practice",
            time: "4:00 PM - 5:30 PM",
            type: "practice",
          })
        }

        // Games on weekends
        if (dayCounter === 6 || dayCounter === 20) {
          events.push({
            id: `game-${dayCounter}`,
            title: dayCounter === 6 ? "Game vs Eagles" : "Game vs Hawks",
            time: "2:00 PM - 4:00 PM",
            type: "game",
          })
        }

        // Team meeting
        if (dayCounter === 12) {
          events.push({
            id: "meeting-1",
            title: "Team Meeting",
            time: "6:00 PM - 7:00 PM",
            type: "meeting",
          })
        }

        // Skills training
        if (dayCounter === 15) {
          events.push({
            id: "training-1",
            title: "Skills Training",
            time: "4:00 PM - 5:30 PM",
            type: "practice",
          })
        }

        weekDays.push({ day: dayCounter, isToday, events })
        dayCounter++
      }
    }

    calendarGrid.push(weekDays)

    // Stop if we've gone through all days of the month
    if (dayCounter > daysInMonth) break
  }

  return calendarGrid
}

const calendarData = generateCalendarData()

export default function CalendarView() {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className="border rounded-md overflow-hidden">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 bg-gray-50 border-b">
        {weekdays.map((day, index) => (
          <div key={index} className="py-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 grid-rows-6 h-[600px]">
        {calendarData.map((week, weekIndex) =>
          week.map((day, dayIndex) => (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className={`border-b border-r p-1 ${
                day.isToday ? "bg-primary/5" : day.day ? "bg-white" : "bg-gray-50"
              } ${weekIndex === 5 ? "border-b-0" : ""} ${dayIndex === 6 ? "border-r-0" : ""}`}
            >
              {day.day && (
                <>
                  <div
                    className={`text-sm font-medium h-6 w-6 flex items-center justify-center rounded-full mb-1 ${
                      day.isToday ? "bg-primary text-white" : ""
                    }`}
                  >
                    {day.day}
                  </div>
                  <div className="space-y-1 max-h-[80px] overflow-y-auto">
                    {day.events.map((event) => (
                      <div
                        key={event.id}
                        className={`text-xs p-1 rounded truncate ${
                          event.type === "practice"
                            ? "bg-green/10 text-green"
                            : event.type === "game"
                              ? "bg-accent/10 text-accent"
                              : "bg-primary/10 text-primary"
                        }`}
                      >
                        <div className="font-medium truncate">{event.title}</div>
                        <div className="text-[10px] truncate">{event.time}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )),
        )}
      </div>
    </div>
  )
}

