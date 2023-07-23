'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoint, up } from '@/shared/styles';

export const Icon = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;

    ${up(Breakpoint.MD)} {
        width: 40px;
        height: 40px;
    }

    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 40%;
        height: 2px;
        background: ${({ theme }) => theme.colors.gray80};
        transform: translate(-50%, -50%);
        transition: background 0.3s;
    }

    &:after {
        transform: translate(-50%, -50%) rotate(90deg);
    }
`;

export const Container = styled.div<{ $expanded?: boolean }>`
    position: relative;
    background: ${({ theme }) => theme.colors.gray80};
    border-radius: 20px;

    ${Icon} {
        &:after {
            background: ${({ $expanded }) =>
                $expanded ? 'transparent' : null};
        }
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 20px;
    cursor: pointer;
`;

export const Content = styled(motion.div)`
    height: 0;
    padding: 0 20px;
    overflow: hidden;
`;
