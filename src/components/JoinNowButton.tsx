import React from 'react';

interface JoinNowButtonProps {
  className?: string;
  onClick?: () => void;
}

export function JoinNowButton({ className = '', onClick }: JoinNowButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center transition-opacity hover:opacity-90 ${className}`}
      style={{
        background: '#0053DB',
        width: '150px',
        height: '50px',
        borderRadius: '30px',
        fontFamily: 'var(--font-dm-sans)',
        fontSize: '16px',
        fontWeight: 300,
        color: 'white',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Join Now
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 51 51" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2"
      >
        <rect width="51" height="51" rx="35.5" fill="#0053DB"/>
        <g clipPath="url(#clip0_14_136)">
          <path d="M26.7257 26V28.4191H41.9029L26 44.2687L27.6571 46L43.6229 30.0804V45.2539H46V26H26.7257Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_14_136">
            <rect width="14" height="14" fill="white" transform="translate(26 26)"/>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
