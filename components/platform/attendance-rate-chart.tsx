"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Sample data
const data = [
  { name: "Present", value: 85 },
  { name: "Excused", value: 10 },
  { name: "Absent", value: 5 },
];

const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

export default function AttendanceRateChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <ChartTooltip>
                    <ChartTooltipContent>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: payload[0].payload.fill }} />
                        <span className="font-medium">{payload[0].name}</span>
                      </div>
                      <div className="font-bold text-lg">{payload[0].value}%</div>
                    </ChartTooltipContent>
                  </ChartTooltip>
                );
              }
              return null;
            }}
          />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            formatter={(value, entry, index) => <span className="text-sm font-medium">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
