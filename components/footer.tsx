import Link from "next/link"
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-emerald-500" />
              <span className="text-lg font-bold">CyberShield</span>
            </div>
            <p className="mt-4 max-w-xs text-gray-400">
              Providing comprehensive cybersecurity solutions to protect your business from evolving threats.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-emerald-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-500">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-emerald-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-emerald-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-emerald-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-emerald-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-emerald-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/threat-protection" className="text-gray-400 hover:text-emerald-400">
                  Threat Protection
                </Link>
              </li>
              <li>
                <Link href="/services/data-encryption" className="text-gray-400 hover:text-emerald-400">
                  Data Encryption
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-security" className="text-gray-400 hover:text-emerald-400">
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link href="/services/secure-development" className="text-gray-400 hover:text-emerald-400">
                  Secure Development
                </Link>
              </li>
              <li>
                <Link href="/services/security-audit" className="text-gray-400 hover:text-emerald-400">
                  Security Audit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-emerald-500" />
                <span className="text-gray-400">123 Security Street, Cyber City, 10010</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-emerald-500" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-emerald-400">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-emerald-500" />
                <a href="mailto:info@cybershield.com" className="text-gray-400 hover:text-emerald-400">
                  info@cybershield.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} CyberShield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
