export function JapaFam() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-consistent">
        <div 
          className="flex items-center justify-center rounded-3xl h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[719px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/japa-family.jpg)',
          }}
        >
          {/* Play Icon - responsive size */}
          <button 
            className="btn-hover-simple"
            aria-label="Play video"
          >
            <svg 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40" 
              viewBox="0 0 161 161" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1.5" y="1.5" width="158" height="158" rx="79" stroke="white" strokeWidth="3"/>
              <path d="M94.3404 84.8412L66.5432 100.725C63.2099 102.63 59.0625 100.223 59.0625 96.3841V80.5V64.6159C59.0625 60.7768 63.2099 58.3699 66.5432 60.2747L94.3404 76.1588C97.6994 78.0783 97.6994 82.9217 94.3404 84.8412Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}