"use client";

import { useRouter } from "next/navigation";

import { JoinNowRedButton } from "@/components/JoinNowRedButton";
import { JoinNowSVGButton } from "@/components/JoinNowSVGButton";

export function Hero() {
    const router = useRouter();

    const handleComingSoonClick = () => {
        router.push("/coming-soon");
    };

    return (
        <section className='relative flex min-h-screen items-center justify-center overflow-hidden sm:min-h-[85vh]'>
            {/* Base background - white */}
            <div className='absolute inset-0 bg-white' />

            {/* Subtle gradient - white at top/sides, very light blue toward bottom center */}
            <div
                className='absolute inset-0'
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 20%, rgba(240, 248, 255, 0.6) 40%, rgba(0, 83, 219, 0.4) 60%, rgba(0, 83, 219, 0.2) 80%, rgba(0, 83, 219, 0.1) 100%)",
                }}
            />

            <div className='container-consistent relative z-10 py-8 sm:py-12'>
                <div className='mx-auto max-w-4xl text-center'>
                    {/* Main Headline - Figma specifications */}
                    <h1 className='mb-6 text-center text-black sm:mb-8'>
                        <span
                            className='block font-semibold leading-none'
                            style={{
                                fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                                fontWeight: 600,
                                fontSize: "clamp(32px, 8vw, 110.83px)",
                                lineHeight: "106.13px",
                                letterSpacing: "-0.06em",
                                textAlign: "center",
                            }}
                        >
                            Your{" "}
                            <span
                                className='font-bold italic'
                                style={{
                                    fontFamily:
                                        "var(--font-cormorant-garamond), Cormorant Garamond, serif",
                                    fontWeight: 700,
                                    fontStyle: "italic",
                                    fontSize: "clamp(40px, 10vw, 134.99px)",
                                    lineHeight: "106.13px",
                                    letterSpacing: "-0.06em",
                                }}
                            >
                                Migration
                            </span>
                        </span>
                        <span
                            className='block font-semibold leading-none'
                            style={{
                                fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                                fontWeight: 600,
                                fontSize: "clamp(32px, 8vw, 110.83px)",
                                lineHeight: "106.13px",
                                letterSpacing: "-0.06em",
                                textAlign: "center",
                            }}
                        >
                            Companion
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        className='mx-auto mb-8 max-w-2xl sm:mb-10'
                        style={{
                            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                            fontWeight: 500,
                            fontSize: "clamp(18px, 2.5vw, 24px)",
                            lineHeight: "32px",
                            letterSpacing: "-0.02em",
                            textAlign: "center",
                            color: "#000000",
                        }}
                    >
                        Powered by AI. Backed by experts. Built for Nigerians and
                        <span className='hidden sm:inline'>
                            {" "}
                            Africans ready to Japa — safely, affordably, and successfully.
                        </span>
                        <span className='mt-2 block sm:hidden'>
                            Africans ready to Japa — safely, affordably, and successfully.
                        </span>
                    </p>

                    {/* CTA Buttons */}
                    <div className='mb-8 flex flex-col items-center justify-center gap-4 px-4 sm:mb-12 sm:flex-row'>
                        <JoinNowRedButton onClick={handleComingSoonClick} />
                        <JoinNowSVGButton onClick={handleComingSoonClick} />
                    </div>

                    {/* Social Proof */}
                    <div className='flex flex-col items-center justify-center gap-4 px-4 sm:flex-row'>
                        <div className='flex items-center'>
                            <div className='flex -space-x-2 sm:-space-x-3'>
                                <div
                                    className='h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-cover sm:h-16 sm:w-16 lg:h-[71px] lg:w-[71px]'
                                    style={{
                                        backgroundImage: "url(/profile1.jpg)",
                                        backgroundPosition: "center 35%",
                                        backgroundSize: "130%",
                                    }}
                                />
                                <div
                                    className='h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-cover sm:h-16 sm:w-16 lg:h-[71px] lg:w-[71px]'
                                    style={{
                                        backgroundImage: "url(/profile2.jpg)",
                                        backgroundPosition: "center 35%",
                                        backgroundSize: "130%",
                                    }}
                                />
                                <div
                                    className='h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-cover sm:h-16 sm:w-16 lg:h-[71px] lg:w-[71px]'
                                    style={{
                                        backgroundImage: "url(/profile3.jpg)",
                                        backgroundPosition: "center 35%",
                                        backgroundSize: "130%",
                                    }}
                                />
                            </div>
                        </div>
                        <div className='text-center text-black sm:ml-4 sm:text-left'>
                            <div className='text-base font-medium leading-relaxed sm:text-lg lg:text-xl xl:text-2xl'>
                                <span className='block'>Trusted by over 200</span>
                                <span className='block'>Nigerian families</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
