import { Container } from './Section.styled';

export default function Section({ children }: { children: React.ReactNode }) {
    return (
        <Container
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -260px 0px' }}
        >
            {children}
        </Container>
    );
}
