import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CheckCircle, MoreHorizontal, XCircle } from "lucide-react"

const players = [
  {
    id: 1,
    name: "Alex Johnson",
    position: "Midfielder",
    avatar: "/placeholder.svg?height=40&width=40&text=A",
    initials: "AJ",
    status: "active",
    role: "Captain",
    email: "alex.j@example.com",
    phone: "(555) 123-4567",
    joinDate: "Jan 15, 2023",
  },
  {
    id: 2,
    name: "Maya Thompson",
    position: "Defender",
    avatar: "/placeholder.svg?height=40&width=40&text=M",
    initials: "MT",
    status: "active",
    role: "Player",
    email: "maya.t@example.com",
    phone: "(555) 234-5678",
    joinDate: "Feb 3, 2023",
  },
  {
    id: 3,
    name: "Jacob Lee",
    position: "Forward",
    avatar: "/placeholder.svg?height=40&width=40&text=J",
    initials: "JL",
    status: "active",
    role: "Player",
    email: "jacob.l@example.com",
    phone: "(555) 345-6789",
    joinDate: "Mar 12, 2023",
  },
  {
    id: 4,
    name: "Emma Smith",
    position: "Goalkeeper",
    avatar: "/placeholder.svg?height=40&width=40&text=E",
    initials: "ES",
    status: "active",
    role: "Player",
    email: "emma.s@example.com",
    phone: "(555) 456-7890",
    joinDate: "Jan 5, 2023",
  },
  {
    id: 5,
    name: "Noah Parker",
    position: "Midfielder",
    avatar: "/placeholder.svg?height=40&width=40&text=N",
    initials: "NP",
    status: "active",
    role: "Player",
    email: "noah.p@example.com",
    phone: "(555) 567-8901",
    joinDate: "Apr 20, 2023",
  },
  {
    id: 6,
    name: "Olivia Davis",
    position: "Defender",
    avatar: "/placeholder.svg?height=40&width=40&text=O",
    initials: "OD",
    status: "inactive",
    role: "Player",
    email: "olivia.d@example.com",
    phone: "(555) 678-9012",
    joinDate: "Feb 15, 2023",
  },
]

export default function TeamRoster() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left font-medium text-gray-500 py-3 px-4">Player</th>
            <th className="text-left font-medium text-gray-500 py-3 px-4">Position</th>
            <th className="text-left font-medium text-gray-500 py-3 px-4">Status</th>
            <th className="text-left font-medium text-gray-500 py-3 px-4">Role</th>
            <th className="text-left font-medium text-gray-500 py-3 px-4">Contact</th>
            <th className="text-left font-medium text-gray-500 py-3 px-4">Joined</th>
            <th className="text-right font-medium text-gray-500 py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={player.avatar} alt={player.name} />
                    <AvatarFallback>{player.initials}</AvatarFallback>
                  </Avatar>
                  <div className="font-medium">{player.name}</div>
                </div>
              </td>
              <td className="py-3 px-4 text-gray-600">{player.position}</td>
              <td className="py-3 px-4">
                {player.status === "active" ? (
                  <Badge variant="outline" className="bg-green/10 text-green border-green/20">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Active
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-gray-100 text-gray-500 border-gray-200">
                    <XCircle className="h-3 w-3 mr-1" />
                    Inactive
                  </Badge>
                )}
              </td>
              <td className="py-3 px-4">
                {player.role === "Captain" ? (
                  <Badge className="bg-primary/10 text-primary border-primary/20">Captain</Badge>
                ) : (
                  <span className="text-gray-600">{player.role}</span>
                )}
              </td>
              <td className="py-3 px-4">
                <div className="text-sm">
                  <div>{player.email}</div>
                  <div className="text-gray-500">{player.phone}</div>
                </div>
              </td>
              <td className="py-3 px-4 text-gray-600">{player.joinDate}</td>
              <td className="py-3 px-4 text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit Player</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {player.status === "active" ? (
                      <DropdownMenuItem className="text-red-500">Deactivate</DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem className="text-green">Activate</DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

