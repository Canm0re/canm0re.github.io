import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Nord Program</span>
              <img
                className="h-10 w-auto"
                src="/placeholder.svg?height=40&width=40"
                alt="Nord Program Logo"
              />
            </Link>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              href="#pricing"
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

