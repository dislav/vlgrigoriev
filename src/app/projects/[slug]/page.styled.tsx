'use client';

import styled from 'styled-components';

import { Breakpoint, up } from '@/shared/styles';
import { Mdx as MdxComponent } from '@/shared/ui';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
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
