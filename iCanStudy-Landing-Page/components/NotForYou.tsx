export default function NotForYou() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Who is this program <em>not</em> for?</h2>
        <p className="mb-4">We do <strong>not</strong> recommend this program if...</p>
        <ul className="space-y-4">
          <li>
            <strong>You're not ready to put in the time and effort...</strong>
            <p>You will need to commit to at least <em>2 hours of theory and reflection per week</em> (and practice what you learn in your normal daily studying).</p>
          </li>
          <li>
            <strong>You're not willing to try something new and experiment with your learning...</strong>
            <p>Changing your learning habits can be <em>uncomfortable and challenging</em>.</p>
          </li>
          <li>
            <strong>You're not willing to make any mistakes...</strong>
            <p>Learning something new always involves <em>making mistakes and learning from them</em>.</p>
          </li>
          <li>
            <strong>You're looking for a magic bullet or a "get-smart-quick" scheme...</strong>
            <p>There's <em>no secret shortcut</em> or overnight solution to academic excellence.</p>
          </li>
        </ul>
        <p className="mt-8 text-center font-bold">It's not easy, but it is worth it</p>
      </div>
    </section>
  )
}

