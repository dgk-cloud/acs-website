"use client"

import { Navigation } from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"

export default function PricingPage() {
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

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 space-y-28">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex flex-col items-center mb-2">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2F74FF]/20 to-[#1E40AF]/20 text-[#2F74FF] px-4 py-2 rounded-full text-sm font-light tracking-wide backdrop-blur-sm border border-[#2F74FF]/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5Z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
              Transparent Pricing
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter leading-none">
            ACS provides object storage built for <span className="metallic-text">AI workloads</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-300/90 leading-relaxed">
            Use your data freely from any cloud at any time. Simple transparent pricing. Only pay for what you use in ACS with no hidden fees.
          </p>
          <div className="mt-8">
            <Link href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2F74FF] to-[#1E40AF] hover:from-[#2F74FF]/90 hover:to-[#1E40AF]/90 text-white px-10 py-5 rounded-2xl font-light text-xl tracking-tight transition-all duration-300 shadow-[0_8px_30px_rgba(47,116,255,0.3)] hover:shadow-[0_12px_40px_rgba(47,116,255,0.4)] hover:scale-105">
              Get Started Today
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-6xl mx-auto space-y-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8 transition-all duration-300 hover:border-[#2F74FF]/50 hover:shadow-[0_8px_30px_rgba(47,116,255,0.2)] hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-[#2F74FF] rounded-full"></div>
                <h2 className="text-2xl font-light tracking-tight text-white">Free Tier</h2>
              </div>
              <p className="text-slate-300/80 mb-8 text-base leading-relaxed">Perfect for getting started with ACS.</p>
              <div className="mb-10">
                <span className="text-5xl font-light text-white">$0</span>
                <span className="text-slate-300/60">/mo</span>
              </div>
              <ul className="space-y-3 text-sm flex-1">
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">5 GB of data storage per month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">10,000 requests per month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">Zero egress fees</span>
                </li>
              </ul>
              <Link href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer" className="mt-10 w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-light transition-all duration-300 border border-white/20 block text-center">
                Get Started Free
              </Link>
            </div>

            {/* Pay As You Go */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-[#2F74FF]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(47,116,255,0.3)] hover:scale-105 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2F74FF] to-[#1E40AF] text-xs px-3 py-1 rounded-full text-white font-light">
                Most Popular
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-[#2F74FF] rounded-full"></div>
                <h2 className="text-2xl font-light tracking-tight text-white">Pay As You Go</h2>
              </div>
              <p className="text-slate-300/80 mb-8 text-base leading-relaxed">Scale your storage needs as your AI workloads grow.</p>
              <div className="mb-10">
                <span className="text-5xl font-light text-white">$0.01</span>
                <span className="text-slate-300/60">/GB/month</span>
              </div>
              <ul className="space-y-3 text-sm flex-1">
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">$0.01/GB/month storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">$0.005/1000 requests</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">Data transfer: Free</span>
                </li>
              </ul>
              <Link href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer" className="mt-10 w-full py-3 bg-gradient-to-r from-[#2F74FF] to-[#1E40AF] text-white rounded-xl text-sm font-light hover:from-[#2F74FF]/90 hover:to-[#1E40AF]/90 transition-all duration-300 block text-center">
                Start Using ACS
              </Link>
            </div>

            {/* Enterprise */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8 transition-all duration-300 hover:border-[#2F74FF]/50 hover:shadow-[0_8px_30px_rgba(47,116,255,0.2)] hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-[#2F74FF] rounded-full"></div>
                <h2 className="text-2xl font-light tracking-tight text-white">Enterprise</h2>
              </div>
              <p className="text-slate-300/80 mb-8 text-base leading-relaxed">Custom solutions for larger workloads.</p>
              <div className="mb-10">
                <span className="text-5xl font-light text-white">Let&apos;s Talk</span>
              </div>
              <ul className="space-y-3 text-sm flex-1">
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">Custom pricing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">Dedicated support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">SLA guarantees</span>
                </li>
              </ul>
              <Link href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer" className="mt-10 w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-light transition-all duration-300 border border-white/20 block text-center">
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Pricing Comparison Table */}
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-3xl font-light tracking-tight text-white text-center">Price Comparison</h3>
            <p className="text-slate-300/80 text-center max-w-xl mx-auto text-lg">
              Compare features and pricing across our plans.
            </p>
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-600/30">
                    <th className="py-4 px-4 text-sm font-light tracking-tight text-white"></th>
                    <th className="py-4 px-4 text-sm font-light tracking-tight text-white text-center">Free Tier</th>
                    <th className="py-4 px-4 text-sm font-light tracking-tight text-white text-center">Pay As You Go</th>
                    <th className="py-4 px-4 text-sm font-light tracking-tight text-white text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-600/20 hover:bg-slate-800/20 transition">
                    <td className="py-4 px-4 text-sm font-light text-white">Data Storage</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">5 GB/month</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">$0.01/GB/month</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">Custom</td>
                  </tr>
                  <tr className="border-b border-slate-600/20 hover:bg-slate-800/20 transition">
                    <td className="py-4 px-4 text-sm font-light text-white">Requests</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">10,000/month</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">$0.005/1000</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">Custom</td>
                  </tr>
                  <tr className="border-b border-slate-600/20 hover:bg-slate-800/20 transition">
                    <td className="py-4 px-4 text-sm font-light text-white">Data Transfer</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">Free</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">Free</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">Free</td>
                  </tr>
                  <tr className="border-b border-slate-600/20 hover:bg-slate-800/20 transition">
                    <td className="py-4 px-4 text-sm font-light text-white">Support</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">Community</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">Email</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">Dedicated</td>
                  </tr>
                  <tr className="hover:bg-slate-800/20 transition">
                    <td className="py-4 px-4 text-sm font-light text-white">SLA</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">-</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">99.9%</td>
                    <td className="py-4 px-4 text-sm text-center text-slate-300/80">99.99%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Example Pricing */}
        <section className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-light tracking-tight text-white">Example Pricing</h2>
            <p className="max-w-2xl mx-auto text-slate-300/80 text-lg">
              See how much you could save with ACS compared to other providers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Example 1 */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-light text-white mb-4">Small Workload</h3>
              <p className="text-slate-300/80 mb-6">100GB data, 1M requests/month</p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-300/80">ACS Cost:</span>
                  <span className="text-white font-light">$1.45/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300/80">S3 Cost:</span>
                  <span className="text-white font-light">$45/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300/80">R2 Cost:</span>
                  <span className="text-white font-light">$7.25/month</span>
                </div>
              </div>
              <div className="bg-[#2F74FF]/10 border border-[#2F74FF]/20 rounded-xl p-4">
                <p className="text-[#2F74FF] text-sm font-light">31x cheaper than S3, 5x cheaper than R2</p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-light text-white mb-4">Medium Workload</h3>
              <p className="text-slate-300/80 mb-6">100TB data, 10M requests/month</p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-300/80">ACS Cost:</span>
                  <span className="text-white font-light">$1,004/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300/80">S3 Cost:</span>
                  <span className="text-white font-light">$4,020/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300/80">R2 Cost:</span>
                  <span className="text-white font-light">$2,510/month</span>
                </div>
              </div>
              <div className="bg-[#2F74FF]/10 border border-[#2F74FF]/20 rounded-xl p-4">
                <p className="text-[#2F74FF] text-sm font-light">4x cheaper than S3, 2.5x cheaper than R2</p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-light text-white mb-4">High Request Workload</h3>
              <p className="text-slate-300/80 mb-6">10TB data, 100M requests/month</p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-300/80">ACS Cost:</span>
                  <span className="text-white font-light">$144/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300/80">S3 Cost:</span>
                  <span className="text-white font-light">$1,014/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300/80">R2 Cost:</span>
                  <span className="text-white font-light">$724/month</span>
                </div>
              </div>
              <div className="bg-[#2F74FF]/10 border border-[#2F74FF]/20 rounded-xl p-4">
                <p className="text-[#2F74FF] text-sm font-light">7x cheaper than S3, 5x cheaper than R2</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-light tracking-tight text-white">Frequently Asked Questions</h2>
            <p className="text-slate-300/80 text-lg">Everything you need to know about ACS pricing.</p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-light text-white mb-4">What happens if I receive unexpected traffic?</h3>
              <p className="text-slate-300/80 leading-relaxed">
                We are happy to discuss a refund if you experience unexpected traffic due to an attack that results in a surprisingly large bill. Please reach out to us at sales@acceleratedcloudstorage.com.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-light text-white mb-4">Do you charge for unauthorized access?</h3>
              <p className="text-slate-300/80 leading-relaxed">
                We do not charge for unauthorized requests to your buckets and objects. You will not be charged for the following error responses: 301 Moved Permanently, 307 Temporary Redirect, 400 Bad Request, 403 Forbidden, 405 Method Not Allowed, 409 Conflict, 411 Length Required, 500 Internal Server Error, and 501 Not Implemented.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-light text-white mb-4">How is data storage calculated over a period of a month?</h3>
              <p className="text-slate-300/80 leading-relaxed">
                ACS measures storage in binary gigabytes (GB), where 1 GB equals 2^30 bytes. Storage costs are calculated using GB/month. A GB/month is determined by averaging the daily peak storage over a billing period (1 month).
              </p>
            </div>
          </div>
        </section>
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
