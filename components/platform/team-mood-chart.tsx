"use client";

import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function TeamMoodChart() {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    // Generate dates for the last 30 days
    const dates = Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    });

    // Generate mood data with a general upward trend
    const generateMoodData = () => {
      let value = 3.5 + Math.random() * 0.5;
      return Array.from({ length: 30 }, (_, i) => {
        // Add some randomness but maintain an upward trend
        const change = Math.random() * 0.4 - 0.15;
        value = Math.max(1, Math.min(5, value + change + (i > 20 ? 0.03 : 0)));
        return value;
      });
    };

    const moodData = generateMoodData();

    // Create the data array for the chart
    const data = dates.map((date, index) => ({
      date,
      mood: moodData[index],
    }));

    setChartData(data);
  }, []);

  // Custom tooltip formatter
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const moodLabels = [
        "",
        "Very Low",
        "Low",
        "Neutral",
        "Good",
        "Excellent",
      ];
      const moodLabel = moodLabels[Math.round(value)];

      return (
        <div className="bg-white p-2 border rounded-md shadow-sm">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-sm text-gray-500">
            Mood: {moodLabel} ({value.toFixed(1)})
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[300px] w-full">
      {chartData.length > 0 && (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#007BFF" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#007BFF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              opacity={0.2}
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => {
                // Show fewer ticks for better readability
                const index = chartData.findIndex(
                  (item) => item.date === value
                );
                return index % 5 === 0 ? value : "";
              }}
            />
            <YAxis
              domain={[1, 5]}
              ticks={[1, 2, 3, 4, 5]}
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => {
                const labels = [
                  "",
                  "Very Low",
                  "Low",
                  "Neutral",
                  "Good",
                  "Excellent",
                ];
                return labels[value];
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="mood"
              stroke="#007BFF"
              strokeWidth={2}
              fill="url(#moodGradient)"
              dot={{ r: 2, fill: "#007BFF" }}
              activeDot={{ r: 5, fill: "#007BFF" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
