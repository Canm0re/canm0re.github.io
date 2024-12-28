import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const stages = [
  {
    title: "Day 1: Uncover your learning habits",
    content: "Start your journey with a detailed learning diagnostic assessment that assess you on five evidence-based dimensions of learning: Deep processing, Self-regulation, Retrieval, Self-management, and Mindset."
  },
  {
    title: "Week 1: High-yield improvements",
    content: "Train your highest priority areas with a suite of rapid-fire learning and self-management techniques. Learn to schedule and create focus zones, reduce procrastination, create effective task lists, use spaced interleaved retrieval, and stack marginal gains."
  },
  {
    title: "Weeks 2 to 10: Rapid growth",
    content: "Fill your learning toolkit and build a truly top learner's system. Learn evidence-based note-taking techniques, process information during class and lectures, use flashcards effectively, prepare for exams with confidence, and learn new skills 10 to 20x faster than normal."
  },
  {
    title: "Weeks 10 to 20: Become a genius",
    content: "Rewire the way your brain thinks and learns at a fundamental level. Learn advanced note-taking methods, high-pressure time management and habit creation systems, and advanced planning, motivation and stress management systems."
  },
  {
    title: "Week 20+: Road to mastery",
    content: "Learn to hyper-personalize your learning system, create advanced learning systems for complicated challenges, and combine and hybridize all the techniques you've learned to overcome unique challenges and reach the highest level of academic success."
  }
]

export default function ProgramStructure() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-full overflow-hidden">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">What to expect as you work through the program...</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">First, learn the theory and tools to save time and get better grades.</h3>
            <p className="mb-4"><em>About 2-3 hours per week</em></p>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand how the brain likes to learn (based on the research).</li>
              <li>Learn tried-and-tested techniques based on the theory.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Then, apply what you learned and get feedback to improve faster.</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Practice the techniques while studying with our step-by-step instructions.</li>
              <li>Improve faster by getting support, feedback and guidance on your work.</li>
            </ul>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-center text-primary">The road to becoming a highly efficient learner...</h3>
        <Tabs defaultValue="stage0" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-4">
            {stages.map((stage, index) => (
              <TabsTrigger key={index} value={`stage${index}`} className="mb-2">
                {stage.title.split(':')[0]}
              </TabsTrigger>
            ))}
          </TabsList>
          {stages.map((stage, index) => (
            <TabsContent key={index} value={`stage${index}`}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">{stage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{stage.content}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

