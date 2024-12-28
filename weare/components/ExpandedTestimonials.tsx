import Image from 'next/image'
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
  },
  {
    title: "It's not easy, but it is worth it",
    content: "Learning how to learn effectively is something that we should have been taught to do during school. This course by Dr Justin Sung delves deep into the nitty gritty of why you can remember some things with ease and some go in one ear and out the other... I've returned to uni after over a decade and am able to perform better than ever whilst still being early in the course.",
    author: "Liam B.",
    location: "AU - June 16 2023, via Trustpilot"
  },
  {
    title: "The Most Life Changing Course You Will Ever Encounter",
    content: "This has been by far the most valuable course I have taken In my life, the methods taught in this course are out of this world efficient... I would easily pay several multiples of what the course costs to get this kind of information and feedback (The price to value discrepancy is insane). It's not an easy course, but the community and structure of the program provide the feedback you need to get. ahead. I would highly recommend this to anyone who wants to learn not just a bit faster but orders of magnitude faster.",
    author: "Diego V.",
    location: "CA - June 17, 2023 via Trustpilot"
  },
  {
    title: "Shy skeptic to confident believer",
    content: "I was skeptical beforehand and even took half a year before I enrolled but after I decided to take it I don't regret it. It's more than what I thought I wanted. I developed a growth mindset which consequentially has motivated me to... work on my dream job. Im closer to my goal than I have ever been before. Thank you I.C.S.",
    author: "Jose R.",
    location: "US - Sep 16, 2023, via Trustpilot"
  },
  {
    title: "A game-changing course!",
    content: "Fantastic! There are many more superlatives I can use to describe the course, but I'd be writing for a while. After being in a slump in 2021, I came across the course from word of mouth. Slowly after adopting the techniques of the course, I started seeing transformations, I thought that they were unreal! Procrastination no longer exists for me, I'm always on top of my time and tasks, my health is at its prime, and it only continues to get better, and I'm able to learn efficiently and still perform to a good standard. Wonderful course, probably one of the best courses I have taken in my life so far.",
    author: "Vansh J.",
    location: "AU - Aug 01, 2023 via Trustpilot"
  },
  {
    title: "A comprehensive course for students",
    content: "I have been part of the iCanStudy course for over 12 months, and it has completely transformed my approach to learning. I would highly recommend this course to any student who is looking to better themselves. It may require some hard work and effort, but the course can genuinely transform your entire studying power, your grades and possibly even your career! The discord community is extremely active and there are many great ways to gain feedback on your work. The coaches are extremely dedicated and offer extensive feedback which is incredibly valuable. I would genuinely recommend this course to anyone, so if you're on the fence, trust me and take the leap of faith!",
    author: "Emil E.",
    location: "AU - April 29, 2023 via Trustpilot"
  },
  {
    title: "Thank god Justin appeared on my homepage",
    content: "The best course. The best formation. Let's not talk about what's in the course because the overwhelming amount of knowledge & effort that was put in it would make eloquent people struggle to define it in a single sentence. Let's just say that the Head of learning (Dr. Justin Sung) designed this course TRULY not focusing on money but more on solving all the issues most learners have... I often say to my self that some of the things I can now do would have taken me LITERALLY 1 or 2 years to achieve by myself. However, this thing is not easy. If you want easy, you'll waste your time.",
    author: "Ali",
    location: "CA - Nov 11, 2023 via Trustpilot"
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
                <div className="flex items-center mb-4">
                  <Image src="/placeholder.svg" alt={testimonial.author} width={50} height={50} className="rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.title}</h3>
                    <p className="text-sm text-gray-600">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="mb-4">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

