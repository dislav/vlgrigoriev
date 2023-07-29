'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
    Target,
    Transition,
    useMotionValueEvent,
    useScroll,
} from 'framer-motion';
import { useTheme } from 'styled-components';
import { rgba } from 'polished';

import { Breakpoint } from '@/shared/styles';
import { useMediaQuery, useScrollTo, useToggleable } from '@/shared/hooks';
import {
    Container,
    Wrapper,
    Row,
    Avatar,
    Logo,
    Name,
    Menu,
    MenuItem,
    Burger,
} from './Header.styled';
import { MobileMenu } from './ui';

export default function Header() {
    const containerRef = useRef<HTMLElement>(null);

    const { colors } = useTheme()!;

    const { isOpen, onOpen, onClose } = useToggleable();
    const {
        isOpen: isOpenMenu,
        onClose: onCloseMenu,
        onToggle,
    } = useToggleable();

    const isTablet = useMediaQuery({ minWidth: Breakpoint.MD });
    useEffect(() => {
        if (isTablet && isOpenMenu) {
            onCloseMenu();
        }
    }, [isTablet]);

    const { registerAnchor } = useScrollTo({
        offset: () => {
            if (!isTablet && containerRef.current) {
                onCloseMenu();

                const height =
                    containerRef.current.getBoundingClientRect().height;

                return -height - 24;
            }

            return -132;
        },
        transition: { duration: 1, ease: [0.2, 0.85, 0.25, 1] },
    });

    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (isTablet) {
            if (latest > 0.25) {
                onOpen();
            } else {
                onClose();
            }
        }
    });

    const animate: Target = {
        background: isTablet
            ? rgba(colors.purple80, isOpen ? 0.7 : 0)
            : rgba(colors.purple80, 0),
        backdropFilter: isTablet ? `blur(${isOpen ? 16 : 0}px)` : 'blur(0px)',
    };

    const transition: Transition = {
        duration: 0.4,
        ease: [0.2, 0.85, 0.25, 1],
    };

    const menuItems = (
        <>
            <MenuItem {...registerAnchor('home')}>Главная</MenuItem>
            <MenuItem {...registerAnchor('projects')}>Проекты</MenuItem>
            <MenuItem {...registerAnchor('experience')}>Опыт</MenuItem>
        </>
    );

    return (
        <Container
            $isOpen={isOpen}
            $isOpenMenu={isOpenMenu}
            ref={containerRef}
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            layoutRoot
            layout
        >
            <Wrapper transition={transition} layout>
                <Row animate={animate} transition={transition} layout>
                    <Logo href="/" transition={transition} layout>
                        <Avatar
                            initial={{ width: 0, scale: 0, opacity: 0 }}
                            animate={{
                                width: isOpen ? 36 : 0,
                                scale: isOpen ? 1 : 0,
                                opacity: isOpen ? 1 : 0,
                            }}
                            transition={transition}
                            layout
                        >
                            <Image
                                src="/images/memoji.jpg"
                                alt="Vladislav Grigoriev"
                                width={36}
                                height={36}
                            />
                        </Avatar>
                        <Name transition={transition} layout>
                            vlgrigoriev.{' '}
                            <span>©{new Date().getFullYear()}</span>
                        </Name>
                    </Logo>
                    <Menu transition={transition} layout>
                        {menuItems}
                    </Menu>
                    <Burger isOpen={isOpenMenu} onClick={onToggle} />
                </Row>
                <MobileMenu isOpen={isOpenMenu}>{menuItems}</MobileMenu>
            </Wrapper>
        </Container>
    );
}
