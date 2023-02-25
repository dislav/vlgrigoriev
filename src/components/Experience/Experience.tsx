'use client';

import { useState } from 'react';

import {
    Container,
    Wrapper,
    Title,
    List,
    AccordionHeader,
    AccordionPeriod,
    AccordionTitle,
    AccordionContent,
} from './Experience.styled';
import Accordion from '@/components/Accordion/Accordion';

interface IExperience {
    className?: string;
}

const Experience: React.FC<IExperience> = ({ className }) => {
    const [activeId, setActiveId] = useState<number | null>(0);

    const onClick = (id: number) => (isExpended: boolean) => {
        setActiveId(!isExpended ? id : null);
    };

    return (
        <Container className={className} id="experience">
            <Wrapper>
                <Title>Опыт работы</Title>
                <List>
                    <Accordion
                        expanded={activeId === 0}
                        onClick={onClick(0)}
                        header={
                            <AccordionHeader>
                                <AccordionPeriod>
                                    2021 – Настоящее время
                                </AccordionPeriod>
                                <AccordionTitle>
                                    Frontend Developer / Websky
                                </AccordionTitle>
                            </AccordionHeader>
                        }
                    >
                        <AccordionContent>
                            Разработка корпоративных сайтов, интерфейсов на
                            Javascript, React/Next.js. Тимлидинг, наставничество
                            и управление персоналом, помощь в проведении
                            собеседований, курирование и обучение стажеров,
                            участие в спринтах.
                        </AccordionContent>
                    </Accordion>
                    <Accordion
                        expanded={activeId === 1}
                        onClick={onClick(1)}
                        header={
                            <AccordionHeader>
                                <AccordionPeriod>2019 – 2021</AccordionPeriod>
                                <AccordionTitle>
                                    Frontend Developer / Only
                                </AccordionTitle>
                            </AccordionHeader>
                        }
                    >
                        <AccordionContent>
                            Разработка корпоративных сайтов, интерфейсов на
                            Javascript, React/Next.js. Тимлидинг, наставничество
                            и управление персоналом, помощь в проведении
                            собеседований, курирование и обучение стажеров,
                            участие в спринтах.
                        </AccordionContent>
                    </Accordion>
                </List>
            </Wrapper>
        </Container>
    );
};

export default Experience;
