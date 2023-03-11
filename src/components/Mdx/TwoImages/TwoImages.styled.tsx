'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    display: flex;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth - 300}px;
    gap: 20px;
`;

export const Card = styled(motion.div)`
    flex: 1;

    &:last-child {
        padding-top: 80px;
    }
`;

export const CardWrapper = styled.div`
    position: relative;
    padding-top: 135.14%;

    img {
        object-fit: cover;
    }
`;
