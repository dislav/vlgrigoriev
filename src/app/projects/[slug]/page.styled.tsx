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
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    padding: 60px 20px 80px;
`;

export const Description = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: 48px;
    font-weight: 600;
    line-height: 48px;
`;

export const Preview = styled(motion.div)<{ background: string }>`
    display: flex;
    justify-content: center;
    width: 100%;
    background: ${({ background }) => background};
    overflow: hidden;
`;

export const PreviewWrapper = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    padding-top: 40px;
`;

export const ImageWrapper = styled(motion.div)`
    position: relative;
    padding-top: 46.875%;
`;

export const Mdx = styled(MdxComponent)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    color: ${({ theme }) => theme.colors.white};
    padding: 60px 20px;
`;
