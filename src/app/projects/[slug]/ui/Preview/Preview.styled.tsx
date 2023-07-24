'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth + 120}px;
    padding: 0 20px;
`;

export const Wrapper = styled.div<{ $background: string }>`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    background: ${({ $background }) => $background};
    border-radius: 20px;
    padding-top: 46.875%;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
