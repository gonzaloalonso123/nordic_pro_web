export default function MotivationScreen() {
  return (
    <div className="flex flex-col h-full bg-white text-foreground font-sans">
      {/* App header */}
      <div className="px-4 py-6 border-b">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-primary">NordicPro</h1>
            <p className="text-sm text-foreground/60">Player Dashboard</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden">
            <img
              src="/placeholder.svg?height=32&width=32&text=A"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Player profile */}
      <div className="px-4 py-4 bg-accent/5 border-b">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-accent/20 overflow-hidden border-2 border-white">
            <img
              src="/placeholder.svg?height=56&width=56&text=A"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-lg">Alex Johnson</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-foreground/60">Midfielder</span>
              <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full">
                Team Captain
              </span>
            </div>
          </div>
        </div>

        {/* Level progress */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Level 7</span>
            <span className="text-xs text-foreground/60">85% to Level 8</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold">Recent Achievements</h3>
          <button className="text-xs text-primary">View All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
          <div className="flex-shrink-0 w-20 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <span className="text-xs text-center mt-1">Team Spirit</span>
          </div>

          <div className="flex-shrink-0 w-20 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
              </svg>
            </div>
            <span className="text-xs text-center mt-1">On Fire</span>
          </div>

          <div className="flex-shrink-0 w-20 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green"
              >
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              </svg>
            </div>
            <span className="text-xs text-center mt-1">Team Player</span>
          </div>

          <div className="flex-shrink-0 w-20 flex flex-col items-center opacity-40">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <span className="text-xs text-center mt-1">Locked</span>
          </div>
        </div>
      </div>

      {/* Current challenges */}
      <div className="px-4 py-4 border-t">
        <h3 className="font-bold mb-3">Current Challenges</h3>

        <div className="space-y-3">
          <div className="bg-primary/5 rounded-lg p-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">Perfect Attendance</h4>
                <p className="text-xs text-foreground/60 mt-1">
                  Attend 5 consecutive practices
                </p>
              </div>
              <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full">
                Team
              </span>
            </div>
            <div className="mt-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-foreground/60">
                  4/5 completed
                </span>
                <span className="text-xs font-medium">80%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-accent/5 rounded-lg p-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">Goal Scorer</h4>
                <p className="text-xs text-foreground/60 mt-1">
                  Score 3 goals in matches this month
                </p>
              </div>
              <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full">
                Personal
              </span>
            </div>
            <div className="mt-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-foreground/60">
                  2/3 completed
                </span>
                <span className="text-xs font-medium">67%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full"
                  style={{ width: "67%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="px-4 py-4 border-t flex-1">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold">Team Leaderboard</h3>
          <button className="text-xs text-primary">This Week</button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center p-2 bg-primary/5 rounded-lg">
            <div className="w-6 h-6 flex items-center justify-center font-bold text-primary">
              1
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 mx-2 overflow-hidden">
              <img
                src="/placeholder.svg?height=32&width=32&text=A"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <span className="font-medium">Alex J.</span>
            </div>
            <div className="font-bold text-primary">520 pts</div>
          </div>

          <div className="flex items-center p-2 rounded-lg">
            <div className="w-6 h-6 flex items-center justify-center font-medium text-foreground/60">
              2
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 mx-2 overflow-hidden">
              <img
                src="/placeholder.svg?height=32&width=32&text=M"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <span className="font-medium">Maya T.</span>
            </div>
            <div className="font-medium">485 pts</div>
          </div>

          <div className="flex items-center p-2 rounded-lg">
            <div className="w-6 h-6 flex items-center justify-center font-medium text-foreground/60">
              3
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 mx-2 overflow-hidden">
              <img
                src="/placeholder.svg?height=32&width=32&text=J"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <span className="font-medium">Jacob L.</span>
            </div>
            <div className="font-medium">450 pts</div>
          </div>
        </div>
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
        <button className="flex flex-col items-center text-accent">
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
          <span className="text-xs mt-1">Progress</span>
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
