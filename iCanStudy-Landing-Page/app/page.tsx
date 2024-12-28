import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Challenges from '@/components/Challenges'
import Benefits from '@/components/Benefits'
import CostIntroduction from '@/components/CostIntroduction'
import Pricing from '@/components/Pricing'
import MembershipIncludes from '@/components/MembershipIncludes'
import Testimonials from '@/components/Testimonials'
import ProgramOverview from '@/components/ProgramOverview'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Story />
        <Challenges />
        <Benefits />
        <CostIntroduction />
        <Pricing />
        <MembershipIncludes />
        <Testimonials />
        <ProgramOverview />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

