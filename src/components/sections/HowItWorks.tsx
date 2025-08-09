const steps = [
  { 
    title: (
      <>
        Set Your Migration Goal
      </>
    ), 
    desc: "Tell us if you're relocating for study, work, or residency."
  },
  { 
    title: (
      <>
        Get Matched<br />
        Instantly
      </>
    ), 
    desc: "We'll connect you to a verified agent — handpicked for your route, budget, and country."
  },
  { 
    title: (
      <>
        Everything in<br />
        One Place
      </>
    ), 
    desc: "Documents, progress, deadlines, agent chat — all managed in your personal dashboard."
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-20 bg-white">
      <div className="container-consistent">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-black text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight">
            How it{' '}
            <span 
              className="italic font-medium"
              style={{ fontFamily: 'Cormorant Garamond' }}
            > 
              works
            </span>
          </h2>
        </div>
        
        {/* Responsive Layout - Stack on mobile, grid on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="p-6 sm:p-8 border border-gray-200 flex flex-col bg-gray-50 rounded-2xl min-h-[400px] sm:min-h-[500px] btn-hover-simple"
            >
              {/* Title with Arrow Icon */}
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-black pr-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight flex-1">
                  {step.title}
                </h3>
                {/* Arrow Icon - responsive size */}
                <div className="flex-shrink-0">
                  <svg 
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[71px] lg:h-[71px]" 
                    viewBox="0 0 71 71" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0.5" y="0.5" width="70" height="70" rx="35" stroke="#272727"/>
                    <g clipPath="url(#clip0_45_109)">
                      <path d="M26.7257 26V28.4191H41.9029L26 44.2687L27.6571 46L43.6229 30.0804V45.2539H46V26H26.7257Z" fill="#272727"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_45_109">
                        <rect width="20" height="20" fill="white" transform="translate(26 26)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-black flex-grow mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed">
                {step.desc}
              </p>
              
              {/* Learn More Link - Always at bottom */}
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="text-gray-400 link-hover-simple text-sm sm:text-base"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
