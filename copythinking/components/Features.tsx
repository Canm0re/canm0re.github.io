const experts = [
  {
    name: "Josh Waitzkin",
    role: "Chess prodigy, martial arts champion, and author of The Art of Learning",
    image: "/placeholder.svg?height=400&width=400",
    description: (
      <>
        <p>This guy found the secret to dominating any field.</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Chess prodigy aged 11</li>
          <li>Martial arts champ at 28</li>
          <li>Bestselling author at age 31</li>
        </ul>
        <p className="mt-2">The world's elite pay millions for his advice.</p>
        <p className="mt-2">He's a chess Grandmaster, Jiu Jitsu Blackbelt, Tai Chi world champion, and now paddle surfing and foiling.</p>
        <p className="mt-2">Josh spends his time coaching many of the world's top performers in many different fields.</p>
        <p className="mt-2">The movie "Searching for Bobby Fischer" was based on his life.</p>
        <p className="mt-2">But his real superpower? Decoding the art of learning itself.</p>
        <p className="mt-2">Waitzkin wrote 'The Art of Learning' — which transformed thousands of lives.</p>
        <p className="mt-2">As Josh has put it: "I've come to realize that what I am best at is not Tai Chi, and it is not chess. What I am best at is the art of learning."</p>
      </>
    )
  },
  {
    name: "Justin Sung",
    role: "Creator of icanStudy a research backed system of learning",
    image: "/placeholder.svg?height=400&width=400",
    description: (
      <>
        <p className="font-bold">Helped 15,000+ people improve their results and reduce their study time</p>
        <blockquote className="border-l-4 border-gray-300 pl-4 mt-4 italic">
          I remembered walking out of a lecture after week 1 telling myself, "There is no way I can keep up anymore…"...

          I knew <em>I needed a better approach</em> if I wanted to do well without repeating last year's struggles.

          Over the next few years, I dove into thousands of research papers on learning, constantly building on the techniques I'd picked up from medicine.

          Eventually, I was confident enough to teach what I had refined to the students I tutored, and it worked!

          This obsession led me back to university, where I completed a Master's in Education <strong>scoring the highest grade in every paper</strong> and was awarded the Dean's award for the top graduating student in the program.

          <em>And I only studied a few hours a day for 6 weeks…</em>

          I discovered that many students, like myself, were stuck in a cycle of intense work, inconsistent results, and anxiety. 

          <strong>The methods we were using were inefficient and unsustainable.</strong> 

          Recognizing this, I left my medical career to teach these effective learning skills full-time.
        </blockquote>
      </>
    )
  },
  {
    name: "Scott H. Young",
    role: "Famous for Teaching himself MIT's 4 year Computer Science curriculum in 1 year and learning four languages in one year",
    image: "/placeholder.svg?height=400&width=400",
    description: (
      <>
        <p className="font-bold">He is also a teacher with online courses on learning and the author of best selling book Ultralearning</p>
        <p className="mt-2">Read and written about the subject of learning for over a decade.</p>
        <p className="mt-2">Explores why it's so difficult for people to learn new skills, arguing that three factors must be met to make advancement possible, and offering 12 maxims to improve the way we learn.</p>
      </>
    )
  }
];

