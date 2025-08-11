"use client";

import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JoinWaitlist } from "@/components/sections/JoinWaitlist";

export default function ComingSoonPage() {
    return (
        <>
            <Header />
            <main className='min-h-screen bg-white'>
                <div className='mx-auto max-w-[1593px] px-4 py-20 sm:px-6 lg:px-[68px]'>
                    <div className='mx-auto max-w-4xl text-center'>
                        <div className='mb-8 flex justify-center'>
                            <svg
                                width='192'
                                height='190'
                                viewBox='0 0 192 190'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M192 94.8583C192 147.051 149.019 189.362 96 189.362C42.9807 189.362 0 147.051 0 94.8583C0 42.6654 42.9807 0.354736 96 0.354736C149.019 0.354736 192 42.6654 192 94.8583ZM86.4 142.11C86.4 136.891 90.6981 132.66 96 132.66C101.302 132.66 105.6 136.891 105.6 142.11C105.6 147.329 101.302 151.56 96 151.56C90.6981 151.56 86.4 147.329 86.4 142.11ZM88.8 113.759C88.8 117.673 92.0236 120.847 96 120.847C99.9764 120.847 103.2 117.673 103.2 113.759L103.2 47.6065C103.2 43.692 99.9765 40.5187 96 40.5187C92.0236 40.5187 88.8 43.692 88.8 47.6065L88.8 113.759Z'
                                    fill='#0178FF'
                                />
                            </svg>
                        </div>

                        <h1
                            className='mb-8'
                            style={{
                                fontFamily: "DM Sans",
                                fontWeight: 700,
                                fontSize: "135px",
                                lineHeight: "106.13px",
                                letterSpacing: "-6%",
                                color: "#000000",
                                textAlign: "center",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "Cormorant Garamond",
                                    fontWeight: 700,
                                    fontStyle: "italic",
                                    fontSize: "135px",
                                    lineHeight: "106.13px",
                                    letterSpacing: "-6%",
                                }}
                            >
                                Coming
                            </span>{" "}
                            Soon
                        </h1>

                        <p
                            className='mb-16 text-gray-600'
                            style={{
                                fontFamily: "DM Sans",
                                fontWeight: 400,
                                fontSize: "36px",
                                lineHeight: "44px",
                                letterSpacing: "-0.02em",
                                textAlign: "center",
                            }}
                        >
                            We&apos;re working on something amazing for you. <br />
                            Join our waitlist to be the first to know when we launch!
                        </p>
                        <div className='mt-8 flex justify-center'>
                            <div className='btn-conteiner'>
                                <Link
                                    href='/'
                                    className='btn-content'
                                    style={{
                                        width: "303px",
                                        height: "82px",
                                        textDecoration: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <span className='btn-title'>Back to Home</span>
                                    <span className='icon-arrow'>
                                        <svg
                                            width='17.7095'
                                            height='14.8533'
                                            viewBox='0 0 18.3271 18.3271'
                                            fill='none'
                                        >
                                            <path
                                                className='three'
                                                d='M0.998 0.200684V2.41748H14.906L0.333 16.9414L1.852 18.5278L16.482 3.93981V17.8441H18.66V0.200684H0.998Z'
                                                fill='currentColor'
                                            />
                                            <path
                                                className='two'
                                                d='M0.998 0.200684V2.41748H14.906L0.333 16.9414L1.852 18.5278L16.482 3.93981V17.8441H18.66V0.200684H0.998Z'
                                                fill='currentColor'
                                            />
                                            <path
                                                className='one'
                                                d='M0.998 0.200684V2.41748H14.906L0.333 16.9414L1.852 18.5278L16.482 3.93981V17.8441H18.66V0.200684H0.998Z'
                                                fill='currentColor'
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <JoinWaitlist />
            </main>

            <Footer />
        </>
    );
}
