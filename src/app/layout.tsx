import { Metadata } from 'next';

import StyledComponentsRegistry from '@/app/registry';

import Providers from '@/app/providers';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Contact from '@/components/Contact/Contact';

export const metadata: Metadata = {
    title: {
        default: 'Vladislav Grigoriev',
        template: '%s • Vladislav Grigoriev',
    },
    description: 'Frontend developer portfolio',
    icons: {
        icon: '/favicon.ico',
    },
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
        <html lang="en">
            <head />
            <body>
                <StyledComponentsRegistry>
                    <Providers>
                        <Header />
                        {children}
                        <Footer />
                        <Contact />
                    </Providers>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
