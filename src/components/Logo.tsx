export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-3 cursor-pointer btn-hover-simple ${className}`}>
      {/* JustJapa Logo - Better Sized */}
      <div className="relative flex items-center">
        {/* Orange circle - better size */}
        <div 
          className="rounded-full bg-[#FF4C00] absolute"
          style={{
            width: '18px',
            height: '18px',
            left: '0px',
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        ></div>
        {/* Blue circle - better size */}
        <div 
          className="rounded-full bg-[#0053DB]"
          style={{
            width: '55px',
            height: '55px',
            marginLeft: '22px'
          }}
        ></div>
      </div>
      {/* Just Japa text - better sized */}
      <span 
        className="text-black font-medium ml-2"
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '40px',
          fontWeight: 500,
          lineHeight: '44px',
          letterSpacing: '-0.03em'
        }}
      >
        Just Japa
      </span>
    </a>
  );
}
