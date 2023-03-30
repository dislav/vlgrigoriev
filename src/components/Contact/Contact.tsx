'use client';

import { useRef } from 'react';

import { Container, Circle, Video } from './Contact.styled';
import Image from '@/components/Image/Image';
import { usePoint } from '@/hooks';

import contact from '../../../public/images/contact.svg';
import memoji from '../../../public/images/memoji.jpg';

interface IContact {
    className?: string;
}

const Contact: React.FC<IContact> = ({ className }) => {
    const containerRef = useRef<HTMLAnchorElement>(null);
    const { x, y, isHover } = usePoint(containerRef);

    return (
        <Container
            className={className}
            href="https://t.me/vlgrigoriev"
            target="_blank"
            ref={containerRef}
        >
            <Circle>
                <Image src={contact} alt="" fill />
            </Circle>
            <Video
                animate={{
                    x: x / 16,
                    y: y / 16,
                    transition: {
                        type: 'spring',
                        mass: 1.6,
                        stiffness: isHover ? 80 : 380,
                    },
                }}
            >
                <Image src={memoji} alt="Vladislav Grigoriev" fill />
            </Video>
        </Container>
    );
};

export default Contact;
