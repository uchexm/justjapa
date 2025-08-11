import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 cursor-pointer btn-hover-simple ${className}`}>
      {/* JustJapa Logo - Figma specifications */}
      <div className="relative flex items-center">
        {/* Orange circle - positioned as per Figma */}
        <div 
          className="rounded-full bg-[#FF4C00] absolute"
          style={{
            width: 'clamp(16px, 2.5vw, 24px)',
            height: 'clamp(16px, 2.5vw, 24px)',
            left: '0px',
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        ></div>
        {/* Blue circle - positioned as per Figma */}
        <div 
          className="rounded-full bg-[#0053DB]"
          style={{
            width: 'clamp(45px, 8vw, 70px)',
            height: 'clamp(45px, 8vw, 70px)',
            marginLeft: 'clamp(18px, 4vw, 28px)'
          }}
        ></div>
        {/* Just Japa text - positioned as per Figma */}
        <span 
          className="text-black font-medium ml-3"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'clamp(28px, 5vw, 50px)',
            fontWeight: 500,
            lineHeight: '1.1',
            letterSpacing: '-0.03em'
          }}
        >
          Just Japa
        </span>
      </div>
    </Link>
  );
}
