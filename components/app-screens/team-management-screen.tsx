export default function TeamManagementScreen() {
  return (
    <div className="flex flex-col h-full bg-white text-foreground font-sans">
      {/* App header */}
      <div className="px-4 py-6 border-b">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-primary">NordicPro</h1>
            <p className="text-sm text-foreground/60">Team Management</p>
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

      {/* Team overview */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Eagles U16</h2>
          <button className="text-xs px-3 py-1 bg-primary text-white rounded-full">
            Manage Team
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-primary/5 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-primary">18</div>
            <div className="text-xs text-foreground/60">Players</div>
          </div>
          <div className="bg-green/5 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green">92%</div>
            <div className="text-xs text-foreground/60">Attendance</div>
          </div>
          <div className="bg-accent/5 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-accent">4.2</div>
            <div className="text-xs text-foreground/60">Avg. Mood</div>
          </div>
        </div>
      </div>

      {/* Recent messages */}
      <div className="px-4 py-4 border-t">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold">Recent Messages</h3>
          <button className="text-xs text-primary">View All</button>
        </div>

        <div className="space-y-3">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex justify-between items-start">
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">C</span>
                </div>
                <div>
                  <h4 className="font-medium">
                    Coach: Great practice everyone!
                  </h4>
                  <p className="text-xs text-foreground/60 mt-1">
                    Remember to review the new plays we worked on today. See you
                    all on Thursday!
                  </p>
                </div>
              </div>
              <span className="text-xs text-foreground/60">2h ago</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex justify-between items-start">
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=40&width=40&text=M"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">
                    Maya T.: Can we review the defensive drills?
                  </h4>
                  <p className="text-xs text-foreground/60 mt-1">
                    I'd like some extra help with the new defensive formation.
                  </p>
                </div>
              </div>
              <span className="text-xs text-foreground/60">5h ago</span>
            </div>
          </div>
        </div>

        <div className="mt-3 relative">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full py-2 px-4 pr-10 border border-gray-200 rounded-full text-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z"></path>
              <path d="M22 2 11 13"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Team roster */}
      <div className="px-4 py-4 border-t flex-1">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold">Team Roster</h3>
          <button className="text-xs text-primary">View All</button>
        </div>

        <div className="space-y-2">
          {[
            {
              name: "Alex J.",
              position: "Midfielder",
              status: "Present",
              statusColor: "bg-green",
            },
            {
              name: "Maya T.",
              position: "Defender",
              status: "Present",
              statusColor: "bg-green",
            },
            {
              name: "Jacob L.",
              position: "Forward",
              status: "Late",
              statusColor: "bg-accent",
            },
            {
              name: "Emma S.",
              position: "Goalkeeper",
              status: "Absent",
              statusColor: "bg-red-500",
            },
          ].map((player, index) => (
            <div
              key={index}
              className="flex items-center p-2 rounded-lg hover:bg-gray-50"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                <img
                  src={`/placeholder.svg?height=40&width=40&text=${player.name.charAt(
                    0
                  )}`}
                  alt={player.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-3 flex-1">
                <div className="flex justify-between">
                  <span className="font-medium">{player.name}</span>
                  <div
                    className={`w-2 h-2 rounded-full ${player.statusColor}`}
                  ></div>
                </div>
                <span className="text-xs text-foreground/60">
                  {player.position}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-3 py-2 border border-primary/30 text-primary rounded-lg text-sm font-medium">
          Take Attendance
        </button>
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
            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
          </svg>
          <span className="text-xs mt-1">Wellness</span>
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
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span className="text-xs mt-1">Team</span>
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
