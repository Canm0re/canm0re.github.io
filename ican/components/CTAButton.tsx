import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CTAButtonProps {
  text: string
  href: string
  className?: string
}

export default function CTAButton({ text, href, className = "" }: CTAButtonProps) {
  return (
    <Button asChild className={`bg-primary text-primary-foreground hover:bg-primary/90 ${className}`}>
      <Link href={href}>{text}</Link>
    </Button>
  )
}

