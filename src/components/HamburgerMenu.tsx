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
      className={`p-2 hover:opacity-80 transition-opacity lg:hidden ${className}`}
      aria-label="Open navigation menu"
      style={{ background: 'none', border: 'none' }}
    >
      {/* Three horizontal lines with exact Figma specifications */}
      <div className="flex flex-col space-y-1">
        <div 
          style={{
            width: '30px',
            height: '1.5px',
            backgroundColor: '#000000',
            borderRadius: '1.5px'
          }}
        ></div>
        <div 
          style={{
            width: '30px',
            height: '1.5px',
            backgroundColor: '#000000',
            borderRadius: '1.5px'
          }}
        ></div>
        <div 
          style={{
            width: '30px',
            height: '1.5px',
            backgroundColor: '#000000',
            borderRadius: '1.5px'
          }}
        ></div>
      </div>
    </button>
  );
}