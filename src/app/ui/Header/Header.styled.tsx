'use client';

import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoint, up } from '@/shared/styles';

export const Wrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth + 120}px;

    ${up(Breakpoint.MD)} {
        padding: 32px 80px;
    }
`;

export const Line = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    backdrop-filter: blur(16px);
    padding: 20px;

    ${up(Breakpoint.MD)} {
        justify-content: space-between;
        border-radius: 40px;
        padding: 0;
    }
`;

export const Logo = styled(motion.a)`
    display: flex;
    align-items: center;
    min-height: 36px;
`;

export const Container = styled(motion.header)<{ $isOpen: boolean }>`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            ${Wrapper} {
                ${up(Breakpoint.MD)} {
                    padding: 24px 20px 8px;
                }
            }

            ${Line} {
                ${up(Breakpoint.MD)} {
                    padding: 16px 24px 16px 20px;

                    &:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        border: 1px solid
                            ${({ theme }) => theme.colors.purple80};
                        border-radius: inherit;
                        pointer-events: none;
                    }
                }
            }

            ${Logo} {
                gap: 8px;

                ${up(Breakpoint.MD)} {
                    gap: 16px;
                }
            }
        `}
`;

export const Avatar = styled(motion.div)`
    display: none;

    ${up(Breakpoint.MD)} {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 36px;
    }

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

export const Name = styled(motion.span)`
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-transform: uppercase;

    span {
        font-weight: 300;
    }
`;

export const Menu = styled(motion.div)`
    display: none;
    gap: 32px;

    ${up(Breakpoint.MD)} {
        display: flex;
        align-items: center;
        min-height: 36px;
    }
`;

export const MenuItem = styled.a`
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`;
