import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const challenges = [
  {
    title: "Outdated learning methods",
    description: "If you spend hours studying without getting the results you want, the problem is how you study (effort isn't the issue!)."
  },
  {
    title: "Procrastination",
    description: "If you can't control procrastination, you can't control your life. You cannot achieve any goal reliably if you're a slave to procrastination."
  },
  {
    title: "Low focus and energy",
    description: "You blocked out 4 hours to study. But you spend 2 hours distracted and 1 hour napping. Sound familiar? Me too."
  },
  {
    title: "Lack of control",
    description: "Imagine trying to fix a car without knowing how an engine works... That's what trying to get better grades without knowing how learning works is like."
  },
  {
    title: "Burnout",
    description: "Burnout = Effort without reward. Taking a break isn't always enough to overcome burnout at its root cause."
  },
  {
    title: "Balancing life",
    description: "There's more to life than studying. But when studying is so stressful, it's hard to enjoy life outside of it!"
  }
]

export default function Challenges() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why do so few students actually succeed with their studies?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

