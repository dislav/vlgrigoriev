import dayjs from 'dayjs';

import { Job } from 'contentlayer/generated';
import { AccordionProps } from '@/shared/ui';
import { Accordion } from '@/shared/ui';
import { ArrowLink } from '@/shared/icons';

import {
    Container,
    Header,
    Title,
    Body,
    Footer,
    Link,
    Icon,
    Tags,
    Tag,
} from './ExperienceCard.styled';

interface ExperienceCardProps
    extends Omit<AccordionProps, 'header' | 'children'> {
    job: Job;
}

export default function ExperienceCard({ job, ...props }: ExperienceCardProps) {
    const startDate = dayjs(job.startDate).format('YYYY');
    const endDate = job.endDate
        ? dayjs(job.endDate).format('YYYY')
        : 'Настоящее время';

    return (
        <Accordion
            {...props}
            header={
                <Header>
                    {startDate} — {endDate}
                    <Title>
                        {job.title} / {job.company}
                    </Title>
                </Header>
            }
        >
            <Container>
                <Body dangerouslySetInnerHTML={{ __html: job.body.html }} />
                <Footer>
                    <Link href={job.url} target="_blank">
                        <Icon>{ArrowLink}</Icon>
                        {job.urlText}
                    </Link>
                    {job.tags && (
                        <Tags>
                            {job.tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </Tags>
                    )}
                </Footer>
            </Container>
        </Accordion>
    );
}
