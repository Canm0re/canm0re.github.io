'use client'

import { useCallback } from 'react'

export function CTA() {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Transform Your Academic Life Today</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Join the Nord Community now and start your journey to academic excellence. With our proven methods, expert guidance, and supportive community, you'll be amazed at what you can achieve.
        </p>
        <p className="mt-2 text-xl font-semibold text-white">
          Remember, only 10 spots are available!
        </p>
        <a
          href="#pricing"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          onClick={handleClick}
        >
          Secure Your Spot Now
        </a>
      </div>
    </div>
  )
}

