"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0d0d17]/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <Image src="/ri-logo.png" alt="RI Logo" width={40} height={40} className="object-contain" />
            </div>
            <span className="text-xl font-bold text-rust">Rivers Intelligence</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="flex items-center text-sm font-medium text-gray-200 hover:text-rust">
              Solutions <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <Link href="#" className="flex items-center text-sm font-medium text-gray-200 hover:text-rust">
              Industries <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <Link href="#" className="flex items-center text-sm font-medium text-gray-200 hover:text-rust">
              Platform <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <Link href="#" className="flex items-center text-sm font-medium text-gray-200 hover:text-rust">
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-200 hover:text-rust">
              About Us
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-200 hover:text-rust">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hidden md:block text-sm font-medium text-gray-200 hover:text-rust">
            Sign in
          </Link>
          <Button className="bg-rust hover:bg-dark-rust text-cream">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
