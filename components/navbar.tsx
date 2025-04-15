"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-emerald-500" />
          <span className="text-xl font-bold">CyberShield</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-8">
          <Link href="/" className="text-sm font-medium text-white hover:text-emerald-400">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-emerald-400">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-300 hover:text-emerald-400">
            Services
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-300 hover:text-emerald-400">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-emerald-400">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute inset-x-0 top-16 z-50 origin-top transform bg-black p-2 transition md:hidden",
          mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-90 opacity-0 pointer-events-none",
        )}
      >
        <div className="divide-y divide-gray-800 rounded-lg bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pb-6 pt-5">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-base font-medium text-white hover:text-emerald-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-gray-300 hover:text-emerald-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-base font-medium text-gray-300 hover:text-emerald-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-base font-medium text-gray-300 hover:text-emerald-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-gray-300 hover:text-emerald-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
