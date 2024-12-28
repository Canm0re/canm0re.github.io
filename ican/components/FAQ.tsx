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
    answer: "We understand the skepticism, which is why our program is backed by years of research and practical application. We've helped thousands of students improve their study habits and achieve their academic goals. Plus, we offer a 30-Day Money Back Guarantee if you attempt the program and are not satisfied."
  },
  {
    question: "What if I'm already using another study method or program?",
    answer: "Our techniques are designed to complement and enhance any existing study methods you might be using. Many of our students have successfully integrated our strategies with other programs to achieve even better results."
  },
  {
    question: "What makes this program different from other courses?",
    answer: "Our program is based on a deep examination of research combined with our industry-leading level of coaching experience. Many studying courses focus on superficial techniques that only work for some (usually already high-achieving) students or only work in theory. Our data from over 10,000 learners shows that our techniques and methods are effective for over 90% of students who commit to practicing them."
  },
  {
    question: "What kind of support will I receive during the program?",
    answer: "You'll have access to a community of supportive, like-minded learners and support from experienced coaches. You can ask for help from our support team 24/7, including direct escalation to Dr. Justin Sung for nuanced or complex challenges for free."
  },
  {
    question: "How do I know if this program is the right fit for me?",
    answer: "This program is not \"effortless\" or a \"get-smart-quick\" scheme. But if you're serious about improving your academic results, confidence, and consistency, and you're willing to put in the work to develop these skills, this program is for you."
  }
]

export default function FAQ() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-primary">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
          <p>Send us your question to <a href="mailto:help@icanstudy.com" className="text-primary hover:underline">help@icanstudy.com</a> and we'll do our best to help 😊</p>
        </div>
      </div>
    </section>
  )
}

