"use client"

import { useState } from "react"
import { GradientText } from "@/components/ui/gradient-text"
import { DottedBackground } from "@/components/ui/dotted-vignette-background"
import { DemoLeadPopup } from "@/components/ui/demo-lead-popup"
import { AuroraButton } from "@/components/ui/aurora-button"
import { motion } from "framer-motion"
import { Mic } from "lucide-react"

export function HeroSection() {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const handleDemoSubmit = (data: any) => {
    console.log("Demo lead captured:", data)
    // Here you would send the data to your backend/CRM
    // The data includes: name, phone, email, demoType, demoTitle
  }

  return (
    <section className="relative py-8 overflow-hidden">
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
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-white">AI Voice Facilitators and Automations That</span>
            <br />
            <GradientText as="span" className="text-white">
              Sell, Book, and Handle Business
            </GradientText>
            <br />
            <span className="text-rust">— So You Don't Have To</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8">
            Rivers Intelligence delivers AI solutions built specifically for Richmond businesses. Our voice agents and automation systems handle your calls, bookings, and customer service 24/7.
          </p>
          
          {/* Voice AI Demo Button */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <motion.button
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onClick={() => setIsDemoPopupOpen(true)}
              >
                {/* Aurora circular glow border */}
                <div className="absolute -inset-[3px] rounded-full bg-gradient-to-r from-rust via-orange-400 to-orange-600 opacity-75 blur-lg transition-all group-hover:opacity-100 group-hover:blur-xl" />
                
                {/* Outer glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-rust to-orange-500"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Main button */}
                <div className="relative w-24 h-24 bg-gradient-to-r from-rust to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Mic className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.button>

              {/* Hand-drawn "Try me!" note */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-4 -right-16 md:-right-20"
              >
                {/* Arrow pointing to button */}
                <svg 
                  className="absolute top-8 -left-6 w-12 h-8 text-rust" 
                  viewBox="0 0 48 32" 
                  fill="none"
                >
                  <path 
                    d="M2 16 C8 12, 20 8, 38 14 C40 15, 42 16, 44 18 L40 16 L42 20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    style={{
                      filter: 'drop-shadow(0 0 4px rgba(198, 93, 7, 0.3))'
                    }}
                  />
                </svg>
                
                {/* Note text */}
                <div className="bg-yellow-200 text-gray-800 px-3 py-2 rounded-lg relative transform rotate-3 shadow-lg border-2 border-yellow-300">
                  <div className="font-handwriting text-sm font-medium">
                    Try me!
                  </div>
                  {/* Tape effect */}
                  <div className="absolute -top-1 left-2 w-6 h-3 bg-yellow-100 opacity-80 rounded-sm transform -rotate-12 border border-yellow-300"></div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">Try Our Voice AI</h3>
              <p className="text-gray-300 text-sm max-w-xs mx-auto">
                Experience our AI voice assistant - click to start a conversation and see how it can transform your business
              </p>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <AuroraButton 
                  className="px-8 py-4 text-lg font-bold"
                  onClick={() => window.location.href = '/contact'}
                >
                  Initiate Your Evolution
                </AuroraButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Demo Popup */}
      <DemoLeadPopup
        isOpen={isDemoPopupOpen}
        onClose={() => setIsDemoPopupOpen(false)}
        demoType="voice-ai"
        demoTitle="Rivers Voice AI"
        onSubmit={handleDemoSubmit}
      />
    </section>
  )
}
