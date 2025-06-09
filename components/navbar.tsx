"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0d0d17]/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Mobile logo */}
          <Link href="/" className="md:hidden">
            <div className="relative h-20 w-20">
              <Image src="/rivers-intelligence-logo.png" alt="Rivers Intelligence Logo" width={80} height={80} className="object-contain" />
            </div>
          </Link>
          
          {/* Desktop logo */}
          <Link href="/" className="hidden md:flex items-center">
            <div className="relative h-24 w-24">
              <Image src="/rivers-intelligence-logo.png" alt="Rivers Intelligence Logo" width={96} height={96} className="object-contain" />
            </div>
          </Link>
          
          <nav className="flex items-center gap-4 md:gap-8">
            <Link 
              href="/" 
              className={`hidden md:block text-sm font-medium transition-all duration-300 relative ${
                pathname === "/" 
                  ? "text-rust shadow-[0_4px_12px_rgba(198,93,7,0.5)] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-rust after:shadow-[0_0_8px_rgba(198,93,7,0.8)]" 
                  : "text-gray-200 hover:text-rust"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/demo" 
              className={`text-sm font-medium transition-all duration-300 relative ${
                pathname === "/demo" 
                  ? "text-rust shadow-[0_4px_12px_rgba(198,93,7,0.5)] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-rust after:shadow-[0_0_8px_rgba(198,93,7,0.8)]" 
                  : "text-gray-200 hover:text-rust"
              }`}
            >
              Industry-Specific Demos
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild className="bg-rust hover:bg-dark-rust text-cream shadow-lg shadow-rust/50 hover:shadow-rust/70 hover:shadow-xl transition-all duration-300">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
