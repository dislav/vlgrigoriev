import Link from 'next/link';
import dayjs from 'dayjs';

import { Project } from 'contentlayer/generated';
import { WithClassName } from '@/shared/types';
import { ArrowBack, ArrowLink } from '@/shared/icons';
import { Container, Back, Content, Description, Title } from './Header.styled';

export default function Header({
    className,
    title,
    description,
    url,
    publishAt,
}: WithClassName<
    Pick<Project, 'title' | 'description' | 'url' | 'publishAt'>
>) {
    return (
        <Container
            className={className}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <Back>
                <Link href="/">{ArrowBack}</Link>
            </Back>
            <Content>
                <Description>
                    {dayjs(publishAt).format('YYYY')} • {description}
                </Description>
                <Title>{title}</Title>
                {url && (
                    <Link href={url} target="_blank">
                        Открыть проект
                        {ArrowLink}
                    </Link>
                )}
            </Content>
        </Container>
    );
}
