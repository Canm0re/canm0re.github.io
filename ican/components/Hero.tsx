import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6 leading-tight text-primary">
          Save hours every week on studying.<br />
          Achieve more with less effort
        </h1>
        <h2 className="text-xl mb-8 text-primary">
          Discover <em>proven strategies</em> that top learners use to get better results in less time. See results in less than 30 days.
        </h2>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Enrol Today</Button>
      </div>
    </section>
  )
}

