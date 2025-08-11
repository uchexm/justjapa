"use client";

import { useState } from "react";

const goals = [
  {
    id: "study",
    title: "Study Abroad",
    icon: (
      <svg width="35" height="34" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.25 29.0037C14.25 26.1057 16.6005 23.7564 19.5 23.7564C22.3995 23.7564 24.75 26.1057 24.75 29.0037V36H14.25V29.0037Z" stroke="#28303F" strokeWidth="3"/>
        <path d="M2 11.5128C2 9.58085 3.567 8.01466 5.5 8.01466H9.52227C10.317 8.01466 11.0881 7.74432 11.7087 7.2481L17.3136 2.76656C18.5918 1.74448 20.4082 1.74448 21.6864 2.76656L27.2913 7.2481C27.9119 7.74432 28.683 8.01466 29.4777 8.01466H33.5C35.433 8.01466 37 9.58085 37 11.5128V32.5018C37 34.4338 35.433 36 33.5 36H5.5C3.567 36 2 34.4338 2 32.5018V11.5128Z" stroke="#28303F" strokeWidth="3"/>
        <path d="M23 15.011C23 13.079 21.433 11.5128 19.5 11.5128C17.567 11.5128 16 13.079 16 15.011C16 16.943 17.567 18.5092 19.5 18.5092C21.433 18.5092 23 16.943 23 15.011Z" stroke="#28303F" strokeWidth="3"/>
      </svg>
    ),
    description: "Find the right education agents for your country of choice, explore curated scholarship opportunities, and use expertly written Statement of Purpose (SOP) templates to strengthen your application and boost your chances of success.",
    buttonText: "Explore Study Options"
  },
  {
    id: "work",
    title: "Work & Sponsorship", 
    icon: (
      <svg width="35" height="34" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39 31.5V12.1822C39 11.119 38.5167 10.1134 37.6864 9.44917L32.1674 5.03394C30.9262 4.04099 29.384 3.50002 27.7945 3.50002L15.2055 3.5C13.616 3.5 12.0738 4.04097 10.8326 5.03393L5.31356 9.44917C4.48331 10.1134 4 11.119 4 12.1822V31.5C4 35.366 7.13401 38.5 11 38.5H32C35.866 38.5 39 35.366 39 31.5Z" stroke="#28303F" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M16.25 10.5H26.75V15.75C26.75 18.6495 24.3995 21 21.5 21C18.6005 21 16.25 18.6495 16.25 15.75V10.5Z" stroke="#28303F" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M4.875 10.5H38.125" stroke="#28303F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Connect with verified work sponsors and immigration experts who can help you navigate visa requirements, job opportunities, and the entire relocation process for your career goals.",
    buttonText: "Explore Work Options"
  },
  {
    id: "visit",
    title: "Visitor or Tourist",
    icon: (
      <svg width="35" height="34" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.3069 33.1211L21.1625 28.7611C20.7253 28.1549 20.492 27.4427 20.492 26.7142V22.2962C20.492 21.2771 21.3857 20.4511 22.488 20.4511H29.5004C31.5058 20.4511 32.2589 18.0238 30.5583 17.0413L22.3683 12.3095C21.2011 11.6352 20.492 10.4526 20.492 9.18024V5C20.492 3.34315 19.1489 2 17.492 2H15.508C13.8511 2 12.508 3.34315 12.508 5V9.18024C12.508 10.4526 11.7989 11.6352 10.6317 12.3095L2.44167 17.0413C0.74112 18.0238 1.49419 20.4511 3.49956 20.4511H10.512C11.6143 20.4511 12.508 21.2771 12.508 22.2962V26.7142C12.508 27.4427 12.2747 28.1549 11.8375 28.7611L8.69311 33.1211C7.55773 34.6954 9.41579 36.6411 11.2465 35.7949L14.7147 34.1919C15.8386 33.6725 17.1614 33.6725 18.2853 34.1919L21.7535 35.7949C23.5842 36.6411 25.4423 34.6954 24.3069 33.1211Z" stroke="#28303F" strokeWidth="3"/>
      </svg>
    ),
    description: "Get assistance with tourist visas, travel planning, and all the documentation you need for a successful trip or extended visit to your destination country.",
    buttonText: "Explore Visitor Options"
  }
];

export function JapaGoals() {
  const [selectedGoal, setSelectedGoal] = useState<string>("study");

  const selectedGoalData = goals.find(goal => goal.id === selectedGoal);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-consistent">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 sm:mb-16 gap-6">
          {/* Title */}
          <h2 className="text-black text-center lg:text-left leading-tight">
            <span 
              className="font-medium"
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(32px, 8vw, 88.39px)',
                lineHeight: '84.64px',
                letterSpacing: '-0.06em',
                textAlign: 'center'
              }}
            >
              What&apos;s Your{' '}
            </span>
            <span 
              className="italic font-semibold"
              style={{ 
                fontFamily: 'var(--font-cormorant-garamond), Cormorant Garamond, serif',
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: 'clamp(40px, 10vw, 110px)',
                lineHeight: '84.64px',
                letterSpacing: '-0.06em',
                textAlign: 'center'
              }}
            >
              Japa
            </span>
            <span 
              className="font-medium"
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(32px, 8vw, 88.39px)',
                lineHeight: '84.64px',
                letterSpacing: '-0.06em',
                textAlign: 'center'
              }}
            >
              {' '}Goal?
            </span>
          </h2>
          
          {/* Notification text */}
          <div className="flex-shrink-0 text-center lg:text-right">
            <span className="text-black text-base sm:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed">
              We&apos;ll personalize your experience<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>based on where you&apos;re headed.
            </span>
          </div>
        </div>

        {/* Tab Navigation - Mobile: Stack vertically, Desktop: Horizontal */}
        <div className="mb-8 sm:mb-12">
          {/* Mobile Layout */}
          <div className="flex flex-col sm:hidden space-y-3">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`flex items-center justify-start p-4 rounded-2xl transition-all duration-200 btn-hover-simple ${
                  selectedGoal === goal.id 
                    ? 'bg-gray-100 shadow-sm border-2 border-blue-200' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-center w-8 h-8 mr-3">
                  {goal.icon}
                </div>
                <span className="text-black text-lg font-medium">
                  {goal.title}
                </span>
              </button>
            ))}
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden sm:flex bg-gray-100 rounded-3xl p-4 lg:p-6 gap-2 lg:gap-3">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`flex items-center justify-center flex-1 p-3 lg:p-4 rounded-2xl transition-all duration-200 btn-hover-simple ${
                  selectedGoal === goal.id 
                    ? 'bg-white shadow-sm border-2 border-blue-200' 
                    : 'bg-transparent hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 mr-2 lg:mr-3">
                  {goal.icon}
                </div>
                <span className="text-black text-sm sm:text-base lg:text-lg xl:text-2xl font-medium whitespace-nowrap">
                  {goal.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full">
          {selectedGoalData && (
            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 lg:p-12 min-h-[200px] sm:min-h-[278px] flex flex-col gap-6">
              <p className="text-black flex-grow text-base sm:text-lg lg:text-xl xl:text-3xl font-normal leading-relaxed">
                {selectedGoalData.description}
              </p>
              
              <a 
                href="#" 
                className="inline-flex items-center hover:opacity-80 transition-opacity text-gray-400 underline text-sm sm:text-base lg:text-lg xl:text-2xl font-medium self-start"
              >
                {selectedGoalData.buttonText}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 flex-shrink-0">
                  <g clipPath="url(#clip0_japa_arrow)">
                    <path d="M0.725714 0V2.41912H15.9029L0 18.2687L1.65714 20L17.6229 4.08044V19.2539H20V0H0.725714Z" fill="#A2A2A2"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_japa_arrow">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}