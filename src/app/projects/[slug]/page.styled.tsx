'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import MdxComponent from '@/components/Mdx/Mdx';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Back = styled(motion.div)`
    display: flex;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    padding: 60px 20px 0;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.gray80};
        width: 60px;
        height: 60px;
        border-radius: 50%;
        transition: background 0.15s;

        &:hover {
            background: ${({ theme }) => theme.colors.primary};
        }

        svg {
            width: 30%;
            height: 30%;
        }
    }
`;

export const Header = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    padding: 60px 20px 80px;

    a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({ theme }) => theme.colors.white};
        font-size: 16px;
        font-weight: 500;
        line-height: 32px;

        svg {
            width: 16px;
            height: 16px;
        }
    }
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

export const Preview = styled(motion.div)`
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth + 200}px;
    padding: 0 20px;
    overflow: hidden;
`;

export const PreviewWrapper = styled.div<{ background: string }>`
    width: 100%;
    background: ${({ background }) => background};
    border-radius: 20px;
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
    gap: 80px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    color: ${({ theme }) => theme.colors.white};
    padding: 60px 20px;
`;
