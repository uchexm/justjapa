"use client";
import React, { useState } from 'react';
import Link from 'next/link';
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

  const navLinkStyle = {
    color: '#000000',
    fontFamily: 'var(--font-work-sans), Work Sans, sans-serif',
    fontWeight: 400,
    fontSize: '30.19px',
    lineHeight: '43.12px',
    letterSpacing: '-0.04em'
  };

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-white">
        <div className="max-w-[1593px] mx-auto px-4 sm:px-6 lg:px-[68px]">
          <div 
            className="flex items-center justify-between bg-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 mt-4 lg:mt-[38px]"
            style={{ minHeight: '80px', height: 'auto' }}
          >
            {/* Logo - positioned according to Figma */}
            <div className="flex-shrink-0" style={{ marginLeft: '0px' }}>
              <Logo />
            </div>
            
            {/* Desktop Navigation - Work Sans font with specific spacing */}
            <nav 
              className="hidden lg:flex items-center"
              style={{ gap: '50px' }}
            >
              <Link 
                href="/" 
                className="hover:text-gray-600 transition-colors"
                style={navLinkStyle}
              >
                Home
              </Link>
              <Link 
                href="/coming-soon" 
                className="hover:text-gray-600 transition-colors"
                style={navLinkStyle}
              >
                About
              </Link>
              <Link 
                href="/coming-soon" 
                className="hover:text-gray-600 transition-colors"
                style={navLinkStyle}
              >
                Contact
              </Link>
              <Link 
                href="/coming-soon" 
                className="hover:text-gray-600 transition-colors"
                style={navLinkStyle}
              >
                Faq
              </Link>
            </nav>
            
            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <JoinNowBlueButton onClick={scrollToWaitlist} />
            </div>
            
            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden">
              <HamburgerMenu 
                onClick={() => setIsMobileMenuOpen(true)}
              />
            </div>
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