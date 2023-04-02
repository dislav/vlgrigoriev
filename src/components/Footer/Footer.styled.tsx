'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoint, up } from '@/styles/utils';

export const Container = styled(motion.footer)`
    padding: 60px 0 20px;

    ${up(Breakpoint.MD)} {
        padding: 100px 0 40px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    margin: 0 auto;
    padding: 0 20px;

    ${up(Breakpoint.MD)} {
        gap: 100px;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;

    ${up(Breakpoint.MD)} {
        font-size: 40px;
        line-height: 48px;
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

    ${up(Breakpoint.MD)} {
        align-items: center;
        flex-direction: row;
    }
`;

export const Socials = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    a {
        color: ${({ theme }) => theme.colors.white};
    }
`;
