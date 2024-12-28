import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "4-Monthly",
    price: "$167",
    description: "Billed every 4 months. Cancel anytime.",
    features: ["Ideal for flexibility"],
    link: "https://learning.icanstudy.com/public/enrolment?selectedSubscription=4month"
  },
  {
    name: "Yearly (Recommended)",
    price: "$399",
    description: "Billed every 12 months. Cancel anytime.",
    features: ["Pay for 10 months and get 2 months free", "More time, more support, better results"],
    link: "https://learning.icanstudy.com/public/enrolment?selectedSubscription=annual"
  }
]

export default function Pricing() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Program Pricing</h2>
        <p className="text-center mb-8">Next Cohort Starting 28th Dec 11:59 PM PST</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <p className="mb-4">{plan.description}</p>
                <ul className="mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">• {feature}</li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <a href={plan.link}>Enrol {plan.name}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

