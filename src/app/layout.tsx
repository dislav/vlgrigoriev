import { Metadata } from 'next';

import StyledComponentsRegistry from '@/app/registry';

import Providers from '@/app/providers';
import Footer from '@/components/Footer/Footer';
import Contact from '@/components/Contact/Contact';

export const metadata: Metadata = {
    title: {
        default: 'Vladislav Grigoriev',
        template: '%s • Vladislav Grigoriev',
    },
    description: 'Frontend developer portfolio',
    icons: {
        icon: [
            { url: '/favicon.png-64x64.png', type: 'image/png' },
            {
                url: '/favicon-128x128.png',
                sizes: '128x128',
                type: 'image/png',
            },
            {
                url: '/favicon-256x256.png',
                sizes: '256x256',
                type: 'image/png',
            },
        ],
        apple: [
            { url: '/apple-icon.png' },
            {
                url: '/apple-icon-128x128.png',
                sizes: '128x128',
                type: 'image/png',
            },
            {
                url: '/apple-icon-256x256.png',
                sizes: '256x256',
                type: 'image/png',
            },
        ],
    },
    metadataBase: new URL('https://vlgrigoriev.dev'),
    openGraph: {
        title: {
            default: 'Vladislav Grigoriev',
            template: '%s • Vladislav Grigoriev',
        },
    },
    twitter: {
        title: {
            default: 'Vladislav Grigoriev',
            template: '%s • Vladislav Grigoriev',
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <head />
            <body>
                <StyledComponentsRegistry>
                    <Providers>
                        {children}
                        <Footer />
                        <Contact />
                    </Providers>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
