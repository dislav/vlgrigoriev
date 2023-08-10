'use client';

import styled from 'styled-components';
import Link from 'next/link';

import { Breakpoint, up } from '@/shared/styles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    background: ${({ theme }) => theme.colors.gray80};
    border-radius: 20px;
    padding: 24px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

export const Icon = styled(Link)`
    position: relative;
    width: 56px;
    height: 56px;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

    ${up(Breakpoint.MD)} {
        font-size: 18px;
        line-height: 24px;
    }
`;

export const Company = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;

    ${up(Breakpoint.MD)} {
        font-size: 24px;
        line-height: 32px;
    }
`;

export const LinkIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.gray80};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
`;

export const Dates = styled.div`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;

    ${up(Breakpoint.MD)} {
        font-size: 16px;
    }
`;
