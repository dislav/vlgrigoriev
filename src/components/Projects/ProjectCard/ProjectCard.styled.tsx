'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoint, up } from '@/styles';

export const Container = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &:hover {
        img {
            transform: scale(1.04);
        }
    }
`;

export const Preview = styled.div`
    position: relative;
    padding-top: 100%;
    border-radius: 20px;
    overflow: hidden;
    z-index: 1;

    img {
        transition: transform 0.4s ease;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;

    ${up(Breakpoint.MD)} {
        font-size: 28px;
        line-height: 32px;
    }
`;

export const Year = styled.span`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    ${up(Breakpoint.MD)} {
        font-size: 16px;
    }
`;
