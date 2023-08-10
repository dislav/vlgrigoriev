import Link from 'next/link';
import dayjs from 'dayjs';
import Balancer, { Provider } from 'react-wrap-balancer';

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
                    <Provider>
                        <Subtitle>
                            {dayjs(publishAt).format('YYYY')}
                            {tags?.length ? ` • ${tags.join(', ')}` : ''}
                        </Subtitle>
                        <Title>
                            <Balancer>{title}</Balancer>
                        </Title>
                        <Description>
                            <Balancer>{description}</Balancer>
                        </Description>
                    </Provider>
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
