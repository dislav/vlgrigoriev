'use client';

import { motion, Variants } from 'framer-motion';

import { Container, Wrapper, Text, Row, Socials } from './Footer.styled';

interface IFooter {
    className?: string;
}

const Footer: React.FC<IFooter> = ({ className }) => {
    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.2, 0.85, 0.25, 1],
            },
        },
    };

    return (
        <Container
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ staggerChildren: 0.1 }}
        >
            <Wrapper>
                <Text>
                    <motion.span variants={variants}>
                        Есть&nbsp;проект? Давай&nbsp;обсудим
                    </motion.span>
                    <motion.a
                        href="https://t.me/vlgrigoriev"
                        target="_blank"
                        rel="noreferrer"
                        variants={variants}
                    >
                        Связаться
                    </motion.a>
                </Text>
                <Row>
                    <span>
                        © Vladislav Grigoriev {new Date().getFullYear()}
                    </span>
                    <Socials>
                        <a
                            href="https://t.me/vlgrigoriev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Telegram
                        </a>
                        <a
                            href="https://vk.com/vl.grigoriev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Vkontakte
                        </a>
                        <a
                            href="https://github.com/dislav"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </Socials>
                </Row>
            </Wrapper>
        </Container>
    );
};

export default Footer;
