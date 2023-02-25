'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Container, Circle, Video } from './Contact.styled';

import contact from '../../../public/images/contact.svg';
import memoji from '../../../public/images/memoji.jpg';

interface IContact {
    className?: string;
}

const Contact: React.FC<IContact> = ({ className }) => {
    const [isHover, setIsHover] = useState(false);
    const [point, setPoint] = useState({ x: 0, y: 0 });

    const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setIsHover(true);

        if (e.target) {
            const rect = (
                e.target as HTMLAnchorElement
            ).getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            setPoint({ x: x / 10, y: y / 10 });
        }
    };

    const onMouseLeave = () => {
        setIsHover(false);
        setPoint({ x: 0, y: 0 });
    };

    return (
        <Container
            className={className}
            href="https://t.me/vlgrigoriev"
            target="_blank"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            <Circle>
                <Image src={contact} alt="" fill />
            </Circle>
            <Video
                animate={{
                    x: point.x,
                    y: point.y,
                    transition: {
                        type: 'spring',
                        mass: isHover ? 1 : 1.6,
                        stiffness: isHover ? 80 : 400,
                    },
                }}
            >
                <Image src={memoji} alt="Vladislav Grigoriev" fill />
            </Video>
        </Container>
    );
};

export default Contact;
