'use client';

import styled from 'styled-components';

import Accordion from '@/components/Accordion/Accordion';

export const Container = styled(Accordion)``;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`;

export const Title = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;
`;

export const Body = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`;

export const Link = styled.a`
    display: flex;
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.gray80};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    margin-right: 8px;
`;

export const Tags = styled.div`
    display: flex;
    column-gap: 10px;
    row-gap: 6px;
`;

export const Tag = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 30px;
    padding: 0 12px;
`;
