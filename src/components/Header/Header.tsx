'use client';

import {
    Transition,
    TargetAndTransition,
    useMotionValueEvent,
    useScroll,
} from 'framer-motion';
import { useTheme } from 'styled-components';
import { rgba } from 'polished';

import {
    Container,
    Wrapper,
    Line,
    Avatar,
    Logo,
    Name,
    Menu,
    MenuItem,
} from './Header.styled';
import { useToggleable } from '@/hooks';

import memoji from '../../../public/images/memoji.jpg';
import Image from '@/components/Image/Image';

interface HeaderProps {
    className?: string;
}

export default function Header({ className }: HeaderProps) {
    const { colors } = useTheme()!;
    const { isOpen, onOpen, onClose } = useToggleable();

    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, 'change', (latestValue) => {
        if (latestValue > 0.25) {
            onOpen();
        } else {
            onClose();
        }
    });

    const transition: Transition = {
        duration: 0.4,
        ease: [0.2, 0.85, 0.25, 1],
    };

    const animate: TargetAndTransition = {
        background: isOpen
            ? rgba(colors.purple80, 0.7)
            : rgba(colors.purple80, 0),
        borderRadius: isOpen ? '40px' : '8px',
        backdropFilter: isOpen ? 'blur(16px)' : 'blur(0px)',
    };

    const onClickLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const id = (e.target as HTMLAnchorElement).href.split('#')[1];
        if (id && document.getElementById(id)) {
            document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Container
            className={className}
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            data-animate={isOpen}
            layout
            layoutRoot
        >
            <Wrapper transition={transition} layout>
                <Line animate={animate} transition={transition} layout>
                    <Logo href="/" transition={transition} layout>
                        <Avatar
                            initial={{ width: 0, opacity: 0 }}
                            animate={{
                                width: isOpen ? 36 : 0,
                                opacity: isOpen ? 1 : 0,
                            }}
                            transition={{ ...transition, duration: 0.3 }}
                            layout
                        >
                            <Image src={memoji} alt={'Vladislav Grigoriev'} />
                        </Avatar>
                        <Name layout>
                            vlgrigoriev.{' '}
                            <span>©{new Date().getFullYear()}</span>
                        </Name>
                    </Logo>
                    <Menu transition={transition} layout>
                        <MenuItem href="/#home" onClick={onClickLink}>
                            Главная
                        </MenuItem>
                        <MenuItem href="/#projects" onClick={onClickLink}>
                            Проекты
                        </MenuItem>
                        <MenuItem href="/#experience" onClick={onClickLink}>
                            Опыт
                        </MenuItem>
                    </Menu>
                </Line>
            </Wrapper>
        </Container>
    );
}
