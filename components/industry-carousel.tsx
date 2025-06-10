"use client"

import { DottedBackground } from "@/components/ui/dotted-vignette-background"
import { DemoLeadPopup } from "@/components/ui/demo-lead-popup"
import { useEffect, useState } from "react"

// Carousel data
const serviceNiches = [
  { name: "Landscaping" },
  { name: "HVAC" },
  { name: "Roofing" },
  { name: "Solar Installation" },
  { name: "Plumbing" },
  { name: "Electrical" },
  { name: "Pool Services" },
  { name: "Pest Control" },
]

const professionalNiches = [
  { name: "Dental Practice" },
  { name: "Real Estate" },
  { name: "Legal Services" },
  { name: "Accounting" },
  { name: "Therapy & Counseling" },
  { name: "Veterinary" },
  { name: "Medical Practice" },
  { name: "Financial Services" },
]

const commerceNiches = [
  { name: "Restaurant" },
  { name: "Retail Store" },
  { name: "E-commerce" },
  { name: "Fitness Center" },
  { name: "Beauty Salon" },
  { name: "Auto Services" },
  { name: "Hotel & Tourism" },
  { name: "Event Planning" },
]

export function IndustryCarousel() {
  const [glowingNiches, setGlowingNiches] = useState<Set<string>>(new Set())
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)
  const [currentDemoType, setCurrentDemoType] = useState("")
  const [currentDemoTitle, setCurrentDemoTitle] = useState("")

  // Firefly-like glow animation effect
  useEffect(() => {
    const allNiches = [...serviceNiches, ...professionalNiches, ...commerceNiches]
    
    const createFireflyGlow = () => {
      // Only allow 1-2 glows at a time
      if (glowingNiches.size >= 2) return
      
      const randomNiche = allNiches[Math.floor(Math.random() * allNiches.length)]
      const nicheKey = `${randomNiche.name}-${Date.now()}` // Use timestamp for uniqueness
      
      setGlowingNiches(prev => new Set([...prev, nicheKey]))
      
      // Remove glow after longer duration for slow fade
      setTimeout(() => {
        setGlowingNiches(prev => {
          const newSet = new Set(prev)
          newSet.delete(nicheKey)
          return newSet
        })
      }, 4000) // 4 seconds for slow rise and fall
    }

    // Create firefly glows every 6-10 seconds (much slower)
    const interval = setInterval(() => {
      createFireflyGlow()
    }, Math.random() * 4000 + 6000) // 6-10 seconds

    return () => clearInterval(interval)
  }, [glowingNiches.size])

  const isGlowing = (nicheName: string) => {
    return Array.from(glowingNiches).some(key => key.startsWith(nicheName))
  }

  const handleNicheClick = (nicheName: string) => {
    setCurrentDemoType(nicheName.toLowerCase().replace(/ /g, '-'))
    setCurrentDemoTitle(nicheName)
    setIsDemoPopupOpen(true)
  }

  const handleDemoSubmit = (data: any) => {
    console.log(`${data.demoType} demo lead captured:`, data)
    // Here you would send the data to your backend/CRM
  }

  return (
    <section id="industry-carousel" className="relative py-20 overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0">
        <DottedBackground
          dotColor="rgba(198, 93, 7, 0.3)"
          backgroundColor="transparent"
          enableVignette={true}
          vignetteColor="rgba(13, 13, 23, 0.8)"
          enableInnerGlow={true}
          innerGlowColor="rgba(13, 13, 23, 0.6)"
          dotSize={1.5}
          dotSpacing={20}
        />
      </div>

      {/* Centered title section */}
      <div className="container relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-white">Industries We </span>
            <span className="text-rust">Serve</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-4">
            From service businesses to professional practices and commerce - we cover all domains.
          </p>
          <p className="text-rust font-medium">
            See your domain? Click it and receive an instant demo from our AI callers!
          </p>
        </div>
      </div>

      {/* Full-width scrolling carousels */}
      <div className="space-y-6">
        {/* Service Niches - Scrolling Left */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll-left gap-4 hover-pause" style={{ width: 'max-content' }}>
            {[...serviceNiches, ...serviceNiches, ...serviceNiches].map((niche, index) => (
              <button 
                key={`service-${index}`}
                onClick={() => handleNicheClick(niche.name)}
                className={`
                  flex-shrink-0 px-6 py-3 rounded-full 
                  bg-gradient-to-r from-gray-800/50 to-gray-700/30
                  text-white/70 font-medium 
                  border border-gray-600/30 backdrop-blur-sm
                  transition-all duration-[2000ms] ease-in-out transform cursor-pointer
                  hover:bg-gradient-to-r hover:from-rust/30 hover:to-orange-500/20
                  hover:text-white hover:shadow-lg hover:shadow-rust/50 
                  hover:border-rust/50 hover:scale-105
                  ${isGlowing(niche.name) ? 'firefly-glow' : ''}
                `}
              >
                {niche.name}
              </button>
            ))}
          </div>
        </div>

        {/* Professional Niches - Scrolling Right */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll-right gap-4 hover-pause" style={{ width: 'max-content' }}>
            {[...professionalNiches, ...professionalNiches, ...professionalNiches].map((niche, index) => (
              <button 
                key={`professional-${index}`}
                onClick={() => handleNicheClick(niche.name)}
                className={`
                  flex-shrink-0 px-6 py-3 rounded-full 
                  bg-gradient-to-r from-gray-800/50 to-gray-700/30
                  text-white/70 font-medium 
                  border border-gray-600/30 backdrop-blur-sm
                  transition-all duration-[2000ms] ease-in-out transform cursor-pointer
                  hover:bg-gradient-to-r hover:from-rust/30 hover:to-orange-500/20
                  hover:text-white hover:shadow-lg hover:shadow-rust/50 
                  hover:border-rust/50 hover:scale-105
                  ${isGlowing(niche.name) ? 'firefly-glow' : ''}
                `}
              >
                {niche.name}
              </button>
            ))}
          </div>
        </div>

        {/* Commerce Niches - Scrolling Left */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll-left gap-4 hover-pause" style={{ width: 'max-content' }}>
            {[...commerceNiches, ...commerceNiches, ...commerceNiches].map((niche, index) => (
              <button 
                key={`commerce-${index}`}
                onClick={() => handleNicheClick(niche.name)}
                className={`
                  flex-shrink-0 px-6 py-3 rounded-full 
                  bg-gradient-to-r from-gray-800/50 to-gray-700/30
                  text-white/70 font-medium 
                  border border-gray-600/30 backdrop-blur-sm
                  transition-all duration-[2000ms] ease-in-out transform cursor-pointer
                  hover:bg-gradient-to-r hover:from-rust/30 hover:to-orange-500/20
                  hover:text-white hover:shadow-lg hover:shadow-rust/50 
                  hover:border-rust/50 hover:scale-105
                  ${isGlowing(niche.name) ? 'firefly-glow' : ''}
                `}
              >
                {niche.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Popup */}
      <DemoLeadPopup
        isOpen={isDemoPopupOpen}
        onClose={() => setIsDemoPopupOpen(false)}
        demoType={currentDemoType}
        demoTitle={currentDemoTitle}
        onSubmit={handleDemoSubmit}
      />
    </section>
  )
} 