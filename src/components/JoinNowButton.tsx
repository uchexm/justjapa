import React from "react";

interface JoinNowButtonProps {
    className?: string;
    onClick?: () => void;
}

export function JoinNowButton({ className = "", onClick }: JoinNowButtonProps) {
    return (
        <div className={`btn-conteiner ${className}`}>
            <button
                onClick={onClick}
                className='btn-content'
                style={{ width: "150px", height: "50px" }}
            >
                <span className='btn-title'>Join Now</span>
                <span className='icon-arrow'>
                    <svg width='14' height='14' viewBox='0 0 18.3271 18.3271' fill='none'>
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
            </button>
        </div>
    );
}
