'use client';

import { motion, Variants } from 'framer-motion';

import { allProjects } from 'contentlayer/generated';
import { Container, Wrapper, Title, Grid } from './Projects.styled';
import { ProjectCard } from './ui';

export default function Projects() {
    const sortProjects = allProjects.sort((a, b) =>
        new Date(a.publishAt) > new Date(b.publishAt) ? -1 : 1
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

    return (
        <Container id="projects">
            <Wrapper>
                <Title
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                >
                    Проекты
                </Title>
                <Grid>
                    {sortProjects.map((project) => (
                        <motion.div
                            key={project._id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={card}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </Grid>
            </Wrapper>
        </Container>
    );
}
