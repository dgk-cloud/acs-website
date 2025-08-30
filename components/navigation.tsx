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
              Solutions
            </Link>
          </div>

          {/* Buttons on the right */}
          <div className="absolute right-0 flex items-center space-x-4">
            <Button asChild variant="outline" size="sm" className="bg-blue-900/30 border-blue-700/50 text-blue-300 backdrop-blur-sm hover:bg-blue-900/50 hover:border-blue-600/70 transition-all duration-300 hover:scale-105">
              <Link href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer">Contact</Link>
            </Button>
            <Button asChild size="sm" className="bg-blue-900/30 border-blue-700/50 text-blue-300 backdrop-blur-sm hover:bg-blue-900/50 hover:border-blue-600/70 transition-all duration-300 hover:scale-105">
              <Link href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
