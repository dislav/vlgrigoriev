import { WithClassName } from '@/shared/types';
import { Container } from './Section.styled';

interface SectionProps {
    children: React.ReactNode;
}

export default function Section({
    className,
    children,
}: WithClassName<SectionProps>) {
    return (
        <Container
            className={className}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
        >
            {children}
        </Container>
    );
}
