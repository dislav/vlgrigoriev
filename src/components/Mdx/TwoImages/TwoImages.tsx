import { Variants } from 'framer-motion';

import { Container, Card, CardWrapper } from './TwoImages.styled';

interface TwoImagesProps {
    first: React.ReactNode;
    second: React.ReactNode;
}

export default function TwoImages({ first, second }: TwoImagesProps) {
    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <Container
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ staggerChildren: 0.2 }}
        >
            <Card variants={variants}>
                <CardWrapper>{first}</CardWrapper>
            </Card>
            <Card variants={variants}>
                <CardWrapper>{second}</CardWrapper>
            </Card>
        </Container>
    );
}
