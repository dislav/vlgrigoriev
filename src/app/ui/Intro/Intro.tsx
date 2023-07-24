'use client';

import Image from 'next/image';
import { Variants } from 'framer-motion';

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

export default function Intro() {
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
        <Container id="home">
            <Wrapper
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.2 }}
            >
                <Avatar variants={variants}>
                    <Image
                        src="/images/memoji.jpg"
                        alt="Vladislav Grigoriev"
                        width={140}
                        height={140}
                    />
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
