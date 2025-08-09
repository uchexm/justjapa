"use client";
import React, { useState } from 'react';
import { Logo } from "@/components/Logo";
import { JoinNowBlueButton } from "@/components/JoinNowBlueButton";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { MobileNavigation } from "@/components/MobileNavigation";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-white shadow-sm">
        <div className="container-consistent">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-[130px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a 
                href="/" 
                className="text-gray-700 nav-hover-simple text-lg xl:text-2xl font-normal"
              >
                Home
              </a>
              <a 
                href="/coming-soon" 
                className="text-gray-700 nav-hover-simple text-lg xl:text-2xl font-normal"
              >
                About
              </a>
              <a 
                href="/coming-soon" 
                className="text-gray-700 nav-hover-simple text-lg xl:text-2xl font-normal"
              >
                Contact
              </a>
              <a 
                href="/coming-soon" 
                className="text-gray-700 nav-hover-simple text-lg xl:text-2xl font-normal"
              >
                FAQ
              </a>
            </nav>
            
            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <JoinNowBlueButton onClick={scrollToWaitlist} />
            </div>
            
            {/* Mobile Hamburger Menu */}
            <HamburgerMenu 
              onClick={() => setIsMobileMenuOpen(true)}
            />
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      <MobileNavigation 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
