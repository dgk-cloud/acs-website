import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function ServiceLevelAgreementPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            Legal
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Level Agreement</h1>

          <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Service Level Agreement (&quot;SLA&quot;) describes the uptime and performance commitments that Accelerated
                Cloud Storage (&quot;ACS&quot;) provides to its customers. This SLA applies to all paid ACS services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Service Commitments</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Availability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">99.99%</div>
                    <p className="text-muted-foreground text-sm">Monthly uptime guarantee</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Data Durability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">99.999999999%</div>
                    <p className="text-muted-foreground text-sm">11 nines durability</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Definitions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Availability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The percentage of time that ACS services are operational and accessible during a calendar month,
                    excluding scheduled maintenance windows.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Downtime</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Any period when ACS services are not available or accessible, excluding scheduled maintenance,
                    customer-caused issues, or force majeure events.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Monthly Uptime Percentage</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Total minutes in a month minus downtime minutes, divided by total minutes in the month, expressed as
                    a percentage.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Service Credits</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  If we fail to meet our availability commitment, you may be eligible for service credits:
                </p>
                <div className="bg-card p-6 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Monthly Uptime Percentage</span>
                      <span>Service Credit</span>
                    </div>
                    <div className="border-t border-border pt-3 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Less than 99.99% but ≥ 99.0%</span>
                        <span>10%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Less than 99.0% but ≥ 95.0%</span>
                        <span>25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Less than 95.0%</span>
                        <span>50%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Credit Request Process</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">To request service credits, you must:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Submit a request within 30 days of the incident</li>
                  <li>• Provide detailed information about the downtime experienced</li>
                  <li>• Include logs or other evidence of the service disruption</li>
                  <li>• Send the request to support@acceleratedcloudstorage.com</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Exclusions</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">This SLA does not apply to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Scheduled maintenance (with 24-hour advance notice)</li>
                  <li>• Issues caused by customer applications or configurations</li>
                  <li>• Network connectivity issues outside of ACS control</li>
                  <li>• Force majeure events</li>
                  <li>• Suspension due to Terms of Service violations</li>
                  <li>• Free tier services</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Performance Targets</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Response Times</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We target sub-100ms response times for API requests within the same region under normal operating
                    conditions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Throughput</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our infrastructure is designed to handle high-throughput workloads with automatic scaling based on
                    demand.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Monitoring and Reporting</h2>
              <p className="text-muted-foreground leading-relaxed">
                We continuously monitor our services and provide real-time status updates. Historical uptime data and
                incident reports are available upon request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For SLA-related questions or to report service issues, contact us at{" "}
                <Link href="mailto:support@acceleratedcloudstorage.com" className="text-primary hover:underline">
                  support@acceleratedcloudstorage.com
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. SLA Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may modify this SLA from time to time. We will provide 30 days advance notice of any material changes
                that reduce our service commitments.
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

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Accelerated Cloud Storage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
