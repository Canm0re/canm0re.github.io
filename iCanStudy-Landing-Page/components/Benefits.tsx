import { CheckCircle } from 'lucide-react'

const benefits = [
  "Create study schedules like a top learner",
  "Prevent burnout and improve motivation",
  "Learn and process new information for maximum memory and understanding",
  "Write high-efficiency notes that help you remember more in less time",
  "Beat procrastination and learn to activate deeper focus"
]

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">How our program helps you save time and get better results.</h2>
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <p className="mb-4">It took me a decade of trial and error to figure out how to learn with true efficiency. I want you to learn that in less than 1/10th of the time.</p>
          <p className="font-semibold">My program teaches you to build an evidence-based learning system to help you...</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="text-green-500 mr-4 flex-shrink-0" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

