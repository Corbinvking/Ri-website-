"use client"

import { useState } from "react"
import { GradientText } from "@/components/ui/gradient-text"
import { DottedBackground } from "@/components/ui/dotted-vignette-background"
import { DemoLeadPopup } from "@/components/ui/demo-lead-popup"
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
            <motion.button
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setIsDemoPopupOpen(true)}
            >
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
              <motion.a
                href="/contact"
                className="group relative inline-block px-8 py-4 bg-gradient-to-r from-rust to-orange-500 rounded-full font-bold text-lg text-white shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(198, 93, 7, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  animate={{ x: [-100, 300] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 3
                  }}
                />
                <span className="relative z-10">Initiate Your Evolution</span>
              </motion.a>
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
