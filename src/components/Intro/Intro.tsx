'use client';

import { useEffect, useRef } from 'react';
import { useInView, Variants } from 'framer-motion';

import {
    Container,
    Wrapper,
    Avatar,
    Content,
    Title,
    Description,
    Buttons,
    Link,
    Icon,
} from './Intro.styled';
import Image from '@/components/Image/Image';
import { useApp } from '@/hooks';

import memoji from '../../../public/images/memoji.jpg';
import { Github, Telegram } from '@/icons';

interface IIntro {
    className?: string;
}

const Intro: React.FC<IIntro> = ({ className }) => {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { amount: 0.65 });

    const { setIntroVisible } = useApp();

    useEffect(() => setIntroVisible(isInView), [isInView]);

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: 160,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <Container className={className} id="home" ref={containerRef}>
            <Wrapper
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.2 }}
            >
                <Avatar variants={variants}>
                    <Image src={memoji} alt="Vladislav Grigoriev" fill />
                </Avatar>
                <Content>
                    <Title variants={variants}>Frontend Developer</Title>
                    <Description variants={variants}>
                        Привет, я&nbsp;Влад! Я&nbsp;фронтенд разработчик
                        и&nbsp;мне нравится создавать надежные
                        и&nbsp;масштабируемые интерфейсные продукты
                        с&nbsp;отличным пользовательским опытом.
                    </Description>
                </Content>
                <Buttons variants={variants}>
                    <Link
                        href="https://github.com/dislav"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon>{Github}</Icon>
                        Github
                    </Link>
                    <Link
                        href="https://t.me/vlgrigoriev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon>{Telegram}</Icon>
                        Telegram
                    </Link>
                </Buttons>
            </Wrapper>
        </Container>
    );
};

export default Intro;
