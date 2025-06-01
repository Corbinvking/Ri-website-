"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { useEffect, useRef, useState, useCallback } from "react"

export type ColorScheme = "rust" | "tech" | "growth" | "premium" | "professional" | "trust"

const colorSchemes: Record<
  ColorScheme,
  {
    gradientBackgroundStart: string
    gradientBackgroundEnd: string
    firstColor: string
    secondColor: string
    thirdColor: string
    fourthColor: string
    fifthColor: string
    pointerColor: string
  }
> = {
  rust: {
    gradientBackgroundStart: "rgb(13, 13, 23)",
    gradientBackgroundEnd: "rgb(26, 26, 46)",
    firstColor: "198, 93, 7",
    secondColor: "139, 69, 19",
    thirdColor: "210, 105, 30",
    fourthColor: "255, 107, 1",
    fifthColor: "180, 80, 20",
    pointerColor: "198, 93, 7",
  },
  tech: {
    gradientBackgroundStart: "rgb(13, 13, 23)",
    gradientBackgroundEnd: "rgb(26, 26, 46)",
    firstColor: "59, 130, 246",
    secondColor: "198, 93, 7",
    thirdColor: "147, 51, 234",
    fourthColor: "6, 182, 212",
    fifthColor: "255, 107, 1",
    pointerColor: "59, 130, 246",
  },
  growth: {
    gradientBackgroundStart: "rgb(13, 13, 23)",
    gradientBackgroundEnd: "rgb(26, 26, 46)",
    firstColor: "34, 197, 94",
    secondColor: "198, 93, 7",
    thirdColor: "22, 163, 74",
    fourthColor: "132, 204, 22",
    fifthColor: "255, 107, 1",
    pointerColor: "34, 197, 94",
  },
  premium: {
    gradientBackgroundStart: "rgb(13, 13, 23)",
    gradientBackgroundEnd: "rgb(26, 26, 46)",
    firstColor: "147, 51, 234",
    secondColor: "198, 93, 7",
    thirdColor: "168, 85, 247",
    fourthColor: "236, 72, 153",
    fifthColor: "139, 69, 19",
    pointerColor: "147, 51, 234",
  },
  professional: {
    gradientBackgroundStart: "rgb(13, 13, 23)",
    gradientBackgroundEnd: "rgb(26, 26, 46)",
    firstColor: "71, 85, 105",
    secondColor: "198, 93, 7",
    thirdColor: "55, 65, 81",
    fourthColor: "107, 114, 128",
    fifthColor: "139, 69, 19",
    pointerColor: "198, 93, 7",
  },
  trust: {
    gradientBackgroundStart: "rgb(13, 13, 23)",
    gradientBackgroundEnd: "rgb(26, 26, 46)",
    firstColor: "251, 146, 60",
    secondColor: "198, 93, 7",
    thirdColor: "245, 158, 11",
    fourthColor: "217, 119, 6",
    fifthColor: "180, 80, 20",
    pointerColor: "251, 146, 60",
  },
}

export const BackgroundGradientAnimation = ({
  colorScheme = "rust",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  colorScheme?: ColorScheme
  size?: string
  blendingValue?: string
  children?: React.ReactNode
  className?: string
  interactive?: boolean
  containerClassName?: string
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const colors = colorSchemes[colorScheme]

  // Use refs to store current values to avoid dependency issues
  const curXRef = useRef(0)
  const curYRef = useRef(0)
  const tgXRef = useRef(0)
  const tgYRef = useRef(0)

  const [isSafari, setIsSafari] = useState(false)

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
  }, [])

  useEffect(() => {
    document.body.style.setProperty("--gradient-background-start", colors.gradientBackgroundStart)
    document.body.style.setProperty("--gradient-background-end", colors.gradientBackgroundEnd)
    document.body.style.setProperty("--first-color", colors.firstColor)
    document.body.style.setProperty("--second-color", colors.secondColor)
    document.body.style.setProperty("--third-color", colors.thirdColor)
    document.body.style.setProperty("--fourth-color", colors.fourthColor)
    document.body.style.setProperty("--fifth-color", colors.fifthColor)
    document.body.style.setProperty("--pointer-color", colors.pointerColor)
    document.body.style.setProperty("--size", size)
    document.body.style.setProperty("--blending-value", blendingValue)
  }, [colors, size, blendingValue])

  const animate = useCallback(() => {
    if (!interactiveRef.current) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }

    curXRef.current = curXRef.current + (tgXRef.current - curXRef.current) / 20
    curYRef.current = curYRef.current + (tgYRef.current - curYRef.current) / 20

    interactiveRef.current.style.transform = `translate(${Math.round(curXRef.current)}px, ${Math.round(curYRef.current)}px)`

    animationRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if (interactive) {
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate, interactive])

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect()
      tgXRef.current = event.clientX - rect.left
      tgYRef.current = event.clientY - rect.top
    }
  }, [])

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName,
      )}
      onMouseMove={handleMouseMove}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("relative z-10", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg absolute inset-0",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]",
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),_0.8)_0,_rgba(var(--first-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`,
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-1/3 h-1/3 -top-1/6 -left-1/6`,
              `opacity-70`,
            )}
          ></div>
        )}
      </div>
    </div>
  )
}
