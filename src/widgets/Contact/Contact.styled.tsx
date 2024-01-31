'use client';

import styled, { keyframes } from 'styled-components';

import { Breakpoint, up } from '@/shared/styles';

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
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: ${rotate} 20s linear infinite;
    }
`;

export const Video = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;

    video {
        width: 100%;
        height: 100%;
        transform: scale(1.03);
    }
`;

export const Container = styled.a<{ $isOpen: boolean }>`
    position: fixed;
    right: 60px;
    bottom: 40px;
    display: none;
    will-change: transform;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: scale(${({ $isOpen }) => ($isOpen ? 1 : 0.8)});
    transition:
        opacity 0.3s,
        transform 0.3s;
    padding: 24px;
    z-index: 10;

    ${up(Breakpoint.LG)} {
        display: block;
    }

    &:hover {
        &:before {
            content: '';
            position: absolute;
            top: -20%;
            left: -20%;
            right: -20%;
            bottom: -20%;
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
