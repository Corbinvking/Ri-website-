"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Play, Phone } from "lucide-react"
import Script from "next/script"

interface DemoLeadPopupProps {
  isOpen: boolean
  onClose: () => void
  demoType: string
  demoTitle: string
  onSubmit?: (data: any) => void
}

export function DemoLeadPopup({ isOpen, onClose, demoType, demoTitle, onSubmit }: DemoLeadPopupProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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
    <>
      {/* GHL Form Script */}
      <Script 
        src="https://link.msgsndr.com/js/form_embed.js" 
        strategy="lazyOnload"
      />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="bg-[#1a1a2e] rounded-2xl border border-gray-700 w-full max-w-sm relative my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors z-20"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Compact Header */}
              <div className="p-3 pb-2">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-rust to-orange-500 rounded-full p-1 w-6 h-6 mx-auto mb-1 flex items-center justify-center">
                    <Play className="h-3 w-3 text-white" />
                  </div>
                  <h2 className="text-sm font-bold text-white mb-1">Access {demoTitle} Demo</h2>
                  <p className="text-gray-300 text-xs mb-2">
                    {getDemoDescription()}
                  </p>
                  
                  {/* Enhancement Notice */}
                  <div className="bg-gradient-to-r from-rust/20 to-orange-500/20 rounded-lg p-2 border border-rust/30">
                    <div className="flex items-start gap-2">
                      <Phone className="h-3 w-3 text-rust flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-white font-medium text-xs mb-1">Instant AI Demo Call</h3>
                        <p className="text-gray-300 text-xs">
                          After providing your information, you'll receive an instant demo call from our AI software. It will perform its assigned role, demonstrate the defined actions, and show you exactly how it would handle real customer interactions for your business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Very Compact GHL Form Embed */}
              <div className="px-3 pb-3">
                <div className="form-container-override">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/Vc1gEOzbjHKtDzJF7BPO"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '500px',
                      border: 'none',
                      borderRadius: '6px',
                      backgroundColor: '#0d0d17',
                      maxHeight: '500px',
                      minHeight: '500px'
                    }}
                    id="inline-demo-tiny-Vc1gEOzbjHKtDzJF7BPO" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="demo lead form"
                    data-height="500"
                    data-layout-iframe-id="inline-demo-tiny-Vc1gEOzbjHKtDzJF7BPO"
                    data-form-id="Vc1gEOzbjHKtDzJF7BPO"
                    title="Demo Lead Form"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 