import { Navbar } from "@/components/navbar"
import { DynamicTabsSection } from "@/components/dynamic-tabs-section"
import { Footer } from "@/components/footer"

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#0d0d17] text-white overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <DynamicTabsSection />
      </div>
      <Footer />
    </main>
  )
} 