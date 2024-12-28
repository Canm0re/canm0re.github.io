import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do I need to have any prior knowledge before taking the iCanStudy Academic Program?",
    answer: "No prior knowledge is required. Our program is designed to help students of all levels, from high school to graduate students and lifelong learners. Whether you're struggling with basic study habits or looking to refine advanced techniques, we have you covered."
  },
  {
    question: "How can I be sure this program will be effective for me?",
    answer: "We understand the scepticism, which is why our program is backed by years of research and practical application. We've helped thousands of students improve their study habits and achieve their academic goals. Plus, we offer a 30-Day Money Back Guarantee if you attempt the program and are not satisfied."
  },
  {
    question: "What if I'm already using another study method or program?",
    answer: "Our techniques are designed to complement and enhance any existing study methods you might be using. Many of our students have successfully integrated our strategies with other programs to achieve even better results."
  }
]

export default function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

