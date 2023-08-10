'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoint, up } from '@/shared/styles';

export const Container = styled.section`
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    padding: 0 20px;

    ${up(Breakpoint.LG)} {
        flex-direction: row;
        gap: 40px;
    }
`;

export const Title = styled(motion.h2)`
    flex-basis: 32%;
    color: ${({ theme }) => theme.colors.white};
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
    white-space: nowrap;

    ${up(Breakpoint.MD)} {
        font-size: 40px;
        line-height: 48px;
    }
`;

export const List = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;

    ${up(Breakpoint.MD)} {
        flex-direction: row;
    }
`;

export const Item = styled(motion.div)`
    flex: 1;
`;
