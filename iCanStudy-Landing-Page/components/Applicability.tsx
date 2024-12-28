export default function Applicability() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">So, does it work for my subject or curriculum?</h2>
        <p className="mb-8">Our academic program is suitable for a very wide range of domains and circumstances. This is because the techniques are built on fundamental methods of human processing, rather than superficial, subject-specific tips or tricks.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">For subjects:</h3>
            <p className="mb-4">It is most effective for subjects that are heavy, conceptual or detailed. For example:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>sciences</li>
              <li>medicine</li>
              <li>maths</li>
              <li>anatomy</li>
              <li>philosophy</li>
              <li>english</li>
              <li>economics</li>
              <li>law/politics</li>
              <li>coding</li>
            </ul>
            <p className="mt-4">It is <em>least effective</em> for highly procedural domains such as music performance, dance and (partially) languages.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">For curriculums:</h3>
            <p className="mb-4">We have learners using our program successfully for the following curriculums:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>MCAT</li>
              <li>IGCSE/GCSE</li>
              <li>A-levels</li>
              <li>IB</li>
              <li>USMLE</li>
              <li>UPSC</li>
              <li>JEE</li>
              <li>NEET</li>
              <li>SAT</li>
            </ul>
            <p className="mt-4">There are also many learners studying for professional certifications like <em>CA/CPA/CFA</em> examinations, <em>medical and surgical specialization exams</em>, and <em>software</em> certifications.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

