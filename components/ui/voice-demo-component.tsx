"use client"

import { useState, useEffect, useRef } from "react"
import { Mic, MicOff, Phone, PhoneOff } from "lucide-react"
import { Button } from "@/components/ui/button"

// Import Vapi directly from the npm package
let Vapi: any = null

// Dynamically import Vapi to avoid SSR issues
const loadVapi = async () => {
  if (typeof window !== "undefined" && !Vapi) {
    try {
      const vapiModule = await import("@vapi-ai/web")
      Vapi = vapiModule.default || vapiModule
      return Vapi
    } catch (error) {
      console.error("Failed to import Vapi:", error)
      throw error
    }
  }
  return Vapi
}

// Types for Vapi
interface VapiInstance {
  start: (assistantId?: string) => void
  stop: () => void
  on: (event: string, callback: (...args: any[]) => void) => void
  off: (event: string, callback: (...args: any[]) => void) => void
  isMuted: () => boolean
  setMuted: (muted: boolean) => void
}

interface VoiceDemoComponentProps {
  publicKey: string
  assistantId: string
  onCallStart?: () => void
  onCallEnd?: () => void
  onTranscript?: (transcript: string, role: "user" | "assistant") => void
}

export function VoiceDemoComponent({
  publicKey,
  assistantId,
  onCallStart,
  onCallEnd,
  onTranscript
}: VoiceDemoComponentProps) {
  const [isCallActive, setIsCallActive] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [vapiLoaded, setVapiLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const vapiRef = useRef<VapiInstance | null>(null)

  // Load Vapi SDK
  useEffect(() => {
    const initializeVapi = async () => {
      try {
        await loadVapi()
        console.log("Vapi SDK loaded successfully")
        setVapiLoaded(true)
      } catch (error) {
        console.error("Failed to load Vapi SDK:", error)
        setError("Failed to load voice AI service")
      }
    }

    initializeVapi()
  }, [])

  // Initialize Vapi instance
  useEffect(() => {
    if (!vapiLoaded || !Vapi || !publicKey || !assistantId) return

    try {
      const vapi = new Vapi(publicKey)
      vapiRef.current = vapi

      // Event listeners
      vapi.on("call-start", () => {
        console.log("Call started")
        setIsCallActive(true)
        setIsConnecting(false)
        setError(null)
        onCallStart?.()
      })

      vapi.on("call-end", () => {
        console.log("Call ended")
        setIsCallActive(false)
        setIsConnecting(false)
        onCallEnd?.()
      })

      vapi.on("message", (message: any) => {
        console.log("Vapi message:", message)
        if (message.type === "transcript") {
          onTranscript?.(message.transcript, message.role)
        }
      })

      vapi.on("error", (error: any) => {
        console.error("Vapi error:", error)
        setIsCallActive(false)
        setIsConnecting(false)
        setError("Voice call failed. Please try again.")
      })

      return () => {
        if (vapi) {
          try {
            vapi.stop()
          } catch (e) {
            console.warn("Error stopping Vapi:", e)
          }
        }
      }
    } catch (error) {
      console.error("Error initializing Vapi:", error)
      setError("Failed to initialize voice AI")
    }
  }, [vapiLoaded, publicKey, assistantId, onCallStart, onCallEnd, onTranscript])

  const startCall = async () => {
    if (!vapiRef.current) {
      setError("Voice AI not ready. Please refresh and try again.")
      return
    }
    
    try {
      setIsConnecting(true)
      setError(null)
      await vapiRef.current.start(assistantId)
    } catch (error) {
      console.error("Error starting call:", error)
      setError("Failed to start voice call")
      setIsConnecting(false)
    }
  }

  const stopCall = () => {
    if (!vapiRef.current) return
    
    try {
      vapiRef.current.stop()
    } catch (error) {
      console.error("Error stopping call:", error)
    }
  }

  const toggleMute = () => {
    if (!vapiRef.current) return
    
    try {
      const newMutedState = !isMuted
      vapiRef.current.setMuted(newMutedState)
      setIsMuted(newMutedState)
    } catch (error) {
      console.error("Error toggling mute:", error)
    }
  }

  // Loading state
  if (!vapiLoaded && !error) {
    return (
      <div className="flex flex-col items-center space-y-3">
        <div className="w-16 h-16 border-4 border-rust border-t-transparent rounded-full animate-spin"></div>
        <div className="text-white text-center">
          <p className="font-medium">Loading Voice AI...</p>
          <p className="text-gray-400 text-sm">Preparing your demo experience</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center space-y-3">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
          <Phone className="w-8 h-8 text-red-400" />
        </div>
        <div className="text-center">
          <p className="text-red-400 font-medium">Demo Unavailable</p>
          <p className="text-gray-400 text-sm">{error}</p>
          <Button 
            onClick={() => window.location.reload()} 
            variant="outline" 
            className="mt-3 border-gray-600 text-white hover:bg-gray-800"
          >
            Refresh Page
          </Button>
        </div>
      </div>
    )
  }

  // Missing credentials
  if (!publicKey || !assistantId) {
    return (
      <div className="flex flex-col items-center space-y-3">
        <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center">
          <Mic className="w-8 h-8 text-yellow-400" />
        </div>
        <div className="text-center">
          <p className="text-yellow-400 font-medium">Demo Configuration Needed</p>
          <p className="text-gray-400 text-sm">Voice AI credentials required</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Voice Control Button */}
      <div className="relative">
        <Button
          onClick={isCallActive ? stopCall : startCall}
          disabled={isConnecting}
          className={`
            w-20 h-20 rounded-full p-0 transition-all duration-300
            ${isCallActive 
              ? "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/50" 
              : "bg-gradient-to-b from-rust to-orange-500 hover:from-dark-rust hover:to-rust shadow-lg shadow-rust/50"
            }
            ${isConnecting ? "animate-pulse" : ""}
          `}
        >
          {isConnecting ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : isCallActive ? (
            <PhoneOff className="w-8 h-8 text-white" />
          ) : (
            <Mic className="w-8 h-8 text-white" />
          )}
        </Button>
        
        {/* Status indicator */}
        {isCallActive && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </div>

      {/* Status Text */}
      <div className="text-center">
        <p className="text-white font-medium">
          {isConnecting 
            ? "Connecting..." 
            : isCallActive 
              ? "Voice Demo Active" 
              : "Click to Try Voice Demo"
          }
        </p>
        <p className="text-gray-400 text-sm">
          {isConnecting 
            ? "Please wait while we connect you" 
            : isCallActive 
              ? "Speak naturally with our AI assistant" 
              : "Experience our AI voice technology live"
          }
        </p>
      </div>

      {/* Mute Button (only when call is active) */}
      {isCallActive && (
        <Button
          onClick={toggleMute}
          variant="outline"
          className="border-gray-600 text-white hover:bg-gray-800"
        >
          {isMuted ? <MicOff className="w-4 h-4 mr-2" /> : <Mic className="w-4 h-4 mr-2" />}
          {isMuted ? "Unmute" : "Mute"}
        </Button>
      )}
    </div>
  )
}
