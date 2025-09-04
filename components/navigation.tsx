"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function Navigation() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
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
                width={56} 
                height={28} 
                className="h-10 w-auto md:h-16"
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
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors px-3 py-1">
              Contact
            </Link>
          </div>

          {/* Mobile: hamburger that opens a full-screen menu */}
          <div className="absolute right-0 md:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="h-10 w-10 rounded-2xl bg-blue-950/40 border border-blue-700/50 flex items-center justify-center text-blue-200 shadow-[0_8px_30px_rgba(47,116,255,0.20)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </svg>
            </button>
          </div>

          {/* Desktop: buttons on the right */}
          <div className="hidden md:flex absolute right-0 items-center space-x-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-xl bg-white/5 text-slate-200 border border-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30 shadow-sm hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:-translate-y-0.5"
            >
              <Link href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer">Contact</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-xl bg-gradient-to-r from-[#2F74FF] to-[#1E40AF] text-white border-transparent backdrop-blur-sm transition-all duration-300 shadow-[0_10px_30px_rgba(47,116,255,0.35)] hover:shadow-[0_20px_60px_rgba(47,116,255,0.45)] hover:from-[#2F74FF]/90 hover:to-[#1E40AF]/90 hover:-translate-y-0.5 hover:scale-[1.03]"
            >
              <Link href="/#get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#050816]/98">
          <div className="max-w-7xl mx-auto px-4 pt-6">
            <div className="flex items-center justify-between">
              <Image src="/acs-logo.png" alt="ACS Logo" width={56} height={28} className="h-10 w-auto" />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="h-10 w-10 rounded-2xl bg-blue-200/20 border border-blue-300/30 flex items-center justify-center text-blue-100"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {/* Solid dark panel behind buttons */}
            <div className="mt-6 rounded-3xl bg-slate-950/95 border border-white/10 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.6)]">
            <nav className="space-y-3">
              {[
                { label: "Platform", href: "/" },
                { label: "Pricing", href: "/pricing" },
                { label: "Docs", href: "/docs" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Get Started", href: "/#get-started" },
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    setOpen(false)
                    router.push(item.href)
                  }}
                  className="w-full flex items-center justify-between text-left text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-base"
                >
                  <span>{item.label}</span>
                  <span className="text-blue-300">→</span>
                </button>
              ))}
            </nav>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
