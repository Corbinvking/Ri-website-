"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { IndustryCarousel } from "@/components/industry-carousel"
import { FeaturesSection } from "@/components/features-section"
import { CalendarConsultationSection } from "@/components/calendar-consultation-section"
import { TestimonialsSection } from "@/components/enterprise-section"
import { Footer } from "@/components/footer"
import Script from "next/script"

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when coming from other pages
    const hash = window.location.hash
    if (hash === '#industry-carousel') {
      // Small delay to ensure the page is fully loaded
      setTimeout(() => {
        const industriesSection = document.querySelector('#industry-carousel')
        if (industriesSection) {
          industriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#0d0d17] text-white overflow-x-hidden">
      <Navbar />
      
      {/* GHL Calendar Embed Script */}
      <Script 
        src="https://link.msgsndr.com/js/form_embed.js" 
        strategy="lazyOnload"
      />
      
      <HeroSection />
      <IntegrationsSection />
      <IndustryCarousel />
      <FeaturesSection />
      <CalendarConsultationSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
