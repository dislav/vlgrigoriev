import Link from 'next/link';
import dayjs from 'dayjs';

import { Project } from 'contentlayer/generated';

import { Container, Preview, Content, Title, Year } from './ProjectCard.styled';
import Image from '@/components/Image/Image';

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
        <Link className={className} href={`/${_raw.flattenedPath}`}>
            <Container initial="initial" whileHover="scale">
                <Preview>
                    <Image src={image} alt={title} fill />
                </Preview>
                <Content>
                    <Title>{title}</Title>
                    <Year>{dayjs(publishAt).format('YYYY')}</Year>
                </Content>
            </Container>
        </Link>
    );
};

export default ProjectCard;
