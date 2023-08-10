'use client';

import styled, { css } from 'styled-components';

export const Box = styled.div`
    position: relative;
    width: 80%;
    height: 80%;
`;

export const Line = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    transform: translate(-50%, -50%) scaleX(1);
    transition: transform 0.3s;

    &:first-child {
        transform: translate(-50%, -10px);
    }

    &:last-child {
        transform: translate(-50%, 8px);
    }
`;

export const Container = styled.div<{ $isOpen?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            ${Line} {
                transform: translate(-50%, -50%) scaleX(0);

                &:first-child {
                    transform: translate(-50%, -50%) rotate(-45deg);
                }

                &:last-child {
                    transform: translate(-50%, -50%) rotate(45deg);
                }
            }
        `}
`;
