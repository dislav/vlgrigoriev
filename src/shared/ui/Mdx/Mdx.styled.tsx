'use client';

import styled from 'styled-components';

import { Breakpoint, up } from '@/shared/styles';

export const Container = styled.article`
    h2 {
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;

        ${up(Breakpoint.MD)} {
            font-size: 32px;
            line-height: 48px;
        }
    }

    h3 {
        font-size: 20px;
        font-weight: 600;
        line-height: 32px;

        ${up(Breakpoint.MD)} {
            font-size: 24px;
            line-height: 32px;
        }
    }

    h4 {
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;

        ${up(Breakpoint.MD)} {
            font-size: 20px;
            line-height: 24px;
        }
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 10px;

        ${up(Breakpoint.MD)} {
            border-radius: 20px;
        }
    }
`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;

    ${up(Breakpoint.MD)} {
        font-size: 18px;
        line-height: 32px;
    }
`;
