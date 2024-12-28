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
import Guarantee from '@/components/Guarantee'
import Results from '@/components/Results'
import ExpandedTestimonials from '@/components/ExpandedTestimonials'
import ProgramStructure from '@/components/ProgramStructure'
import Applicability from '@/components/Applicability'
import NotForYou from '@/components/NotForYou'
import EnrollNow from '@/components/EnrollNow'
import CTAButton from '@/components/CTAButton'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <Story />
        <div className="text-center py-8">
          <CTAButton text="Start Your Learning Journey" href="#pricing" />
        </div>
        <Challenges />
        <Benefits />
        <div className="text-center py-8">
          <CTAButton text="Discover Our Program" href="#program-structure" />
        </div>
        <CostIntroduction />
        <Pricing />
        <MembershipIncludes />
        <Guarantee />
        <Results />
        <div className="text-center py-8">
          <CTAButton text="Join Our Community" href="#enroll" />
        </div>
        <ExpandedTestimonials />
        <ProgramStructure />
        <div className="text-center py-8">
          <CTAButton text="Start Your Transformation" href="#enroll" />
        </div>
        <Applicability />
        <NotForYou />
        <EnrollNow />
        <Testimonials />
        <ProgramOverview />
        <FAQ />
        <EnrollNow />
      </main>
      <Footer />
    </div>
  )
}

