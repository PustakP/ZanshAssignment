"use client"

import Nav from '@/components/nav'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import EditApp from '@/components/editapp'

export default function EditApplicationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <EditApp/>
    </div>
  )
}