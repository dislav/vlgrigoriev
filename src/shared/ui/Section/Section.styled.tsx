'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoint, up } from '@/shared/styles';

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 18px;

    ${up(Breakpoint.MD)} {
        gap: 24px;
    }
`;
