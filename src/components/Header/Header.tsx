'use client';

import { Container, Wrapper, Logo, Menu, MenuItem } from './Header.styled';

interface HeaderProps {
    className?: string;
}

export default function Header({ className }: HeaderProps) {
    const onClickLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const id = (e.target as HTMLAnchorElement).href.split('#')[1];
        if (id && document.getElementById(id)) {
            document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Container className={className}>
            <Wrapper
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Logo href="/">
                    <span>vlgrigoriev.</span> ©{new Date().getFullYear()}
                </Logo>
                <Menu>
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
            </Wrapper>
        </Container>
    );
}
