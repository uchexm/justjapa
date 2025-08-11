'use client';

import { JoinNowSVGButton } from "@/components/JoinNowSVGButton";
import { JoinNowRedButton } from "@/components/JoinNowRedButton";

export function Hero() {
  return (
    <section className="relative min-h-screen sm:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Base background - white */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Subtle gradient - white at top/sides, very light blue toward bottom center */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 20%, rgba(240, 248, 255, 0.6) 40%, rgba(0, 83, 219, 0.4) 60%, rgba(0, 83, 219, 0.2) 80%, rgba(0, 83, 219, 0.1) 100%)',
        }}
      />
      
      <div className="relative z-10 container-consistent py-8 sm:py-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline - Figma specifications */}
          <h1 className="text-black text-center mb-6 sm:mb-8">
            <span 
              className="block font-semibold leading-none"
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(32px, 8vw, 110.83px)',
                lineHeight: '106.13px',
                letterSpacing: '-0.06em',
                textAlign: 'center'
              }}
            >
              Your{' '}
              <span 
                className="italic font-bold"
                style={{ 
                  fontFamily: 'var(--font-cormorant-garamond), Cormorant Garamond, serif',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  fontSize: 'clamp(40px, 10vw, 134.99px)',
                  lineHeight: '106.13px',
                  letterSpacing: '-0.06em'
                }}
              >
                Migration
              </span>
            </span>
            <span 
              className="block font-semibold leading-none"
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(32px, 8vw, 110.83px)',
                lineHeight: '106.13px',
                letterSpacing: '-0.06em',
                textAlign: 'center'
              }}
            >
              Companion
            </span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className="mx-auto mb-8 sm:mb-10 max-w-2xl"
            style={{
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              lineHeight: '32px',
              letterSpacing: '-0.02em',
              textAlign: 'center',
              color: '#000000'
            }}
          >
            Powered by AI. Backed by experts. Built for Nigerians and
            <span className="hidden sm:inline"> Africans ready to Japa — safely, affordably, and successfully.</span>
            <span className="sm:hidden block mt-2">Africans ready to Japa — safely, affordably, and successfully.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <JoinNowRedButton onClick={() => window.location.href = '/coming-soon'} />
            <JoinNowSVGButton onClick={() => window.location.href = '/coming-soon'} />
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <div className="flex items-center">
              <div className="flex -space-x-2 sm:-space-x-3">
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[71px] lg:h-[71px] rounded-full overflow-hidden border-2 border-white bg-cover" 
                  style={{
                    backgroundImage: 'url(/profile1.jpg)',
                    backgroundPosition: 'center 35%',
                    backgroundSize: '130%'
                  }} 
                />
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[71px] lg:h-[71px] rounded-full overflow-hidden border-2 border-white bg-cover" 
                  style={{
                    backgroundImage: 'url(/profile2.jpg)',
                    backgroundPosition: 'center 35%',
                    backgroundSize: '130%'
                  }} 
                />
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[71px] lg:h-[71px] rounded-full overflow-hidden border-2 border-white bg-cover" 
                  style={{
                    backgroundImage: 'url(/profile3.jpg)',
                    backgroundPosition: 'center 35%',
                    backgroundSize: '130%'
                  }} 
                />
              </div>
            </div>
            <div className="text-black text-center sm:text-left sm:ml-4">
              <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed">
                <span className="block">Trusted by over 200</span>
                <span className="block">Nigerian families</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}