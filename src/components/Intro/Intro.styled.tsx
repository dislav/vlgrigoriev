'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 85vh;
`;

export const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Avatar = styled(motion.div)`
    position: relative;
    width: 140px;
    height: 140px;

    &:before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        background: linear-gradient(225deg, #f94392 0%, #5d4ffc 100%);
        border-radius: 50%;
    }

    img {
        border-radius: 50%;
        border: 4px solid ${({ theme }) => theme.colors.black};
        box-shadow: 0 0 80px rgba(145, 73, 236, 0.4);
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 65%;
`;

export const Title = styled(motion.h1)`
    color: ${({ theme }) => theme.colors.white};
    font-size: 70px;
    font-weight: 600;
    line-height: 72px;
    text-align: center;
`;

export const Description = styled(motion.p)`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    text-align: center;
`;

export const Link = styled(motion.a)`
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 30px;
    padding: 12px 20px;
`;
