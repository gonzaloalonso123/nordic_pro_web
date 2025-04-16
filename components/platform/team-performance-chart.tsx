"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Generate sample data
const generateData = () => {
  const data = [];
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  // Get the number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Generate data for the last 30 days
  for (let i = 0; i < 30; i++) {
    const day = daysInMonth - 29 + i;
    const date = new Date(currentYear, currentMonth, day);

    // Only include valid dates
    if (date.getMonth() === currentMonth && date.getDate() > 0) {
      data.push({
        date: `${date.getMonth() + 1}/${date.getDate()}`,
        performance: Math.floor(70 + Math.random() * 20),
        attendance: Math.floor(80 + Math.random() * 15),
        mood: Math.floor(60 + Math.random() * 30),
      });
    }
  }

  return data;
};

const data = generateData();

export default function TeamPerformanceChart() {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: "#f0f0f0" }}
            axisLine={{ stroke: "#f0f0f0" }}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: "#f0f0f0" }}
            axisLine={{ stroke: "#f0f0f0" }}
            domain={[0, 100]}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <>
                    {/* @ts-expect-error This is just mocked */}
                    <ChartTooltip>
                      <ChartTooltipContent>
                        <div className="font-medium">{label}</div>
                        {payload.map((entry, index) => (
                          <div key={`item-${index}`} className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
                              <span className="text-sm text-muted-foreground">{entry.name}:</span>
                            </div>
                            <span className="font-medium">{entry.value}%</span>
                          </div>
                        ))}
                      </ChartTooltipContent>
                    </ChartTooltip>
                  </>
                );
              }
              return null;
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="performance"
            name="Performance"
            stroke="#0070f3"
            strokeWidth={2}
            dot={{ r: 0 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="attendance"
            name="Attendance"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ r: 0 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="mood"
            name="Team Mood"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ r: 0 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
