import { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import StyledComponentsRegistry from '@/app/registry';
import Providers from '@/app/providers';
import { Footer } from '@/shared/ui';
import { Contact } from '@/widgets/Contact';

const manrope = Manrope({ subsets: ['cyrillic', 'latin'] });

const title = 'Vladislav Grigoriev';
const description = 'Frontend developer portfolio';

export const metadata: Metadata = {
    title: {
        default: title,
        template: `%s • ${title}`,
    },
    description,
    openGraph: {
        title: {
            default: title,
            template: `%s • ${title}`,
        },
        description,
    },
    twitter: {
        title: {
            default: title,
            template: `%s • ${title}`,
        },
        description,
    },
    metadataBase: new URL('https://vlgrigoriev.dev'),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={manrope.className}>
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
