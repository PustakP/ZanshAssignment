import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided } from 'react-beautiful-dnd'
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Pencil, Trash2, GripVertical } from 'lucide-react'
import QuestionModal from './qs'

interface Question {
  id: string
  content: string
  type: string
}

const EditApplicationQuestions: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([
    { id: '1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.', type: 'Text Based Question' },
    { id: '2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.', type: 'Photo Based Question' },
    { id: '3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.', type: 'Video Based Question' },
    { id: '4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.', type: 'Audio Based Question' },
    { id: '5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.', type: 'Document Based Question' },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(questions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setQuestions(items);
  };



  return (
    <div className="container mx-auto px-4 py-8">
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="questions">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {questions.map((question, index) => (
              <Draggable key={question.id} draggableId={question.id} index={index}>
                {(provided, snapshot) => (
                  <Card
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`mb-4 ${
                      snapshot.isDragging ? 'bg-blue-100 shadow-lg' : 'bg-gray-50'
                    } transition-all duration-200`}
                  >
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4 flex-grow">
          <div {...provided.dragHandleProps} className="cursor-move">
            <GripVertical className="text-gray-400" />
          </div>
          <div className="flex-grow">
            <p className="font-medium text-lg">{index + 1}. {question.content}</p>
            <p className="text-sm text-gray-500">{question.type}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm">
            Edit
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <span className="text-lg">⋮</span>
          </Button>
        </div>
      </CardContent>
      </Card>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  </div>
);
}

export default EditApplicationQuestions