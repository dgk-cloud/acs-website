"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          {/* Logo on the left */}
          <div className="absolute left-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/acs-logo.png" 
                alt="ACS Logo" 
                width={80} 
                height={40} 
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Centered navigation menu */}
          <div className="hidden md:flex items-center bg-gray-800/50 border border-gray-700/50 rounded-full px-6 py-2 backdrop-blur-sm">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors px-3 py-1">
              Overview
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors px-3 py-1">
              Pricing
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-white transition-colors px-3 py-1">
              Docs
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors px-3 py-1">
              Blog
            </Link>
            <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors px-3 py-1">
              Contact
            </Link>
          </div>

          {/* Buttons on the right */}
          <div className="absolute right-0 flex items-center space-x-4">
            <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/30 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/50 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl">
              <Link href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer">Contact</Link>
            </Button>
            <Button asChild size="sm" className="bg-gradient-to-r from-[#2F74FF] to-[#1E40AF] hover:from-[#2F74FF]/90 hover:to-[#1E40AF]/90 text-white border-0 backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-[0_8px_30px_rgba(47,116,255,0.3)] hover:shadow-[0_12px_40px_rgba(47,116,255,0.4)]">
              <Link href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
