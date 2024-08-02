import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import QuestionModal from './qs'
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog"
import EditApplicationQuestions from "./general"


interface Question {
    id: string
    content: string
    type: string
  }
  


const EditApp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [questions, setQuestions] = useState<Question[]>([
        { id: '1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.', type: 'Text Based Question' },
        { id: '2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.', type: 'Photo Based Question' },
        { id: '3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.', type: 'Video Based Question' },
        { id: '4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.', type: 'Audio Based Question' },
        { id: '5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.', type: 'Document Based Question' },
      ])

    const handleAddQuestion = (questionData: any) => {
        const newQuestion: Question = {
          id: String(questions.length + 1),
          content: questionData.question,
          type: questionData.questionType,
        }
        setQuestions([...questions, newQuestion])
      }



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Edit your application</h1>
      <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>

      <Tabs defaultValue="general" className="mb-12">
        <TabsList>
          <TabsTrigger value="general">General Details</TabsTrigger>
          <TabsTrigger value="questions">Edit Application Questions</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <div className="text-center py-24">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
              <Star className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Let's add some questions to your applications</h2>
            <p className="text-gray-600 mb-6">Click the button below to get your survey up and running.</p>
            <Button onClick={() => setIsModalOpen(true)} className="mt-4">
        Add Question
      </Button>
      
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogOverlay className="bg-black/50" />
        <DialogContent className="sm:max-w-[720px]">
          <QuestionModal
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddQuestion}
          />
        </DialogContent>
      </Dialog>
          </div>
        </TabsContent>
        <TabsContent value="questions">
          <EditApplicationQuestions/>
        </TabsContent>

      </Tabs>
    </div>
  )
}

export default EditApp