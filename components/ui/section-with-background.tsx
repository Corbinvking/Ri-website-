import type React from "react"
import { BackgroundGradientAnimation, type ColorScheme } from "./background-gradient-animation"
import { cn } from "@/lib/utils"

interface SectionWithBackgroundProps {
  children: React.ReactNode
  colorScheme?: ColorScheme
  className?: string
  interactive?: boolean
}

export function SectionWithBackground({
  children,
  colorScheme = "rust",
  className,
  interactive = true,
}: SectionWithBackgroundProps) {
  return (
    <section className={cn("relative min-h-screen", className)}>
      <BackgroundGradientAnimation
        colorScheme={colorScheme}
        interactive={interactive}
        containerClassName="absolute inset-0"
      />
      <div className="relative z-10">{children}</div>
    </section>
  )
}
