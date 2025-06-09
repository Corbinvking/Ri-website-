import Link from "next/link"
import { DottedBackground } from "@/components/ui/dotted-vignette-background"

// Carousel data
const serviceNiches = [
  { name: "Landscaping" },
  { name: "HVAC" },
  { name: "Roofing" },
  { name: "Solar Installation" },
  { name: "Plumbing" },
  { name: "Electrical" },
  { name: "Pool Services" },
  { name: "Pest Control" },
]

const professionalNiches = [
  { name: "Dental Practice" },
  { name: "Real Estate" },
  { name: "Legal Services" },
  { name: "Accounting" },
  { name: "Therapy & Counseling" },
  { name: "Veterinary" },
  { name: "Medical Practice" },
  { name: "Financial Services" },
]

const commerceNiches = [
  { name: "Restaurant" },
  { name: "Retail Store" },
  { name: "E-commerce" },
  { name: "Fitness Center" },
  { name: "Beauty Salon" },
  { name: "Auto Services" },
  { name: "Hotel & Tourism" },
  { name: "Event Planning" },
]

export function IndustryCarousel() {
  return (
    <section className="relative py-20 overflow-hidden">
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

      {/* Centered title section */}
      <div className="container relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-white">Industries We </span>
            <span className="text-rust">Serve</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From service businesses to professional practices and commerce - we cover all domains
          </p>
        </div>
      </div>

      {/* Full-width scrolling carousels */}
      <div className="space-y-6 relative z-10">
        {/* Service Niches - Scrolling Left */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll-left gap-4 hover-pause" style={{ width: 'max-content' }}>
            {[...serviceNiches, ...serviceNiches, ...serviceNiches].map((niche, index) => (
              <Link 
                key={`service-${index}`}
                href={`/demo?industry=${encodeURIComponent(niche.name.toLowerCase().replace(/ /g, '-'))}`}
                className="
                  flex-shrink-0 px-6 py-3 rounded-full 
                  bg-gradient-to-r from-gray-800/50 to-gray-700/30
                  text-white/70 font-medium 
                  border border-gray-600/30 backdrop-blur-sm
                  transition-all duration-300 transform cursor-pointer
                  hover:bg-gradient-to-r hover:from-rust/30 hover:to-orange-500/20
                  hover:text-white hover:shadow-lg hover:shadow-rust/50 
                  hover:border-rust/50 hover:scale-105
                "
              >
                {niche.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Professional Niches - Scrolling Right */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll-right gap-4 hover-pause" style={{ width: 'max-content' }}>
            {[...professionalNiches, ...professionalNiches, ...professionalNiches].map((niche, index) => (
              <Link 
                key={`professional-${index}`}
                href={`/demo?industry=${encodeURIComponent(niche.name.toLowerCase().replace(/ /g, '-'))}`}
                className="
                  flex-shrink-0 px-6 py-3 rounded-full 
                  bg-gradient-to-r from-gray-800/50 to-gray-700/30
                  text-white/70 font-medium 
                  border border-gray-600/30 backdrop-blur-sm
                  transition-all duration-300 transform cursor-pointer
                  hover:bg-gradient-to-r hover:from-rust/30 hover:to-orange-500/20
                  hover:text-white hover:shadow-lg hover:shadow-rust/50 
                  hover:border-rust/50 hover:scale-105
                "
              >
                {niche.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Commerce Niches - Scrolling Left */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll-left gap-4 hover-pause" style={{ width: 'max-content' }}>
            {[...commerceNiches, ...commerceNiches, ...commerceNiches].map((niche, index) => (
              <Link 
                key={`commerce-${index}`}
                href={`/demo?industry=${encodeURIComponent(niche.name.toLowerCase().replace(/ /g, '-'))}`}
                className="
                  flex-shrink-0 px-6 py-3 rounded-full 
                  bg-gradient-to-r from-gray-800/50 to-gray-700/30
                  text-white/70 font-medium 
                  border border-gray-600/30 backdrop-blur-sm
                  transition-all duration-300 transform cursor-pointer
                  hover:bg-gradient-to-r hover:from-rust/30 hover:to-orange-500/20
                  hover:text-white hover:shadow-lg hover:shadow-rust/50 
                  hover:border-rust/50 hover:scale-105
                "
              >
                {niche.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 