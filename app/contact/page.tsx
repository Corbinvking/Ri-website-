import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DottedBackground } from "@/components/ui/dotted-vignette-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Brain, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0d0d17] text-white overflow-x-hidden">
      <Navbar />
      
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
                <Brain className="h-6 w-6 text-rust" />
                <span className="text-rust font-medium">Let's Connect</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Ready to Transform</span>
                <br />
                <span className="text-rust">Your Richmond Business?</span>
              </h1>
              <p className="text-gray-300 text-xl max-w-2xl mx-auto">
                Get a free consultation and discover how AI can revolutionize your operations. 
                We'll create a custom solution that fits your specific business needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-white">Get Your Free AI Assessment</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                      <Input 
                        className="bg-[#0d0d17] border-gray-700 text-white focus:border-rust"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                      <Input 
                        className="bg-[#0d0d17] border-gray-700 text-white focus:border-rust"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <Input 
                      type="email"
                      className="bg-[#0d0d17] border-gray-700 text-white focus:border-rust"
                      placeholder="john@yourcompany.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <Input 
                      className="bg-[#0d0d17] border-gray-700 text-white focus:border-rust"
                      placeholder="Your Company Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <Input 
                      type="tel"
                      className="bg-[#0d0d17] border-gray-700 text-white focus:border-rust"
                      placeholder="(804) 555-0123"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
                    <select className="w-full px-3 py-2 bg-[#0d0d17] border border-gray-700 rounded-md text-white focus:border-rust focus:outline-none">
                      <option value="">Select your industry</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="hvac">HVAC</option>
                      <option value="roofing">Roofing</option>
                      <option value="solar">Solar Installation</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="dental">Dental Practice</option>
                      <option value="realestate">Real Estate</option>
                      <option value="legal">Legal Services</option>
                      <option value="accounting">Accounting</option>
                      <option value="therapy">Therapy/Counseling</option>
                      <option value="veterinary">Veterinary</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="retail">Retail/Commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Tell us about your business challenges</label>
                    <Textarea 
                      className="bg-[#0d0d17] border-gray-700 text-white focus:border-rust min-h-[120px]"
                      placeholder="What processes would you like to automate? How many calls do you receive daily? What's your biggest operational challenge?"
                    />
                  </div>
                  
                  <Button className="w-full bg-rust hover:bg-dark-rust text-white py-3 text-lg shadow-lg shadow-rust/50 hover:shadow-rust/70 hover:shadow-xl transition-all duration-300">
                    Get Your Free AI Assessment
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
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

                <div className="bg-gradient-to-r from-rust/20 to-orange-500/20 rounded-2xl p-6 border border-rust/30">
                  <h3 className="text-xl font-bold mb-3 text-white">What Happens Next?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-rust rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <p className="text-gray-300">We'll review your business needs and schedule a 30-minute discovery call</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-rust rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <p className="text-gray-300">Our team will create a custom AI integration plan for your business</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-rust rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <p className="text-gray-300">We'll implement and launch your AI solution with full support</p>
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