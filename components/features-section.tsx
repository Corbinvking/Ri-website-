import { Button } from "@/components/ui/button"
import { DottedBackground } from "@/components/ui/dotted-vignette-background"

export function FeaturesSection() {
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

      <div className="container relative z-10">
        {/* This section is now clean - the calendar consultation is handled by CalendarConsultationSection */}
      </div>
    </section>
  )
}
