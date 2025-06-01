import { Button } from "@/components/ui/button"

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Ready to transform your</span>
            <br />
            <span className="text-rust">Richmond business with AI?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Schedule a free consultation with our Richmond-based AI experts. We'll discuss your specific needs and show
            you how our solutions can drive growth for your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#1a1a2e] to-[#2a2a40] rounded-2xl p-8 md:p-12 text-center">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Book Your Free AI Consultation</h3>
              <p className="text-gray-300 mb-6">
                Get personalized insights on how AI can revolutionize your Richmond business operations.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="bg-rust rounded-full p-3 mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">30-Minute Session</h4>
                  <p className="text-sm text-gray-400">Comprehensive business analysis</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-rust rounded-full p-3 mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Custom Strategy</h4>
                  <p className="text-sm text-gray-400">Tailored AI implementation plan</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-rust rounded-full p-3 mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Quick Results</h4>
                  <p className="text-sm text-gray-400">See immediate opportunities</p>
                </div>
              </div>
            </div>

            {/* Calendar embed placeholder */}
            <div className="bg-[#0d0d17] rounded-xl p-8 mb-6">
              <div className="text-center">
                <div className="bg-rust/20 border border-rust/30 rounded-lg p-6 mb-4">
                  <svg
                    className="w-12 h-12 text-rust mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-300">Calendar booking widget will be embedded here</p>
                  <p className="text-sm text-gray-400 mt-2">Integration coming soon</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-rust hover:bg-dark-rust text-cream px-8 py-3">Schedule Consultation</Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3">
                Learn More About Our Process
              </Button>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              No commitment required • Free consultation • Richmond-based team
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
