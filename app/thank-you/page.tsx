"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DottedBackground } from "@/components/ui/dotted-vignette-background"
import { CheckCircle, Calendar, Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Script from "next/script"

export default function ThankYouPage() {
  useEffect(() => {
    // Track the successful booking conversion
    if (typeof window !== 'undefined') {
      // You can add analytics tracking here
      console.log('Thank you page loaded - booking conversion tracked');
      
      // Optional: Send to Google Analytics, Facebook Pixel, etc.
      // gtag('event', 'conversion', { 'send_to': 'AW-CONVERSION_ID' });
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0d0d17] text-white overflow-x-hidden">
      <Navbar />
      
      <section className="relative py-20 overflow-hidden">
        {/* Dotted Background */}
        <div className="absolute inset-0">
          <DottedBackground
            dotColor="rgba(198, 93, 7, 0.2)"
            backgroundColor="transparent"
            enableVignette={true}
            vignetteColor="rgba(13, 13, 23, 0.9)"
            enableInnerGlow={true}
            innerGlowColor="rgba(13, 13, 23, 0.7)"
            dotSize={1}
            dotSpacing={25}
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Success Icon & Heading */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Thank You!</span>
                <br />
                <span className="text-rust">Your Discovery Call is Booked</span>
              </h1>
              
              <p className="text-gray-300 text-xl max-w-2xl mx-auto">
                We're excited to show you how Rivers Intelligence can transform your business with AI automation. 
                Check your email for confirmation details.
              </p>
            </motion.div>

            {/* What Happens Next */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#1a1a2e] rounded-2xl p-8 mb-12"
            >
              <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-rust rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Email Confirmation</h3>
                  <p className="text-gray-300 text-sm">You'll receive a confirmation email with call details and calendar invite.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-rust rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Preparation Email</h3>
                  <p className="text-gray-300 text-sm">We'll send you a brief questionnaire to maximize your call's value.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-rust rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Discovery Call</h3>
                  <p className="text-gray-300 text-sm">30-minute strategic session to design your AI transformation plan.</p>
                </div>
              </div>
            </motion.div>

            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#1a1a2e] rounded-2xl p-8 mb-12"
            >
              <h2 className="text-2xl font-bold mb-4">
                <Play className="w-6 h-6 inline mr-2 text-rust" />
                Watch: What to Expect in Your Discovery Call
              </h2>
              
              <p className="text-gray-300 mb-6">
                Get a preview of how we'll analyze your business and design a custom AI strategy in just 30 minutes.
              </p>

              {/* Video Embed - Replace with your actual video */}
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                {/* Example with Canva video - replace URL with your actual video */}
                <iframe 
                  src="https://www.canva.com/design/DAGp1bIcsGY/U5RNmBQhgeSprMm2XZpZKw/view?utm_content=DAGp1bIcsGY&utm_campaign=designshare&utm_medium=embeds&utm_source=link&embed"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  title="Discovery Call Preview"
                />
                
                {/* Alternative: YouTube embed example */}
                {/* 
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Discovery Call Preview"
                />
                */}
              </div>
            </motion.div>

            {/* Additional Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <h3 className="text-xl font-bold mb-4">While You Wait...</h3>
              <p className="text-gray-300 mb-6">
                Explore our case studies and see how other businesses have transformed with AI
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" className="border-rust text-rust hover:bg-rust hover:text-white">
                  <a href="/#products">
                    Explore AI Solutions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  <a href="/">
                    Return to Homepage
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 