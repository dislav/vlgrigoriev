'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.section``;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 40px;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Title = styled(motion.h2)`
    flex-basis: 32%;
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    white-space: nowrap;
`;

export const List = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
