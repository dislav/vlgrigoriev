'use client';

import { useRef } from 'react';

import { Container, Circle, Video } from './Contact.styled';
import Image from '@/components/Image/Image';
import { useApp, usePoint } from '@/hooks';

import contact from '../../../public/images/contact.svg';

interface IContact {
    className?: string;
}

const Contact: React.FC<IContact> = ({ className }) => {
    const containerRef = useRef<HTMLAnchorElement>(null);
    const { x, y, isHover } = usePoint(containerRef);
    const { introVisible } = useApp();

    return (
        <Container
            className={className}
            href="https://t.me/vlgrigoriev"
            target="_blank"
            visible={!introVisible}
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
};

export default Contact;
