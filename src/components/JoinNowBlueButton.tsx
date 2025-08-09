'use client';

import React from 'react';

interface JoinNowBlueButtonProps {
  className?: string;
  onClick?: () => void;
}

export function JoinNowBlueButton({ className = '', onClick }: JoinNowBlueButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn-hover-simple ${className}`}
      style={{
        background: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      <svg width="240" height="84" viewBox="0 0 290 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="290" height="100.26" rx="50.1301" fill="#0053DB"/>
        <text
          x="145"
          y="53"
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="20"
          fontWeight="600"
          fontFamily="DM Sans"
        >
          Join Now
        </text>
        <g clipPath="url(#clip0_13_20)">
          <path d="M205.498 44.2007V46.4175H219.406L204.833 60.9414L206.352 62.5278L220.982 47.9398V61.8441H223.16V44.2007H205.498Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_13_20">
            <rect width="18.3271" height="18.3271" fill="white" transform="translate(204.833 44.2007)"/>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}