'use client';

import { ThemeProvider } from 'styled-components';

import AppProvider from '@/app/app-provider';

import { theme, GlobalStyle } from '@/styles';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppProvider>
            <ThemeProvider theme={theme}>
                {children}
                <GlobalStyle />
            </ThemeProvider>
        </AppProvider>
    );
}
