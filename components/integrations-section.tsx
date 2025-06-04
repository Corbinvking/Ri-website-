"use client"

import { useState } from "react"
import { GradientCard } from "@/components/ui/gradient-card"
import { Button } from "@/components/ui/button"
import { DemoLeadPopup } from "@/components/ui/demo-lead-popup"
import HeroWave from "@/components/ui/dynamic-wave-canvas-background"
import { Brain, Mic, Workflow, Play } from "lucide-react"

export function IntegrationsSection() {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const handleDemoSubmit = (data: any) => {
    console.log("Voice AI demo lead captured:", data)
    // Here you would send the data to your backend/CRM
  }

  return (
    <section className="relative py-20 border-t border-gray-800 overflow-hidden" id="products">
      {/* Dynamic Wave Background */}
      <HeroWave />
      
      <div className="container relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Brain className="h-5 w-5 text-rust" />
          <span className="text-white font-medium">Our Core Solutions</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">AI Products Built for Richmond</h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Two powerful AI solutions designed to transform how Richmond businesses operate and serve their customers.
        </p>

        <div className="flex flex-col lg:flex-row justify-center gap-12 items-stretch">
          <GradientCard
            className="w-full lg:w-1/2 h-auto min-h-[800px]"
            title="Voice AI Facilitation"
            description="Deploy intelligent voice agents that sound completely natural and understand context. Perfect for customer service, appointment scheduling, and lead qualification."
            icon={<Mic className="w-6 h-6 text-white" />}
            linkText="Get Voice AI"
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
                    and qualify leads for your Richmond business."
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
                <Button className="w-full bg-rust hover:bg-dark-rust text-cream mb-2">Get Voice AI</Button>
                <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-800">
                  View Case Studies
                </Button>
              </div>
            </div>
          </GradientCard>

          <GradientCard
            className="w-full lg:w-1/2 h-auto min-h-[800px]"
            title="Workflow Automation"
            description="Streamline your operations with AI-powered workflow automation. Reduce manual tasks by up to 80% while improving accuracy."
            icon={<Workflow className="w-6 h-6 text-white" />}
            linkText="Start Automation"
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
                <Button className="w-full bg-rust hover:bg-dark-rust text-cream mb-2">Start Automation</Button>
                <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-800">
                  View Workflows
                </Button>
              </div>
            </div>
          </GradientCard>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rust/20 to-orange-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Richmond Business?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Choose the AI solution that fits your needs, or combine both for maximum impact. Our Richmond-based team
              will guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-rust hover:bg-dark-rust text-cream">Schedule Free Consultation</Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                Compare Solutions
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
