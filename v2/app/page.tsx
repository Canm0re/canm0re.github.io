import { Hero } from '../components/Hero'
import { Benefits } from '../components/Benefits'
import { StudentResults } from '../components/StudentResults'
import { Features } from '../components/Features'
import { ProgramDetails } from '../components/ProgramDetails'
import { Bonuses } from '../components/Bonuses'
import { Pricing } from '../components/Pricing'
import { ButWaitTheresMore } from '../components/ButWaitTheresMore'
import { FAQ } from '../components/FAQ'
import { CTA } from '../components/CTA'
import Link from 'next/link'
import { useEffect } from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero />
        <Benefits />
        <StudentResults />
        <Features />
        <ProgramDetails />
        <Bonuses />
        <Pricing />
        <ButWaitTheresMore />
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Ready to Transform Your Learning?</h2>
            <button
              onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
              className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View Pricing Options
            </button>
          </div>
        </div>
        <FAQ />
        <CTA />
      </main>
    </div>
  )
}

