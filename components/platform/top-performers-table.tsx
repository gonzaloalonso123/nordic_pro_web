"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpDown, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample data
const initialData = [
  {
    id: 1,
    name: "Alex Johnson",
    position: "Forward",
    performance: 94,
    attendance: 100,
    improvement: 8.2,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Jamie Smith",
    position: "Midfielder",
    performance: 92,
    attendance: 95,
    improvement: 5.7,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Taylor Wilson",
    position: "Defender",
    performance: 90,
    attendance: 100,
    improvement: 7.3,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Jordan Brown",
    position: "Goalkeeper",
    performance: 89,
    attendance: 90,
    improvement: 9.1,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Casey Miller",
    position: "Midfielder",
    performance: 88,
    attendance: 95,
    improvement: 6.8,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Riley Davis",
    position: "Forward",
    performance: 87,
    attendance: 85,
    improvement: 10.2,
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function TopPerformersTable() {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: "performance", direction: "desc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <ArrowUpDown className="ml-2 h-4 w-4" />;
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="ml-2 h-4 w-4" />
    ) : (
      <ChevronDown className="ml-2 h-4 w-4" />
    );
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Player</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>
            <Button
              variant="ghost"
              onClick={() => handleSort("performance")}
              className="p-0 h-auto font-medium flex items-center"
            >
              Performance {getSortIcon("performance")}
            </Button>
          </TableHead>
          <TableHead>
            <Button
              variant="ghost"
              onClick={() => handleSort("attendance")}
              className="p-0 h-auto font-medium flex items-center"
            >
              Attendance {getSortIcon("attendance")}
            </Button>
          </TableHead>
          <TableHead>
            <Button
              variant="ghost"
              onClick={() => handleSort("improvement")}
              className="p-0 h-auto font-medium flex items-center"
            >
              Improvement {getSortIcon("improvement")}
            </Button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((player) => (
          <TableRow key={player.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={player.avatar} alt={player.name} />
                  <AvatarFallback>
                    {player.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="font-medium">{player.name}</div>
              </div>
            </TableCell>
            <TableCell>{player.position}</TableCell>
            <TableCell>
              <div className="flex items-center">
                <div className="w-full max-w-[100px] bg-gray-100 rounded-full h-2.5 mr-2">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: `${player.performance}%` }}></div>
                </div>
                <span>{player.performance}%</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant={player.attendance === 100 ? "default" : "outline"}>{player.attendance}%</Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center text-green-600">
                <ChevronUp className="h-4 w-4 mr-1" />
                {player.improvement}%
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
