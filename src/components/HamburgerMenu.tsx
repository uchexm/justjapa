"use client";
import React from 'react';

interface HamburgerMenuProps {
  onClick: () => void;
  className?: string;
}

export function HamburgerMenu({ onClick, className = "" }: HamburgerMenuProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 hover:bg-gray-100 rounded-lg btn-hover-simple lg:hidden ${className}`}
      aria-label="Open navigation menu"
    >
      {/* Using your provided hamburger SVG design but simplified for mobile */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
