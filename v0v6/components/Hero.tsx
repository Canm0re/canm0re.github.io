import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left max-w-3xl">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Study Smarter,</span>{' '}
                <span className="block text-indigo-600 xl:inline">Not Harder</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Get Better Grades in Half the Time (Proven by Science)
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-gray-900">
                Join the Nord Community Today and Unlock the Secrets to Effortless Learning—Free Course Included!
              </h2>
              <p className="mt-2 text-lg text-red-600 font-bold">
                (10 Spots Left! for Dubai Students only)
              </p>
              <h3 className="mt-3 text-xl text-gray-700">
              Save hours every week on studying.
              Achieve more with less effort

              </h3>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://6s32vsspft6xcd13.public.blob.vercel-storage.com/head%20stencil-W1B06DLAzIjQlgYMxzVSjeaIAGsVtx.jpg"
          alt="Students studying"
          title="Image specifications: 800x600px, high-quality JPEG"
        />
      </div>
    </div>
  )
}

