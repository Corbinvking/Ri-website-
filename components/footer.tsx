import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0d0d17] border-t border-gray-800 pt-16 pb-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/rivers-intelligence-logo.png" alt="Rivers Intelligence Logo" width={120} height={32} className="object-contain" />
            </Link>
            <p className="text-gray-400 mb-4">Richmond-Based AI Integration Solutions for Businesses Nationwide</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-rust">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rust">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rust">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Industries</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Retail & E-commerce
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Manufacturing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Financial Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Professional Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    AI Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Implementation Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    ROI Calculator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Support Center
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Data Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-rust text-sm">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <Link href="#" className="text-gray-400 hover:text-rust text-xs">
              Privacy
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="#" className="text-gray-400 hover:text-rust text-xs">
              Terms
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="#" className="text-gray-400 hover:text-rust text-xs">
              Cookies
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="#" className="text-gray-400 hover:text-rust text-xs">
              Accessibility
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/vsl" className="text-gray-400 hover:text-rust text-xs">
              Portal
            </Link>
          </div>
          <div className="text-gray-400 text-xs">© 2025 Rivers Intelligence | All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
