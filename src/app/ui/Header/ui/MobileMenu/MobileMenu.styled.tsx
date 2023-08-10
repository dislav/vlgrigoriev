'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    position: relative;
    overflow: hidden;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 0 20px 20px;
`;
