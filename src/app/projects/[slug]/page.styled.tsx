'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoint, up } from '@/styles';
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
    padding: 40px 20px 0;

    ${up(Breakpoint.MD)} {
        padding-top: 60px;
    }

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
    gap: 10px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    padding: 40px 20px 60px;

    ${up(Breakpoint.MD)} {
        gap: 20px;
        padding: 60px 20px 80px;
    }

    a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({ theme }) => theme.colors.white};
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;

        ${up(Breakpoint.MD)} {
            font-size: 18px;
        }

        svg {
            width: 16px;
            height: 16px;
        }
    }
`;

export const Description = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;

    ${up(Breakpoint.MD)} {
        font-size: 24px;
        line-height: 32px;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;

    ${up(Breakpoint.MD)} {
        font-size: 48px;
        line-height: 48px;
    }
`;

export const Preview = styled(motion.div)`
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth + 120}px;
    padding: 0 20px;
`;

export const PreviewWrapper = styled.div<{ background: string }>`
    display: flex;
    justify-content: center;
    width: 100%;
    background: ${({ background }) => background};
    border-radius: 20px;
    padding-top: 16px;
    overflow: hidden;

    ${up(Breakpoint.MD)} {
        padding-top: 40px;
    }
`;

export const AspectRatio = styled.div<{ $width: number; $height: number }>`
    position: relative;
    padding-top: ${({ $width, $height }) => ($height / $width) * 100}%;

    img {
        object-fit: cover;
    }
`;

export const ImageWrapper = styled(motion.div)`
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
`;

export const Mdx = styled(MdxComponent)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth - 160}px;
    color: ${({ theme }) => theme.colors.white};
    padding: 60px 20px 40px;

    ${up(Breakpoint.MD)} {
        gap: 120px;
        padding-top: 120px;
    }
`;
