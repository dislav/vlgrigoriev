'use client';

import styled from 'styled-components';
import { Breakpoint, up } from '@/shared/styles';

import { Section } from '../Section';

export const Container = styled(Section)`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
    background: ${({ theme }) => theme.colors.gray80};
    border-radius: 10px;
    padding: 24px;

    ${up(Breakpoint.MD)} {
        font-size: 18px;
        font-weight: 500;
        line-height: 32px;
        border-radius: 20px;
        padding: 56px;
    }
`;
