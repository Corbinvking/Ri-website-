import { Clock } from "lucide-react"
import type { ReactNode } from "react"

interface FeatureCardProps {
  title: string
  description: string
  icon?: ReactNode
}

export function FeatureCard({ title, description, icon = <Clock className="h-5 w-5 text-rust" /> }: FeatureCardProps) {
  return (
    <div className="bg-[#1a1a2e] rounded-xl p-6">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}
