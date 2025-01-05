import Link from 'next/link'
import { useEffect } from 'react';

export function ButWaitTheresMore() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">But Wait, There's More</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Discover Your Unique Learner Type—and Unlock Your Full Potential</h3>

          <div className="space-y-6 text-lg text-gray-700">
            <p className="font-bold">Here's the truth:</p>
            <p>Most students are stuck in a cycle of frustration because they're using study methods that don't align with their Learner Type.</p>
            <p>You've probably tried copying what top students do—only to find it doesn't work for you. Or maybe you've heard stories of students who barely study but still ace their exams.</p>

            <p className="font-bold">What's their secret?</p>
            <p>It's not just raw talent or intelligence. It's about understanding their Learner Type—and using it to their advantage.</p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">What's a Learner Type?</h4>
            <p>Your Learner Type is based on five core dimensions that determine how efficiently you learn:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Deep Processing:</strong> Your ability to think critically, make connections, and understand complex ideas.</li>
              <li><strong>Self-Regulation:</strong> Your ability to monitor and adapt your learning methods to achieve your goals.</li>
              <li><strong>Mindset:</strong> Your resilience and willingness to learn from mistakes.</li>
              <li><strong>Self-Management:</strong> Your ability to organize, plan, and stay consistent.</li>
              <li><strong>Retrieval Practice:</strong> How effectively you retain and recall information.</li>
            </ul>
            <p>These dimensions combine to create your unique Learner Type—and once you know yours, you can stop wasting time on methods that don't work for you.</p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Why This Matters:</h4>
            <p>Most students fall into one of four Learner Types:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>The Unchained:</strong> Limited by mindset, but once they break free, they experience rapid growth.</li>
              <li><strong>The Sprout:</strong> High growth mindset but low deep processing and self-regulation—they need to build strong foundations.</li>
              <li><strong>The Trooper:</strong> High self-regulation but limited by deep processing—they need to refine their cognitive habits.</li>
              <li><strong>The Karp:</strong> High deep processing but low self-regulation—they're like Magikarp waiting to evolve into Gyarados.</li>
            </ul>

            <p className="font-bold">Here's the kicker:</p>
            <p>If you're using methods that don't align with your Learner Type, you're fighting an uphill battle. But when you match your study techniques to your type, everything becomes easier.</p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Here's the Solution:</h4>
            <p>The moment you join the Nord Community, you'll get access to our exclusive Learner Type Assessment.</p>
            <p>This isn't just another quiz—it's a science-backed tool that will:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Identify your unique Learner Type—so you can stop wasting time on methods that don't work for you.</li>
              <li>Give you a personalized roadmap—tailored to your strengths and weaknesses, so you can study smarter, not harder.</li>
              <li>Help you achieve faster results—because when you're working with your brain, not against it, everything becomes easier.</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Here's What Happens When You Discover Your Learner Type:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Unchained Learners:</strong> Break free from limiting beliefs and unlock rapid growth.</li>
              <li><strong>Sprouts:</strong> Build strong foundations with proven techniques for deep processing and self-regulation.</li>
              <li><strong>Troopers:</strong> Refine your cognitive habits to get the most out of your study methods.</li>
              <li><strong>Karps:</strong> Evolve into your full potential by mastering self-regulation and retrieval practice.</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Why This Works:</h4>
            <p>We've seen students who were stuck and frustrated transform their study process and achieve 95% or higher in just one month—simply by aligning their study methods with their Learner Type.</p>
            <p>It's like having a cheat code for your brain.</p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Here's the Best Part:</h4>
            <p>This assessment is 100% free when you join the Nord Community today.</p>
            <p>But don't wait—this exclusive tool is only available to founding members. Once the 10 spots are gone, the doors close.</p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">What You'll Get:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your Personalized Learner Type Report—a detailed breakdown of your strengths and weaknesses.</li>
              <li>Custom Study Strategies—tailored to your unique learning profile.</li>
              <li>Access to Exclusive Resources—like deep processing exercises, self-regulation frameworks, and mindset training.</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Ready to Unlock Your Full Potential?</h4>
            <p>Click the button below to join the Nord Community, take the Learner Type Assessment, and start studying smarter today.</p>
            <p className="font-bold mb-8">Only 10 Spots Left—Don't Miss Out!</p>

            <div className="text-center">
              <Link
                href="#pricing"
                className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Join Now
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mt-16 mb-8">4 Reasons you shouldn't join:</h2>
          <ol className="list-decimal pl-5 space-y-4 text-lg text-gray-700 mb-8">
            <li>The community is on a new platform. We've NEVER tested it before. YOU are the guinea pig.</li>
            <li>There's NOTHING happening inside except for a library of content and a couple of weekly calls with this guy named Awab. Bummer right? And also a couple of exercises. So what...?</li>
            <li>It's $47 PER month. Not a one off. $47. Every-single-month. Can you imagine?</li>
            <li>There are only 10 spots. You're probably not even gonna be able to get in on time.</li>
          </ol>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">This Is NOT A Good Fit For:</h2>
          <ul className="list-none space-y-4 text-lg text-gray-700 mb-8">
            <li>❌ <strong>For those not willing to put in the time and effort...</strong></li>
            <li>❌ For those who think this will change their lives overnight. <strong>It won't.</strong></li>
            <li>❌ For those looking for a magic bullet.</li>
            <li>❌ For anyone who expects to learn everything in 3 days and leave. <strong>This is a process. And it will take me time to transfer the information from my head to yours.</strong></li>
          </ul>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">This Is For You Only If You're The Early-Adaptor Type</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">So Only Join If You Understand This:</h3>
          <p className="text-lg text-gray-700 mb-4"><strong>I'm over-delivering by a ton</strong> with the free course AND the information that's ALREADY inside the community. Not to mention the live calls and everything else...</p>
          <p className="text-lg text-gray-700 mb-4">But it MIGHT seem like the community is still underdeveloped. And you wouldn't be wrong.</p>
          <p className="text-lg text-gray-700 mb-8"><strong>But hey. I believe in transparency</strong>. <u>What you see is what you get.</u></p>
          <p className="text-lg text-gray-700 mb-8">So if you're ready to be a founding member of the Nord Community?</p>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Here's how you get access right NOW:</h2>
          <ol className="list-decimal pl-5 space-y-4 text-lg text-gray-700 mb-8">
            <li>Pick one of the two option below</li>
            <li>Click the button under it</li>
            <li><strong>Get immediate access to BOTH the community AND the course.</strong></li>
          </ol>

          <p className="text-xl font-bold text-gray-900 mb-4">So...</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Your Future Starts Now.</h2>
          <p className="text-lg text-gray-700 mb-8">Click the button below to join the Nord Community and start achieving better grades with less effort. Don't let this opportunity pass you by—<strong>enroll today!</strong></p>
        </div>
      </div>
    </div>
  )
}

