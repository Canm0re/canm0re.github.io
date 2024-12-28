import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    title: "iCS for Medical fellowship exam preparation",
    content: "The ICS program has genuinely helped me with aspects of my life that I've struggled with for years. The care and dedication that Justin and the entire ICS team bring to their students is exceptional. Justin is not only proficient and knowledgeable but also genuinely caring in their approach. Even though I'm still relatively early in the program, I've already noticed massive improvements in my ability to learn new content, build integrated networks of information in my mind, and recall them effectively. He could (and should) charge far more for his program. I've spent thousands of dollars on exam prep, career advice, and coaching, and none of it even comes close to what ICS has provided. This program is incredibly effective, and I highly recommend it.",
    author: "Grace C.",
    location: "AU - Dec 05, 2024 via Trustpilot"
  },
  {
    title: "Life Changer",
    content: "I used to get very inconsistent results, and as a high achiever, it was depressing. I now get top results... spend less time studying and more time working on my physical health, bass guitar skills and much more. The fact that it has been less than 6 months and I am the happiest I have ever been, and that this will help me with everything else for the rest of my life (uni, parenting, having fun), is the reason I am giving 5 stars and wish I could give 5 hundred stars.",
    author: "Peter D.",
    location: "AU - April 26 2024, via Trustpilot"
  },
  {
    title: "It works!",
    content: "I want to say a massive thank you to ICS. As a struggling final-year pharmacy student, I had no idea how to study effectively, and my grades were consistently mediocre (C level). I am thrilled to report that my recent test results came back, and I achieved a B+! This grade may seem small to some people, but to me, it's a tremendous achievement, and I couldn't have done it without ICS's help :)",
    author: "Jonathan L.",
    location: "NZ - April 28, 2023 via Trustpilot"
  },
  {
    title: "Life changing experience",
    content: "ICS has been a transformative program for me. It hasn't just enhanced my learning—it has positively impacted many areas of my life that I had struggled with for years. The way I think, approach challenges, and navigate life has completely changed for the better. While it does require effort, the results are more than worth it. I couldn't recommend it enough!",
    author: "Shilpa B.",
    location: "AU - Dec 20, 2024 via Trustpilot"
  }
]

export default function ExpandedTestimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What our students say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{testimonial.title}</h3>
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

