'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Preview = styled.div`
    position: relative;
    padding-top: 100%;
    border-radius: 20px;
    overflow: hidden;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-size: 28px;
    font-weight: 600;
    line-height: 32px;
`;

export const Year = styled.span`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`;
