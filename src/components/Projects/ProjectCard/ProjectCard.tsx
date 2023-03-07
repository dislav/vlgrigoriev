import Image from 'next/image';
import dayjs from 'dayjs';

import { Project } from 'contentlayer/generated';

import { Container, Preview, Content, Title, Year } from './ProjectCard.styled';

interface IProjectCard extends Project {
    className?: string;
}

const ProjectCard: React.FC<IProjectCard> = ({
    className,
    title,
    image,
    publishAt,
    _raw,
}) => {
    return (
        <Container className={className} href={`/${_raw.flattenedPath}`}>
            <Preview>
                <Image src={image} alt={title} fill />
            </Preview>
            <Content>
                <Title>{title}</Title>
                <Year>{dayjs(publishAt).format('YYYY')}</Year>
            </Content>
        </Container>
    );
};

export default ProjectCard;
