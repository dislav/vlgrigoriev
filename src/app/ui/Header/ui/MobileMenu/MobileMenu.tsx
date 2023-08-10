import { AnimatePresence, Transition } from 'framer-motion';

import { WithClassName } from '@/shared/types';
import { Container, Wrapper } from './MobileMenu.styled';

interface MobileMenuProps {
    children: React.ReactNode;
    isOpen: boolean;
}

export default function MobileMenu({
    className,
    children,
    isOpen,
}: WithClassName<MobileMenuProps>) {
    const transition: Transition = {
        duration: 0.4,
        ease: [0.2, 0.85, 0.25, 1],
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <Container
                    className={className}
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={transition}
                >
                    <Wrapper>{children}</Wrapper>
                </Container>
            )}
        </AnimatePresence>
    );
}
