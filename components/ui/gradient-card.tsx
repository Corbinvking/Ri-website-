"use client"
import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface GradientCardProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  linkText?: string
  linkHref?: string
  className?: string
  children?: React.ReactNode
}

export const GradientCard = ({
  title = "AI-Powered Inbox Sorting",
  description = "OpenMail revolutionizes email management with AI-driven sorting, boosting productivity and accessibility",
  icon,
  linkText = "Learn More",
  linkHref = "#",
  className,
  children,
}: GradientCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()

      // Calculate mouse position relative to card center
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      // Calculate rotation (limited range for subtle effect)
      const rotateX = -(y / rect.height) * 5 // Max 5 degrees rotation
      const rotateY = (x / rect.width) * 5 // Max 5 degrees rotation

      setRotation({ x: rotateX, y: rotateY })
    }
  }

  // Reset rotation when not hovering
  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  // Use rust/orange theme colors instead of purple/blue - reduced opacity for subtler glow
  const primaryGlow = "rgba(198, 93, 7, 0.4)" // Reduced from 0.7 to 0.4
  const secondaryGlow = "rgba(210, 105, 30, 0.4)" // Reduced from 0.7 to 0.4
  const accentGlow = "rgba(139, 69, 19, 0.4)" // Reduced from 0.7 to 0.4

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-[32px] overflow-hidden ${className}`}
      style={{
        width: "360px",
        height: "450px",
        transformStyle: "preserve-3d",
        backgroundColor: "#0e131f",
        boxShadow: `0 -10px 60px 8px ${primaryGlow}, 0 0 8px 0 rgba(0, 0, 0, 0.5)`, // Reduced from 100px to 60px and 10px to 8px
      }}
      initial={{ y: 0 }}
      animate={{
        y: isHovered ? -5 : 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
        perspective: 1000,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Subtle glass reflection overlay */}
      <motion.div
        className="absolute inset-0 z-35 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(2px)",
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0.5,
          rotateX: -rotation.x * 0.2,
          rotateY: -rotation.y * 0.2,
          z: 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />

      {/* Dark background with black gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #000000 70%)",
        }}
        animate={{
          z: -1,
        }}
      />

      {/* Noise texture overlay */}
      <motion.div
        className="absolute inset-0 opacity-30 mix-blend-overlay z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        animate={{
          z: -0.5,
        }}
      />

      {/* Subtle finger smudge texture for realism */}
      <motion.div
        className="absolute inset-0 opacity-10 mix-blend-soft-light z-11 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='smudge'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.01' numOctaves='3' seed='5' stitchTiles='stitch'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23smudge)'/%3E%3C/svg%3E")`,
          backdropFilter: "blur(1px)",
        }}
        animate={{
          z: -0.25,
        }}
      />

      {/* Rust/orange glow effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
        style={{
          background: `
            radial-gradient(ellipse at bottom right, ${primaryGlow} -10%, rgba(79, 70, 229, 0) 70%),
            radial-gradient(ellipse at bottom left, ${secondaryGlow} -10%, rgba(79, 70, 229, 0) 70%)
          `,
          filter: "blur(25px)",
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0.5,
          y: isHovered ? rotation.x * 0.5 : 0,
          z: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />

      {/* Central rust glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-21"
        style={{
          background: `
            radial-gradient(circle at bottom center, ${primaryGlow} -20%, rgba(79, 70, 229, 0) 60%)
          `,
          filter: "blur(30px)",
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0.4,
          y: isHovered ? `calc(10% + ${rotation.x * 0.3}px)` : "10%",
          z: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />

      {/* Enhanced bottom border glow for premium look */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] z-25"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.05) 100%)",
        }}
        animate={{
          boxShadow: isHovered
            ? `0 0 15px 3px ${primaryGlow}, 0 0 20px 4px ${accentGlow}, 0 0 25px 5px ${secondaryGlow}`
            : `0 0 10px 2px ${primaryGlow}, 0 0 15px 3px ${accentGlow}, 0 0 20px 4px ${secondaryGlow}`,
          opacity: isHovered ? 0.8 : 0.6,
          z: 0.5,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />

      {/* Edge glows */}
      <motion.div
        className="absolute bottom-0 left-0 h-1/4 w-[1px] z-25 rounded-full"
        style={{
          background:
            "linear-gradient(to top, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 20%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.1) 60%, rgba(255, 255, 255, 0) 80%)",
        }}
        animate={{
          boxShadow: isHovered
            ? `0 0 20px 4px ${primaryGlow}, 0 0 30px 6px ${accentGlow}, 0 0 40px 8px ${secondaryGlow}`
            : `0 0 15px 3px ${primaryGlow}, 0 0 25px 5px ${accentGlow}, 0 0 35px 7px ${secondaryGlow}`,
          opacity: isHovered ? 1 : 0.9,
          z: 0.5,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 h-1/4 z-25"
        style={{
          background:
            "linear-gradient(to top, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.55) 15%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.25) 45%, rgba(255, 255, 255, 0.1) 70%, rgba(255, 255, 255, 0) 85%)",
        }}
        animate={{
          boxShadow: isHovered
            ? `0 0 20px 4px ${primaryGlow}, 0 0 30px 6px ${accentGlow}, 0 0 40px 8px ${secondaryGlow}`
            : `0 0 15px 3px ${primaryGlow}, 0 0 25px 5px ${accentGlow}, 0 0 35px 7px ${secondaryGlow}`,
          opacity: isHovered ? 1 : 0.9,
          z: 0.5,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 h-1/4 w-[1px] z-25 rounded-full"
        style={{
          background:
            "linear-gradient(to top, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 20%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.1) 60%, rgba(255, 255, 255, 0) 80%)",
        }}
        animate={{
          boxShadow: isHovered
            ? `0 0 20px 4px ${primaryGlow}, 0 0 30px 6px ${accentGlow}, 0 0 40px 8px ${secondaryGlow}`
            : `0 0 15px 3px ${primaryGlow}, 0 0 25px 5px ${accentGlow}, 0 0 35px 7px ${secondaryGlow}`,
          opacity: isHovered ? 1 : 0.9,
          z: 0.5,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 h-1/3 z-25"
        style={{
          background:
            "linear-gradient(to top, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.55) 15%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.25) 45%, rgba(255, 255, 255, 0.1) 70%, rgba(255, 255, 255, 0) 85%)",
        }}
        animate={{
          boxShadow: isHovered
            ? `0 0 20px 4px ${primaryGlow}, 0 0 30px 6px ${accentGlow}, 0 0 40px 8px ${secondaryGlow}`
            : `0 0 15px 3px ${primaryGlow}, 0 0 25px 5px ${accentGlow}, 0 0 35px 7px ${secondaryGlow}`,
          opacity: isHovered ? 1 : 0.9,
          z: 0.5,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />

      {/* Card content */}
      <motion.div className="relative flex flex-col h-full p-8 pb-6 z-40" animate={{ z: 2 }}>
        {children ? (
          children
        ) : (
          <>
            {/* Icon circle with shadow */}
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
              style={{
                background: "linear-gradient(225deg, #171c2c 0%, #121624 100%)",
                position: "relative",
                overflow: "hidden",
              }}
              initial={{ filter: "blur(3px)", opacity: 0.7 }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
                boxShadow: isHovered
                  ? "0 8px 16px -2px rgba(0, 0, 0, 0.3), 0 4px 8px -1px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.15), inset -2px -2px 5px rgba(0, 0, 0, 0.7)"
                  : "0 6px 12px -2px rgba(0, 0, 0, 0.25), 0 3px 6px -1px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(255, 255, 255, 0.15), inset -1px -1px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              {icon}
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-2xl font-semibold text-white mb-3"
              style={{
                textShadow: `0 0 10px ${primaryGlow}, 0 0 20px ${accentGlow}`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-gray-300 leading-relaxed flex-grow"
              style={{
                textShadow: `0 0 5px ${accentGlow}`,
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.p>

            {/* Link */}
            <motion.a
              href={linkHref}
              className="inline-flex items-center text-rust-200 hover:text-rust-100 font-medium mt-4 group"
              style={{
                textShadow: `0 0 3px ${secondaryGlow}`,
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {linkText}
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.a>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}
