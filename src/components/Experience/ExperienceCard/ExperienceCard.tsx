import dayjs from 'dayjs';

import { Job } from 'contentlayer/generated';
import { IAccordion } from '@/components/Accordion/Accordion';

import {
    Container,
    Header,
    Title,
    Content,
    Body,
    Footer,
    Link,
    Icon,
    Tags,
    Tag,
} from './ExperienceCard.styled';
import { Link as LinkIcon } from '@/icons';

interface IExperienceCard extends Omit<IAccordion, 'header' | 'children'> {
    job: Job;
}

const ExperienceCard: React.FC<IExperienceCard> = ({ job, ...props }) => {
    const startDate = dayjs(job.startDate).format('YYYY');
    const endDate = job.endDate
        ? dayjs(job.endDate).format('YYYY')
        : 'Настоящее время';

    return (
        <Container
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
            <Content>
                <Body dangerouslySetInnerHTML={{ __html: job.body.html }} />
                <Footer>
                    <Link href={job.url} target="_blank">
                        <Icon>{LinkIcon}</Icon>
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
            </Content>
        </Container>
    );
};

export default ExperienceCard;
