"use client";
import React, { useState } from 'react';
import { JoinNowBlueButton } from "./JoinNowBlueButton";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Mobile Menu */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full btn-hover-simple"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Navigation Items */}
          <nav className="mt-16 space-y-8">
            <a 
              href="/" 
              className="block text-gray-700 nav-hover-simple text-2xl font-medium"
              onClick={onClose}
            >
              Home
            </a>
            <a 
              href="/coming-soon" 
              className="block text-gray-700 nav-hover-simple text-2xl font-medium"
              onClick={onClose}
            >
              About
            </a>
            <a 
              href="/coming-soon" 
              className="block text-gray-700 nav-hover-simple text-2xl font-medium"
              onClick={onClose}
            >
              Contact
            </a>
            <a 
              href="/coming-soon" 
              className="block text-gray-700 nav-hover-simple text-2xl font-medium"
              onClick={onClose}
            >
              FAQ
            </a>
            
            {/* Mobile CTA Button */}
            <div className="pt-8">
              <JoinNowBlueButton 
                onClick={() => {
                  const waitlistSection = document.getElementById('waitlist');
                  if (waitlistSection) {
                    waitlistSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  onClose();
                }} 
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
