import { GradientText } from "@/components/ui/gradient-text"

export function HeroSection() {
  return (
    <section className="relative py-8 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-4">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
            <GradientText as="span" className="text-white">
              AI Integration Solutions
            </GradientText>
            <br />
            <span className="text-rust">for Richmond Businesses</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Transform your Richmond business with seamless AI integration. Rivers Intelligence helps local companies
            implement cutting-edge artificial intelligence solutions that drive growth, efficiency, and innovation.
          </p>
        </div>
      </div>
    </section>
  )
}
