import Link from 'next/link';
import dayjs from 'dayjs';

import { Project } from 'contentlayer/generated';
import { WithClassName } from '@/shared/types';
import { ArrowBack, ArrowLink } from '@/shared/icons';
import {
    Container,
    Back,
    Content,
    ContentWrapper,
    Subtitle,
    Title,
    Description,
} from './Details.styled';

export default function Details({
    className,
    title,
    description,
    tags,
    url,
    publishAt,
}: WithClassName<
    Pick<Project, 'title' | 'description' | 'tags' | 'url' | 'publishAt'>
>) {
    return (
        <Container
            className={className}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <Back>
                <Link href="/">{ArrowBack}</Link>
            </Back>
            <Content>
                <ContentWrapper>
                    <Subtitle>
                        {dayjs(publishAt).format('YYYY')}
                        {tags?.length ? ` • ${tags.join(', ')}` : ''}
                    </Subtitle>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </ContentWrapper>
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
