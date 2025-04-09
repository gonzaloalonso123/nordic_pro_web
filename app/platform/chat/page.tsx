import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react";
import ChatInterface from "@/components/platform/chat-interface";
import ChatSidebar from "@/components/platform/chat-sidebar";

export default function ChatPage() {
  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-10rem)]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold font-montserrat">Team Chat</h1>
          <p className="text-gray-500">Communicate with your team and coaches</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-14rem)]">
        {/* Chat sidebar */}
        <div className="lg:col-span-1 h-full">
          <Card className="h-full flex flex-col">
            <CardHeader className="px-4 py-3 border-b">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Conversations</CardTitle>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search chats..." className="pl-8" />
              </div>
            </CardHeader>
            <CardContent className="p-0 overflow-auto flex-grow">
              <ChatSidebar />
            </CardContent>
          </Card>
        </div>

        {/* Chat main */}
        <div className="lg:col-span-3 h-full">
          <Card className="h-full flex flex-col">
            <CardHeader className="px-6 py-4 border-b flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Team Chat" />
                    <AvatarFallback>TC</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Team General</CardTitle>
                    <p className="text-xs text-muted-foreground">25 members, 5 online</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 flex-grow overflow-hidden flex flex-col">
              <ChatInterface />
              <div className="p-4 border-t">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input placeholder="Type a message..." className="flex-grow" />
                  <Button size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
