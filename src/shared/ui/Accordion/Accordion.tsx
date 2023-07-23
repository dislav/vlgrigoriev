import { TargetAndTransition } from 'framer-motion';

import { Container, Header, Icon, Content } from './Accordion.styled';
import { AccordionProps } from './types';

export default function Accordion({
    className,
    header,
    children,
    expanded,
    onClick,
}: AccordionProps) {
    const onClickHandler = () => {
        onClick(expanded);
    };

    const display: TargetAndTransition = expanded
        ? { display: 'block' }
        : { transitionEnd: { display: 'none' } };

    const animate: TargetAndTransition = {
        ...display,
        height: expanded ? 'auto' : 0,
        opacity: expanded ? 1 : 0,
    };

    return (
        <Container className={className} $expanded={expanded}>
            <Header onClick={onClickHandler}>
                {header}
                <Icon />
            </Header>
            <Content animate={animate} transition={{ duration: 0.3 }}>
                {children}
            </Content>
        </Container>
    );
}
