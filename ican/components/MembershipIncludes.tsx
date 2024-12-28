import { CheckCircle } from 'lucide-react'

const features = [
  "**Gain 10 years of learning wisdom in 10 minutes.** Discover the learning habits that help or hinder you. Complete your personalised learning diagnostic assessment to gain insights that take most people several years.",
  "**Master the methods of high-efficiency learning** with _70+ lessons_ on evidence-based learning strategies to save you time and get you better results.",
  "**Develop deep focus and eliminate procrastination** with _15 tried-and-tested techniques_ for improving concentration, time management and enhancing motivation.",
  "**Live support and feedback** from our coaches and community, including free access to _exclusive monthly interactive workshops_ by Dr Justin Sung (only for our members).",
  "**Our supportive, global community of over 10,000 like-minded learners**"
]

export default function MembershipIncludes() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What's included in your membership?</h2>
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-green-500 mr-4 flex-shrink-0 mt-1" />
                <span dangerouslySetInnerHTML={{ __html: feature.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/_(.*?)_/g, '<em>$1</em>') }} />
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <a href="#" className="text-blue-600 hover:underline">Learn more about what's included</a>
          </div>
        </div>
      </div>
    </section>
  )
}

