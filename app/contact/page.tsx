"use client"

import { Navigation } from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen relative">
      {/* Global Grid Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none blur-[0.5px]" style={{
        backgroundImage: `
          linear-gradient(rgba(47,116,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(47,116,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
      
      <Navigation />

      <main className="relative z-10 pt-24 md:pt-28 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10">
          {/* Hero Section */}
          <section className="space-y-6 md:space-y-8 mt-2 md:mt-0">
            <div className="flex flex-col items-center mb-2">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2F74FF]/20 to-[#1E40AF]/20 text-[#2F74FF] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-light tracking-wide backdrop-blur-sm border border-[#2F74FF]/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Contact
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tighter leading-none">
              Contact <span className="metallic-text">Us</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-sm md:text-base lg:text-lg text-slate-300/90 leading-relaxed">
              Contact us at sales@acceleratedcloudstorage.com or set up a meeting to get onboarded to ACS.
            </p>
          </section>

          {/* Contact Options */}
          <section className="space-y-6 md:space-y-8">
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-4 md:p-6">
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link 
                  href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#2F74FF] to-[#1E40AF] hover:from-[#2F74FF]/90 hover:to-[#1E40AF]/90 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-light transition-all duration-300 shadow-[0_8px_30px_rgba(47,116,255,0.3)] hover:shadow-[0_12px_40px_rgba(47,116,255,0.4)] hover:scale-105 text-sm md:text-base"
                >
                  Schedule a Meeting
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
                <Link 
                  href="mailto:sales@acceleratedcloudstorage.com"
                  className="inline-flex items-center gap-2 md:gap-3 bg-white/10 hover:bg-white/20 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-light transition-all duration-300 border border-white/20 text-sm md:text-base"
                >
                  Email Us
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 md:py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-2 md:mb-3">
                <Image 
                  src="/acs-logo.png" 
                  alt="ACS Logo" 
                  width={200} 
                  height={100} 
                  className="h-8 md:h-10 lg:h-12 w-auto"
                />
              </div>
              <p className="text-slate-300/80 text-xs md:text-sm lg:text-base leading-relaxed font-light">Worldwide cloud object storage built for AI workloads.</p>
            </div>

            <div>
              <h4 className="text-sm md:text-base lg:text-lg font-light text-white mb-2 md:mb-3 lg:mb-4 tracking-tight">Product</h4>
              <div className="space-y-1 md:space-y-2">
                <span className="block text-slate-300/80 font-light text-xs md:text-sm lg:text-base">
                  Overview
                </span>
                <span className="block text-slate-300/80 font-light text-xs md:text-sm lg:text-base">
                  Pricing
                </span>
                <span className="block text-slate-300/80 font-light text-xs md:text-sm lg:text-base">
                  Documentation
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-sm md:text-base lg:text-lg font-light text-white mb-2 md:mb-3 lg:mb-4 tracking-tight">Company</h4>
              <div className="space-y-1 md:space-y-2">
                <span className="block text-slate-300/80 font-light text-xs md:text-sm lg:text-base">
                  Blog
                </span>
                <span className="block text-slate-300/80 font-light text-xs md:text-sm lg:text-base">
                  Contact
                </span>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-sm md:text-base lg:text-lg font-light text-white mb-2 md:mb-3 lg:mb-4 tracking-tight">Legal</h4>
              <div className="space-y-1 md:space-y-2">
                <span className="block text-slate-300/80 font-light text-xs md:text-sm lg:text-base">
                  Privacy Policy
                </span>
                <span className="block text-slate-300/80 font-light text-xs md:text-sm lg:text-base">
                  Terms of Service
                </span>
                <span className="block text-slate-300/80 font-light text-xs md:text-sm lg:text-base">
                  Service Level Agreement
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700/50 mt-4 md:mt-6 lg:mt-8 pt-3 md:pt-4 lg:pt-6 text-center">
            <p className="text-slate-400 font-light text-xs md:text-sm lg:text-base">&copy; 2025 Accelerated Cloud Storage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
