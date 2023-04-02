'use client';

import { ThemeProvider } from 'styled-components';

import AppProvider from '@/app/app-provider';

import { theme } from '@/styles/theme';
import GlobalStyle from '@/styles/global-style';

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
