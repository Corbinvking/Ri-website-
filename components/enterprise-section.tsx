"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Martinez",
      company: "Martinez Landscaping",
      role: "Owner",
      content: "Rivers Intelligence transformed our business. Their AI voice assistant handles all our scheduling calls, freeing up our team to focus on actual landscaping work. We've increased our booking capacity by 40%.",
      rating: 5,
      location: "Richmond, VA"
    },
    {
      name: "Dr. James Thompson",
      company: "Thompson Family Dentistry", 
      role: "Practice Owner",
      content: "The AI receptionist never misses a call and perfectly handles appointment scheduling. Our no-show rate dropped by 60% thanks to the automated reminder system. Best investment we've made.",
      rating: 5,
      location: "Richmond, VA"
    },
    {
      name: "Mike Chen",
      company: "Elite HVAC Services",
      role: "Operations Manager", 
      content: "Having 24/7 AI support means we never miss emergency service calls. The system prioritizes urgent requests and dispatches our technicians efficiently. Our customer satisfaction scores are at an all-time high.",
      rating: 5,
      location: "Richmond, VA"
    }
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">What Richmond Businesses Say</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Local business owners share how Rivers Intelligence AI integration transformed their operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a2e] rounded-xl p-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-rust mb-4 opacity-60" />
              
              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author info */}
              <div className="border-t border-gray-700 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-rust text-sm">{testimonial.role}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
                <p className="text-gray-500 text-xs mt-1">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
