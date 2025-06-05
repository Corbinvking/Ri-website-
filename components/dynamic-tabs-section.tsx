"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DemoLeadPopup } from "@/components/ui/demo-lead-popup"
import {
  Bot,
  Building2,
  Stethoscope,
  Scale,
  Scissors,
  ShoppingBag,
  Wrench,
  GraduationCap,
  Home,
  Utensils,
  Car,
  HeartHandshake,
  Briefcase,
  Play,
  Zap,
  Users,
  Shield,
  Code,
  Brain,
  Cpu,
  Workflow,
  CheckCircle,
  Mic
} from "lucide-react"

interface NicheItem {
  id: string
  name: string
  description: string
  demoType: string
  workflowExamples: string[]
}

interface TabContent {
  id: string
  title: string
  subtitle: string
  description: string
  niches: NicheItem[]
  icon: React.ReactNode
  color: string
}

const tabsData: TabContent[] = [
  {
    id: "homeservices",
    title: "Home Services",
    subtitle: "providers",
    description: "Connect homeowners with top-rated local service providers using AI-driven solutions for Richmond.",
    niches: [
      { 
        id: "landscaping", 
        name: "Landscaping", 
        description: "Receptionist • Sales Assistant • Customer Service Rep", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent books initial consultations and sends confirmation emails",
          "Automatically follows up with leads via personalized text messages",
          "Transfers qualified prospects to sales team with context notes",
          "Sends seasonal service reminders and schedules appointments"
        ]
      },
      { 
        id: "hvac", 
        name: "HVAC", 
        description: "Dispatcher • Scheduler • Customer Service Rep", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent handles service requests and books technician visits",
          "Sends maintenance reminder emails to existing customers",
          "Transfers emergency calls to on-call technician with details",
          "Follows up post-service with satisfaction surveys via SMS"
        ]
      },
      { 
        id: "roofing", 
        name: "Roofing", 
        description: "Lead Qualifier • Sales Assistant • Project Coordinator", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent qualifies storm damage leads and books inspections",
          "Sends estimate follow-up emails with financing options",
          "Transfers hot leads to sales team with property details",
          "Coordinates insurance adjuster meetings via calendar invites"
        ]
      },
      { 
        id: "solar", 
        name: "Solar Installation", 
        description: "Consultation Scheduler • Lead Qualifier • Customer Support", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent schedules home energy consultations",
          "Sends customized savings reports via email after calls",
          "Transfers qualified leads to design team with preferences",
          "Follows up with financing application assistance"
        ]
      },
      { 
        id: "plumbing", 
        name: "Plumbing", 
        description: "Emergency Dispatcher • Scheduler • Customer Service", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent triages emergency calls and dispatches plumbers",
          "Books routine maintenance appointments during business hours",
          "Sends arrival time updates via text to waiting customers",
          "Transfers billing questions to office staff with job details"
        ]
      },
      { 
        id: "electrical", 
        name: "Electrical", 
        description: "Project Coordinator • Scheduler • Customer Support", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent schedules electrical inspections and estimates",
          "Sends safety checklists via email before service visits",
          "Transfers complex project leads to master electrician",
          "Follows up with permit status updates and next steps"
        ]
      },
    ],
    icon: <Users className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "professionals",
    title: "Professionals",
    subtitle: "services",
    description: "Empower professional service firms with AI tools to enhance productivity and client satisfaction in Richmond.",
    niches: [
      { 
        id: "dentists", 
        name: "Dentists", 
        description: "Receptionist • Appointment Scheduler • Patient Coordinator", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent handles appointment scheduling and cancellations",
          "Sends appointment reminders via text 24 hours before visit",
          "Transfers insurance questions to billing department",
          "Books follow-up cleanings and sends calendar invitations"
        ]
      },
      { 
        id: "realestate", 
        name: "Real Estate Agents", 
        description: "Lead Qualifier • Showing Coordinator • Follow-up Assistant", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent qualifies buyer leads and schedules showings",
          "Sends property listings via email based on preferences",
          "Transfers hot leads to agents with detailed buyer profiles",
          "Follows up with showing feedback requests and next steps"
        ]
      },
      { 
        id: "lawyers", 
        name: "Lawyers", 
        description: "Intake Specialist • Scheduler • Client Coordinator", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent conducts initial client intake and conflict checks",
          "Schedules consultation appointments and sends intake forms",
          "Transfers urgent matters to attorneys with case summaries",
          "Sends retainer agreements and payment processing links"
        ]
      },
      { 
        id: "accountants", 
        name: "Accountants", 
        description: "Client Coordinator • Document Tracker • Scheduler", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent schedules tax preparation appointments",
          "Sends document checklists via email with deadline reminders",
          "Transfers complex tax questions to CPAs with client context",
          "Follows up on missing documents and extends deadlines"
        ]
      },
      { 
        id: "therapists", 
        name: "Therapists", 
        description: "Scheduler • Wellness Coordinator • Intake Assistant", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent handles appointment booking and rescheduling",
          "Sends session reminders and prep materials via email",
          "Transfers crisis calls to on-call therapist immediately",
          "Conducts wellness check-ins between sessions via phone"
        ]
      },
      { 
        id: "veterinarians", 
        name: "Veterinarians", 
        description: "Receptionist • Scheduler • Care Coordinator", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent schedules wellness exams and vaccination appointments",
          "Sends pet care reminders and educational content via email",
          "Transfers emergency calls to veterinarian with pet history",
          "Follows up post-visit with care instructions and medication reminders"
        ]
      },
    ],
    icon: <Shield className="h-5 w-5" />,
    color: "from-red-500 to-pink-500",
  },
  {
    id: "commerce",
    title: "Commerce",
    subtitle: "businesses",
    description: "Help commerce businesses scale their operations with AI-powered tools for customer service and sales in Richmond.",
    niches: [
      { 
        id: "restaurants", 
        name: "Restaurants", 
        description: "Host • Reservation Coordinator • Order Taker", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent takes reservations and manages waitlist",
          "Sends table ready notifications via text to waiting customers",
          "Transfers special dietary requests to kitchen with details",
          "Follows up with dining experience surveys post-visit"
        ]
      },
      { 
        id: "clothing", 
        name: "Clothing Stores", 
        description: "Sales Associate • Personal Shopper • Customer Service", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent helps customers find sizes and schedules fittings",
          "Sends new arrival notifications based on style preferences",
          "Transfers styling consultation requests to personal shoppers",
          "Follows up with purchase satisfaction and care instructions"
        ]
      },
      { 
        id: "retail", 
        name: "Retail Stores", 
        description: "Customer Service • Inventory Assistant • Sales Support", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent checks product availability and holds items",
          "Sends sale notifications and exclusive offers via email",
          "Transfers complex product questions to specialists",
          "Follows up with return/exchange assistance and feedback"
        ]
      },
      { 
        id: "coaches", 
        name: "Coaches & Consultants", 
        description: "Lead Qualifier • Client Coordinator • Session Scheduler", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent conducts discovery calls and books coaching sessions",
          "Sends goal-setting worksheets and welcome packages via email",
          "Transfers payment questions to billing team with client details",
          "Schedules check-in calls and sends progress tracking reminders"
        ]
      },
      { 
        id: "ecommerce", 
        name: "E-commerce", 
        description: "Customer Service Rep • Order Support • Return Specialist", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent handles order status inquiries and shipping updates",
          "Processes return requests and sends return labels via email",
          "Transfers complex issues to support team with order details",
          "Follows up with delivery confirmations and review requests"
        ]
      },
      { 
        id: "content", 
        name: "Content Creators", 
        description: "Media Coordinator • Audience Engagement • Outreach Specialist", 
        demoType: "voice",
        workflowExamples: [
          "Voice agent books podcast interviews and speaking engagements",
          "Sends content updates and event invitations via email",
          "Transfers media requests to creators with audience preferences",
          "Follows up with audience feedback and collaboration opportunities"
        ]
      },
    ],
    icon: <Code className="h-5 w-5" />,
    color: "from-green-500 to-emerald-500",
  },
]

