import { Shield, Lock, Server, Code, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedHero from "@/components/animated-hero"
import ServiceCard from "@/components/service-card"
import SecurityFeature from "@/components/security-feature"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <AnimatedHero />
          <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl">
                Secure Your Digital <span className="text-emerald-500">Future</span>
              </h1>
              <p className="mb-8 text-xl text-gray-400">
                Comprehensive cybersecurity solutions to protect your business from evolving threats
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">Our Services</h2>
              <p className="mx-auto max-w-2xl text-gray-400">
                We offer a comprehensive range of cybersecurity services to protect your organization
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                icon={<Shield className="h-10 w-10 text-emerald-500" />}
                title="Threat Protection"
                description="Advanced threat detection and prevention systems to safeguard your network"
              />
              <ServiceCard
                icon={<Lock className="h-10 w-10 text-emerald-500" />}
                title="Data Encryption"
                description="End-to-end encryption solutions to keep your sensitive data secure"
              />
              <ServiceCard
                icon={<Server className="h-10 w-10 text-emerald-500" />}
                title="Cloud Security"
                description="Secure your cloud infrastructure against unauthorized access and breaches"
              />
              <ServiceCard
                icon={<Code className="h-10 w-10 text-emerald-500" />}
                title="Secure Development"
                description="Build security into your applications from the ground up"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">Why Choose Us</h2>
              <p className="mx-auto max-w-2xl text-gray-400">
                Our approach to cybersecurity is comprehensive, proactive, and tailored to your needs
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <SecurityFeature
                number="01"
                title="24/7 Monitoring"
                description="Round-the-clock security monitoring and incident response"
              />
              <SecurityFeature
                number="02"
                title="Expert Team"
                description="Certified security professionals with years of experience"
              />
              <SecurityFeature
                number="03"
                title="Custom Solutions"
                description="Tailored security strategies for your specific business needs"
              />
              <SecurityFeature
                number="04"
                title="Compliance"
                description="Meet industry regulations and compliance requirements"
              />
              <SecurityFeature
                number="05"
                title="Threat Intelligence"
                description="Stay ahead of emerging threats with our intelligence network"
              />
              <SecurityFeature
                number="06"
                title="Training"
                description="Security awareness training for your employees"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-emerald-900 to-gray-900 py-20">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-4xl font-bold">Ready to secure your business?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
              Get in touch with our security experts for a free consultation
            </p>
            <Button className="bg-white px-8 py-6 text-lg font-semibold text-gray-900 hover:bg-gray-100">
              Contact Us Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
