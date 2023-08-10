'use client';

import styled from 'styled-components';

import { Breakpoint, up } from '@/shared/styles';
import { Mdx as MdxComponent } from '@/shared/ui';

export const Container = styled.main`
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;

    ${up(Breakpoint.XL)} {
        flex-direction: row;
        gap: 24px;
    }
`;

export const Mdx = styled(MdxComponent)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    color: ${({ theme }) => theme.colors.white};
    padding: 0 20px 40px;

    ${up(Breakpoint.XL)} {
        width: 60%;
        gap: 24px;
        padding: 80px 20px;
    }
`;
