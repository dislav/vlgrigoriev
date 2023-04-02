'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoint, up } from '@/styles/utils';

export const Container = styled(motion.section)``;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    margin: 0 auto;
    padding: 0 20px;

    ${up(Breakpoint.MD)} {
        gap: 40px;
    }
`;

export const Title = styled(motion.h2)`
    color: ${({ theme }) => theme.colors.white};
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;

    ${up(Breakpoint.MD)} {
        font-size: 40px;
        line-height: 48px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 28px;

    ${up(Breakpoint.MD)} {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }
`;
