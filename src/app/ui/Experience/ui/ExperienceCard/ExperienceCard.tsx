import dayjs from 'dayjs';

import { Job } from 'contentlayer/generated';
import { WithClassName } from '@/shared/types';
import { ArrowLink } from '@/shared/icons';
import {
    Container,
    Content,
    Icon,
    Info,
    Company,
    LinkIcon,
    Dates,
} from './ExperienceCard.styled';
import Image from 'next/image';

export default function ExperienceCard({
    className,
    title,
    company,
    icon,
    url,
    startDate,
    endDate,
}: WithClassName<Job>) {
    return (
        <Container className={className}>
            <Content>
                <Icon href={url} target="_blank">
                    <Image src={icon} alt={title} width={56} height={56} />
                </Icon>
                <Info>
                    <Company href={url} target="_blank">
                        {company}
                        <LinkIcon>{ArrowLink}</LinkIcon>
                    </Company>
                    {title}
                </Info>
            </Content>
            <Dates>
                {dayjs(startDate).format('YYYY')} —{' '}
                {endDate ? dayjs(endDate).format('YYYY') : 'Настоящее время'}
            </Dates>
        </Container>
    );
}
