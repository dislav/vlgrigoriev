'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.gray80};
    border-radius: 20px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    margin-left: auto;
`;

export const Content = styled(motion.div)`
    height: 0;
    padding: 0 20px;
    overflow: hidden;
`;
