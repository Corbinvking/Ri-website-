"use client"

import { useState } from "react"
import { GradientCard } from "@/components/ui/gradient-card"
import { Button } from "@/components/ui/button"
import { DemoLeadPopup } from "@/components/ui/demo-lead-popup"
import { DottedBackground } from "@/components/ui/dotted-vignette-background"
import { Brain, Mic, Workflow, Play, Shield, CheckCircle, Users } from "lucide-react"

export function IntegrationsSection() {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const handleDemoSubmit = (data: any) => {
    console.log("Voice AI demo lead captured:", data)
    // Here you would send the data to your backend/CRM
  }

  return (
    <section className="relative py-20 overflow-hidden" id="products">
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
        <div className="flex items-center justify-center gap-2 mb-4">
          <Brain className="h-5 w-5 text-rust" />
          <span className="text-white font-medium">Our Core Solutions</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">AI Products Built for Business</h2>
        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Three comprehensive AI solutions designed to transform how businesses operate, optimize, and serve their customers.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <GradientCard
            className="w-full h-auto min-h-[700px]"
            title="Voice AI Facilitation"
            description="Deploy intelligent voice agents that sound completely natural and understand context. Perfect for customer service, appointment scheduling, and lead qualification."
            icon={<Mic className="w-6 h-6 text-white" />}
            linkText="Get Started"
          >
            <div className="h-full flex flex-col">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2a2a40] text-sm mb-4">
                <Mic className="h-4 w-4 text-rust mr-2" />
                Natural Language Processing
              </div>

              <h3 className="text-2xl font-bold mb-4">Voice AI Facilitation</h3>

              <p className="text-gray-300 mb-6">
                Deploy intelligent voice agents that sound completely natural and understand context. Perfect for customer
                service, appointment scheduling, and lead qualification - available 24/7 without additional staffing costs.
              </p>

              {/* Voice AI Demo Section */}
              <div className="bg-[#0d0d17] rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-sm">Try Our Voice AI Demo</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Live Demo
                  </div>
                </div>

                <div className="bg-gradient-to-r from-rust/20 to-orange-500/20 rounded-lg p-3 mb-3">
                  <p className="text-xs text-gray-300 mb-2">
                    "Hi! I'm Sarah, your AI assistant. I can help schedule appointments, answer questions about services,
                    and qualify leads for your business."
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-rust hover:bg-dark-rust text-white flex items-center gap-2"
                    onClick={() => setIsDemoPopupOpen(true)}
                  >
                    <Play className="h-3 w-3" />
                    Try Demo
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-rust rounded-full"></div>
                    <span className="text-gray-300">98% Accuracy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-rust rounded-full"></div>
                    <span className="text-gray-300">24/7 Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-rust rounded-full"></div>
                    <span className="text-gray-300">Natural Speech</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-rust rounded-full"></div>
                    <span className="text-gray-300">Instant Setup</span>
                </div>
                </div>
              </div>

              <div className="mt-auto">
                <Button asChild className="w-full bg-rust hover:bg-dark-rust text-cream">
                  <a href="/contact">Get Started</a>
                </Button>
              </div>
            </div>
          </GradientCard>

          <GradientCard
            className="w-full h-auto min-h-[700px]"
            title="Workflow Automation"
            description="Streamline your operations with AI-powered workflow automation. Reduce manual tasks by up to 80% while improving accuracy."
            icon={<Workflow className="w-6 h-6 text-white" />}
            linkText="Get Started"
          >
            <div className="h-full flex flex-col">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2a2a40] text-sm mb-4">
                <Workflow className="h-4 w-4 text-rust mr-2" />
                Process Optimization
              </div>

              <h3 className="text-2xl font-bold mb-4">Workflow Automation</h3>

              <p className="text-gray-300 mb-6">
                Streamline your operations with AI-powered workflow automation. Reduce manual tasks by up to 80% while
                improving accuracy and allowing your team to focus on high-value activities.
              </p>

              {/* Workflow Examples */}
              <div className="bg-[#0d0d17] rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-3 text-sm">Automation Examples</h4>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-[#1a1a2e] rounded-lg">
                    <div className="w-6 h-6 bg-rust rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-medium">Email → CRM → Follow-up</div>
                      <p className="text-xs text-gray-400">Auto-process leads</p>
                    </div>
                    <div className="text-xs text-green-400 font-medium">-75%</div>
                  </div>

                  <div className="flex items-center gap-3 p-2 bg-[#1a1a2e] rounded-lg">
                    <div className="w-6 h-6 bg-rust rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-medium">Invoice → Payment → Reconcile</div>
                      <p className="text-xs text-gray-400">Financial automation</p>
                </div>
                    <div className="text-xs text-green-400 font-medium">-90%</div>
                  </div>

                  <div className="flex items-center gap-3 p-2 bg-[#1a1a2e] rounded-lg">
                    <div className="w-6 h-6 bg-rust rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-medium">Order → Inventory → Ship</div>
                      <p className="text-xs text-gray-400">Order fulfillment</p>
                </div>
                    <div className="text-xs text-green-400 font-medium">+60%</div>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Button asChild className="w-full bg-rust hover:bg-dark-rust text-cream">
                  <a href="/contact">Get Started</a>
                </Button>
              </div>
            </div>
          </GradientCard>

          <GradientCard
            className="w-full h-auto min-h-[700px]"
            title="AI Administration & Consultation"
            description="Comprehensive AI audits, strategic consulting, and ongoing administration to optimize your business operations and ensure sustainable growth."
            icon={<Shield className="w-6 h-6 text-white" />}
            linkText="Get Started"
          >
            <div className="h-full flex flex-col">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2a2a40] text-sm mb-4">
                <Shield className="h-4 w-4 text-rust mr-2" />
                Strategic Consulting
              </div>

              <h3 className="text-2xl font-bold mb-4">AI Administration & Consultation</h3>

              <p className="text-gray-300 mb-6">
                Get expert guidance with comprehensive AI audits, strategic consulting, and ongoing administration services. 
                We analyze your current operations, identify optimization opportunities, and provide continuous support to ensure maximum ROI.
              </p>

              {/* Consultation Services */}
              <div className="bg-[#0d0d17] rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-3 text-sm">Our Services</h4>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-[#1a1a2e] rounded-lg">
                    <div className="w-6 h-6 bg-rust rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-medium">AI Readiness Audit</div>
                      <p className="text-xs text-gray-400">Complete business analysis</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 bg-[#1a1a2e] rounded-lg">
                    <div className="w-6 h-6 bg-rust rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-medium">Strategic Implementation</div>
                      <p className="text-xs text-gray-400">Custom AI roadmap</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 bg-[#1a1a2e] rounded-lg">
                    <div className="w-6 h-6 bg-rust rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-medium">Ongoing Administration</div>
                      <p className="text-xs text-gray-400">24/7 system monitoring</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 bg-[#1a1a2e] rounded-lg">
                    <div className="w-6 h-6 bg-rust rounded-full flex items-center justify-center">
                      <Users className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-medium">Team Training</div>
                      <p className="text-xs text-gray-400">Staff education & support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Button asChild className="w-full bg-rust hover:bg-dark-rust text-cream">
                  <a href="/contact">Get Started</a>
                </Button>
              </div>
            </div>
          </GradientCard>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rust/20 to-orange-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Choose the AI solution that fits your needs, or combine multiple solutions for maximum impact. Our expert team
              will guide you through every step of implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-rust hover:bg-dark-rust text-cream">
                <a href="/contact">Schedule Free Consultation</a>
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-800"
                onClick={() => setIsDemoPopupOpen(true)}
              >
                View Live Demos
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Popup */}
      <DemoLeadPopup
        isOpen={isDemoPopupOpen}
        onClose={() => setIsDemoPopupOpen(false)}
        demoType="voice-ai"
        demoTitle="Voice AI Assistant"
        onSubmit={handleDemoSubmit}
      />
    </section>
  )
}
