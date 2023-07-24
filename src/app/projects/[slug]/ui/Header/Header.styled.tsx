'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoint, up } from '@/shared/styles';

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    padding: 40px 20px;

    ${up(Breakpoint.MD)} {
        gap: 40px;
        padding: 80px 20px;
    }

    a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({ theme }) => theme.colors.white};
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;

        ${up(Breakpoint.MD)} {
            font-size: 18px;
        }

        svg {
            width: 16px;
            height: 16px;
        }
    }
`;

export const Back = styled(motion.div)`
    display: flex;
    width: 100%;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.gray80};
        width: 60px;
        height: 60px;
        border-radius: 50%;
        transition: background 0.15s;

        &:hover {
            background: ${({ theme }) => theme.colors.primary};
        }

        svg {
            width: 30%;
            height: 30%;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    ${up(Breakpoint.MD)} {
        gap: 20px;
    }
`;

export const Description = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;

    ${up(Breakpoint.MD)} {
        font-size: 24px;
        line-height: 32px;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;

    ${up(Breakpoint.MD)} {
        font-size: 48px;
        line-height: 48px;
    }
`;
