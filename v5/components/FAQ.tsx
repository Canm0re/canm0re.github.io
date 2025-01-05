'use client'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const faqs = [
  {
    question: "What kind of activities will I get the chance to join in the community?",
    answer: (
      <div className="space-y-4">
        <p className="text-base text-gray-500">We have a <strong>pre-built library of content</strong> inside, covering everything from advanced note-taking techniques to stress management systems. But that's just the beginning.</p>
        
        <p className="text-base text-gray-500 font-bold">Here's what else you'll get:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-base text-gray-500"><strong>Weekly live calls:</strong> Get personalized guidance, ask questions, and see real-time demonstrations of study techniques.</li>
          <li className="text-base text-gray-500"><strong>Ongoing discussions:</strong> Connect with other members, share tips, and troubleshoot challenges together.</li>
          <li className="text-base text-gray-500"><strong>Monthly cohorts:</strong> Dive deep into specific topics with focused, hands-on learning.</li>
        </ul>

        <p className="text-base text-gray-500 font-bold">Here are some examples of monthly cohorts we'll be running:</p>
        <ol className="list-decimal pl-5 space-y-4">
          <li className="text-base text-gray-500">
            <strong>"Mastering Memory: How to Retain Anything in Half the Time"</strong>
            <ul className="list-disc pl-5 mt-2">
              <li>Learn advanced memory techniques like the <em>Memory Palace</em> and <em>Spaced Repetition</em>.</li>
              <li>Apply these techniques to your current subjects and see immediate results.</li>
            </ul>
          </li>
          <li className="text-base text-gray-500">
            <strong>"The Procrastination Killer: Build Focus and Crush Deadlines"</strong>
            <ul className="list-disc pl-5 mt-2">
              <li>Discover the <em>V-ABC Framework</em> to overcome distractions and stay on track.</li>
              <li>Create a personalized productivity plan that works for your schedule.</li>
            </ul>
          </li>
          <li className="text-base text-gray-500">
            <strong>"Exam Bootcamp: Ace Your Next Test with Confidence"</strong>
            <ul className="list-disc pl-5 mt-2">
              <li>Learn how to <em>strategically review material</em> and <em>manage exam stress</em>.</li>
              <li>Practice mock exams and get feedback from peers and coaches.</li>
            </ul>
          </li>
          <li className="text-base text-gray-500">
            <strong>"Time Management for Students: Balance School, Life, and Fun"</strong>
            <ul className="list-disc pl-5 mt-2">
              <li>Master tools like the <em>Eisenhower Matrix</em> and <em>Time Blocking</em>.</li>
              <li>Build a schedule that gives you more free time while boosting your grades.</li>
            </ul>
          </li>
          <li className="text-base text-gray-500">
            <strong>"Note-Taking Ninja: Transform Your Notes into a Learning Powerhouse"</strong>
            <ul className="list-disc pl-5 mt-2">
              <li>Explore advanced methods like <em>Mind Mapping</em> and <em>Cornell Notes</em>.</li>
              <li>Turn your notes into a study resource that actually works.</li>
            </ul>
          </li>
          <li className="text-base text-gray-500">
            <strong>"The Science of Motivation: Stay Driven Even When It's Tough"</strong>
            <ul className="list-disc pl-5 mt-2">
              <li>Learn how to <em>hack your brain's reward system</em> to stay motivated.</li>
              <li>Create a personalized motivation plan for long-term success.</li>
            </ul>
          </li>
        </ol>

        <p className="text-base text-gray-500 font-bold">And here's the best part: You get to shape the community.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-base text-gray-500">Suggest new cohort topics.</li>
          <li className="text-base text-gray-500">Vote on what we cover next.</li>
          <li className="text-base text-gray-500">Collaborate with other members to create resources and tools.</li>
        </ul>

        <p className="text-base text-gray-500 font-bold">This isn't just a program—it's a living, breathing community designed to help you succeed.</p>
      </div>
    )
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "No. We're confident in the value we provide, and our results speak for themselves."
  },
  {
    question: "Is there a difference between the subscription and 12-month option?",
    answer: "The only difference currently is how much it costs. You get 56.2% off when paying for 12 months, and you get 53% off when subscribing."
  },
  {
    question: "What does the community actually look like inside?",
    answer: "Weekly live coaching, a library of resources, and personalized support to help you succeed."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel anytime. But trust us—once you see the results, you won't want to."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <dt className="text-lg">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="flex justify-between items-start text-left w-full focus:outline-none"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      {openIndex === index ? (
                        <ChevronUpIcon className="h-6 w-6 text-indigo-500" />
                      ) : (
                        <ChevronDownIcon className="h-6 w-6 text-indigo-500" />
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-2 pr-12">
                    {typeof faq.answer === 'string' ? (
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

