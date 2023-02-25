'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.section)``;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Title = styled(motion.h2)`
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
`;
