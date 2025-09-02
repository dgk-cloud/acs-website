"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from "@/components/navigation"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <Navigation />

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="hidden md:block w-72 bg-slate-900/50 border-r border-slate-800 min-h-screen sticky top-0">
          <div className="p-8">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#2F74FF] rounded-full"></div>
                <h2 className="text-xl font-semibold text-white">Documentation</h2>
              </div>
              <div className="space-y-1">
                <a href="#overview" className="block text-slate-300 hover:text-[#2F74FF] transition-colors py-3 px-4 rounded-xl hover:bg-slate-800/50 font-medium">
                  Overview
                </a>
                <a href="#getting-started" className="block text-slate-300 hover:text-[#2F74FF] transition-colors py-3 px-4 rounded-xl hover:bg-slate-800/50 font-medium">
                  Getting Started
                </a>
                <a href="#s3-api" className="block text-slate-300 hover:text-[#2F74FF] transition-colors py-3 px-4 rounded-xl hover:bg-slate-800/50 font-medium">
                  S3 API Compatibility
                </a>
                <a href="#regions" className="block text-slate-300 hover:text-[#2F74FF] transition-colors py-3 px-4 rounded-xl hover:bg-slate-800/50 font-medium">
                  Regions
                </a>
                <a href="#consistency" className="block text-slate-300 hover:text-[#2F74FF] transition-colors py-3 px-4 rounded-xl hover:bg-slate-800/50 font-medium">
                  Consistency Model
                </a>
                <a href="#examples" className="block text-slate-300 hover:text-[#2F74FF] transition-colors py-3 px-4 rounded-xl hover:bg-slate-800/50 font-medium">
                  Examples
                </a>
                <a href="#api-reference" className="block text-slate-300 hover:text-[#2F74FF] transition-colors py-3 px-4 rounded-xl hover:bg-slate-800/50 font-medium">
                  API Reference
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="border-t border-slate-700/50 pt-6">
              <h3 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Quick Links</h3>
              <div className="space-y-2">
                <a href="/pricing" className="block text-slate-400 hover:text-[#2F74FF] transition-colors py-2 px-3 rounded-lg hover:bg-slate-800/30 text-sm">
                  Pricing
                </a>
                <a href="/contact" className="block text-slate-400 hover:text-[#2F74FF] transition-colors py-2 px-3 rounded-lg hover:bg-slate-800/30 text-sm">
                  Contact Sales
                </a>
                <a href="https://github.com/Accelerated-Cloud-Storage/ACSExamples" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-[#2F74FF] transition-colors py-2 px-3 rounded-lg hover:bg-slate-800/30 text-sm">
                  GitHub Examples
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-2 sm:p-3 md:p-6 pt-24 md:pt-24 lg:pt-28 overflow-x-hidden">
          <div className="max-w-4xl mx-auto">

            {/* Hero Section */}
            <div className="mb-4 md:mb-8 mt-2 md:mt-0">
              <div className="inline-flex items-center gap-1.5 mb-2 md:mb-4 bg-gradient-to-r from-[#2F74FF]/20 to-[#1E40AF]/20 px-2.5 md:px-4 py-1 md:py-2 rounded-full border border-[#2F74FF]/30 text-xs md:text-sm">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#2F74FF] rounded-full animate-pulse"></div>
                <span className="text-[#2F74FF] font-medium">Documentation</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-4xl font-light text-white mb-2 md:mb-4 tracking-tight">
                ACS Documentation
              </h1>
              <p className="text-xs md:text-base lg:text-lg text-slate-300 leading-relaxed">
                Complete guide to integrating with Accelerated Cloud Storage. Learn how to use our S3-compatible API, understand our global infrastructure, and get started in minutes.
              </p>
            </div>

            {/* Overview Section */}
            <section id="overview" className="mb-4 md:mb-12">
              <div className="mb-3 md:mb-8">
                <h2 className="text-base sm:text-xl md:text-3xl font-light text-white mb-1.5 md:mb-4 tracking-tight">Overview</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-xs md:text-sm lg:text-base text-slate-300 leading-relaxed mb-1.5 md:mb-4">
                    Accelerated Cloud Storage (ACS) provides globally distributed, performant, S3-compatible object storage designed for AI workloads. Our service offers enterprise-grade reliability with 99.99% availability and 99.999999999% data durability.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-1.5 md:gap-4 mb-2 md:mb-6">
                    <div className="bg-slate-800/50 rounded-lg p-2 md:p-4 border border-slate-700/50">
                      <h3 className="text-xs md:text-lg font-semibold text-white mb-1 md:mb-3">Key Features</h3>
                      <ul className="space-y-0.5 md:space-y-1.5 text-slate-300 text-xs md:text-sm">
                        <li className="flex items-center gap-1.5">
                          <div className="w-1 h-1 md:w-2 md:h-2 bg-[#2F74FF] rounded-full"></div>
                          S3-compatible API
                        </li>
                        <li className="flex items-center gap-1.5">
                          <div className="w-1 h-1 md:w-2 md:h-2 bg-[#2F74FF] rounded-full"></div>
                          Global data distribution
                        </li>
                        <li className="flex items-center gap-1.5">
                          <div className="w-1 h-1 md:w-2 md:h-2 bg-[#2F74FF] rounded-full"></div>
                          Strong consistency within regions
                        </li>
                        <li className="flex items-center gap-1.5">
                          <div className="w-1 h-1 md:w-2 md:h-2 bg-[#2F74FF] rounded-full"></div>
                          SOC-2 Type 2 compliant
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-800/50 rounded-lg p-2 md:p-4 border border-slate-700/50">
                      <h3 className="text-xs md:text-lg font-semibold text-white mb-1 md:mb-3">Quick Start</h3>
                      <ol className="space-y-0.5 md:space-y-1.5 text-slate-300 text-xs md:text-sm">
                        <li className="flex items-center gap-1.5">
                          <span className="w-3 h-3 md:w-5 md:h-5 bg-[#2F74FF] rounded-full flex items-center justify-center text-white text-xs md:text-sm font-medium">1</span>
                          Contact ACS for API key
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-3 h-3 md:w-5 md:h-5 bg-[#2F74FF] rounded-full flex items-center justify-center text-white text-xs md:text-sm font-medium">2</span>
                          Update endpoint URL
                        </li>
                        <li className="flex items-center gap-1.5">
                          <span className="w-3 h-3 md:w-5 md:h-5 bg-[#2F74FF] rounded-full flex items-center justify-center text-white text-xs md:text-sm font-medium">3</span>
                          Start using ACS
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Getting Started Section */}
            <section id="getting-started" className="mb-6 sm:mb-16">
              <h2 className="text-base sm:text-2xl md:text-3xl font-light text-white mb-2 sm:mb-6 tracking-tight">Getting Started</h2>
              
              <div className="space-y-3 sm:space-y-8">
                <div className="bg-slate-800/50 rounded-xl p-2.5 sm:p-8 border border-slate-700/50">
                  <h3 className="text-sm sm:text-xl md:text-2xl font-semibold text-white mb-1.5 sm:mb-4">Step 1: Get Your API Key</h3>
                  <p className="text-slate-300 mb-3 sm:mb-6 text-xs sm:text-base">
                    Contact our team to get onboarded and receive your credentials. We'll provide you with an access key ID and secret access key.
                  </p>
                  <div className="flex gap-1.5 sm:gap-4">
                    <a href="mailto:sales@acceleratedcloudstorage.com" className="inline-flex items-center gap-1 bg-[#2F74FF] hover:bg-[#2F74FF]/90 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm">
                      Email Sales
                    </a>
                    <a href="https://calendly.com/acceleratedcloudstorage-sales-doxp/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-slate-700 hover:bg-slate-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm">
                      Schedule Meeting
                    </a>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-2.5 sm:p-8 border border-slate-700/50">
                  <h3 className="text-sm sm:text-xl md:text-2xl font-semibold text-white mb-1.5 sm:mb-4">Step 2: Update Your Code</h3>
                  <p className="text-slate-300 mb-3 sm:mb-6 text-xs sm:text-base">
                    Make a single line change to your existing S3 code by updating the endpoint URL.
                  </p>
                  
                  <div className="bg-slate-900 rounded-xl p-2.5 sm:p-6 border border-slate-600/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400 font-mono">main.py</div>
                    </div>
                    <div className="text-xs sm:text-sm font-mono leading-4 sm:leading-6 text-gray-300 space-y-0.5 sm:space-y-2">
                      <div><span className="text-purple-400">import</span> <span className="text-green-400">boto3</span></div>
                      <div className="text-gray-500"># Create S3 service client</div>
                      <div><span className="text-blue-400">svc</span> = <span className="text-green-400">boto3</span>.<span className="text-yellow-400">client</span>(<span className="text-yellow-400">'s3'</span>, <span className="text-indigo-400">endpoint_url</span>=<span className="text-yellow-400">'https://accelerateprod.com'</span>)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-2.5 sm:p-8 border border-slate-700/50">
                  <h3 className="text-sm sm:text-xl md:text-2xl font-semibold text-white mb-1.5 sm:mb-4">Step 3: Configure Credentials</h3>
                  <p className="text-slate-300 mb-3 sm:mb-6 text-xs sm:text-base">
                    Set your API key and start using ACS with your existing S3-compatible tools and libraries.
                  </p>
                  <div className="bg-slate-900 rounded-xl p-2.5 sm:p-6 border border-slate-600/50">
                    <div className="text-xs sm:text-sm font-mono leading-4 sm:leading-6 text-gray-300">
                      <div className="text-gray-500"># Set your credentials</div>
                      <div><span className="text-blue-400">svc</span>.<span className="text-green-400">_request_signer</span>.<span className="text-yellow-400">_credentials</span> = <span className="text-yellow-400">'your-api-key'</span></div>
                      <div className="text-gray-500"># Start using ACS!</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* S3 API Compatibility Section */}
            <section id="s3-api" className="mb-12">
              <h2 className="text-base sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-6 tracking-tight">S3 API Compatibility</h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed mb-3 sm:mb-6">
                  ACS, as an S3‑compatible service, supports the modern S3 authentication and authorization mechanisms recommended by AWS for AuthN and AuthZ workflows. ACS provides a single authentication mechanism: AWS Signature Version 4.
                </p>
                
                <p className="text-slate-300 mb-3 sm:mb-6 text-xs sm:text-base">
                  This method uses an HMAC-based signature derived from a canonicalized request string and a signing key computed from the secret access key; standard S3 SDKs generate the signature and Authorization header for clients. The server validates requests by recomputing the signature using the provided access_key_id and comparing it to the incoming signature to establish the authenticated principal's context.
                </p>

                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 mb-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Authentication Details</h3>
                  <ul className="space-y-1.5 text-slate-300 text-sm">
                    <li>• Uses AWS Signature Version 4 (SigV4)</li>
                    <li>• Access keys are generated by ACS</li>
                    <li>• Keys are encrypted at rest with AES‑256</li>
                    <li>• Compatible with all standard S3 SDKs</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Regions Section */}
            <section id="regions" className="mb-12">
              <h2 className="text-base sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-6 tracking-tight">Global Infrastructure</h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed mb-3 sm:mb-6">
                  ACS is deployed to 10 regions around the world, ensuring your data is always close to your users for optimal performance and reliability.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">North America</h3>
                    <ul className="space-y-1.5 text-slate-300 text-sm">
                      <li><span className="font-mono text-[#2F74FF]">us-v</span> - United States, Virginia</li>
                      <li><span className="font-mono text-[#2F74FF]">us-oh</span> - United States, Ohio</li>
                      <li><span className="font-mono text-[#2F74FF]">us-ca</span> - United States, California</li>
                      <li><span className="font-mono text-[#2F74FF]">us-or</span> - United States, Oregon</li>
                      <li><span className="font-mono text-[#2F74FF]">ca-q</span> - Canada, Quebec</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">International</h3>
                    <ul className="space-y-1.5 text-slate-300 text-sm">
                      <li><span className="font-mono text-[#2F74FF]">uk-l</span> - UK, Greater London</li>
                      <li><span className="font-mono text-[#2F74FF]">de-he</span> - Germany, Hesse</li>
                      <li><span className="font-mono text-[#2F74FF]">jp-13</span> - Japan, Tokyo Prefecture</li>
                      <li><span className="font-mono text-[#2F74FF]">kr-11</span> - South Korea, Seoul</li>
                      <li><span className="font-mono text-[#2F74FF]">au-nsw</span> - Australia, New South Wales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Consistency Model Section */}
            <section id="consistency" className="mb-12">
              <h2 className="text-base sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-6 tracking-tight">Consistency Model</h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed mb-3 sm:mb-6">
                  ACS provides strict read-after-write consistency within the same region by default, and eventual consistency across regions globally.
                </p>

                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 mb-4">
                  <h3 className="text-lg font-semibold text-white mb-3">How It Works</h3>
                  <p className="text-slate-300 mb-3 text-sm">
                    In practice, a write performed in the US Virginia region will be strongly consistent when read from US Virginia, while reads from another region like US Oregon may briefly return stale data and serve an older version under the default model.
                  </p>
                  <p className="text-slate-300 text-sm">
                    This behavior reflects the default consistency policy, which favors local strong guarantees with globally eventual replication for performance and latency benefits.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">Within Regions</h3>
                    <p className="text-slate-300 text-sm">Strong consistency - immediate read-after-write guarantees</p>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">Across Regions</h3>
                    <p className="text-slate-300 text-sm">Eventual consistency - optimized for global performance</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Examples Section */}
            <section id="examples" className="mb-12">
              <h2 className="text-base sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-6 tracking-tight">Examples & Code Snippets</h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed mb-3 sm:mb-6">
                  Explore our comprehensive collection of examples and code snippets to get started with ACS quickly.
                </p>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">Complete Examples Repository</h3>
                  <p className="text-slate-300 mb-3 sm:mb-6 text-xs sm:text-base">
                    Visit our GitHub repository for detailed examples, tutorials, and integration guides.
                  </p>
                  <a 
                    href="https://github.com/Accelerated-Cloud-Storage/ACSExamples" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#2F74FF] hover:bg-[#2F74FF]/90 text-white px-4 py-2 rounded-xl font-medium transition-colors text-sm"
                  >
                    View Examples on GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </section>

            {/* API Reference Section */}
            <section id="api-reference" className="mb-12">
              <h2 className="text-base sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-6 tracking-tight">API Reference</h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed mb-3 sm:mb-6">
                  ACS will continue expanding its S3 compatibility by iterating toward broader coverage of standard IAM, bucket and object-level APIs while preserving drop‑in use of AWS S3 SDKs, tooling, and libraries.
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">Bucket Level APIs</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <div className="text-slate-300 font-mono text-sm">• ListBuckets</div>
                        <div className="text-slate-300 font-mono text-sm">• CreateBucket</div>
                        <div className="text-slate-300 font-mono text-sm">• HeadBucket</div>
                        <div className="text-slate-300 font-mono text-sm">• DeleteBucket</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">Object Level APIs</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <div className="text-slate-300 font-mono text-sm">• ListObjectsV2</div>
                        <div className="text-slate-300 font-mono text-sm">• PutObject</div>
                        <div className="text-slate-300 font-mono text-sm">• GetObject</div>
                        <div className="text-slate-300 font-mono text-sm">• HeadObject</div>
                        <div className="text-slate-300 font-mono text-sm">• DeleteObject</div>
                        <div className="text-slate-300 font-mono text-sm">• CopyObject</div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="text-slate-300 font-mono text-sm">• CreateMultipartUpload</div>
                        <div className="text-slate-300 font-mono text-sm">• UploadPart</div>
                        <div className="text-slate-300 font-mono text-sm">• CompleteMultipartUpload</div>
                        <div className="text-slate-300 font-mono text-sm">• AbortMultipartUpload</div>
                        <div className="text-slate-300 font-mono text-sm">• ListParts</div>
                        <div className="text-slate-300 font-mono text-sm">• ListMultipartUploads</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">Advanced Features</h3>
                    <ul className="space-y-1.5 text-slate-300 text-sm">
                      <li>• Pre-signed URLs for secure access</li>
                      <li>• Conditional parameters for optimized operations</li>
                      <li>• Multipart upload support for large files</li>
                      <li>• Batch operations for efficiency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-3 md:py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
                  <div className="col-span-2 md:col-span-1">
                    <div className="mb-1.5 md:mb-3">
                      <Image 
                        src="/acs-logo.png" 
                        alt="ACS Logo" 
                        width={200} 
                        height={100} 
                        className="h-6 md:h-10 lg:h-12 w-auto"
                      />
                    </div>
                    <p className="text-slate-300/80 text-xs md:text-sm lg:text-base leading-relaxed font-light">Worldwide cloud object storage built for AI workloads.</p>
                  </div>

                  <div>
                    <h4 className="text-xs md:text-base lg:text-lg font-light text-white mb-1.5 md:mb-3 lg:mb-4 tracking-tight">Product</h4>
                    <div className="space-y-0.5 md:space-y-2">
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
                    <h4 className="text-xs md:text-base lg:text-lg font-light text-white mb-1.5 md:mb-3 lg:mb-4 tracking-tight">Company</h4>
                    <div className="space-y-0.5 md:space-y-2">
                      <Link href="/blog" className="block text-slate-300/80 hover:text-white transition-colors font-light text-xs md:text-sm lg:text-base">
                        Blog
                      </Link>
                      <Link href="/contact" className="block text-slate-300/80 hover:text-white transition-colors font-light text-xs md:text-sm lg:text-base">
                        Contact
                      </Link>
                    </div>
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <h4 className="text-xs md:text-base lg:text-lg font-light text-white mb-1.5 md:mb-3 lg:mb-4 tracking-tight">Legal</h4>
                    <div className="space-y-0.5 md:space-y-2">
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

                <div className="border-t border-slate-700/50 mt-3 md:mt-6 lg:mt-8 pt-2 md:pt-4 lg:pt-6 text-center">
                  <p className="text-slate-400 font-light text-xs md:text-sm lg:text-base">&copy; 2025 Accelerated Cloud Storage. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}
