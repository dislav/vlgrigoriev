import { Metadata } from 'next';

import StyledComponentsRegistry from '@/app/registry';

import Providers from '@/app/providers';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Contact from '@/components/Contact/Contact';

export const metadata: Metadata = {
    title: {
        default: 'Vladislav Grigoriev • Frontend Developer',
        template: 'Vladislav Grigoriev • %s',
    },
    description: 'Frontend developer portfolio',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'Vladislav Grigoriev • Frontend Developer',
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
