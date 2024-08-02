import Link from 'next/link'
import { Bell } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center space-x-6 mx-24">
        <Link href="/dashboard" className="font-medium">Dashboard</Link>
        <Link href="/applicants" className="font-medium">Applicants</Link>
        <Link href="/messages" className="font-medium">Messages</Link>
      </div>
      <div className="flex items-center space-x-4 mr-24">
        <Button variant="outline">
          <Bell className="h-4 w-4 mr-2" />
          Calendar
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="flex items-center space-x-3 mr-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/image.jpg" alt="NameName" />
            <AvatarFallback>NN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold text-sm">NameName</span>
            <span className="text-xs text-gray-500">Name@Name.name</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav