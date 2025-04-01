import { CheckCircle, XCircle } from "lucide-react"

const practices = [
  {
    date: "Apr 29",
    attendance: 18,
    total: 20,
    percentage: 90,
  },
  {
    date: "Apr 26",
    attendance: 19,
    total: 20,
    percentage: 95,
  },
  {
    date: "Apr 24",
    attendance: 20,
    total: 20,
    percentage: 100,
  },
  {
    date: "Apr 22",
    attendance: 17,
    total: 20,
    percentage: 85,
  },
  {
    date: "Apr 19",
    attendance: 18,
    total: 20,
    percentage: 90,
  },
]

const players = [
  { id: 1, name: "Alex J.", attendance: [true, true, true, true, true] },
  { id: 2, name: "Maya T.", attendance: [true, true, true, true, true] },
  { id: 3, name: "Jacob L.", attendance: [true, true, true, false, true] },
  { id: 4, name: "Emma S.", attendance: [false, true, true, true, true] },
  { id: 5, name: "Noah P.", attendance: [true, true, true, true, false] },
]

export default function TeamAttendance() {
  return (
    <div>
      <div className="mb-4">
        {practices.map((practice, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
            <div className="text-sm font-medium">{practice.date}</div>
            <div className="flex items-center">
              <div className="w-32 bg-gray-100 rounded-full h-2.5 mr-2">
                <div className="bg-green h-2.5 rounded-full" style={{ width: `${practice.percentage}%` }}></div>
              </div>
              <span className="text-sm text-gray-500">
                {practice.attendance}/{practice.total}
              </span>
            </div>
          </div>
        ))}
      </div>

      <h4 className="text-sm font-medium text-gray-500 mb-2">Player Attendance</h4>
      <div className="space-y-2">
        {players.map((player) => (
          <div key={player.id} className="flex items-center justify-between">
            <div className="text-sm">{player.name}</div>
            <div className="flex gap-1">
              {player.attendance.map((present, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    present ? "bg-green/10 text-green" : "bg-red-100 text-red-500"
                  }`}
                >
                  {present ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

