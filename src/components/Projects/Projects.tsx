'use client';

import { motion, Variants } from 'framer-motion';
import dayjs from 'dayjs';

import { Project } from 'contentlayer/generated';

import { Container, Wrapper, Title, Grid } from './Projects.styled';
import ProjectCard from '@/components/Projects/ProjectCard/ProjectCard';

interface IProjectList {
    className?: string;
    projects: Project[];
}

const Projects: React.FC<IProjectList> = ({ className, projects }) => {
    const card: Variants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.2, 0.85, 0.25, 1],
            },
        },
    };

    const sortProjects = projects.sort((a, b) => {
        const aDate = dayjs(a.publishAt);
        const bDate = dayjs(b.publishAt);

        if (aDate.isAfter(bDate)) {
            return -1;
        } else if (aDate.isBefore(bDate)) {
            return 1;
        }

        return 0;
    });

    return (
        <Container className={className} id="projects">
            <Wrapper>
                <Title
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                    transition={{ duration: 0.8, ease: [0.2, 0.85, 0.25, 1] }}
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
};

export default Projects;
