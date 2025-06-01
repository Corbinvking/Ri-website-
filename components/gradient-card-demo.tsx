import { GradientCard } from "@/components/ui/gradient-card"
import { Zap, Brain, Bot } from "lucide-react"

export function GradientCardDemo() {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center gap-12">
      <h2 className="text-3xl font-bold text-center">Premium Interactive Cards</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Default Card */}
        <GradientCard
          title="AI Voice Agents"
          description="Deploy intelligent voice agents that understand context and deliver exceptional customer experiences."
          icon={<Brain className="w-6 h-6 text-white" />}
          linkText="Explore Features"
        />

        {/* Custom Card */}
        <GradientCard
          title="Workflow Automation"
          description="Streamline operations with AI-powered workflow automation that saves time and reduces errors."
          icon={<Zap className="w-6 h-6 text-white" />}
          linkText="Learn More"
        />

        {/* Another Custom Card */}
        <GradientCard
          title="Chatbot Integration"
          description="Enhance customer support with intelligent chatbots that integrate seamlessly with your existing systems."
          icon={<Bot className="w-6 h-6 text-white" />}
          linkText="Get Started"
        />
      </div>
    </div>
  )
}
