'use client';

import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

export const Circle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    will-change: transform;
    transform: scale(1);
    transition: transform 0.3s;
    pointer-events: none;

    img {
        animation: ${rotate} 20s linear infinite;
    }
`;

export const Video = styled(motion.div)`
    position: relative;
    width: 100px;
    height: 100px;

    img {
        border-radius: 50%;
        will-change: transform;
        transform: scale(1);
        transition: transform 0.3s;
    }
`;

export const Container = styled.a`
    position: fixed;
    right: 60px;
    bottom: 40px;
    padding: 24px;
    z-index: 10;

    &:hover {
        &:before {
            content: '';
            position: absolute;
            top: -25%;
            left: -25%;
            right: -25%;
            bottom: -25%;
            border-radius: 50%;
        }

        ${Circle} {
            transform: scale(1.1);
        }

        ${Video} img {
            transform: scale(1.04);
        }
    }
`;
