"use client";

import { useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";

// Sample data
const messages = [
  {
    id: 1,
    sender: "Coach Sarah",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Good morning team! Just a reminder that we have practice today at 4pm. Please arrive 15 minutes early for warm-up.",
    timestamp: new Date(2023, 3, 15, 8, 30),
    isMe: false,
  },
  {
    id: 2,
    sender: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "I'll be there, Coach!",
    timestamp: new Date(2023, 3, 15, 8, 35),
    isMe: false,
  },
  {
    id: 3,
    sender: "Jamie Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Coach, will we be working on the new formation today?",
    timestamp: new Date(2023, 3, 15, 8, 40),
    isMe: false,
  },
  {
    id: 4,
    sender: "Coach Sarah",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Yes, Jamie. We'll spend about 30 minutes on the new formation and then move to scrimmage.",
    timestamp: new Date(2023, 3, 15, 8, 45),
    isMe: false,
  },
  {
    id: 5,
    sender: "You",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "I have a question about my position in the new formation. Can we discuss before practice?",
    timestamp: new Date(2023, 3, 15, 9, 0),
    isMe: true,
  },
  {
    id: 6,
    sender: "Coach Sarah",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Come by 30 minutes early and we can go over it.",
    timestamp: new Date(2023, 3, 15, 9, 5),
    isMe: false,
  },
  {
    id: 7,
    sender: "Taylor Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "I'll be bringing the new training equipment we discussed last week.",
    timestamp: new Date(2023, 3, 15, 9, 10),
    isMe: false,
  },
  {
    id: 8,
    sender: "Coach Sarah",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Great, thanks Taylor! Everyone, make sure to bring water bottles and proper footwear.",
    timestamp: new Date(2023, 3, 15, 9, 15),
    isMe: false,
  },
  {
    id: 9,
    sender: "You",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Will do, Coach. Looking forward to practice!",
    timestamp: new Date(2023, 3, 15, 9, 20),
    isMe: true,
  },
];

export default function ChatInterface() {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Group messages by date
  const groupedMessages = messages.reduce((groups, message) => {
    const date = format(message.timestamp, "MMMM d, yyyy");
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
    return groups;
  }, {});

  return (
    <div className="flex-grow overflow-y-auto p-4">
      {Object.entries(groupedMessages).map(([date, msgs]) => (
        <div key={date}>
          <div className="flex justify-center my-4">
            <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">{date}</span>
          </div>

          {msgs.map((message) => (
            <div key={message.id} className={`flex mb-4 ${message.isMe ? "justify-end" : "justify-start"}`}>
              {!message.isMe && (
                <Avatar className="h-8 w-8 mr-2 mt-1">
                  <AvatarImage src={message.avatar} alt={message.sender} />
                  <AvatarFallback>
                    {message.sender
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              )}

              <div className={`max-w-[70%] ${message.isMe ? "order-1" : "order-2"}`}>
                {!message.isMe && <p className="text-xs text-gray-500 mb-1">{message.sender}</p>}

                <div
                  className={`p-3 rounded-lg ${
                    message.isMe ? "bg-primary text-white rounded-tr-none" : "bg-gray-100 rounded-tl-none"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>

                <p className="text-xs text-gray-500 mt-1">{format(message.timestamp, "h:mm a")}</p>
              </div>

              {message.isMe && (
                <Avatar className="h-8 w-8 ml-2 mt-1">
                  <AvatarImage src={message.avatar} alt="You" />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
