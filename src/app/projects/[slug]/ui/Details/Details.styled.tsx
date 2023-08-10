'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoint, up } from '@/shared/styles';

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 40px 20px 0;

    ${up(Breakpoint.XL)} {
        position: sticky;
        top: 0;
        gap: 0;
        width: 40%;
        height: 100vh;
        padding: 80px 20px 120px;
    }

    a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({ theme }) => theme.colors.white};
        font-size: 16px;
        font-weight: 500;
        line-height: 32px;

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
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;

    ${up(Breakpoint.MD)} {
        gap: 32px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    ${up(Breakpoint.MD)} {
        gap: 16px;
    }
`;

export const Subtitle = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;

    ${up(Breakpoint.MD)} {
        font-size: 20px;
        line-height: 24px;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;

    ${up(Breakpoint.MD)} {
        font-size: 40px;
        line-height: 56px;
    }
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    ${up(Breakpoint.MD)} {
        font-size: 16px;
        line-height: 32px;
    }
`;
