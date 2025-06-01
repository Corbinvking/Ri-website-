import { GradientCard } from "@/components/ui/gradient-card"
import { Mic, Workflow } from "lucide-react"

export function IntegrationsSection() {
  return (
    <section className="py-20 border-t border-gray-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Rivers Intelligence delivers cutting-edge AI solutions designed to transform your business operations and
            customer experiences.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 items-stretch">
          <GradientCard
            className="w-full md:w-1/2 h-auto min-h-[500px]"
            title="Voice AI Facilitation"
            description="Deploy intelligent voice agents that sound natural, understand context, and deliver exceptional customer experiences across all your communication channels."
            icon={<Mic className="w-6 h-6 text-white" />}
            linkText="Explore Voice AI"
          >
            <div className="h-full flex flex-col">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2a2a40] text-sm mb-4">
                <Mic className="h-4 w-4 text-rust mr-2" />
                Voice Technology
              </div>

              <h3 className="text-2xl font-bold mb-4">Voice AI Facilitation</h3>

              <p className="text-gray-300 mb-6">
                Deploy intelligent voice agents that sound natural, understand context, and deliver exceptional customer
                experiences across all your communication channels.
              </p>

              <div className="mt-auto space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#2a2a40] rounded-full p-1 mt-1">
                    <div className="w-2 h-2 rounded-full bg-rust"></div>
                  </div>
                  <p className="text-sm text-gray-300">Natural language processing with 98% accuracy</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#2a2a40] rounded-full p-1 mt-1">
                    <div className="w-2 h-2 rounded-full bg-rust"></div>
                  </div>
                  <p className="text-sm text-gray-300">Seamless integration with existing phone systems</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#2a2a40] rounded-full p-1 mt-1">
                    <div className="w-2 h-2 rounded-full bg-rust"></div>
                  </div>
                  <p className="text-sm text-gray-300">24/7 customer support without additional staffing</p>
                </div>

                <div className="mt-8">
                  <a
                    href="#voice-ai"
                    className="text-rust hover:text-white transition-colors duration-200 flex items-center"
                  >
                    View Details
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </GradientCard>

          <GradientCard
            className="w-full md:w-1/2 h-auto min-h-[500px]"
            title="Workflow Automation"
            description="Streamline operations with AI-powered workflow automation that saves time, reduces errors, and allows your team to focus on high-value tasks."
            icon={<Workflow className="w-6 h-6 text-white" />}
            linkText="Discover Automation"
          >
            <div className="h-full flex flex-col">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2a2a40] text-sm mb-4">
                <Workflow className="h-4 w-4 text-rust mr-2" />
                Process Optimization
              </div>

              <h3 className="text-2xl font-bold mb-4">Workflow Automation</h3>

              <p className="text-gray-300 mb-6">
                Streamline operations with AI-powered workflow automation that saves time, reduces errors, and allows
                your team to focus on high-value tasks.
              </p>

              <div className="mt-auto space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#2a2a40] rounded-full p-1 mt-1">
                    <div className="w-2 h-2 rounded-full bg-rust"></div>
                  </div>
                  <p className="text-sm text-gray-300">Reduce manual processes by up to 80%</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#2a2a40] rounded-full p-1 mt-1">
                    <div className="w-2 h-2 rounded-full bg-rust"></div>
                  </div>
                  <p className="text-sm text-gray-300">Custom workflows tailored to your business needs</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#2a2a40] rounded-full p-1 mt-1">
                    <div className="w-2 h-2 rounded-full bg-rust"></div>
                  </div>
                  <p className="text-sm text-gray-300">Seamless integration with your existing tools</p>
                </div>

                <div className="mt-8">
                  <a
                    href="#workflow-automation"
                    className="text-rust hover:text-white transition-colors duration-200 flex items-center"
                  >
                    View Details
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </GradientCard>
        </div>
      </div>
    </section>
  )
}
