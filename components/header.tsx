"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Beranda" },
    { href: "#menu", label: "Menu" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#pesan", label: "Pesan Sekarang" },
    { href: "#tentang", label: "Tentang Kami" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-gradient-to-r from-violet-600 to-purple-600"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center py-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <ChefHat className={`h-8 w-8 ${isScrolled ? "text-violet-600" : "text-white"}`} />
            <h1 className={`text-4xl font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>Kemangi Catering</h1>
          </div>
          
        </div>

        <nav className={`py-3 ${isScrolled ? "" : "bg-violet-700/30"} rounded-lg`}>
          <div className="flex items-center justify-between">
            <div className="hidden md:flex space-x-8 mx-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:bg-violet-500/20 px-4 py-2 rounded-md transition-all duration-200 font-medium ${
                    isScrolled ? "text-gray-900 hover:text-violet-700" : "text-white hover:text-violet-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 animate-slide-in">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block hover:bg-violet-500/20 px-4 py-2 rounded-md transition-colors ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
