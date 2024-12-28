import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stages = [
  {
    title: "Day 1: Uncover your learning habits",
    content: "Start your journey with a detailed learning diagnostic assessment that assess you on five evidence-based dimensions of learning."
  },
  {
    title: "Week 1: High-yield improvements",
    content: "Train your highest priority areas with a suite of rapid-fire learning and self-management techniques."
  },
  {
    title: "Weeks 2 to 10: Rapid growth",
    content: "Fill your learning toolkit and build a truly top learner's system. Expect heavy hitting techniques that help you nail the next exam (and every exam for the rest of your life)."
  },
  {
    title: "Weeks 10 to 20: Become a genius",
    content: "Using our world's first cognitive retraining methodology, you'll learn advanced techniques to rewire the way your brain thinks and learns at a fundamental level."
  }
]

export default function ProgramOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">The road to becoming a highly efficient learner</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {stages.map((stage, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{stage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{stage.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

