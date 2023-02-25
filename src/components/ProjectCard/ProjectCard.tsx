import Image from 'next/image';

import { Project } from 'contentlayer/generated';

import { Container, Preview, Content, Title, Year } from './ProjectCard.styled';

interface IProjectCard extends Project {
    className?: string;
}

const ProjectCard: React.FC<IProjectCard> = ({
    className,
    title,
    image,
    year,
    _raw,
}) => {
    return (
        <Container
            className={className}
            href={`/projects/${_raw.flattenedPath}`}
        >
            <Preview>
                <Image src={image} alt={title} fill />
            </Preview>
            <Content>
                <Title>{title}</Title>
                <Year>{year}</Year>
            </Content>
        </Container>
    );
};

export default ProjectCard;
