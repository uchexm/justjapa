import Link from "next/link";

import styles from "./Logo.module.css";

export function Logo({ className }: { className?: string }) {
    return (
        <Link
            href='/'
            className={`btn-hover-simple flex cursor-pointer items-center gap-3 ${className}`}
        >
            {/* JustJapa Logo - Figma specifications */}
            <div className={`relative flex items-center ${styles.logoContainer}`}>
                {/* Orange circle - positioned as per Figma */}
                <div
                    className='absolute rounded-full bg-[#FF4C00]'
                    style={{
                        width: "clamp(16px, 2.5vw, 24px)",
                        height: "clamp(16px, 2.5vw, 24px)",
                        left: "0px",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}
                ></div>
                {/* Blue circle - positioned as per Figma */}
                <div
                    className='rounded-full bg-[#0053DB]'
                    style={{
                        width: "clamp(45px, 8vw, 70px)",
                        height: "clamp(45px, 8vw, 70px)",
                        marginLeft: "clamp(18px, 4vw, 28px)",
                    }}
                ></div>
                {/* Just Japa text - positioned as per Figma */}
                <span
                    className='ml-3 font-medium text-black'
                    style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "clamp(28px, 5vw, 50px)",
                        fontWeight: 500,
                        lineHeight: "1.1",
                        letterSpacing: "-0.03em",
                    }}
                >
                    Just Japa
                </span>

                {/* Star Elements */}
                <svg
                    className={`${styles.star} ${styles.star1}`}
                    viewBox='0 0 47 47'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <polygon
                        className={styles.starFill1}
                        points='23.5,0 29.1,17.8 47,17.8 32.9,28.8 38.6,46.6 23.5,35.6 8.4,46.6 14.1,28.8 0,17.8 17.9,17.8'
                    />
                </svg>

                <svg
                    className={`${styles.star} ${styles.star2}`}
                    viewBox='0 0 47 47'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <polygon
                        className={styles.starFill2}
                        points='23.5,0 29.1,17.8 47,17.8 32.9,28.8 38.6,46.6 23.5,35.6 8.4,46.6 14.1,28.8 0,17.8 17.9,17.8'
                    />
                </svg>

                <svg
                    className={`${styles.star} ${styles.star3}`}
                    viewBox='0 0 47 47'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <polygon
                        className={styles.starFill3}
                        points='23.5,0 29.1,17.8 47,17.8 32.9,28.8 38.6,46.6 23.5,35.6 8.4,46.6 14.1,28.8 0,17.8 17.9,17.8'
                    />
                </svg>

                <svg
                    className={`${styles.star} ${styles.star4}`}
                    viewBox='0 0 47 47'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <polygon
                        className={styles.starFill4}
                        points='23.5,0 29.1,17.8 47,17.8 32.9,28.8 38.6,46.6 23.5,35.6 8.4,46.6 14.1,28.8 0,17.8 17.9,17.8'
                    />
                </svg>

                <svg
                    className={`${styles.star} ${styles.star5}`}
                    viewBox='0 0 47 47'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <polygon
                        className={styles.starFill5}
                        points='23.5,0 29.1,17.8 47,17.8 32.9,28.8 38.6,46.6 23.5,35.6 8.4,46.6 14.1,28.8 0,17.8 17.9,17.8'
                    />
                </svg>

                <svg
                    className={`${styles.star} ${styles.star6}`}
                    viewBox='0 0 47 47'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <polygon
                        className={styles.starFill6}
                        points='23.5,0 29.1,17.8 47,17.8 32.9,28.8 38.6,46.6 23.5,35.6 8.4,46.6 14.1,28.8 0,17.8 17.9,17.8'
                    />
                </svg>
            </div>
        </Link>
    );
}
