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

      <main className="relative z-10 pt-24 md:pt-28 pb-12 md:pb-16 px-3 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center space-y-2 md:space-y-4 mt-2 md:mt-0">
          <div className="flex flex-col items-center mb-2">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2F74FF]/20 to-[#1E40AF]/20 text-[#2F74FF] px-2.5 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-light tracking-wide backdrop-blur-sm border border-[#2F74FF]/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5Z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
              Transparent Pricing
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-white tracking-tighter leading-none">
            ACS provides object storage built for <span className="metallic-text">GenAI workloads</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base lg:text-lg text-slate-300/90 leading-relaxed">
            Use your data freely from any cloud at any time.
          </p>
          <p className="max-w-2xl mx-auto text-xs md:text-sm lg:text-base text-slate-300/90 leading-relaxed">
            Simple transparent pricing. Only pay for what you use in ACS with no hidden fees. Scale your storage needs as your AI workloads grow.
          </p>
          <div className="mt-3 md:mt-6">
            <Link href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#2F74FF] to-[#1E40AF] hover:from-[#2F74FF]/90 hover:to-[#1E40AF]/90 text-white px-4 md:px-8 py-2 md:py-4 rounded-xl font-light text-sm md:text-lg tracking-tight transition-all duration-300 shadow-[0_8px_30px_rgba(47,116,255,0.3)] hover:shadow-[0_12px_40px_rgba(47,116,255,0.4)] hover:scale-105">
              Get Started Today
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </section>



        {/* Pricing Cards */}
        <section className="max-w-6xl mx-auto space-y-4 md:space-y-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {/* Free Tier */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-2.5 md:p-6 transition-all duration-300 hover:border-[#2F74FF]/50 hover:shadow-[0_8px_30px_rgba(47,116,255,0.2)] hover:scale-105">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-[#2F74FF] rounded-full"></div>
                <h2 className="text-sm md:text-xl font-light tracking-tight text-white">Free Tier</h2>
              </div>
              <p className="text-slate-300/80 mb-2 md:mb-6 text-xs md:text-sm leading-relaxed">Perfect for getting started with ACS. Zero egress fees.</p>
              <div className="mb-3 md:mb-6">
                <span className="text-xl md:text-3xl font-light text-white">$0</span>
                <span className="text-slate-300/60 text-sm md:text-base">/mo</span>
              </div>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm flex-1">
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-4 md:h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">5 GB of data storage per month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-4 md:h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">10,000 requests per month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-4 md:h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">Zero egress fees</span>
                </li>
              </ul>
              <Link href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer" className="mt-3 md:mt-6 w-full py-1.5 md:py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs md:text-sm font-light transition-all duration-300 border border-white/20 block text-center">
                Get Started Free
              </Link>
            </div>

            {/* Pay As You Go */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-[#2F74FF]/50 rounded-xl p-2.5 md:p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(47,116,255,0.3)] hover:scale-105 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2F74FF] to-[#1E40AF] text-xs px-3 py-1 rounded-full text-white font-light">
                Most Popular
              </div>
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="w-3 h-3 bg-[#2F74FF] rounded-full"></div>
                <h2 className="text-sm md:text-2xl font-light tracking-tight text-white">Pay As You Go</h2>
              </div>
              <p className="text-slate-300/80 mb-2 md:mb-8 text-xs md:text-base leading-relaxed">Scale your storage needs as your AI workloads grow.</p>
              <div className="mb-3 md:mb-10">
                <span className="text-2xl md:text-5xl font-light text-white">$0.01</span>
                <span className="text-slate-300/60">/GB/month</span>
              </div>
              <ul className="space-y-1 md:space-y-3 text-xs md:text-sm flex-1">
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-4 md:h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">$0.01/GB/month storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-4 md:h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">$0.005/1000 requests</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-4 md:h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">Data transfer: Free</span>
                </li>
              </ul>
              <Link href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-10 w-full py-2 md:py-3 bg-gradient-to-r from-[#2F74FF] to-[#1E40AF] text-white rounded-xl text-xs md:text-sm font-light hover:from-[#2F74FF]/90 hover:to-[#1E40AF]/90 transition-all duration-300 block text-center">
                Start Using ACS
              </Link>
            </div>

            {/* Enterprise */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-2.5 md:p-8 transition-all duration-300 hover:border-[#2F74FF]/50 hover:shadow-[0_8px_30px_rgba(47,116,255,0.2)] hover:scale-105">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="w-3 h-3 bg-[#2F74FF] rounded-full"></div>
                <h2 className="text-sm md:text-2xl font-light tracking-tight text-white">Enterprise</h2>
              </div>
              <p className="text-slate-300/80 mb-2 md:mb-8 text-xs md:text-base leading-relaxed">Custom solutions for larger workloads.</p>
              <div className="mb-3 md:mb-10">
                <span className="text-2xl md:text-5xl font-light text-white">Let&apos;s Talk</span>
              </div>
              <ul className="space-y-1 md:space-y-3 text-xs md:text-sm flex-1">
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-4 md:h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">Custom pricing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-4 md:h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">Dedicated support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-4 md:h-4 text-[#2F74FF]">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-300/80">SLA guarantees</span>
                </li>
              </ul>
              <Link href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-10 w-full py-2 md:py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs md:text-sm font-light transition-all duration-300 border border-white/20 block text-center">
                Contact Sales
              </Link>
            </div>
          </div>
          
      

          {/* Pricing Comparison Table */}
          <div className="max-w-4xl mx-auto space-y-3 md:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-white text-center">Price Comparison</h3>
            <p className="text-slate-300/80 text-center max-w-xl mx-auto text-xs md:text-lg">
              Compare features and pricing across our plans.
            </p>
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-3 md:p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-600/30">
                    <th className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm font-light tracking-tight text-white"></th>
                    <th className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm font-light tracking-tight text-white text-center">Free Tier</th>
                    <th className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm font-light tracking-tight text-white text-center">Pay As You Go</th>
                    <th className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm font-light tracking-tight text-white text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-600/20 hover:bg-slate-800/20 transition">
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm font-light text-white">Data Storage</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm text-center text-slate-300/80">5 GB/month</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm text-center text-slate-300/80">$0.01/GB/month</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm text-center text-slate-300/80">Custom</td>
                  </tr>
                  <tr className="border-b border-slate-600/20 hover:bg-slate-800/20 transition">
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm font-light text-white">Requests</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm text-center text-slate-300/80">10,000/month</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm text-center text-slate-300/80">$0.005/1000</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm text-center text-slate-300/80">Custom</td>
                  </tr>
                  <tr className="border-b border-slate-600/20 hover:bg-slate-800/20 transition">
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm font-light text-white">Data Transfer</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm text-center text-slate-300/80">Free</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm text-center text-slate-300/80">Free</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm text-center text-slate-300/80">Free</td>
                  </tr>


                </tbody>
              </table>
            </div>
          </div>
          
          {/* Zero Egress Fees Note */}
          <div className="max-w-4xl mx-auto text-center mt-4 md:mt-8">
            <div className="backdrop-blur-xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-[#2F74FF]/30 rounded-xl p-3 md:p-8 shadow-[0_8px_30px_rgba(47,116,255,0.1)]">
              <div className="flex flex-col items-center space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-[#2F74FF] to-[#1E40AF] rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white md:w-8 md:h-8">
                    <path d="M12 2L2 7l10 5 10-5-10-5Z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 className="text-lg md:text-2xl font-light text-white mb-2 md:mb-4">Zero Egress Fees</h3>
                <p className="text-slate-300/90 text-xs md:text-lg leading-relaxed max-w-3xl">
                  Many other cloud providers make the majority of their money from object storage from egress and we <span className="text-[#2F74FF] font-medium">don&apos;t charge</span> for regional data transfer, region-to-region data transfer or data transfer to and from the internet.
                </p>
                <div className="mt-2 md:mt-4 inline-flex items-center gap-2 bg-[#2F74FF]/10 border border-[#2F74FF]/20 text-[#2F74FF] px-2.5 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-light">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  No hidden transfer costs
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Example Pricing */}
        <section className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-4xl font-light tracking-tight text-white">Example Pricing</h2>
            <p className="max-w-2xl mx-auto text-slate-300/80 text-sm md:text-lg">
              See how much you could save with ACS compared to other providers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
            {/* Example 1 */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-3 md:p-8">
              <h3 className="text-base md:text-xl font-light text-white mb-3 md:mb-4">Small Workload</h3>
              <p className="text-slate-300/80 mb-4 md:mb-6 text-xs md:text-sm">100GB data, 1M requests/month</p>
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-300/80 text-xs md:text-sm">ACS Cost:</span>
                  <span className="text-white font-light text-xs md:text-sm">$1.45/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300/80 text-xs md:text-sm">S3 Cost:</span>
                  <span className="text-white font-light text-xs md:text-sm">$45/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300/80 text-xs md:text-sm">R2 Cost:</span>
                  <span className="text-white font-light text-xs md:text-sm">$7.25/month</span>
                </div>
              </div>
              <div className="bg-[#2F74FF]/10 border border-[#2F74FF]/20 rounded-xl p-3 md:p-4">
                <p className="text-[#2F74FF] text-xs md:text-sm font-light">S3 is 31X, R2 is 5X more</p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-3 md:p-8">
              <h3 className="text-base md:text-xl font-light text-white mb-3 md:mb-4">High Storage Workload</h3>
              <p className="text-slate-300/80 mb-4 md:mb-6 text-xs md:text-sm">100TB data, 10M requests/month</p>
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-300/80 text-xs md:text-sm">ACS Cost:</span>
                  <span className="text-white font-light text-xs md:text-sm">$1,004/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300/80 text-xs md:text-sm">S3 Cost:</span>
                  <span className="text-white font-light text-xs md:text-sm">$4,020/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300/80 text-xs md:text-sm">R2 Cost:</span>
                  <span className="text-white font-light text-xs md:text-sm">$2,510/month</span>
                </div>
              </div>
              <div className="bg-[#2F74FF]/10 border border-[#2F74FF]/20 rounded-xl p-3 md:p-4">
                <p className="text-[#2F74FF] text-sm font-light">S3 is 4X, R2 is 2.5X more</p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-3 md:p-8">
              <h3 className="text-base md:text-xl font-light text-white mb-3 md:mb-4">High Request Workload</h3>
              <p className="text-slate-300/80 mb-4 md:mb-6 text-xs md:text-sm">10TB data, 100M requests/month</p>
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-300/80 text-xs md:text-sm">ACS Cost:</span>
                  <span className="text-white font-light text-xs md:text-sm">$144/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300/80 text-xs md:text-sm">S3 Cost:</span>
                  <span className="text-white font-light text-xs md:text-sm">$1,014/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300/80 text-xs md:text-sm">R2 Cost:</span>
                  <span className="text-white font-light text-xs md:text-sm">$724/month</span>
                </div>
              </div>
              <div className="bg-[#2F74FF]/10 border border-[#2F74FF]/20 rounded-xl p-3 md:p-4">
                <p className="text-[#2F74FF] text-sm font-light">S3 is 7X, R2 is 5X more</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-4xl font-light tracking-tight text-white">Frequently Asked Questions</h2>
            <p className="text-slate-300/80 text-sm md:text-lg">Everything you need to know about ACS pricing.</p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {/* FAQ Item 1 */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-3 md:p-8">
              <h3 className="text-base md:text-xl font-light text-white mb-3 md:mb-4">What happens if I receive unexpected traffic?</h3>
              <p className="text-slate-300/80 leading-relaxed text-xs md:text-base">
                We are happy to discuss a refund if you experience unexpected traffic due to an attack that results in a surprisingly large bill. Please reach out to us at sales@acceleratedcloudstorage.com.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-3 md:p-8">
              <h3 className="text-base md:text-xl font-light text-white mb-3 md:mb-4">Do you charge for unauthorized access?</h3>
              <p className="text-slate-300/80 leading-relaxed text-xs md:text-base">
                We do not charge for unauthorized requests to your buckets and objects. You will not be charged for the following error responses: 301 Moved Permanently, 307 Temporary Redirect, 400 Bad Request, 403 Forbidden, 405 Method Not Allowed, 409 Conflict, 411 Length Required, 500 Internal Server Error, and 501 Not Implemented.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-3 md:p-8">
              <h3 className="text-base md:text-xl font-light text-white mb-3 md:mb-4">How is data storage calculated over a period of a month?</h3>
              <p className="text-slate-300/80 leading-relaxed text-xs md:text-base">
                ACS measures storage in binary gigabytes (GB), where 1 GB equals 2^30 bytes. Storage costs are calculated using GB/month. A GB/month is determined by averaging the daily peak storage over a billing period (1 month).
              </p>
            </div>
          </div>
        </section>
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
                <Link href="/" className="block text-slate-300/80 hover:text-white transition-colors font-light text-xs md:text-sm lg:text-base">
                  Overview
                </Link>
                <Link href="/pricing" className="block text-slate-300/80 hover:text-white transition-colors font-light text-xs md:text-sm lg:text-base">
                  Pricing
                </Link>
                <Link href="/docs" className="block text-slate-300/80 hover:text-white transition-colors font-light text-xs md:text-sm lg:text-base">
                  Documentation
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm md:text-base lg:text-lg font-light text-white mb-2 md:mb-3 lg:mb-4 tracking-tight">Company</h4>
              <div className="space-y-1 md:space-y-2">
                <Link href="/blog" className="block text-slate-300/80 hover:text-white transition-colors font-light text-xs md:text-sm lg:text-base">
                  Blog
                </Link>

                <Link href="/contact" className="block text-slate-300/80 hover:text-white transition-colors font-light text-xs md:text-sm lg:text-base">
                  Contact
                </Link>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-sm md:text-base lg:text-lg font-light text-white mb-2 md:mb-3 lg:mb-4 tracking-tight">Legal</h4>
              <div className="space-y-1 md:space-y-2">
                <span className="block text-slate-300/80 font-light cursor-default text-xs md:text-sm lg:text-base">
                  Privacy Policy
                </span>
                <span className="block text-slate-300/80 font-light cursor-default text-xs md:text-sm lg:text-base">
                  Terms of Service
                </span>
                <span className="block text-slate-300/80 font-light cursor-default text-xs md:text-sm lg:text-base">
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
