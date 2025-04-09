"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Sample data
const data = [
  { name: "Alex", technical: 85, physical: 78, tactical: 92 },
  { name: "Jamie", technical: 75, physical: 90, tactical: 70 },
  { name: "Taylor", technical: 90, physical: 85, tactical: 88 },
  { name: "Jordan", technical: 65, physical: 95, tactical: 72 },
  { name: "Casey", technical: 80, physical: 82, tactical: 85 },
  { name: "Riley", technical: 95, physical: 70, tactical: 80 },
];

export default function PlayerProgressChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="name"
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
                  <ChartTooltip>
                    <ChartTooltipContent>
                      <div className="font-medium">{label}</div>
                      {payload.map((entry, index) => (
                        <div key={`item-${index}`} className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
                            <span className="text-sm text-muted-foreground">{entry.name}:</span>
                          </div>
                          <span className="font-medium">{entry.value}</span>
                        </div>
                      ))}
                    </ChartTooltipContent>
                  </ChartTooltip>
                );
              }
              return null;
            }}
          />
          <Legend />
          <Bar dataKey="technical" name="Technical" fill="#0070f3" radius={[4, 4, 0, 0]} />
          <Bar dataKey="physical" name="Physical" fill="#10b981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="tactical" name="Tactical" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
