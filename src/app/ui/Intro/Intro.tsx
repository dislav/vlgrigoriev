'use client';

import { useEffect, useRef } from 'react';
import { useInView, Variants } from 'framer-motion';
import Image from 'next/image';

import { useApp } from '@/shared/hooks';
import { Github, Telegram } from '@/shared/icons';
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
import memoji from '../../../../public/images/memoji.jpg';

export default function Intro() {
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
        <Container id="home" ref={containerRef}>
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
}
