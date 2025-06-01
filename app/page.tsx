import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { DynamicTabsSection } from "@/components/dynamic-tabs-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { FeaturesSection } from "@/components/features-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { EnterpriseSection } from "@/components/enterprise-section"
import { EmbedSection } from "@/components/embed-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d17] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <DynamicTabsSection />
      <IntegrationsSection />
      <FeaturesSection />
      <CaseStudiesSection />
      <EnterpriseSection />
      <EmbedSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
