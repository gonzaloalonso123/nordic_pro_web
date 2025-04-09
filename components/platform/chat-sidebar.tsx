"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Sample data
const conversations = [
  {
    id: 1,
    name: "Team General",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Coach: Don't forget practice tomorrow at 4pm!",
    time: "10:30 AM",
    unread: 2,
    isGroup: true,
    online: true,
  },
  {
    id: 2,
    name: "Defenders Group",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Jamie: Let's review the new formation",
    time: "Yesterday",
    unread: 0,
    isGroup: true,
    online: false,
  },
  {
    id: 3,
    name: "Coach Sarah",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Great job at practice today!",
    time: "Yesterday",
    unread: 0,
    isGroup: false,
    online: true,
  },
  {
    id: 4,
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Are you coming to the extra session?",
    time: "Monday",
    unread: 0,
    isGroup: false,
    online: true,
  },
  {
    id: 5,
    name: "Team Captains",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Meeting agenda for tomorrow",
    time: "Monday",
    unread: 0,
    isGroup: true,
    online: false,
  },
  {
    id: 6,
    name: "Jamie Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Can you help me with the drills?",
    time: "Sunday",
    unread: 0,
    isGroup: false,
    online: false,
  },
  {
    id: 7,
    name: "Fitness Group",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "New workout plan uploaded",
    time: "Last week",
    unread: 0,
    isGroup: true,
    online: false,
  },
  {
    id: 8,
    name: "Taylor Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks for the feedback on my technique",
    time: "Last week",
    unread: 0,
    isGroup: false,
    online: false,
  },
];

export default function ChatSidebar() {
  const [activeChat, setActiveChat] = useState(1);

  return (
    <div className="divide-y">
      {conversations.map((chat) => (
        <div
          key={chat.id}
          className={`flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
            activeChat === chat.id ? "bg-gray-50" : ""
          }`}
          onClick={() => setActiveChat(chat.id)}
        >
          <div className="relative">
            <Avatar>
              <AvatarImage src={chat.avatar} alt={chat.name} />
              <AvatarFallback>
                {chat.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            {chat.online && (
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green border-2 border-white"></span>
            )}
          </div>
          <div className="flex-grow min-w-0">
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-sm truncate">{chat.name}</h4>
              <span className="text-xs text-gray-500">{chat.time}</span>
            </div>
            <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>
          </div>
          {chat.unread > 0 && (
            <Badge variant="default" className="rounded-full h-5 w-5 p-0 flex items-center justify-center">
              {chat.unread}
            </Badge>
          )}
        </div>
      ))}
    </div>
  );
}
