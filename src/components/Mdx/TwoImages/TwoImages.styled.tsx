'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoint, up } from '@/styles/utils';

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth - 300}px;
    gap: 40px;

    ${up(Breakpoint.MD)} {
        flex-direction: row;
        gap: 20px;
    }
`;

export const Card = styled(motion.div)`
    flex: 1;

    ${up(Breakpoint.MD)} {
        &:last-child {
            padding-top: 80px;
        }
    }
`;

export const CardWrapper = styled.div`
    position: relative;
    padding-top: 135.14%;

    img {
        object-fit: cover;
    }
`;