export function DynamicTabsSection() {
  const [activeTab, setActiveTab] = useState("homeservices")
  const [selectedNiche, setSelectedNiche] = useState<NicheItem | null>(null)
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)
  const [currentDemoType, setCurrentDemoType] = useState("")
  const [currentDemoTitle, setCurrentDemoTitle] = useState("")
  
  // Ref for the demo area to scroll to on mobile
  const demoAreaRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to demo area on mobile when niche is selected
  useEffect(() => {
    if (selectedNiche && demoAreaRef.current) {
      // Check if it's mobile (screen width < 768px)
      const isMobile = window.innerWidth < 768
      
      if (isMobile) {
        // Small delay to ensure the content has rendered
        setTimeout(() => {
          demoAreaRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          })
        }, 300)
      }
    }
  }, [selectedNiche])

  const handleDemoClick = (niche: NicheItem) => {
    setCurrentDemoType(niche.id)
    setCurrentDemoTitle(niche.name)
    setIsDemoPopupOpen(true)
  }

  const handleDemoSubmit = (data: any) => {
    console.log(`${data.demoType} demo lead captured:`, data)
    // Here you would send the data to your backend/CRM
    // The data includes: name, phone, email, demoType, demoTitle
  }

  const activeContent = tabsData.find((tab) => tab.id === activeTab) || tabsData[0]

  return (
    <section className="pt-0 pb-16 bg-[#0d0d17] relative overflow-hidden">
      <div className="container relative z-10 pt-0">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {tabsData.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id)
                setSelectedNiche(null)
              }}
              className={`relative px-4 py-3 rounded-xl border transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#1a1a2e] border-rust text-white"
                  : "bg-[#0f0f1a] border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-[#1a1a2e]"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2">
                {tab.icon}
                <span className="font-medium text-sm">
                  {tab.title} <span className="text-gray-400">{tab.subtitle}</span>
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1a1a2e] rounded-2xl p-6 md:p-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Niches List */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${activeContent.color}`}>{activeContent.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    {activeContent.title} <span className="text-gray-400">{activeContent.subtitle}</span>
                  </h3>
                </div>

                <p className="text-gray-300 text-base mb-6">{activeContent.description}</p>

                <div className="space-y-2">
                  <h4 className="text-base font-semibold text-rust mb-3">Choose Your Niche:</h4>
                  {activeContent.niches.map((niche, index) => (
                    <motion.button
                      key={niche.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedNiche(niche)}
                      className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                        selectedNiche?.id === niche.id
                          ? "bg-rust/20 border-rust text-white"
                          : "bg-[#2a2a40] border-gray-600 text-gray-300 hover:bg-[#3a3a50] hover:border-gray-500"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-sm">{niche.name}</h5>
                          <p className="text-xs text-gray-400 mt-1">{niche.description}</p>
                        </div>
                        <Play className="h-3 w-3 text-rust" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Demo Area */}
              <div ref={demoAreaRef} className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative space-y-4"
                >
                  {/* Background glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${activeContent.color} opacity-20 blur-3xl rounded-2xl`}
                  />

                  {/* Voice Demo content area */}
                  <div className="relative bg-[#0d0d17] rounded-2xl p-6 border border-gray-700">
                    {selectedNiche ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-full flex flex-col"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${activeContent.color}`}>
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                          <h4 className="text-lg font-bold">{selectedNiche.name} AI Demo</h4>
                        </div>

                        <div className="flex-1 flex items-center justify-center">
                          <div className="text-center">
                            {/* Microphone button similar to hero section */}
                            <div className="relative mb-4">
                              <motion.button
                                className="relative group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleDemoClick(selectedNiche)}
                              >
                                {/* Aurora circular glow border */}
                                <div className={`absolute -inset-[2px] rounded-full bg-gradient-to-r ${activeContent.color} opacity-75 blur-lg transition-all group-hover:opacity-100 group-hover:blur-xl`} />
                                
                                {/* Outer glow ring */}
                                <motion.div
                                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${activeContent.color}`}
                                  animate={{ 
                                    scale: [1, 1.15, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                  }}
                                  transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                                
                                {/* Main button */}
                                <div className={`relative w-16 h-16 bg-gradient-to-r ${activeContent.color} rounded-full flex items-center justify-center shadow-lg`}>
                                  <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ 
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "easeInOut"
                                    }}
                                  >
                                    <Mic className="h-6 w-6 text-white" />
                                  </motion.div>
                                </div>
                              </motion.button>

                              {/* Hand-drawn "Try me!" note */}
                              <motion.div
                                initial={{ opacity: 0, x: 20, y: -10 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute -top-2 -right-12 md:-right-16"
                              >
                                {/* Arrow pointing to button */}
                                <svg 
                                  className="absolute top-6 -left-4 w-10 h-6 text-rust" 
                                  viewBox="0 0 40 24" 
                                  fill="none"
                                >
                                  <path 
                                    d="M2 12 C6 10, 16 6, 32 11 C34 12, 36 13, 38 14 L34 12 L36 16" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    style={{
                                      filter: 'drop-shadow(0 0 4px rgba(198, 93, 7, 0.3))'
                                    }}
                                  />
                                </svg>
                                
                                {/* Note text */}
                                <div className="bg-yellow-200 text-gray-800 px-2 py-1 rounded-lg relative transform rotate-2 shadow-lg border-2 border-yellow-300">
                                  <div className="font-handwriting text-xs font-medium">
                                    Try me!
                                  </div>
                                  {/* Tape effect */}
                                  <div className="absolute -top-0.5 left-1 w-4 h-2 bg-yellow-100 opacity-80 rounded-sm transform -rotate-12 border border-yellow-300"></div>
                                </div>
                              </motion.div>
                            </div>
                            <h5 className="text-base font-medium mb-2">Voice AI Demo</h5>
                            <p className="text-gray-400 text-sm mb-4">{selectedNiche.description}</p>
                            <p className="text-gray-300 text-xs">Click the microphone to try the demo</p>
                          </div>
                        </div>

                        <div className="mt-4 text-xs text-gray-400 text-center">
                          <p>🎤 Voice chat demo will be embedded here</p>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-center min-h-[360px]">
                        <div>
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${activeContent.color} flex items-center justify-center mx-auto mb-4`}>
                            <Zap className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="text-lg font-medium mb-3">Select a Niche</h4>
                          <p className="text-gray-400 text-base max-w-xs mx-auto">Choose a niche from the list to see the AI demo in action</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Workflow Automation Examples */}
                  {selectedNiche && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="relative bg-[#0d0d17] rounded-2xl p-6 border border-gray-700"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${activeContent.color}`}>
                          <Workflow className="h-4 w-4 text-white" />
                        </div>
                        <h5 className="text-lg font-bold">Workflow Automation Examples</h5>
                      </div>
                      
                      <div className="space-y-3">
                        {selectedNiche.workflowExamples.map((example, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-rust mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{example}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="relative h-full w-full">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-rust rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Demo Popup */}
      <DemoLeadPopup
        isOpen={isDemoPopupOpen}
        onClose={() => setIsDemoPopupOpen(false)}
        demoType={currentDemoType}
        demoTitle={currentDemoTitle}
        onSubmit={handleDemoSubmit}
      />
    </section>
  )
}
