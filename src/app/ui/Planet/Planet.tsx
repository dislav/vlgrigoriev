'use client';

import { motion } from 'framer-motion';

export default function Planet() {
    return (
        <svg
            width="116"
            height="116"
            viewBox="0 0 116 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_402_6)">
                <path
                    d="M8 58L108 58"
                    stroke="#884DFF"
                    strokeWidth="16"
                    strokeLinecap="round"
                />
                <motion.ellipse
                    cx="58"
                    cy="58"
                    ry="50"
                    stroke="#884DFF"
                    strokeWidth="16"
                    initial={{ rx: 0 }}
                    animate={{ rx: 50 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                />
                <circle
                    cx="58"
                    cy="58"
                    r="50"
                    stroke="#884DFF"
                    strokeWidth="16"
                />
            </g>
            <defs>
                <clipPath id="clip0_402_6">
                    <rect width="116" height="116" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
