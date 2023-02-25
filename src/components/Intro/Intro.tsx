import { Variants } from 'framer-motion';
import Image from 'next/image';

import {
    Container,
    Wrapper,
    Avatar,
    Content,
    Title,
    Description,
    Link,
} from './Intro.styled';

import memoji from '../../../public/images/memoji.jpg';

interface IIntro {
    className?: string;
}

const Intro: React.FC<IIntro> = ({ className }) => {
    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: 160,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: [0.2, 0.85, 0.25, 1],
            },
        },
    };

    return (
        <Container className={className} id="intro">
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
                <Link
                    href="https://t.me/vlgrigoriev"
                    target="_blank"
                    rel="noreferrer"
                    variants={variants}
                >
                    Связаться
                </Link>
            </Wrapper>
        </Container>
    );
};

export default Intro;
