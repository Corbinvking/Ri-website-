import { DottedBackground } from "@/components/ui/dotted-vignette-background"
import { Calendar, Clock, CheckCircle, Star } from "lucide-react"

export function CalendarConsultationSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0">
        <DottedBackground
          dotColor="rgba(198, 93, 7, 0.2)"
          backgroundColor="transparent"
          enableVignette={true}
          vignetteColor="rgba(13, 13, 23, 0.9)"
          enableInnerGlow={true}
          innerGlowColor="rgba(13, 13, 23, 0.7)"
          dotSize={1}
          dotSpacing={25}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-rust" />
              <span className="text-rust font-medium">Discovery Call</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Book Your Free</span>
              <br />
              <span className="text-rust">Discovery Call</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Ready to transform your business with AI? Schedule a free 30-minute discovery call 
              to discover how our intelligent automation can boost your productivity and revenue.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">100% Free Discovery Call</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-rust" />
                <span className="text-gray-300">30-Minute Discovery Call</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-gray-300">Custom AI Strategy</span>
              </div>
            </div>
          </div>

          {/* Calendar Embed */}
          <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-gray-800 shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-white text-center">Choose Your Perfect Time</h3>
            
            {/* GoHighLevel Calendar Embed */}
            <div className="ghl-calendar-container">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/TwtttS3OVvzX6xKKYkoO" 
                style={{
                  width: '100%',
                  height: '800px',
                  border: 'none',
                  borderRadius: '12px',
                  background: '#0d0d17'
                }}
                scrolling="no" 
                id="homepage-calendar-consultation"
                title="Book Free AI Consultation"
                className="md:h-[800px] h-[700px]"
              />
            </div>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="bg-gradient-to-r from-rust/20 to-orange-500/20 rounded-lg p-4 border border-rust/30">
                <h4 className="font-semibold text-white mb-2">What You'll Get</h4>
                <p className="text-sm text-gray-300">
                  Custom AI strategy, implementation roadmap, and ROI projections for your specific business needs.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-rust/20 to-orange-500/20 rounded-lg p-4 border border-rust/30">
                <h4 className="font-semibold text-white mb-2">No Pressure</h4>
                <p className="text-sm text-gray-300">
                  This is a genuine discovery call to help you understand how AI can benefit your business.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-rust/20 to-orange-500/20 rounded-lg p-4 border border-rust/30">
                <h4 className="font-semibold text-white mb-2">Expert Team</h4>
                <p className="text-sm text-gray-300">
                  Work with experienced AI specialists who understand your business landscape and challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 