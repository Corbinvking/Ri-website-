"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { VoiceDemoComponent } from "@/components/ui/voice-demo-component"
import { Play, Phone, CheckCircle, TrendingUp, Clock, Users, Shield, Zap, Mic } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function VSLPage() {
  const handleCallStart = () => {
    console.log("Voice demo call started")
  }

  const handleCallEnd = () => {
    console.log("Voice demo call ended")
  }

  const handleTranscript = (transcript: string, role: "user" | "assistant") => {
    console.log(`${role}: ${transcript}`)
  }

  return (
    <div className="min-h-screen bg-[#0d0d17] text-white">
      {/* Simple Header */}
      <header className="py-2 px-4 border-b border-gray-800">
        <div className="max-w-md mx-auto text-center">
          <Link href="/" className="inline-block">
            <Image 
              src="/rivers-intelligence-logo.png" 
              alt="Rivers Intelligence Logo" 
              width={144} 
              height={40} 
              className="object-contain hover:opacity-80 transition-opacity" 
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-8">
        <div className="max-w-md mx-auto space-y-8">
          
          {/* Headline */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Stop Missing Calls,</span>
              <br />
              <span className="text-rust">Start Growing Your Business</span>
            </h2>
            <p className="text-gray-300 text-lg">
At Rivers Intelligence, our mission is to empower local service providers and professionals across industries with cutting-edge AI tools that streamline operations, boost efficiency, and elevate customer experiences. We specialize in voice AI, workflow automation, and strategic consulting to help businesses reduce overhead, increase responsiveness, and stay competitive in a fast-changing market. By integrating natural language processing and intelligent automation, we enable 24/7 service capabilities that free teams to focus on what matters most. Our tailored approach ensures every solution delivers measurable value, from dental offices to HVAC companies and beyond. We are committed to helping Richmond businesses thrive through accessible, practical, and transformative AI innovation.
            </p>
          </div>

          {/* Canva Presentation Embed */}
          <div style={{
            position: 'relative', 
            width: '100%', 
            height: 0, 
            paddingTop: '56.2500%',
            paddingBottom: 0, 
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', 
            marginTop: '1.6em', 
            marginBottom: '0.9em', 
            overflow: 'hidden',
            borderRadius: '8px', 
            willChange: 'transform'
          }}>
            <iframe 
              loading="lazy" 
              style={{
                position: 'absolute', 
                width: '100%', 
                height: '100%', 
                top: 0, 
                left: 0, 
                border: 'none', 
                padding: 0,
                margin: 0
              }}
              src="https://www.canva.com/design/DAGp1bIcsGY/U5RNmBQhgeSprMm2XZpZKw/view?embed" 
              allowFullScreen 
              allow="fullscreen"
              title="Orange and Black Minimalist Creative Brief Presentation"
            />
          </div>
          <div className="text-center mb-4">
            <a 
              href="https://www.canva.com/design/DAGp1bIcsGY/U5RNmBQhgeSprMm2XZpZKw/view?utm_content=DAGp1bIcsGY&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
              target="_blank" 
              rel="noopener"
              className="text-gray-400 text-xs hover:text-rust transition-colors"
            >
              Rivers Intelligence Intro
            </a>
          </div>

          {/* Voice Demo Component */}
          <div className="text-center">
            <VoiceDemoComponent
              publicKey={process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || ""}
              assistantId={process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || ""}
              onCallStart={handleCallStart}
              onCallEnd={handleCallEnd}
              onTranscript={handleTranscript}
            />
          </div>

          {/* CTA After Video */}
          <div className="text-center">
            <Button 
              asChild 
              className="bg-gradient-to-b from-rust via-orange-500 to-yellow-500 hover:from-dark-rust hover:via-rust hover:to-orange-500 text-white px-8 py-3 text-lg font-bold shadow-lg shadow-rust/50 hover:shadow-xl hover:shadow-rust/60 transition-all duration-300"
            >
              <a href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Book Your Discovery Call
              </a>
            </Button>
            <p className="text-gray-400 text-xs mt-2">See exactly how this works for your business</p>
          </div>

          {/* Problem Section */}
          <div className="bg-red-900/20 rounded-lg p-6 border border-red-800/30">
            <h3 className="text-lg font-bold mb-4 text-center text-red-400">The Problem Every Business Owner Faces</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <span className="text-gray-300">Missing calls = lost revenue (avg. $1,200 per missed call)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <span className="text-gray-300">Staff costs $35,000+ per year for basic reception work</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <span className="text-gray-300">Human errors in booking lead to double-bookings and no-shows</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <span className="text-gray-300">Limited to business hours while competitors operate 24/7</span>
              </div>
            </div>
          </div>

          {/* Solution Overview */}
          <div className="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-bold mb-4 text-center text-green-400">The Solution: AI-Powered Staff</h3>
            <p className="text-gray-300 mb-4 text-center">
              Our conversational AI agents work as your dedicated staff members, handling customer interactions with human-like precision and never missing a beat.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-rust rounded-full flex items-center justify-center mx-auto mb-2">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-gray-300">Answer Every Call</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-rust rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-gray-300">24/7 Availability</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-rust rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-gray-300">Multiple Simultaneous</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-rust rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-gray-300">100% Reliable</p>
              </div>
            </div>
          </div>

          {/* ROI Section */}
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-6 border border-green-700/50">
            <h3 className="text-lg font-bold mb-4 text-center">
              <TrendingUp className="w-5 h-5 inline mr-2 text-green-400" />
              Instant ROI Calculator
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-[#0d0d17] rounded">
                <span className="text-gray-300">Monthly Staff Savings:</span>
                <span className="text-green-400 font-bold">$3,500</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#0d0d17] rounded">
                <span className="text-gray-300">Recovered Lost Calls:</span>
                <span className="text-green-400 font-bold">$12,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#0d0d17] rounded">
                <span className="text-gray-300">24/7 Revenue Capture:</span>
                <span className="text-green-400 font-bold">$8,500</span>
              </div>
              <div className="border-t border-gray-600 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">Total Monthly Value:</span>
                  <span className="text-green-400 font-bold text-xl">$24,000</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">vs. $625/month investment = 3,740% ROI</p>
              </div>
            </div>
          </div>

          {/* CTA After ROI */}
          <div className="text-center">
            <Button 
              asChild 
              className="bg-gradient-to-b from-rust via-orange-500 to-yellow-500 hover:from-dark-rust hover:via-rust hover:to-orange-500 text-white px-8 py-3 text-lg font-bold shadow-lg shadow-rust/50 hover:shadow-xl hover:shadow-rust/60 transition-all duration-300"
            >
              <a href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Book Your Discovery Call
              </a>
            </Button>
            <p className="text-gray-400 text-xs mt-2">Free consultation • Calculate your exact ROI</p>
          </div>

          {/* Technical Capabilities */}
          <div className="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-bold mb-4 text-center">
              <Zap className="w-5 h-5 inline mr-2 text-rust" />
              Advanced AI Capabilities
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm"><strong>Natural Language Processing:</strong> Understands context, tone, and intent</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm"><strong>CRM Integration:</strong> Syncs with 50+ popular business tools</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm"><strong>Smart Scheduling:</strong> Prevents double-bookings, optimizes calendar</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm"><strong>Lead Qualification:</strong> Scores and routes leads automatically</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm"><strong>Multi-Channel:</strong> Phone, SMS, email, and web chat</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm"><strong>Custom Training:</strong> Learns your business processes and terminology</span>
              </div>
            </div>
          </div>

          {/* Implementation Process */}
          <div className="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-bold mb-4 text-center">72-Hour Implementation Process</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-rust rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <p className="text-white font-medium">Discovery Call (30 min)</p>
                  <p className="text-gray-400 text-sm">We analyze your current process and customize the AI</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-rust rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <p className="text-white font-medium">AI Training & Setup (24 hours)</p>
                  <p className="text-gray-400 text-sm">Our team configures your AI with your business rules</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-rust rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <p className="text-white font-medium">Testing & Go-Live (48 hours)</p>
                  <p className="text-gray-400 text-sm">We test everything and launch your AI staff</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <div>
                  <p className="text-green-400 font-medium">Start Capturing Revenue</p>
                  <p className="text-gray-400 text-sm">Your AI begins handling calls immediately</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-6 border border-purple-700/50">
            <h3 className="text-lg font-bold mb-4 text-center">Real Results</h3>
            <div className="text-center mb-4">
              <p className="text-gray-300 text-sm italic mb-2">
                "We went from missing 40% of our calls to capturing 100%. Our revenue increased by $18,000 in the first month alone."
              </p>
              <p className="text-rust font-medium">- Sarah Martinez, Martinez Landscaping</p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-green-400">40%</p>
                <p className="text-xs text-gray-400">More Revenue</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-400">100%</p>
                <p className="text-xs text-gray-400">Call Capture</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-400">72hrs</p>
                <p className="text-xs text-gray-400">Setup Time</p>
              </div>
            </div>
          </div>

          {/* CTA After Case Study */}
          <div className="text-center">
            <Button 
              asChild 
              className="bg-gradient-to-b from-rust via-orange-500 to-yellow-500 hover:from-dark-rust hover:via-rust hover:to-orange-500 text-white px-8 py-3 text-lg font-bold shadow-lg shadow-rust/50 hover:shadow-xl hover:shadow-rust/60 transition-all duration-300"
            >
              <a href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Book Your Discovery Call
              </a>
            </Button>
            <p className="text-gray-400 text-xs mt-2">Book your call and start in 72 hours</p>
          </div>

          {/* Social Proof */}
          <div className="text-center py-4">
            <p className="text-gray-400 text-sm mb-2">Trusted by 500+ businesses</p>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">⭐</span>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-1">4.9/5 average rating</p>
          </div>

          {/* Risk Reversal */}
          <div className="bg-gradient-to-r from-rust/20 to-orange-500/20 rounded-lg p-4 border border-rust/30 text-center">
            <p className="text-white font-semibold mb-2">100% Money-Back Guarantee</p>
            <p className="text-gray-300 text-sm mb-3">
              If you don't see an increase in captured calls within 30 days, we'll refund every penny.
            </p>
            <p className="text-rust font-medium text-sm">+ First Month FREE This Week Only</p>
          </div>

          {/* Urgency */}
          <div className="bg-yellow-600/20 rounded-lg p-4 border border-yellow-600/30 text-center">
            <p className="text-yellow-400 font-semibold mb-1">⚠️ Limited Availability</p>
            <p className="text-gray-300 text-sm">
              We can only onboard 50 new businesses this month due to our personalized setup process.
            </p>
            <p className="text-yellow-400 text-xs mt-2">23 spots remaining</p>
          </div>

          {/* Final CTA */}
          <div className="space-y-4">
            <Button 
              asChild 
              className="w-full bg-gradient-to-b from-rust via-orange-500 to-yellow-500 hover:from-dark-rust hover:via-rust hover:to-orange-500 text-white py-4 text-lg font-bold shadow-lg shadow-rust/50 hover:shadow-xl hover:shadow-rust/60 transition-all duration-300"
            >
              <a href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Book Your Discovery Call
              </a>
            </Button>
            
            <p className="text-center text-gray-400 text-sm">
              Free consultation • No commitment required • Setup in 72 hours
            </p>
          </div>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-6 px-4 border-t border-gray-800 mt-12">
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-500 text-xs">
            © 2024 Rivers Intelligence. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 