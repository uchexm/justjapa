const steps = [
    {
        title: <>Set Your Migration Goal</>,
        desc: "Tell us if you're relocating for study, work, or residency.",
    },
    {
        title: (
            <>
                Get Matched
                <br />
                Instantly
            </>
        ),
        desc: "We'll connect you to a verified agent — handpicked for your route, budget, and country.",
    },
    {
        title: (
            <>
                Everything in
                <br />
                One Place
            </>
        ),
        desc: "Documents, progress, deadlines, agent chat — all managed in your personal dashboard.",
    },
];

export function HowItWorks() {
    return (
        <section id='how' className='bg-white py-16 sm:py-20'>
            <div className='container-consistent'>
                {/* Title */}
                <div className='mb-12 text-center sm:mb-16 lg:mb-20'>
                    <h2 className='text-center leading-tight text-black'>
                        <span
                            className='font-medium'
                            style={{
                                fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                                fontWeight: 500,
                                fontSize: "clamp(32px, 8vw, 88.39px)",
                                lineHeight: "84.64px",
                                letterSpacing: "-0.06em",
                                textAlign: "center",
                            }}
                        >
                            How it{" "}
                        </span>
                        <span
                            className='font-bold italic'
                            style={{
                                fontFamily:
                                    "var(--font-cormorant-garamond), Cormorant Garamond, serif",
                                fontWeight: 700,
                                fontStyle: "italic",
                                fontSize: "clamp(40px, 10vw, 107.66px)",
                                lineHeight: "84.64px",
                                letterSpacing: "-0.06em",
                                textAlign: "center",
                            }}
                        >
                            Works
                        </span>
                    </h2>
                </div>

                {/* Responsive Layout - Stack on mobile, grid on larger screens */}
                <div className='mb-16 grid grid-cols-1 gap-6 sm:mb-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className='card-hover-simple flex min-h-[400px] flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 sm:min-h-[500px] sm:p-8'
                        >
                            {/* Title with Arrow Icon */}
                            <div className='mb-6 flex items-start justify-between'>
                                <h3 className='flex-1 pr-4 text-2xl font-medium leading-tight text-black sm:text-3xl lg:text-4xl xl:text-5xl'>
                                    {step.title}
                                </h3>
                                {/* Arrow Icon - responsive size */}
                                <div className='flex-shrink-0'>
                                    <svg
                                        className='h-12 w-12 sm:h-16 sm:w-16 lg:h-[71px] lg:w-[71px]'
                                        viewBox='0 0 71 71'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <rect
                                            x='0.5'
                                            y='0.5'
                                            width='70'
                                            height='70'
                                            rx='35'
                                            stroke='#272727'
                                        />
                                        <g clipPath='url(#clip0_45_109)'>
                                            <path
                                                d='M26.7257 26V28.4191H41.9029L26 44.2687L27.6571 46L43.6229 30.0804V45.2539H46V26H26.7257Z'
                                                fill='#272727'
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_45_109'>
                                                <rect
                                                    width='20'
                                                    height='20'
                                                    fill='white'
                                                    transform='translate(26 26)'
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            {/* Description */}
                            <p className='mb-6 flex-grow text-base font-medium leading-relaxed text-black sm:mb-8 sm:text-lg lg:text-xl xl:text-2xl'>
                                {step.desc}
                            </p>

                            {/* Learn More Link - Always at bottom */}
                            <div className='mt-auto'>
                                <a
                                    href='#'
                                    className='link-hover-simple text-sm text-gray-400 underline sm:text-base'
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
