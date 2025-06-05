"use client"
import type React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface GradientTextProps {
  className?: string
  children: React.ReactNode
  as?: React.ElementType
}

function GradientText({ className, children, as: Component = "span", ...props }: GradientTextProps) {
  // Use motion.div or motion.span directly instead of deprecated motion()
  const MotionComponent = Component === "span" ? motion.span : motion.div

  return (
    <MotionComponent
      className={cn(
        "relative inline-flex bg-gradient-to-r from-[hsl(var(--color-1))] via-[hsl(var(--color-2))] to-[hsl(var(--color-3))] bg-clip-text text-transparent animate-gradient-x",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}

export { GradientText }
