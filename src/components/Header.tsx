'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Scissors } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-primary/98 backdrop-blur-lg border-b border-gold/30 shadow-gold' 
        : 'bg-primary/80 backdrop-blur-sm border-b border-gold/10'
    }`}>
      <div className="container-width">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Scissors className="h-9 w-9 text-gold transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 drop-shadow-glow" />
              <div className="absolute inset-0 h-9 w-9 text-gold opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300">
                <Scissors className="h-9 w-9" />
              </div>
            </div>
            <span className="text-2xl font-bold text-gradient">Elite Cuts</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-white hover:text-gold transition-colors duration-300 font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="btn-primary ml-4">
              Book Now
            </button>
          </nav>

          <button
            className="md:hidden text-white hover:text-gold transition-all duration-300 hover:scale-110"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold/20 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gold transition-all duration-300 font-medium hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-primary w-full mt-4">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}