import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            Legal
          </Badge>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Privacy Policy</h1>

          <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">Last updated: December 2024</p>

          <div className="prose prose-invert max-w-none space-y-6 md:space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Accelerated Cloud Storage (&quot;ACS,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
                cloud storage services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Account Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information you provide when creating an account, including your name, email address,
                    company information, and billing details.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Usage Data</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information about how you use our services, including API calls, storage usage, data
                    transfer metrics, and performance analytics.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Technical Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect technical information such as IP addresses, browser types, device information, and
                    connection details to provide and improve our services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Provide, maintain, and improve our cloud storage services</li>
                <li>• Process transactions and send billing information</li>
                <li>• Communicate with you about your account and our services</li>
                <li>• Monitor and analyze usage patterns to optimize performance</li>
                <li>• Ensure security and prevent fraud</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement enterprise-grade security measures to protect your data, including encryption in transit
                and at rest, access controls, regular security audits, and SOC-2 Type 2 compliance. However, no method
                of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and comply with
                legal obligations. Your stored data remains under your control and can be deleted at any time through
                our API or by contacting support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services operate globally across multiple regions. We ensure appropriate safeguards are in place
                when transferring data internationally, in compliance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Access to your personal information</li>
                <li>• Correction of inaccurate information</li>
                <li>• Deletion of your personal information</li>
                <li>• Data portability</li>
                <li>• Objection to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at{" "}
                <Link href="mailto:privacy@acceleratedcloudstorage.com" className="text-primary hover:underline">
                  privacy@acceleratedcloudstorage.com
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new policy on our website and updating the &quot;Last updated&quot; date.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 md:py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
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
              <p className="text-muted-foreground text-xs md:text-sm lg:text-base">Worldwide cloud object storage built for AI workloads.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 md:mb-3 lg:mb-4 text-sm md:text-base">Product</h4>
              <div className="space-y-1 md:space-y-2">
                <Link href="/" className="block text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm lg:text-base">
                  Overview
                </Link>
                <Link href="/pricing" className="block text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm lg:text-base">
                  Pricing
                </Link>
                <Link href="/docs" className="block text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm lg:text-base">
                  Documentation
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 md:mb-3 lg:mb-4 text-sm md:text-base">Company</h4>
              <div className="space-y-1 md:space-y-2">
                <Link href="/blog" className="block text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm lg:text-base">
                  Blog
                </Link>

                <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm lg:text-base">
                  Contact
                </Link>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-2 md:mb-3 lg:mb-4 text-sm md:text-base">Legal</h4>
              <div className="space-y-1 md:space-y-2">
                <span className="block text-muted-foreground cursor-default text-xs md:text-sm lg:text-base">
                  Privacy Policy
                </span>
                <span className="block text-muted-foreground cursor-default text-xs md:text-sm lg:text-base">
                  Terms of Service
                </span>
                <span className="block text-muted-foreground cursor-default text-xs md:text-sm lg:text-base">
                  Service Level Agreement
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-4 md:mt-6 lg:mt-8 pt-3 md:pt-4 lg:pt-6 text-center text-muted-foreground">
            <p className="text-xs md:text-sm lg:text-base">&copy; 2024 Accelerated Cloud Storage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
