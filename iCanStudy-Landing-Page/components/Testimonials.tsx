import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    content: "The ICS program has genuinely helped me with aspects of my life that I've struggled with for years. The care and dedication that Justin and the entire ICS team bring to their students is exceptional. Justin is not only proficient and knowledgeable but also genuinely caring in their approach.",
    author: "Grace C.",
    location: "AU - Dec 05, 2024 via Trustpilot"
  },
  {
    content: "I used to get very inconsistent results, and as a high achiever, it was depressing. I now get top results... spend less time studying and more time working on my physical health, bass guitar skills and much more.",
    author: "Peter D.",
    location: "AU - April 26 2024, via Trustpilot"
  },
  {
    content: "I want to say a massive thank you to ICS. As a struggling final-year pharmacy student, I had no idea how to study effectively, and my grades were consistently mediocre (C level). I am thrilled to report that my recent test results came back, and I achieved a B+!",
    author: "Jonathan L.",
    location: "NZ - April 28, 2023 via Trustpilot"
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What our students say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="mb-4">{testimonial.content}</p>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

