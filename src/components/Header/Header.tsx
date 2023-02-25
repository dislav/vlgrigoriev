import { Container, Wrapper, Logo, Menu, MenuItem } from './Header.styled';

interface IHeader {
    className?: string;
}

const Header: React.FC<IHeader> = ({ className }) => {
    return (
        <Container className={className}>
            <Wrapper
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.2, 0.85, 0.25, 1] }}
            >
                <Logo href="/">
                    <span>vlgrigoriev.</span> ©2023
                </Logo>
                <Menu>
                    <MenuItem href="/#projects">Проекты</MenuItem>
                    <MenuItem href="/#experience">Опыт</MenuItem>
                    <MenuItem href="/#contacts">Контакты</MenuItem>
                </Menu>
            </Wrapper>
        </Container>
    );
};

export default Header;
