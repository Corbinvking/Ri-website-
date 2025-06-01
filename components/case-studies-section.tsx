import { Button } from "@/components/ui/button"
import { Brain, Mic, Workflow, Play } from "lucide-react"

export function CaseStudiesSection() {
  return (
    <section className="py-20" id="products">
      <div className="container">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Brain className="h-5 w-5 text-rust" />
          <span className="text-white font-medium">Our Core Solutions</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">AI Products Built for Richmond</h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Two powerful AI solutions designed to transform how Richmond businesses operate and serve their customers.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Voice AI Section */}
          <div className="bg-[#1a1a2e] rounded-xl p-8" id="voice-ai">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-rust rounded-lg p-2">
                <Mic className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Voice AI Facilitation</h3>
                <p className="text-rust text-sm">Natural Language Processing</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              Deploy intelligent voice agents that sound completely natural and understand context. Perfect for customer
              service, appointment scheduling, and lead qualification - available 24/7 without additional staffing
              costs.
            </p>

            {/* Voice AI Demo Section */}
            <div className="bg-[#0d0d17] rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Try Our Voice AI Demo</h4>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Live Demo
                </div>
              </div>

              <div className="bg-gradient-to-r from-rust/20 to-orange-500/20 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-300 mb-3">
                  "Hi! I'm Sarah, your AI assistant. I can help schedule appointments, answer questions about services,
                  and qualify leads for your Richmond business. Try asking me something!"
                </p>
                <div className="flex items-center gap-2">
                  <Button className="bg-rust hover:bg-dark-rust text-white flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    Try Voice Demo
                  </Button>
                  <span className="text-xs text-gray-400">Click to interact with our AI</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rust rounded-full"></div>
                  <span className="text-gray-300">98% Accuracy Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rust rounded-full"></div>
                  <span className="text-gray-300">24/7 Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rust rounded-full"></div>
                  <span className="text-gray-300">Natural Conversations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rust rounded-full"></div>
                  <span className="text-gray-300">Instant Setup</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="bg-rust hover:bg-dark-rust text-cream">Get Voice AI</Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Workflow Automation Section */}
          <div className="bg-[#1a1a2e] rounded-xl p-8" id="workflow-automation">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-rust rounded-lg p-2">
                <Workflow className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Workflow Automation</h3>
                <p className="text-rust text-sm">Process Optimization</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              Streamline your operations with AI-powered workflow automation. Reduce manual tasks by up to 80% while
              improving accuracy and allowing your team to focus on high-value activities.
            </p>

            {/* Workflow Examples */}
            <div className="bg-[#0d0d17] rounded-lg p-6 mb-6">
              <h4 className="font-semibold mb-4">Automation Examples</h4>

              <div className="space-y-4">
                {/* Example 1 */}
                <div className="flex items-center gap-4 p-3 bg-[#1a1a2e] rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-rust rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">Email → CRM → Follow-up</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-rust rounded-full"></div>
                        <div className="w-2 h-2 bg-rust rounded-full"></div>
                        <div className="w-2 h-2 bg-rust rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">Automatically process leads and schedule follow-ups</p>
                  </div>
                  <div className="text-xs text-green-400 font-medium">-75% time</div>
                </div>

                {/* Example 2 */}
                <div className="flex items-center gap-4 p-3 bg-[#1a1a2e] rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-rust rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">Invoice → Payment → Reconciliation</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-rust rounded-full"></div>
                        <div className="w-2 h-2 bg-rust rounded-full"></div>
                        <div className="w-2 h-2 bg-rust rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">End-to-end financial process automation</p>
                  </div>
                  <div className="text-xs text-green-400 font-medium">-90% errors</div>
                </div>

                {/* Example 3 */}
                <div className="flex items-center gap-4 p-3 bg-[#1a1a2e] rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-rust rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">Order → Inventory → Shipping</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-rust rounded-full"></div>
                        <div className="w-2 h-2 bg-rust rounded-full"></div>
                        <div className="w-2 h-2 bg-rust rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">Complete order fulfillment automation</p>
                  </div>
                  <div className="text-xs text-green-400 font-medium">+60% speed</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="bg-rust hover:bg-dark-rust text-cream">Start Automation</Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                View Workflows
              </Button>
            </div>
          </div>
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
    </section>
  )
}
