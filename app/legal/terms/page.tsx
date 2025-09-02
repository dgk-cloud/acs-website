import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            Legal
          </Badge>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Terms of Service</h1>

          <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Accelerated Cloud Storage (&quot;ACS&quot;) services, you agree to be bound by these Terms
                of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                ACS provides globally distributed, S3-compatible object storage services designed for AI workloads. Our
                services include data storage, retrieval, and management through our API and compatible tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  To use our services, you must create an account and provide accurate, complete information. You are
                  responsible for:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Maintaining the confidentiality of your account credentials</li>
                  <li>• All activities that occur under your account</li>
                  <li>• Notifying us immediately of any unauthorized use</li>
                  <li>• Ensuring your account information remains current and accurate</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">You agree not to use our services to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Violate any applicable laws or regulations</li>
                  <li>• Infringe on intellectual property rights</li>
                  <li>• Store or transmit malicious code or harmful content</li>
                  <li>• Attempt to gain unauthorized access to our systems</li>
                  <li>• Interfere with or disrupt our services</li>
                  <li>• Use our services for illegal or harmful activities</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Ownership and Responsibility</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  You retain ownership of all data you store using our services. You are responsible for:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• The legality and appropriateness of your data</li>
                  <li>• Maintaining backups of important data</li>
                  <li>• Complying with applicable data protection laws</li>
                  <li>• Ensuring you have rights to store and process your data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Payment and Billing</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our pricing is based on usage as outlined in our pricing page. You agree to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Pay all charges incurred under your account</li>
                  <li>• Provide valid payment information</li>
                  <li>• Pay invoices within the specified timeframe</li>
                  <li>• Notify us of any billing disputes within 30 days</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to maintain high service availability as outlined in our Service Level Agreement. However, we
                do not guarantee uninterrupted service and may perform maintenance that temporarily affects
                availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, ACS shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to loss of profits, data, or business
                interruption.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate these Terms at any time. Upon termination, your access to the services will
                cease, and you remain responsible for any outstanding charges. You may retrieve your data for 30 days
                after termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may modify these Terms at any time. We will notify you of material changes and your continued use of
                our services constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms, please contact us at{" "}
                <Link href="mailto:legal@acceleratedcloudstorage.com" className="text-primary hover:underline">
                  legal@acceleratedcloudstorage.com
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
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

                <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <span className="block text-muted-foreground cursor-default">
                  Privacy Policy
                </span>
                <span className="block text-muted-foreground cursor-default">
                  Terms of Service
                </span>
                <span className="block text-muted-foreground cursor-default">
                  Service Level Agreement
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Accelerated Cloud Storage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
