'use client';

import styled from 'styled-components';

import { Breakpoint, up } from '@/styles';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 60px;

    ${up(Breakpoint.LG)} {
        gap: 100px;
    }
`;
