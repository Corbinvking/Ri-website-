import { Zap } from "lucide-react"

export function OpsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#1a1a2e] rounded-xl p-6">
            <h3 className="font-medium mb-2">
              IT Ops <span className="text-gray-400">can</span>
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-[#ff6b01]" />
              <p className="text-sm">On-board new employees and provision accounts</p>
            </div>
          </div>

          <div className="bg-[#1a1a2e] rounded-xl p-6">
            <h3 className="font-medium mb-2">
              Sec Ops <span className="text-gray-400">can</span>
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-[#ff6b01]" />
              <p className="text-sm">Enrich security incident tickets</p>
            </div>
          </div>

          <div className="bg-[#1a1a2e] rounded-xl p-6">
            <h3 className="font-medium mb-2">
              Dev Ops <span className="text-gray-400">can</span>
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-[#ff6b01]" />
              <p className="text-sm">Convert natural language commands into API calls</p>
            </div>
          </div>

          <div className="bg-[#1a1a2e] rounded-xl p-6">
            <h3 className="font-medium mb-2">
              Sales <span className="text-gray-400">can</span>
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-[#ff6b01]" />
              <p className="text-sm">Generate customer insights from grouped reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
