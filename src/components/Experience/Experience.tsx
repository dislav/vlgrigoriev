'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

import { Job } from 'contentlayer/generated';

import { Container, Wrapper, Title, List } from './Experience.styled';
import ExperienceCard from '@/components/Experience/ExperienceCard/ExperienceCard';

interface IExperience {
    className?: string;
    jobs: Job[];
}

const Experience: React.FC<IExperience> = ({ className, jobs }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const sortJobs = jobs.sort((a, b) =>
        new Date(a.startDate) > new Date(b.startDate) ? -1 : 1
    );

    const card: Variants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const onClick = (id: number) => (isExpended: boolean) => {
        setActiveIndex(!isExpended ? id : null);
    };

    return (
        <Container className={className} id="experience">
            <Wrapper>
                <Title
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                >
                    Опыт работы
                </Title>
                <List>
                    {sortJobs.map((job, index) => (
                        <motion.div
                            key={job._id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={card}
                        >
                            <ExperienceCard
                                expanded={activeIndex === index}
                                onClick={onClick(index)}
                                job={job}
                            />
                        </motion.div>
                    ))}
                </List>
            </Wrapper>
        </Container>
    );
};

export default Experience;
