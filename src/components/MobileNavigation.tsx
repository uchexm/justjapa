"use client";

import React from "react";

import Link from "next/link";

import { JoinNowBlueButton } from "./JoinNowBlueButton";

interface MobileNavigationProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
    const linkStyle = {
        fontFamily: "DM Sans",
        fontWeight: 400,
        fontSize: "47.33px",
        lineHeight: "45.32px",
        letterSpacing: "-6%",
        textAlign: "left" as const,
        color: "#000000",
        width: "121px",
        height: "46px",
        opacity: 1,
    };

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className='fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden'
                    onClick={onClose}
                />
            )}

            {/* Mobile Menu - Full width with Figma specifications */}
            <div
                className={`fixed left-0 top-0 z-50 w-full bg-white transition-all duration-300 ease-in-out lg:hidden ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} `}
                style={{
                    height: "clamp(400px, 90vh, 655.4px)",
                    borderRadius: "0 0 38.31px 38.31px",
                    border: "0.96px solid #e5e7eb",
                }}
            >
                <div className='relative flex h-full flex-col'>
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className='absolute right-4 top-4 z-10 p-2 transition-opacity hover:opacity-80'
                        aria-label='Close menu'
                        style={{ background: "none", border: "none" }}
                    >
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M18 6L6 18M6 6L18 18'
                                stroke='#000000'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </button>

                    {/* Navigation Items - Left aligned layout */}
                    <nav
                        className='flex flex-1 flex-col justify-center space-y-8 px-6'
                        style={{ paddingLeft: "48.66px", paddingTop: "97.33px" }}
                    >
                        <Link
                            href='/'
                            className='flex items-center text-black transition-colors hover:text-gray-600'
                            style={linkStyle}
                            onClick={onClose}
                        >
                            Home
                        </Link>
                        <Link
                            href='/coming-soon'
                            className='flex items-center text-black transition-colors hover:text-gray-600'
                            style={linkStyle}
                            onClick={onClose}
                        >
                            About
                        </Link>
                        <Link
                            href='/coming-soon'
                            className='flex items-center text-black transition-colors hover:text-gray-600'
                            style={linkStyle}
                            onClick={onClose}
                        >
                            Contact
                        </Link>
                        <Link
                            href='/coming-soon'
                            className='flex items-center text-black transition-colors hover:text-gray-600'
                            style={linkStyle}
                            onClick={onClose}
                        >
                            Faq
                        </Link>
                    </nav>

                    {/* Mobile CTA Button */}
                    <div className='flex justify-center p-6'>
                        <JoinNowBlueButton
                            onClick={() => {
                                // Check if we're in the browser before accessing DOM
                                if (typeof window !== "undefined") {
                                    const waitlistSection = document.getElementById("waitlist");
                                    if (waitlistSection) {
                                        waitlistSection.scrollIntoView({ behavior: "smooth" });
                                    }
                                }
                                onClose();
                            }}
                        />
                    </div>

                    {/* Social Links - Blue icons */}
                    <div className='px-6 pb-6'>
                        <div className='flex justify-center space-x-6'>
                            <a
                                href='https://facebook.com/justjapa'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='transition-opacity hover:opacity-80'
                                aria-label='Facebook'
                            >
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
                                        fill='#0178FF'
                                    />
                                </svg>
                            </a>
                            <a
                                href='https://twitter.com/justjapa'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='transition-opacity hover:opacity-80'
                                aria-label='Twitter'
                            >
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
                                        fill='#0178FF'
                                    />
                                </svg>
                            </a>
                            <a
                                href='https://instagram.com/justjapa'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='transition-opacity hover:opacity-80'
                                aria-label='Instagram'
                            >
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
                                        fill='#0178FF'
                                    />
                                </svg>
                            </a>
                            <a
                                href='https://linkedin.com/company/justjapa'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='transition-opacity hover:opacity-80'
                                aria-label='LinkedIn'
                            >
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
                                        fill='#0178FF'
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
