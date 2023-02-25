'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.section``;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 40px;
    max-width: ${({ theme }) => theme.variables.maxWidth}px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Title = styled(motion.h2)`
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    white-space: nowrap;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const AccordionHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const AccordionPeriod = styled.div`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`;

export const AccordionTitle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
`;

export const AccordionContent = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding-bottom: 20px;
`;