export function Features() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Don't let poor study methods hold you back. Discover a better way to learn.</h2>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Imagine if you could...</h2>
        <ul className="space-y-4 text-lg">
          <li>
            <strong>Make memory a choice.</strong> If you want to remember something, you can simply cause it to happen: just take a few moments to write a question about it. Over the next few weeks, you'll encode it durably into long-term memory.
          </li>
          <li>
            Process lessons during class and remember for longer so that you study Less.
          </li>
          <li>
            Use evidence-based <em>note-taking techniques</em> that deepen understanding (that don't take all day)
          </li>
        </ul>

        <p className="mt-8 text-lg text-gray-700">
          Those MIGHT look like over-the-top promises. I understand that.
        </p>
        <p className="mt-4 text-xl font-bold text-gray-900">
          But they are not promises. They're just <span className="text-indigo-600">SKILLS</span>.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Skills I've been learning for 5 years.
          All while walking the walk and using those skills on a daily basis myself.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          You see...
        </p>
        <h2 className="mt-8 text-3xl font-extrabold text-gray-900">
          All I Offer Is A Glimpse Into The World of Hyper-learning
        </h2>
        <p className="mt-4 text-xl font-bold text-gray-900">
          The Nord Program is a science-backed system that helps you:
        </p>
        <ul className="mt-4 space-y-2 text-lg">
          <li><strong>Study 50% less</strong> while <strong>scoring 95% or higher</strong> on exams.</li>
          <li><strong>Retain information longer</strong> with proven memory techniques.</li>
          <li><strong>Reduce stress</strong> and <strong>regain control</strong> of your academic life.</li>
        </ul>
        <p className="mt-8 text-lg text-gray-700">
          Look. I spent 5 years of trial and error to figure out how to learn with true efficiency. I want you to learn that in less than <strong>1/10th</strong> of the time.
        </p>
        <p className="mt-4 text-xl font-bold text-gray-900">
          In the last 5 years I used this skill to do some incredible things. Including:
        </p>
        <ul className="mt-4 space-y-2 text-lg">
          <li>Building an $8.5M e-Commerce store</li>
          <li><strong>Selling close to $1M of my own course within just over 3 months (with 52% profit and ZERO organic audience)</strong></li>
          <li>Spending more than $10M on FB ads PROFITABLY -- using BOOTSTRAPPED money. No investors</li>
          <li><strong>Helping a client of mine build TWO 8-figure info-businesses</strong></li>
          <li>Beating dozens of copy controls for SaaS and info-business clients (some by 10X) -- Controls written by HUGE copywriting and FB ads agencies...</li>
        </ul>
        <p className="mt-8 text-lg text-gray-700">
          But hey. That's enough about me.
        </p>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Meet the Experts Behind the Nord Program</h2>
        <div className="mt-12 space-y-12">
          {experts.map((expert) => (
            <div key={expert.name} className="space-y-4">
              <img className="w-full h-64 object-cover rounded-lg" src={expert.image} alt={expert.name} />
              <div>
                <h3 className="text-2xl font-bold">{expert.name}</h3>
                <p className="text-xl text-indigo-600">{expert.role}</p>
              </div>
              <div className="text-gray-700">{expert.description}</div>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-8">These experts have cracked the code to mastering any subject—and now, you can too.</h2>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Here's the Truth: I'm Not an Expert—I'm a Curator of Expertise.</h2>

          <p className="text-lg text-gray-700">
            I've spent <strong>5 years</strong> diving deep into the science of learning. I've read every book, taken every course, and tested every technique—from Josh Waitzkin's <em>The Art of Learning</em> to Justin Sung's <em>icanStudy</em> system. I've even implemented Scott H. Young's <em>Ultralearning</em> principles in my own life.
          </p>

          <p className="text-lg text-gray-700">
            But here's the problem: <strong>Most students don't have 5 years to waste figuring this out.</strong>
          </p>

          <p className="text-lg text-gray-700">
            That's why I created the <strong>Nord Program</strong>.
          </p>

          <p className="text-lg text-gray-700">
            I've done the hard work for you—sifting through the noise, testing what works, and compiling the <strong>best, science-backed strategies</strong> into one simple system.
          </p>

          <p className="text-lg text-gray-700">
            Think of me as your <strong>learning concierge</strong>. I've gathered the most effective tools, techniques, and frameworks from the world's top experts—so you don't have to.
          </p>

          <h3 className="text-2xl font-bold text-gray-900">Here's what that means for you:</h3>

          <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
            <li><strong>No more guesswork.</strong> You'll know exactly what to do to study smarter, not harder.</li>
            <li><strong>No more wasted time.</strong> You'll skip the trial-and-error phase and go straight to results.</li>
            <li><strong>No more stress.</strong> You'll have a proven system that works—whether you're studying for IGCSE, IB, or any other high-stakes exam.</li>
          </ul>

          <p className="text-lg text-gray-700">
            This isn't just another "study tips" program. It's a <strong>curated, science-backed roadmap</strong> to academic success—designed specifically for students like you.
          </p>
        </div>
        
      </div>
    </div>
  )
}

