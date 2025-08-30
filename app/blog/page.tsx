"use client"

import { Navigation } from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
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

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Hero Section */}
          <section className="space-y-8">
            <div className="flex flex-col items-center mb-2">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2F74FF]/20 to-[#1E40AF]/20 text-[#2F74FF] px-4 py-2 rounded-full text-sm font-light tracking-wide backdrop-blur-sm border border-[#2F74FF]/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                Coming Soon
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter leading-none">
              Blog <span className="metallic-text">Coming Soon</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-slate-300/90 leading-relaxed">
              We&apos;re working hard to bring you valuable content. Stay tuned for insights about cloud storage, AI workloads, and industry trends.
            </p>
          </section>

          {/* CTA Section */}
          <section className="space-y-8">
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2F74FF] to-[#1E40AF] hover:from-[#2F74FF]/90 hover:to-[#1E40AF]/90 text-white px-8 py-3 rounded-xl font-light transition-all duration-300 shadow-[0_8px_30px_rgba(47,116,255,0.3)] hover:shadow-[0_12px_40px_rgba(47,116,255,0.4)] hover:scale-105">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
                <Link href="/" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-light transition-all duration-300 border border-white/20">
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="mb-6">
                <Image 
                  src="/acs-logo.png" 
                  alt="ACS Logo" 
                  width={200} 
                  height={100} 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-slate-300/80 text-lg leading-relaxed font-light">Worldwide cloud object storage built for AI workloads.</p>
            </div>

            <div>
              <h4 className="text-lg font-light text-white mb-6 tracking-tight">Product</h4>
              <div className="space-y-3">
                <Link href="/" className="block text-slate-300/80 hover:text-white transition-colors font-light">
                  Overview
                </Link>
                <Link href="/pricing" className="block text-slate-300/80 hover:text-white transition-colors font-light">
                  Pricing
                </Link>
                <Link href="/docs" className="block text-slate-300/80 hover:text-white transition-colors font-light">
                  Documentation
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-light text-white mb-6 tracking-tight">Company</h4>
              <div className="space-y-3">
                <Link href="/blog" className="block text-slate-300/80 hover:text-white transition-colors font-light">
                  Blog
                </Link>
                <Link href="/solutions" className="block text-slate-300/80 hover:text-white transition-colors font-light">
                  Solutions
                </Link>
                <Link href="/contact" className="block text-slate-300/80 hover:text-white transition-colors font-light">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-light text-white mb-6 tracking-tight">Legal</h4>
              <div className="space-y-3">
                <Link
                  href="/legal/privacy"
                  className="block text-slate-300/80 hover:text-white transition-colors font-light"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/legal/terms"
                  className="block text-slate-300/80 hover:text-white transition-colors font-light"
                >
                  Terms of Service
                </Link>
                <Link href="/legal/sla" className="block text-slate-300/80 hover:text-white transition-colors font-light">
                  Service Level Agreement
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700/50 mt-12 pt-8 text-center">
            <p className="text-slate-400 font-light">&copy; 2025 Accelerated Cloud Storage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
