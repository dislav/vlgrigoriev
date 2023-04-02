import { Container, Header, Icon, Content } from './Accordion.styled';

export interface IAccordion {
    className?: string;
    header: React.ReactNode;
    children: React.ReactNode;
    expanded: boolean;
    onClick: (isExpended: boolean) => void;
}

const Accordion: React.FC<IAccordion> = ({
    className,
    header,
    children,
    expanded,
    onClick,
}) => {
    const onClickHandler = () => {
        onClick(expanded);
    };

    return (
        <Container className={className}>
            <Header onClick={onClickHandler}>
                {header}
                <Icon expanded={expanded} />
            </Header>
            <Content
                initial={false}
                animate={
                    expanded
                        ? {
                              display: 'block',
                              height: 'auto',
                              opacity: 1,
                          }
                        : {
                              height: 0,
                              opacity: 0,
                              transitionEnd: {
                                  display: 'none',
                              },
                          }
                }
                transition={{ duration: 0.3 }}
            >
                {children}
            </Content>
        </Container>
    );
};

export default Accordion;
