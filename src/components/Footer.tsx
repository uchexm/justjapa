export function Footer() {
  return (
    <footer className="bg-white py-8 sm:py-12">
      <div className="container-consistent">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
          {/* Navigation Links - Responsive Layout */}
          <div className="w-full max-w-4xl">
            {/* Mobile Layout - Stack vertically */}
            <nav className="flex flex-col sm:hidden space-y-4 text-center">
              <a href="/" className="text-black link-hover-simple text-lg font-normal py-2">
                Home
              </a>
              <a href="/coming-soon" className="text-black link-hover-simple text-lg font-normal py-2">
                How It Works
              </a>
              <a href="/coming-soon" className="text-black link-hover-simple text-lg font-normal py-2">
                Blog
              </a>
              <a href="/coming-soon" className="text-black link-hover-simple text-lg font-normal py-2">
                FAQ
              </a>
              <a href="/coming-soon" className="text-black link-hover-simple text-lg font-normal py-2">
                Privacy Policy
              </a>
              <a href="/coming-soon" className="text-black link-hover-simple text-lg font-normal py-2">
                Terms
              </a>
            </nav>
            
            {/* Desktop Layout - Horizontal with separators */}
            <nav className="hidden sm:flex justify-center items-center text-center text-base lg:text-lg xl:text-2xl font-normal text-black flex-wrap">
              <a href="/" className="link-hover-simple px-2">Home</a>
              <span className="mx-2 lg:mx-4 text-gray-400">|</span>
              <a href="/coming-soon" className="link-hover-simple px-2">How It Works</a>
              <span className="mx-2 lg:mx-4 text-gray-400">|</span>
              <a href="/coming-soon" className="link-hover-simple px-2">Blog</a>
              <span className="mx-2 lg:mx-4 text-gray-400">|</span>
              <a href="/coming-soon" className="link-hover-simple px-2">FAQ</a>
              <span className="mx-2 lg:mx-4 text-gray-400">|</span>
              <a href="/coming-soon" className="link-hover-simple px-2">Privacy Policy</a>
              <span className="mx-2 lg:mx-4 text-gray-400">|</span>
              <a href="/coming-soon" className="link-hover-simple px-2">Terms</a>
            </nav>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="icon-hover-simple" aria-label="Facebook">
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.75 3.4165H10.25C6.47607 3.4165 3.41669 6.47589 3.41669 10.2498V30.7498C3.41669 34.5238 6.47607 37.5832 10.25 37.5832H17.9375V27.3332H11.9584V22.2082H17.9375V15.9582C17.9375 13.749 19.7284 11.9582 21.9375 11.9582H29.0417V17.0832H24.0625C23.5102 17.0832 23.0625 17.5309 23.0625 18.0832V22.2082H29.0417V27.3332H23.0625V37.5832H30.75C34.524 37.5832 37.5834 34.5238 37.5834 30.7498V10.2498C37.5834 6.47589 34.524 3.4165 30.75 3.4165Z" fill="#0178FF"/>
              </svg>
            </a>
            
            <a href="#" className="icon-hover-simple" aria-label="Instagram">
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.166 3.41699C31.9274 3.41699 34.166 5.65557 34.166 8.41699V32.583C34.166 35.3444 31.9274 37.583 29.166 37.583H4.99967C2.23825 37.583 -0.000335693 35.3444 -0.000335693 32.583V8.41699C-0.000335693 5.65557 2.23825 3.41699 4.99967 3.41699H29.166ZM17.083 11.958C12.3656 11.958 8.54102 15.7826 8.54102 20.5C8.54102 25.2174 12.3656 29.042 17.083 29.042C21.8004 29.042 25.625 25.2174 25.625 20.5C25.625 15.7826 21.8004 11.958 17.083 11.958ZM17.083 15.375C19.9135 15.375 22.208 17.6695 22.208 20.5C22.208 23.3305 19.9135 25.625 17.083 25.625C14.2525 25.625 11.958 23.3305 11.958 20.5C11.958 17.6695 14.2525 15.375 17.083 15.375ZM27.333 8.54199C26.3897 8.54199 25.625 9.30651 25.625 10.25C25.625 11.1935 26.3897 11.958 27.333 11.958C28.2765 11.958 29.041 11.1935 29.041 10.25C29.041 9.30651 28.2765 8.54199 27.333 8.54199Z" fill="#0178FF"/>
              </svg>
            </a>
            
            <a href="#" className="icon-hover-simple" aria-label="Twitter">
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.1667 10.25C33.1451 10.7083 32.0556 11.0208 30.9167 11.1667C32.0833 10.4167 32.9792 9.25 33.3958 7.85417C32.3063 8.5625 31.0903 9.0625 29.7917 9.33333C28.7493 8.16667 27.25 7.45834 25.5833 7.45834C22.3958 7.45834 19.8125 10.0417 19.8125 13.2292C19.8125 13.6875 19.8646 14.125 19.9688 14.5417C15.2292 14.2917 11.0208 12.0208 8.1875 8.54167C7.6875 9.39583 7.39583 10.4167 7.39583 11.5C7.39583 13.5417 8.4375 15.3542 10.0208 16.4167C9.04167 16.3958 8.125 16.125 7.3125 15.6875V15.7604C7.3125 18.5625 9.3125 20.8958 11.9583 21.4375C11.4792 21.5625 10.9792 21.625 10.4583 21.625C10.0833 21.625 9.70833 21.5938 9.35417 21.5208C10.1042 23.8125 12.25 25.4583 14.7917 25.5C12.8125 27.0208 10.3333 27.9167 7.66667 27.9167C7.1875 27.9167 6.72917 27.8958 6.27083 27.8333C8.83333 29.4583 11.8542 30.4167 15.1042 30.4167C25.5625 30.4167 31.2708 21.7083 31.2708 14.0833C31.2708 13.8333 31.2708 13.5833 31.25 13.3333C32.375 12.4792 33.3958 11.4375 34.1667 10.25Z" fill="#0178FF"/>
              </svg>
            </a>
            
            <a href="#" className="icon-hover-simple" aria-label="LinkedIn">
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.83301 37.583H0V14.5205H6.83301V37.583ZM18.791 14.5205V15.958C19.8603 15.5803 21.0103 15.375 22.208 15.375C27.8693 15.375 32.458 19.9641 32.458 25.625V37.583H25.625V25.625C25.625 23.738 24.095 22.208 22.208 22.208C20.321 22.208 18.791 23.738 18.791 25.625V37.583H11.958V14.5205H18.791ZM3.41634 3.41699C5.30331 3.41699 6.83301 4.94618 6.83301 6.83301C6.83301 8.71998 5.30331 10.25 3.41634 10.25C1.52948 10.2498 0 8.71987 0 6.83301C0 4.94629 1.52959 3.41717 3.41634 3.41699Z" fill="#0178FF"/>
              </svg>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-black text-xs sm:text-sm opacity-75">
              © 2025 JustJapa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
