"use client";

import React, { useState } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { HamburgerMenu } from "@/components/HamburgerMenu";
import { JoinNowBlueButton } from "@/components/JoinNowBlueButton";
import { Logo } from "@/components/Logo";
import { MobileNavigation } from "@/components/MobileNavigation";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const scrollToWaitlist = () => {
        // Check if we're in the browser before accessing DOM
        if (typeof window !== "undefined") {
            // If we're not on the home page, navigate to home with waitlist fragment
            if (pathname !== "/") {
                router.push("/#waitlist");
                return;
            }

            // If we're on the home page, scroll to waitlist section
            const waitlistSection = document.getElementById("waitlist");
            if (waitlistSection) {
                waitlistSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const navLinkStyle = {
        color: "#000000",
        fontFamily: "var(--font-work-sans), Work Sans, sans-serif",
        fontWeight: 400,
        fontSize: "30.19px",
        lineHeight: "43.12px",
        letterSpacing: "-0.04em",
    };

    return (
        <>
            <header className='sticky top-0 z-40 w-full border-b border-gray-100 bg-white'>
                <div className='mx-auto max-w-[1593px]'>
                    <div
                        className='flex items-center justify-between bg-white px-4 py-3 sm:px-6 lg:px-[68px] lg:py-4'
                        style={{ minHeight: "80px", height: "auto" }}
                    >
                        {/* Logo - positioned according to Figma */}
                        <div className='flex-shrink-0' style={{ marginLeft: "0px" }}>
                            <Logo />
                        </div>

                        {/* Desktop Navigation - Work Sans font with specific spacing */}
                        <nav className='hidden items-center lg:flex' style={{ gap: "50px" }}>
                            <Link
                                href='/'
                                className='nav-hover-simple relative overflow-hidden'
                                style={navLinkStyle}
                            >
                                Home
                            </Link>
                            <Link
                                href='/coming-soon'
                                className='nav-hover-simple relative overflow-hidden'
                                style={navLinkStyle}
                            >
                                About
                            </Link>
                            <Link
                                href='/coming-soon'
                                className='nav-hover-simple relative overflow-hidden'
                                style={navLinkStyle}
                            >
                                Contact
                            </Link>
                            <Link
                                href='/coming-soon'
                                className='nav-hover-simple relative overflow-hidden'
                                style={navLinkStyle}
                            >
                                Faq
                            </Link>
                        </nav>

                        {/* Desktop CTA Button */}
                        <div className='hidden lg:block'>
                            <JoinNowBlueButton onClick={scrollToWaitlist} />
                        </div>

                        {/* Mobile Hamburger Menu */}
                        <div className='lg:hidden'>
                            <HamburgerMenu onClick={() => setIsMobileMenuOpen(true)} />
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation */}
            <MobileNavigation
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
}
