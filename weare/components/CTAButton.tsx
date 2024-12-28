import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CTAButtonProps {
  text: string
  href: string
  className?: string
}

export default function CTAButton({ text, href, className = "" }: CTAButtonProps) {
  return (
    <Button asChild className={className}>
      <Link href={href}>{text}</Link>
    </Button>
  )
}

