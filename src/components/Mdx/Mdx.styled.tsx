'use client';

import styled from 'styled-components';

import { Breakpoint, up } from '@/styles/utils';
import ImageComponent from '@/components/Image/Image';

export const Container = styled.article`
    h2 {
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;

        ${up(Breakpoint.MD)} {
            font-size: 40px;
            line-height: 48px;
        }
    }

    h3 {
        font-size: 20px;
        font-weight: 600;
        line-height: 32px;

        ${up(Breakpoint.MD)} {
            font-size: 32px;
            line-height: 40px;
        }
    }

    h4 {
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;

        ${up(Breakpoint.MD)} {
            font-size: 24px;
            line-height: 32px;
        }
    }

    img {
        width: 100%;
        height: auto;
    }
`;

export const Image = styled(ImageComponent)`
    max-width: ${({ theme }) => theme.variables.maxWidth - 300}px;
    border-radius: 10px;

    ${up(Breakpoint.MD)} {
        border-radius: 20px;
    }
`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;

    ${up(Breakpoint.MD)} {
        font-size: 20px;
        line-height: 32px;
    }
`;
