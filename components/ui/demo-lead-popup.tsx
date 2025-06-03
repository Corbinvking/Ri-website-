"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Play, Phone, Mail, User, Sparkles } from "lucide-react"

interface DemoLeadPopupProps {
  isOpen: boolean
  onClose: () => void
  demoType: string
  demoTitle: string
  onSubmit?: (data: {
    name: string
    phone: string
    email?: string
    industry: string
    demoType: string
    demoTitle: string
  }) => void
}

export function DemoLeadPopup({ isOpen, onClose, demoType, demoTitle, onSubmit }: DemoLeadPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    industry: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Auto-fill industry based on demo type
  React.useEffect(() => {
    if (demoType && isOpen) {
      setFormData(prev => ({ ...prev, industry: demoType }))
    }
  }, [demoType, isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    onSubmit?.({
      ...formData,
      demoType,
      demoTitle
    })
    
    setIsSubmitting(false)
    onClose()
    
    // Reset form
    setFormData({ name: "", phone: "", email: "", industry: "" })
  }

  const industryOptions = [
    { value: "landscaping", label: "Landscaping" },
    { value: "hvac", label: "HVAC" },
    { value: "roofing", label: "Roofing" },
    { value: "solar", label: "Solar Installation" },
    { value: "plumbing", label: "Plumbing" },
    { value: "electrical", label: "Electrical" },
    { value: "dentist", label: "Dental Practice" },
    { value: "realestate", label: "Real Estate" },
    { value: "lawyers", label: "Legal Services" },
    { value: "accountants", label: "Accounting" },
    { value: "therapists", label: "Therapy/Counseling" },
    { value: "veterinarians", label: "Veterinary" },
    { value: "restaurants", label: "Restaurant" },
    { value: "clothing", label: "Clothing Store" },
    { value: "retail", label: "Retail Store" },
    { value: "coaches", label: "Coach/Consultant" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "content", label: "Content Creator" },
    { value: "voice-ai", label: "General Business" },
    { value: "other", label: "Other" }
  ]

  const getDemoDescription = () => {
    switch (demoType) {
      case "voice-ai":
        return "Experience our AI voice assistant that handles calls, schedules appointments, and qualifies leads 24/7."
      case "dentist":
        return "See how our AI receptionist manages dental appointment scheduling and patient inquiries."
      case "hvac":
        return "Watch our AI dispatcher handle emergency HVAC calls and service scheduling."
      case "landscaping":
        return "Experience how our AI handles landscaping consultations and project bookings."
      case "realestate":
        return "See our AI qualify real estate leads and schedule property showings."
      case "lawyers":
        return "Watch our AI conduct initial client intake and schedule legal consultations."
      default:
        return "Experience how our AI automation can transform your business operations."
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="bg-[#1a1a2e] rounded-2xl border border-gray-700 w-full max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="bg-gradient-to-r from-rust to-orange-500 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Access {demoTitle} Demo</h2>
              <p className="text-gray-300 text-sm">
                {getDemoDescription()}
              </p>
            </div>

            {/* Enhancement Notice */}
            <div className="bg-gradient-to-r from-rust/20 to-orange-500/20 rounded-lg p-4 mb-6 border border-rust/30">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-rust flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-medium text-sm mb-1">Enhanced Demo Experience</h3>
                  <p className="text-gray-300 text-xs">
                    Providing your contact info allows us to show you the full automation flow and personalize the demo for your business type.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="h-4 w-4 inline mr-1" />
                  Name *
                </label>
                <Input
                  required
                  className="bg-[#0d0d17] border-gray-700 text-white focus:border-rust"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Phone className="h-4 w-4 inline mr-1" />
                  Phone Number *
                </label>
                <Input
                  required
                  type="tel"
                  className="bg-[#0d0d17] border-gray-700 text-white focus:border-rust"
                  placeholder="(804) 555-0123"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="h-4 w-4 inline mr-1" />
                  Email (Optional)
                </label>
                <Input
                  type="email"
                  className="bg-[#0d0d17] border-gray-700 text-white focus:border-rust"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Industry/Business Type *
                </label>
                <select 
                  required
                  className="w-full px-3 py-2 bg-[#0d0d17] border border-gray-700 rounded-md text-white focus:border-rust focus:outline-none"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                >
                  <option value="">Select your industry</option>
                  {industryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Hidden context fields */}
              <input type="hidden" value={demoType} />
              <input type="hidden" value={demoTitle} />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rust hover:bg-dark-rust text-white py-3 text-lg shadow-lg shadow-rust/50 hover:shadow-rust/70 hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Loading Demo...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Start {demoTitle} Demo
                  </>
                )}
              </Button>
            </form>

            {/* Footer */}
            <p className="text-center text-xs text-gray-500 mt-4">
              Demo Type: {demoType} • We'll contact you with the {demoTitle.toLowerCase()} AI assistant
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 