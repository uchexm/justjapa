'use client';

import React from 'react';

interface JoinNowRedButtonProps {
  className?: string;
  onClick?: () => void;
}

export function JoinNowRedButton({
  className = '',
  onClick
}: JoinNowRedButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn-hover-simple ${className}`}
      style={{
        background: 'none',
        padding: 0,
        cursor: 'pointer'
      }}
    >
      <svg
        width='240'
        height='84'
        viewBox='0 0 290 101'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          y='0.520508'
          width='290'
          height='100.26'
          rx='50.1301'
          fill='#FF4C00'
        />
        <text
          x="145"
          y="54"
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="20"
          fontWeight="600"
          fontFamily="DM Sans"
        >
          Learn More
        </text>
        <g clipPath='url(#clip0_13_49)'>
          <path
            d='M205.498 44.7212V46.938H219.406L204.833 61.4619L206.352 63.0483L220.982 48.4603V62.3646H223.16V44.7212H205.498Z'
            fill='white'
          />
        </g>
        <defs>
          <clipPath id='clip0_13_49'>
            <rect
              width='18.3271'
              height='18.3271'
              fill='white'
              transform='translate(204.833 44.7212)'
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
