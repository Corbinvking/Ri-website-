import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/enterprise-section"
import { EmbedSection } from "@/components/embed-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d17] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <IntegrationsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <EmbedSection />
      <Footer />
    </main>
  )
}
