import { CheckIcon } from '@heroicons/react/24/solid'

const tiers = [
  {
    name: 'Monthly',
    price: 47,
    description: 'Perfect for those who want to try out the program',
    features: [
      'Instant access to the Learning How to Learn course (a $297 value)',
      'Weekly live coaching sessions',
      'Exclusive bonuses like the Study Mirror and Memory Palace Technique',
      'Access to all course materials',
      'Community support',
    ],
    cta: 'Start monthly plan',
    savings: '$53.00 EVERY MONTH',
    discount: '53% off',
  },
  {
    name: 'Yearly',
    price: 247,
    description: 'Best value for committed learners',
    features: [
      'Everything in Monthly plan',
      'The Learning How To Learn Course',
      '12-month access to everything',
      'All bonuses included',
      'Priority support',
    ],
    cta: 'Start yearly plan',
    savings: '$317.00',
    discount: '56.2% off',
  },
]

export function Pricing() {
  return (
    <div className="bg-gray-900" id="pricing">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">Pricing</h2>
            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Here&apos;s The Deal:
            </p>
            <p className="text-xl text-gray-300">
              For a <strong>limited time</strong>, join the Nord Community and get:
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                        id={tier.name}
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                      ${tier.price}
                      <span className="ml-1 text-2xl font-medium text-gray-500">{tier.name === 'Yearly' ? '/year' : '/mo'}</span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{tier.description}</p>
                    <p className="mt-3 text-sm text-indigo-600 font-semibold">{tier.discount}</p>
                    <p className="text-sm text-gray-500">You save: <span className="font-bold">{tier.savings}</span></p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <a
                        href="https://whop.com/checkout/plan_ARROLLs0buPS1/"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        aria-describedby={tier.name}
                      >
                        {tier.cta}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-base font-semibold text-gray-900">Only 10 Spots Available!</p>
          <p className="mt-2 text-sm text-gray-500">We&apos;re keeping this community small to ensure personalized attention for every member. Once the spots are gone, the doors close—so act fast!</p>
        </div>
      </div>
    </div>
  )
}

