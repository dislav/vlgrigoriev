'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';

import { useHoverAnimate, useToggleable } from '@/shared/hooks';
import { Container, Circle, Video } from './Contact.styled';

export default function Contact() {
    const videoRef = useRef<HTMLDivElement>(null);

    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const { isOpen, onOpen, onClose } = useToggleable(!isHomePage);

    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (isHomePage) {
            if (latest > 0.25) {
                onOpen();
            } else {
                onClose();
            }
        }
    });

    const [scope] = useHoverAnimate<HTMLAnchorElement>(videoRef, {
        transitionMove: { duration: 0.3 },
        transitionLeave: { type: 'spring', mass: 1.6, stiffness: 320 },
    });

    return (
        <Container
            href="https://t.me/vlgrigoriev"
            target="_blank"
            $isOpen={isOpen}
            ref={scope}
        >
            <Circle>
                <Image
                    src="/images/contact.svg"
                    alt="Vladislav Grigoriev"
                    width={148}
                    height={148}
                />
            </Circle>
            <Video ref={videoRef}>
                <video
                    src="/memoji-video.mp4"
                    autoPlay
                    playsInline
                    muted
                    loop
                />
            </Video>
        </Container>
    );
}
