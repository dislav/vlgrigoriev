'use client';

import styled from 'styled-components';

import ImageComponent from '@/components/Image/Image';

export const Container = styled.article`
    h2 {
        font-size: 40px;
        font-weight: 600;
        line-height: 48px;
    }

    h3 {
        font-size: 32px;
        font-weight: 600;
        line-height: 40px;
    }

    h4 {
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
    }

    img {
        width: 100%;
        height: auto;
    }
`;

export const Image = styled(ImageComponent)`
    max-width: ${({ theme }) => theme.variables.maxWidth - 300}px;
    border-radius: 20px;
`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
`;
