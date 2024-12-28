import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface Stage {
  title: string
  content: string
}

interface MobileStagesListProps {
  stages: Stage[]
}

export default function MobileStagesList({ stages }: MobileStagesListProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {stages.map((stage, index) => (
        <AccordionItem key={index} value={`stage${index}`}>
          <AccordionTrigger>{stage.title.split(':')[0]}</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>{stage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{stage.content}</p>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

