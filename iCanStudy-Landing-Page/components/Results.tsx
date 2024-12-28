export default function Results() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">The proof is in the data</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">In just 4 weeks...</h3>
            <ul className="space-y-2">
              <li><strong>77%</strong> have cut down necessary study time by 30% or more</li>
              <li><strong>64%</strong> experience "significantly less" procrastination</li>
              <li><strong>96%</strong> feel more confident to achieve their academic goals</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">In 5 months...</h3>
            <ul className="space-y-2">
              <li><strong>95%</strong> have cut down necessary study time by 30% or more</li>
              <li><strong>91%</strong> experience "significantly less" procrastination</li>
              <li><strong>98%</strong> feel more confident to achieve their academic goals (and 71% have achieved over 95% in exams)</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center font-bold">Rated 4.7/5 based on 295 reviews on Trustpilot</p>
      </div>
    </section>
  )
}

