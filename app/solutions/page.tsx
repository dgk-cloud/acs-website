"use client"

import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global Grid Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none blur-[0.5px]" style={{
        backgroundImage: `
          linear-gradient(rgba(47,116,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(47,116,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#2F74FF]/20 to-[#1E40AF]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-[#2F74FF]/15 to-[#1E40AF]/15 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-[#2F74FF]/25 to-[#1E40AF]/25 rounded-full blur-md animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Gradient Lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2F74FF]/30 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2F74FF]/20 to-transparent"></div>
      </div>
      
      <Navigation />

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Hero Section */}
          <section className="space-y-12">
            <div className="flex flex-col items-center mb-2">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2F74FF]/20 to-[#1E40AF]/20 text-[#2F74FF] px-6 py-3 rounded-full text-sm font-light tracking-wide backdrop-blur-sm border border-[#2F74FF]/30 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Get Started Today
              </div>
            </div>
            
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tighter leading-none">
                Contact <span className="metallic-text bg-gradient-to-r from-[#2F74FF] via-[#1E40AF] to-[#2F74FF] bg-clip-text text-transparent animate-pulse">Us</span>
              </h1>
              
              <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-300/90 leading-relaxed font-light">
                Contact us at <span className="text-[#2F74FF] font-medium">sales@acceleratedcloudstorage.com</span> or set up a meeting to get onboarded to ACS.
              </p>
            </div>
          </section>

          {/* Contact Options with Enhanced Design */}
          <section className="space-y-12">
            {/* Main Contact Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Schedule Meeting Card */}
              <div className="group backdrop-blur-xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-slate-700/50 rounded-3xl p-8 transition-all duration-500 hover:border-[#2F74FF]/50 hover:shadow-[0_20px_60px_rgba(47,116,255,0.3)] hover:scale-105 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2F74FF]/5 to-[#1E40AF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2F74FF] to-[#1E40AF] rounded-2xl mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-light text-white tracking-tight">Schedule a Meeting</h3>
                    <p className="text-slate-300/80 leading-relaxed">
                      Book a 30-minute call with our team to discuss your storage needs and get personalized recommendations.
                    </p>
                  </div>
                  
                  <Button asChild size="lg" className="w-full bg-gradient-to-r from-[#2F74FF] to-[#1E40AF] hover:from-[#2F74FF]/90 hover:to-[#1E40AF]/90 text-white px-8 py-4 rounded-2xl font-light transition-all duration-300 shadow-[0_8px_30px_rgba(47,116,255,0.3)] hover:shadow-[0_12px_40px_rgba(47,116,255,0.4)] hover:scale-105 group-hover:shadow-[0_20px_60px_rgba(47,116,255,0.5)]">
                    <Link href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer">
                      Schedule Now
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Email Card */}
              <div className="group backdrop-blur-xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-slate-700/50 rounded-3xl p-8 transition-all duration-500 hover:border-[#2F74FF]/50 hover:shadow-[0_20px_60px_rgba(47,116,255,0.3)] hover:scale-105 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2F74FF]/5 to-[#1E40AF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-500 rounded-2xl mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-light text-white tracking-tight">Email Us</h3>
                    <p className="text-slate-300/80 leading-relaxed">
                      Send us an email and we'll get back to you within 24 hours to discuss your storage needs.
                    </p>
                  </div>
                  
                  <Button asChild size="lg" variant="outline" className="w-full bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-light transition-all duration-300 border border-white/20 hover:border-[#2F74FF]/50 group-hover:shadow-[0_12px_40px_rgba(255,255,255,0.1)]">
                    <Link href="mailto:sales@acceleratedcloudstorage.com">
                      Send Email
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Image 
                  src="/acs-logo.png" 
                  alt="ACS Logo" 
                  width={200} 
                  height={100} 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-muted-foreground">Worldwide cloud object storage built for AI workloads.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Overview
                </Link>
                <Link href="/pricing" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
                <Link href="/docs" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <Link href="/blog" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
                <Link href="/solutions" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Solutions
                </Link>
                <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link
                  href="/legal/privacy"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/legal/terms"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
                <Link href="/legal/sla" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Service Level Agreement
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground">&copy; 2025 Accelerated Cloud Storage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
