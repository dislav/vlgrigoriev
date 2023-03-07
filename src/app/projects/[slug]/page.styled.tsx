'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import MdxComponent from '@/components/Mdx/Mdx';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled(motion.div)`
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    padding: 60px 20px 80px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: 48px;
    font-weight: 600;
    line-height: 48px;
`;

export const Preview = styled(motion.div)<{ background: string }>`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    height: min-content;
    background: ${({ background }) => background};

    img {
        object-fit: cover;
    }
`;

export const Mdx = styled(MdxComponent)`
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    color: ${({ theme }) => theme.colors.white};
    padding: 60px 20px;
`;
