"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DottedBackground } from "@/components/ui/dotted-vignette-background"
import { Brain, Mail, Phone, MapPin, Clock, Calendar } from "lucide-react"
import Script from "next/script"

export default function ContactPage() {
  useEffect(() => {
    // Listen for GHL booking completion events (simplified to avoid interference)
    const handleBookingSuccess = (event: MessageEvent) => {
      // Only listen for messages from GHL and check for booking success
      if (event.origin === 'https://api.leadconnectorhq.com' && event.data) {
        try {
          const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
          
          // Look for specific booking success indicators
          if (
            data.type === 'calendar_booking_success' ||
            data.type === 'appointment_scheduled' ||
            data.message === 'appointment_booked'
          ) {
            console.log('Calendar booking detected on contact page:', data);
            window.location.href = '/thank-you';
          }
        } catch (error) {
          // Silently handle parsing errors to avoid console spam
        }
      }
    };

    // Add event listener with passive option for better performance
    window.addEventListener('message', handleBookingSuccess, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('message', handleBookingSuccess);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0d0d17] text-white overflow-x-hidden">
      <Navbar />
      
      {/* GHL Calendar Embed Script */}
      <Script 
        src="https://link.msgsndr.com/js/form_embed.js" 
        strategy="lazyOnload"
      />
      
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
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calendar className="h-6 w-6 text-rust" />
                <span className="text-rust font-medium">Book Your Call</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Schedule Your</span>
                <br />
                <span className="text-rust">Discovery Call</span>
              </h1>
              <p className="text-gray-300 text-xl max-w-2xl mx-auto">
                Ready to transform your business with AI? Book a 30-minute discovery call to discuss your specific needs and see how we can help you automate and grow.
              </p>
            </div>

            <div className="space-y-12">
              {/* Calendar Booking - Full Width */}
              <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-white">Pick a Time That Works For You</h2>
                
                {/* GoHighLevel Calendar Embed */}
                <div className="ghl-calendar-container">
                  <iframe 
                    src="https://api.leadconnectorhq.com/widget/booking/TwtttS3OVvzX6xKKYkoO" 
                    style={{
                      width: '100%',
                      height: '800px',
                      border: 'none',
                      borderRadius: '12px',
                      background: '#0d0d17',
                      overflow: 'hidden'
                    }}
                    scrolling="no" 
                    id="UX5EaKJHvxE4lybvXbuL_1749499971199"
                    title="Book Discovery Call Calendar"
                    className="md:h-[800px] h-[700px]"
                  />
                </div>
              </div>

              {/* Contact Info & What Happens Next - Side by Side Below Calendar */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="bg-[#1a1a2e] rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-rust rounded-lg p-2">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-gray-300">hello@riversintelligence.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="bg-rust rounded-lg p-2">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Phone</p>
                        <p className="text-gray-300">(804) 555-RIVER</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="bg-rust rounded-lg p-2">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Location</p>
                        <p className="text-gray-300">Richmond, Virginia</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="bg-rust rounded-lg p-2">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Response Time</p>
                        <p className="text-gray-300">Within 2 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What Happens Next */}
                <div className="bg-gradient-to-r from-rust/20 to-orange-500/20 rounded-2xl p-6 border border-rust/30">
                  <h3 className="text-xl font-bold mb-3 text-white">What Happens Next?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-rust rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <p className="text-gray-300">You'll receive instant confirmation and calendar invite with Zoom link</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-rust rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <p className="text-gray-300">We'll discuss your business needs and create a custom AI strategy</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-rust rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <p className="text-gray-300">Get a detailed proposal and timeline for your AI implementation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 