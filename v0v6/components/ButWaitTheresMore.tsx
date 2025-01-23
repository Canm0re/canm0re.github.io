'use client'

import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";

const learnerTypeData = [
  { dimension: "Deep Processing", value: 80 },
  { dimension: "Self-Regulation", value: 90 },
  { dimension: "Mindset", value: 85 },
  { dimension: "Self-Management", value: 75 },
  { dimension: "Retrieval Practice", value: 95 },
];

export function ButWaitTheresMore() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">But Wait, There&apos;s More</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Discover Your Unique Learner Type—and Unlock Your Full Potential</h3>

          <div className="space-y-6 text-lg text-gray-700">
            <p className="font-bold">Here&apos;s the truth:</p>
            <p>Most students struggle because they use study methods that don&apos;t match their <strong>Learner Type</strong>.</p>
            <p>If your using methods that don&apos;t align with your <strong>Learner Type</strong>, you face an uphill battle. But when you match your study techniques to your type, everything becomes easier.</p>
            <p>We&apos;ve seen students who were stuck and frustrated change how they study and achieve <strong>95% or higher</strong> in just one month—just by using methods that match their <strong>Learner Type</strong>.</p>
            <p>It&apos;s like having a cheat code for your brain.</p>
            <p>maybe you&apos;ve heard about students who barely study but still do great...</p>

            <p className="font-bold">What&apos;s their secret?</p>
            <p>It&apos;s not just being smart. It&apos;s about knowing their Learner Type—and using it to their advantage.</p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">What&apos;s a Learner Type?</h4>
            <p>Your Learner Type is based on five core dimensions that determine how efficiently you learn:</p>
            
            <div className="w-full h-[300px] my-8">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={learnerTypeData} margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis 
                    dataKey="dimension" 
                    tick={{ fill: '#4B5563', fontSize: 14 }}
                  />
                  <Radar
                    name="Dimension Score"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                    dot
                    activeDot={{ r: 8 }}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Deep Processing:</strong> Your ability to think critically, make connections, and understand complex ideas.</li>
              <li><strong>Self-Regulation:</strong> Your ability to monitor and adapt your learning methods to achieve your goals.</li>
              <li><strong>Mindset:</strong> Your resilience and willingness to learn from mistakes.</li>
              <li><strong>Self-Management:</strong> Your ability to organize, plan, and stay consistent.</li>
              <li><strong>Retrieval Practice:</strong> How effectively you retain and recall information.</li>
            </ul>
            <p>These dimensions combine to create your unique Learner Type—and once you know yours, you can stop wasting time on methods that don&apos;t work for you.</p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Why This Matters:</h4>
            <p>Most students fall into one of four Learner Types:</p>
            <div className="my-8">
              <AnimatedTestimonials
                testimonials={[
                  {
                    quote: "I&apos;m working hard, but my grades don&apos;t reflect it… Am I just not smart enough?",
                    name: "The Unchained",
                    designation: "The High-Potential Student",
                    src: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    transformation: "We&apos;ll help you: Rewire limiting beliefs using neuroscience-backed mindset techniques. Learn how top students triple their retention rates while studying less.",
                    flipContent: "Break free from self-doubt and unlock rapid growth. Walk into exams feeling unstoppable."
                  },
                  {
                    quote: "I&apos;m putting in the hours, but nothing sticks… Why am I still struggling?",
                    name: "The Sprout",
                    designation: "The Determined Builder",
                    src: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    transformation: "We&apos;ll help you: Master the 3 foundational habits of IB/IGCSE toppers. Turn chaotic cramming into strategic learning sessions that stick.",
                    flipContent: "Grow strong roots for unstoppable success so you can finally see your efforts translate into 95%+ scores."
                  },
                  {
                    quote: "I never miss a study session… So why do exams still surprise me?",
                    name: "The Trooper",
                    designation: "The Disciplined Optimizer",
                    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    transformation: "We&apos;ll help you: Replace surface-level memorization with deep processing frameworks used by medical students. Crack complex subjects like physics and calculus with ease.",
                    flipContent: "Upgrade from hard work to smart mastery. Transform the panic of &apos;I studied this!&apos; into the confidence of &apos;I own this!&apos;"
                  },
                  {
                    quote: "I understand the concepts… So why can&apos;t I stay focused long enough to prove it?",
                    name: "The Visionary",
                    designation: "The Scattered Genius",
                    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    transformation: "We&apos;ll help you: Master the Focus Funnel System—used by chess prodigies and startup CEOs—to transform scattered insights into unstoppable momentum.",
                    flipContent: "Channel your brilliance into consistent excellence. Transform &apos;I get it&apos; into &apos;I aced it&apos; in just 30 days."
                  },
                ]}
              />
            </div>

            <p className="font-bold">Here&apos;s the kicker:</p>
            <p>If you&apos;re using methods that don&apos;t align with your Learner Type, you&apos;re fighting an uphill battle. But when you match your study techniques to your type, everything becomes easier.</p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Here&apos;s the Solution:</h4>
            <p>The moment you join the Nord Community; you&apos;ll get access to our exclusive Learner Type Assessment.</p>
            <p>This isn&apos;t just another quiz—it&apos;s a science-backed tool that will:</p>
            <ul className="list-disc pl-5 space-y-2">
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">What You&apos;ll Get:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Your Personalized Learner Type Report</strong>—a detailed breakdown of your strengths and weaknesses. so you can stop wasting time on methods that don&apos;t work for you.</li>
              <li><strong>Help you achieve faster results</strong>—because when you&apos;re working with your brain, not against it, everything becomes easier.</li>
              <li><strong>Access to Exclusive Resources</strong>—like deep processing exercises, self-regulation frameworks, and mindset training.</li>
              <li><strong>Custom Study Strategies</strong>—tailored to your unique learning profile.</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Here&apos;s the Best Part:</h4>
            <p>This assessment is 100% free when you join the Nord Community today.</p>
            <p>But don&apos;t wait—this exclusive tool is only available to founding members. Once the 10 spots are gone, the doors close.</p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Ready to Unlock Your Full Potential?</h4>
            <p>Click the button below to join the Nord Community, take the Learner Type Assessment, and start studying smarter today.</p>
            <p className="font-bold mb-8">Only 10 Spots Left—Don&apos;t Miss Out!</p>

            <div className="text-center">
              <button
                className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Join Now
              </button>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mt-16 mb-8">4 Reasons you shouldn&apos;t join:</h2>
          <ol className="list-decimal pl-5 space-y-4 text-lg text-gray-700 mb-8">
            <li>The community is on a new platform. We&apos;ve NEVER tested it before. YOU are the guinea pig.</li>
            <li>There&apos;s NOTHING happening inside except for a library of content and a couple of weekly calls with this guy named Awab. Bummer right? And also, a couple of exercises. So what...?</li>
            <li>It&apos;s $47 PER month. Not a one off. $47. Every-single-month. Can you imagine?</li>
            <li>There are only 10 spots. You&apos;re probably not even gonna be able to get in on time.</li>
          </ol>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">This Is NOT A Good Fit For:</h2>
          <ul className="list-none space-y-4 text-lg text-gray-700 mb-8">
            <li>❌ <strong>For those not willing to put in the time and effort...</strong></li>
            <li>❌ For those who think this will change their lives overnight. <strong>It won&apos;t.</strong></li>
            <li>❌ For those looking for a magic bullet.</li>
            <li>❌ For anyone who expects to learn everything in 3 days and leave. <strong>This is a process. And it will take me time to transfer the information from my head to yours.</strong></li>
          </ul>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">This Is For You Only If You&apos;re The Early-Adaptor Type</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">So Only Join If You Understand This:</h3>
          <p className="text-lg text-gray-700 mb-4"><strong>I&apos;m over-delivering by a ton</strong> with the free course AND the information that&apos;s ALREADY inside the community. Not to mention the live calls and everything else...</p>
          <p className="text-lg text-gray-700 mb-4">But it MIGHT seem like the community is still underdeveloped. And you wouldn&apos;t be wrong.</p>
          <p className="text-lg text-gray-700 mb-8"><strong>But hey. I believe in transparency</strong>. <u>What you see is what you get.</u></p>
          <p className="text-lg text-gray-700 mb-8">So, if you&apos;re ready to be a founding member of the Nord Community?</p>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Here&apos;s how you get access right NOW:</h2>
          <ol className="list-decimal pl-5 space-y-4 text-lg text-gray-700 mb-8">
            <li>Pick one of the two options below</li>
            <li>Click the button under it</li>
            <li><strong>Get immediate access to BOTH the community AND the course.</strong></li>
          </ol>

          <p className="text-xl font-bold text-gray-900 mb-4">So...</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Your Future Starts Now.</h2>
          <p className="text-lg text-gray-700 mb-8">Click the button below to join the Nord Community and start achieving better grades with less effort. Don&apos;t let this opportunity pass you by—<strong>enroll today!</strong></p>
        </div>
      </div>
    </div>
  )
}

