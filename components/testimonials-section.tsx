export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="bg-gradient-to-r from-purple-900/30 to-orange-900/30 rounded-xl p-8 md:p-16 text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Voice AI that sounds
            <br />
            indistinguishable from humans.
          </h2>
          <p className="text-gray-300 mb-2">Our customers' experiences, in their own words.</p>
          <p className="text-gray-300 mb-6">
            Skeptical? <span className="text-rust">Request a demo</span>, and hear it yourself.
          </p>
          <button className="bg-rust hover:bg-dark-rust text-cream font-medium px-6 py-3 rounded-md">
            Get Started
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a2e] rounded-xl p-6">
            <p className="text-xl font-medium mb-4">The quality of the voice is remarkable.</p>
            <p className="text-gray-300">
              "I was genuinely surprised by how natural the Rivers Intelligence voice agent sounds. Our customers often
              don't realize they're speaking with an AI until we tell them."
            </p>
          </div>

          <div className="bg-[#1a1a2e] rounded-xl p-6">
            <p className="text-xl font-medium mb-4">It handles complex conversations with ease.</p>
            <p className="text-gray-300">
              "The voice agent's ability to understand context and maintain conversation flow is impressive. It can
              handle interruptions, clarifications, and topic changes just like a human agent."
            </p>
          </div>

          <div className="bg-[#1a1a2e] rounded-xl p-6">
            <p className="text-xl font-medium mb-4">
              <span className="text-white">The ROI has been incredible.</span>
            </p>
            <p className="text-gray-300">
              "Within three months of deploying Rivers Intelligence voice agents, we saw a 28% reduction in operational
              costs and a 15% increase in customer satisfaction scores."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
