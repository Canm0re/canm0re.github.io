'use client'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const faqs = [
  {
    question: "Who is this for?",
    answer: (
      <div className="space-y-4">
        <p className="text-base text-black-500 font-bold">This Is NOT A Good Fit For:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-base text-gray-500"><strong>❌For those not willing to put in the time and effort....</strong></li>
          <li className="text-base text-gray-500"> ❌For those who think this will change their lives overnight. <strong>It won't</strong>.</li>
          <li className="text-base text-gray-500">❌​For anyone who expects to learn everything in 3 days and leave. <strong>This is a process. And it will take me time to transfer the information from my head to yours.</strong></li>
          <li className="text-base text-gray-500">❌For those looking for a magic bullet.</li>
          <li className="text-base text-gray-500"><strong>This Is For You Only If You're The Early Adopter Type</strong></li>
        </ul>
      </div>
    )
  },
  {
    question: "Is there a reason i should NOT join?",
    answer: (
      <div className="space-y-4">
        <ol className="list-disc pl-5 space-y-2">
          <li className="text-base text-gray-500">1. The community is on a new platform. We've NEVER tested it before. YOU are the guinea pig.</li>
          <li className="text-base text-gray-500"> 2. There's NOTHING happening inside except for a library of content and a couple of weekly calls with this guy named Awab. Bummer right? And also a couple of exercises. So what...?</li>
          <li className="text-base text-gray-500">3. It's $47 PER month. Not a one off. $47. Every-single-month. Can you imagine?</li>
          <li className="text-base text-gray-500">4. There are only 10 spots. You're probably not even gonna be able to get in on time.</li>
        </ol>
      </div>
    )
  },
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

