import { WithClassName } from '@/shared/types';
import { Container, Box, Line } from './Burger.styled';

interface BurgerProps {
    isOpen: boolean;
    onClick?: () => void;
}

export default function Burger({
    className,
    isOpen,
    onClick,
}: WithClassName<BurgerProps>) {
    return (
        <Container className={className} $isOpen={isOpen} onClick={onClick}>
            <Box>
                <Line />
                <Line />
                <Line />
            </Box>
        </Container>
    );
}
