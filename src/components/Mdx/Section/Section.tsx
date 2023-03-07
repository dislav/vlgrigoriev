import { Container } from './Section.styled';

export default function Section({ children }: { children: React.ReactNode }) {
    return (
        <Container
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
                duration: 1.3,
                ease: [0.2, 0.85, 0.25, 1],
                delay: 0.15,
            }}
        >
            {children}
        </Container>
    );
}
