'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { rgba } from 'polished';

export const Container = styled.header`
    position: sticky;
    top: 0;
    background: ${({ theme }) => rgba(theme.colors.background, 0.8)};
    backdrop-filter: blur(20px);
    padding: 40px 0;
    z-index: 10;
`;

export const Wrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Logo = styled.a`
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;

    span {
        font-weight: 600;
        text-transform: uppercase;
    }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    margin-left: auto;
`;

export const MenuItem = styled.a`
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`;
