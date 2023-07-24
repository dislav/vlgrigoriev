'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoint, up } from '@/shared/styles';

export const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 168px);

    ${up(Breakpoint.MD)} {
        min-height: calc(100vh - 200px);
    }
`;

export const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Avatar = styled(motion.div)`
    position: relative;
    width: 120px;
    height: 120px;

    ${up(Breakpoint.MD)} {
        width: 140px;
        height: 140px;
    }

    &:before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        background: linear-gradient(225deg, #f94392 0%, #5d4ffc 100%);
        border-radius: 50%;
        z-index: -1;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid ${({ theme }) => theme.colors.black};
        box-shadow: 0 0 80px rgba(145, 73, 236, 0.4);
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    ${up(Breakpoint.XL)} {
        width: 65%;
    }
`;

export const Title = styled(motion.h1)`
    color: ${({ theme }) => theme.colors.white};
    font-size: 32px;
    font-weight: 600;
    line-height: 32px;
    text-align: center;

    ${up(Breakpoint.MD)} {
        font-size: 72px;
        line-height: 72px;
    }
`;

export const Description = styled(motion.p)`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;

    ${up(Breakpoint.MD)} {
        font-size: 18px;
        line-height: 32px;
    }
`;

export const Buttons = styled(motion.div)`
    display: flex;
    gap: 12px;

    ${up(Breakpoint.MD)} {
        gap: 20px;
    }
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    background: ${({ theme }) => theme.colors.gray80};
    border-radius: 30px;
    padding: 14px 20px 14px 18px;
    transition: background 0.15s;

    &:hover {
        background: ${({ theme }) => theme.colors.primary};
    }
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;

    svg {
        width: 100%;
        height: 100%;
    }
`;
