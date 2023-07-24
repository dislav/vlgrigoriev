'use client';

import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from '@/shared/styles';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
            <GlobalStyle />
        </ThemeProvider>
    );
}
