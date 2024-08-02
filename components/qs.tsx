import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface QuestionModalProps {
  onClose: () => void
  onSave: (questionData: any) => void
}

const QuestionModal: React.FC<QuestionModalProps> = ({ onClose, onSave }) => {
  const [question, setQuestion] = useState('')
  const [questionType, setQuestionType] = useState('Text Based')
  const [limit, setLimit] = useState('120 Words')
  const [canSkip, setCanSkip] = useState('Yes')

  const handleSave = () => {
    onSave({ question, questionType, limit, canSkip })
    onClose()
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Add Question</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="question">Question</Label>
          <Input
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question here"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="questionType">Question Type</Label>
          <Select value={questionType} onValueChange={setQuestionType}>
            <SelectTrigger id="questionType">
              <SelectValue placeholder="Select question type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Text Based">Text Based</SelectItem>
              {/* Add other question types here */}
            </SelectContent>
          </Select>
        </div>
        <div className="flex space-x-4">
          <div className="space-y-2 flex-1">
            <Label htmlFor="limit">Limit</Label>
            <Input
              id="limit"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              placeholder="e.g. 120 Words"
            />
          </div>
          <div className="space-y-2 flex-1">
            <Label htmlFor="canSkip">Can this question be skipped</Label>
            <Select value={canSkip} onValueChange={setCanSkip}>
              <SelectTrigger id="canSkip">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save changes</Button>
      </CardFooter>
    </Card>
  )
}

export default QuestionModal