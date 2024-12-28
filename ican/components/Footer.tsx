import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p>Breaking down the recipe for efficient learning. Leaders in practical, evidence-based learning skills training.</p>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} iCanStudy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

