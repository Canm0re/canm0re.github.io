import { Hero } from '../components/Hero'
import { StudyHabits } from '../components/StudyHabits'
import { Benefits } from '../components/Benefits'
import { StudentResults } from '../components/StudentResults'
import { Features } from '../components/Features'
import { ProgramDetails } from '../components/ProgramDetails'
import { ValuableSkills } from '../components/ValuableSkills'
import { Bonuses } from '../components/Bonuses'
import { Pricing } from '../components/Pricing'
import { ButWaitTheresMore } from '../components/ButWaitTheresMore'
import { FAQ } from '../components/FAQ'
import { CTA } from './components/CTA'
import { PricingCTA } from './components/PricingCTA'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero />
        <StudyHabits />
        <Benefits />
        <StudentResults />
        <Features />
        <ProgramDetails />
        <ValuableSkills />
        <Bonuses />
        <div className="my-16" />
        <Pricing />
        <ButWaitTheresMore />
        <PricingCTA />
        <FAQ />
        <CTA />
      </main>
    </div>
  )
}

