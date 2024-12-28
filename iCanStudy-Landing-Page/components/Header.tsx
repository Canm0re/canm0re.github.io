import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/placeholder.svg" alt="iCanStudy Logo" width={150} height={50} />
        </Link>
        <button className="lg:hidden">
          <span className="sr-only">Open menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className="hidden lg:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link href="/our-programs" className="text-gray-600 hover:text-gray-900">Our Programs</Link>
          <Link href="/our-team" className="text-gray-600 hover:text-gray-900">Our Team</Link>
          <Link href="/get-support" className="text-gray-600 hover:text-gray-900">Get Support</Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-900">Member Login</Link>
        </div>
      </nav>
    </header>
  )
}

