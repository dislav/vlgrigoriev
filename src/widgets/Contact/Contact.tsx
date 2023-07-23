'use client';

import { useRef } from 'react';
import Image from 'next/image';

import { Container, Circle, Video } from './Contact.styled';
import { useApp, usePoint } from '@/shared/hooks';

import contact from '../../../public/images/contact.svg';

export default function Contact() {
    const containerRef = useRef<HTMLAnchorElement>(null);
    const { x, y, isHover } = usePoint(containerRef);
    const { introVisible } = useApp();

    return (
        <Container
            href="https://t.me/vlgrigoriev"
            target="_blank"
            $visible={!introVisible}
            ref={containerRef}
        >
            <Circle>
                <Image src={contact} alt="" fill />
            </Circle>
            <Video
                animate={{
                    x: x / 8,
                    y: y / 8,
                    transition: {
                        type: 'spring',
                        mass: 1.8,
                        stiffness: isHover ? 80 : 280,
                    },
                }}
            >
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
