"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Users, Shield, Code, Brain, Bot, Cpu } from "lucide-react"

interface TabContent {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  image: string
  icon: React.ReactNode
  color: string
}

const tabsData: TabContent[] = [
  {
    id: "homeservices",
    title: "Home Services",
    subtitle: "providers",
    description: "Connect homeowners with top-rated local service providers using AI-driven solutions for Richmond.",
    features: [
      "⚡ AI-powered lead generation and qualification",
      "⚡ Smart scheduling and appointment management",
      "⚡ Automated customer communication and follow-up",
      "⚡ Predictive pricing and demand forecasting",
    ],
    image: "/placeholder.svg?height=400&width=600",
    icon: <Users className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "professionals",
    title: "Professionals",
    subtitle: "services",
    description:
      "Empower professional service firms with AI tools to enhance productivity and client satisfaction in Richmond.",
    features: [
      "⚡ AI-driven task automation and workflow optimization",
      "⚡ Intelligent document management and analysis",
      "⚡ Personalized client communication and engagement",
      "⚡ Data-driven insights for better decision-making",
    ],
    image: "/placeholder.svg?height=400&width=600",
    icon: <Shield className="h-5 w-5" />,
    color: "from-red-500 to-pink-500",
  },
  {
    id: "infoproducts",
    title: "Info Products",
    subtitle: "creators",
    description:
      "Help information product creators scale their businesses with AI-powered tools for content creation and marketing in Richmond.",
    features: [
      "⚡ AI-assisted content creation and optimization",
      "⚡ Automated marketing and social media management",
      "⚡ Personalized customer segmentation and targeting",
      "⚡ Data-driven insights for product development",
    ],
    image: "/placeholder.svg?height=400&width=600",
    icon: <Code className="h-5 w-5" />,
    color: "from-green-500 to-emerald-500",
  },
]

export function DynamicTabsSection() {
  const [activeTab, setActiveTab] = useState("homeservices")

  const activeContent = tabsData.find((tab) => tab.id === activeTab) || tabsData[0]

  return (
    <section className="pt-0 pb-20 bg-[#0d0d17] relative overflow-hidden">
      <div className="container relative z-10 pt-0">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {tabsData.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-4 rounded-xl border transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#1a1a2e] border-rust text-white"
                  : "bg-[#0f0f1a] border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-[#1a1a2e]"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2">
                {tab.icon}
                <span className="font-medium">
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
            className="bg-[#1a1a2e] rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${activeContent.color}`}>{activeContent.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {activeContent.title} <span className="text-gray-400">{activeContent.subtitle}</span>
                  </h3>
                </div>

                <p className="text-gray-300 text-lg mb-6">{activeContent.description}</p>

                <div className="space-y-3">
                  {activeContent.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <button className="bg-rust hover:bg-dark-rust text-cream px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                    Learn More
                  </button>
                </motion.div>
              </div>

              {/* Image/Visualization */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  {/* Background glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${activeContent.color} opacity-20 blur-3xl rounded-2xl`}
                  />

                  {/* Main content area */}
                  <div className="relative bg-[#0d0d17] rounded-2xl p-8 border border-gray-700">
                    <div className="flex items-center justify-center h-64">
                      {/* AI integration visualization */}
                      <div className="relative">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className={`w-20 h-20 rounded-full bg-gradient-to-r ${activeContent.color} flex items-center justify-center`}
                        >
                          <Brain className="h-8 w-8 text-white" />
                        </motion.div>

                        {/* Connection lines */}
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            className={`absolute inset-0 rounded-full border-2 border-gradient-to-r ${activeContent.color}`}
                            style={{ borderColor: `rgba(198, 93, 7, ${0.3 / i})` }}
                            animate={{ scale: [1, 1.5 + i * 0.3], opacity: [0.6, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Feature icons */}
                    <div className="flex justify-around mt-6">
                      <div className="flex flex-col items-center gap-2">
                        <Bot className="h-6 w-6 text-rust" />
                        <span className="text-xs text-gray-400">Automate</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <Cpu className="h-6 w-6 text-rust" />
                        <span className="text-xs text-gray-400">Analyze</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <Zap className="h-6 w-6 text-rust" />
                        <span className="text-xs text-gray-400">Optimize</span>
                      </div>
                    </div>
                  </div>
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
    </section>
  )
}
