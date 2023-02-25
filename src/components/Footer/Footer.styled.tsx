'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.footer)`
    padding: 100px 0 40px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;

    a {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
`;

export const Socials = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-left: auto;

    a {
        color: ${({ theme }) => theme.colors.white};
    }
`;
