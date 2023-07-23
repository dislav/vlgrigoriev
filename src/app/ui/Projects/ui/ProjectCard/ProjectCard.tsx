import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';

import { Project } from 'contentlayer/generated';
import { Container, Preview, Content, Title, Year } from './ProjectCard.styled';

interface ProjectCardProps extends Project {
    className?: string;
}

export default function ProjectCard({
    className,
    title,
    image,
    publishAt,
    _raw,
}: ProjectCardProps) {
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
}
