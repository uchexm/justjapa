"use client";

import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function SuccessPage() {
    return (
        <>
            <Header />
            <div className='min-h-screen bg-white'>
                <main className='flex-grow bg-white'>
                    <div className='mx-auto max-w-[1593px] px-4 py-20 sm:px-6 lg:px-[68px]'>
                        <div className='mx-auto max-w-4xl text-center'>
                            <div className='mb-8 flex justify-center'>
                                <svg
                                    width='124'
                                    height='133'
                                    viewBox='0 0 124 133'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M26.2332 98.2185C28.1826 96.9816 30.7295 97.2629 32.3621 98.8953L56.3924 122.926C58.0084 124.542 58.3236 127.048 57.159 129.014C56.637 129.896 55.8633 130.613 54.9022 130.967C46.7925 133.954 37.0476 131.967 30.2215 125.141C23.3675 118.287 21.3933 108.491 24.4334 100.361C24.7689 99.4642 25.4247 98.7316 26.2332 98.2185ZM95.3543 4.9148C101.907 -1.63823 112.532 -1.63831 119.085 4.9148C125.638 11.4679 125.638 22.0921 119.085 28.6453L118.543 29.1882C125.907 44.2213 125.084 61.6251 115.239 73.991L96.9813 96.9246C93.6931 101.055 91.7199 106.157 91.2762 111.677C90.2738 124.148 75.2056 128.306 65.6483 118.749L5.25082 58.3513C-4.3064 48.794 -0.148725 33.7258 12.3221 32.7234C17.8429 32.2797 22.9447 30.3065 27.075 27.0183L50.0086 8.76051C62.3745 -1.0845 79.7783 -1.9075 94.8114 5.45679L95.3543 4.9148Z'
                                        fill='#0178FF'
                                    />
                                </svg>
                            </div>

                            <h1
                                className='mb-6 px-4 sm:mb-8'
                                style={{
                                    fontFamily: "Dm Sans",
                                    fontWeight: 700,
                                    fontSize: "clamp(54px, 5vw, 135px)",
                                    lineHeight: "clamp(52px, 4.5vw, 106px)",
                                    letterSpacing: "-0.06em",
                                    color: "#000000",
                                    textAlign: "center",
                                    wordBreak: "break-word",
                                    hyphens: "auto",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "Cormorant Garamond",
                                        fontWeight: 700,
                                        fontStyle: "italic",
                                        fontSize: "clamp(54px, 5vw, 135px)",
                                        lineHeight: "clamp(52px, 4.5vw, 106px)",
                                        letterSpacing: "-0.06em",
                                    }}
                                >
                                    You&apos;re
                                </span>{" "}
                                Welcome
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
                                We&apos;ve been waiting for you to join the others, but <br />
                                you&apos;re here now, and you&apos;re family, lets japa together
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
                </main>
            </div>

            <Footer />
        </>
    );
}
