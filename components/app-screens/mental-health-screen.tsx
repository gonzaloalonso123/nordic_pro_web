export default function MentalHealthScreen() {
  return (
    <div className="flex flex-col h-full bg-white text-foreground font-sans">
      {/* App header */}
      <div className="px-4 py-6 border-b">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-primary">NordicPro</h1>
            <p className="text-sm text-foreground/60">Wellness Check</p>
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

      {/* Daily check-in */}
      <div className="px-4 py-6 bg-green/5">
        <h2 className="text-xl font-bold mb-4">How are you feeling today?</h2>

        <div className="flex justify-between mb-6">
          {[
            { emoji: "😞", label: "Low", selected: false },
            { emoji: "😐", label: "Okay", selected: false },
            { emoji: "🙂", label: "Good", selected: false },
            { emoji: "😀", label: "Great", selected: true },
            { emoji: "🤩", label: "Amazing", selected: false },
          ].map((mood, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 flex items-center justify-center text-2xl rounded-full mb-1 ${
                  mood.selected
                    ? "bg-green text-white shadow-md"
                    : "bg-gray-100"
                }`}
              >
                {mood.emoji}
              </div>
              <span className="text-xs font-medium">{mood.label}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <label className="block text-sm font-medium mb-2">
            Add a note (optional)
          </label>
          <textarea
            className="w-full p-3 border border-gray-200 rounded-lg text-sm"
            placeholder="How are you feeling today? What's on your mind?"
            rows={3}
            defaultValue="Feeling great today! Had a good night's sleep and ready for practice."
          ></textarea>
        </div>
      </div>

      {/* Weekly mood tracker */}
      <div className="px-4 py-4 border-t">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold">Your Week</h3>
          <button className="text-xs text-green">View Insights</button>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-end gap-4 h-32 mb-2">
            {[
              { day: "Mon", height: "40%", mood: "😐" },
              { day: "Tue", height: "60%", mood: "🙂" },
              { day: "Wed", height: "30%", mood: "😞" },
              { day: "Thu", height: "70%", mood: "😀" },
              { day: "Fri", height: "90%", mood: "🤩" },
              { day: "Sat", height: "80%", mood: "😀" },
              { day: "Sun", height: "100%", mood: "🤩" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className="w-full flex justify-center mb-1">
                  <div className="text-lg">{item.mood}</div>
                </div>
                <div className="w-full flex justify-center">
                  <div
                    className="w-4/5 bg-green/20 rounded-t-lg"
                    style={{ height: item.height }}
                  ></div>
                </div>
                <div className="text-xs mt-1 text-foreground/60">
                  {item.day}
                </div>
              </div>
            ))}
          </div>
          <div className="text-xs text-center text-foreground/60">
            Your mood is trending upward this week!
          </div>
        </div>
      </div>

      {/* Wellness tips */}
      <div className="px-4 py-4 border-t flex-1">
        <h3 className="font-bold mb-3">Wellness Insight</h3>

        <div className="bg-green/10 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center flex-shrink-0">
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
                className="text-green"
              >
                <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13z"></path>
                <circle cx="12" cy="8" r="2"></circle>
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-green">
                Rest is improving your performance
              </h4>
              <p className="text-sm text-foreground/70 mt-1">
                Your data shows that you perform better in games after days when
                you report feeling well-rested. Keep prioritizing sleep!
              </p>
              <button className="text-xs text-green mt-2 font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <button className="flex-1 py-3 bg-green text-white rounded-lg font-medium text-sm">
            Wellness Resources
          </button>
          <button className="flex-1 py-3 border border-green/30 text-green rounded-lg font-medium text-sm">
            Talk to Someone
          </button>
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
        <button className="flex flex-col items-center text-green">
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
